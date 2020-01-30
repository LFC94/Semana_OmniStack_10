
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        let { latitude, longitude, techs } = req.query;
        let arraWhere = {};

        if (techs != undefined) {
            const techsArray = parseStringAsArray(techs);
            Object.assign(arraWhere, {
                techs: {
                    $in: techsArray,
                }
            })
        }

        if (latitude != undefined || longitude != undefined) {
            Object.assign(arraWhere, {
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 10000,
                    },
                },
            });
        }

        const devs = await Dev.find(
            arraWhere
        )

        return res.json({ dev: devs });
    },
}