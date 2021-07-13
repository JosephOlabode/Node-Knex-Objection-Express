/**
 * Custome Objection.js error handler
 */

// Import all Error types
const {
    ValidationError,
    NotFoundError,
    DBError,
    ConstraintViolationError,
    UniqueViolationError,
    NotNullViolationError,
    ForeignKeyViolationError,
    CheckViolationError,
    DataError
} = require('objection');

/**
 * Our custom Error Handler
 * err and res are arguments coming from Express.js
 * Implement somewhere in the function a way for You, the
 * developer, to retrieve the error. That can be an log file or one
 * of the previously mentioned error monitoring products like PM2.
 */
function errorHandler(err, res) {
    // Handle Error with type ValidationError -> User input data was false
    if(err instanceof ValidationError) {
        switch(err.type) {
            case "ModelValidation":
                res.status(400).send({
                    message: err.message,
                    type: err.type,
                    data: err.data
                });
                break;
            case "RelationExpression":
                res.status(400).send({
                    message: err.message,
                    type: "RelationExpression",
                    data: {}
                });
                break;
            case "UnallowedRelation":
                res.status(400).send({
                    message: err.message,
                    type: err.type,
                    data: {}
                });
                break;
            case "InvalidGraph":
                res.status(400).send({
                    message: err.message,
                    type: err.type,
                    data: {}
                });
                break;
            default:
                res.status(400).send({
                    message: err.message,
                    type: "UnknownValidationError",
                    data: {}
                });
                break;
        } 
    } else if (err instanceof NotFoundError) {
        // Handle Error with type NotFoundError -> manually invoked using "throw new NotFoundError"
        res.status(404).send({
            message: err.message,
            type: "NotFound",
            data: {}
        });
    } else if (err instanceof UniqueViolationError) {
        // Handle Error with type UniqueViolationError -> database threw a constraint error
        res.status(409).send({
            message: err.message,
            type: "UniqueViolation",
            data: {
                columns: err.columns,
                table: err.table,
                constraint: err.constraint
            }
        });
    } else if (err instanceof NotNullViolationError) {
        // Handle Error with type NotNullViolationError -> database threw a constraint error
        res.status(400).send({
            message: err.message,
            type: "NotNullViolation",
            data: {
                column: err.column,
                table: err.table
            }
        });
    } else if(err instanceof ForeignKeyViolationError) {
        // Handle Error with type ForeignKeyViolationError -> database threw a constraint error
        res.status(409).send({
            message: err.message,
            type: "ForeignKeyViolation",
            data: {
                table: err.table,
                constraint: err.constraint
            }
        });
    } else if(err instanceof CheckViolationError) {
        // Handle Error with type ForeignKeyViolationError -> database threw a check constraint error; not available for MySQL
        res.status(400).send({
            message: err.message,
            type: "CheckViolation",
            data: {
                table: err.table,
                constraint: err.constraint
            }
        });
    } else if(err instanceof DataError) {
        // Handle Error with type DataError -> database threw a invalid data error
        res.status(400).send({
            message: err.message,
            type: "InvalidData",
            data: {}
        });
    } else if (err instanceof DBError) {
        // Handle Error with type DBError -> database threw an error too broad to handle specifically
        res.status(500).send({
            message: "Unknown Error",
            type: "UnknownDatabaseError",
            data: {}
        });
    } else {
        // Handle every other error generally
        res.status(500).send({
            message: "Unknown Error",
            type: "UnknownError",
            data: {}
        })
    }
}

module.exports = {
    errorHandler
}