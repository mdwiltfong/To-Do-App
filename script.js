let checkbox = document.querySelector("input[type=checkbox]")
let form = document.querySelector("form");
let inputText = document.querySelector("input[type=text]")
let ul = document.querySelector("ul");
let data=JSON.parse(localStorage.getItem(`todos`)) || [ ];
let tasks=[];
console.log(data);
//remove task



//Add & Store Task
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //  console.log(`input`)
    //console.log(typeof e.path[0][0].value)
    let text = e.path[0][0].value;
    tasks=[...tasks,text];
    console.log(tasks);
    let li = document.createElement('li');
    li.append(text);
    ul.append(li);
    inputText.value = "";

    //save to localstorage
    data.push({task:li.innerText})
    localStorage.setItem("todos",JSON.stringify(data))
})


//crossout & remove task
form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.type)
    console.log(e);
    if (e.target.style.textDecoration == `line-through`) {
        ul.removeChild(e.target);  
    } else if (e.target.getAttribute('type') !== `text`) {
        e.target.style.textDecoration = `line-through`;
    }

})


//store task

form.addEventListener('submit', (e) => {



})

//Delete Task



//Pull data

window.addEventListener('DOMContentLoaded',(e)=>{
    if (!data) {
        console.log(`clear`)
        
        let li = document.createElement('li');
        let text= '. . .';
        li.append(text);
        ul.append(li);
    } else {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            let text = data[i].task;
            li.append(text);
            ul.append(li);
            inputText.value = "";
        }
    }

})  