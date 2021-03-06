const server = require('./src/app.js');
const sequelize = require('./src/db.js');

const port = process.env.PORT || 3001;

sequelize.sync().then(() => {
    server.listen(port, () => {
        console.log(`%s listening at ${port}`);
    });
});