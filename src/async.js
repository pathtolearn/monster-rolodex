const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`I've succeded`);
    },1000);
});

myPromise.then(val => console.log(val));