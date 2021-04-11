//pegar as infos dos inputs
function app(){
const form = document.querySelector('.form');
const person = [];

function event(e){
    e.preventDefault();
    const userName = form.querySelector('.name');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');
    person.push({
        name: userName.value,
        weight: weight.value,
        height: height.value
    })
    /*
    result.innerHTML += `<p> ${userName.value} ${weight.value} ${height.value}</p>`
    */
   showResult()
}
function showResult(msg){
    const result = document.querySelector('.message');
    result.innerHTML = ''
    const message = document.createElement('p');
    message.innerHTML = 'nao sei'
    result.appendChild(message)
}

function imc(){
    //peso / altura*2

}

//parar o evento do formulario
form.addEventListener('submit',event)


}



app()

