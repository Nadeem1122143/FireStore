import{auth,signOut,onAuthStateChanged,collection,dataBase,getDocs,doc, deleteDoc,getDoc,updateDoc}from '../FireBase.js'

let logoutBtn=document.getElementById('logoutBtn');

let updateStdName=document.getElementById('stdName');
let updateStdlink=document.getElementById('stdlink');
let updateBtn=document.getElementById('Update');
let isEdit=null;

let stdform=document.querySelector('.stdForm');

stdform.style.display="none";

const Logout=()=>{
    signOut(auth).then(() => {
        alert('Logout')
      }).catch((error) => {
        alert('error')
      });
      
}

logoutBtn.addEventListener('click',Logout)


onAuthStateChanged(auth, (user) => {
    if (!user) {
    window.location.href='./login.html';
  
    }
  });
  


  let data=document.querySelector('.data');
  
  
  let loader2=document.getElementById('loader2');


  async function getAssignment(){
    data.innerHTML='';
    loader2.style.display='block';
      
    try {
        const querySnapshot = await getDocs(collection(dataBase, "Assignments"));
        
        if(querySnapshot.empty){
            data.innerHTML='All Data deleted';
        }
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().studentName);
        // console.log(doc.data().assignments);
        console.log(doc.data(),doc.id);
        
        const{studentName,assignments}=doc.data();
        data.innerHTML+=`<p>${studentName}</p>
        <a href="assignments">${assignments}</a>
        <br>
        <button onclick="editData('${doc.id}',this)">Edit</button>
        <button onclick="deleteData('${doc.id}',this)">Delete</button>`
    //   console.log(`${doc.id} => ${doc.data()}`);
    });
    } catch (error) {
        console.log(error);
    }
    finally{
        loader2.style.display='none';
    }
}
getAssignment();


window.editData=async(id,button)=>{
    
    button.innerHTML="loading...."
    try{
        
      let userData=await getDoc(doc(dataBase, "Assignments", id));
      const{studentName,assignments}=userData.data();
        console.log(studentName,assignments);
        updateStdName.value=studentName;
        updateStdlink.value=assignments;
        isEdit=id;
        stdform.style.display="block";
         button.innerHTML="Edit";
    }
   
    catch(error) {
        console.log(error);
}
}

let updateData=async()=>{
    console.log("update");
    
    try{
        updateBtn.innerText='Updating.....';
           await updateDoc(doc(dataBase, "Assignments", isEdit),{
            studentName:updateStdName.value,
            assignments:updateStdlink.value
            
        });
                getAssignment();
                updateBtn.innerText='Update Data';
                stdform.style.display="none";

    }
    catch(error) {
        console.log(error);
}
}
updateBtn.addEventListener("click",updateData);

window.deleteData=async(id,button)=>{
    console.log("deleted",id,button);
   
    try{
        button.innerHTML="loading...."
       
        await deleteDoc(doc(dataBase, "Assignments", id));
        getAssignment();         
    }
    catch(error) {
        console.log(error);
}
}
    


