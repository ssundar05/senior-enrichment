const Sequelize = require('sequelize')
const db = require('../index')

var Student = db.define("Student", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }, 
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0,
            max: 4
        }
    },
    fullName: {
        type: Sequelize.VIRTUAL,
        get(){
            return this.firstName + ' ' + this.lastName
        }
    },
})


module.exports = Student

// - Students
// * have profile info including:
//   * firstName - not empty or null
//   * lastName - not empty or null
//   * email - not empty or null; valid email
//   * gpa - decimal between 0.0 and 4.0
// * must have a virtual 'name' field which is the concatenation of firstName and lastName
// * must be assigned to a campus


