import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div `
//     background-image: url(${db.bg});
//     background-size: cover;
//     flex: 1;
//     background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>Harry Potter Quiz</title>
        </Head>
        <Widget>
          <Widget.Header>
            <h1>Harry Potter Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet..</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsum dolor sit amet..</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/luckrafael/imersao-react-next" />
    </QuizBackground>
  );
}
