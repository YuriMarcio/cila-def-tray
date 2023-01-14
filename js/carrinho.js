$(document).ready(function(){
    var dataSession =  $("html").attr("data-session");
    var data_Id =  $(".prod-id").attr("data-product-id");
    const urlParams = window.location.search;
    var numsStr = urlParams.replace(/[^0-9]/g,'');
    var numero = parseInt(numsStr);
    var vari_id = numero;

    function getprod(){
      $.ajax({
        method: "GET",
        url: "/web_api/cart/"+dataSession,
        dataType: "json",
    }).done(function( response, textStatus, jqXHR ) {
       console.log(response);
    //    quantidade de produtos
        // var quantity = response.length;
        // if(quantity != 0){
        //     $('.cart-quant').empty();
        //     var transInStr = quantity.toString();
        //     $('.cart-quant').append(transInStr);
        // };
    //  valor total dos produtos no carrinho  
        // $('.price_prd').attr("data-cart", "price");

        
        let list = $('ul#cart-prod');
        $.each(response, function(i,v){
            var int = parseInt(v.Cart.product_id);
            var product_name = (v.Cart.product_name); 
            var array = product_name.split('<');
            var array_name = array[0];
            var price = 'R$ '+v.Cart.price+'';
            list.append('<li class="teste"><div class="tw-flex tw-justify-between tw-mb-5"><div class="image-prod tw-w-70"><img src="'+v.Cart.product_image.http+'" class="thumb-img" ></div> <div  class="tw-w-160 tw-py-2"><h1  class="name-prod  tw-leading-9 tw-break-normal tw-mb-1 tw-text-xl">'+array_name+'</h1><p class="tw-mb-1 tw-text-2xl"><strong>'+price+'</strong></p></div><button type="submit" data-app="product.delete-button" data-product ="'+v.Cart.product_id+'" class="deleteProd tw-flex tw-justify-center tw-items-center tw-w-16"><i class="fa-regular fa-trash-can tw-text-4xl tw-text-slate-400 hover:tw-text-slate-700 "></i></button></div></li>') ;
        });
        // notificação de item no carrinho
        $('#bol').show();
        
    }).fail(function( jqXHR, status, errorThrown ){
        var response = $.parseJSON( jqXHR.responseText );
        console.log(response);
        $('.cart-quant').append('0');
    })
    };

    getprod();
   
    function adiciona_ao_carrinho(){

      
      $(document).on('click', 'button.buy-prod', function() {
          const data = {
          Cart: {
              session_id : dataSession,
              product_id : data_Id,
              variant_id : vari_id,
              quantity   : "1",
          }
          };

          // $(this).load("{% element 'carrinho.js' %}", function(responseTxt, statusTxt, xhr){
          //     if(statusTxt == "success")
          //       alert("refereciou");
          //     if(statusTxt == "error")
          //       alert("Error: " + xhr.status + ": " + xhr.statusText);
          //   });

          $.ajax({
              method: "POST",
              url: "/web_api/cart/",
              contentType: "application/json; charset=utf-8",
              data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+data_Id+'","quantity":"1","variant_id":"'+vari_id+'"}}'
          }).done(function( response, textStatus, jqXHRH ) {
              $('ul#cart-prod').empty();
              $('ul#cart-prod').empty();
              getprod();
              $('#dropdown-bag').show();
          }).fail(function( jqXHR, status, errorThrown ){
              var response = $.parseJSON( jqXHR.responseText );
              alert('deu errado');
          }); 
      });
    };
    setTimeout( adiciona_ao_carrinho(),4000)
   

});
    