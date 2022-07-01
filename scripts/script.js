// buscar imagens
//let urlQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz";

/*getImage();
function getImage() {
	const promisse = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
	promisse.then(showImage);
	console.log(promisse)
}

function showImage(response) {
	console.log(response)
	let quizzImage = document.querySelector(".todos-quizzes")
	quizzImage.innerHTML = "";

	for (let i = 0; response.data.length; i++) {
		quizzImage += `
		<section class="local-todos-quizzes hidden">
			<h2>Todos os Quizzes</h2>
			<ul class="todos-quizzes">
				<li>
					<img src="${response.data[i].image}.png">
					<p>${response.data[i].title}</p>
				</li>
			</ul>
		</section> 
	 `
	}
}
AllQuizzezz();
function AllQuizzezz(){
	const promisse = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
	promisse.then(getAllQuizzezz);
	console.log(promisse)
}
function getAllQuizzezz(response) {
	const elementImage = document.querySelector(".todos-quizzes");
	const elementText = document.querySelector(".todos-quizzes");

	elementImage.src = response.data.image;
	elementText.innerHTML = response.data.title;
	console.log(response)
}

/*let arrayQuizzesServidor;
function getQuizzes() {
	const quizzes = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
	quizzes.then(function (resposta) {
		arrayQuizzesServidor = resposta.data;
		preencheContainerDeQuiz(".todos-quizzes", arrayQuizzesServidor)
		console.log("quizzes")
	});
}


function quizzes(){
	quizzes.catch(window.location.reload);
	arrayQuizzesServidor;
}
   
[
	{
		id: 1,
		title: "Título do quizz",
		image: "https://http.cat/411.jpg",
		questions: [
			{
				title: "Título da pergunta 1",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			},
			{
				title: "Título da pergunta 2",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			},
			{
				title: "Título da pergunta 3",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			}
		],
		levels: [
			{
				title: "Título do nível 1",
				image: "https://http.cat/411.jpg",
				text: "Descrição do nível 1",
				minValue: 0
			},
			{
				title: "Título do nível 2",
				image: "https://http.cat/412.jpg",
				text: "Descrição do nível 2",
				minValue: 50
			}
		]
	}
]*//*
let arrayQuizzesServidor;



//Busca todos os quizzes no Servidor, e armazena o  array obtido na variável global "arrayQuizzesServidor"
function getQuizzes() {
	const quizzes = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
	quizzes.then(function (resposta) {
		arrayQuizzesServidor = resposta.data;
		preencheContainerDeQuiz(".todos-quizzes", arrayQuizzesServidor)
		console.log("Sucesso")
	});
	quizzes.catch(window.location.reload);
}


function preencheContainerDeQuiz(classeDoContainer, arrayDeQuizzes) {
	let localTodos = document.querySelector(".todos-quizzes");
	let localSeus = document.querySelector(".seus-quizzes");
	let meusQuizzesId = [];
	localSeus.innerHTML = "";
	localTodos.innerHTML = "";
	if (localStorage.getItem("idsLocal") !== null) {
		meusQuizzesId = JSON.parse(localStorage.getItem("idsLocal"));
	}

	for (let i = 0; i < arrayDeQuizzes.length; i++) {
		if (meusQuizzesId.includes(arrayDeQuizzes[i].id)) {
			localSeus.innerHTML += `<div class="card">
									<li class="quizz" id="${arrayDeQuizzes[i].id}" onclick="executaQuiz(${arrayDeQuizzes[i].id})">
										<img src="${arrayDeQuizzes[i].image}">
										<div class="gradient"></div>
										<h3>${arrayDeQuizzes[i].title}</h3>
									</li>
									<div class="delete" onclick="remove(${arrayDeQuizzes[i].id})"><ion-icon name="trash-outline"></ion-icon></div>
									</div>`;
		} else {
			localTodos.innerHTML += `<li class="quizz" id="${arrayDeQuizzes[i].id}" onclick="executaQuiz(${arrayDeQuizzes[i].id})">
									<img src="${arrayDeQuizzes[i].image}">
									<div class="gradient"></div>
									<h3>${arrayDeQuizzes[i].title}</h3>
								</li>`;
		}
	}
	trocaDeSection();
}*/

//aqui

const quizzObject = {
	title: "",
	image: "",
	questions: [],
	levels: [],
};

let amountOfQuestions = 0;
let amountOfLevels = 0;

const validUrl = (url) => {
	try {
		new URL(url);
	} catch (_) {
		return false;
	}
	return true;
};
function validHex(h) {
	var a = parseInt(h, 16);
	return a.toString(16) === h;
}

const createQuizz = () => {
	const listQuizz = document.querySelector(".listQuizz");
	const creatingQuizz = document.querySelector(".creating-quizz");

	listQuizz.setAttribute("class", "noDisplay");
	creatingQuizz.classList.remove("noDisplay");
};

const makeQuestions = () => {
	let nextPage = false;

	const start = document.querySelector(".start");
	const createQuestions = document.querySelector(".create-questions");

	quizzObject.title = document.querySelector(".quizz-title").value;
	quizzObject.image = document.querySelector(".quizz-image").value;
	amountOfQuestions = document.querySelector(".amount-questions").value;
	amountOfLevels = document.querySelector(".amount-levels").value;

	if (quizzObject.title.length > 20 || quizzObject.title.length < 65) {
		if (validUrl(quizzObject.image)) {
			if (amountOfQuestions >= 3) {
				if (amountOfLevels >= 2) {
					nextPage = true;
				}
			}
		}
	}

	if (nextPage) {
		start.setAttribute("class", "noDisplay");
		createQuestions.classList.remove("noDisplay");
		renderCreateQuestions(amountOfQuestions);
	} else {
		alert("Preencha os dados corretamente!");
	}
};

const selectLevel = () => {
	const createQuestions = document.querySelector(".create-questions");
	const selectLevel = document.querySelector(".select-level");

	let nextPage = false;

	for (let i = 1; i <= amountOfQuestions; i++) {
		let questionsObject = {
			title: "",
			color: "",
			answers: [],
		};
		let answersObject1 = { text: "", image: "", isCorrectAnswer: false };
		let answersObject2 = { text: "", image: "", isCorrectAnswer: false };
		let answersObject3 = { text: "", image: "", isCorrectAnswer: false };
		let answersObject4 = { text: "", image: "", isCorrectAnswer: false };

		const question = document.querySelector(`.question${i}`);
		const inputs = question.querySelectorAll("input");

		questionsObject.title = inputs[0].value;
		questionsObject.color = inputs[1].value;

		if (inputs[2].value !== "" || inputs[3].value !== "") {
			answersObject1.text = inputs[2].value;
			answersObject1.image = inputs[3].value;
			answersObject1.isCorrectAnswer = true;
			questionsObject.answers.push(answersObject1);
		}

		if (inputs[4].value !== "" || inputs[5].value !== "") {
			answersObject2.text = inputs[4].value;
			answersObject2.image = inputs[5].value;
			answersObject2.isCorrectAnswer = false;
			questionsObject.answers.push(answersObject2);
		}

		if (inputs[6].value !== null || inputs[7].value !== null) {
			answersObject3.text = inputs[6].value;
			answersObject3.image = inputs[7].value;
			answersObject3.isCorrectAnswer = false;
			questionsObject.answers.push(answersObject3);
		}

		if (inputs[8].value !== "" || inputs[9].value !== "") {
			answersObject4.text = inputs[8].value;
			answersObject4.image = inputs[9].value;
			answersObject4.isCorrectAnswer = false;
			questionsObject.answers.push(answersObject4);
		}

		quizzObject.questions.push(questionsObject);
	}

	console.log(quizzObject);

	createQuestions.setAttribute("class", "noDisplay");
	selectLevel.classList.remove("noDisplay");
};

const ending = () => {
	const selectLevel = document.querySelector(".select-level");
	const ending = document.querySelector(".ending");


	selectLevel.setAttribute("class", "noDisplay");
	ending.classList.remove("noDisplay");
	start();
};




function start() {
	const inputTitle = document.querySelector(".quiz-title").value;
	console.log(inputTitle);
	const inputUrl = document.querySelector(".quizz-image").value;
	const inputQuestions = document.querySelector(".amount-questions").vallue;
	const inputLevel = document.qquerySelector(".amount-levels").value;

	const ownquizz = {
		title: inputTitle,
		image: inputUrl,
		questions: inputQuestions[
			{
				title: title,
				color: color,
				answers: [
					{
						text: text,
						image: image,
						isCorrectAnswer: true
					},
					{
						text: text,
						image: image,
						isCorrectAnswer: false
					}
				]
			},
			{
				title: title,
				color: color,
				answers: [
					{
						text: text,
						image: image,
						isCorrectAnswer: true
					},
					{
						text: text,
						image: image,
						isCorrectAnswer: false
					}
				]
			},
			{
				title: title,
				color: color,
				answers: [
					{
						text: text,
						image: image,
						isCorrectAnswer: true
					},
					{
						text: text,
						image: image,
						isCorrectAnswer: false
					}
				]
			}
		],
		levels: inputLevel[
			{
				title: title,
				image: image,
				text: text,
				minValue: 0
			},
			{
				title: title,
				image: image,
				text: text,
				minValue: 50
			}
		]
	}

	const promisse = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", ownquizz);
	promisse.then(showQuizz);
	console.log(showQuizz
		)
}

function showQuizz() {
	console.log("olá")
}
showQuizz();