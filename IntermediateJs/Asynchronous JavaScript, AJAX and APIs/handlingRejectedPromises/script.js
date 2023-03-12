'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => {
      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// SUMMARIZE
/*
Bazen promisem rejected olucak iste bu durumda kullaniciya bir hata mesaji gosterebilmek icin her "then metodum" icerisinde 2.parametre olarak promise rejected olursa nasil bir hata mesaji gosterilsini icerir.
Bir promise'imin rejected olabilmesi icin misal internet baglantisi gitmesi ornek verilebilir.Ben demisal yalanda tarayicimin inspector'unu acip network kismindan internet baglantimi kapatip denrsem bu ornegi promisem rejected olucagindan then'e ekledigim 2.paramteremdeki hata mesaji gozukucek ekranda.
Simdi aptal gibi her then metodumun icerisine 2.parametre ekleyip hata olursa bunlar olsun demek cok sacma olacagindan "catch" adinda bir metod kullanicagim. Bu "catch" metodum'u then'lerimin en sonuna ekleyip eger 
bir hata olursa bunla bunlar  yasansin demis oluyorum.****>catch ayrica yeni  bir promise dondurecektir,UNUTMA!!!

///////
Ayrica "finally" adinda bir baska metodum ile promisem rejected olsada olmasada ya da fulfilled olsa olmasada hic fark etmeksizin bunlari bunlari yap demis oluyorum.Yani promise'umun sonucunun hicbir onemi olmaksizin finally icindeki seyleri gerceklestir, demis oluyorum.
"catch"'de ise sahip oldugum promise eger herhangi bir anda rejected olsursa yapilmasi gerekeni bildirmis oluyorum.
*/
