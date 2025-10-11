  
let iterations=4
  let str='024135'
  let letterF=''
  let letterS=''
  let strMod
  for(let it=0;it<iterations;it+=1){
  for(let i = 1, j=0;j<str.length;i+=2,j+=2){
    strMod='';
    letterF+=str[i];
    letterS+=str[j];
  }
  strMod=letterF+letterS;
  console.log(strMod)
}



  