// random color
const randonColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// console.log(randonColor());
let intervalid;
const start = document.querySelector('#start').addEventListener('click',function(){

    // document.body.style.backgroundColor=randonColor();
    if (!intervalid) {
        intervalid=  setInterval(function(){
            document.body.style.backgroundColor=randonColor();
        },1000)   
    }
    
})

const stop = document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalid);
    intervalid=null;
})