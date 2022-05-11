import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps, } from 'next/app';
import type { AppContext, } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme/theme';
import { atom, RecoilRoot,  useRecoilState,  useSetRecoilState } from 'recoil';
import { getWindowLayout, windowLayoutAsOnlySetter } from 'recoilStates/layout';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { getBookmarkPage, removeBookmarpage } from 'src/routerUtil';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'theme/main.css';
import 'suneditor/dist/css/suneditor.min.css';
import Favicon from "assets/fav.ico";
// import ReactDOM from 'react-dom'
// import('@axe-core/react')
// .then(
//   ({default: axe}) => axe(React, ReactDOM, 1000),
//   ({message}) => console.error(message)
// )



export type CommProps = {
  ctx: NextPageContext
}

const MyApp = (props: AppProps<CommProps>) => {

  const { Component, pageProps } = props;
  const router = useRouter();
  useEffect(() => {
    const pathQuery = getBookmarkPage();
    if (pathQuery && router.pathname === pathQuery.pathname)
      removeBookmarpage();
    
  }, [router])



  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles)
      jssStyles.parentElement!.removeChild(jssStyles);
    // if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
    //   alert("익스플로러를 지원하지 않습니다");
    //   location.href = "microsoft-edge:" + window.location.href;
    // }


  }, []);


  return (
    <Wrapper>
      <Head>
        <title>다온븟</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="icon" href={Favicon} type="image/x-icon"></link>
        {/* 네이버 웹마스터*/}
        {/* <meta name="naver-site-verification" content="2de2bb353d63049a393b4e7a91f388eb76c9ed83" /> */}
        {/* <meta name="title" content="연수구 국제회의 Fifth International Conference on Learning Cities" />
        <meta name="keywords" content="연수구 국제회의,ICLC2021" />
        <meta name="description" content="연수구 국제회의 ICLC2021"></meta>
        <meta property="og:title" content="연수구 국제회의 Fifth International Conference on Learning Cities" />
        <meta property="og:site_name" content="연수구 국제회의 Fifth International Conference on Learning Cities"/>
        <meta property="og:url" content="https://learningcities2021.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="연수구 국제회의 ICLC2021" />
        <meta property="og:locale" content="ko_KR"/> */}
        {/* <meta property="og:image" content="https://example.com/image.jpg"/> */}
        {/* <link rel="canonical" href="https://learningcities2021.org/" /> */}
      </Head>
      <WindowLayoutEvent>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </WindowLayoutEvent>
    </Wrapper>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const { ctx, Component, } = context;
  // const {store} = ctx;
  let pageProps: any = {};
  // 비동기작업 한번에 처리. 스레드 블럭.
  if (Component.getInitialProps) {
    const new_ctx = {
      ...ctx,
    }
    pageProps = await Component.getInitialProps(new_ctx);
  }
  return {
    pageProps: {
      ...pageProps,
    }
  }
}
export default MyApp;
const prevPathNameAtom = atom<string>({
  key: 'prevPathNameAtom',
  default: ""
})
const queryClient = new QueryClient();
const Wrapper: FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}><RecoilRoot>
    {children}
  </RecoilRoot></QueryClientProvider>
}

const WindowLayoutEvent: FC = ({ children }) => {
  const [init, setInit] = useState<boolean>(true);
  const setWindowLayout = useSetRecoilState(windowLayoutAsOnlySetter);
  const [prevPath, setPrevPath] = useRecoilState(prevPathNameAtom);
  const router = useRouter()

  useEffect(() => {

    if (!prevPath || prevPath !== router.pathname) {
      scrollTo(0, 0)
    }
    setPrevPath(router.pathname)
  }, [router])
  useEffect(() => {
    if (init) {
      setInit(false);
      // window.addEventListener('load', () => {
      window.addEventListener('resize',
        () => setWindowLayout(getWindowLayout(window))
      )
      setWindowLayout(getWindowLayout(window));
      // window.addEventListener('scroll',
      //   () => setWindowLayout(getWindowLayout(window))
      // )
      // })
    }
    return () => {
      // window.removeEventListener('load', () => {});
      window.removeEventListener('resize',
        () => setWindowLayout(getWindowLayout())
      )
      window.removeEventListener('resize', () => { /** This is intentional*/ })
    }
  })

  return (<>{children}</>)
}
