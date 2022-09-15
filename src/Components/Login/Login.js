import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import "./Login.css"
import img from "../../assets/zany-jadraque-ZCRtfop2hZY-unsplash.jpg"
import axios from 'axios';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phonenum, setphonenum] = useState('')




  const Login = (e) => {
    e.preventDefault()

    console.log("Login", email, password)
    axios.post('http://localhost:8000/user/login', { email: email, password: password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      let token = res.token
      if (res.success) {
        localStorage.setItem("token", token)
        setpassword('')
        setemail('')
      }
      console.log("response from login =========>", res)
    })
  }


  const Sinup = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/user/signup', { email: email, password: password ,phone:phonenum,username:username }, {
      headers: {  
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
console.log("res from signup =======>",res)
    })

  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };





  return (


    <>


      <div className='main-bg-img'>
        <MDBContainer>
          <div className='wrapper'>

            <div className='left-image'>
              <img src={img} />
            </div>
            <div className="p-3 my-5 d-flex flex-column w-50 bg-white">

              <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
      
                  <MDBTabsPane show={justifyActive === 'tab1'}>

                    <div className="text-center mb-3">
                      <p>Sign in with:</p>

                      <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>
                      </div>

                      <p className="text-center mt-3">or:</p>
                    </div>



                    <MDBInput wrapperClass='mb-4' label='Email address' onChange={(e) => setemail(e.target.value)} id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' onChange={(e) => setpassword(e.target.value)} type='password' />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                      <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100"  onClick={e => Login(e)} >Sign in</MDBBtn>
                    <p className="text-center">Not a member? <a href="#!">Register</a></p>

                  </MDBTabsPane>
        
           
                <MDBTabsPane show={justifyActive === 'tab2'}>

                  <div className="text-center mb-3">
                    <p>Sign un with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                      </MDBBtn>
                    </div>
                    <p className="text-center mt-3">or:</p>
                  </div>
                    <MDBInput wrapperClass='mb-4' label='Username' onChange={(e) => setusername(e.target.value)} type='text' />
                    <MDBInput wrapperClass='mb-4' label='Email' onChange={(e) => setemail(e.target.value)} type='email' />
                    <MDBInput wrapperClass='mb-4' label='phonenum' onChange={(e) => setphonenum(e.target.value)} type='number' />
                    <MDBInput wrapperClass='mb-4' label='Password' onChange={(e) => setpassword(e.target.value)} type='password' />
                    <MDBBtn className="mb-4 w-100" onClick={e=> Sinup(e)} >Sign up</MDBBtn>
                </MDBTabsPane>
               
              </MDBTabsContent>

            </div>
          </div>
        </MDBContainer>
      </div>
    </>
  );
}

export default Login;