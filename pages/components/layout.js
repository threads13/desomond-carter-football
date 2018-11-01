import Link from 'next/link';
import Head from 'next/head';
import { Component } from 'react';
import TopBar from './topBar';
import Banner from './banner';
import TopColumns from './topColumns';
import RecentTips from './recentTips';
import AnalyzeResults from './analyzeResults';
import Instructor from './instructor';
import Testimonials from './testimonials';
import QuestionsAnswered from './questionsAnswered';

const Layout = (props) => (
  <div className="layout">
    <Head>
      <title>Desmond Carter Sports</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet" />
    </Head>
    <TopBar />
    <Banner />
    <TopColumns />
    <RecentTips />
  <style jsx>{`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .layout {
      display: flex;
      flex-direction: column;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
  `}</style>
  <style jsx global>{`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `}</style>
  </div>
);

export default Layout;
