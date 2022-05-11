import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { FC, useEffect, useRef } from "react";
import { LayoutGrade } from "recoilStates/layout";
import { PointTitle } from "./About";
const useStyles = makeStyles(theme => ({
  boxDiv: {
    width: '100%',
    height: '100%',
    paddingBottom: "44%",
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      paddingBottom: "130%",
    },
  },
  absoluteBox:{
    position:"absolute", 
    bottom:"30px", 
    right:"70px",
    padding:theme.spacing(4, 7.5, 4, 7 ),
    [theme.breakpoints.down(LayoutGrade.SM)]:{
      position:"relative", 
      bottom:"0", 
      right:"0",
      boxShadow:'0px 3px 6px rgba(0,0,0,0.16)'
    },
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      padding:theme.spacing(2, 1, 2, 1.5 ),
    }
  },
  labelTxt:{
    width:"115px",
    fontWeight:600,
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      width:"80px",
    }
  }
}))


const companyInfo = [
  { label: "ADDRESS", content: "인천시 연수구 동곡재로 160(동춘동), 1층" },
  { label: "TEL", content: "032-814-2204" },
  { label: "FAX", content: "032-814-2204" },
]

const Location = () => {
  const classes = useStyles();
  const boxRef = useRef<HTMLDivElement>(null);
  // const size = useRecoilValue(windowLayoutSelector);
  let map: any;
  const initMap = () => {

    if (boxRef.current) {
      const geocoder = new google.maps.Geocoder();

      map = new google.maps.Map(boxRef.current, {
        zoom: 16,
      });


      geocoder.geocode({ address: "인천시 연수구 동곡재로 160" }, (results, status) => {
        if (status === "OK" && results) {
          map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        }
      });
    }
  }

  useEffect(() => {
    if (window && window.google && !map) initMap();
  }, [])
  return (<Box>
    <Box textAlign="center">
      {/* <Typography variant="subtitle1" className="bold">목적</Typography> */}
      <PointTitle txt="오시는 길" />
      <Box position="relative" marginTop={9}>

        <div ref={boxRef} className={classes.boxDiv} />

        <Box borderLeft="6px solid #FF6F00" className={classes.absoluteBox}  bgcolor="white">
          {companyInfo.map((info, i) => <InfoItem key={i} label={info.label} content={info.content} />)}
        </Box>
      </Box>
    </Box>

  </Box>)
}
export default Location;

type InfoItemProps = {
  label: string;
  content: string;
}
const InfoItem: FC<InfoItemProps> = ({ label, content }) => {
  const classes = useStyles();
  return (<Box textAlign="left" display="flex" >
    <Typography variant="body1" color="textPrimary" className={classes.labelTxt} >{label}</Typography>
    <Typography style={{flexGrow:1}} variant="body1" color="textSecondary" className="regular" >{content}</Typography>
  </Box>)
}