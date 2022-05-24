import { FC } from 'react'
// import useStyles from '../../public/common'
import { Box, makeStyles } from '@material-ui/core';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Right from './rightBtn';
import Banner from 'assets/mainBanner.png';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    width:"100%"
  },
}));
export type LayoutProps = {
  qna?:Boolean;
};
const Layout: FC<LayoutProps> = ({ children,qna }) => {
  const classes = useStyles();

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
        <>
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
        </>
      )}

      <Footer />
    </Box>
  );
}

export default Layout;
