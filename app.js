const form = document.getElementById('form');
const userQuery = document.getElementById('input-text');
const outputDiv = document.getElementById('grid-container');
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
    .map((image, i) => {
      output += `
      <div class="card">
      <img src="${image.images.downsized_large.url}" alt="">
      <span class="desc">Hello</span>
        </div>
    `;
    })
    .join('');
  outputDiv.innerHTML = output;
}

// event listeners
form.addEventListener('submit', fetchGifData);
