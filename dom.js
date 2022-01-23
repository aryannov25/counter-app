let counter = 0;


add = () => {

    counter = counter + 1

   document.getElementById("counter").innerHTML = counter;

} 



drec = () => {

    counter = counter - 1

    document.getElementById("counter").innerHTML= counter;
}


reset = () => {

    counter = 0

    document.getElementById("counter").innerHTML= counter;
}