const jwt = require('jsonwebtoken')
const SearchM = require('../models/SearchM')

exports.search = async (req, res, next) => {
    const searchQuery = req.body
    
    const result = await SearchM.query().select()
    .where('name_ru', 'like', `%${Object.values(searchQuery)}%`)
    
    console.log(result);
    res.status(200).json(result)
}

//`select * from products where name_ru like %${searchQuery}%`