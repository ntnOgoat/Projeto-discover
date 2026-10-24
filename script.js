const html = document.documentElement
const themeButton = document.getElementById('theme-button')
const copyButton = document.getElementById('copy-button')

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark')
    themeButton.textContent = '☀️'
  } else {
    html.classList.remove('dark')
    themeButton.textContent = '🌙'
  }
}

const savedTheme = localStorage.getItem('theme')
const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

applyTheme(savedTheme || (systemIsDark ? 'dark' : 'light'))

themeButton.addEventListener('click', function () {
  const newTheme = html.classList.contains('dark') ? 'light' : 'dark'
  applyTheme(newTheme)
  localStorage.setItem('theme', newTheme)
})

copyButton.addEventListener('click', function () {
  navigator.clipboard.writeText(window.location.href)
  copyButton.textContent = 'Link copiado!'

  setTimeout(function () {
    copyButton.textContent = 'Copiar link da página'
  }, 2000)
})
