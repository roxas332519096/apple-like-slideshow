var allButtons = $('#buttons > span');
for(let i = 0;i < allButtons.length;i++){
    $(allButtons).on('click',function(e){
        var index = $(e.currentTarget).index();
        var px = index * -920;
        $('#images').css({
            transform : 'translate('+px+'px)' 
        })
    })
}