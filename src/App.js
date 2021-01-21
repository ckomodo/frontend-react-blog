import React, { useState, useEffect } from "react";
import API from "./utils/API";

function App() {
  //handles form input
  const [loginFormState, setLoginFormState] = useState({
    username: "",
    email: "",
    password: "",
  });


const [profileState, setProfileState] = useState ({
  username: "",
    email: "",
    Articles: [],
    isLoggedIn: false
})


useEffect(()=>{
  const token = localStorage.getItem("token");
  API.getAdminProfile(token).then(profileInfo => {
    if(profileInfo){

      setProfileState ({
        name: profileInfo.username,
        email: profileInfo.email,
        articles: profileInfo.Articles,
        isLoggedIn: true
      })
    }
  });
}, []) 



  //function to handle form input
  const inputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  //function to retrieve profile page of logged in admin
  const formSubmit = (event) => {
    event.preventDefault();
    API.login(loginFormState).then((newToken) => {
      //store token from admin log in
      localStorage.setItem("token", newToken.token)
      API.getAdminProfile(newToken.token).then(profileInfo => {
        console.log(profileInfo);
        setProfileState ({
          name: profileInfo.username,
          email: profileInfo.email,
          articles: profileInfo.Articles,
          isLoggedIn: true
        })
      });
    });
  };




  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <input
          onChange={inputChange}
          value={loginFormState.username}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          onChange={inputChange}
          value={loginFormState.email}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={inputChange}
          value={loginFormState.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="login" />
      </form>
{profileState.isLoggedIn?profileState.articles.map(articlesObj=><h1>{articlesObj.title}</h1>):<h1>Log in as admin to see profile</h1>}


    </div>
  );
}

export default App;
