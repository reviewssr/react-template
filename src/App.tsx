import './App.less';
import { Button, Layout, Card } from 'antd';
import styled from '@emotion/styled';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderArea>react-template</HeaderArea>
        <ContentArea>
          <SmallCard size="small"> some texts ...</SmallCard>
        </ContentArea>
        <FootArea>@reviewssr</FootArea>
      </Layout>
    </div>
  );
}

export default App;
const HeaderArea = styled(Header)`
  height: 5rem;
  color: white;
  display: flex;
  align-items: center;
`;
const ContentArea = styled(Content)`
  height: calc(100vh - 10rem);
  padding: 2rem;
`;

const FootArea = styled(Footer)`
  height: 5rem;
  text-align: center;
`;

const SmallCard = styled(Card)`
  width: 20rem;
`;
