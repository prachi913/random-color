const container = document.getElementById("container");

for (let index = 0; index <31; index++) {
    const containerdiv = document.createElement("div")
    containerdiv.classList.add("color-containerdiv");

    container.append(containerdiv)
    
}
const containerdi = document.querySelectorAll(".color-containerdiv");
generatecolor()
function generatecolor() {
   containerdi.forEach((containerdivv) => {
     const newcolor = randomnumber();
       containerdivv.style.backgroundColor = "#" + newcolor;
        containerdivv.innerHTML="#"+newcolor
   });
}


function randomnumber() {
    
    const char = "0123456789abc"

let  colorcodlength = 6;
    let  colorcode = ""
    
    for (let index = 0; index < colorcodlength; index++) {
        let randomm = Math.floor(Math.random() * char.length)
        colorcode += char.substring(randomm,randomm+1)
        console.log(colorcode,"ghj")
       
    }
     return colorcode;
    
}
// randomnumber();