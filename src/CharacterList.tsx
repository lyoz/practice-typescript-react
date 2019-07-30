import React from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({
  school,
  characters,
}) => (
  <>
    <Header as="h2">{school}</Header>
    <Item.Group>
      {characters.map(c => (
        <Item>
          <Icon name="user" size="huge" />
          <Item.Content>
            <Item.Header>{c.name}</Item.Header>
            <Item.Meta>{c.age} years old</Item.Meta>
            <Item.Meta>{c.height ? c.height : '???'} cm</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default CharacterList;
