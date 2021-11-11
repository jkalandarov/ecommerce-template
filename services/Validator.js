const Joi = require('joi')

const productSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(10),
    size: Joi.string().min(10),
    color: Joi.string().min(1).max(255),
    fabric: Joi.string().min(1).max(255),
    density: Joi.string().min(1).max(255),
    composition: Joi.string().min(1).max(255),
    price: Joi.string().min(10).max(1000).required(),
    in_stock: Joi.string().alphanum().required(),
    category_id: Joi.string().alphanum().required(),
    room_id: Joi.string().alphanum().required(),
})
const newsSchema = Joi.object({
    title_ru: Joi.string().min(10).max(255).required(),
    title_uz: Joi.string().min(10).max(255).required(),
    title_en: Joi.string().min(10).max(255).required(),
    content_ru: Joi.string().min(10).max(500),
    content_uz: Joi.string().min(10).max(500),
    content_en: Joi.string().min(10).max(500)
})

module.exports = { productSchema, newsSchema }