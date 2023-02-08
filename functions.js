// Defina o texto inicial da história
// Defina o texto inicial da história
var story = "Hoje, [personagem] foi ao [local] para encontrar [objeto]. Enquanto isso, sentiu [emoção]."

// Defina as arrays de palavras para substituir
var personagens = ["João", "Maria", "Pedro", "Ana"]
var locais = ["parque", "praia", "café", "shopping"]
var objetos = ["livro", "flor", "chave", "dinheiro"]
var emoções = ["feliz", "triste", "animado", "cansado"]

// Função para gerar uma nova história
function generateStory() {
	// Escolha aleatoriamente uma palavra de cada array
	let personagem = personagens[Math.floor(Math.random() * personagens.length)]
	let local = locais[Math.floor(Math.random() * locais.length)]
	let objeto = objetos[Math.floor(Math.random() * objetos.length)]
	let emoção = emoções[Math.floor(Math.random() * emoções.length)]

	// Substitua as palavras na história
	var newStory = story.replace("[personagem]", personagem)
	newStory = newStory.replace("[local]", local)
	newStory = newStory.replace("[objeto]", objeto)
	newStory = newStory.replace("[emoção]", emoção)

	// Atualize o texto na página
	document.getElementById("story").innerHTML = newStory
}

// Adicione um botão para gerar a história
window.onload = function () {
	document.getElementById("generate-button").addEventListener("click", generateStory)
}
