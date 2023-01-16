const statusMessages = {
    400: "Bad request",
    401: "Unauthorized",
    404: "Not found",
    409: "Conflict",
};
class ServiceError extends Error {
    constructor(status, message = statusMessages[status]) {
        super(message)
        this.status = status
    }
}

module.exports = ServiceError;