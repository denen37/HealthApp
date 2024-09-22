const app = require('./src/app')
const sequelize = require('./src/config/database');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;


sequelize.sync({ force: false })
    .then(() => {
        console.log('Database connected and models synced.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to the database', err));

//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
