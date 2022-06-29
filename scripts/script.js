// buscar imagens
let urlQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz";
getImage();
function getImage(){
    const promisse = axios.get(`${urlQuizz}/image`);
    promisse.then(showImage);
}

function showImage(response){
    const 
}