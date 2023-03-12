// fetch('https://restcountries.com/v3.1/all')
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((country) =>{
//         console.log(country);
//     });
// })

const countryCard = document.createElement('a')
countryCard.classList.add('countryCard')
const  search_country = document.querySelector(".search-container input");
const themeChanger = document.querySelector('.theme-changer')

document.getElementById("filter_region").addEventListener("change", (e) => {
    const filter_region = e.target.value;
   
    let cardHTML = '';
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) =>{
            flag = country['flags']['svg'];
            name = country['name']['common'];
            population = country['population'];
            region = country['region'];
            capital = country['capital']
            maps = country['maps']['googleMaps']
            // console.log(maps)
            
            if(region.includes(filter_region)){
                cardHTML = cardHTML + `
                <a href="`+ maps +`" alt="googleMaps" target="_blank" class="country-card">   
                <img src="`+ flag +`" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">`+ name +`</h3>
                    <p><b>Population: </b>`+ population +` Millions</p>
                    <p><b>Region: </b>`+ region +`</p>
                    <p><b>Capital: </b>`+ capital +`</p>
                </div>
                </a>
            `
            }   
        });
        document.getElementById('country_container').innerHTML = cardHTML;
    })
});

document.getElementById("search_country").addEventListener("input", (e) => {
   const country_name_input =  e.target.value;
    let cardHTML = '';
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) =>{
            flag = country['flags']['svg'];
            name = country['name']['common'];
            population = country['population'];
            region = country['region'];
            capital = country['capital']
            maps = country['maps']['googleMaps']
            // console.log(maps)
            name_small = name.toLowerCase()
            if(name_small.includes(country_name_input)){
                cardHTML = cardHTML + `
                <a href="`+ maps +`" alt="googleMaps" target="_blank" class="country-card">   
                <img src="`+ flag +`" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">`+ name +`</h3>
                    <p><b>Population: </b>`+ population +` Millions</p>
                    <p><b>Region: </b>`+ region +`</p>
                    <p><b>Capital: </b>`+ capital +`</p>
                </div>
                </a>
            `
            }   
        });
        document.getElementById('country_container').innerHTML = cardHTML;
    })
    
});


let get_country_card = () => {
    let cardHTML = '';
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) =>{
            flag = country['flags']['svg'];
            name = country['name']['common'];
            population = country['population'];
            region = country['region'];
            capital = country['capital']
            maps = country['maps']['googleMaps']
            // console.log(maps)

            cardHTML = cardHTML + `
                <a href="`+ maps +`" alt="googleMaps" target="_blank" class="country-card">   
                <img src="`+ flag +`" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">`+ name +`</h3>
                    <p><b>Population: </b>`+ population +` Millions</p>
                    <p><b>Region: </b>`+ region +`</p>
                    <p><b>Capital: </b>`+ capital +`</p>
                </div>
                </a>
            `            
        });
    document.getElementById('country_container').innerHTML = cardHTML;
    })

    themeChanger.addEventListener('click', () => {
        document.body.classList.toggle('dark')
      })
      
    
}

get_country_card()