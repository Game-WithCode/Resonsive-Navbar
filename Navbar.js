let sideBarMenu = document.getElementById('sideBarMenu')
let sideBarContainer = document.querySelector('.sideBarContainer')
let closeSideBar = document.getElementById('closeSideBar')

sideBarMenu.addEventListener('click',()=>{
   sideBarContainer.style.display= 'flex';
})
closeSideBar.addEventListener('click',()=>{
    sideBarContainer.style.display= 'none';
})