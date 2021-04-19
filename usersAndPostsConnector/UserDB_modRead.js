const axios = require("axios");
const PostDB_modRead = require("./PostDB_modRead");


class UserDB_modRead {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/users";
    }

    get all() {
        return axios.get(this.url).then(res => res.data);
    }

    get totalUsers() {
        return this.all.then(res => res.length);
    }

    //methond returns array of all users which ( attribute === value )
    findBy(attribute, value) {
        return this.all
            .then(res => res.filter(user => user[attribute] === value));
    }

    getPostsByUserId(userId){
        const postObj = new PostDB_modRead;
        return postObj.findBy('userId',userId);
    }

    getUserPostsNr(userId){
        return this.getPostsByUserId(userId).then(res => res.length);
    }

    printUserPostsNr(userId){
        Promise.all([this.findBy('id',userId), this.getUserPostsNr(userId)])
        .then(val => console.log(val[0][0].name + " napisal " + val[1] + " postów." )); 
    }

}

const subject = new UserDB_modRead();
subject.printUserPostsNr(2);


module.exports = UserDB_modRead;





