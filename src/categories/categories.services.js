const categoryControllers = require('./categories.controller');


const getAllCategorys = (req, res) => {
    categoryControllers.getAllCategorys()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: err.message}))
}


const categoryById = (req, res) => {
    const id = req.params.id
        categoryControllers.categoryById(id)
            .then(data => {
                if(data){
                    res.status(200).json(data)
                } else {
                    res.status(404).json({message: 'Invalid ID'})
                }
            })
            .catch(err => res.status(400).json({message: err.message}))
}


const createCategory = (req, res) => {
    const { name } = req.body
    
        if(name){
            categoryControllers.createCategory(name)
                .then(data => res.status(201).json(data))
                .catch(err => res.status(400).json({message: err.message}))
        } else {
            res.status(400).json({message: 'Missing Data'})
        }
}



module.exports = {
    getAllCategorys,
    categoryById,
    createCategory
}