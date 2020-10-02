const form = document.getElementById('form');
const userQuery = document.getElementById('input-text');
const outputDiv = document.getElementById('grid-container');

function showError(message) {
  const h2 = document.createElement('h2');
  h2.innerHTML = message;
  h2.className = 'errorEl';
  const container = document.querySelector('.container');
  container.appendChild(h2);
  setTimeout(() => {
    container.removeChild(h2);
  }, 2000);
}

async function fetchGifData(e) {
  e.preventDefault();
  const query = userQuery.value;
  if (query === '') {
    showError('Enter a correct search term');
  } else {
    const BASE_URL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=7gMkva3Ff8Kg1BBa8dMCjDLBaPgEE3Do`;
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();
    displayDataDOM(data);
  }
}

function displayDataDOM(data) {
  console.log(data);
  let output = '';
  data.data
    .map((image) => {
      output += `
      <div class="card">
      <img src="${image.images.downsized_large.url}" alt="">
        </div>
    `;
    })
    .join('');
  outputDiv.innerHTML = output;
}

// event listeners
form.addEventListener('submit', fetchGifData);
