$(function () {
    $('a').on('mouseover', function () {
        var aid = this.id;
        if (aid == 'bg_one') {
            $('body').css('background', '#ff6b6b');
        } else if (aid == 'bg_two') {
            $('body').css('background', '#48dbfb');
        } else if (aid == 'bg_three') {
            $('body').css('background', '#50ff66');
        } else if (aid == 'bg_four') {
            $('body').css('background', '#feca57');
        } else if (aid == 'bg_five') {
            $('body').css('background', '#f368e0');
        } else if (aid == 'bg_six') {
            $('body').css('background', '#7143ff');
        }

    });
}).on('mouseout', function () {
    $('body').css('background', '#ffffff');
});