const openMobileMenu = (mobileMenu, id) => {
    if (!mobileMenu.classList.contains('opened')) {
        mobileMenu.classList.add('opened')
    }

    const backdrop = document.createElement('div')
    backdrop.classList.add('mobile-menu-backdrop')
    backdrop.setAttribute('id', id);
    backdrop.addEventListener('click', function () {
        mobileMenu.classList.remove('opened')
        backdrop.remove()
    })
    document.querySelector('body').insertAdjacentElement('beforeend', backdrop)
}

const closeMobileMenu = (mobileMenu, id) => {
    if (mobileMenu.classList.contains('opened')) {
        mobileMenu.classList.remove('opened')
    }

    document.querySelector('#' + id).remove()

}

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.querySelector('.mob-menu-toggle')
    const mobileMenu = document.querySelector('#mobile-menu')
    const mobileMenuClose = document.querySelector('#mobile-menu-close')

    mobileMenuToggle.addEventListener('click', function () {
        openMobileMenu(mobileMenu, 'mobile-menu-backdrop')
    })

    mobileMenuClose.addEventListener('click', function () {
        closeMobileMenu(mobileMenu, 'mobile-menu-backdrop')
    })
});
