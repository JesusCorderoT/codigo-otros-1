const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//
//se quita el # por un .
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//se agrega async 
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //se agrega data
  const data = await response.json();
  // se cambia a reponse
  console.log(response);
  $n.textContent = `${data.name}`;// se cambia '' por ``
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // se agrega $
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);