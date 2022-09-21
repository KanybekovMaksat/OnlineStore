$(function(){
    
    // Checkbox
    $('.checkbox').click(function(){
        $('.checkbox').toggleClass('active')
        $('.header__sector').slideToggle(100)

        $('.header__nav').addClass('active')


        

    })
    $('.end__text').html('<p class="end__text">Здесь мы собрали всю информацию от подбора инстурментов и материалов до сборки мебели и фурнитуры. <br> <br> Чтобы вы самостоятельно могли разобраться с нюансами работы со старой мебелью из дерева. <br> <br> Наше руководство непременно станет вашей настольной книгой по реставрации мебели.</p>')

    // headerFixed
    var header = $('#header')
    var introH = $('#intro').innerHeight()
    var scrollOfset = $(window).scrollTop()
    checkScroll(scrollOfset)


    $(window).on('scroll', function(){
        
        scrollOfset = $(this).scrollTop()
        checkScroll(scrollOfset)


    })

    function checkScroll(){
        if(scrollOfset >= introH) {
            header.addClass('fixed')
            $('.header__photo').remove()
        }
        else{
            header.removeClass('fixed')
            $('header__photo').add()
        }

    }

    // scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault
        var BlockId = $(this).data('scroll')
        var BlockOffset = $(BlockId).offset().top
        
        $('html, body').animate({
            scrollTop: BlockOffset
        }, 800)
    })

    // Button
    $('.port__photo').click(function(e){
        e.preventDefault()
        if($('.port__img').attr('src')!==$(this).attr('src')){
        $('.port__img').fadeOut(0).attr('src', $(this).attr('src')).fadeIn(1000)
        }
        $('.port__photo').fadeTo(500, 1).css({
            'border' : 'none'
        })
        $(this).fadeTo(500, 0.6).css({
            'border':'1rem dotted black'
        })
    })
    

    


})