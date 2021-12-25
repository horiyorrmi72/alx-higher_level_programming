#!/usr/bin/node
const values =  process.argv.slice(2).map((n) => {
    parseInt(n)
});
if(values === null || values.length === 1){
    console.log(0);
}else{
    let newvalues = values.sort();
    let output = newvalues[newvalues.length - 2];
    console.log(output);
}
