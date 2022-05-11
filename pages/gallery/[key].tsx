import { NextPage } from 'next';
import Layout from 'components/layout/main';
import { Box, Button, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Artwork } from 'recoilStates/artwork';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import Axios, { defSuccess } from 'src/axios';
import { AxiosError, AxiosResponse } from 'axios';
import theme from 'theme/theme';
import { LayoutGrade } from 'recoilStates/layout';
import Head from 'next/head';
const useStyles = makeStyles(_theme => ({
  fileIcon: {
    transform: "rotate(45deg)",
    color: '#666'
  },
  linkBtn: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    display: 'flex'
  },
  fileTxt: {
    fontWeight: 500,
    cursor: "pointer",
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  btnShape: {
    padding: '27px 100px',
    fontWeight: 600,
    fontSize: '20px',
    borderRadius: '3px',
    border: '1px solid #000',
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      fontSize: '18px',
      padding: '14px 50px',
    }
  },
  hide: {
    position: 'absolute',
    left: '-9999px',
    overflow: 'hidden',
    width: '1px',
    height: '1px',
    lineHeight: '1px',
    fontSize: '1px'
  }
}));
const GalleryDetail: NextPage = () => {
  const router = useRouter();
  const { key } = router.query
  const classes = useStyles();
  const [contentData, setContentData] = useState<Artwork>();
  const date = dayjs(contentData?.reg_date).format('YYYY-MM-DD')
  const getContentData = () => {
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/${key}`)
      .then(async (res: AxiosResponse) => {
        const { data } = defSuccess(res);
        setContentData(data)
      }).catch((_err: AxiosError) => {
        setContentData(undefined)
      })
  }
  useEffect(() =>
    getContentData(),
    [key])

  const pagMmove = () => {
    router.back();
  }

  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  return (
    <Layout>
      <Head>
        <title>다온븟 갤러리 - {contentData?.title || "상세보기"}</title>
      </Head>
      {/* <Box width='100%' maxWidth='1280px' margin='0 auto' className={classes.contentWrap}> */}
      <Box width='100%' maxWidth='1280px' margin='0 auto' padding={taFlag ? '33px 20px' : '100px 0px'}>
        <Box borderTop='2px solid #FF6F00'>
          <Box padding={taFlag ? '20px 5px' : '48px 20px'} flexDirection={taFlag ? 'column' : 'row'} display='flex' justifyContent={taFlag ? 'flex-start' : 'space-between'} alignItems={taFlag ? 'flex-start' : 'center'} borderBottom='1px solid #C1C1C1'>
            <Typography variant='subtitle2' className='regular'>{contentData?.title}</Typography>
            <Typography variant='body1' className='regular' color='textSecondary'>{date}</Typography>
          </Box>
          <Box paddingY={taFlag ? 0 : 6} paddingX={taFlag ? 0 : 3} textAlign='left' borderBottom='1px solid #eee'>
            <Box minHeight="500px" className="sun-editor-editable sun-editor-viewer" dangerouslySetInnerHTML={{ __html: contentData?.content || '' }} />
            
          </Box>
        </Box>
        <Box textAlign='center' paddingTop={12} paddingBottom={25}><Button onClick={pagMmove} title='페이지 이동' className={classes.btnShape} size='large'>목록으로</Button></Box>
      </Box>
    </Layout>
  )
}

export default GalleryDetail;
