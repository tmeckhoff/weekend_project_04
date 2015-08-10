$(document).ready(function (){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function(data){
                console.log(data);
                getData();

            }
        });
    });

    getData();

    $('body').on('click', '#refresh', function(){
        getData();
    });

    $('#container').on('click', 'button', function() {
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).data("id"),
            success: function() {
                console.log("Hes dead Jim!")
            },
            error: function(xhr, status) {
                alert("Error: ", status)
            },
            complete: function() {
                console.log("Delete Complete!")
            }
        });
        $(this).parent().remove();
    });

});

function getData(){
    $.ajax({
        type:"GET",
        url: "/things",
        success: function(data){
            console.log(data);
            updateContainer(data);
        }
    })
}

function updateContainer(data){
    $("#container").empty();
    for(var i =0; i < data.length; i++){
        $('#container').append('<div></div>');
        var $el = $('#container').children().last();
        $el.append('<p>' + data[i].message + '</p>');
        $el.append('<p>' + data[i].name + '</p>');
        $el.append("<button id='delete' data-id='" + data[i]._id + "'>DELETE</button>");
    }

}