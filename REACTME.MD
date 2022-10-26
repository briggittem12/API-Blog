# SKELETON

- Express
- PostgreSQL
- Sequelize ORM 
- Autenticación con Tokens
- Bcrypt para hashear contraseñas
- Uso de Json Web Token

---

- Rutas de Login y creación de usuario (register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autenticacion y manejo de permisos
- /users/:id DELETE, PUT
- /users/me


Orden
1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas


# Blog API

- Front: 
    - Obtener todas las publicaciónes
    - Obtener una en especifico
    - Obtener todas las categorias
    - Obtener todos los post de una categoria en especifico
    - Obtener todos los posts que he creado
    - Obtener todos los posts de un usuario en especifico
    - Podemos paginar los posts
    - Acciones de CRUD sobre Posts
    - Crear categorias


```json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data": [
            {
               "id" : "a860986d-2570-4f39-afe6-c30fb74f350e",
               "title" : "ejemplo",
               "content" : "lorem ipsum",
               "createdBy": {
                    "id" : "5b7cc060-3597-4946-bb9b-3a54e2098f82",
                    "name" : "Sahid",
                    "email" : "sahid.kick@academlo.com"
               },
               "category" :{
                    "id" :4,
                    "name" : "Tecnologia"
               }
            }
        ]
    }

```

