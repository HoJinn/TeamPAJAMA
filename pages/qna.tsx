import { NextPage } from "next";
import Layout from "components/layout/main";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Right from 'components/layout/rightBtn';

import { LayoutGrade } from "recoilStates/layout";
import AspectRatioBox from "components/shape/aspectRatioBox";
import BackImg from "assets/qna_back_img.png";

const useStyles = makeStyles((_theme) => ({
  wrapper: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  },
}));

const Brand: NextPage = () => {
  const theme = useTheme();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const classes = useStyles();
  
  return (
    <Layout qna={true}>
      <AspectRatioBox width={"100%"} aspectRatio={0.45}>
        <Box
          width="100%"
          height="100%"
          className={classes.wrapper}
          style={{ backgroundImage: `url(${BackImg})`, position: "relative" }}
        >
          <Box position={'absolute'} right='20px' top='20px'>
            <Right />
          </Box>
        </Box>
      </AspectRatioBox>
    </Layout>
  );
};

export default Brand;
