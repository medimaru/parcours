<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>Document</title>
</head>

<input type="file" id="fichier-CSV" />
<body>
    
</body>
</html>
<script defer>
    let Result = []; // stocker les donnees du tableaux csv Recuperer

const input = document.getElementById("fichier-CSV");
var reader = new FileReader();
let header = ["Pseudo", "Sex", "Langage"]; // ? Headers name
input.addEventListener("change", (event) => {
  if (event.target.value.length === 0) {
    console.log("Pas de fichier selectionner !");
  } else {
    reader.readAsText(input.files[0]);
    reader.onload = function () {
      let dataCSV = reader.result.toString().split("\n");
      for (let i = 1; i < dataCSV.length - 1; i++) {
        let obj = {};
        let currentline = dataCSV[i].split(";");
        for (let j = 0; j < header.length; j++) {
          obj[header[j]] = currentline[j];
        }
        Result.push(obj);
      }
      
      Result.forEach((e) => {
        e.Sex = e.Sex.replace("f", "1").replace("m", "2");
        e.Langage = e.Langage.replace("\r\n", "")
          .replace("\r", "")
          .replace("\n", "")
          .replace(" ", "")
          .replace("(modern)", "")
          .replace("english", "1")
          .replace("french", "2")
          .replace("spanish", "3")
          .replace("german", "4")
          .replace("italian", "5")
          .replace("jewish", "6")
          .replace("biblical", "7")
          .replace("polish", "8")
          .replace("russian", "9")
          .replace("romanian", "10")
          .replace("greek", "11")
          .replace("ancient greek", "12")
          .replace("scandinavian", "13")
          .replace("scottish", "14")
          .replace("american", "15")
          .replace("dutch", "16")
          .replace("hungarian", "17")
          .replace("portuguese", "18")
          .replace("czech", "19")
          .replace("slovak", "20")
          .replace("slovene", "21")
          .replace("bulgarian", "22")
          .replace("icelandic", "23")
          .replace("armenian", "24")
          .replace("ancient roman", "25")
          .replace("roman mythology", "26")
          .replace("welsh mythology", "27")
          .replace("irish", "28")
          .replace("catalan", "29")
          .replace("proven�al", "30")
          .replace("welsh", "31")
          .replace("welsh", "32")
          .replace("celtic mythology", "33")
          .replace("greek mythology", "34")
          .replace("welsh", "35")
          .replace("frisian", "36")
          .replace("late roman", "37")
          .replace("near eastern mythology", "38")
          .replace("breton", "39")
          .replace("croatian", "40")
          .replace("native american", "41")
          .replace("danish", "42")
          .replace("swedish", "43");

         e.Langage = e.Langage.split(",").map(l => {
             return l.trim()
         });
      });
      
      

      
    };
  }
});


function start(langue,sex) {
  console.clear();
  console.log(Result[0]);


  let PseudoFeminin = Result.filter((e) => e.Sex == "1"); //! Pesudo Feminin
  let PseudoMasculin = Result.filter((e) => e.Sex == "2"); //! Pesudo Masculin

  

  let PseudoFFr = PseudoFeminin.filter((e) => e.Langage[0] == 2 && e.Langage.length == 1); //! Pesudo Feminin Francais
  let PseudoFEng = PseudoFeminin.filter((e) => e.Langage[0] == 2 && e.Langage.length == 1); //! Pesudo Feminin Englais 

  let PseudoMFr = PseudoMasculin.filter((e) => e.Langage[0] == 2 && e.Langage.length == 1); //! Pesudo Masculin Francais
  let PseudoMEng = PseudoMasculin.filter((e) => e.Langage[0] == 2 && e.Langage.length == 1); //! Pesudo Masculin Englais

  // console.log(PseudoFFr);
  console.log(fixData(PseudoFFr));
  console.log(fixData(PseudoMFr));


  $.ajax({
    url: "/api/insertNewPseudos",
    method: "post",
    data:{
        data:{pseudos:fixData(PseudoMFr)}
    },
    success: function (result) {
        console.log(result);
    },
  });

  
}

function fixData(data){
  return data.map(e=>{
    return {
      "label":e.Pseudo,
      "langue":e.Langage[0],
      "sex":e.Sex
    }
  })
}



</script>