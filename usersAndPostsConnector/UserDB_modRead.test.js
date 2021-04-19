const UserDB_modRead = require('./userDB_modRead');
const axios = require("axios");

//const { syf } = require('./userDB_modRead');


const user10 = [
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]


describe('all', () => {
    it("retuurns users", async () => {
        const subject = new UserDB_modRead();
        const value = await subject.all;
        expect(value).toEqual(user10);
    });
});


describe("findBy", () => {
    it("returns user with id == 10", async () => {
        const subject = new UserDB_modRead();

        const val = await subject.findBy('id', 10);
        expect(val).toEqual(user10);
    });
});