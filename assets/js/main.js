const calculate=()=>{
    let a=Number(prompt("1-ci ededi daxil edin"))
    let b=Number(prompt("2 ci ededi daxil edin"))
    let c=prompt("emeliyyati daxil edin","topla,cix,bol,vur")
    if(c=="topla"){
        console.log(a+b)
    }
    else if(c=="cix")(
        console.log(a-b)
    )
    else if(c=="bol"){
        console.log(a/b)
    }
    else if(c=="vur"){
        console.log(a*b)
    }
    else{
        alert("bele emeliyyat movcud deil")
    }
}
calculate()

