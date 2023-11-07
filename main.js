let tbody = document.querySelector(".tbody")
let inpAddName = document.querySelector(".inpAddName")
let inpAddphone = document.querySelector(".inpAddphone")
let btnAdd = document.querySelector(".btnAdd")
let dialogEdit = document.querySelector(".dialogEdit")
let inpEditName = document.querySelector(".inpEditName")
let inpEditAge = document.querySelector(".inpEditAge")
let btnEditInto = document.querySelector(".btnEditInto")


let data = [
    {
        id: 1,
        name: "Nastulloev Muhammadullo",
        age: 9928899999,
        isComplete: false
    },
    {
        id: 2,
        name: "Surush Qalandarsho",
        age: 9992338877,
        isComplete: false
    },
]



//get
function get() {
    tbody.innerHTML = ""
    data.forEach((elem) => {
        let tr = document.createElement("tr")

        let name = document.createElement("td")
        name.innerHTML = elem.name

        let age = document.createElement("td")
        age.innerHTML = elem.age

        //delete____________________________________
        let btnDel = document.createElement("button")
        btnDel.classList.add("btnDel")
        btnDel.innerHTML = "🗑"
        btnDel.onclick = () => {
            data = data.filter(e => {
                return e.id !== elem.id;
            })
            get();
        }


        //edit________________________________________
        let btnEdit = document.createElement("button")
        btnEdit.classList.add("btnEdit")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editUser(elem.id)
        }

        //iscomplete__________________________________
        let complete = document.createElement("input")
        complete.type = "checkbox"
        complete.checked = elem.isComplete
        complete.onclick = () => {
            completeuser(elem.id)
        }

        if (elem.isComplete == true) {
            name.style.textDecoration = "line-through"
            name.style.color = "red"
        }


        tr.append(name, age, btnDel, btnEdit, complete)
        tbody.append(tr)
    })
}
get()


//add________________________________________________________

btnAdd.onclick = () => {
    if (inpAddName.value == "" && inpAddphone.value == "") {
        alert("Empty string")
    }
    else{
        let newUser = {
            id: new Date(),
            name: inpAddName.value,
            age: inpAddphone.value,
            isComplete: false
        }
        inpAddName.value = ''
        inpAddphone.value = ''
        data.push(newUser)
        get()
    }
}


//edit_______________________________________________________


let idx
let btnclose=document.querySelector(".btnclose")
btnclose.onclick=()=>{
    dialogEdit.close()
}
function editUser(id) {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id == id)
    inpEditName.value = user.name
    inpEditAge.value = user.age
    idx = user.id
}
btnEditInto.onclick = () => {
    data = data.map((elem) => {
        if (elem.id == idx) {
            elem.name = inpEditName.value
            elem.age = inpEditAge.value
        }
        return elem
    })
    get()
    dialogEdit.close()
}

// isCompelte_________________________________________________
function completeuser(id) {
    data = data.map((elem) => {
        if (elem.id == id) {
            elem.isComplete = !elem.isComplete
        }
        return elem
    })
    get();
}
