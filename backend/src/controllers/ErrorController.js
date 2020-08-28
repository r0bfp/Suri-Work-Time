const Error = require('../models/Error')

module.exports = {
    async create(req, res){
        const {
            nome,
            descricao,
        } = req.body;

        if(!nome){
            return res.status(400).json({ error: "Nome do erro inválido. O nome do deve ser obrigatóriamente preenchido." });
        }

        try{
           await Error.create({ nome, descricao });
           return res.json({ "OK": true });
        } catch (err){
            return res.json(err)
        }
    },
    async list(req, res){
        try {
            const data = await Error.findAll();

            return res.json(data);
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    }
}