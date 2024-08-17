export class CustomError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class NotFoundError extends CustomError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}

export class ValidationError extends CustomError {
    constructor(message = "Validation failed") {
        super(message, 400);
    }
}

export class AlreadyExistsError extends CustomError {
    constructor(message = "Already Exists") {
        super(message, 400);
    }
}


export class UnauthorizedError extends CustomError {
    constructor(message = "Unauthorized access") {
        super(message, 401);
    }
}

export class InternalServerError extends CustomError {
    constructor(message = "Internal Server Error") {
        super(message, 500);
    }
}