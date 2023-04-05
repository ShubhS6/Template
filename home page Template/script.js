const open=document.getElementById('open');
const close=document.getElementById('close');
const box=document.querySelector('.box');
const circle=document.querySelector('.circle');
const navv=document.querySelector('.navv');

open.addEventListener('click',()=>box.classList.add('actionn1'));
open.addEventListener('click',()=>circle.classList.add('actionn2'));
open.addEventListener('click',()=>document.getElementById('navv').style.opacity='1');

close.addEventListener('click',()=>box.classList.remove('actionn1'));
close.addEventListener('click',()=>circle.classList.remove('actionn2'));
close.addEventListener('click',()=>document.getElementById('navv').style.opacity='0');