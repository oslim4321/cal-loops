
  /*   for(let i=2; i<=12; i++){
        let display =document.getElementById('display')
        display.innerHTML+=`<h1>2*${i}=${2*i} </h1>`

    }  */


/*   function calculate(){

    for(let i=1; i<=12; i++){
    
    let text=document.getElementById('text_box')
    let display =document.getElementById('display')
    display.innerHTML+=`<h4> ${text.value}*${i}=${text.value*i}</h4>`

    }
} */



/* function ok(){
    for(let i=t1; i<=t2; i++){
        inp=document.getElementById('input')
        inp2=document.getElementById('input2')
        let show =document.getElementById('show')
            display.innerHTML+=`<h4> ${inp}*${inp2}=${inp*inp2}</h4>`
}
} */






function ok(){

    let input1=document.getElementById('input').value;
    let input2= document.getElementById('input2').value;
    let show=document.getElementById('showing');
    

   for(let i=Number(input1); i<= Number(input2); i++){

    for(index=1; index <=12; index++){
            show.innerHTML+= i +'*' +index + '='+index*i+'<br>'
            
            // show.innerHTML+=`${i} * ${index} = ${index}*${i} <br>` 
    }
        show.innerHTML+=`<div></div>`
    }
    
    }
   

     function get(params){
        let selector=document.getElementById('selector').value
        let color=document.getElementById('color').value
        let write=document.getElementById('text_box').value
        let div=document.getElementById('div')
        let newElement=`<${selector} style="background-color:${color}">${write}</${selector}>`;
        div.innerHTML+=newElement;
        write.value=''
    } 



 function get(params){
        let selector =document.getElementById('Selector').value
        let color= document.getElementById('color').value
        let write =document.getElementById('text_box').value
        let div =document.getElementById('div')
        let latestElement=`<${selector} style="background-color:${color}">${write}</${selector}>`
        div.innerHTML +=latestElement
        div.value='' 
}
 










/* 
const naw =new Date();
console.log(naw)
console.log(typeof naw)

console.log('getFullYear:', naw.getFullYear())
console.log('getMonth:', naw.getMonth())
console.log('getDate:', naw.getDate())
console.log('getDay:', naw.getDay())
console.log('getSeconds:', naw.getSeconds())
console.log(naw.toDateString()) */