let option = document.getElementById("letter")
let button = document.querySelector("button")
let userInput = document.getElementById("word")

localStorage.setItem("menu")
let menu = ["Rau xào", "Thịt luộc", "Gà rán"]

function submit(){
    if (option == "C"){
        alert("Mời điền món ăn bạn muốn thêm vào menu")
        array.push(userInput)
    }
    else if (option == "R"){
        alert(menu.join())
    }
    else if (option == "U"){
        alert("Mời người dùng điền món ăn muốn update")
        let input = document.createElement("input")
        splice(menu.indexOf(userInput), 1, input)
    }
    else if (option == "D"){
        alert("Mời người dùng điền món ăn muốn delete")
        let input = document.createElement("input")
        splice(menu.indexOf(userInput), 0, input)
    }
}