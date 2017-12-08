const Sequelize = require('sequelize')
const db = require('../index')

var Campus = db.define("Campus", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/college%20ready.jpg?itok=EmMM5Dal"
    }
})

module.exports = Campus




// - Campuses
// * have profile info including:
//   * name - not empty or null
//   * imageUrl - default value
//   * description - extremely large text
// * can have many students assigned (may have none)