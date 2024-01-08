
const hubby=()=>{
    document.getElementById('click').innerHTML= "Maryam &heartsuit; Yusuff"
}
function light(){
    document.getElementById('bulb').innerHTML= 
    alert("Sorry, the light can't be turn off. It's forever gonna be on bi idhnillah")
}
function vote(){
    let age = document.getElementById("check").value
     if(age < 18){
       result= "Too young to vote"
    }else{
       result="Old enough to vote"
    }
    document.getElementById("click").innerHTML= result
}