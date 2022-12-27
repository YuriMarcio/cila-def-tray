$(document).ready(function(){
    var dataSession =  $("html").attr("data-session");
    $.ajax({
        method: "GET",
        url: "/web_api/cart/"+dataSession,
        dataType: "json",
    }).done(function( response, textStatus, jqXHR ) {
        console.log(response);
        let list = $('ul#cart-prod');
        let teste = []

        // $("li#prod").each(function(index, element){
        //     console.log(element);
        // });
        $("li#prod").each(function(index, element) { 
            $(element).text( $(element).text() + "!!"); 
        });

        $.each(response, function(i,v){
            
            var product_name = (v.Cart.product_name); 
            var array = product_name.split('<');
            var array_name = array[0];

            var price = 'R$ '+v.Cart.price+'';
            list.append('<li><div  class="tw-flex tw-justify-between tw-mb-5"><div class="image-prod tw-w-70"><img src="'+v.Cart.product_image.http+'" class="thumb-img" ></div> <div  class="tw-w-160 tw-py-2"><h1  class="name-prod tw-font-bold tw-leading-9 tw-break-normal tw-mb-1 tw-text-xl">'+array_name+'</h1><p class="tw-mb-1 tw-text-2xl"><strong>'+price+'</strong></p></div><button class="tw-flex tw-justify-center tw-items-center tw-w-16"><img src="{{asset("/img/icon/trash.svg")}}{{asset("./img/icon/close.svg")}}" alt="" class="tw-h-9"></button></div></li>') ;
        });

        
    }).fail(function( jqXHR, status, errorThrown ){
        var response = $.parseJSON( jqXHR.responseText );
        console.log(response);
    });

    // ADICIONAR AO ACARRINHO SEM SAIR DA PAGINA
    function addCart(dataProductId){
        var dataSession = $("html").attr("data-session");
      $.ajax({
        method: "POST",
        url: "/web_api/cart/",
        contentType: "application/json; charset=utf-8",
        data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+dataProductId+'","quantity":"1"}}'
      }).done(function( response, textStatus, jqXHR ) {
        console.log(response);
        var qtdCart = parseInt($("span[data-cart=amount]").html());
        $("span[data-cart=amount]").html(qtdCart + 1);
      }).fail(function( jqXHR, status, errorThrown ){
        var response = $.parseJSON( jqXHR.responseText );
        console.log(response);
      });
    }
});
    