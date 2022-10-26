const postsControllers = require('./posts.controller');
const { host } = require('../config')

const createNewPost = (req, res) => {
    const userId = req.user.id
    const { title, content, categoryId } = req.body
        if(title && content && categoryId){
            postsControllers.createPost({title, content, userId, categoryId})
                .then(data => res.status(201).json(data))
                .catch(err => res.status(400).json({message: err.message}))
        } else {
            res.status(400).json({
                message: 'Missing Data',
                fields: {
                    title: 'string',
                    content: 'string',
                    categoryId: 'uuid'
                }
            })
        }
}


// Offset es donde va a iniciar nuestra paginación
// Limit se encargara de mostrar los valores establecidos en el query
//? localhost:3000/api/v1/posts?offset=0&limit=50
const getAllPosts = (req, res) => {

    const offset = Number(req.query.offset) || 0
    const limit = Number(req.query.limit) || 10

    const urlBase = `${host}/api/v1/posts`


    postsControllers.getAllPosts(offset, limit)
        .then(data => {
            const nextPage = data.count - offset >= limit ? `${urlBase}?offset=${offset + limit}&limit=${limit}` : null
            const prevPage = offset - limit >= 0 ? `${urlBase}?offset=${offset - limit}&limit=${limit}` : null 
                res.status(200).json({
                    next: nextPage,
                    prev: prevPage,
                    items: data.count,
                    offset,
                    limit,
                    results: data.rows
        })})
        .catch(err => res.status(400).json({message: err.message}))
}


const getPostsById = (req, res) => {
    const id = req.params.id
        postsControllers.getPostsById(id)
}


const getPostsByCategory = (req, res) => {
    const categoryId = req.params.id
    postsControllers.getPostsByCategory(categoryId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: err.message}))
}



module.exports = {
    createNewPost,
    getAllPosts,
    getPostsByCategory
}