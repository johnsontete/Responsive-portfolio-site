const headerBtn = document.querySelector('.header__bar');
const mobileNav = document.querySelector('.mobile-nav');
const mobilelinks = document.querySelectorAll('.mobile-nav__link');

let isMobileNavOpen = false;
console.log(isMobileNavOpen)
headerBtn.addEventListener('click',function(){
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen){
        mobileNav.style.display='flex';
        document.body.style.overflowY = 'hidden';
    }
    else{
        mobileNav.style.display='none';
        document.body.style.overflowY = 'auto';
    } 
});
for(let i= 0; i< mobilelinks.length; i++){
    mobilelinks[i].addEventListener('click', function(link){
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    })
}