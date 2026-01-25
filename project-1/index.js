const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatedPasswordOne = document.getElementById("password-1")
let generatedPasswordTwo = document.getElementById("password-2")
let generateButton = document.getElementById("generateButton")

function generatePassword() {
    
    let passwordOne = ""
    let passwordTwo = ""
    
    for (let i = 0; i < 14; i++) {
        let passwordOneIndex = Math.floor(Math.random() * characters.length)
        let passwordTwoIndex = Math.floor(Math.random() * characters.length)
        
        passwordOne += characters[passwordOneIndex]
        passwordTwo += characters[passwordTwoIndex]
        
        console.log(passwordTwo)
        
    }
    
    generatedPasswordOne.value = passwordOne
    generatedPasswordTwo.value = passwordTwo
}