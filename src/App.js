import './App.scss';
import NavBar from './Components/NavBar/NavBar.js'
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header 
      title="PAZ"
      description="TENER LO ÚNICO QUE HAY QUE TENER" 
      image="./pazMalbec.png" />
    </div>
  );
}

export default App;
