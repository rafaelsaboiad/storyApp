// Defina o texto inicial da história
var story =
	"Hoje, [Personagem1] e [Personagem2] decidiram ir à floresta para uma aventura. Quando chegaram lá, eles ficaram maravilhados com a cor [Cor] que predominava a vegetação da floresta e arvores [Tamanho]. Eles começaram a caminhar pelo meio da mata, admirando a diversidade de animais e plantas. De repente, eles avistaram um [Animais] [Cor] e [Personagem1] ficou [Emoções]. Mas [Personagem2] rapidamente [Ação], evitando que o [Animais] os atacasse. Mais adiante, eles encontraram uma cascata e decidiram seguir sua correnteza. Eles logo chegaram a uma clareira onde encontraram uma árvore [Tamanho2] com frutos [Cor2]. Eles comeram algumas frutas e sentiram-se [Emoções] ao experimentar o sabor [Opinião]. Eles também encontraram um [Local] e decidiram fazer uma exploração. Dentro do [Local], eles encontraram um [Objeto] [Tamanho] e brilhante e decidiram levá-lo de volta com eles como recordação da aventura. No caminho de volta, eles encontraram um riacho e decidiram acampar para passar a noite. Eles cozinharam um [Alimento] para o jantar com o que haviam colhido na floresta e conversaram sobre as memórias incríveis que estavam fazendo. Enquanto se ajeitavam para dormir, ouviram os sons de [Animais2] da noite, agradecendo por se sentirem tão vivos e [Emoções] na floresta."

// Defina as arrays de palavras para substituir
let Personagem1 = ["Luna", "Aurora", "Nico", "Rafaela", "Vitor", "Bianca", "Erick", "Gabriela", "Davi", "Sophia", "Matheus", "Juliana", "Lucas", "Isabela", "Thiago"]
let Personagem2 = ["Mateus", "Carolina", "Guilherme", "Eduarda", "Daniel", "Bruna", "Felipe", "Rita", "Samuel", "Larissa", "Pedro", "Gabriela", "Ricardo", "Camila", "Marcos"]

let Local = [
	"Vale das Fadas",
	"Cascata dos Anões",
	"Ponte dos Gnomos",
	"Covil dos Lobos",
	"Riacho Encantado",
	"Pomar das Arvores Falantes",
	"Laguna das Sereias",
	"Floresta dos Duendes",
	"Rio dos Peixes Mágicos",
	"Vale das Borboletas",
	"Caminho das Flores",
	"Jardim das Trepadeiras",
	"Cachoeira das Borrachas",
	"Mata das Abelhas",
	"Clareira dos Coelhos",
]

let Objeto = [
	"Pérola de madeira",
	"Concha de rio",
	"Cristal de água doce",
	"Esporas de musgo",
	"Pedra preciosa verde",
	"Casca de árvore decorada",
	"Flor selvagem rara",
	"Ninho de pássaro",
	"Folha gigante de bambu",
	"Fungo luminoso",
	"Caule de trepadeira enrolado",
	"Inseto raro em forma de joia",
	"Raiz retorcida como uma escultura",
	"Minhoca gigante dourada",
	"Fruto exótico em forma de diamante",
]
let Emoções = [
	"emocionado",
	"assustado",
	"surpreso",
	"alegre",
	"curioso",
	"confiante",
	"encantado",
	"deslumbrado",
	"apavorado",
	"feliz",
	"excitado",
	"determinado",
	"abismado",
	"energizado",
	"animado",
]
let Cor = [
	"Roxas",
	"Amarelas",
	"Verdes",
	"Vermelhas",
	"Laranjas",
	"Rojas",
	"Azuis",
	"Rosa",
	"Púrpuras",
	"Marrom",
	"Cinza",
	"Douradas",
	"Verdes escuras",
	"Carmesim",
	"Lilás",
	"Verde-jade",
	"Laranja-sólido",
	"Azul-turquesa",
	"Vermelho-pálido",
	"Rosa-suave",
	"Roxo-brilhante",
	"Amarelo-claro",
	"Marrom-dourado",
	"Cinza-nebuloso",
	"Verde-musgo",
	"Laranja-florescência",
	"Azul-cielo",
	"Vermelho-fogo",
	"Rosa-pálido",
	"Roxo-profundo",
]
let Cor2 = [
	"Amarela",
	"Verde",
	"Vermelha",
	"Laranja",
	"Roxo",
	"Azul",
	"Rosa",
	"Púrpura",
	"Marrom",
	"Cinza",
	"Dourada",
	"Verde escuro",
	"Carmesim",
	"Lilás",
	"Verde-jade",
	"Laranja-sólido",
	"Azul-turquesa",
	"Vermelho-pálido",
	"Rosa-suave",
	"Roxo-brilhante",
	"Amarelo-claro",
	"Marrom-dourado",
	"Cinza-nebuloso",
	"Verde-musgo",
	"Laranja-florescência",
	"Azul-cielo",
	"Vermelho-fogo",
	"Rosa-pálido",
	"Roxo-profundo",
]

let Tamanho = ["Minúsculo", "Pequeno", "Médio", "Grande", "Gigante", "Colossais", "Massivo", "Enorme", "Minúsculo", "Tão grande quanto uma montanha", "Comprimento de um braço", "Alto quanto uma casa"]

let Tamanho2 = [
	"Minúsculo",
	"Pequeno",
	"Médio",
	"Grande",
	"Gigante",
	"Colossais",
	"Massivo",
	"Enorme",
	"Minúsculo",
	"Tão grande quanto uma montanha",
	"Comprimento de um braço",
	"Alto quanto uma casa",
]

let Ação = [
	"imobilizou",
	"acalmou",
	"persuadiu",
	"enganou",
	"distraiu",
	"correu",
	"afugentou",
	"domou",
	"desafiou",
	"derrubou",
	"conquistou",
	"evitou",
	"desarmou",
	"convenceu",
	"acariciou",
	"Correu",
	"Se Escondeu",
	"Subiu na Árvore",
	"Entrou Dentro de um Buraco",
	"Pulou sobre o Rio",
	"Escalou uma Montanha",
	"Pulou em um Lago",
	"Passeou pela Floresta",
	"Seguiu um Rastro",
	"Caçou Frutas",
	"Explorou uma Caverna",
	"Observou os Animais",
	"Construiu um Abrigo",
	"Pescou um Peixe",
]

let Animais = [
	"Leão",
	"Tigre",
	"Urso",
	"Gorila",
	"Jacaré",
	"Cobra",
	"Aranha",
	"Bufalo",
	"Elefante",
	"Hipopótamo",
	"Jaguar",
	"Lobo",
	"Onça",
	"Rinoceronte",
	"Zebra",
	"Tigre-dente-de-sabre",
	"Macaco-aranha",
	"Gorila-montanhês",
	"Jaguatirica",
	"Arara-azul",
	"Borboleta-gigante",
	"Formiga-cortadeira",
	"Morcego-caveiro",
	"Crocodilo-verde",
	"Aranha-armadeira",
	"Onça-pintada",
	"Suricate-rei",
	"Hipopótamo-gigante",
	"Leão-da-montanha",
	"Elefante-selvagem",
]

let Animais2 = [
	"Tigre-dente-de-sabre",
	"Macaco-aranha",
	"Gorila-montanhês",
	"Jaguatirica",
	"Arara-azul",
	"Borboleta-gigante",
	"Formiga-cortadeira",
	"Morcego-caveiro",
	"Crocodilo-verde",
	"Aranha-armadeira",
	"Onça-pintada",
	"Suricate-rei",
	"Hipopótamo-gigante",
	"Leão-da-montanha",
	"Elefante-selvagem",
]
let Alimento = [
	"Peixe fresco",
	"Frutas silvestres",
	"Rabanetes selvagens",
	"Cogumelos",
	"Nozes",
	"Ervas aromáticas",
	"Salsinha selvagem",
	"Bifes de veado",
	"Frutos do mar",
	"Berinjela selvagem",
	"Ovos de pássaro",
	"Morangos silvestres",
	"Camarões",
	"Peixe frito",
	"Salada de folhas verdes",
	"Morangos silvestres",
	"Nozes",
	"Castanhas",
	"Salgadinhos de raíz",
	"Mel silvestre",
	"Frutas exóticas",
	"Cogumelos",
	"Frutas vermelhas",
	"Bacaba",
	"Acerola",
	"Maracujá",
	"Abacaxi selvagem",
	"Goiaba selvagem",
	"Uva silvestre",
	"Melancia selvagem",
]

let Opinião = ["delicioso", "surpreendente", "diferente", "maravilhoso", "exótico", "estranho", "incrível", "adocicado", "suave", "forte", "áspero", "ameixa", "doce", "salgado", "acido"]

// Função para gerar uma nova história
function generateStory() {
	// Escolha aleatoriamente uma palavra de cada array
	let personagemX = Personagem1[Math.floor(Math.random() * Personagem1.length)]
	let personagemY = Personagem2[Math.floor(Math.random() * Personagem2.length)]
	let localX = Local[Math.floor(Math.random() * Local.length)]
	let objetoX = Objeto[Math.floor(Math.random() * Objeto.length)]
	let emoçãoX = Emoções[Math.floor(Math.random() * Emoções.length)]
	let açãoX = Ação[Math.floor(Math.random() * Ação.length)]
	let corX = Cor[Math.floor(Math.random() * Cor.length)]
	let tamanhoX = Tamanho[Math.floor(Math.random() * Tamanho.length)]
	let alimentoX = Alimento[Math.floor(Math.random() * Alimento.length)]
	let animaisX = Animais[Math.floor(Math.random() * Animais.length)]
	let opiniãoX = Opinião[Math.floor(Math.random() * Opinião.length)]
	let animaisY = Animais2[Math.floor(Math.random() * Animais2.length)]
	let corY = Cor2[Math.floor(Math.random() * Cor2.length)]
	let tamanhoY = Tamanho2[Math.floor(Math.random() * Tamanho2.length)]

	// Substitua as palavras na história
	var newStory = story.replace(/\[Personagem1\]/g, personagemX)
	newStory = newStory.replace(/\[Personagem2\]/g, personagemY)
	newStory = newStory.replace(/\[Local\]/g, localX)
	newStory = newStory.replace(/\[Objeto\]/g, objetoX)
	newStory = newStory.replace(/\[Emoções\]/g, emoçãoX)
	newStory = newStory.replace(/\[Ação\]/g, açãoX)
	newStory = newStory.replace(/\[Cor\]/g, corX)
	newStory = newStory.replace(/\[Tamanho\]/g, tamanhoX)
	newStory = newStory.replace(/\[Alimento]/g, alimentoX)
	newStory = newStory.replace(/\[Animais]/g, animaisX)
	newStory = newStory.replace(/\[Opinião]/g, opiniãoX)
	newStory = newStory.replace(/\[Animais2]/g, animaisY)
	newStory = newStory.replace(/\[Cor2\]/g, corY)
	newStory = newStory.replace(/\[Tamanho2\]/g, tamanhoY)

	// Atualize o texto na página
	document.getElementById("storySavanna").innerHTML = newStory
}

// Adicione um botão para gerar a história
window.onload = function () {
	document.getElementById("generate-button").addEventListener("click", generateStory)
}
