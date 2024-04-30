const gmailIcon = document.querySelector('.footer__gmail')
const notification = document.querySelector('.footer__notification')

gmailIcon.addEventListener('click', () => {
    navigator.clipboard.writeText('nikitakovalenko7219@gmail.com')

    notification.classList.add('animation')

    setTimeout(() => {
        notification.classList.remove('animation')
    }, 6000)
})
