const dictionary = []

function resetField() {
    document.getElementById("givenWord").value = ""
}

function addWord() {
    let currentWord = document.getElementById("givenWord").value;
    if (dictionary.includes(currentWord.toLowerCase())) {
        alert("The word already exists!")
    } else {
        dictionary.push(currentWord.toLowerCase())
    }
    resetField()
}

function checkWord() {
    let currentWord = document.getElementById("givenWord").value;
    if (dictionary.includes(currentWord.toLowerCase())) {
        alert("The word exists!")
    } else {
        alert("The word doesn't exist!")
    }
}
