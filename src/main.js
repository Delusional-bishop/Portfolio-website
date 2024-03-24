function mobile_nav() {
        const navbtn=document.querySelector('.header__bars')
        const navbtn2=document.querySelector('.mobile-nav')
        let btnon= false;
        const mobilelinks=document.querySelectorAll('.mobile-nav__link')
        navbtn.addEventListener('click', () => {
                // console.log('hello')
                btnon=!btnon;
                if(btnon){
                    navbtn2.style.display='flex';
                    document.body.style.overflowY='hidden';
                }
                else{
                    navbtn2.style.display='none';
                    document.body.style.overflowY='auto';
                }
            });
        mobilelinks.forEach( hii => {
        hii.addEventListener('click', () =>{
                    btnon = false;
                    console.log('false');
                    navbtn2.style.display='none';
                    document.body.style.overflowY='auto';
                });

            });

        };
        
        mobile_nav();
        
const theme=localStorage.getItem('theme');
        
theme && document.body.classList.add(theme);


const handleThemeToggle =() =>{
            document.body.classList.toggle('light-mode');
                    if(document.body.classList.contains('light-mode')){
                        localStorage.setItem('theme','light-mode');
                    }else{
                        localStorage.removeItem('theme');
                    };
        
};
        
function toggle(){
    const themetogglebtn= document.querySelectorAll("#theme-toggle");
    themetogglebtn.forEach(btn  =>{
        btn.addEventListener('click',handleThemeToggle)

        });
    };

toggle();

const lazyImg= document.querySelectorAll('.lazy');


const observer = new IntersectionObserver((entries,observer) =>{
    console.log(entries)
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            console.log('hi')
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('loading');
            console.log('hey');
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    })
    
})

lazyImg.forEach((img)=>{
    observer.observe(img)
});
