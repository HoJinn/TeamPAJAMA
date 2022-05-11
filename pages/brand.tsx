import { NextPage } from 'next';
import Layout from 'components/layout/main';
import TabBox, { arrProps } from 'components/bbs/TabMenu'
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import Bg from "assets/bg_brand_pc.png"
import About from 'components/brand/About'
import History from 'components/brand/History'
import Organi from 'components/brand/Organi'
import Location from 'components/brand/Location'
import TitleBox from 'components/bbs/TitleBox';
import { LayoutGrade } from 'recoilStates/layout';
import Head from 'next/head';

const menuArr: Array<arrProps> = [
  { id: 0, value: "목적 및 주요사업" },
  { id: 1, value: "주요연혁" },
  { id: 2, value: "조직도" },
  { id: 3, value: "오시는 길" },
]
const Brand: NextPage = () => {

  const tabClick = (index: number | string) => {
    const node = document.getElementById(`idNum${index}`);
    if (node) {
      location.href=`#idNum${index}`
      // const temp: number = node.offsetTop;
      // if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
      //   scrollTo(0, temp)
      // } else {
      //   scrollTo({ top: temp, left: 0, behavior: 'smooth' });
      // }
    }
  }
  const theme = useTheme();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  return (
    <Layout>
      <Head>
        <title>다온븟 브랜드 소개</title>
      </Head>
      <TitleBox subTitle='Bland story' title="브랜드 소개" content={`공동체 내 식(食)문화 가치를\n공유하고 나눕니다.`} img={Bg} size='MD' />

      <Box paddingY={mobileFlag?3:7.5} paddingX={2} maxWidth="1280px" margin="0 auto">
        <TabBox handleClick={tabClick} active={0} menuArr={menuArr} />
        <Box tabIndex={0} id="idNum0" marginTop={mobileFlag?3.2:9}>
          <About />
        </Box>
        <Box tabIndex={0} id="idNum1" marginTop={mobileFlag?7.5:9}>
          <History />
        </Box>
        <Box tabIndex={0} id="idNum2" marginTop={mobileFlag?3.2:9}>
          <Organi />
        </Box>
        <Box tabIndex={0} id="idNum3" marginTop={9}>
          <Location />
        </Box>
      </Box>
    </Layout>
  )
}

export default Brand;