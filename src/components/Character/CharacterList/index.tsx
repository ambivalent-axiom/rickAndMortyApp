import { useRef, useEffect, useCallback } from 'react';
import { Card, Spin, Select, Input } from 'antd';
import { Character, CharacterListProps } from '../../types';
import CharacterCard from '../CharacterCard';
import debounce from 'lodash.debounce';

const { Option } = Select;

const CharacterList = ({
  characters,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  filter,
  setFilter,
  sort,
  setSort,
  onCharacterClick,
  status,
}: CharacterListProps) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

  const handleFilterChange = (key: string, value: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, [key]: value }));
  };

  const debouncedHandleFilterChange = debounce(handleFilterChange, 300);

  return (
    <>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Input
          placeholder="Filter by name"
          onChange={(e) => debouncedHandleFilterChange('name', e.target.value)}
          style={{ width: '30%' }}
        />
        <Select
          placeholder="Filter by status"
          onChange={(value) => debouncedHandleFilterChange('status', value)}
          style={{ width: '30%' }}
        >
          <Option value="">All</Option>
          <Option value="Alive">Alive</Option>
          <Option value="Dead">Dead</Option>
          <Option value="unknown">Unknown</Option>
        </Select>
        <Select
          placeholder="Filter by species"
          onChange={(value) => debouncedHandleFilterChange('species', value)}
          style={{ width: '30%' }}
        >
          <Option value="">All</Option>
          <Option value="Human">Human</Option>
          <Option value="Alien">Alien</Option>
        </Select>
        <Select
          placeholder="Sort by"
          onChange={setSort}
          style={{ width: '30%' }}
        >
          <Option value="">None</Option>
          <Option value="name">Name</Option>
          <Option value="status">Status</Option>
          <Option value="species">Species</Option>
        </Select>
      </div>
      <Card bordered style={{ width: '100%', maxWidth: '1000px', padding: '20px', position: 'relative' }}>
        {status === 'loading' && <Spin />}
        <div style={{ 
          margin: '20px',
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between' 
          }}>
          {characters.map((character: Character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => onCharacterClick(character)}
            />
          ))}
        </div>
        <div ref={loadMoreRef} style={{ height: '20px', marginTop: '20px' }}>
          {isFetchingNextPage && <Spin />}
        </div>
      </Card>
    </>
  );
};

export default CharacterList;