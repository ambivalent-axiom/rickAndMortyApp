export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export type CharacterListProps = {
  characters: Character[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  filter: { name: string; status: string; species: string };
  setFilter: (filter: { name: string; status: string; species: string }) => void;
  sort: string;
  setSort: (sort: string) => void;
  onCharacterClick: (character: Character) => void;
  status: 'loading' | 'error' | 'success';
}

export type CharacterCardProps = {
  character: Character;
  onClick: () => void;
}

export type CharacterModalProps = {
  visible: boolean;
  character: Character;
  onCancel: () => void;
}