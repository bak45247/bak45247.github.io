var profanityList = ["go fuck yourself", "die", "please end yourself", "you suck", "piss off", 
                    "you're a dickhead", "son of a bitch", "you fucking cunt", "la concha de la lora"];

function displayProfanity(){
    document.getElementById("profanityDisplay").innerHTML(Math.floor(Math.random() * profanityList.length));
}

document.onload(displayProfanity);