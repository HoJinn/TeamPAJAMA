import { NextPage } from 'next';
import Layout from 'components/layout/main';
import Section1 from 'components/main/Section1'
import Section2 from 'components/main/Section2'
import Section3 from 'components/main/Section3'
import Section4 from 'components/main/Section4'
import Section5 from 'components/main/Section5'
// import Section6 from 'components/main/Section6'
// import { LangAtom } from 'recoilStates/lang';
import { useRecoilValue } from 'recoil';
import { windowLayoutSelector } from 'recoilStates/layout';

import Notice from 'components/layout/BottomNoticeList'
import Head from 'next/head';
const Index: NextPage = () => {
  const size = useRecoilValue(windowLayoutSelector)
  // const lang = useRecoilValue(LangAtom);

  return (
    <Layout>
      <Head>
        <title>다온븟</title>
      </Head>
    </Layout>
  )
}

export default Index;