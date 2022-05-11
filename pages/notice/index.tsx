import { NextPage } from 'next';
import Layout from 'components/layout/main';
import Bg from 'assets/noticeImg.png'
import MoBg from 'assets/bg_notice_mo.png'
import Icon from 'assets/icon/noticeIcon.png'
import TitleBox from 'components/bbs/TitleBox';
import { Box, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Artworks } from 'recoilStates/artwork';
import { FC, useEffect, useState } from 'react';
import { defSuccess, NextAxios } from 'src/axios';
import { AxiosError, AxiosResponse } from 'axios';
import PageItem from 'components/bbs/pagingItem'
import PageInfo from 'src/entity/PageInfo';
import dayjs from 'dayjs';
import { LayoutGrade } from 'recoilStates/layout';
import theme from 'theme/theme';
import Head from 'next/head';
const useStyles = makeStyles(theme => ({
  listWrapper: {
    textAlign: 'left', padding: 0, marginBottom: '20px'
  },
  textHidden: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight:400,
    whiteSpace: 'nowrap',
    width:'100%'
  },
  pagingWrapper: {
    display: 'flex'
  },
  pagingBox: {
    flexGrow: 1,
    paddingTop:theme.spacing(5),
    paddingBottom:theme.spacing(5)
  },
  pointer: {
    cursor:'pointer'
  },
  noDateTxt:{
    textAlign:"center",
    padding:theme.spacing(2)
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
const Notice: NextPage = () => {
  const router = useRouter();
  const classes = useStyles();
  const [listData, setListData] = useState<Array<Artworks>>([]);
  const { cPage } = router.query;
  const [paging, setPaging] = useState<PageInfo | undefined>(undefined)

  useEffect(() => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/client.bbs.notice/page`, {
      params:
        { curPage: cPage ? cPage : 1, rowPerPage: 10 }
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
  const noticeMap=listData.map((obj,i)=>{
    return <NoticeCard data={obj} key={i} />
  })
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (
    <Layout>
      <Head>
        <title>다온븟 공지사항</title>
      </Head>
      <TitleBox subTitle='Notice' title="공지사항" img={taFlag?MoBg:Bg} size={taFlag?"MD":'SM'} />
      <Box minHeight="500px" width='100%' maxWidth='1280px' margin='0 auto' padding={taFlag?'100px 20px':'100px 0px'}>
        <Box borderTop='2px solid #FF6F00'>
          {noticeMap && noticeMap.length > 0 ? noticeMap : <Typography className={classes.noDateTxt} variant="subtitle2">No List</Typography>}
        </Box>
        <Box className={classes.pagingWrapper} >
          <Box className={classes.pagingBox}>
            {paging ? (<PageItem paging={paging} handleClick={handlePage} />) : (null)}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Notice;
export type NoticeCardProps = {
  data:Artworks
};
const NoticeCard: FC<NoticeCardProps> = ({data}) => {
  const classes = useStyles();  
  const date=dayjs(data.reg_date).format('YYYY-MM-DD')
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (<a className={classes.a} href={`/notice/${data.uk}`} title="페이지 이동">
    <Box className={classes.pointer} padding={taFlag?'20px 5px':'40px 20px'} borderBottom='1px solid #C1C1C1' display='flex' justifyContent='space-between' alignItems='center'>
      <Box flexGrow={1} display='flex' justifyContent='flex-start' alignItems='center'>
        <img height={taFlag?'20px':'25px'} src={Icon} alt='공지사항 아이콘'/>
        <Typography style={{paddingLeft:'25px'}} className={classes.textHidden} variant='subtitle2'>{data.title}</Typography>
      </Box>
      <Typography className='regular' variant='body1' color='textSecondary'>{date}</Typography>
    </Box>
    </a>
  )
};