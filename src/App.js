import './App.scss';
import NavBar from './Components/NavBar/NavBar.js'
import Header from './Components/Header/Header.js'
import CardContainer from './Containers/CardContainer';
import pazMalbec from './img/pazMalbec.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header 
      title="PAZ"
      description="TENER LO ÚNICO QUE HAY QUE TENER" 
      image={pazMalbec} 
      />
      <CardContainer />
    </div>
  );
}

export default App;
