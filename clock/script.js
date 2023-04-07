const hour=document.getElementById('hour')
const second=document.getElementById('second')
const minute=document.getElementById('minute')
setInterval(()=>{
    const d=new Date()
    const h=d.getHours()
    const m=d.getMinutes()
    const s=d.getSeconds()
    const hrotate=30*h+m/2;
    const mrotate=6*m;
    const srotate=6*s;
    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
},1000);