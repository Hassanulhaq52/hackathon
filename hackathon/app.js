let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let username = document.getElementById('name');
let phoneNo = document.getElementById('number');
let country = document.getElementById('country');
let city = document.getElementById('city');
let db = firebase.firestore();


//////////////////////////////SIGNUP/////////////////////////////////
function signupUser(){
    console.log(emailEl.value, passwordEl.value);
    // console.log(username.value);
    // console.log(phoneNo.value);
    // console.log(country.value);
    // console.log(city.value);


    db.collection("user").add({
      name: username.value,
      phoneNo: phoneNo.value,
      country: country.value,
      city: city.value


  })
  .then(() => {
      console.log("Document successfully written!");
   
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });



    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((success) => {
        console.log(success,'user registered successfully');

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error,'its error');
      
      });

}


function signupRestaurant(){
  console.log(emailEl.value, passwordEl.value);
  
}




///////////////////////////SIGNIN/////////////////////////////////////
function signinUser(){    
    console.log(emailEl.value, passwordEl.value)

    firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)

  .then((user) => {
    // let user = user.user;
      console.log(user.user.uid, 'user is valid')

      // window.location = '/home.html';
      // getData();
  
    //   db.collection("user").add({
    //     name: username.value,
    //     phoneNo: phoneNo.value,
    //     country: country.value,
    //     city: city.value


    // })
    // .then(() => {
    //     console.log("Document successfully written!");
    //     window.location= './home.html';
    //     getData();
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ", error);
    // });
    

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error,'its an error')
  });
}






function signinRestaurant(){    
  console.log(emailEl.value, passwordEl.value)

  firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)

.then((user) => {
  // let user = user.user;
    console.log(user.user.uid, 'user is valid')

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error,'its an error')
  });
}




firebase.auth().onAuthStateChanged((user)=>{
if(user){
  let uid = user.uid;
  console.log(uid)

}
else{

}
});


function getData(){
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
    });
});
}

//////////////////////////////SIGNOUT/////////////////////////////////

// function signout(){

//     console.log(emailEl.value, passwordEl.value)

// firebase.auth().signOut().then((signout) => {
//     console.log(signout,'sign out successful')
    
//     // Sign-out successful.
//   }).catch((error) => {
//       console.log(error,'an error occured')
//     // An error happened.
//   });
// }








// function forgetPassword(){

//     console.log(emailEl.value, passwordEl.value);

// firebase.auth().sendPasswordResetEmail(emailEl)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//     console.log('email sent successfully')
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// }












// let userMail = document.getElementById('mail')
// let userPswrd = document.getElementById('password')

// let submitBtn = ()=>{
// console.log(userMail.value)


//  //Send a password reset email

//  firebase.auth().sendPasswordResetEmail(userMail.value)
//  .then(() => {
//    // Password reset email sent!
//    // ..
//    console.log('@@@')
//  })
//  .catch((error) => {
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    // ..
//    console.log(error)
//  });

// }
























// let inptEmail = document.getElementById('email');
// let userOrRes = document.getElementById('name01')
// let inptPswrd = document.getElementById('pswrd');
// let inptPhNum = document.getElementById('phNum');
// let inptSltCnt = document.getElementById('sltCnt');
// let userSltDropDown = document.getElementById('sltDropDown');
// let db = firebase.firestore();

// function rgrRst() {
//   //Sign up new users

//   firebase.auth().createUserWithEmailAndPassword(inptEmail.value, inptPswrd.value)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       // ...
//       console.log(user);
//       //firestore

//       let restToSave = {
//         UID: user.uid,
//         RestName: userOrRes.value,
//         phNum: inptPhNum.value,
//         country: inptSltCnt.value,
//         city: slctdDpDown()

//       }

//       saveRst(restToSave)


//       // db.collection("Restraunt").add({
//       //     Rst: userOrRes.value,
//       //     UID : user.uid,
//       //     phNum: inptPhNum.value,
//       //     country: inptSltCnt.value,
//       //     city : slctdDpDown()
//       // })
//       // .then((docRef) => {
//       //     console.log("Document written with ID: ", docRef.id);
//       // })
//       // .catch((error) => {
//       //     console.error("Error adding document: ", error);
//       // });


//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//       console.log(error)
//     });
// }
// function rgrUsr() {

//   //Sign up new users

//   firebase.auth().createUserWithEmailAndPassword(inptEmail.value, inptPswrd.value)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       // ...
//       console.log(user);

//       let userInfo = {
//         UID: user.uid,
//         userName: userOrRes.value,
//         phNum: inptPhNum.value,
//         country: inptSltCnt.value,
//         city: slctdDpDown()
//       }

//       saveUserInfo(userInfo)

//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//       console.log(error)
//     });

// }

// //%%%%%%%%%%%  Save Rst Collection %%%%%%%%%%%%%%%%%

// function saveRst(restToSave) {
//   db.collection('RESTRAUNT').doc(restToSave.UID).set(restToSave)
//     .then(console.log('done'))
// }
// //%%%%%%%%%%%  Save User Collection %%%%%%%%%%%%%%%%%
// function saveUserInfo(userInfo){
//   db.collection('User').doc(userInfo.UID).set(userInfo)
//   .then(console.log('done'))
// }



// //FOR LOGIN PG
// function userSign() {

//   //Sign in existing users
//   firebase.auth().signInWithEmailAndPassword(inptEmail.value, inptPswrd.value)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       // ...
//       console.log(user);
//       window.location = './user.html';
//       fetchDataOfUser();
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(error)
//     });


// }

// function rstSign() {
//   //Sign in existing users
//   firebase.auth().signInWithEmailAndPassword(inptEmail.value, inptPswrd.value)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       // ...
//       console.log(user);
//       window.location = './home.html';
//       fetchData();
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(error)
//     });
// }

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//     console.log(uid)
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// // %%%%%%%%%%%%%%%%%  fetch DATA %%%%%%%%%%%%%%%%%%%%%%%%

// function fetchData() {
//   db.collection("Restraunt").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//     });
//   });

// }

// // %%%%%%%%%%%%%%%%%  fetch DATA OF USER %%%%%%%%%%%%%%%%%%%%%%%%

// function fetchDataOfUser(){
//   db.collection("User").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//     });
//   });
// }


// //******************  FOR DROPDOWN VALUE **********************
// function slctdDpDown() {
//   let slt;
//   for (var i = 0; i < userSltDropDown.length; i++) {
//     if (userSltDropDown.value) {
//       slt = userSltDropDown.value
//     }
//   }
//   return slt;

// }