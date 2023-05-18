
const urlParams = new URLSearchParams(window.location.search);
const article = urlParams.get('art')
const ref = urlParams.get('ref')
const V= ".";

const T = ref[0];
const D = ref[3];
console.log(D === V);
const r=(D === V);
if (r == true ){
    Q = ref[2];
     Db = ref[5];
}else{
    Q = ref[2]+ref[3];
    
     Db = ref[6];
};

if (Db == undefined){
  console.log("!")
  if (r == true ){ 
    console.log("OK")
    A= ref[4];
}else{
    A= ref[5];
}
}else{
    if (r == true ){ 
    console.log("OK")
    A= ref[4]+ref[5];
}else{
    A= ref[5]+ref[6];
}
}




document.write(`
<h6>Théme ${T} / question ${Q} / article ${A}</h6>
<h5>${article}</h5>
      `);

 