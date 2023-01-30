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
    function createTable(out) {
      const entries = Object.entries(out);
      var cols = [];
      var k = 0;
      entries.forEach((currentElement, index) => {
        if (k == '3') k = 0;
        if (!cols[k]) cols[k] = [];
        cols[k][index] = currentElement;
        k++;
      });

        // Create the table element
        const table = document.getElementById("table-container");
        // Create a row for each group of three elements
        cols.forEach((col) => {
          const row = document.createElement("tr");
          col.forEach((entry) => {
            // Create a div to wrap each pair of cells
            const cellPair = document.createElement("div");
            cellPair.style.display = "inline-block";
  
            // Create a cell for each entry
            const cell1 = document.createElement("th");
            cell1.innerText = entry[0];
            cell1.style.backgroundColor='rgb(217, 225, 247)'
            const cell2 = document.createElement("th");
            cell2.innerText = entry[1];
            cell2.style.backgroundColor='rgb(217, 225, 247)'
  
            // Append the cells to the div
            cellPair.appendChild(cell1);
            cellPair.appendChild(cell2);
  
            // Append the div to the row
            row.appendChild(cellPair);
          });
          table.appendChild(row);
        });
        // Append the table to the HTML page
        document.getElementById('table-container').appendChild(table);
      }
      createTable(output)
    });




    
    
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


    

    

  

