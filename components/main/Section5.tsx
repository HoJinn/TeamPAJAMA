import { FC } from "react";
// import useStyles from './mainCss'
import Section5Img_1 from "assets/img_sec5_1.png";
import Section5Img_2 from "assets/img_sec5_2.png";
import Section5Img_3 from "assets/img_sec5_3.png";
import ImgSub1 from "assets/imgSub1_sec5.png";
import ImgSub2 from "assets/imgSub2_sec5.png";
// import ImgSub3 from "assets/subImg2.png";
import ImgSub3 from "assets/img_main_leaf.png";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import { LayoutGrade } from "recoilStates/layout";
import { useRouter } from "next/router";
export type DataProps = {
  size: string;
};
const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    // backgroundColor: `#fcf`,
  },
  wrapper: {
    paddingTop:theme.spacing(5),
    paddingBottom:theme.spacing(5),
    flexDirection: "row",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      flexDirection: "column",
      paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    }
  },
  leftBox: {
    padding:`${theme.spacing(3)}px 0`,
    paddingRight: theme.spacing(1),
    width: '50%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      padding:`${theme.spacing(1)}px 0 ${theme.spacing(3)}px 0`,
      paddingRight: 0,
      width: "100%"
    }
  },

  rightBox: {
    // width: '560px',
    width: 'calc(50% - 25px)',
    paddingTop: theme.spacing(17),
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: "100%",
      paddingLeft: theme.spacing(0),
      paddingTop: theme.spacing(0),
    }
  },
  rightInfoBox:{
    padding:theme.spacing(5),
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      padding:theme.spacing(2.5),
    }
  },
  backImg: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    width: '100%',
    paddingBottom: '50%'
  },
  backImg2: {
    backgroundImage: `url(${Section5Img_3})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    width: '100%',
    height: "100%",
    // paddingBottom: '105%'
  },
  faxBox: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      marginTop: theme.spacing(3.5),
    }
  },
  subImg: {
    position: 'absolute',
    right: '-25px',
    bottom: '-10px',
    zIndex: 3,
    height: "200px",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      right: '15px',
      bottom: '-35px',
      height: "140px",
    }
  }
}));
const Section5: FC<DataProps> = () => {
  const classes = useStyles();
  const router =useRouter();
  // let topHeight
  // if (size === 'xl') { topHeight = '660px' } else if (size === 'lg') { topHeight = '494px' } else if (size === 'md') { topHeight = '494px' } else { topHeight = '555px' }
  return (
    <section className={classes.sectionStyle}>
      <Box
        paddingX={3}
        className={classes.wrapper}
        display="flex"
        justifyContent="space-beetween"
        width="100%"
        maxWidth="1280px"
        margin="0 auto"
      >
        <Box className={classes.leftBox}>

          <Button onClick={() => alert("준비중입니다.") }
            className={classes.backImg}
            style={{ cursor:"pointer", backgroundImage: `url(${Section5Img_2})`,marginBottom:'24px' }}
            title="집밥 메뉴중 가장 인기있는 메뉴를 지금 바로 만나보세요. Daon mall 새창열기"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              padding={5}
            >
              {/* <Typography>Daon Mall</Typography>
                <Typography>
                  집밥 메뉴중 가장 인기있는 메뉴를
                  <br />
                  지금 바로 만나보세요.
                </Typography> */}
            </Box>
          </Button>

          <Button onClick={_=>router.push("/brand")}
            className={classes.backImg}
            title="회사소개를 안내해드립니다. info 페이지 이동"
            style={{cursor:"pointer", backgroundImage: `url(${Section5Img_1})` }}>
            <Box
              textAlign="right"
              display="flex"
              justifyContent="flex-end"
              flexDirection="column"
              alignItems="bottom"
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              padding={5}
            >
              {/* <Typography>Info</Typography>
                <Typography>회사소개를 안내해드립니다.</Typography> */}
            </Box>
          </Button>
        </Box>

        <Box className={classes.rightBox} >
          <Box className={classes.backImg2}>
            <img className={classes.subImg} src={ImgSub3} alt="" />
            <Box
              className={classes.rightInfoBox}
              position="relative"
              width="100%"
              height="100%"
              display='flex'
              flexDirection='column'
              // justifyContent='space-between'
              zIndex={2}
            >
              <Box textAlign='right' style={{ color: '#fff' }}>
                <Typography className='times' variant='subtitle1'>Contact</Typography>
                <Typography className="regular" variant='body1'>
                  협동조합다온
                  <br />
                  본점 지점 동일 인천시 연수구 동곡재로 160(동춘동), 1층
                </Typography>
              </Box>
              <Box className={classes.faxBox}>
                <Sec5Card type={1} title='E-mail' content='coopdaon@naver.com' />
                <Sec5Card type={2} title='FAX' content='032·814·2204' />
              </Box>
            </Box>
          </Box>
        </Box>


      </Box>
    </section>
  );
};

export default Section5;
export type Section5Props = {
  type: number
  title: string
  content: string
};

const cardStyles = makeStyles(theme => ({

  wrapper: {
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px `,
    [theme.breakpoints.down(LayoutGrade.XS)]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(2)}px `
    }
  },
  img: {
    width: "70px",
    [theme.breakpoints.down(LayoutGrade.XS)]: {
      width: "35px",
    }
  },
  a: {
    color: "inherit",
    position: "relative",
    textDecoration: "none",
    display:'block',
    "&:focus":{
      outline:'3px solid black',
    }
  }
}))
const Sec5Card: FC<Section5Props> = ({ type, title, content }) => {
  const classes = cardStyles()
  // const refData = type===1?`mailto:${content}`:`tel:${content}`
  const refData = `mailto:${content}`
  return (
    <Box border="1px solid #A2B19F" display='flex' color={"#fff"} className={classes.wrapper} alignItems='center'>
      <Box padding={1} display='flex' justifyContent='center' alignContent='center'>
        {/* {type===1?<MailOutlineIcon fontSize='large' style={{color:'#fff',fontSize:'60px'}}/>:<PrintIcon style={{color:'#fff',fontSize:'50px'}}/>} */}
        <img alt="" className={classes.img} src={type === 1 ? ImgSub1 : ImgSub2} />
      </Box>
      <Box paddingLeft={2}>
        <Typography variant='body1' className='regular times'>{title}</Typography>
        {type===1?<a className={classes.a} href={refData}><Typography className={`regular`} variant='body1'>{content}</Typography></a>
        :<Typography className={`times regular`} variant='body1'>{content}</Typography>}
      </Box>
    </Box>
  );
};