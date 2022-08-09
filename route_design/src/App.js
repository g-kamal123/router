import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Body from './components/Body';
import Cities from './components/Cities';
import Drive from './components/Drive';
import Help from './components/Help';
import Nav from './components/Nav';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Body /> */}
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/drive' element={<Drive />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/partners' element={<Partners />}/>
        <Route path='/help' element={<Help />}/>
      </Routes>
    </div>
  );
}

export default App;
