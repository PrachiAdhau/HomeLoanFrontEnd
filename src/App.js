
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap-icon/font/bootstrap-icons.css';
import Home from './includes/Home';
function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navigate to={'/home'}/>}></Route> */}
        <Route  path='*' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
