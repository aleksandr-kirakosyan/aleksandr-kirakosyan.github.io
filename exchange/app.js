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
        var rowCount = 0;
        var maxRows = 17;
        var maxRows3 = 34;

        for (let key in output) {
            if (rowCount < maxRows) {
                var row = document.getElementById('table2').insertRow();

                var cell1 = row.insertCell(0);
                cell1.innerHTML = key;
        
                var cell2 = row.insertCell(1);
                cell2.innerHTML = output[key];
        
                rowCount++;
            }
           else if(rowCount >= 17 && rowCount <= 34){
            var row = document.getElementById('table3').insertRow();

            var cell1 = row.insertCell(0);
            cell1.innerHTML = key;
    
            var cell2 = row.insertCell(1);
            cell2.innerHTML = output[key];
    
            rowCount++;
            }
            else if(rowCount >= 34 && rowCount <= 51){
                var row = document.getElementById('table4').insertRow();
    
                var cell1 = row.insertCell(0);
                cell1.innerHTML = key;
        
                var cell2 = row.insertCell(1);
                cell2.innerHTML = output[key];
        
                rowCount++;
                }
        }
})
    

    function show()
    {
        var x = document.getElementById("adtd");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }

    function showlinks(){
        var y = document.getElementById("fordev");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    }


    

  

