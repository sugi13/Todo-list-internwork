let inputField = document.getElementById("text-field");
let Button = document.getElementById("submit-btn");

let listContainer = document.querySelector(".list");

let newDate = new Date();


let hour = newDate.getHours();
let minute = newDate.getMinutes();
let second = newDate.getSeconds();


function createTask() {

  let listElement = document.createElement("li");
  let TimeElement = document.createElement("span");
  let headerElement = document.createElement("h6");
  let inputValue = inputField.value;
 listElement.textContent = inputValue;


  let time = `${hour}:${minute}`;
  let overAll = `${newDate.getFullYear()} .${newDate.getMonth()}. ${newDate.getDate()} at ${hour} : ${minute}m`;

  listElement.textContent = inputValue;
  TimeElement.innerHTML = time;
  listContainer.appendChild(listElement);
  listElement.appendChild(TimeElement);
  listContainer.appendChild(headerElement);

  
alert(`Task Added on ${overAll}`);
  
  function TaskDone() {
    listElement.classList.add("complete"); 
    setTimeout(()=>{
      headerElement.textContent = `Task completed on ${newDate.getFullYear()}.${newDate.getMonth()}.${newDate.getDate()} at ${hour}:${minute}m ${second}s`;
    },1000)
  }

  listElement.addEventListener("click", TaskDone);
  inputField.value = " ";

}

Button.addEventListener("click", createTask);
