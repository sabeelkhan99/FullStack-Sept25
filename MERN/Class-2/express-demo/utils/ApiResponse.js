class SuccessResponse{
    constructor(success, message, data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
    
    static build(success, message, data) {
        return new SuccessResponse(success, message, data);
    }
}

module.exports = {
    SuccessResponse
}