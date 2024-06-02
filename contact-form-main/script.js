const theForm = document.querySelector('form')
const msgBox = document.querySelector(".success_msg")



theForm.addEventListener('submit', (e) => {
    e.preventDefault()
    msgBox.classList.add('show')
setTimeout(() => {window.location.reload()}, 3000)
})


const colorEl = document.querySelectorAll('.qtypes')

colorEl.forEach(colorN => {
    colorN.addEventListener('click', function () {
        colorEl.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')
    }
    )

})



//error messages

const formEl = document.getElementById('form')
const fnameEl = document.getElementById('fname')
const fnammErr = document.getElementById('fname_err')
const lnameEl = document.getElementById('lname')
const lnammErr = document.getElementById('lname_err')
const emailEl = document.getElementById('email')
const emailErr = document.getElementById('email_err')
const generalEl = document.getElementById('general')
const supportEl = document.getElementById('support')
const qtypeErr = document.getElementById('qtype_err')
const messageEl = document.getElementById('message')
const messageErr = document.getElementById('msg_err')
const checkboxEl = document.getElementById('check')
const checkboxErr = document.getElementById('check_err')


formEl.addEventListener('submit', (e) => {
    if (fnameEl.value === '' || fnameEl.value == null) {
        e.preventDefault()
        fnammErr.innerHTML = " This field is required"
        fnameEl.style.borderColor = "hsl(0, 66%, 54%)"
        msgBox.classList.remove('show')
    } else {
        fnammErr.innerHTML = ""
    }

    if (lnameEl.value === '' || lnameEl.value == null) {
        e.preventDefault()
        lnammErr.innerHTML = " This field is required"
        lnameEl.style.borderColor = "hsl(0, 66%, 54%)"
        msgBox.classList.remove('show')
    } else {
        lnammErr.innerHTML = ""
    }

    if (emailEl.value === '' || emailEl.value == null) {
        e.preventDefault()
        emailErr.innerHTML = " This field is required"
        emailEl.style.borderColor = "hsl(0, 66%, 54%)"
        msgBox.classList.remove('show')
    } else {
        emailErr.innerHTML = ""
    }

    if (!generalEl.checked && !supportEl.checked) {
        e.preventDefault()
        qtypeErr.innerHTML = " Please select a query type"
        msgBox.classList.remove('show')

    } else {
        qtypeErr.innerHTML = ""
    }

    if (messageEl.value === '' || messageEl.value == null) {
        e.preventDefault()
        messageErr.innerHTML = " This field is required"
        messageEl.style.borderColor = "hsl(0, 66%, 54%)"
        msgBox.classList.remove('show')
    } else {
        messageErr.innerHTML = ""
    }

    if (!checkboxEl.checked) {
        e.preventDefault()
        checkboxErr.innerHTML = " To submit this form, please consent to being contacted"
        msgBox.classList.remove('show')
    } else {
        checkboxErr.innerHTML = ""
    }
})




