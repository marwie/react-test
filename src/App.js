import React from 'react';
import styled from 'styled-components';
import Badge from './components/Badge';
import Card from './components/Card';
import websites from './websites';

import "@needle-tools/engine"
import "./needle/generated/register_types.js"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: bottom;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;

  needle-engine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* mobile viewport bug fix */
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: calc(50vw - 160px);
  position: relative;
  margin-top: calc(50vw - 160px);

  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }

  > button {
    margin-right: 40px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;

export default function App() {
  return (
    <Page>
      <needle-engine src="unity/sceneRoot.glb"></needle-engine>
      <Badge fixed>Axeptio Project Card</Badge>
      <Grid>
        {websites.map((website, index) => (
          <Card
            index={index}
            key={website.description}
            hexa={website.hexa}
            title={website.title}
            description={website.description}
            image={website.image}
          />
        ))}
      </Grid>
    </Page>
  );
}
