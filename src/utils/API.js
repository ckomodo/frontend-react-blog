const API = {
    //admin login function
  login: function (adminData) {
    //fetch request to the backend
    console.log(adminData);
    return fetch("http://localhost:8080/admin/login", {
      method: "POST",
      //specifying that this is a JSON application
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(adminData)
      //converts the adminData to JSON data, needed in every request
    }).then(res => res.json())
      .catch(err => null)
  },

  //get admin's profile function
getAdminProfile:function(token){
    return fetch("http://localhost:8080/adminprofile", {
        headers: {
            "authorization": `Bearer ${token}`  
        }

}).then(res=>res.json()).catch(err=>null)
}

};

module.exports = API;
