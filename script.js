let checkbox = document.querySelector("input[type=checkbox]")
let form = document.querySelector("form");
let inputText = document.querySelector("input[type=text]")
let ul=document.querySelector("ul");
//remove task



//Add task
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //  console.log(`input`)
    //console.log(typeof e.path[0][0].value)
    let text = e.path[0][0].value;
    let li = document.createElement('li');
    li.append(text);
    ul.append(li);
    inputText.value="";
})

//crossout task
form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.type)
    console.log(e.target);
if(e.target.style.textDecoration == `line-through`){
    ul.removeChild(e.target)
}else if(e.target.getAttribute('type') !== `text`){
    e.target.style.textDecoration=`line-through`;
}

})

