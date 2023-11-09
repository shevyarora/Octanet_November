const input = document.getElementById('input');
const result=document.getElementById('result');

function add(){

    if(input.value===''){
        window.alert("You have not entered any task !")
    }
    else{
       let li=document.createElement('li');
       li.innerHTML= input.value;
       result.appendChild(li);
       input.value="";
       let span=document.createElement('span');
       span.innerHTML="\u00d7";
       li.appendChild(span);
       saveData();
    }
}

result.addEventListener("click",function(e){
   if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
    
   }
});

function saveData(){
    localStorage.setItem("data",result.innerHTML);
}
function showTask(){
    result.innerHTML=localStorage.getItem("data");
}
// localStorage.removeItem("data")
showTask();
