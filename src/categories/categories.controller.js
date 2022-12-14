const Categories = require('../models/categories.models')

const getAllCategorys = async() => {
   const data = await Categories.findAll()
        return data
}

const categoryById = async(id) => {
    const data = await Categories.findOne({
        where: {
            id
        }
    })
        return data 
}

const createCategory = async(name) => {
    const data = await Categories.create({name})
        return data
}


module.exports = {
    getAllCategorys,
    categoryById,
    createCategory
}