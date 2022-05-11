import { Box, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import AspectRatioBox from "components/shape/aspectRatioBox";
import { useEffect, useState } from "react";

import { FC } from "react";
import { LayoutGrade } from "recoilStates/layout";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    width:"100%"
  },
  textWrapper: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    color: 'white',
    textAlign:'center'
  },
  contentText:{
    whiteSpace:'pre-line',
    fontWeight:600,
    lineHeight:1.3,
    paddingTop:theme.spacing(5)
  }
}));

export type defaultProps = {
  title: string,
  img: string,
  subTitle?:string,
  content?:string,
  size:"LG"|"SM"|"MD"
}

const TitleBox: FC<defaultProps> = ({ img, title, subTitle, content, size }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [ratio,setRatio]=useState<number>(0.37)
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  useEffect(() => {
    if (size === 'LG') {
      if (mobileFlag)
        setRatio(0.4)
      else
        setRatio(0.37)
    } else if (size === 'SM') {
      if (mobileFlag)
        setRatio(0.4)
      else
        setRatio(0.21)
    } else {
      if (mobileFlag)
        setRatio(0.93)
      else
        setRatio(0.26)
    }
  }, [size,mobileFlag])

  return (
    <AspectRatioBox width="100%" aspectRatio={ratio}>
      <Box height="100%" className={classes.wrapper} style={{ backgroundImage: `url(${img})` }}>
        <Box className={classes.textWrapper} flexDirection='column' display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
          <Typography variant="subtitle2" className='times'>{subTitle}</Typography>
          <Typography variant="subtitle1" className='bold'>{title}</Typography>
          <Typography className={classes.contentText} variant="subtitle1">{content}</Typography>
        </Box>

      </Box>
    </AspectRatioBox>);

}
export default TitleBox;