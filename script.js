const display = document.getElementById('clock');


function updateTime(){
    const date= new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    display.innerText = `${hour} : ${minutes} : ${seconds}`;

}
 
setInterval(updateTime, 1000);