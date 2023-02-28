// Defina o texto inicial da história
var story =
	"Era uma vez no(a) [Local] mais [Opinião] do oceano, [Personagem1] e [Personagem2] estavam mergulhando e explorando as maravilhas do mar. De repente, eles encontraram um(a) [Objeto] [Tamanho] de cor [Cor], que estava brilhando intensamente. [Personagem1] ficou [Emoções] com aquilo e se aproximou para tocar, mas [Personagem2] ficou com medo e tentou afastar o amigo. No entanto, quando [Personagem1] tocou o objeto, ele soltou uma luz forte que iluminou todo o [Local]. Eles ficaram [Emoções] e maravilhados com o que viram. De repente, surgiram vários tipos de animais marinhos ao redor deles, todos curiosos e intrigados com a luz. [Personagem1] e [Personagem2] começaram a interagir com os animais, alimentando-os com [Alimento] e brincando com eles. Mas, de repente, um grande [Animais] apareceu e começou a perseguir os amigos. Eles nadaram para se esconder atrás de um [Objeto] [Tamanho] de cor [Cor2], mas o [Animais] logo os encontrou. [Personagem1] teve a ideia de usar o objeto brilhante que tinham encontrado para afastar o [Animais]. Funcionou! O [Animais] ficou assustado e fugiu para longe. Depois desse susto, [Personagem1] e [Personagem2] decidiram que era hora de voltar para a superfície, mas eles nunca esqueceriam daquela aventura incrível no Mar e de todos os animais marinhos que conheceram."

// Defina as arrays de palavras para substituir
let Personagem1 = ["Marina", "Sofia", "Diego", "Luiza", "Luis", "Beatriz", "Pedro", "Ana", "Lucas", "Isabela", "Vitoria", "Juliana", "Thiago", "Miguel", "Mariana"]
let Personagem2 = ["Bruna", "Gabriel", "Carolina", "Gustavo", "Rafael", "Marcela", "Mateus", "Rita", "Samuel", "Larissa", "Tiago", "Gabriela", "Ricardo", "Camila", "Cristiano"]

let Local = [
	"Recife de corais",
	"Caverna subaquática",
	"Abismo dos peixes-lua",
	"Canyon dos tubarões",
	"Enseada dos golfinhos",
	"Gruta das tartarugas gigantes",
	"Lagoa dos hipopótamos aquáticos",
	"Vulcão submarino",
	"Arquipélago dos corais",
	"Labirinto das algas",
	"Jardim das medusas",
	"Canal das enguias",
	"Plataforma dos moluscos",
	"Atol de esponjas",
]
let Objeto = [
	"Pérola iridescente",
	"Concha gigante",
	"Cristal de água salgada",
	"Corais dourados",
	"Esponja de coral",
	"Concha de abalone",
	"Alga exótica",
	"Camafeu de tartaruga",
	"Pluma de água-viva",
	"Água de nascente subaquática",
	"Cauda de sereia",
	"Esmeralda do mar",
	"Pirita de água",
	"Estrela-do-mar rara",
	"Coral",
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
let Cor = ["Roxo", "Amarelo", "Verde", "Vermelho", "Laranja", "Azul", "Rosa", "Púrpura", "Marrom", "Cinza", "Dourado", "Verde escuro", "Azul-turquesa", "Vermelho", "Rosa"]
let Cor2 = ["Roxo", "Amarelo", "Verde", "Vermelho", "Laranja", "Azul", "Rosa", "Púrpura", "Marrom", "Cinza", "Dourado", "Verde escuro", "Azul-turquesa", "Vermelho", "Rosa"]

let Tamanho = ["Minúsculo", "Pequeno", "Médio", "Grande", "Gigante", "Enorme", "Minúsculo", "Tão grande quanto uma montanha"]

let Tamanho2 = ["Minúsculo", "Pequeno", "Médio", "Grande", "Gigante", "Colossais", "Massivo", "Enorme", "Minúsculo", "Tão grande quanto uma montanha", "Alto quanto uma casa"]

let Ação = [
	"nadou",
	"mergulhou",
	"prende a respiração",
	"observou a vida marinha",
	"surfou",
	"explorou recifes de coral",
	"navegou",
	"mergulhou com cilindro de oxigênio",
	"observou criaturas marinhas noturnas",
	"mergulhou em naufrágios",
	"praticou esportes aquáticos",
	"fez snorkeling",
	"pescou no mar",
	"descobriu grutas submarinas",
	"caçou com arpão",
	"explorou uma ilha deserta no mar",
	"surfou em ondas gigantes",
	"observou baleias e golfinhos",
	"navegou em um barco a vela",
	"observou corais e peixes coloridos",
	"nadou com tartarugas marinhas",
	"explorou um navio naufragado",
	"descobriu um recife de coral novo",
	"praticou mergulho livre",
	"participou de uma expedição submarina",
	"observou tubarões e arraias",
	"mergulhou em cavernas subaquáticas",
	"capturou imagens de vida marinha para estudos",
	"buscou tesouros em naufrágios",
	"observou o fundo do mar com equipamentos especializados",
]

let Animais = [
	"Tartaruga-marrom de rabo-de-palha",
	"Peixe-lua azul-claro",
	"Tubarão-dente-de-sabre prateado",
	"Caranguejo-esmeralda gigante",
	"Tubarão Gigante Pré-histórico",
	"Água-viva com tentáculos brilhantes",
	"Lula-luminosa de olhos grandes",
	"Polvo-estrela com tentáculos em forma de estrela",
	"Enguia elétrica violeta",
	"Carpa-dourada com escamas multicoloridas",
	"Golfinho de cabeça-preta com manchas brancas",
	"Tubarão Gigante Pré-histórico",
]

let Animais2 = [
	"Arraia-azul com manchas amarelas",
	"Peixe-dragão vermelho com escamas iridescentes",
	"Tubarão-martelo prateado com nadadeiras grandes",
	"Caranguejo-fantasma transparente com olhos azuis",
	"Medusa-rosa com tentáculos roxos",
	"Polvo-mandarim com tentáculos em forma de leque",
	"Enguia-de-fogo laranja com listras pretas",
	"Cavalo-marinho-fantasia com escamas arco-íris",
	"Orca de olhos verdes com manchas douradas",
	"Tubarão Gigante Pré-histórico",
]
let Alimento = [
	"Algas vermelhas",
	"Anêmonas-do-mar",
	"Plâncton",
	"Caranguejos",
	"Tartarugas-marinhas",
	"Mexilhões",
	"Caracóis marinhos",
	"Ostras",
	"Camarão",
	"Peixe-lua",
	"Águas-vivas",
	"Enguias",
	"Lulas",
	"Estrelas-do-mar",
	"Cavalos-marinhos",
]

let Opinião = [
	"surpreendente",
	"diferente",
	"maravilhoso",
	"exótico",
	"estranho",
	"incrível",
	"Fascinante",
	"Incrível",
	"Fantástico",
	"Extraordinário",
	"Espetacular",
	"Mágico",
	"Maravilhoso",
	"Surpreendente",
	"Incrível",
	"Deslumbrante",
	"Emocionante",
	"Impressionante",
	"Encantador",
]

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
	document.getElementById("storyAqua").innerHTML = newStory
}

// Adicione um botão para gerar a história
window.onload = function () {
	document.getElementById("generate-button").addEventListener("click", generateStory)
}
