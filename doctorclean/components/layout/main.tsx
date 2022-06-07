import { FC } from 'react'
// import useStyles from '../../public/common'
import { Box, makeStyles } from '@material-ui/core';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Right from './rightBtn';
import Banner from 'assets/mainBanner.png';
import { LayoutGrade } from 'recoilStates/layout';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    width:"100%"
  },
  pcLayout: {
    display: "block",
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      display: "none",
    }
  },
  mobileLayout: {
    display: "none",
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      display: "block",
    }
  },
}));
export type LayoutProps = {
  qna?:Boolean;
};
const Layout: FC<LayoutProps> = ({ children,qna }) => {
  // const classes = useStyles();
  // const router = useRouter();
  // const windowLayout = useRecoilValue(windowLayoutSelector);
  // const {isMd,isDownSm} = useLayoutGrade();
  // const { grade } = windowLayout
  return (
    <Box
      // maxWidth="1920px"
      minWidth="360px"
      style={{ backgroundColor: "#fff" }}
      margin="0 auto"
      id="basicBox"
      width="100%"
      position="relative"
    >
      <Header />
      {qna ? (
        <Content>{children}</Content>
      ) : (
        <Pc>{children}</Pc>
      )}

      <Footer />
    </Box>
  );
}

export default Layout;
const Pc: FC = ({children}) => {
  const classes = useStyles();

return (
  <>
      <Box className={classes.pcLayout}>
        <Box
          style={{ backgroundImage: `url(${Banner})`, paddingBottom: "26%" }}
          className={classes.wrapper}
        ></Box>
        <Box display={"flex"} justifyContent="space-between">
          <Box width={"10%"}></Box>
          <Box width={"80%"} max-width={"1280px"}>
            <Content>{children}</Content>
          </Box>
          <Box width={"10%"}>
            <Right />
          </Box>
        </Box>
      </Box>
      <Box className={classes.mobileLayout}>
        <Box
          style={{ backgroundImage: `url(${Banner})`, paddingBottom: "26%" }}
          className={classes.wrapper}
        />
        <Box width={"100%"} max-width={"1280px"}>
          <Content>{children}</Content>
        </Box>
      </Box>
  </>
);

};