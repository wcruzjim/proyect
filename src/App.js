import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import { Login } from './pages/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
