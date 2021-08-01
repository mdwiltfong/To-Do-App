let checkbox = document.querySelector("input[type=checkbox]")
let form = document.querySelector("form");
let inputText = document.querySelector("input[type=text]")

//remove task
form.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(`Change`);
    console.log(e.target);
    if (e.target.getAttribute("type") !== `text`) {
        let label = e.path[1];
        form.removeChild(label);
    }


})
//Add task
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`input`)
    console.log(typeof e.path[0][0].value)
    let newLabel = document.createElement('label');
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newLabel.append(newInput);
    let text = document.createTextNode(`${e.path[0][0].value}`);
    newLabel.append(text);
    form.append(newLabel);
    inputText.value = " ";
})