/**
 * process 객체 실습 코드
 */
console.log(process.env); // 컴퓨터 환경과 관련된 정보를 가진 객체
console.log(process.version); // node.js의 버전
console.log(process.versions); // node.js와 연관된 프로그램들의 버전을 가진 객체
console.log(process.arch); // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform); // 플랫폼(win32/linux/sunos/freebsd/darwin)
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log(process.uptime()); // 현재 프로그램이 실행된 시간

if (process.platform === "darwin") {
  // macOS일 때 실행할 코드
  process.exit(-1); // 비정상 종료
} else {
  // Windows일 때 실행할 코드
//   process.exit();
  process.exit(0); // 정상 종료
}
