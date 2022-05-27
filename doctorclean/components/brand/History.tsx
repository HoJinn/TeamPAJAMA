import { Box, makeStyles, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { PointTitle } from "./About";
import { defSuccess, NextAxios } from "src/axios";
import { AxiosResponse } from "axios";
import { Artworks } from "recoilStates/artwork";
import { useEffect } from "react";

const History = () => {
  const [list, setList] = useState<Array<Artworks>>([]);
  const getList = () => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/client.history/page`,{params:{root:""}})
      .then(res => {
        const { status, data } = defSuccess(res)
        if (status === 200) setList(data.list)
        else setList([])
      })
      .catch(_err => {
        setList([])
      })
  }
  useEffect(() => {
    getList()
  }, [])
  return (<Box display="flex" flexDirection="column" alignItems="center">
    <Box marginBottom={9} textAlign="center">
      <PointTitle txt="주요연혁" />
    </Box>
    <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start">
    {list.map((item,i)=><HistoryRootItem lineFlag={i===list.length-1?false:true} key={i} item={item}/>)}
    </Box>
  </Box>)
}
export default History;


const useHistoryStyles=makeStyles(theme=>({
  ul:{
    margin:0,
    width:"100%",
    paddingBottom:theme.spacing(8),
    color:theme.palette.text.secondary
  },
  li:{
    marginBottom:"20px",
    wordBreak:"break-all"
  }
}))

type ItemProps = {
  item: Artworks;
  lineFlag?:boolean;
}
const HistoryRootItem:FC<ItemProps>=({item,lineFlag=true})=>{
  const classes=useHistoryStyles();
  const [list, setList] = useState<Array<Artworks>>([])
  const getList = async () => {
    await NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/${item ? item.uk : 'null'}/direct`, { params: { detail: "content" } })
      .then((res: AxiosResponse) => {
        const { status, data } = defSuccess(res)
        if (status === 200) setList([...data.list].reverse())
        else setList([])
      })
      .catch(_err => {
        setList([])
      })

  }
  useEffect(() => {
    getList()
  }, [])
  return(
    <Box width="100%" display="flex">
      <Box paddingRight={5}>
        <Typography variant="subtitle1" className="bold times" style={{ lineHeight: 1 }}>{item.title}</Typography>
      </Box>

      <Box width="100%" display="flex" alignItems="baseline" >
        <Box paddingRight={5} height="100%" display="flex" flexDirection="column" alignItems="center">
          <Box width="10px" height="10px" bgcolor="black" borderRadius="100%"></Box>
          <Box display={lineFlag?"block":"none"} width="1px" height="calc(100% - 10px)" bgcolor="black" />
        </Box>
        <ul className={classes.ul}>
          {list&&list.length>0
          ?list.map((sub,i)=><li key={i} className={classes.li}><Typography className="regular" variant="body1">{sub.title}월 {sub.content}</Typography></li>)
          :<li className={classes.li}><Typography className="regular" variant="body1">&nbsp;</Typography></li>}
        
        </ul>

      </Box>
    </Box>
  )
}