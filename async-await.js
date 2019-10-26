const user = {id: 10, name: 'mehmet'};
const friends = [{id: 11, name: 'kenan'}, {id: 12, name: 'murat'}];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           // reject("arkadaş listesine ulaşılamadı!");
        resolve(user);
        }, 1000);
    });
};

const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 2000);
    });
};

//callback hell
let userId;
 getUser()
     .then(function (user) {
        userId = user.id;
         getFriends(userId).then(function (friends) {
            console.log(user);
             console.log(friends);
         })
     });

// ----------------   promise chain


getUser()
     .then((user) => {
        return getFriends(user.id);

    })
     .then((friends) => {
        console.log(friends);
     });



// -------         with async

async function asenkronAkis() {
    
    try {
        const user = await getUser();
        const frineds = await getFriends(user.id);
        console.log('veriler' , {user,friends} );
    }catch (error) {
        console.log(error);
    }

}

asenkronAkis();