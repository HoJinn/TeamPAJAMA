import { NextPage } from 'next';
import Layout from 'components/layout/main';
import Section1 from 'components/main/Section1'
import { useRecoilValue } from 'recoil';
import { windowLayoutSelector } from 'recoilStates/layout';
import Head from 'next/head';
import { Box } from '@material-ui/core';
const Index: NextPage = () => {
  const size = useRecoilValue(windowLayoutSelector)
  // const lang = useRecoilValue(LangAtom);

  return (
    <Layout>
      <Head>
        <title>닥터크린</title>
      </Head>
      <Box>
        <Section1 size={`${size}`}/>
      </Box>
    </Layout>
  )
}

export default Index;