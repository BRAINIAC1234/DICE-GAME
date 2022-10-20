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

    // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // toglogchiin eeljiig nogoo toglogch ruu shiljuulne.
    // herev idewhtei toglogch n 0 baiwal idewhtei toglogchiig 1 bolgo
    // ugui bol idewhtei toglogchiig 0 bolgo

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
});
