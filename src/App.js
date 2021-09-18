import './App.scss';
import NavBar from './Components/NavBar/NavBar.js'
import Header from './Components/Header/Header.js'
import CardContainer from './Containers/CardContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header 
      title="PAZ"
      description="TENER LO ÚNICO QUE HAY QUE TENER" 
      image="https://i.postimg.cc/rwvtydG5/paz-Malbec.png" 
      />
      <CardContainer />
    </div>
  );
}

export default App;
