function clrscreen()
{
    document.getElementById("data").value=""
}
function comput(val)
{
    document.getElementById("data").value=document.getElementById("data").value+val
}
function finder()
{
    var text=document.getElementById("data").value
    var result=eval(text)
    document.getElementById("data").value=result
}
