
    function myFunction()
    {
    
    var mygen;
    var type = document.getElementById('gen1');
    var type1 = document.getElementById('gen2');
    if(type.checked==true)
    {
       mygen = type.value;
    }
    else if(type1.checked==true)
    {
        mygen = type1.value;
    }



    var table = document.getElementById("myTable");
    var row = table.insertRow();
   

    var checkboxes = document.getElementsByName('food');
var selected = [];
for (var i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        selected.push(checkboxes[i].value);
    }
}
if (selected.length>=2){
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    cell1.innerText=document.getElementById("fname").value;
    cell2.innerHTML=document.getElementById("lname").value;
    cell3.innerHTML=document.getElementById("add").value;
    cell4.innerHTML=document.getElementById("pin").value;
    cell5.innerHTML=mygen;
    cell6.innerHTML=selected;
    cell7.innerHTML=document.getElementById("country").value;
    cell8.innerHTML=document.getElementById("state").value;
}
else{
    alert("Please select atleast two foods");
}  
}
