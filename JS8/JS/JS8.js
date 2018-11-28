fetch('https://api.tvmaze.com/shows');

// show the search results
function SearchAPI ({}) {
  const ISF = document.getElementById('input');
  fetch(`https://api.tvmaze.com/search/shows?q=${ISF.value}`)
  .then(blob => blob.json())
  .then(shows => {
    console.log(shows);
    const app = document.getElementById('app');
    app.innerHTML = shows.map(({ show }) => `
          <div class="lista">
            <row class="image"> 
            ${show.image ? `<img src="${show.image.medium}">` : ''}
            </row>
            <div class="movie-info">
              <h5>${show.name}</h5>
              <a href="${show.url}">Link: ${show.url}</a>
              <p>Genres: ${show.genres}</p>
              <p>Summary: ${show.summary}</p>
            </div>
          </div>

        `).join('');
  });
   document.getElementById('input').className = "searchi";
   document.getElementById('as').className = "searchb";
   let p = document.getElementsByTagName('p')[0];
   let cont = document.getElementById('content');
   let row = document.createElement('row');
   cont.append(row);
   row.append(ISF);
   row.append(search);
   cont.removeChild(p);
   cont.className = "search";
}

const search = document.getElementById('as');
search.addEventListener('click', SearchAPI);

