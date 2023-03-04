'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Bu ustte ki kod blogumla kendime 1 ile 20 arasinda bir sayi urettirip bu sayimi secretNumber adli degiskenime atadim.Bu degiskeni uretmekteki amacim oyuncu tarafindan girilen sayi degeriyle bunun karsilastirmasini yaparak ayniysa oyunu kazanma durumlarini aciga cikartmak.Teknik olarak bu degiskenim SORU ISARETIYLE TEMSIL EDILEN KISMA KARSILIK GELMEKTEDIR.Aslinda bu  secretNumber adli degiskeni sadece ben kafamda oyunu tasarlarken o bicimde kabul ediyorum.

let score = 20;
let highScore = 0;

//Bu ustte Her oyunda oldugu gibi oyun baslangic ekraninda bazi degerleriminn baslangic degerleri bulunmali. Bu oyun icin benim score 'um yani can hakkim 20 ile ve oyunu ilk defa baslattigim icin highScore'um 0 ile baslamsi mantiklidir.

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Bu ustte bu oyun icin cok defa kez tekrarlanacak olan kod satirimi kodun okunabilirligini arttirmasi ve yazarken kolaylik sagliyabilmesi adina o kod satirina basit bir fonksiyona donusturdum.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Bu ustte biliyorsun ki bu tarz kullanicadan veri alan inputlar o veriyi daima otomatik string formatinda alir bu yuzden Number donusumu yapilmasi gerekir.Bu donusumude addEventListener adindaki ozel fonksiyonumla check adli butona her tiklandiginda yapilmasini saglattim.

  if (!guess) {
    displayMessage('⛔️ No number!');
  }

  // Eger bu tarz kullanicidan veri alip ona gore bir sonuc donduren bir oyun yapiyorsam sende biliyorsun ki hic veri girilmezse disaridan bunun ekranda gosterilmesi gerekir.Onu da yukaridaki if blogumla basitce saglarim.
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Bu ustte benim sayi tahminimle secretNumber eger ayni olursa oyunu kazanacagim icin ekranda degismesini istedigim yerleri degistirdim ve ayrica oyunu kazandigim anda mevcut kalan can hakkim yani score adli degiskenim highScore' dan buyukse yeni rekor yaptigim icin bunu oyun ekraninda yeni highScore olarak guncellemeliyim. Bu islemide if blogumun icersine if blogu acarak saglarim.
    else if (guess == !secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
      // Bu ustte demek istedigim benim tahminim secretNumber' dan farkliysa ya o anlik canimdan birini yemisimdir ya da butun canim bu yaptigim tahminle bitmis olucagindan  bu bicimde yazdim.
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Bu ustte again butonuma addEventListener aktararak oyun en basinda nasilsa ilk halindeki degerlerine geri donmesini saglattim .
