import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Add, Edit, List, Delete } from './pages';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </div>
  )
}

export default App