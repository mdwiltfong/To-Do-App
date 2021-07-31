let form = document.querySelector("form");
let unorderedList = document.querySelector("ul");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(`Form submited`);
    let input = form.elements[0].value;
    let li = document.createElement("li");
    li.innerText = input;
    unorderedList.append(li);
})

unorderedList.addEventListener('click', (e) => {
    let target=e.target;   
    target.style.textDecoration = 'line-through';
    let p = document.createElement('p');
    p.innerText="x";
    target.append(p);


})