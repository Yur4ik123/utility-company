var mobileMenu = new MobileSwipeMenu('#menu', {
    mode: 'right',
    width:310,
    enableBodyHook: true,
    events: {
        opened: function () {
        },
        closed: function () {
        },
        drag: function (swipe) {
        }
    }
});
document.getElementById('openMenu').addEventListener('click', function () {
    mobileMenu.openMenu();
});
document.getElementById('closeMenu').addEventListener('click', function () {
    mobileMenu.closeMenu();
});
// document.getElementById('toggleMenu').addEventListener('click', function () {
//     mobileMenu.toggleMenu();
// });