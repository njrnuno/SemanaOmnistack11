const crypto = require('crypto');
const connection = require('../database/connection');

module.exports= {
    //Listagem de todas as Ongs
    async index (request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    //Criação de uma nova Ong
    async create(request, response){
         
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        try{
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });

            return response.json({ id });
        }catch{
            console.log('ERROR CREATE ONG');
        }
    }
}