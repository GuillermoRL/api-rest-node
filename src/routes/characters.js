const { Router } = require('express');
const router = Router();
const _ = require('underscore');

var characters = require('./sample.json');

router.get('/', (req, res) => {
    res.json(characters);
});

router.post('/', (req, res) => {
    const { name, status, species, type, gender, image } = req.body;
    if (!name || !status || !species || !gender || !image) {
        return res.status(500).json({ msg: 'missing params' });
    }
    let id = characters.length;
    characters.push({ ...req.body, id });
    res.status(200).json(characters);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, status, species, type, gender } = req.body;
    if (!name || !status || !species || !gender) {
        return res.status(500).json({ msg: 'missing params' });
    }
    _.each(characters, (character, index) => {
        if (character.id == id) {
            character.name = name;
            character.status = status;
            character.species = species;
            character.type = type;
            character.gender = gender;
        }
    });
    res.status(200).json(characters);

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    characters = characters.filter(item => item.id != id);
    res.status(200).json(characters);

});

module.exports = router;