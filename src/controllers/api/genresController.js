const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                 res.status(200).json({genres, status:200})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                 res.status(200).json({
                    genre,
                    status:200
                });
            });
    }

}

module.exports = genresController;