let btnjs = document.getElementById("btn");
let displayjs = document.getElementById("display");
btnjs.addEventListener("click", getquotes);
function getquotes() {
   url = "quotesdata.json";
   fetch(url).then((res) => res.json()).then((data) =>{

      let print = Math.floor(Math.random() * data.motivate.length);
      let newPrint = data.motivate[print].quotes;
      displayjs.innerHTML = `${newPrint}`



      
    
   })
}