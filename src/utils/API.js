const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://chrisreactblog.herokuapp.com"



const API = {
    //admin login function
  login: function (adminData) {
    //fetch request to the backend
    console.log(adminData);
    return fetch(`${URL_PREFIX}/admin/login`, {
      method: "POST",
      //specifying that this is a JSON application
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(adminData)
      //converts the adminData to   JSON data, needed in every request
    }).then(res => res.json())
      .catch(err => null)
  },

  //get admin's profile function
getAdminProfile:function(token){
    return fetch(`${URL_PREFIX}/adminprofile`, {
        headers: {
            "authorization": `Bearer ${token}`  
        }

}).then(res=>res.json()).catch(err=>null)
},


//get home page
homePage:function (home) {
  return fetch(`${URL_PREFIX}`, {

  }).then(res => res.send())
  .catch(err => null)
  
}
};

module.exports = API;
