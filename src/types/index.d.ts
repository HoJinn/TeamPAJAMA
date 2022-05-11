declare module '*.png';
// declare module "*.png" {
//   const content: string;
//   export default content;
// }
// declare module "*.png" {
//   const value: any;
//   export = value;
// }
declare module '*.jpg';
// declare module "*.jpg" {
//   const content: string;
//   export default content;
// }
// declare module '*.json';
declare module '*.svg';
declare module '*.ico';

declare namespace NodeJS {
  interface ProcessEnv {
    /**동작 환경
     */
    NEXT_PUBLIC_ACTIVE: string;

    /**로그인 정보를 저장할 쿠키 키
     */
    NEXT_PUBLIC_SESSION_NAME: string;

    /**특정한 동작을 완료 후 이동할 페이지
     * 주소를 저장할 쿠키 키
     */
    NEXT_PUBLIC_BOOKMARK_PAGE: string;

    /**아이디 기억을 위한 쿠키 키
     */
    NEXT_PUBLIC_REMEMBER_ID: string;

    /**동작하는 프론트 URL
     */
    NEXT_PUBLIC_LOCAL: string;

    /**API URL
     */
    NEXT_PUBLIC_API_URL: string;

    /**API 이미지 URL + 경로
     */
    NEXT_PUBLIC_API_IMG: string;

    /**구글 맵 키
     */
    NEXT_PUBLIC_GOOGLE_MAP_KEY: string;
  }
}