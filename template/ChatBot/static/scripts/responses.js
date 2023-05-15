function getBotResponse(input) {
    //rock paper scissors
    if (input == "museus") {
        return "Lisboa tem muitos museus interessantes, excelentes opções de hospedagem e atrações para todas as idades, incluindo o Museu Nacional de Arte Antiga, o Museu Nacional do Azulejo, o Museu Calouste Gulbenkian e o Oceanário de Lisboa. Há muitas opções de hotéis e apartamentos dentro do seu orçamento, como o Hotel Portugal, o Hotel Mundial e o Lisbon Arsenal Suites. A cidade fala português e inglês, então a comunicação não deve ser um problema. Aproveite sua viagem a Lisboa!";
    } else if (input == "lisboa") {
        return "Lisboa apresenta muitas colinas íngremes que podem ser um desafio para pessoas com deficiência motora. No entanto, muitos hotéis, museus e atrações na cidade são acessíveis para cadeiras de rodas e outros equipamentos de mobilidade. Além disso, há serviços de transporte público acessíveis e táxis adaptados disponíveis. Com planeamento adequado, é possível fazer uma viagem confortável e acessível em Lisboa.";
    } 

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "The backend is still being worked on!";
    }
}