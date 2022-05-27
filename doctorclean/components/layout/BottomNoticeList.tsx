import React, { useState, useEffect } from 'react';
import { Box, IconButton, makeStyles, Typography } from "@material-ui/core"
import Swipper from "components/slider/swipper"
import { Artwork } from "recoilStates/artwork"
import dayjs from 'dayjs'
import { onlyClasse } from 'public/common'
import PlusIcon from 'assets/icon_sharp_plus.png'
import { NextAxios } from "src/axios"
import { AxiosResponse } from 'axios';
import { LayoutGrade } from 'recoilStates/layout';
import { useRouter } from 'next/dist/client/router';
const useStyles = makeStyles(theme => ({
  ...onlyClasse,
  wrapper:{
    padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      padding:`${theme.spacing(2)}px ${theme.spacing(3)}px`,
    }
  },
  itemsBox:{
    paddingLeft:theme.spacing(8),
    paddingRight:theme.spacing(5),
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      paddingLeft:theme.spacing(2),
      paddingRight:theme.spacing(2),
    }
  },
  title: {
    ...onlyClasse.textOverFlow,
    fontWeight: 300
  },
  regDate: {
    whiteSpace: 'nowrap',
    padding: `0 ${theme.spacing(3)}px`,
    fontWeight: 300,
    display:"block",
    [theme.breakpoints.down(LayoutGrade.XS)]:{
      display:"none",
    }
  },
  pointer: {
    cursor: 'pointer'
  },
  a: {
    color: "inherit",
    position: "relative",
    textDecoration: "none",
    display:'flex',
    justifyContent:"space-between", 
    alignItems:"center",
    height:'30px',
    // border:'3px solid black',
    "&:focus":{
      border:'3px solid black',
    }
  }
}))
const BottomNoticeList = () => {
  const [noticeList, setNoticeList] = useState<Array<Artwork>>([]);
  const classes = useStyles();
  const router=useRouter();

  const getList = async () => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/client.bbs.notice/page`)
      .then((res: AxiosResponse) => {
        if (res.status === 200) setNoticeList(res.data.list);
        else setNoticeList([])
      })
      .catch(_err => {
        setNoticeList([])
      })
  }
  useEffect(() => {
    if (noticeList.length < 1) getList()
  }, [])

  return (
    <Box display="flex" alignItems="center" className={classes.wrapper} maxWidth="1280px" width="100%" margin="0 auto" >
      <Typography style={{ whiteSpace: "nowrap" }} variant="subtitle2" className="bold">공지사항</Typography>
      <Box className={classes.itemsBox} overflow="hidden" flexGrow={1} >
        <Swipper auto={true} containerStyle={{ height: "30px" }} axis="y">
          {noticeList.map((info: Artwork, i: number) => <a title="페이지 이동" tabIndex={0} key={i} className={classes.a} href={`/notice/${info.uk}`}>
            <Typography className={classes.title} variant="body1">{info.title}</Typography>
            <Typography className={classes.regDate} variant="body1">{dayjs(info.reg_date).format("YYYY-MM-DD")}</Typography>
          </a>)}
        </Swipper>
      </Box>
      <IconButton title="공지사항 더 보기 페이지 이동" onClick={_=>router.push("/notice")}><img className={classes.pointer} src={PlusIcon} alt="" /></IconButton>
    </Box>
  )
}
export default BottomNoticeList