// buscar imagens
//let urlQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz";

getImage();
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
}

