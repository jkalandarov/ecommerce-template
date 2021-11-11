const express = require('express')
const router = express.Router()
const upload = require('../services/Uploader')
const bcrypt = require('bcrypt')
const { checkJwt } = require('../utils/middlewares')
const verify = require('../services/verifyToken')

const AuthC = require('../controllers/AuthC')
const HomeC = require('../controllers/HomeC')
const CatalogC = require('../controllers/CatalogC')
const ProductsC = require('../controllers/ProductsC')
const NewsC = require('../controllers/NewsC')
const SliderC = require('../controllers/SliderC')
const SearchC = require('../controllers/SearchC')
const OrderC = require('../controllers/OrderC')

router.post('/user/login', AuthC.login)
router.post('/user/register', AuthC.register)
router.post('/orders/place', verify, OrderC.place)



router.get('/home', HomeC.home)
router.get('/catalog', CatalogC.items)
router.get('/products', ProductsC.items)
router.get('/products/:item', ProductsC.params)
router.get('/news', NewsC.news)
router.get('/slider', SliderC.slides)
router.post('/search', SearchC.search)


/*====== Admin Panel ======*/
//Products
router.post('/catalog/add', upload.array('images', 10), CatalogC.create)
router.put('/catalog/update', upload.array('images', 10), CatalogC.create)

//News
router.post('/news/add', upload.array('images', 10), NewsC.create)
router.put('/news/update', upload.array('images', 10), NewsC.update)


module.exports = router
