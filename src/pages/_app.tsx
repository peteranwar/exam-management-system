import dynamic from 'next/dynamic';

import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from "next/app";

const CssBaseline = dynamic(() => import('@mui/material/CssBaseline'));


import { ToastContainer, Slide } from 'react-toastify';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utility/createEmotionCache';
import ThemeConfig from "@/theme";
import Head from 'next/head';


const clientSideEmotionCache = createEmotionCache();

interface IPageProps extends AppProps {
  emotionCache: any
}

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: IPageProps) {

  return <>
    <Head>
      <title>Exam Management System</title>
    </Head>
    <ToastContainer
      autoClose={4000}
      transition={Slide}
      position={'top-right'}
      theme='colored'
      hideProgressBar
      style={{ width: '400px', height: 'fit-content' }}
    />
    <CacheProvider value={emotionCache}>
      <ThemeConfig>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeConfig>
    </CacheProvider>
  </>
}
