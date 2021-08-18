enum ResType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIRes<T> {
  status: number;
  types: ResType;
  data: T;
}

const enumResponse: APIRes<string> = {
  status: 200,
  types: ResType.FAILURE,
  data: 'test',
};

console.log(enumResponse);
