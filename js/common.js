// DinoWorks Common JS
$(document).ready(function(){
    preventDefaultAnchor();
    setGNB();
    
});


function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });
}

function setGNB(){
    $('.gnb_title').on('mouseenter focus', function(){
        // 기존의 서브 gnb는 보여주지 않음
        $('.nav-sub').css({'display' : 'none'});
        $(this).next().css({'display': 'table'});
        $('#header').addClass('open');
    });
    
    // 보이던 gnb가 안보이도록 설정
    $('#header').on('mouseleave', function(){
        $('#gnb > ul > li > ul').css({'display' : 'none'});
    $('#header').removeClass('open');
    });
}

