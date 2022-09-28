var mobileMenu = new MobileSwipeMenu('#menu', {
    mode: 'right',
    width:310,
    enableBodyHook: false,
    events: {
        opened: function () {
        },
        closed: function () {
        },
        drag: function (swipe) {
        }
    }
});

window.scroll =  (blockID)=>{
    event.preventDefault();
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    mobileMenu.closeMenu();
}
document.getElementById('openMenu').addEventListener('click', function () {
    mobileMenu.openMenu();
});
document.getElementById('closeMenu').addEventListener('click', function () {
    mobileMenu.closeMenu();
});

