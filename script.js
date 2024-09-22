// Menu Section 

const menu = document.getElementById('menu')
const openMenu = document.getElementById('open-menu-btn')
const closeMenu = document.getElementById('close-menu-btn')

openMenu.addEventListener('click', ()=>{
    menu.style.display = "block"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})
closeMenu.addEventListener('click', ()=>{
    menu.style.display = "none"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})

// Faq Section 
const faqs = document.querySelectorAll('.faq-card')
faqs.forEach((faq)=>{
    const question = faq.querySelector('.question')
    const answer = faq.querySelector('.answer')
    const downArrow = faq.querySelector('.down-arrow')
    const upArrow = faq.querySelector('.up-arrow')
    faq.addEventListener('click', () =>{
        question.classList.toggle('active')
        if(question.classList.contains('active')){
            answer.style.maxHeight = `${answer.scrollHeight}px`
            downArrow.style.display = "none"
            upArrow.style.display = "block"
        }
        else{
            answer.style.maxHeight = 0;
            downArrow.style.display = "block"
            upArrow.style.display = "none"
        }
    })
})