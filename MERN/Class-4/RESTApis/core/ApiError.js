class NotFoundError extends Error{
    constructor(message='Not found') {
        super(message)
        this.status = 404;
    }
}

class BadRequestError extends Error{
    constructor(message='Bad Request') {
        super(message);
        this.status = 400;
    }
}

class InternalServerError extends Error{
    constructor(message='Inter error') {
        super(message);
        this.status = 500;
    }
}

module.exports = {
    NotFoundError,
    BadRequestError,
    InternalServerError
}