import { Box, Button, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { NextPage } from 'next';
import { useState,  useEffect } from 'react';
import { useRouter } from 'next/router';
import { defSuccess, NextAxios } from 'src/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { Artworks } from 'recoilStates/artwork';
import PageInfo from 'src/entity/PageInfo';
import RecipeCard from 'components/card/RecipeCard';

import theme from 'theme/theme';
import { LayoutGrade } from 'recoilStates/layout';

const useStyles = makeStyles((_theme) => ({
  searchWrapper: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'flex-start',
    height: '70px',
    width: '100%',
    flexDirection:'row',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      justifyContent: 'center',
      flexDirection:'column',
    }
  },
  formControl: {
    paddingLeft: theme.spacing(1),
    minWidth: "auto",
    height: '100%',
    width: '100%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      paddingLeft:0,
    }
  },
  input: {
    borderRadius: 0,
    height: '100%',
    backgroundColor: '#F3F3F3',
    width: '100%',
    padding: '0 20px'
  },
  searchBtn: {
    borderRadius: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  icon: {
    color: 'black'
  },
 
  pagingBox: {
    width:"100%",
    display:"flex",
    justifyContent:"center"
  },
  galleryMoreBtn:{
    width:280,
    borderColor:"black",
    padding:theme.spacing(3,0),
    [theme.breakpoints.down(LayoutGrade.MD)]:{
      padding:theme.spacing(1.5,0),
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
}));

const GallaryList: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const [listData, setListData] = useState<Array<Artworks>>([]);
  const [paging, setPaging] = useState<PageInfo | undefined>(undefined)
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  useEffect(() => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/client.bbs.gallery/page`,
     { params: {menuBranchType:"direct", detail: 'attachments', curPage: 1, rowPerPage: 3 } })
      .then(async (res: AxiosResponse) => {
        const { data } = defSuccess(res);
        setListData(data.list)
        setPaging(data.page)
      }).catch((_err: AxiosError) => {
        setListData([]);
        setPaging(undefined)
      })
  }, [router])

  // const itemClick = (uk: string) => {
  //   router.push(`/recipes/${uk}`)
  // }
  const itemArr = listData && listData.length > 0 ? listData.map((info, i) => <Grid item xs={taFlag ? 12 : 4}>
    <a href={`/gallery/${info.uk}`} className={classes.a} title="페이지 이동">
      <RecipeCard itemDirection={i === 0 ? "column" : "row"} topTxtColor="primary" topVariant="body1" midTxt={info.title}
        midTxtColor="textPrimary" midVariant="subtitle2" img={info.attachments[0]}>
      </RecipeCard>
    </a>
  </Grid>
  )
    : <Grid item xs={12}><Typography style={{textAlign:"center"}} variant="subtitle2">No Data</Typography> </Grid>
  const onMoveMorePage = () => {
    router.push("/gallery")
    // if(page>0) router.push({pathname:router.pathname,query:{cPage:page}})
  }

  return (
    <Box>
      <Box textAlign="center">
        <Typography variant="h6" className="times bold">Gallery</Typography>
        <Typography variant='body1' className="medium" color='textSecondary'>다온의 갤러리를 소개합니다.</Typography>
      </Box>
     
      <Grid container spacing={3}>{itemArr}</Grid>
        <Box marginTop={2} className={classes.pagingBox}>
          {paging&&paging.isNextPage||paging&&paging.isNextBlock ? (
          <Button onClick={onMoveMorePage} className={classes.galleryMoreBtn} variant="outlined" size={'large'}>더 보기</Button>
          ) : (null)}
        </Box>
    </Box>
  )
}

export default GallaryList;
