const url = 'https://cb.am/latest.json.php'

async function fecthAsyncExch(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        const {USD, GBP, EUR, GEL, RUB} = data;
        document.getElementById('usdvalue').textContent = USD;
        document.getElementById('gbpvalue').textContent = GBP;
        document.getElementById('eurvalue').textContent = EUR;
        document.getElementById('gelvalue').textContent = GEL;
        document.getElementById('rubvalue').textContent = RUB;
    }catch(e){
        console.error(e)
    }
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '.' + dd + '.' + yyyy;
document.getElementById("demo").innerHTML = today;

fecthAsyncExch()

const obj = fetch('https://cb.am/latest.json.php')
.then(result => result.json())
.then((output) => {
  function createTable(obj) {
    const entries = Object.entries(obj);
    const tableArray = [];

    for (let i = 0; i < entries.length; i += 17) {
      tableArray.push(entries.slice(i, i + 17));
    }

    return tableArray;
  }

  const tables = createTable(output);

  const tableContainer = document.getElementById("table-container");

  for (const table of tables) {
    const tableElement = document.createElement("table");

    for (const [key, value] of table) {
      const row = document.createElement("tr");
      const keyCell = document.createElement("td");
      keyCell.innerText = key;
      const valueCell = document.createElement("td");
      valueCell.innerText = value;
      row.appendChild(keyCell);
      row.appendChild(valueCell);
      tableElement.appendChild(row);
    }

    tableContainer.appendChild(tableElement);
  }
})
.catch(error => console.error(error));

    
    
var x = document.getElementById("table-container");
    function show()
    {
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }

var y = document.getElementById('fordev')
    function showlinks(){
        if (y.style.display === "block") {
            y.style.display = "none";
        } else {
            y.style.display = "block";
        }
    }


    

  

