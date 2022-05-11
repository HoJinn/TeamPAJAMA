import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core"
import clsx from 'clsx'
// import { useSelector } from "react-redux";
// import { rootState } from "reducers";
import {  Artworks } from 'recoilStates/artwork'
import React, { FC } from 'react';
import { getFullUrl } from "src/util";

import { Variant } from "@material-ui/core/styles/createTypography";
import { Attachment } from "recoilStates/comm";
import AspectRatioBox from "components/shape/aspectRatioBox";
const useStyles = makeStyles(() => ({
  parent: {
    position: 'relative',
    marginBottom: '20px'
  },
  pcSize: {
    width: '33.3333333%',
  },
  mobileSize: {
    width: '50%',
  },
  wrapper: {
    position: 'relative',
    cursor:"pointer",
    width: '100%',
    margin: '0 auto',
  },
  card: {
    cursor: 'pointer',
    boxShadow: 'none',
    backgroundColor:"transparent",
    // border: '1px solid #E2E2E2',
    borderRadius: 0
  },
  img: {
    padding: 0,
    position: 'absolute', left: 0, right: 0, height: '100%'
  },
  title: {
    lineHeight:1,
  },
  aborder: {
    textDecoration: "none",
    color: '#000'
  },
}))
type TxtColorProps = 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

type ComponentProps = {

  info?: Artworks,
  img?:Attachment,
  topTxt?: string;
  topVariant?: Variant;
  topTxtColor?: TxtColorProps;

  midTxt?: string;
  midVariant?: Variant;
  midTxtColor?: TxtColorProps;


  bottomTxt?: string;
  bottomVariant?: Variant;
  bottomTxtColor?: TxtColorProps;

  handleClick?: Function;
  // handleDialog: Function,
}
const RecipeRowCard: FC<ComponentProps> = ({handleClick,children, img, topTxt, topTxtColor="textPrimary", topVariant="body1", midTxtColor="textPrimary", 
midTxt, midVariant="body1", bottomTxt, 
bottomTxtColor="textPrimary", bottomVariant="body1" }) => {
  const classes = useStyles();
  const keyup = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key && e.key.toLowerCase() === "enter") click();
  }
  const click = () => {
    if (handleClick) handleClick()
  }
  return (
    <Box display="flex" flexDirection="row" className={clsx(classes.parent)}>
      {/* <Card onKeyDown={keyup} tabIndex={0} onClick={click} className={`${itemDirection} ${classes.card}`}> */}
        <Box width="50%" onKeyDown={keyup} tabIndex={0} onClick={click} className={classes.wrapper}>
          <AspectRatioBox width="100%" aspectRatio={1}>
            <img src={getFullUrl(img, 480)} height="100%" width="100%"/>
          </AspectRatioBox>
          {/* <CardMedia className={classes.img}
            image={getFullUrl(img, 480)}
          /> */}
        </Box>
        <Box marginTop={2} width="50%" paddingX={1}>
        <Typography className={classes.title} color={topTxtColor} gutterBottom variant={topVariant}>
          {topTxt ? topTxt : undefined}
        </Typography>
        <Typography className={classes.title} gutterBottom color={midTxtColor} variant={midVariant}>
          {midTxt ? midTxt : undefined}
        </Typography>
        <Typography className={classes.title} gutterBottom color={bottomTxtColor} variant={bottomVariant}>
          {bottomTxt ? bottomTxt : undefined}
        </Typography>
          {children}
        </Box>
      {/* </Card> */}
    </Box>
  )
}

export default RecipeRowCard;
