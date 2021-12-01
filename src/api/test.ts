import request from '@/utils/request';

enum ApiPath {
  testAip = '/asdf/sdf',
}

interface Person {
  name: string;
}

export function testRequest(data: Person) {
  return request({
    url: ApiPath.testAip,
    method: 'POST',
    data,
  });
}
