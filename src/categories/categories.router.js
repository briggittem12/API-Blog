const categoryServices = require('./categories.services');

const router = require('express').Router()
const { getPostsByCategory } = require('../posts/posts.services')

router.route('/')
        .get(categoryServices.getAllCategorys)
        .post(categoryServices.createCategory)

router.get('/:id', categoryServices.categoryById)

router.get('/:id/posts', getPostsByCategory)  



module.exports = router



        