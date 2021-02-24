import axios from "axios";

const userData = ["this is a test"];

export default {
  getUsers: function() {
    console.log(userData)
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api?results=30")
        .then(res => {
          const users = res.data;
          
          const results = users.results.map(user => {
          
          
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
  

  getUser: function() {
    return new Promise(resolve => {
      resolve(userData);
    });
  }
};
