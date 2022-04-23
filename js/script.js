const contents = document.querySelectorAll('.programm-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__content')
    const descr = elem.querySelector('.program-line__descr')

    title.addEventListener('click', () => {
        descr.classlist.toggle('active')
    })
})