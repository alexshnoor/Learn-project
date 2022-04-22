const contents = document.querySelectorAll('.programm-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.programm-line__content')
    const descr = elem.querySelector('.programm-line__descr')

    title.addEventListener('click', () => {
        descr.classlist.toggle('active')
    })
})