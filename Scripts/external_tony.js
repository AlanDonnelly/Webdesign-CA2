function displayName(name)
{
    alert(name);
}

function validateForm() 
{
        
    let x = document.forms["myForm"]["fname"].value;

    let y = document.getElementById("id").value;

    if (x == "") 
    {
        alert("Name must be entered");
    }
    else if (y == "") 
    {
        alert("ID must be entered");
    }
    else if (isNaN(y)) 
    {  
        alert("ID must be a number");
    } 
        
    document.getElementById("id_check").innerHTML = text;
}
