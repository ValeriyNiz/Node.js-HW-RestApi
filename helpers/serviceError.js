const statusMessages = {
    404: "Not found 2"
};
class ServiceError extends Error {
    constructor(status, message = statusMessages[status]) {
        super(message)
        this.status = status
    }
}

module.exports = ServiceError;