const year = new Date().getFullYear()
const footer = document.getElementById('footer-year')

if (footer) {
  footer.textContent = `Copyright © ${year} | Danny Yang`
}

const navbar = document.querySelector('.navbar')
const navbarProgress = document.querySelector('.navbar__progress')

function updateNavbar() {
  const currentScrollY = window.scrollY

  if (currentScrollY > 100) {
    navbar.classList.add('visible')
  } else if (currentScrollY === 0) {
    navbar.classList.remove('visible')
  }

  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollProgress = (currentScrollY / windowHeight) * 100
  navbarProgress.style.width = `${scrollProgress}%`
}

document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href')
    const targetSection = document.querySelector(targetId)
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

window.addEventListener('scroll', updateNavbar)
window.addEventListener('resize', updateNavbar)

const themeToggle = document.querySelector('.theme-toggle')
const body = document.body

const currentTheme = localStorage.getItem('theme') || 'light'
body.setAttribute('data-theme', currentTheme)

themeToggle?.addEventListener('click', () => {
  const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  body.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

if (!prefersReducedMotion) {
  document.querySelectorAll('.projects__card, .skills__data, .section__title, .contact').forEach(el => {
    el.setAttribute('data-animate', '')
    observer.observe(el)
  })
}