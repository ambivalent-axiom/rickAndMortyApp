import { Modal, Typography } from 'antd';
import { CharacterModalProps } from '../../types';

const { Text } = Typography;

const CharacterModal = ({ visible, character, onCancel }: CharacterModalProps) => (
  <Modal
    open={visible}
    title={character.name}
    onCancel={onCancel}
    footer={null}
  >
    <div style={{ textAlign: 'center' }}>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <br />
      <Text>Species: {character.species}</Text>
      <br />
      <Text>Status: {character.status}</Text>
      <br />
      <Text>Gender: {character.gender}</Text>
      <br />
      <Text>Origin: {character.origin.name}</Text>
      <br />
      <Text>Location: {character.location.name}</Text>
    </div>
  </Modal>
);

export default CharacterModal;