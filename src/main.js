
const topMenu=document.getElementById('ct-top-menu')
const toggleTopmenuicon=document.getElementById('ct-toggle-top-menu-icon')
 document.addEventListener('click',(e)=>{
   if(toggleTopmenuicon.contains(e.target)){
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('ct-topmenu-expanded')
   }else{
    if(topMenu.classList.contains('ct-topmenu-expanded')){
      topMenu.classList.remove('ct-topmenu-expanded')
      topMenu.classList.add('hidden')
    }      
   }
 })