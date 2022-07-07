import ErrorHandler from '../interfaces/error.handler.interface';

const errorMessage = (status: number, message: string): ErrorHandler => ({
  name: 'Error',
  status,
  message,
});

export default errorMessage;
