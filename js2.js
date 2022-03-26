var soz= prompt("Istalgan sozizni kiriting","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, sit!")

let unli,undosh;
unli=0
undosh=0

let arr= soz.split("")
for(let key in arr ){
    if( arr[key]== "a" || arr[key]== "A" || arr[key]== "O" || arr[key]== "o" || arr[key]== "E" || arr[key]== "e" || arr[key]== "y" || arr[key]== "Y" || arr[key]== "I" || arr[key]== "i" || arr[key]== "O" || arr[key]== "o" || arr[key] == "U" || arr[key]=="u"){
         unli++;
    }else if( arr[key] == "!" || arr[key]==" " || arr[key] == "," || arr[key]=="?" || arr[key]=="."){

    }else{
        undosh++;
    }
}
console.log("Unlilar soni " + unli);
console.log("Undoshlar soni "+ undosh);