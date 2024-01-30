const date=document.getElementById('date');
date.innerHTML=new Date().getFullYear()

const navToggle=document.querySelector('.nav-toggle')
const linksContainer=document.querySelector('.links-container')
const links=document.querySelector('.links');
const logo=document.querySelector('.logo')

navToggle.addEventListener('click',function(){
    linksContainer.classList.toggle('show-links')
    const containerHeight=linksContainer.getBoundingClientRect().height; 
    const linksHeight=links.getBoundingClientRect().height; 
    if(containerHeight === 0)
    {
        linksContainer.style.height=`${linksHeight}px`
    }
    else{
        linksContainer.style.height=0;
    }
})

const navbar=document.getElementById('nav');
const topLink=document.querySelector('.top-link')

window.addEventListener('scroll',function(){
    const scrollHeight=window.scrollY
    const navHeight=navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight)
    {
        navbar.classList.add('fixed-nav')
        logo.style.color='black';
    }
    else{
        navbar.classList.remove('fixed-nav')
        logo.style.color='white';
    }
    if(scrollHeight>500)
    {
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})

const scrollLinks=document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const id=e.currentTarget.getAttribute("href").slice(1)
        const element=document.getElementById(id);
        const navHeight=navbar.getBoundingClientRect().height;
        const containerHeight=linksContainer.getBoundingClientRect().height;
        const fixedNav=navbar.classList.contains('fixed-nav');
        let position=element.offsetTop-navHeight;
        if(!fixedNav)
        {
            position=position-navHeight
        }
        if(navHeight > 82)
        {
            position=position+containerHeight
        }
        window.scrollTo({
            left:0,
            top:position,
        })
        linksContainer.style.height=0
    })
})

// contact section
const btns =document.querySelectorAll('.tab-btn');
const about =document.querySelector('.about');
const article=document.querySelectorAll('.content');

about.addEventListener('click',function(e){
    const id=e.target.dataset.id;
    if(id)
    {
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active")
        })
        article.forEach(function(article){
            article.classList.remove('active')
        })
        const element=document.getElementById(id);
        element.classList.add('active')
    }
})