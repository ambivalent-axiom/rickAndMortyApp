import { Card, Typography } from 'antd';
import { CharacterCardProps } from '../../types';

const { Title, Text } = Typography;

const CharacterCard = ({ character, onClick }: CharacterCardProps) => (
  <Card
    style={{
      flexBasis: '18%',
      boxSizing: 'border-box',
      padding: '10px',
      textAlign: 'center',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    <Title level={4}>{character.name}</Title>
    <Text>Species: {character.species}</Text>
    <br />
    <Text>Status: {character.status}</Text>
    <br />
    <img
      src={character.image}
      alt={character.name}
      style={{ marginTop: '10px', width: '100px' }}
    />
  </Card>
);

export default CharacterCard;