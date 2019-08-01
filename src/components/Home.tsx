import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, List } from 'semantic-ui-react';
import { characterData } from '../characterData';
import './Home.css';

const codes = Object.keys(characterData);

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sumamry | Hanebad!</title>
      </Helmet>
      <header>
        <h1>Summary</h1>
      </header>
      <Container className="summary">
        <p>
          Hanebado! (はねバド!), also known as The Badminton Play of Ayano
          Hanesaki! or Hanebad!, is a Japanese sports manga series by Kōsuke
          Hamada.
        </p>
      </Container>
      <h2>Characters</h2>
      <List as="ul">
        {codes.map(code => (
          <List.Item as="li" key={code}>
            <Link to={`/characters/${code}`}>{characterData[code].school}</Link>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default Home;
