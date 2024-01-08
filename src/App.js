import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Edit from './components/Edit';
import Detail from './components/Detail';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Table}/>
          <Route path='/Register' Component={Form}/>
          <Route path='/edit/:id' Component={Edit}/>
          <Route path='/view/:id' Component={Detail}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
