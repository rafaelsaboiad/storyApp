// Defina o texto inicial da história
// Defina o texto inicial da história
var story =
	"Hoje, [Personagem1] e [Personagem2] decidiram ir à floresta para uma aventura. Quando chegaram lá, eles ficaram maravilhados com a [Cor] da floresta e o [Tamanho] das arvores. Eles começaram a caminhar pelo meio da mata, admirando a diversidade de [Animais] e plantas. De repente, eles avistaram um [Animais] [Cor] e [Personagem1] ficou [Emoções]. Mas [Personagem2] rapidamente [Ação], evitando que o [Animais] os atacasse. Mais adiante, eles encontraram uma cascata e decidiram seguir sua correnteza. Eles logo chegaram a uma clareira onde encontraram uma árvore [Tamanho] com frutos [Cor]. Eles comeram algumas frutas e sentiram-se [Emoções] ao experimentar o sabor incrível. Eles também encontraram uma caverna [Local] e decidiram explorá-la. Dentro da caverna, eles encontraram uma estrela cadente [Objeto] brilhante e decidiram levá-la de volta com eles como recordação da aventura.No caminho de volta, eles encontraram um riacho e decidiram acampar para passar a noite. Eles cozinharam um jantar [Alimento] com o que haviam colhido na floresta e conversaram sobre as memórias incríveis que estavam fazendo. Enquanto dormiam, ouviram os sons de [Animais] da noite, agradecendo por se sentirem tão vivos e [Emoções] na floresta."

// Defina as arrays de palavras para substituir
let Personagem1 = ["João", "Maria", "Pedro", "Ana"]
let Personagem2 = ["João", "Maria", "Pedro", "Ana"]
let Local = ["parque", "praia", "café", "shopping"]
let Objeto = ["livro", "flor", "chave", "dinheiro"]
let Emoções = ["feliz", "triste", "animado", "cansado"]
let Cor = ["vermelho", "azul", "verde", "amarelo", "rosa"]
let Tamanho = ["pequeno", "médio", "grande", "gigante", "miniatura"]
let Ação = ["correr", "andar", "comer", "pular", "nadar", "voar"]
let Animais = ["gato", "cachorro", "pássaro", "peixe", "leão", "elefante"]
let Alimento = ["pão", "frango", "pizza", "macarrão", "sushi", "feijão", "arroz", "salada", "maçã", "banana"]
let Opnião = ["bom", "aceitável", "horroroso", "péssimo", "normal"]

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

	// Atualize o texto na página
	document.getElementById("story").innerHTML = newStory
}

// Adicione um botão para gerar a história
window.onload = function () {
	document.getElementById("generate-button").addEventListener("click", generateStory)
}
