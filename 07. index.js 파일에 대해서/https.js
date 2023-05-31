const { lib } = require("./lib");

function makeRequest(url, data) {
  // 1. 요청을 보내기
  lib.request.send(url, data);
  // 2. 복호화한 데이터 return 하기
  return lib.response.read();
}
const responseData = makeRequest("https://naver.com", "any data");
// console.log(responseData);
console.log(require.cache);
