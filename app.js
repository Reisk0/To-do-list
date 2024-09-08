const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){ 
    if(inputBox.value === ""){
        alert("Ingresa una tarea");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();

const $time=document.querySelector('.tiempo'),
$fecha= document.querySelector('.fecha');

function Clock(){
    let date = new Date(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    weekday = date.getDay();

    day = ('0'+ day).slice(-2);
    month =('0'+ month).slice(-2)

    let timeString = date.toLocaleTimeString();
    $time.innerHTML = timeString;

    let week =['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let showWeek = (week[weekday])
    $fecha.innerHTML = `${showWeek} ${day}/${month}/${year}. `
}
setInterval(() =>{
    Clock()
},1000);

