var number=document.getElementById("number")
var Cfrom=document.getElementById("select")
var Cto=document.getElementById("slect")
var result=document.getElementById("result")
//console.log(typeof(273))
function Check()
{
    if(Cfrom.value==="Cel")
    {
        if(Cto.value==="Cel")
            result.innerText=number.value+String.fromCharCode('8451')
        else if(Cto.value==="Far")
            CtoF()
        else
            CtoK()
    }
    else if(Cfrom.value==="Far")
    {
        if(Cto.value==="Far")
            result.innerText=number.value+String.fromCharCode('8457')
        else if(Cto.value==="Cel")
            FtoC()
        else
            FtoK()
    }
}
function CtoF()
{
    let far=((9/5)*number.value)+32
    far=far.toFixed(4)
    result.innerText=far+String.fromCharCode('8457')
}

function FtoC()
{
    let c=(number.value-32)*(5/9)
    c=c.toFixed(4)
    result.innerText=c+String.fromCharCode('8451')
}

function KtoC()
{
    let c=number.value-273
    result.innerText=c+String.fromCharCode('8451')
}
function KtoF()
{
    let f=((number.value-273)*(9/5))+32
    f=f.toFixed(4)
    result.innerText=f+String.fromCharCode('8457')
}
