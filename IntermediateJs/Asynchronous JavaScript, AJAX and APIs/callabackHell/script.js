'use strict';
///////////////////////////////////////
// Welcome to Callback Hell

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//
//
//
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

//

/*
Ben bu ustte ozetle ilk defasinda cagirdigim AJAX cagrimi kullanarak portekiz verilerini API'imdan alip sonra onun komsu ulkesi yani borderinda hangi ulke varsa ikinci AJAX cagrimi buna bagli olarak gercekelstirdim.Yani ikinci AJAX CALL'um artik birinci AJAX CALL cagrima bagli hale geldi.Ben bu sekilde bu zinciri uzatabilirdim.Fakat bu cok mantikli bir yol degil sebebi ise KOD KARMASIKLIGI VE BUG PROBLEMI. Bu nedenden oturu bu CALBACKHELL durumundan olabildigince uzak durarak islemlerimi gerceklestirmeliyim..

!!!DIPNOT~~~~
Bu ustteki kodlarimda her ne kadar ikinci AJAX CAGRI'mi birinci AJAX CAGRI'sina bagimli hale getirmeyi hedeflesemde kodumda API'min sahibinin yapmis oldugu guncellemden kaynakli istedigim tam olarak gerceklesmedi.Cunku bu API Jonas hocam videoyu cektikten sonra cok degismis ve bu yapmaya calistigim ornekteki dinamiklik tamamen ortadan kalkmistir. Fakat olayin mantigini kavradigim icin ve yazdigim kodda teorik olarak herhangi bir sorun bulunmadigindan benim icin bir problem YOK~~~
*/
//

//

//

//
//MESELA BU ASAGIDAKI ASENKRON JS KODUM GERCEK BIR CALBACK HELL ORNEGIDIR.
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
