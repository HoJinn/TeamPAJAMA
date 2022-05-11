import { NextPage } from 'next';
import Layout from 'components/layout/main';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import Bg from "assets/bg_recipe_pc.jpg"
import TitleBox from 'components/bbs/TitleBox';
import BestList from 'components/recipe/BestList'
import RecipesList from 'components/recipe/RecipesList'
import Head from 'next/head';
import { LayoutGrade } from 'recoilStates/layout';
import GallaryList from 'components/recipe/GallaryList';
const Index: NextPage = () => {


  const theme = useTheme();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (
    <Layout>
      <Head>
        <title>다온븟 레시피</title>
      </Head>
      <TitleBox subTitle='Recipe' title="레시피" content={`다온이 제안하는 레시피로\n최고의 식탁을 만들어 보세요.`} img={Bg} size='MD' />
      <Box bgcolor="#F3F3F3" paddingTop={mobileFlag ? 3 : 9} paddingBottom={mobileFlag ? 4 : 15} paddingX={2}>
        <BestList />
      </Box>
      <Box width='100%' maxWidth='1280px' margin='0 auto' paddingTop={mobileFlag ? 3 : 9} paddingBottom={mobileFlag ? 4 : 15} paddingX={mobileFlag ? 7.5 : 2}>
        <RecipesList />
      </Box>

      <Box width='100%' maxWidth='1280px' margin='0 auto' paddingTop={mobileFlag ? 3 : 9} paddingBottom={mobileFlag ? 4 : 15} paddingX={mobileFlag ? 7.5 : 2}>
        <GallaryList />
      </Box>
    </Layout>
  )
}

export default Index;