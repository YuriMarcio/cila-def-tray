$(document).ready(function(){
    var dataSession =  $("html").attr("data-session");
    $.ajax({
        method: "GET",
        url: "/web_api/cart/"+dataSession,
        dataType: "json",
    }).done(function( response, textStatus, jqXHR ) {
        console.log(response);
        var product_name = (response[0].Cart.product_name);
        console.log(product_name);
        var product_price = (response[0].Cart.price);
        var product_image= (response[0].Cart.product_image.http);
        $("img#image-thumb").attr("src", product_image);
        $( "#product-valuation" ).append(product_price);

        // simplifica name
        let array = product_name.split('<');
        $.each(array, function(index, element) {
            
          });
          $( "#product-name" ).append(array[0]);
        // simplifica name
        

        
    }).fail(function( jqXHR, status, errorThrown ){
        var response = $.parseJSON( jqXHR.responseText );
        console.log(response);
    });
});
    