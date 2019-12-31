$(function() {
    getwidth()

    function getwidth() {

        let width = window.innerWidth
        if (width >= 1000) {
            width = 1000
        } else if (width <= 320) {
            width = 320

        }
        let fontsize = (width / 1000) * 100 + 'px'
        $('html').css('fontSize', fontsize)
        console.log(fontsize)

    }
    window.onresize = function() {
        getwidth()
    }
})