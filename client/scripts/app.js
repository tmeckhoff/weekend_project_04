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

    ('#refresh').on('click', 'button', function(){
        event.preventDefault();
        $('#container').load("index.html");

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
    }

}