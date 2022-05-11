import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { AxiosError, AxiosResponse } from "axios";
import RecipeCard from "components/card/RecipeCard";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Artworks } from "recoilStates/artwork";
import { ListPage } from "recoilStates/comm";
import { defSuccess, NextAxios } from "src/axios";
import TimeIcon from "assets/icon_time.png"
import LevelIcon from "assets/icon_cook_cap.png"
import { getFullUrl } from "src/util";
import {onlyClasse} from'public/common'
import NoImg from 'assets/icon_no_image.png'
import theme from "theme/theme";
import { LayoutGrade } from "recoilStates/layout";

export type RecipeProperties = {
  difficulty: string;
  subtitle?: string;
  time: string;
}
const useStyles = makeStyles(_theme => ({
  ...onlyClasse,
  numberBox: {
    backgroundColor: "#333333",
    borderBottomRightRadius: "30px",
    "&.best": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      borderBottomRightRadius: "10px",

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
const BestList = () => {
  const [list, setList] = useState<Array<Artworks<RecipeProperties>>>([]);
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const classes = useStyles()
  useEffect(() => {
    clientQuery.mutate();
  }, [])
  const clientQuery = useMutation(() =>
    // NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/menus/root/direct`, { params: { metadatas: 'siteMap' } })
    NextAxios()
      .get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/client.recipes/page`, { params: { menuBranchType:"deep",detail: 'attachments', orderBy: 'view-DESC',  curPage: 1, rowPerPage: 4 } })
      .then((res: AxiosResponse) => defSuccess<ListPage<Artworks<RecipeProperties>>>(res))
      .catch((_err: AxiosError) => null)
  )
  const { data } = clientQuery;
  useEffect(() => {
    if (data?.status === 200 && data.data) {
      setList(data.data.list);
    }
  }, [data])


  return (
    <Box maxWidth="1280px" paddingX={2} margin="0 auto">
      <Box textAlign="center" marginBottom={taFlag?5:10}>
        <Typography variant="h6" className="times bold">Best Recipe</Typography>
      </Box>
      <Box display="flex" justifyContent='center'>
        {taFlag?undefined:<Box width="50%" paddingX={2} position="relative">{list[0]?<a title="페이지 이동" className={classes.a} href={list[0] ? `/recipes/${list[0].uk}` : "/recipes"}>
          <RecipeCard img={list[0] ? list[0].attachments[0] : undefined} itemDirection={"column"}
            topTxt="Best Recipe" topTxtColor="primary" topVariant="body1" midTxt={list[0] ? list[0].title : ""}
            midTxtColor="textPrimary" midVariant="subtitle2" info={undefined}>
            <RecipeCardBottomItem difficulty={list[0] && list[0].property ? list[0].property.difficulty : "초급"}
              time={list[0] && list[0].property ? list[0].property.time : "00분"} />
          </RecipeCard>
          <Box color="white" display="flex" alignItems="center" justifyContent="center" width="90px" height="90px"
            className={`best ${classes.numberBox}`} position="absolute" top="-30px" left="-30px">
            <Typography variant="subtitle1" className="times regular">01</Typography>
          </Box>
          </a>:<Box className={classes.a}>
          <RecipeCard img={undefined} itemDirection={"column"}
            topTxt="Best Recipe" topTxtColor="primary" topVariant="body1" midTxt={""}
            midTxtColor="textPrimary" midVariant="subtitle2" info={undefined}>
            <RecipeCardBottomItem difficulty={"초급"}
              time={"00분"} />
          </RecipeCard>
          <Box color="white" display="flex" alignItems="center" justifyContent="center" width="90px" height="90px"
            className={`best ${classes.numberBox}`} position="absolute" top="-30px" left="-30px">
            <Typography variant="subtitle1" className="times regular">01</Typography>
          </Box>
          </Box>
        }
          
        </Box>}

        <Box width={taFlag?"100%":"50%"} paddingLeft={taFlag?0:11} height="100%">
          {taFlag?<RecipeRowItem item={list[0]} number={1} />:undefined}
          <RecipeRowItem item={list[1]} number={2} />
          <RecipeRowItem item={list[2]} number={3} />
          <RecipeRowItem item={list[3]} number={4} />
        </Box>
      </Box>
    </Box>
  )
}
export default BestList;

interface RecipeRowItemProps {
  item: Artworks<RecipeProperties> | undefined;
  number: number;
}
const RecipeRowItem: FC<RecipeRowItemProps> = ({ item, number }) => {
  const classes = useStyles();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.XS));
  const refText = item && item.uk ? `/recipes/${item.uk}` : ''
  const imgUrl = item && item.attachments.length > 0 ? getFullUrl(item.attachments[0], 480) : NoImg;
  return (<>{item?<a href={refText} style={{ cursor: "pointer", marginBottom: '48px' }} className={classes.a}>
    <Box display="flex" alignItems="center" justifyContent='flex-start'>
      <Box className={classes.backCenterImg} height={mobileFlag ? "90px" : "180px"} width={mobileFlag ? "90px" : "180px"} position='relative'
        style={{ backgroundImage: `url(${imgUrl})` }}>
        <Box color="white" display="flex" alignItems="center" justifyContent="center" width={mobileFlag ? "30px" : "60px"} height={mobileFlag ? "30px" : "60px"} className={`${number === 1 ? 'best' : ''} ${classes.numberBox}`}
          position="absolute" top="0" left="-10px">
          <Typography variant="subtitle2" className="times regular">0{number}</Typography>
        </Box>
      </Box>
      <Box paddingLeft={6}>
        <Typography color="primary" variant="body1">
          Best Recipe
        </Typography>
        <Typography style={{ paddingBottom: "20px" }} color="textPrimary" variant="subtitle2">
          {item ? item.title : ""}
        </Typography>
        <RecipeCardBottomItem difficulty={item && item.property ? item.property.difficulty : "초급"} time={item && item.property ? item.property.time : "00분"} />
      </Box>
    </Box>
  </a>:<Box style={{  marginBottom: '48px' }} className={classes.a}>
  <Box display="flex" alignItems="center" justifyContent='center'>
    <Box className={classes.backCenterImg} height={mobileFlag ? "90px" : "180px"} width={mobileFlag ? "90px" : "180px"} position='relative'
      style={{ backgroundImage: `url(${imgUrl})` }}>
      <Box color="white" display="flex" alignItems="center" justifyContent="center" width={mobileFlag ? "30px" : "60px"} height={mobileFlag ? "30px" : "60px"} className={`${number === 1 ? 'best' : ''} ${classes.numberBox}`}
        position="absolute" top="0" left="-10px">
        <Typography variant="subtitle2" className="times regular">0{number}</Typography>
      </Box>
    </Box>
    <Box paddingLeft={6}>
      <Typography color="primary" variant="body1">
        Best Recipe
      </Typography>
      <Typography style={{ paddingBottom: "20px" }} color="textPrimary" variant="subtitle2">
        
      </Typography>
      <RecipeCardBottomItem difficulty={"초급"} time={"00분"} />
    </Box>
  </Box>
  </Box>}</>
  )
}
type RecipeCardBottomItemProps = {
  difficulty: string;
  time: string;
}
export const RecipeCardBottomItem: FC<RecipeCardBottomItemProps> = ({ difficulty, time }) => {
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.XS));
  return (<Box display="flex" alignItems="center">
    <img alt="난이도 아이콘" src={LevelIcon} height={mobileFlag ? "15px" : '21px'} />
    <Typography style={{ paddingLeft: "10px", paddingRight: mobileFlag ? "14px" : '28px' }} color="textSecondary" variant="body1">{difficulty}</Typography>
    <img alt="소요시간 아이콘" src={TimeIcon} height={mobileFlag ? "15px" : '21px'} />
    <Typography style={{ paddingLeft: "10px" }} color="textSecondary" variant="body1">{time}</Typography>
  </Box>)
}