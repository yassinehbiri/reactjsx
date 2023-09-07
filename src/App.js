import './App.css';
import Price from './components/Price';
import Photo from './components/Photo';
import Name from './components/Name' ;
import Description from './components/Description';
function App() {
  return (
    <div id='product' >
      <Name></Name>
      <Description id='descript'></Description>
      <Price id='prix'></Price>
      <Photo id='ph'></Photo>
      
    </div>
  );
}

export default App;
