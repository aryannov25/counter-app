let counter = 0;
let savehis = document.getElementById("history")

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
    savehis.textContent += count
   
    counter = 0
    document.getElementById("counter").innerHTML = counter;

}

reset = () => {
his = "History: "
    savehis.textContent = his
    counter = 0
    document.getElementById("counter").innerHTML = counter;
}