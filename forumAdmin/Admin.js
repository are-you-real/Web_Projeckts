const axios = require("axios");

class Admin {
    constructor() {
        this.usersUrl = "https://jsonplaceholder.typicode.com/users";
        this.postsUrl = "https://jsonplaceholder.typicode.com/posts";
    }

    get allUsers() {
        return axios.get(this.usersUrl).then(res => res.data);
    }

    get allPosts() {
        return axios.get(this.postsUrl).then(res => res.data);
    }

    getPostByUserId(userId) {
        return axios.get(this.postsUrl + '?userId=' + userId).then(res => res.data);
    }

    getUserByPostId(postId) {
        return axios.get(this.usersUrl + '?id=' + postId).then(res => res.data);
    }

    coutUserPosts(userId) {
        return this.getPostByUserId(userId).then(res => res.length);
    }

    checkIfTitlesAreUnic() {
        let arrNotUnicTitles = [];
        this.allPosts.then(res => {
            let arrTitles = [];
            for (const item of res) {
                
                if (arrTitles.includes(item.title)) {
                    arrNotUnicTitles.push(item.title);
                }
                else {
                    arrTitles.push(item.title);
                }
            }
        });
        return arrNotUnicTitles;
    }

    latLngToDist(geo1, geo2) {

        const R = 6371e3; //[m]
        const Phi1 = geo1.lat * Math.PI / 180; // φ, λ in radians
        const Phi2 = geo2.lat * Math.PI / 180;
        const deltaPhi = (geo2.lat - geo1.lat) * Math.PI / 180;
        const deltaAlpha = (geo2.lng - geo1.lng) * Math.PI / 180;

        const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(Phi1) * Math.cos(Phi2) *
            Math.sin(deltaAlpha / 2) * Math.sin(deltaAlpha / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c; // in metres

        return d;
    }

    async getDistanceBetweenUsers(userId1, userId2) {
        return Promise.all([axios.get(this.usersUrl + '?id=' + userId1),
        axios.get(this.usersUrl + '?id=' + userId2)]).then(proms => {
            return this.latLngToDist(proms[0].data[0].address.geo, proms[1].data[0].address.geo);     // ogarnąć RETURN 
        });
    }



}

module.exports = Admin;

