
const Admin = require('./Admin');

async function displaySolution() {
    // > Make admin obj
    const admin = new Admin();
    //SOLUTION
    // > List of users with number of their posts
    console.log("***Policz ile postów napisali userzy i zwróci listę stringów w postaci ");
    console.log(" 'user_name napisał(a) count postów'***");
    console.log("");

    //Promise.all([admin.allUsers, admin.gte]);

    await admin.allUsers.then(async res => {
        for (item of res) {
            console.log(item.name + ' napisa(a) ' + await admin.coutUserPosts(item.id) + ' postw.');
        }
    });

    console.log("");
    console.log("");
    
    
    // > UNIKALNOŚĆ TYTUŁÓW 
    console.log("***Sprawdź czy tytuły postów są unikalne i zwróci listę tytułów które nie są***");
    console.log("");

    console.log('Lista powtarzających się tytułów: ' + admin.checkIfTitlesAreUnic())
    if(checkIfTitlesAreUnic() == []){
        console.log("!!! Wszystkie tytuły są unikalne !!!")
    }
}



displaySolution();





