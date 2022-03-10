let calculer=()=>{
    let nbr1=document.getElementById("nbr1")
    let nbr2=document.getElementById("nbr2")
    let somme=parseInt(nbr1.value) + parseInt(nbr2.value)
    let res=document.getElementById("res")
    res.innerText=somme
}
let vider=()=>{
    document.getElementById("nbr1").value=""
    // let nbr1=document.getElementById("nbr1")
    // nbr1.value=""
    document.getElementById("nbr2").value=""
}