// const btn = document.getElementById('menu-btn')
// const menu = document.getElementById('menu')

// btn.addEventListener('click', toggleButton)

// function toggleButton() {
//   try {
//     btn.classList.toggle('open')
//     menu.classList.toggle('flex')
//     menu.classList.toggle('hidden')
//   } catch (err) {
//     console.log(err)
//   }
// }

let defaultTransform = 0
function goNext() {
  defaultTransform = defaultTransform - 398
  let slider = document.getElementById('slider')
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
    defaultTransform = 0
  slider.style.transform = 'translateX(' + defaultTransform + 'px)'
}
next.addEventListener('click', goNext)

function goPrev() {
  let slider = document.getElementById('slider')
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0
  else defaultTransform = defaultTransform + 398
  slider.style.transform = 'translateX(' + defaultTransform + 'px)'
}

prev.addEventListener('click', goPrev)
