// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Olá! Eu sou o ChatBot da TriPlaner! Podes perguntar o que quiseres."
    let firstMessage1 = "Perguntas frequentes: "
    let firstMessage2 = "Quais são os destinos mais populares neste momento?"
    let firstMessage3 = "Quais são as opções de voos para \"X\" destino?"
    let firstMessage4 = "Qual é o melhor período do ano para visitar \"X\" destino?"
    let firstMessage5 = "Quais são as opções de hospedagem disponíveis para \"X\" destino?"
    let firstMessage6 = "Que tipo de atividades posso fazer num \"X\" destino?"
    let firstMessage7 = "Posso reservar um carro para alugar num \"X\" destino?"
    let firstMessage8 = "Qual é o melhor meio de transporte para me deslocar num \"X\" destino?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>' + '<p class="botText"><span>' + firstMessage1 + '</span></p>' + '<p class="botText"><span>' + firstMessage2 + '</span></p>' + '<p class="botText"><span>' + firstMessage3 + '</span></p>' + '<p class="botText"><span>' + firstMessage4 + '</span></p>' + '<p class="botText"><span>' + firstMessage5 + '</span></p>' + '<p class="botText"><span>' + firstMessage6 + '</span></p>' + '<p class="botText"><span>' + firstMessage7 + '</span></p>' + '<p class="botText"><span>' + firstMessage8 + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});