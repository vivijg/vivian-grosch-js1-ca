
const baseURL = "https://rickandmortyapi.com/api/character/";

fetch("https://rickandmortyapi.com/api/character/")
    .then(function(response) {
        return response.json();
    })

    .then(function(json) {
        createGames(json);
    })

    .catch(function(error) {
        console.log(error);
    });
      

      function createGames(json) {
        console.log(json);
    
        const results = json.results;
    
        const card = document.querySelector(".results");
    
       
        let html = "";

        for(let i = 0; i < results.length; i++) {
           
            let unkownType =" Unknown";

            if (results[i].type) {
               unkownType = results[i].type;
            }
           
           
            html += `<div class="game">
                        <h4>${results[i].name}</h4>
                        <p>Type:${unkownType}</p>
                        <p>Episodes: ${results[i].episode.length}</p>
                        <img src="${results[i].image}" alt="${results[i].name}">
                        <a class="btn btn-primary" href="details.html?id=${results[i].id}"></a>
                    </div>`;
                               
        }
    
        card.innerHTML = html;
    
    }