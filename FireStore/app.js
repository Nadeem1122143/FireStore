import{dataBase,addDoc, collection,getDocs}from './FireBase.js';
let stdName=document.getElementById('stdName');
let stdlink=document.getElementById('stdlink');
let addAssign=document.getElementById('addAssign');
let loader2=document.getElementById('loader2')

const addAssignments=async()=>{
    // console.log(stdName.value,stdlink.value);

    if(stdName.value!==''&&stdlink.value!==''){
        // console.log('ok',dataBase);
        addAssign.innerHTML='loading...'
    
        try {
            const docRef = await addDoc(collection(dataBase, "Assignments"), {       //await use howa hy to hum jo bhi function banyegy to os k sath async use hoga
              studentName:stdName.value,
              assignments:stdlink.value,
            });
            stdName.value='';
            stdlink.value='';
            console.log("Document written with ID: ", docRef.id);
            getAssignment();
          } 
          
          catch (e) {
            console.error("Error adding document: ", e);
            
          addAssign.innerHTML='addAssign'
          }
         finally{
             addAssign.innerHTML='addAssign'
         }
        
    }



// const AddAssignments=()=>{
//     if(stdName.value!==''&&stdlink.value!==''){
    
//             addDoc(collection(dataBase, "users"), {       
//               first: "Alan",
//               middle: "Mathison",
//               last: "Turing",
//               born: 1912
//             })
//             .then((data)=>{
//                 console.log(data);
                
//             })
//             .catch((error)=>{
//                 console.log();
                
//             })
          
//     }
// }

}
addAssign.addEventListener('click',addAssignments)

let data=document.querySelector('.data')
async function getAssignment(){
    data.innerHTML='';
    loader2.style.display='block';
   
    try {
        
        const querySnapshot = await getDocs(collection(dataBase, "Assignments"));
        if(querySnapshot.empty){
            data.innerHTML+="Data is Not Found";
            }
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().studentName);
        // console.log(doc.data().assignments);
        const{studentName,assignments}=doc.data();
        data.innerHTML+=`<p>${studentName}</p><a href="assignments">${assignments}</a>`
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
