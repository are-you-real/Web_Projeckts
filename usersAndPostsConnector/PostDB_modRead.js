const axios = require("axios");

class PostDB_modRead {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts";
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

    

}

const posts = new PostDB_modRead;
//posts.findBy('userId', 1).then(res => console.log(res));

module.exports = PostDB_modRead;