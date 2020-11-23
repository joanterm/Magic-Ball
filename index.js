const message = document.getElementById("message")
const button = document.getElementById("submit")
const questionArea = document.getElementById("question-area")
const displayMessage = document.getElementById("display-message")
const ballMessage = document.getElementById("ball-message")
const resetButton = document.getElementById("reset")



button.addEventListener("click", showName)
resetButton.addEventListener("click", resetGame)
message.style.color = "#380071"

// newMessage = displayMessage.value




function showName() {
    let newMessage = message.value
    questionArea.style.display = "none"
    displayMessage.style.display = "block"
    displayMessage.innerText = (`You have asked the Magic Ball: \n ${newMessage}`)
    displayMessage.style.color = "#e6ccff"
    showResults()
    resetButton.style.display = "block"

}

function showResults() {
    ballMessage.style.display = "block"

    function playBall() {
        let magicBall = "";
        let randomNumber = Math.floor(Math.random() * 8 + 1)
    
        switch (randomNumber) {
            case 1 :
            return('IT IS CERTAIN!');
            break;
            case 2 :
            return('IT IS DECIDEDLY SO!');
            break;
            case 3 :
            return('REPLY HAZY, TRY AGAIN!');
            break;
            case 4 :
            return('CANNOT PREDICT NOW!');
            break;
            case 5 :
            return('DO NOT COUNT ON IT!');
            break;
            case 6 :
            return('MY SOURCES SAY NO!');
            break;
            case 7 :
            return('OUTLOOK NOT SO GOOD!');
            break;
            case 8 :
            return('ALL SIGNS POINT TO YES!');
            break;
        }
    }
    playBall()
    ballMessage.innerText = (`The Magic Ball says: \n ${playBall()}`)

}

function resetGame() {
    resetButton.style.display = "none"
    message.value = ""
    questionArea.style.display = "block"
    displayMessage.style.display = "none"
    ballMessage.style.display = "none"

}
resetGame()













// function display() {
//     getMessage = getMessage()
//     window.alert(getMessage)
//     document.getElementById("form").submit();

// }



