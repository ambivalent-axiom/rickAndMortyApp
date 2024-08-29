import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Layout } from 'antd';
import { fetchCharacters } from '../../api';
import { Character } from '../types';
import CharacterList from '../Character/CharacterList';
import CharacterModal from '../Character/CharacterModal';

const HomeIndex = () => {
  const [filter, setFilter] = useState({ name: '', status: '', species: '' });
  const [sort, setSort] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['characters', { filter, sort }],
    queryFn: fetchCharacters,
    getNextPageParam: (lastPage) => {
      const nextPageUrl = lastPage.info.next;
      return nextPageUrl ? parseInt(new URL(nextPageUrl).searchParams.get('page') || '1') : undefined;
    },
  });

  const characters = data?.pages.flatMap((page) => page.results) || [];

  return (
    <>
      <Layout style={{ width: '100%', padding: '20px' }}>
        <CharacterList
          characters={characters}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          onCharacterClick={setSelectedCharacter}
          status={status}
        />
      </Layout>
      {selectedCharacter && (
        <CharacterModal
          visible={!!selectedCharacter}
          character={selectedCharacter}
          onCancel={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
};

export default HomeIndex;
