// buscar imagens
//let urlQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz";

/*getImage();
function getImage(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promisse.then(showImage);
    console.log(promisse)
}

function showImage(response){
    console.log(response)
    let quizzImage = document.querySelector(".local-todos-quizzes")
    quizzImage.innerHTML="";
    
    for(let i = 0; response.data.length; i++){
        quizzImage +=`
        <section class="local-todos-quizzes hidden">
            <h2>Todos os Quizzes</h2>
            <ul class="todos-quizzes">
                <li>
                    <img src="${response.data[i].image}">
                    <p>${response.data[i].text}</p>
                </li>
            </ul>
        </section> 
     `
    }
}*/
let arrayQuizzesServidor;
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
]