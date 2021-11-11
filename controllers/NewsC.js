const jwt = require('jsonwebtoken')
const News = require('../models/NewsM')
const upload = require('../services/Uploader')
const {newsSchema} = require('../services/Validator')

exports.news = async (req, res, next) => {
    const news = await News.query().select()
    console.log(news);
    res.status(200).json({news})
}

exports.create = async (req, res, next)=>{
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
    const news = await News.query()
    .insert({
        title_ru: data.title_ru, 
        title_uz: data.title_uz, 
        title_en: data.title_en, 
        image: uploadFiles, 
        content_ru: data.content_ru, 
        content_uz: data.content_uz, 
        content_en: data.content_en
    })
}

exports.update = async (req, res, next)=>{
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
    const news = await News.query()
    .insert({
        title_ru: data.title_ru, 
        title_uz: data.title_uz, 
        title_en: data.title_en, 
        image: uploadFiles, 
        content_ru: data.content_ru, 
        content_uz: data.content_uz, 
        content_en: data.content_en
    })
}