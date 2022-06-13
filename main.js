let TaskBox = document.querySelector(".items");
let clearbtn = document.getElementById("clearBtn");
let input = document.getElementById("input");
function add(){
  if(!input.value){
    input.style.border = "1px solid red";
  }else{
    input.style.border = "1px solid #dbdbdb";
    var task = document.createElement("li");
    TaskBox.appendChild(task);
    task.classList.add("item");
    var text = document.createElement("span");
    task.appendChild(text);
    text.classList.add("li-text");
    text.innerText = input.value;
    let removeBtn = document.createElement("span");
    task.appendChild(removeBtn);
    removeBtn.innerHTML = `<i class="fas fa-trash" onclick="deleTask(this)"></i>`;
    input.value = "";
  }
  
}

function deleTask(a){
 var deleteli = a.parentElement.parentElement;
 deleteli.style.display = "none";
}