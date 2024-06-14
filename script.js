const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual comida?",
        alternativas: [
            {
                texto: "batata frita",
                afirmacao: " "
            },
            {
                texto: "batata rústica!",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "qual refeição?",
        alternativas: [
            {
                texto: "Almoço",
                afirmacao: ""
            },
            {
                texto: "Janta",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "prefere:",
        alternativas: [
            {
                texto: "comida salgada",
                afirmacao: ""
            },
            {
                texto: "comida doce.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "e agora?",
        alternativas: [
            {
                texto: "hamburguer.",
                afirmacao: ""
            },
            {
                texto: "cachorro quente",
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: "qual bebida? ",
        alternativas: [
            {
                texto: "suquinho",
                afirmacao: "."
            },
            {
                texto: "Refrigerante",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
