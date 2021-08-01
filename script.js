let checkbox = document.querySelector("input[type=checkbox]")
let form = document.querySelector("form");
let inputText = document.querySelector("input[type=text]")
let ul = document.querySelector("ul");
let data = [];
//remove task



//Add & Store Task
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //  console.log(`input`)
    //console.log(typeof e.path[0][0].value)
    let text = e.path[0][0].value;
    data.push(text);
    let li = document.createElement('li');
    li.append(text);
    ul.append(li);
    inputText.value = "";
})


//crossout & remove task
form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.type)
    console.log(e);
    if (e.target.style.textDecoration == `line-through`) {
        ul.removeChild(e.target);
        let i = data.indexOf(e.path.value);
        data[i]=" ";    
    } else if (e.target.getAttribute('type') !== `text`) {
        e.target.style.textDecoration = `line-through`;
    }

})


//store task

form.addEventListener('submit', (e) => {
    let store = JSON.stringify(data);
    localStorage.setItem(`todos`, store)

})

//Delete Task



//Pull data

let savedData = JSON.parse(localStorage.getItem(`todos`));
if (!savedData) {
    console.log(`clear`)
    let li = document.createElement('li');
    let text= '. . .';
    li.append(text);
    ul.append(li);
} else {
    console.log(savedData);
    for (let i = 0; i < savedData.length; i++) {
        let li = document.createElement('li');
        let text = savedData[i];
        li.append(text);
        ul.append(li);
        inputText.value = "";
    }
}