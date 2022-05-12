import { NextPage } from 'next';
import Layout from 'components/layout/main';
import About from 'assets/about.png';
import { Box, makeStyles, Typography } from '@material-ui/core';
import theme from 'theme/theme';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    width:"100%"
  },
}))
const aboutContent=[
  {title:'회사명',content:'㈜닥터크린'},
  {title:'대표자',content:'강태복'},
  {title:'주요사업',content:'건물 위생관리업'},
  {title:'주소',content:'서울특별시 강서구 공항대로 23 (우편번호 07619)'},
  {title:'사업자등록번호',content:'527-81-02540'},
  {title:'이메일',content:'doctorc1ean0@naver.com'}
]
const Index: NextPage = () => {
  const classes = useStyles();
const aboutContentMap = aboutContent.map((obj, i) => {
  return (
    <Box  key={i} borderBottom="2px solid #C4C4C4" display="flex" padding='20px 50px'>
      <Box width="20%">
        <Typography variant="body2">{obj.title}</Typography>
      </Box>
      <Box width="80%" textAlign="center">
        <Typography variant="body2" style={{ width: "80%" }}>{obj.content}</Typography>
      </Box>
    </Box>
  );
});
  return (
    <Layout>
      <Box width={"100%"} padding={2}>
        <Box textAlign="center" paddingTop={5}>
          <Box
            padding={0.5}
            paddingBottom={1}
            borderBottom="2px solid #00B7F3"
            component="span"
          >
            <Typography component="span" variant="subtitle2">
              (주){" "}
            </Typography>
            <Typography component="span" variant="subtitle2" color="primary">
              {" "}
              닥터
            </Typography>
            <Typography component="span" variant="subtitle2">
              크린 소개
            </Typography>
          </Box>
          <Box textAlign="center" paddingTop={3}>
            <Typography variant="body2">
              ㈜닥터크린은 서울 및 수도권 청소와 방역,소독 서비스 전문 업체로서
              사람과 환경을 생각하며,
            </Typography>
            <Typography variant="body2">
              고객분들의 공간이 더 가치가 있도록 만들기 위한 최선의 노력을
              제공하고 있습니다.
            </Typography>
          </Box>
        </Box>
        <Box paddingTop={5}>
          <Box
            borderBottom="2px solid #C4C4C4"
            display="flex"
            paddingBottom={1}
          >
            <Box width="20%"></Box>
            <Box width="80%" textAlign="center">
              <Typography style={{ width: "80%" }}>개요</Typography>
            </Box>
          </Box>
          {aboutContentMap}
          <Box
            borderBottom="2px solid #C4C4C4"
            display="flex"
            padding="20px 50px"
          >
            <Box width="20%">
              <Typography variant="body2">계좌번호</Typography>
            </Box>
            <Box width="80%" textAlign="center" display='flex'>
              <Box width="50%">
                <Typography variant="body2">
                  기업은행
                </Typography>
                <Typography variant="body2">
                  052-116169-01-013
                </Typography>
              </Box>
              <Box width="50%">
                <Typography variant="body2">
                  닥터크린
                </Typography>
                <Typography variant="body2">
                  010-6483-1286
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingY={3}>
          <Box className={classes.wrapper} paddingBottom="40%" style={{backgroundImage:`url(${About})`}}></Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;