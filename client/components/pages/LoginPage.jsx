import React, { useEffect, useState } from 'react';
import bigBear from '../../images/bigbear.png';
// import jwt_decode from 'jwt-decode';

function LoginPage() {

  // const [ user, setUser ] = useState({});

  // function called after we choose a google account to sign in with
  function handleCallbackResponse(response) {
    // decode the response JWT and can use the data google provides for us
    // const userObject = jwt_decode(response.credential);
    // console.log(userObject);
    // setUser(userObject);
    // document.getElementById("signInDiv").hidden = true;
    // document.querySelector('.login-heading').textContent = `Welcome ${userObject.name}`
    fetch('/login', {
      Method: 'POST',
      Headers: { 'Content-Type': 'application/json'},
      Body: response
    })
  }

  // function handleSignOut() {
  //   setUser({});
  //   document.getElementById("signInDiv").hidden = false;
  //   document.querySelector('.login-heading').textContent = `Login or Sign Up with your Google account below:`
  // }

  useEffect(() => {
    // global google - google object coming from script in HTML
    google.accounts.id.initialize({
      client_id: "599848243160-fh9f74vresv83v5g9oec13q73vnq1mnv.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    // renders the google login button
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large", shape: "pill"}
    )
  }, []);

  return (
    <>
    <h1 className="login-heading">Login or Sign Up with your Google account below:</h1>
    <img src={bigBear} alt="Chubby brown bear sitting in grass"></img>
    <div id="signInDiv"></div>
    {/* { Object.keys(user).length !== 0 &&
      <button onClick = { () => handleSignOut() }>Sign Out</button>
    } */}
    </>
  )
}
export default LoginPage;
