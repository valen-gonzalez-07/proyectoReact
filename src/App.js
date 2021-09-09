import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header source="./foto.jpg" />
    </div>
  );
}

export default App;
