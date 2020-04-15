function addFunction() 
{
    var node = document.createElement("LI");
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("class","chbx");
    var textnode1 = document.getElementById("tasksToAdd").value;
    var textnode = document.createTextNode(textnode1);
    node.appendChild(textnode);
    document.getElementById("taskList").appendChild(node).appendChild(x);
}

function clearFunction()
{
    list=document.getElementById("taskList");
    chbx=document.getElementsByClassName("chbx");
    x=0;
    y=chbx.length;
    console.log(chbx);
    while(x<y)
    {
        if(chbx[x].checked!=false)
        {
            list.removeChild(list.childNodes[x+1]);
            y--;
        }
        else
        {
            x++;
        }
    }
}