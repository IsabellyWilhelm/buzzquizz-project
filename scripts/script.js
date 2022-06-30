let arrayQuizzesServidor;



//Busca todos os quizzes no Servidor, e armazena o  array obtido na variável global "arrayQuizzesServidor"
function getQuizzes() {
    const quizzes = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
    quizzes.then(function(resposta) {
        arrayQuizzesServidor = resposta.data;
        preencheContainerDeQuiz(".todos-quizzes",arrayQuizzesServidor)
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
    if(localStorage.getItem("idsLocal") !== null) {
        meusQuizzesId = JSON.parse(localStorage.getItem("idsLocal"));
    }

    for(let i=0;i<arrayDeQuizzes.length;i++) {
        if(meusQuizzesId.includes(arrayDeQuizzes[i].id)){
            localSeus.innerHTML += `<div class="card">
                                    <li class="quizz" id="${arrayDeQuizzes[i].id}" onclick="executaQuiz(${arrayDeQuizzes[i].id})">
                                        <img src="${arrayDeQuizzes[i].image}">
                                        <div class="gradient"></div>
                                        <h3>${arrayDeQuizzes[i].title}</h3>
                                    </li>
                                    <div class="delete" onclick="remove(${arrayDeQuizzes[i].id})"><ion-icon name="trash-outline"></ion-icon></div>
                                    </div>`;
        }else {
        localTodos.innerHTML += `<li class="quizz" id="${arrayDeQuizzes[i].id}" onclick="executaQuiz(${arrayDeQuizzes[i].id})">
                                    <img src="${arrayDeQuizzes[i].image}">
                                    <div class="gradient"></div>
                                    <h3>${arrayDeQuizzes[i].title}</h3>
                                </li>`;
        }
    }
    trocaDeSection();
}