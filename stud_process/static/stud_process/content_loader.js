var lesson_button = ''

function get_lecture(id, type){
        $.get( "/s/api/lesson/"+ type +"/" + id + "/", function (data){
    if (type == 'lc'){
        show_lecture(data);
    }
    else if (type == 'vd'){
        show_video(data);
    }
    else if (type == 'tk'){
        show_task(data);
    }
    else if (type == 'ts'){
        show_test(data);
    }
});}


function lesson_passed(user_id, id, type){
    $.ajax({url: "s/api/lesson/completeLesson/",
            type: "POST",
            dataType: "json",
            data: {user: user_id, lesson_type: type, lesson_id: id},
            success: replace_button_to_complete_label()
            });

}

function replace_button_to_complete_label(){
    $('#lesson-btn').replaceWith( "<h2>Урок пройден</h2>" );
}

// функция для замены кнопки

function show_lecture(data){
    $('#content').html('<div class="p-3"><h2 style="align: centre;">' +
                        data.name +
                        '</h2>' +
                        data.text +
                        '</div>' +
                        '<button class="lesson-btn btn btn-sm btn-primary"'+
                         'onclick=lesson_passed('+
                         user_id +
                         ', ' +
                         data.id +
                         ', ' +
                         data.content_type +
                         ')>Отметить как выполненое</button>');
}
function show_video(data){
    $('#content').html('<div class="p-3"><h2>' +
                        data.name +
                        '</h2><video height="80%" controls><source src="' +
                        data.video + '" type="video/mp4"></video></div>' +
                        '<button class="lesson-btn btn btn-sm btn-primary" >Отметить как выполненое</button>');
}
function show_test(data){
    $('#content').html('<div class="p-3"><h2>' +
                        data.name +
                        '</h2><h6 style="color: gray;">' +
                        data.description +
                        '</h6></div>' +
                        '<div class="p-3"><p>Время на решение: ' +
                        data.time + ' миннут</p><a href="/s/testing/' +
                        data.id +
                        '" ><button class="lesson-btn btn btn-sm btn-primary" >Начать тест</button></a></div>');
}
function show_task(data){
    $('#content').html('<div class="p-3"><h2>' +
                        data.name +
                        '</h2><h6 style="color: gray;">' +
                        data.description + '</h6></div>' +
                        '<div class="p-3"><p>' +
                        data.text +
                        '</p> <a href="/s/practice/' +
                        data.id +
                        '" target=""><button class="lesson-btn btn btn-sm btn-primary" >Перейти к выполнению</button></a></div>');
}