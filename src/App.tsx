import './App.less';
import { Button } from 'antd';
import styled from '@emotion/styled';

function App() {
  return (
    <div className="App">
      <EmotionButton type="primary">antd button</EmotionButton>
    </div>
  );
}

export default App;

const EmotionButton = styled(Button)`
  margin: 20rem;
`;

// test format
const foo = () => {
  for (let i = 0; i < 10; i++) console.log('Hello!');
};
