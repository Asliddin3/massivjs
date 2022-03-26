let massiv=[]
let kirit = prompt("Komandani kiriting")
while( kirit != "stop"){
    let arr = kirit.split(" ")
    if( arr[0] == "add," ){
        massiv.push(arr[1])
    }else if ( arr[0]=="del,"){
        for (let key in massiv) {
            if(massiv[key] == arr[1] ){
                massiv.splice(key,1)
            }
        }
    }else {
        alert("komanda hato kiritildi")
    }
    kirit=prompt("Komandani kiriting")
}
console.log(massiv);