import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={SignUp}/>
      </Routes>
    </div>
  )
}

export default App
