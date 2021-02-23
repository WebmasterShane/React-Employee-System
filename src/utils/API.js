import axios from "axios";

const userData = ["this is a test"];
// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsers: function() {
    console.log(userData)
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api?results=30")
        .then(res => {
          const users = res.data;
          console.log(users)
          console.log("123" + users.results[0].name.first)
          const results = users.results.map(user => {
            console.log("this is a test1111")
          
            return {
              nameF: user.name.first,
              nameL: user.name.last,
              image: user.picture.medium,
              email: user.email,
              GHusername: user.login.username,
              phone: user.cell

            


            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
    
  },
  
  // Return a Promise to simulate an async call
  getUser: function() {
    return new Promise(resolve => {
      resolve(userData);
    });
  }
};
