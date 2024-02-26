(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	};

	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			toggleModal();
		}
	});

	refs.modal.addEventListener('transitionend', () => {
		if (refs.modal.classList.contains('is-hidden')) {
			refs.openModalBtn.focus();
		} else {
			refs.closeModalBtn.focus();
		}
	});

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');
	}
})();
