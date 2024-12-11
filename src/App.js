
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap-icon/font/bootstrap-icons.css';
import Home from './includes/Home';
import EMICalculator from './templates/EMICalculator';

import Header from './templates/Header'
import AboutUs from './templates/AboutUs'
import Enquiry from './templates/Enquiry'
import Contact from './templates/Contact'
import Signin from './templates/Signin'
import './style/Common.css';

import Dashboard from './includes/Dashboard';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route  path='/home' element={<Home/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/enquiry' element={<Enquiry/>}></Route>
        <Route path='/contactus' element={<Contact/>}></Route>
        <Route path='emicalculator' element={<EMICalculator/>}></Route>
        <Route path='signin' element={<Signin/>}></Route>

        {/* <Route path='/' element={<Navigate to={'/home'}/>}></Route> */}
        <Route  path='*' element={<Home/>}></Route>
        <Route path='emi' element={<EMICalculator/>}></Route>

        <Route path='/dashboard/*' element={<Dashboard/>}></Route>

      </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
