const mobile_nav =()=> {
    const navbtn=document.querySelector('.header__bars')
const navbtn2=document.querySelector('.mobile-nav')

navbtn.addEventListener('click', ()=>{
    navbtn2.style.display='flex';
});
};

export default mobile_nav();