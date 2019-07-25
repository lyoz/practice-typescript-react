import React from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

class App extends React.Component {
  render() {
    const characters: Character[] = [
      { id: 1, name: 'HANESAKI Ayano', age: 16, height: 151 },
      { id: 2, name: 'ARAGAKI Nagisa', age: 18, height: 174 },
      { id: 3, name: 'IZUMI Riko', age: 18 },
    ];

    return (
      <div className="container">
        <header>
          <h1>Characters</h1>
        </header>
        <CharacterList
          school="Kitakomachi High School"
          characters={characters}
        />
      </div>
    );
  }
}

export default App;
