import { FC } from 'react'
// import useStyles from '../../public/common'
import { Box, Button, Typography } from '@material-ui/core';
import Phone from 'assets/icon/phone.png';
import Talk from 'assets/icon/talk.png';
import Blog from 'assets/icon/blog.png';
import Insta from 'assets/icon/insta.png';
import Write from 'assets/icon/write.png';
import Po from 'assets/icon/po.png';
import Logo from "assets/Logo.png";

const btnArr=[
  {title:'고객상담전화',subTitle:'010.6483.1286',link:'https://www.naver.com/',icon:Phone},
  {title:'카카오톡',subTitle:'오픈채팅문의',link:'https://www.naver.com/',icon:Talk},
  {title:'네이버 블로그',link:'https://www.naver.com/',icon:Blog},
  {title:'닥터크린',subTitle:'인스타그램',link:'https://www.naver.com/',icon:Insta},
  {title:'견적문의',link:'https://www.naver.com/',icon:Write},
  {title:'포트폴리오',link:'https://www.naver.com/',icon:Po},
]
const Layout: FC = () => {
  // const router = useRouter();
  // const windowLayout = useRecoilValue(windowLayoutSelector);
  // const {isMd,isDownSm} = useLayoutGrade();
  // const { grade } = windowLayout
  const btnMap = btnArr.map((obj,i)=>{
    return <BtnCard key={i} title={obj.title} subTitle={obj.subTitle} link={obj.link} icon={obj.icon}/>
  })
  return (
    <Box width={"100%"} minWidth="110px" paddingBottom={3} paddingTop={1}>
          <Box padding={1} bgcolor={"#B3EAFC"} width="110px"/>
          <img width={'110px'} src={Logo}/>
      <Box>{btnMap}</Box>
    </Box>
  );
};

export default Layout;

export type BtnData = {
  title: string
  subTitle?: string
  link: string
  icon: any
}
// const HotelCard:FC<HotelCardProps>=({title,content,day,year})=>{
const BtnCard: FC<BtnData> = ({ title, subTitle, link, icon }) => {
const handleClickFn=(e:string)=>{
console.log(e)
}
  return (
    <Box padding={1} borderBottom={"1px solid #fff"} bgcolor={"#B3EAFC"} width="110px" textAlign={'center'}>
      <Button onClick={()=>handleClickFn(link)}>
        <Box style={{display:'flex',flexDirection: 'column',textAlign:'center',alignItems:'center'}}>
        <img src={icon} width={"30px"} />
        <Typography variant="body2" style={{fontSize:'11px',paddingTop:'10px'}}>{title}</Typography>
        {subTitle ? (
          <Typography variant="body2" style={{fontSize:'11px'}}>{subTitle}</Typography>
        ) : undefined}
        </Box>
      </Button>
    </Box>
  );
}

