const modal = () => {

	const modalBtn = document.querySelector('.modal__button')
	const modal = document.querySelector('.modal')
	const modalInner = modal.querySelector('.modal__inner')
	const courseButton = document.querySelector('.course__button')

	//const closeImg = document.createElement('div')

	//closeImg.classList.add('close')

	//modalInner.prepend(closeImg)
	//`
	//closeImg.style.cssText = 
	//width: 40px;
	//height: 40px;
	//margin-left: 100%;
	//margin-top: -30px;
	//background-image: url('../img/close.svg');
	//background-repeat: no-repeat;
	//background-size: content;
	//border: 2px solid #000;
	//cursor: pointer;
	//`	 
	//;

	modalInner.style.position = "relative"

	const addCloseBtn = () => {
		const closeBtn = document.createElement('div')

		closeBtn.classList.add('close-button')
		closeBtn.innerHTML = '&times'
		closeBtn.style.position = 'absolute'
		closeBtn.style.right = '20px'
		closeBtn.style.top = '10px'
		closeBtn.style.whidth = '50px'
		closeBtn.style.height = '50px'
		closeBtn.style.fontSize = '50px'
		closeBtn.style.display = 'flex'
		closeBtn.style.justifyContent = 'center'
		closeBtn.style.alignItems = 'center'
		closeBtn.style.cursor = 'pointer'

		modalInner.append(closeBtn)

		closeBtn.addEventListener('click', () => {
			modal.style.display = ''
		})
	}

	modalBtn.addEventListener('click', () => {
		modal.style.display = 'flex'
	})
	courseButton.addEventListener('click', () => {
		modal.style.display = 'flex'
	})
	modal.addEventListener('click', (event) => {
		const modalContent = event.target.closest('.modal__inner')

		if (!modalContent) {
			modal.style.display = ''
		}
	})
	addCloseBtn()
	//closeImg.addEventListener('click', (event) => {
	//	modal.style.display = ''
	//})


}
modal()