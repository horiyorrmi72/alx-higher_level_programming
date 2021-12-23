#!/usr/bin/node
const values = parseInt( process.argv[2,]);
if(values === Null){
    return 0;
}else if(values.length === 1){
    return 0;
}else{
    console.log(max(values));
}
