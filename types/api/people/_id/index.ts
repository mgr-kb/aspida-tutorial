export type Methods = {
  get: {
    query?: {
      count?: number;
    }
    // query:
    resBody: {
      name: string;
      height: string;
      mass: string;
    }
  }
}
// OpenAPIから生成可能 openapi2aspida