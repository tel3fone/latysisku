const params = new URLSearchParams(window.location.search);
const searchValue = params.get("q");

BAI = {"basti": "ba'i","bapli": "bai","bangu": "bau","benji": "be'i","catni": "ca'i","claxu": "cau","ciste": "ci'e","cinmo": "ci'o","ckilu": "ci'u","cusku": "cu'u","detri": "de'i","diklo": "di'o","dunli": "du'i","djuno": "du'o","fatne": "fa'e","fasnu": "fau","finti": "fi'e","purpo": "for","zgana": "ga'a","gasnu": "gau","jalge": "ja'e","javni": "ja'i","jimte": "ji'e","jitro": "ji'o","jicmu": "ji'u","klama": "ka'a","krati": "ka'i","ckaji": "kai","ckini": "ki'i","krinu": "ki'u","korbi": "koi","kulnu": "ku'u","klani": "la'u","klesi": "le'a","lidne": "li'e","marji": "ma'e","manri": "ma'i","zmadu": "mau","mleca": "me'a","cmene": "me'e","mukti": "mu'i","mupli": "mu'u","nibli": "ni'i","panra": "pa'a","pagbu": "pa'u","pilno": "pi'o","porsi": "po'i","pluka": "pu'a","pruce": "pu'e","srana": "ra'a","krasi": "ra'i","traji": "rai","rinka": "ri'a","lifri": "ri'i","sarcu": "sau","sidju": "si'u","tadji": "ta'i","tamsm": "tai","stidi": "ti'i","tcika": "ti'u","stuzi": "tu'i","vanbi": "va'o","xamgu": "va'u","zanru": "zau","zukte": "zu'e"}

function go() {
    const value = document.getElementById("sisku").value;
    window.location.href =
      "https://tel3fone.github.io/latysisku/" + encodeURIComponent(value);
  }

const results = jbo.filter(obj => obj.word === searchValue);
if (results.length > 0) {
document.getElementById("word").textContent = searchValue;
document.getElementById("type").textContent = results[0]["selmaho"]? ("cmavo ("+results[0]["selmaho"]+")"):results[0]["type"];
document.getElementById("author").textContent = results[0]["username"];
if (results[0]["rafsi"]) {
    document.getElementById("rafsibase").classList.remove("invis")
    for (const lorafsi of results[0]["rafsi"]){
    document.getElementById("rafsi").innerHTML += `<div class="boxed">${lorafsi}</div>`;
    }
} else {
    document.getElementById("rafsibase").classList.add("invis");
}
if (BAI[searchValue]) {
        document.getElementById("baibase").classList.remove("invis");
    document.getElementById("bai").innerHTML += `<div class="boxed">${BAI[searchValue]}</div>`;
} else {
    document.getElementById("baibase").classList.add("invis");
}
let i = 0;
for (const defin of results) {
    i +=1
    document.getElementById("defs").innerHTML += `<div class="def">
    <h4>English Definition #${i}</h4> · by <b>${defin["username"]}</b> · ${defin["score"]}
    <div>${defin["def"].replace(/\$(.*?)\$/g, (_, x) => temml.renderToString(x))}</div>` + (defin["notes"] ? `<div class="notes"><label>Notes:</label>${defin["notes"].replace(/\$(.*?)\$/g, (_, x) => temml.renderToString(x)).replace(/\{(.*?)\}/g, "<a href=\"?q=$1\">$1</a>")}</div></div>` : "")

}} else {
        document.getElementById("all").innerHTML = searchValue ? `could not find word <b>"${searchValue}"</b>.` : "Welcome to <b>latsisku</b>! Search a word to see its definition."

}

if (gismety[searchValue]){


  const table = document.createElement("table");
  table.border = "1"; //deprecated but works so i dont care!

  Object.entries(gismety[searchValue]).forEach(([key, rows]) => {
    rows.forEach((rowValues, rowIndex) => {
      const tr = table.insertRow();
      if (rowIndex === 0) {
        const th = document.createElement("th");
        th.textContent = key;
        th.rowSpan = rows.length;
        tr.appendChild(th);
      }

      rowValues.forEach(value => {
        if (value) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);}
      });
    });
  });

  document.getElementById("output").appendChild(table);
}
console.log(results);
console.log(searchValue);
