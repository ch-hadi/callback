const hadi=(callback)=>{
    let v=callback();
    if(v){
       return console.log('hammad')
    }
    console.log('not worked')
}
var callback=()=>{
    return false;
}
hadi(callback)
