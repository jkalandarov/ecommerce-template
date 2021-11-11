const jwt = require('jsonwebtoken')
const CatalogM = require('../models/CatalogM')
const {productSchema} = require('../services/Validator')

exports.items = async (req, res, next) => {
    const items = await CatalogM.query().select()
    items.forEach(elem => {
        elem.price = JSON.parse(elem.price)
    })
    console.log(items)
    res.status(200).json({ items })
}

exports.create = async (req, res, next)=> {
    const images = req.files
    const uploadFiles = []
    for (var i = 0; i <images.length; i++){
        uploadFiles.push(images[i].destination + images[i].filename)
    }
   
    if (images.length < 1) {
        res.json({message: 'An error occured while uploading files!'})
    } else {
        if (req.files == undefined) res.json({ msg: 'Error: No file selected!'})
        else console.log({ 
            msg: 'File uploaded!', 
            files: [...uploadFiles]
        })
    }

    const data = await productSchema.validateAsync(req.body)
    //const data = req.body
    
    const new_item = await CatalogM.query()
    .insert({
        name: data.name,
        description: data.description,
        size: data.size,
        color: data.color,
        fabric: data.fabric,
        density: data.density,
        composition: data.composition,
        price: JSON.stringify(data.price),
        in_stock: data.in_stock,
        category_id: data.category_id,
        room_id: data.room_id,
        images: uploadFiles.toString()
    })
    
    new_item.price = JSON.parse(new_item.price)
    console.log(new_item);
    res.json(new_item)
}