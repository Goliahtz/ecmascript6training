const asenkronFonksiyon = function (sayi, callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
};

asenkronFonksiyon(2, function (sonuc) {
    console.log(sonuc);
    asenkronFonksiyon(4, function (sonuc) {
        console.log(sonuc);
        asenkronFonksiyon(6, function (sonuc) {
            console.log(sonuc);

        })
    })
});

// with promise

const asenkronFonksiyon = () => {
   return new Promise((resolve,reject) => {
        reject('we have a problem');
    })
};

asenkronFonksiyon()
    .then((data) =>  {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
