import{auth, signInWithEmailAndPassword,onAuthStateChanged}from '../FireBase.js'


let email=document.getElementById('email');
let password=document.getElementById('password');

let loginBtn=document.getElementById('loginBtn')


let signInAdmin=()=>{
  console.log('hello');
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Addmin Login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}

loginBtn.addEventListener('click',signInAdmin)

onAuthStateChanged(auth, (user) => {
  if (user) {
  window.location.href='../auth/dash.html'

  }
});
