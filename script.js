let form = document.querySelector("form");
let unorderedList=document.querySelector("ul");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(`Form submited`);
    let input=form.elements[0].value;
    let li =document.createElement("li");
    li.innerText=input;
    unorderedList.append(li);

})