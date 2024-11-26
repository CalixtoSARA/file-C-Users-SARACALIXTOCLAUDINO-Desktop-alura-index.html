let currentStory = 0;

const storyTextElement = document.getElementById("story-text");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");
const choice3Button = document.getElementById("choice3");

const stories = [
    {
        text: "Você acorda em uma nave espacial. O painel de controle pisca em vermelho. Você está perdido no espaço. O que você faz?",
        choices: [
            { text: "Ligar o rádio para tentar se comunicar com a Terra.", nextStory: 1 },
            { text: "Verificar os sistemas da nave.", nextStory: 2 },
            { text: "Tentar sair da nave e explorar o espaço exterior.", nextStory: 3 }
        ]
    },
    {
        text: "O rádio está em silêncio, mas você percebe que há uma transmissão de emergência vindo de uma estação espacial próxima. Você decide:",
        choices: [
            { text: "Ir até a estação para obter ajuda.", nextStory: 4 },
            { text: "Tentar voltar para a Terra.", nextStory: 5 },
            { text: "Desligar o rádio e continuar a busca por outros sinais.", nextStory: 6 }
        ]
    },
    {
        text: "Os sistemas da nave estão funcionando, mas você percebe que há uma falha no combustível. Você tem duas opções:",
        choices: [
            { text: "Tentar consertar o combustível com as ferramentas disponíveis.", nextStory: 7 },
            { text: "Procurar uma fonte de combustível em outro planeta.", nextStory: 8 },
            { text: "Racionar os recursos e esperar por ajuda.", nextStory: 9 }
        ]
    },
    {
        text: "Você sai da nave e se encontra flutuando no espaço. A gravidade não existe, mas você vê um planeta distante.",
        choices: [
            { text: "Tentar alcançar o planeta.", nextStory: 10 },
            { text: "Voltar para a nave antes que a situação piore.", nextStory: 11 },
            { text: "Usar o traje espacial para explorar o vazio.", nextStory: 12 }
        ]
    },
    {
        text: "Você chegou à estação espacial, mas ela está deserta. Ao explorar, encontra um diário com informações sobre uma missão secreta.",
        choices: [
            { text: "Ler o diário e descobrir mais sobre a missão.", nextStory: 13 },
            { text: "Procurar por sobreviventes da estação.", nextStory: 14 },
            { text: "Voltar para sua nave e seguir o plano original.", nextStory: 15 }
        ]
    },
    // (Continue adicionando outras histórias conforme necessário...)
];

function startAdventure() {
    currentStory = 0;
    showStory();
}

function showStory() {
    const story = stories[currentStory];
    storyTextElement.innerText = story.text;
    choice1Button.innerText = story.choices[0].text;
    choice2Button.innerText = story.choices[1].text;
    choice3Button.innerText = story.choices[2].text;
}

function makeChoice(choiceIndex) {
    const nextStoryIndex = stories[currentStory].choices[choiceIndex - 1].nextStory;
    currentStory = nextStoryIndex;
    showStory();
}

startAdventure();
