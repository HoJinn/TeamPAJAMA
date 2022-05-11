import { NextPage } from 'next';
import Layout from 'components/layout/main';
import { Box, Button, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { FC, useEffect } from 'react';
import Level from "assets/icon/level.png"
import Time from "assets/icon/time.png"
import Line from "assets/icon/line.png"
import { useRouter } from 'next/router';
import { AxiosError, AxiosResponse } from 'axios';
import { defSuccess, NextAxios } from 'src/axios';
import { useState } from 'react';
import { Artwork } from 'recoilStates/artwork';
import { RecipeProperties } from 'components/recipe/BestList';
import NoImg from 'assets/icon_no_image.png'
import { getFullUrl } from 'src/util';
import { LayoutGrade } from 'recoilStates/layout';
import theme from 'theme/theme';
import Head from 'next/head';
const useStyles = makeStyles(theme => ({
  backimgSet: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  btnShape: {
    padding: '27px 100px',
    fontWeight: 600,
    fontSize: '20px',
    borderRadius: '3px',
    border: '1px solid #000',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      padding: '14px 50px',
      fontSize: '18px',
    }
  },
  textOverFlowLine4: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp:4,
    boxOrient:'vertical',
    wordBraek:'break-word',
    whiteSpace:'normal',
    height: '5.7em',
    width:'100%',
    textAlign: 'left',
    fontWeight:400
  },
}));
const RecipesDetail: NextPage = () => {
  const router = useRouter();
  const classes = useStyles();
  const { key } = router.query;
  // const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const [contentData, setContentData] = useState<Artwork<RecipeProperties>>();
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const listPageFn = () => {
    router.push('/recipes')
  }
  useEffect(() => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/${key}`)
      // , { params:{[innerSearchType]:keyword,detail:"attachments", menuMetadata: 'notice', curPage: cPage?cPage:1, rowPerPage: 10 } })
      .then(async (res: AxiosResponse) => {
        const { status, data } = defSuccess<Artwork<RecipeProperties>>(res);
        if (status === 200 && data) setContentData(data)
        else {
          alert("데이터가 없습니다.")
          listPageFn()
        }
      }).catch((_err: AxiosError) => {
        alert("서버 통신에 실패했습니다.")
        listPageFn()
      })
  }, [router])
  return (
    <Layout>
      <Head>
        <title>다온븟 레시피 - {contentData?.title||"상세보기"}</title>
      </Head>
      <Box position='relative' width='100%' minHeight='1000px'>
        {/* <Box width='100%' maxWidth='1280px' margin='0 auto' paddingY={mobileFlag?3:7} position='relative' zIndex={1}> */}
        <RecipesTitle level={`${contentData?.property.difficulty||""}`} time={`${contentData?.property.time||""}`} img={contentData?.attachments[0]} title={`${contentData?.title}`} content={`${contentData?.property.subtitle||""}`} />
        {/* </Box> */}
        <Box width='100%' maxWidth='1280px' margin='0 auto' paddingTop={taFlag?'65%':'15%'}>
          <Box minHeight="500px" className="sun-editor-editable sun-editor-viewer" dangerouslySetInnerHTML={{ __html: contentData?.content || '' }} />
        </Box>
        <Box textAlign='center' paddingTop={12} paddingBottom={25}>
          <Button title="페이지 이동" onClick={listPageFn} className={classes.btnShape}>목록으로</Button>
        </Box>
      </Box>
    </Layout>
  )
}
export default RecipesDetail;

export type NoticeCardProps = {
  title: string
  content: string
  level: string
  time: string
  img: any
};

const RecipesTitle: FC<NoticeCardProps> = ({ title, content, img, time, level }) => {
  const classes = useStyles();
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (
    <Box paddingTop={taFlag ? 3 : 7} paddingBottom={taFlag ? '30%' : 5} bgcolor='#666666' minHeight={taFlag ?'350px':'500px'}>
      <Box paddingY={taFlag ? 0 : 8} maxWidth='1280px' margin='0 auto' display='flex' flexDirection={taFlag ? 'column-reverse' : 'row'}>
        <Box position='relative' width={taFlag ? '90%' : '50%'}>
          <Box position='absolute' left={taFlag?'5%':0} top={0} className={classes.backimgSet} width='100%' paddingBottom='90%' margin='0 auto' style={{ backgroundImage: `url(${img ? getFullUrl(img) : NoImg})` }}>
            <span style={{position:"absolute",left:"-100%"}}>레시피 대표 이미지</span>
            </Box>
        </Box>
        <Box width={taFlag ? '100%' : '50%'} paddingLeft={6} paddingBottom={taFlag ? '30px' : '0'} padding={taFlag ? '0 30px 30px 30px' : '0 0 0 50px'} style={{ color: '#fff' }}>
          <Typography style={{ paddingBottom: '10px' }} variant='subtitle1' className='medium'>{title}</Typography>
          <Typography variant='body1' className={classes.textOverFlowLine4}>{content||""}</Typography>
          <Box display='flex' justifyContent='flex-start' alignItems='center' paddingTop={taFlag ? 4 : 7}>
            <Box paddingRight={taFlag ? 3 : 5}>
              <img alt="난이도 아이콘" src={Level} width={taFlag ? '65%' : '100%'} />
              <Typography>{level||""}</Typography>
            </Box>
            <img alt="" src={Line} height={taFlag ? '50px' : '80px'} />
            <Box paddingLeft={5}>
              <img alt="소요시간 아이콘" src={Time} width={taFlag ? '65%' : '100%'} />
              <Typography>{time||""}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};
