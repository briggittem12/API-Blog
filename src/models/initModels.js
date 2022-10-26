const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./post.models')

const initModels = () => {
    // 1 a muchos
    //? Una Publicacion, pertenece a un Usuario
    Posts.belongsTo(Users)
    //? Un usuario tiene muchas Publicaciones
    Users.hasMany(Posts)
    
    
    // 1 a muchos
     //? Una Publicación, pertenece a una Categoria
     Posts.belongsTo(Categories)
     //? Una Categoria, tiene muchas Publicaciones
     Categories.hasMany(Posts)
     
}

module.exports = initModels