import { FC } from 'react'
// import useStyles from '../../public/common'
import { Box, Button, Typography } from '@material-ui/core';
import Phone from 'assets/icon/phone.png';
import Talk from 'assets/icon/talk.png';
import Blog from 'assets/icon/blog.png';
import Insta from 'assets/icon/insta.png';
import Write from 'assets/icon/write.png';
import { useRouter } from 'next/router';

const btnArr=[
  {title:'고객상담전화',subTitle:'010.6483.1286',link:'tel',icon:Phone},
  {title:'카카오톡상담',link:'http://pf.kakao.com/_Qpptb',icon:Talk},
  {title:'네이버 블로그',link:'https://blog.naver.com/doctorclean0',icon:Blog},
  {title:'인스타그램',link:'https://www.instagram.com/doctorclean0/',icon:Insta},
  {title:'견적문의',link:'/qna',icon:Write},
]
const Layout: FC = () => {
  // const windowLayout = useRecoilValue(windowLayoutSelector);
  // const {isMd,isDownSm} = useLayoutGrade();
  // const { grade } = windowLayout
  const btnMap = btnArr.map((obj,i)=>{
    return <BtnCard key={i} title={obj.title} subTitle={obj.subTitle} link={obj.link} icon={obj.icon}/>
  })
  return (
    <Box width={"100%"} minWidth="110px" paddingBottom={3} paddingTop={1}>
      <Box padding={1}  paddingTop={0} bgcolor={"#B3EAFC"} width="110px" />
      <Box width="110px" bgcolor={"#B3EAFC"} textAlign='center' paddingBottom={1} borderBottom={'1px solid #fff'}>
        <Typography style={{color:'#007EF3'}} className='bold' component={'span'}>닥터</Typography>
        <Typography component={'span'} className='bold'>크린</Typography>
      </Box>
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
  const router = useRouter();
  const handleClickFn = (e: string) => {
    if (e === "/qna") {
      router.push(e);
    } else if (e === "tel") {
      console.log("010-6483-1286");
    } else {
      window.open(e);
    }
  };
  return (
    <Box
      padding={1}
      borderBottom={"1px solid #fff"}
      bgcolor={"#B3EAFC"}
      width="110px"
      textAlign={"center"}
    >
      <Button onClick={() => handleClickFn(link)}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img src={icon} width={"30px"} />
          <Typography
            variant="body1"
            className='bold'
            style={{ fontSize: "11px", paddingTop: "10px" }}
          >
            {title}
          </Typography>
          {subTitle ? (
            <Typography variant="body2" className='bold' style={{ fontSize: "11px" }}>
              {subTitle}
            </Typography>
          ) : undefined}
        </Box>
      </Button>
    </Box>
  );
};

