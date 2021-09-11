const STATUS_MESSAGES = {
  200: Status.SUCCESS,
  400: Status.BAD_REQUEST,
  500: Status.ERROR
};

const RESPONSE_HEADERS: ResponseHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
};
