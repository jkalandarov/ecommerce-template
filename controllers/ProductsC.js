const jwt = require('jsonwebtoken')
const CatalogM = require('../models/CatalogM')
const upload = require('../services/Uploader')
const {productSchema} = require('../services/Validator')

exports.items = async (req, res, next) => {
    const {item} = req.params  
    const items = await ProductsM.query()
    .select(
        'products.name_ru as name_ru', 'products.name_uz as name_uz',
        'products.name_en as name_en', 'products.isAvailable',
        'products.isHit', 'products.isNew', 
        'products.desc_ru', 'products.desc_uz',
        'products.desc_en', 'products.color_ru',
        'products.color_uz', 'products.color_en',
        'products.size_ru', 'products.size_uz',
        'products.size_en', 'products.fabric_ru',
        'products.fabric_uz', 'products.fabric_en',
        'products.created_at', 'products.updated_at',
        'catalog.api_name as category'
        )
        .innerJoin('catalog', 'products.catalog_id', 'catalog.id')
        .where({api_name: item}).skipUndefined()
    console.log(items)
    res.status(200).json({ items })
}

exports.params = async (req, res, next) => {
    const {item} = req.params  
    const items = await ProductsM.query()
    .select(
        'products.name_ru as name_ru', 'products.name_uz as name_uz',
        'products.name_en as name_en', 'products.isAvailable',
        'products.isHit', 'products.isNew',
        'products.desc_ru', 'products.desc_uz',
        'products.desc_en', 'products.color_ru',
        'products.color_uz', 'products.color_en',
        'products.size_ru', 'products.size_uz',
        'products.size_en', 'products.fabric_ru',
        'products.fabric_uz', 'products.fabric_en',
        'products.created_at', 'products.updated_at',
        'catalog.api_name as category'
        )
        .innerJoin('catalog', 'products.catalog_id', 'catalog.id')
        .where({api_name: item})
    console.log(items)
    res.status(200).json({ items })
}

exports.create = async (req, res, next)=> {
    const images = req.files
    const uploadFiles = []
    for (var i = 0; i <images.length; i++){
        uploadFiles.push(images[i].destination + images[i].filename)
    }
    console.log(uploadFiles);
    if (!images) {
        res.json({message: 'An error occured!'})
    } else {
        if (req.files == undefined) res.json({ msg: 'Error: No file selected!'})
        else res.json({ 
            msg: 'File uploaded!', 
            // file: images.forEach(elem => elem.filename )
        })
        console.log('Successfully uploaded');
    }

    const data = await productSchema.validateAsync(req.body)   
    
    const new_item = await CatalogM.query()
    .insert({
        name: data.name,
        description: data.description,
        size: data.size,
        images: uploadFiles,
        color: data.color,
        fabric: data.fabric,
        density: data.density,
        composition: data.composition,
        price: data.price,
        in_stock: data.in_stock,
        category_id: data.category_id,
        room_id: data.room_id
    })
    console.log(new_item);
}

exports.update = async (req, res, next)=> {
    const images = req.files
    const uploadFiles = []
    for (var i = 0; i <images.length; i++){
        uploadFiles.push(images[i].destination + images[i].filename)
    }
    console.log(uploadFiles);
    if (!images) {
        res.json({message: 'An error occured!'})
    } else {
        if (req.files == undefined) res.json({ msg: 'Error: No file selected!'})
        else res.json({ 
            msg: 'File uploaded!', 
            // file: images.forEach(elem => elem.filename )
        })
        console.log('Successfully uploaded');
    }

    const data = await productSchema.validateAsync(req.body)
    const new_item = await ProductsM.query()
    .update({
        name_ru: data.name_ru,
        name_uz: data.name_uz,
        name_en: data.name_en,
        images: uploadFiles,
        isAvailable: data.isAvailable,
        isHit: data.isHit,
        isNew: data.isNew,
        desc_ru: data.desc_ru,
        desc_uz: data.desc_uz,
        desc_en: data.desc_en,
        color_ru: data.color_ru,
        color_uz: data.color_uz,
        color_en: data.color_en,
        size_ru: data.size_ru,
        size_uz: data.size_uz,
        size_en: data.size_en,
        fabric_ru: data.fabric_ru,
        fabric_uz: data.fabric_uz,
        fabric_en: data.fabric_en
    })
    console.log(new_item);
}