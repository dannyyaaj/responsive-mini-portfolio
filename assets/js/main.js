const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    console.log(target, ' target')

    tabContent.forEach(content => content.classList.remove('filters__active'))
    target.classList.add('filters__active')
  })
})