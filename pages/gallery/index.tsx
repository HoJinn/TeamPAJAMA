import { NextPage } from 'next';
import Layout from 'components/layout/main';
import Bg from 'assets/noticeImg.png'
import MoBg from 'assets/bg_notice_mo.png'
import TitleBox from 'components/bbs/TitleBox';
import { Box, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Artworks } from 'recoilStates/artwork';
import { useEffect, useState } from 'react';
import { defSuccess, NextAxios } from 'src/axios';
import { AxiosError, AxiosResponse } from 'axios';
import PageItem from 'components/bbs/pagingItem'
import PageInfo from 'src/entity/PageInfo';
import { LayoutGrade } from 'recoilStates/layout';
import theme from 'theme/theme';
import Head from 'next/head';
import RecipeCard from 'components/card/RecipeCard';
const useStyles = makeStyles(theme => ({
  listWrapper: {
    textAlign: 'left', padding: 0, marginBottom: '20px'
  },
  textHidden: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    width: '100%'
  },
  pagingWrapper: {
    display: 'flex'
  },
  pagingBox: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  pointer: {
    cursor: 'pointer'
  },
  noDateTxt: {
    textAlign: "center",
    padding: theme.spacing(2)
  },
  a: {
    color: "inherit",
    position: "relative",
    textDecoration: "none",
    display: 'block',
    "&:focus": {
      outline: '3px solid black',
    }
  }

}));
const Gallery: NextPage = () => {
  const router = useRouter();
  const classes = useStyles();
  const [listData, setListData] = useState<Array<Artworks>>([]);
  const { cPage } = router.query;
  const [paging, setPaging] = useState<PageInfo | undefined>(undefined)

  useEffect(() => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/client.bbs.gallery/page`, {
      params:
        { detail: 'attachments', curPage: cPage ? cPage : 1, rowPerPage: 9 }
    })
      .then(async (res: AxiosResponse) => {
        const { data } = defSuccess(res);
        setListData(data.list)
        setPaging(data.page)
      }).catch((_err: AxiosError) => {
        setListData([]);
        setPaging(undefined)
      })
  }, [router])
  const handlePage = (page: number) => {
    if (page > 0) {
      // if (innerKeyword.length < 1) {
      router.push({ pathname: router.pathname, query: { cPage: page } })
      // } else {
      //   router.push({ pathname: router.pathname, query: { cPage: page, searchType: "title", keyword: innerKeyword } })
      // }
    }
  }

  const itemArr = listData && listData.length > 0 ? listData.map((info, i) => <Grid item xs={taFlag ? 12 : 4}>
    <a href={`/gallery/${info.uk}`} className={classes.a} title="페이지 이동">
      <RecipeCard itemDirection={i === 0 ? "column" : "row"} topTxtColor="primary" topVariant="body1" midTxt={info.title}
        midTxtColor="textPrimary" midVariant="subtitle2" img={info.attachments[0]}>

      </RecipeCard>
    </a>
  </Grid>
  )
    : <Grid item xs={12}><Typography style={{ textAlign: "center" }} variant="subtitle2">No Data</Typography> </Grid>

  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (
    <Layout>
      <Head>
        <title>다온븟 갤러리</title>
      </Head>
      <TitleBox subTitle='Gallery' title="갤러리" img={taFlag ? MoBg : Bg} size={taFlag ? "MD" : 'SM'} />
      <Box minHeight="500px" width='100%' maxWidth='1280px' margin='0 auto' padding={taFlag ? '100px 20px' : '100px 0px'}>

        <Grid spacing={3} container>
          {itemArr}
        </Grid>

        <Box className={classes.pagingWrapper} >
          <Box className={classes.pagingBox}>
            {paging ? (<PageItem paging={paging} handleClick={handlePage} />) : (null)}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Gallery;