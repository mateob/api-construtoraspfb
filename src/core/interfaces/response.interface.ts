type ResponseHeader = { [header: string]: string | number | boolean };
interface IResponseBody {
  data: any;
  message: string;
  status?: string;
}

interface IResponse {
  statusCode: number;
  headers: ResponseHeader;
  body: string;
}
