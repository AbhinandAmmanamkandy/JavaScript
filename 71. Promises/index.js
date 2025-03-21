// Promise - An object that manages asynchronous operations,
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// Promise -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback){
//     setTimeout(() => {
//         console.log("You walk the dog 🐕");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("You cleaned the kitchen 🧹");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("You take out the trash ♻");
//         callback();
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(()=>{
//             console.log("You finished all the chores");
//         })
//     });
// });

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }else{
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen 🧹");
            }else{
                reject("You didn't cleaned the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookTrash = true;
            if(tookTrash){
                resolve("You take out the trash ♻");
            }else{
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); console.log("You finished all the chores")})
    .catch(error => console.error(error));