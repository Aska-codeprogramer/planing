const isilist = document.getElementById("isilist");
const  rumahlist = document.getElementById("rumahlist");



function addTask() {
    if (isilist.value === ''){
        alert ("TULISKAN RENCANA MU....");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = isilist.value;
        rumahlist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    isilist.value = "";
    saveData();
}



rumahlist.addEventListener("click",function(e) {
    if (e.target.tagName === "LI"){
        e.target.classlist.toggle("centang");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", rumahlist.innerHTML);
}
function showTask(){
    rumahlist.innerHTML = localStorage.getItem("data");
}
showTask();