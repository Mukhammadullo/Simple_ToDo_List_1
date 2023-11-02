let box = document.querySelector(".box")
let dialogEdit = document.querySelector(".dialogEdit")
let inpEditName = document.querySelector(".inpEditName")
let inpEditAge = document.querySelector(".inpEditAge")
let btnEditInto = document.querySelector(".btnEditInto")
let inpAddName = document.querySelector(".inpAddName")
let inpAddphone = document.querySelector(".inpAddphone")
let btnAdd = document.querySelector(".btnAdd")



// local_data
let data = [
    {
        id: 1,
        name: "Khojaev Shohdidor",
        phone: 998774433,
        isComplete: false
    },
    {
        id: 2,
        name: "Nastulloev Muhammadullo",
        phone: 9877333221,
        isComplete: false
    }
]

// get
function get() {
    box.innerHTML = " "
    data.forEach((elem) => {

        let box2 = document.createElement("div")
        box2.classList.add("box2")


        let forName = document.createElement("h1")
        forName.innerHTML = elem.name

        let forAge = document.createElement("h1")
        forAge.innerHTML = elem.phone

        let forInfo = document.createElement("button")
        forInfo.innerHTML = "info"
        forInfo.classList.add("btnDel")
        //delete
        let btnDel = document.createElement("button")
        btnDel.classList.add("btnDel")
        btnDel.innerHTML = "delete"

        btnDel.onclick = () => {
            data = data.filter(e => {
                return e.id !== elem.id;
            })
            get();
        }


        //edit
        let btnEdit = document.createElement("button")
        btnEdit.classList.add("btnEdit")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editUser(elem.id)
        }

        //iscomplete
        let complete = document.createElement("input")
        complete.type = "checkbox"
        complete.checked = elem.isComplete
        complete.onclick = () => {
            completeuser(elem.id)
        }

        if (elem.isComplete == true) {
            forName.style.textDecoration = "line-through"
            forName.style.color = "red"
        }

        box2.append(forName, forAge, complete, btnDel, btnEdit, forInfo)
        box.appendChild(box2)
    })
}
get()



// add
btnAdd.onclick = () => {
    if (inpAddName.value == "" && inpAddphone.value == "") {
        alert("Empty string")
    }
    let newUser = {
        id: new Date(),
        name: inpAddName.value,
        phone: inpAddphone.value,
        isComplete: false
    }
    inpAddName.value = ''
    inpAddphone.value = ''
    data.push(newUser)
    get()
}


//edit
let idx
function editUser(id) {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id == id)
    inpEditName.value = user.name
    inpEditAge.value = user.phone
    idx = user.id
}
btnEditInto.onclick = () => {
    data = data.map((elem) => {
        if (elem.id == idx) {
            elem.name = inpEditName.value
            elem.phone = inpEditAge.value
        }
        return elem
    })
    get()
    dialogEdit.close()
}

//isComplete
function completeuser(id) {
    data = data.map((elem) => {
        if (elem.id == id) {
            elem.isComplete = !elem.isComplete
        }
        return elem
    })
    get();
}





