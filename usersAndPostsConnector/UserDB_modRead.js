const axios = require("axios");

class UserDB_modRead {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/users";
    }

    get all() {
        return axios.get(this.url).then(resoult => resoult.data);
    }

    get totalUsers() {
        return this.all.then(resoult => resoult.length);
    }

    //methond returns array of all users which ( attribute === value )
    findBy(attribute, value) {
        return this.all
            .then(response => response.filter(user => user[attribute] === value));
    }
}

const subject = new UserDB_modRead();
//subject.all.then(res => console.log(res.filter(user => user['id'] === 1)));
// subject.findBy('id', 10).then(res => console.log(res));


module.exports = UserDB_modRead;





