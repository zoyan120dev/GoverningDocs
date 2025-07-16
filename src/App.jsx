import { useState } from 'react';
import './App.css';
import Button from "./component/Buttoon"
import Title from './component/Title';
import Container from './component/Container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>Primary Button</Button>
      <Button className="bg-gray-500">Secondary Button</Button>
      <Container/>
     <Title gradient="Solutions">Problems $</Title>
    </>
  );
}

export default App;
