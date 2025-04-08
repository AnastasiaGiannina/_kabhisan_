const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




const openModalButtons1 = document.querySelectorAll('[data-modal-target1]')
const closeModalButtons1 = document.querySelectorAll('[data-close-button1]')
const overlay1 = document.getElementById('overlay1')

openModalButtons1.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal1)
  })
})
overlay1.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal1.active')
  modals.forEach(modal => {
    closeModal(modal1)
  })
})
closeModalButtons1.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal1')
    closeModal(modal1)
  })
})

function openModal(modal1) {
  if (modal1 == null) return
  modal1.classList.add('active')
  overlay1.classList.add('active')
}

function closeModal(modal1) {
  if (modal1 == null) return
  modal1.classList.remove('active')
  overlay1.classList.remove('active')
}

const openModalButtons2 = document.querySelectorAll('[data-modal-target2]')
const closeModalButtons2 = document.querySelectorAll('[data-close-button2]')
const overlay2 = document.getElementById('overlay2')

openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})
overlay2.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal2.active')
  modals.forEach(modal => {
    closeModal(modal2)
  })
})
closeModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal2')
    closeModal(modal2)
  })
})

function openModal(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay2.classList.add('active')
}

function closeModal(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay2.classList.remove('active')
}



const openModalButtons3 = document.querySelectorAll('[data-modal-target3]')
const closeModalButtons3 = document.querySelectorAll('[data-close-button3]')
const overlay3 = document.getElementById('overlay3')

openModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal3)
  })
})
overlay3.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal3.active')
  modals.forEach(modal => {
    closeModal(modal3)
  })
})
closeModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal3')
    closeModal(modal3)
  })
})

function openModal(modal3) {
  if (modal3 == null) return
  modal3.classList.add('active')
  overlay3.classList.add('active')
}

function closeModal(modal3) {
  if (modal3 == null) return
  modal3.classList.remove('active')
  overlay3.classList.remove('active')
}

const openModalButtons4 = document.querySelectorAll('[data-modal-target4]')
const closeModalButtons4 = document.querySelectorAll('[data-close-button4]')
const overlay4 = document.getElementById('overlay4')


openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal4)
  })
})
overlay4.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal4.active')
  modals.forEach(modal => {
    closeModal(modal4)
  })
})
closeModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal4')
    closeModal(modal4)
  })
})


function openModal(modal4) {
  if (modal4 == null) return
  modal4.classList.add('active')
  overlay4.classList.add('active')
}


function closeModal(modal4) {
  if (modal4 == null) return
  modal4.classList.remove('active')
  overlay4.classList.remove('active')
}

const openModalButtons5 = document.querySelectorAll('[data-modal-target5]')
const closeModalButtons5 = document.querySelectorAll('[data-close-button5]')
const overlay5 = document.getElementById('overlay5')


openModalButtons5.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal5)
  })
})
overlay5.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal5.active')
  modals.forEach(modal => {
    closeModal(modal5)
  })
})
closeModalButtons5.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal5')
    closeModal(modal5)
  })
})


function openModal(modal5) {
  if (modal5 == null) return
  modal5.classList.add('active')
  overlay5.classList.add('active')
}


function closeModal(modal5) {
  if (modal5 == null) return
  modal5.classList.remove('active')
  overlay5.classList.remove('active')
}


const openModalButtons6 = document.querySelectorAll('[data-modal-target6]')
const closeModalButtons6 = document.querySelectorAll('[data-close-button6]')
const overlay6 = document.getElementById('overlay6')


openModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal6)
  })
})
overlay6.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal6.active')
  modals.forEach(modal => {
    closeModal(modal6)
  })
})
closeModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal6')
    closeModal(modal6)
  })
})


function openModal(modal6) {
  if (modal6 == null) return
  modal6.classList.add('active')
  overlay6.classList.add('active')
}


function closeModal(modal6) {
  if (modal6 == null) return
  modal6.classList.remove('active')
  overlay6.classList.remove('active')
}


const openModalButtons7 = document.querySelectorAll('[data-modal-target7]')
const closeModalButtons7 = document.querySelectorAll('[data-close-button7]')
const overlay7 = document.getElementById('overlay7')


openModalButtons7.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal7)
  })
})
overlay7.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal7.active')
  modals.forEach(modal => {
    closeModal(modal7)
  })
})
closeModalButtons7.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal7')
    closeModal(modal7)
  })
})


function openModal(modal7) {
  if (modal7 == null) return
  modal7.classList.add('active')
  overlay7.classList.add('active')
}


function closeModal(modal7) {
  if (modal7 == null) return
  modal7.classList.remove('active')
  overlay7.classList.remove('active')
}






const openModalButtons8 = document.querySelectorAll('[data-modal-target8]')
const closeModalButtons8 = document.querySelectorAll('[data-close-button8]')
const overlay8 = document.getElementById('overlay8')


openModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal8)
  })
})
overlay8.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal8.active')
  modals.forEach(modal => {
    closeModal(modal8)
  })
})
closeModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal8')
    closeModal(modal8)
  })
})


function openModal(modal8) {
  if (modal8 == null) return
  modal8.classList.add('active')
  overlay8.classList.add('active')
}


function closeModal(modal8) {
  if (modal8 == null) return
  modal8.classList.remove('active')
  overlay8.classList.remove('active')
}


const openModalButtons9 = document.querySelectorAll('[data-modal-target9]')
const closeModalButtons9 = document.querySelectorAll('[data-close-button9]')
const overlay9 = document.getElementById('overlay9')




openModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal9)
  })
})
overlay9.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal9.active')
  modals.forEach(modal => {
    closeModal(modal9)
  })
})
closeModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal9')
    closeModal(modal9)
  })
})




function openModal(modal9) {
  if (modal9 == null) return
  modal9.classList.add('active')
  overlay9.classList.add('active')
}




function closeModal(modal9) {
  if (modal9 == null) return
  modal9.classList.remove('active')
  overlay9.classList.remove('active')
}


const openModalButtons0 = document.querySelectorAll('[data-modal-target0]')
const closeModalButtons0 = document.querySelectorAll('[data-close-button0]')
const overlay0 = document.getElementById('overlay0')




openModalButtons0.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal0)
  })
})
overlay0.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal0.active')
  modals.forEach(modal => {
    closeModal(modal0)
  })
})
closeModalButtons0.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal0')
    closeModal(modal0)
  })
})




function openModal(modal0) {
  if (modal0 == null) return
  modal0.classList.add('active')
  overlay0.classList.add('active')
}




function closeModal(modal0) {
  if (modal0 == null) return
  modal0.classList.remove('active')
  overlay0.classList.remove('active')
}


const openModalButtons10 = document.querySelectorAll('[data-modal-target10]')
const closeModalButtons10 = document.querySelectorAll('[data-close-button10]')
const overlay10 = document.getElementById('overlay10')


openModalButtons10.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal10)
  })
})
overlay10.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal10.active')
  modals.forEach(modal => {
    closeModal(modal10)
  })
})
closeModalButtons10.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal10')
    closeModal(modal10)
  })
})


function openModal(modal10) {
  if (modal10 == null) return
  modal10.classList.add('active')
  overlay10.classList.add('active')
}


function closeModal(modal10) {
  if (modal10 == null) return
  modal10.classList.remove('active')
  overlay10.classList.remove('active')
}


const openModalButtons11 = document.querySelectorAll('[data-modal-target11]')
const closeModalButtons11 = document.querySelectorAll('[data-close-button11]')
const overlay11 = document.getElementById('overlay11')


openModalButtons11.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal11)
  })
})
overlay11.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal11.active')
  modals.forEach(modal => {
    closeModal(modal11)
  })
})
closeModalButtons11.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal11')
    closeModal(modal11)
  })
})


function openModal(modal11) {
  if (modal11 == null) return
  modal11.classList.add('active')
  overlay11.classList.add('active')
}


function closeModal(modal11) {
  if (modal11 == null) return
  modal11.classList.remove('active')
  overlay11.classList.remove('active')
}






const openModalButtons12 = document.querySelectorAll('[data-modal-target12]')
const closeModalButtons12 = document.querySelectorAll('[data-close-button12]')
const overlay12 = document.getElementById('overlay12')


openModalButtons12.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal12)
  })
})
overlay12.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal12.active')
  modals.forEach(modal => {
    closeModal(modal12)
  })
})
closeModalButtons12.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal12')
    closeModal(modal12)
  })
})


function openModal(modal12) {
  if (modal12 == null) return
  modal12.classList.add('active')
  overlay12.classList.add('active')
}


function closeModal(modal12) {
  if (modal12 == null) return
  modal12.classList.remove('active')
  overlay12.classList.remove('active')
}


const openModalButtons13 = document.querySelectorAll('[data-modal-target13]')
const closeModalButtons13 = document.querySelectorAll('[data-close-button13]')
const overlay13 = document.getElementById('overlay13')