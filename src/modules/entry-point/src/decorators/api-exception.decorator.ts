import { HttpException, HttpStatus } from '@nestjs/common';
import { ProductOutOfStockException } from '@/core-lib/core/exceptions';

type ExceptionResponse = {
  status: number;
  message: string;
  description?: string;
};

class ExceptionHandler {
  static handleNotFound(req: any, error: Error): ExceptionResponse {
    return {
      status: HttpStatus.NOT_FOUND,
      message: error.message,
    };
  }

  static handleOutOfStock(req: any, error: Error): ExceptionResponse {
    return {
      status: HttpStatus.CONFLICT,
      message: error.message,
    };
  }
}

export function ApiExceptionHandler() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        // Handle known exceptions (e.g., HttpException)
        if (error instanceof HttpException) {
          throw error;
        }
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        if (error instanceof ProductOutOfStockException) {
          statusCode = HttpStatus.CONFLICT;
        }

        // Handle unknown exceptions
        const message = error.message || 'An unexpected error occurred';
        throw new HttpException({ statusCode, message }, statusCode);
      }
    };

    return descriptor;
  };
}
