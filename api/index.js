const server = require('./src/app.js');
const { conn, Category } = require('./src/db.js');
const port = 3001;

conn.sync().then(() => {
    server.listen(port, () => {
        console.log(`%s listening at ${port}`);
    });
    // Category.findAll({ atributes: ['name'] })
    //     .then(categories => {
    //         console.log(categories)
    //     })   
});