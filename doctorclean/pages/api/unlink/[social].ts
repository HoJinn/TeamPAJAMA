import { NextApiRequest, NextApiResponse } from "next";
import { defError, NextAxios } from "src/axios";
import { pick } from "src/util";


export default (req:NextApiRequest, res: NextApiResponse) => {
  
  const {social} = req.query;
  if(social === 'naver'){
    naverUnlink(req, res);
  }else if(social === 'kakao'){
    kakaoUnlink(req, res);
  }else{
    res.status(400).json({
      code: -100,
      message: '지원하지 않는 소셜 로그인입니다'
    })
  }
}

const naverUnlink = (req:NextApiRequest, res:NextApiResponse) => {
  const naverToken = pick(req.body, ['access_token']);
  if(!naverToken){
    res.status(400).json({
      code: -1,
      message: "프로퍼티 부족합니다"
    })
    return;
  }
  const {access_token} = naverToken;
  const client_id = `${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
  const client_secret = `${process.env.NAVER_CLIENT_SECRET}`;
  const grant_type = 'delete';
  const reqUrl = `${process.env.NAVER_TOKEN_URL}`
  const params = {
    service_provider: 'NAVER',
    client_id, client_secret,
    grant_type,
    access_token
  }
  NextAxios().get(
    reqUrl,{params}
  ).then(naverRes => {
    const {data} =  naverRes;
    res.status(200).json(data);

  }).catch(naverErr => {
    const { data } = defError(naverErr);


    res.status(400).json({
      code: -100,
      entity: data
    })
  })
}
const kakaoUnlink = (req:NextApiRequest, res:NextApiResponse) => {
  const kakaoToken = pick(req.body, ['access_token']);
  if(!kakaoToken){
    res.status(400).json({
      code: -1,
      message: "프로퍼티 부족합니다"
    })
    return;
  }
  const {access_token} = kakaoToken;
  const reqHost = `${process.env.NEXT_PUBLIC_KAKAO_API_URL}`;

  const headers = {
    'Authorization': `Bearer ${access_token}`
  }

  NextAxios().post(
    `${reqHost}/v1/user/unlink`,
    undefined, {headers}
  ).then(kakaoRes => {
    const {data} =  kakaoRes;
    res.status(200).json(data);

  }).catch(kakaoErr => {
    const { data } = defError(kakaoErr);


    res.status(400).json({
      code: -100,
      entity: data
    })
  })
}
// const googleUnlink = (req:NextApiRequest, res:NextApiResponse) => {

// }