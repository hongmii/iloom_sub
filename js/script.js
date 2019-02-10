$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
});

    $('div.image-slide ul.indicator li a').on('click',function(){
        var index = $('div.image-slide ul.indicator li').index($(this).parent());
        $('div.image-slide ul.slide li').css({'display':'none'});
        $('div.image-slide ul.slide li:eq(' + index + ')').css({'display':'block'});
        $('div.image-slide ul.indicator li').removeClass('on');
        $('div.image-slide ul.indicator li:eq(' + index + ')').addClass('on');

    });

    // 1. 클릭했을때 어떤이벤트를 할것인가 
    // 2. 햔재 어떤페이지?
    // 3. -1해서 보여줄 페이지를 찾는다
    // 4. 다지우고 n번 보여줘 , 

    $('div.image-slide p.control a.prev').on('click', function(){
        var index = $('div.image-slide ul.indicator li').index($('div.image-slide ul.indicator li.on')); // li 를 불러오고 그 중 클래스가 on 이 붙은것을 고른다
        // alert(index);
        // index = index -1;  
        //prev니까 클릭하면 보여줄 페이지를 찾는다 위처럼하면 0번째일때는 -1번쨰 페이지가 나오니까 바꿔야됨다 
        if(index === 0){
            index = 3;
        }else{
            index = index -1;
        }
        $('div.image-slide ul.slide li').css({'display':'none'}) // 누르면 없어지게 하는 동작 (일단 다 지움)
        $('div.image-slide ul.slide li:eq(' + index + ')').css({'display':'block'}); // 선택한 인덱스를 클릭하면 선택한 이미지만 보이게하는 동작 
        $('div.image-slide ul.indicator li').removeClass('on');
        $('div.image-slide ul.indicator li:eq(' + index + ')').addClass('on');
    });


    $('div.image-slide p.control a.next').on('click',function(){
        var index = $('div.image-slide ul.indicator li').index($('div.image-slide ul.indicator li.on')); // li 를 불러오고 그 중 클래스가 on 이 붙은것을 고른다
        // alert(index);
        // index = index -1;  
        //prev니까 클릭하면 보여줄 페이지를 찾는다 위처럼하면 0번째일때는 -1번쨰 페이지가 나오니까 바꿔야됨다 
        if(index === 3){
            index = 0;
        }else{
            index = index + 1;
        }
        $('div.image-slide ul.slide li').css({'display':'none'}) // 누르면 없어지게 하는 동작 
        $('div.image-slide ul.slide li:eq(' + index + ')').css({'display':'block'}); // 선택한 인덱스를 클릭하면 선택한 이미지만 보이게하는 동작
        $('div.image-slide ul.indicator li').removeClass('on');
        $('div.image-slide ul.indicator li:eq(' + index + ')').addClass('on');
    });


$(window).on('load', function () {
    load('#js-load', '3');
    $("#js-btn-wrap .button").on("click", function () {
        load('#js-load', '3', '#js-btn-wrap');
    })
});
 
function load(id, cnt, btn) {
    var girls_list = id + " .js-load:not(.active)";
    var girls_length = $(girls_list).length;
    var girls_total_cnt;
    if (cnt < girls_length) {
        girls_total_cnt = cnt;
    } else {
        girls_total_cnt = girls_length;
        $('.btn-wrap').hide()
    }
    $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}
//더보기버튼

function toggleSidebar(){
    document.getElementById('sidebar').classList.toggle('active');
}


