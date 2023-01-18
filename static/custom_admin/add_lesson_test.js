function get_answer(q_id, new_answer_num){
        return '<p id="'+ q_id +'_a_' + new_answer_num + '"><input id="cb_'+ new_answer_num + '_' + q_id + '" type="checkbox" name="cb_'+ new_answer_num + '_' + q_id + '"><input type="text" value="Вариант ответа" name="answer_' + new_answer_num + '_' + q_id +'" maxlength="100" required="" id="answer_'+ new_answer_num +'_' + q_id+ '"><a onclick="remove_answer(' + q_id + '_a_'+ new_answer_num + ')"> Удалить ответ </a></p>';
}

function get_question(new_q_num){
        return '<fieldset id="q_' + new_q_num + '">' +
            '<p>' +
                '<label for="id_text_q_' + new_q_num + '">Вопрос:</label>' +
                '<input type="text" name="text_q_' + new_q_num + '" maxlength="100" required="" id="id_text_q_' + new_q_num + '">' +
                '<a onclick="remove_question(\'q_' + new_q_num + '\')"> Удалить вопрос </a>' +
            '</p>' +
            '<p>' +
                '<label for="id_description_q_' + new_q_num + '">Примечание:</label>' +
                '<textarea name="description_q_' + new_q_num + '" cols="40" rows="3" maxlength="250" required="" id="id_description_q_' + new_q_num + '"></textarea>' +
            '</p>' +
            '<div id="q_' + new_q_num + '_answers">'+
                '<input type="hidden" name="total_answers_q_' + new_q_num + '" value="1" id="total_answers_q_' + new_q_num + '">' +
                get_answer('q_' + new_q_num, 1) +
            '</div>' +
            '<a onclick="add_answer(\'q_' + new_q_num + '\')"><img src="/static/admin/img/icon-addlink.svg" alt="False" title="Добавить ответ">  Добавить ответ</a>' +
            '<br>'+
            '<a onclick="add_question(\'q_' + new_q_num + '\')"><img src="/static/admin/img/icon-addlink.svg" alt="False" title="Добавить вопрос">  Добавить вопрос</a>' +
        '</fieldset>';
}

function add_question(q_id) {
        var new_q_num = parseInt($('#total_questions').val()) + 1;

        var new_question = get_question(new_q_num);

        $('#'+ q_id).after(new_question);
        $('#total_questions').val(new_q_num);
        $('#id_text_q_' + new_q_num).focus();

}

function add_answer(q_id) {
        var new_answer_num = parseInt($('#total_answers_' + q_id).val()) + 1;
        var new_answer = get_answer(q_id, new_answer_num)
        $('#'+ q_id +'_answers').append(new_answer);
        $('#total_answers_'+q_id).val(new_answer_num);
        $('#answer_' + new_answer_num + '_' + q_id).focus();
}

function remove_answer(a_id){
        $('#'+a_id).remove();
}

function remove_question(q_id){
        $('#'+q_id).remove();
}

function add_answer_in_added(q_id){
        var new_answer_num = parseInt($('#total_added_answers_q_' + q_id).val()) + 1;
        var new_answer = '<p id="new_q_'+ q_id +'_a_' + new_answer_num + '"><input id="new_cb_'+ new_answer_num + '_q_' + q_id + '" type="checkbox" name="new_cb_'+ new_answer_num + '_q_' + q_id + '"><input type="text" value="Вариант ответа" name="new_answer_' + new_answer_num + '_q_' + q_id +'" maxlength="100" required="" id="answer_'+ new_answer_num +'_q_' + q_id+ '"><a onclick="remove_answer(new_' + q_id + '_a_q_'+ new_answer_num + ')"> Удалить ответ </a></p>';
        $('#added_q_'+ q_id +'_answers').append(new_answer);
        $('#total_added_answers_q_'+q_id).val(new_answer_num);
        $('#answer_' + new_answer_num + '_' + q_id).focus();
}

function delete_an_existing_q(id_elem, q_id){
        $('#'+id_elem).replaceWith('<input type="hidden" name="removed_q_'+ q_id +'" value='+ q_id +'>')
}

function delete_an_existing_a(id_elem, a_id){
        $('#'+id_elem).replaceWith('<input type="hidden" name="removed_a_'+ a_id +'" value='+ a_id +'>')
}