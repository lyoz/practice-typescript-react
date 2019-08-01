export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

export interface Characters {
  [code: string]: {
    school: string;
    players: Character[];
  };
}

export const characterData: Characters = {
  kitakomachi: {
    school: 'Kitakomachi High School',
    players: [
      {
        id: 11,
        name: 'Ayano Hanesaki',
        age: 16,
        height: 151,
      },
      {
        id: 12,
        name: 'Nagisa Aragaki',
        age: 18,
        height: 174,
      },
      {
        id: 13,
        name: 'Riko Izumi',
        age: 18,
        height: 163,
      },
    ],
  },
  furejo: {
    school: 'Fredericia Girls High School',
    players: [
      {
        id: 21,
        name: 'Yuika Shiwahime',
        age: 18,
        height: 165,
      },
      {
        id: 22,
        name: 'Connie Christensen',
        age: 16,
      },
      {
        id: 23,
        name: 'Hina Tagajo',
        age: 17,
      },
    ],
  },
};
