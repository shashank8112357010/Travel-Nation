import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing';
import NavBar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Login from './Components/Login/Login';
import ImgtoTest from './Components/Task/ImgtoTest';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes >
          {/* <Route path="/">
            <NavBar />
            <Landing />
            <Landing />
          </Route> */}
          <Route path='' element={<>
            <NavBar/> 
            <Landing />
            <Content />

          </>   } />

          <Route path='/login' element={<Login/>} />
          {/* <Route path="/login"><Login/></Route> */}
        </Routes >


      </BrowserRouter>

      {/* <ImgtoTest /> */}


    </div>
  );
}

export default App;
