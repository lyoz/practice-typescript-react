import React from 'react';
import Helmet from 'react-helmet';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Divider, Icon } from 'semantic-ui-react';
import { parse } from 'querystring';
import CharacterList from './CharacterList';
import Spinner from '../common/Spinner';
import { characterData } from '../characterData';
import './Characters.css';

type CharactersProps = {} & RouteComponentProps<{ code: string }>;

const Characters: React.FC<CharactersProps> = ({
  history,
  location,
  match,
}) => {
  const codes = Object.keys(characterData);
  const targetCode = match.params.code;
  const isLoading = parse(location.search.slice(1)).loading === 'true';

  return codes.includes(targetCode) ? (
    <>
      <Helmet>
        <title>Characters | Hanebad!</title>
      </Helmet>
      <header>
        <h1>Characters</h1>
      </header>
      {isLoading ? (
        <Spinner />
      ) : (
        <CharacterList
          school={characterData[targetCode].school}
          characters={characterData[targetCode].players}
        />
      )}
      <Divider />
      <Button
        basic
        color="grey"
        onClick={() => {
          history.push('/');
        }}
      >
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  ) : (
    <Redirect to="/" />
  );
};

interface T {
  [x: number]: string;
}

export default withRouter(Characters);
