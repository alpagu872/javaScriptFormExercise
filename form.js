let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('sumbit' , formHandler)

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }else{
        console.log('Hatalı Giriş')
    }


    addItem(USER_NAME.value, SCORE.value)
}

/* <li class="list-group-item d-flex justify-content-between align-items-center">Vestibulum at eros
                            <span class = "badge bg-primary rounded-pill">14</span>
                        </li>*/

let userListDOM = document.querySelector('#userList')
const addItem = (userName, score) =>{
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} ${score}`
    liDOM.classList.add('list-group-item' ,'d-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}