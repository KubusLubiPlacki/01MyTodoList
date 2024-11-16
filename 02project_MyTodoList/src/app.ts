const tasknameinputelement:HTMLInputElement=document.querySelector("#name");
const tasksContainerElement:HTMLElement=document.querySelector(".tasks");
const addbuttonelement:HTMLButtonElement=document.querySelector("#add");
const tasks: string[]=["task1","task2","task3"];

//zeby odpalic wpisz w terminalu >npm run compile
//potem mozesz odpalic live servera

const render=()=>{
    tasksContainerElement.innerHTML="";
    tasks.forEach((task)=>{
        const taskElement:HTMLElement=document.createElement("li");
        const status:HTMLInputElement=document.createElement("input");
        status.type="checkbox";
        tasksContainerElement.appendChild(status);
        status.classList.add("checking");
        taskElement.innerText=task;
        tasksContainerElement.appendChild(taskElement);
    });
}
addbuttonelement.addEventListener("click",(event: Event)=>{
    if(tasknameinputelement.value=="" || tasknameinputelement.value==" "){
        alert("Your task can't be empty!");
        return;
    }
    event.preventDefault();
        tasks.push(tasknameinputelement.value);
        render();
});

const inputs:NodeListOf<HTMLElement>=document.querySelectorAll(".checking");
const result = document.querySelector("#result");
const resultText = "<p>Done:</p>";
inputs.forEach(input => {
    //console.log("test");
    input.addEventListener("click",()=>{
        input.classList.toggle("checked");
        console.log("test");
        var checked = document.querySelectorAll('.checked');
        result.innerHTML = resultText+checked.length;
    })
})

render();
/*
 to do:
    dodac zliczanie zrobionych zadan (done:)
    checkbox disabled
*/