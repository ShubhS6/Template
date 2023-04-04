const search=document.getElementById("search");
search.addEventListener("click",()=>{
    search.removeAttribute("placeholder");
})

const button=document.getElementById("btn");
button.addEventListener("click",()=>{
    const input=document.getElementById("search").value;
    document.getElementById(input).scrollIntoView();
    document.getElementById("search").value=""; 
})


const labels=document.querySelectorAll('.box label');
labels.forEach(label=>(
    label.innerHTML=label.innerText.split('').map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`).join('')))


const gallarybox=document.getElementById('gallarybox');
window.addEventListener('scroll',box);
function box()
{
    const bottom=window.innerHeight/4*4;
    const total=window.innerHeight;
    const gallarytop=gallarybox.getBoundingClientRect().top;
    const gallarybottom=gallarybox.getBoundingClientRect().bottom;
    if(gallarytop<bottom)
    {
        gallarybox.classList.remove('active');
    }
    if(total<gallarybottom)
    {
        gallarybox.classList.add('active');
    }
    
}


const mainnn=document.getElementById('mainnn');
window.addEventListener('scroll',box);
function box()
{
    const bottom=window.innerHeight/4*4;
    const total=window.innerHeight;
    const gallarytop=mainnn.getBoundingClientRect().top;
    const gallarybottom=mainnn.getBoundingClientRect().bottom;
    if(gallarytop<bottom)
    {
        gallarybox.classList.remove('m');
    }
    if(total<gallarybottom)
    {
        gallarybox.classList.add('m');
    }
    
}