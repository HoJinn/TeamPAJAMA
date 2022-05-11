import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Img1 from "assets/img_organi_pc.png"
import ImgMo from "assets/img_organi_mo.png"
import { PointTitle } from "./About";
import { LayoutGrade } from "recoilStates/layout";
const useStyles = makeStyles(_theme => ({
  hide: {
    position: 'absolute',
    left: '-9999px',
    overflow: 'hidden',
    width: '1px',
    height: '1px',
    lineHeight: '1px',
    fontSize: '1px'
  }
}))

const Organi = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.XS));
  return (<Box>
    <Box textAlign="center">
      {/* <Typography variant="subtitle1" className="bold">목적</Typography> */}
      <PointTitle txt="조직도" />
      <Box marginTop={7}>
        <img alt="하단내용 참고바랍니다" src={mobileFlag ? ImgMo : Img1} style={{ margin: '0 auto' }} width={mobileFlag ? "175px" : "100%"} />
        <ul style={{ listStyle: "none" }} className={classes.hide}>
          <li>
            대표
          </li>

          <li>
            사업
            <ul style={{ listStyle: "none" }}>
              <li>레시피</li>
              <li>집밥 메뉴</li>
              <li>공유부엌</li>
            </ul>
          </li>

          <li>
            운영
            <ul style={{ listStyle: "none" }}>
              <li>홍보</li>
              <li>업무지원</li>
            </ul>
          </li>

        </ul>
      </Box>
    </Box>


  </Box>)
}
export default Organi;