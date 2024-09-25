let qAtual=2000;
let qMin=1000;
let qMax=5000;
let media=((qMin+qMax)/2);
if(qAtual>media){
    console.log('Não efetuar compra!');
}else if(qAtual==media){
    console.log('Não efetuar compra!');
}else if(qAtual<media){
    console.log('Efetuar compra!');
}