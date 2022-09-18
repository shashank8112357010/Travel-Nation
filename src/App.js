import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Content from './Components/Content/Content';

import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Route path='/' exact element={<>
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
