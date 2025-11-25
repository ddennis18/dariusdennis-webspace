const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-active')
        entry.target.classList.remove('scroll-animated')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 }
)
const scrollAnimatedElements = document.querySelectorAll('.scroll-animated')
scrollAnimatedElements.forEach(element => {
  observer.observe(element)
})
