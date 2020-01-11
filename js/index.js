$(function() {
    // 调取time
    var data = new Date()
    var s = data.getHours()
    var f = data.getMinutes()
    var m = data.getSeconds()
    if (f < 10) {
        f = '0' + f
    }
    if (s < 10) {
        s = '0' + s
    }
    if (m < 10) {
        m = '0' + m
    }
    $('.time span:nth-child(1)').text(s)
    $('.time span:nth-child(2)').text(f)
    $('.time span:nth-child(3)').text(m)
    gettime();
    gettop();
    // 监听scoll改goup------------------------------------------
    function gettop() {
        $('.icon-serch').on('click', function() {
            // console.log('111')
            $('#inp').stop().toggle(500);
        })
        $(window).on('scroll', function() {
            var i = $(window).scrollTop();
            // console.log(i)
            if (i > 120) {
                $('.gotop ').css({
                    opacity: '1',
                });
                $('.gotop ').on('click', function() {



                    // 滚动到顶部：

                    $('html,body').animate({ scrollTop: '0px' }, 1000);

                    // console.log(i)

                })
            } else {
                $('.gotop ').css({
                    opacity: '0'
                })
            }

        })
    }
    // 获取时间----------------------------------------------------
    function gettime() {
        var time = setInterval(function() {
            var data = new Date()
            var s = data.getHours()
            var f = data.getMinutes()
            var m = data.getSeconds()
            if (f < 10) {
                f = '0' + f

            }
            if (s < 10) {
                s = '0' + s

            }
            if (m < 10) {
                m = '0' + m

            }
            $('.time span:nth-child(1)').text(s)
            $('.time span:nth-child(2)').text(f)
            $('.time span:nth-child(3)').text(m)
                // console.log('111')
        }, 1000)
    }
    // gettime()





})