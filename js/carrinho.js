var dataSession =  $("html").attr("data-session");
    $.ajax({
        method: "GET",
        url: "/web_api/cart/"+dataSession
    }).done(function( response, textStatus, jqXHR ) {
        console.log(response);
    }).fail(function( jqXHR, status, errorThrown ){
        var response = $.parseJSON( jqXHR.responseText );
        console.log(response);
    });