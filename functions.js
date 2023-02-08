const animais = [
	"Cachorro",
	"Gato",
	"Pássaro",
	"Peixe",
	"Coelho",
	"Hamster",
	"Leão",
	"Tigre",
	"Elefante",
	"Girafa",
	"Zebra",
	"Hipopótamo",
	"Jaguar",
	"Puma",
	"Onça-pintada",
	"Lobo",
	"Urso",
	"Raposa",
	"Golfinho",
	"Baleia",
	"Orca",
	"Tartaruga",
	"Crocodilo",
	"Jabuti",
	"Arara",
	"Papagaio",
	"Avestruz",
	"Ganso",
	"Pato",
	"Cisne",
	"Garça",
]

function replaceAnimais() {
	const textElement = document.getElementById("animais")
	let text = textElement.innerHTML

	const randomIndex = Math.floor(Math.random() * animais.length)
	const randomWord = animais[randomIndex]

	text = text.replace("original", animais)

	textElement.innerHTML = animais
}

//Neste exemplo, uma array words é criada com as palavras alternativas.
//Na função replaceWords(), uma palavra aleatória é escolhida usando Math.floor(Math.random() * words.length), que gera um número inteiro aleatório entre 0 e words.
//length - 1. Em seguida, a palavra aleatória é usada para substituir a palavra "original". O resto do código é semelhante ao exemplo anterior.
