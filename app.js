// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// var diceNumber = Math.floor(Math.random() * 6) + 1;

// Програм эхлэхэд бэлдэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(" .dice ");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //   Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";
  //   Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1-ees yalgaatai too buulaa.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.

    switchToNextPlayer();
  }
});

// HOLD товчлуурын эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобал оноон дээр нэмж өгнө.

  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Дэлгэц дээр оноог нь өөрчилнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах

  if (scores[activePlayer] >= 100) {
    // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
    document.getElementById("name-" + activePlayer).textContent = "WWCD!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
  } else {
    // Тоглогчийн ээлжийг солино
    switchToNextPlayer();
  }
});

// DRY DONT REPEAT
// Энэ Функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // toglogchiin eeljiig nogoo toglogch ruu shiljuulne.

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tur alga bolgoh
  diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх товчний эвент листенер
doc;
