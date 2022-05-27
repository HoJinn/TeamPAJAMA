
const KAKAO_JS = '73bccbd03b89ea722264d30756316b10';
declare global {
    interface Window {
      Kakao: any;
      FB:any;
    }
  }
  
export type objProps={
    title:string,
    contents:string,
    img:string,
    webUrl:string,
    mobileUrl:string
}
export type defaultProps={
    type?:string,
    obj:objProps
}
export const share = ({type="kakao", obj}:defaultProps) => {
    if (type == "kakao") {
        window.Kakao.cleanup()
        window.Kakao.init(KAKAO_JS)
        window.Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: obj.title // 콘텐츠의 타이틀
                    ,
                description: obj.contents // 콘텐츠 상세설명
                    ,
                imageUrl: obj.img // 썸네일 이미지
                    ,
                link: {
                    mobileWebUrl: obj.mobileUrl // 모바일 카카오톡에서 사용하는 웹 링크 URL
                        ,
                    webUrl: obj.webUrl // PC버전 카카오톡에서 사용하는 웹 링크 URL
                }
            },
            social: {
                likeCount: 0 // LIKE 개수
                    ,
                commentCount: 0 // 댓글 개수
                    ,
                sharedCount: 0 // 공유 회수
            },
            buttons: [{
                title: "이동" // 버튼 제목
                    ,
                link: {
                    mobileWebUrl: obj.mobileUrl // 모바일 카카오톡에서 사용하는 웹 링크 URL
                        ,
                    webUrl: obj.webUrl // PC버전 카카오톡에서 사용하는 웹 링크 URL
                }
            }]
        });
    } 
    // else if ('facebook') {
    //     window.FB.init({ // 페이스북 인증 초기화
    //         appId: '2500498186833787',
    //         xfbml: true,
    //         version: 'v6.0'
    //     });
    //     window.FB.ui({
    //         method: 'feed',
    //         picture: obj.img,
    //         name: obj.title,
    //         description: obj.contents,
    //         //caption: document.location.href,// 설명
    //         link: obj.webUrl
    //     }, function (response) {

    //     });

    // }
}