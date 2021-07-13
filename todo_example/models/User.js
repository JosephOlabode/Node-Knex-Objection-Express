const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    // jsonSchema used for input validation. This is not the database schema!
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                id: {type: 'integer'},
                name: {type: 'string', minLenth:1, maxLength: 255},
                age: {type: 'number'} //optional
            }
        }
    }
}

// Export User Class
module.exports = User;