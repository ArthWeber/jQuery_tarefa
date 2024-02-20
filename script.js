$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTask = $('#taskName').val()
        const adicionarTask = $('<li style="text-decoration: none;"></li>')
        $(`<button class="removeTask" type="submit"><i class="ri-eraser-fill"></i></button>`).appendTo(adicionarTask)
        $(`
        <div>
            <input type="checkbox" id="${novaTask}">
            <label for="${novaTask}">${novaTask}</label>
        </div>
        `).appendTo(adicionarTask)
        $(adicionarTask).appendTo('ul')        
        $('#taskName').val('')    
    })

    $('#taskList').on('change', 'input[type="checkbox"]', function() {
        $(this).next('label').toggleClass('line-through');
    })
    
    $('#taskList').on('click', '.removeTask', function() {
        $(this).closest('li').remove();
    });
})