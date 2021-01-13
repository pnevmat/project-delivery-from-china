const refs = {
    openModalBtnRef: document.querySelector('[mobile-modal-open]'),
    closeModalBtnRef: document.querySelector('[mobile-modal-close]'),
    backdropRef: document.querySelector('[mobile-modal]')
}

refs.openModalBtnRef.addEventListener('click', () => {
    refs.backdropRef.classList.remove('is-hidden');
});

refs.closeModalBtnRef.addEventListener('click', () => {
    refs.backdropRef.classList.add('is-hidden')
})