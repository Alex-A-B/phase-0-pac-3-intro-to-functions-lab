function shout(string) {
    return string.toUpperCase();
}
console.log(shout("Hello"))

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("Hello"))

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    
    if (string === string.toLowerCase()) {
        console.log("speak up")
        return ("I can't hear you!")
    } else if (string === string.toUpperCase()) {
        console.log("Lovely Weather")
        return ("YES INDEED!")
    } else if (string === "I love you, Grandma.") {
        console.log("I love you, too.")
        return ("I love you, too.")
    }
}
sayHiToGrandma("HELLO");
sayHiToGrandma("what's occuring")
sayHiToGrandma("I love you, Grandma.")

// When undefined keeps coming up check you spelling future Alex!!!!