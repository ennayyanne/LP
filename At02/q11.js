let altura= 1.80;
let peso= 85;
let sexo= 2; //feminino=1 e masculino=2
let pesoIdealMasc= ((peso*altura)-58);
let pesoIdealFem= ((peso*altura)-44.7);
if(sexo==1){
    console.log(pesoIdealFem);
} else if(sexo==2){
    console.log(pesoIdealMasc);
}