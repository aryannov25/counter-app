let counter = 0;
let saveHis = document.getElementById("history")

add = () => {

    counter = counter + 1
    document.getElementById("counter").innerHTML = counter;
}

drec = () => {

    counter = counter - 1
    document.getElementById("counter").innerHTML = counter;
}


save = () => {

    count = counter + " , "
    saveHis.textContent += count
   
    counter = 0
    document.getElementById("counter").innerHTML = counter;

}

reset = () => {
his = "History: "
    saveHis.textContent = his
    counter = 0
    document.getElementById("counter").innerHTML = counter;
}