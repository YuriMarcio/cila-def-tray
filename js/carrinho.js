$(document).ready(function(){
    var dataSession =  $("html").attr("data-session");
    var data_Id =  $(".prod-id").attr("data-product-id"); 
    $('cart-drop').animate('margin-right','-200px',2000);
    function getprod(){
      $.ajax({
        method: "GET",
        url: "/web_api/cart/"+dataSession,
        dataType: "json",
    }).done(function( response, textStatus, jqXHR ) {
        console.log(response);

        let list = $('ul#cart-prod');
            $.each(response, function(i,v){
                var int = parseInt(v.Cart.product_id);
                var product_name = (v.Cart.product_name); 
                var array = product_name.split('<');
                var array_name = array[0];
                var price = 'R$ '+v.Cart.price+'';
                list.append('<li data-ide="'+v.Cart.variant_id+'" class="teste"><div class="tw-flex tw-justify-between tw-mb-5"><div class="image-prod tw-w-70"><img src="'+v.Cart.product_image.http+'" class="thumb-img" ></div> <div  class="tw-w-160 tw-py-2"><h1  class="name-prod  tw-leading-9 tw-break-normal tw-mb-1 tw-text-xl">'+array_name+'</h1><p class="tw-mb-1 tw-text-2xl"><strong>'+price+'</strong></p></div><button data-app="product.delete-button" data-variant ="'+v.Cart.variant_id+'" data-product ="'+v.Cart.product_id+'" class="deleteProd tw-flex tw-justify-center tw-items-center tw-w-16"><i class="fa-regular fa-trash-can tw-text-4xl tw-text-slate-400 hover:tw-text-slate-700 "></i></button></div></li>') ;
            });
            // notificação de item no carrinho
            $('#bol').show();
            prodinfo()
            
    }).fail(function( jqXHR, status, errorThrown ){
        prodinfo()
    })
    };

    getprod();
   
    function adiciona_ao_carrinho(){      
      $(document).on('click', 'button.buy-prod', function() {
        var prodvar = $('#selectedVariant').val();
        const data = {
        Cart: {
            session_id : dataSession,
            product_id : data_Id,
            variant_id : prodvar,
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
              data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+data_Id+'","quantity":"1","variant_id":"'+prodvar+'"}}'
          }).done(function( response, textStatus, jqXHRH ) {
              $('ul#cart-prod').empty();
              $('ul#cart-prod').empty();
              getprod();
              $('#dropdown-bag').show();
          }).fail(function( jqXHR, status, errorThrown ){
              var response = $.parseJSON( jqXHR.responseText );
              alert('Nao temos esse produto momentaneamente no estoque ');
          }); 
      });
    };
    setTimeout( adiciona_ao_carrinho(),4000)

    function deleteProdut(){
        $(document).on('click', 'button.deleteProd', function() {
            var idDel = parseInt($(this).attr('data-product') );
            var varProd = parseInt($(this).attr('data-variant'));
            var teste = $(this).attr('data-variant');
            $('li[data-ide*="'+teste+'"]').fadeOut('slow');
            $.ajax({
                method: "DELETE",
                url: "/web_api/carts/"+dataSession+"/"+idDel+"/"+varProd,
                contentType: "application/json; charset=utf-8",
            }).done(function( response, textStatus, jqXHR ) {
                $('ul#cart-prod').empty();
                getprod();
                prodinfo();
                $('#dropdown-bag').show();
            }).fail(function( jqXHR, status, errorThrown ){
                var response = $.parseJSON( jqXHR.responseText );
                console.log(response);
                alert('deu errado');
            });
        });
    }
    deleteProdut();

    function prodinfo(){
        var params = {};
        params["attrs"] = "Cart.price,Cart.quantity";
        $.ajax({
            method: "GET",
            url: "/web_api/cart/"+dataSession,
            data: params
          }).done(function( response, textStatus, jqXHR ) {
            console.log(response);
            var totalquant = 0;
            var totalprice = 0;
            $.each(response, function(i,v){
                totalquant += parseInt(v.Cart.quantity);
                var quant = parseInt(v.Cart.quantity)
                var valor = parseInt(v.Cart.price); 
                totalprice += quant * valor;
            })
            Number.prototype.toBrl = function () {
                return 'R$ ' + this.toFixed(2).replace('.', ',');
            };
            let format = parseFloat(totalprice).toBrl();
            $('.total-price').empty();
            $('.cart-quant').empty();
            if(format == 0){
                format = 0
            };
            $('.total-price').append(format);
            $('.cart-quant').append(totalquant);

            // console.log(totalprice);
          }).fail(function( jqXHR, status, errorThrown ){
            var response = $.parseJSON( jqXHR.responseText );
            var totalquant = 0;
            var totalprice = 0;
            Number.prototype.toBrl = function () {
                return 'R$ ' + this.toFixed(2).replace('.', ',');
            };
            let format = parseFloat(totalprice).toBrl();
            $('.total-price').empty();
            $('.cart-quant').empty();
            if(format == 0){
                format = 0
            };
            $('.total-price').append(format);
            $('.cart-quant').append(totalquant);
          });
    }

    // vitrini da loja 
    $(document).on('click', '.check' , function(){
        var idvariante = $(this).attr('data-variants');
        
        // $("input.attrvari").empty();
        console.log($(".datavariants").append(idvariante))
    });

    function vitri(){
        $(document).on('mouseenter','.swiperIndividual', function(){
            var idItemHover = $(this).attr('idprodcarrousel');
            // var attrcrt = $('.swiperIndividual[idprodcarrousel*="'+idItemHover+'"]').
            $('#description[data-id*="'+idItemHover+'"]').hide();
            $('form.list-variants[data-id*="'+idItemHover+'"]').show();

            $(this).on('click','button.action[data-id*="'+idItemHover+'"]', function(){
                event.preventDefault();

                var valorInput = $('input.attrvari[data-id*="'+idItemHover+'"]').attr("valuevar");
                console.log(valorInput);
                
                // const data = {
                //     Cart: {
                //         session_id : dataSession,
                //         product_id : idItemHover,
                //         variant_id : valorInput,
                //         quantity   : "1",
                //     }
                //     };
                //       $.ajax({
                //           method: "POST",
                //           url: "/web_api/cart/",
                //           contentType: "application/json; charset=utf-8",
                //           data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+idItemHover+'","quantity":"1","variant_id":"'+valorInput+'"}}'
                //       }).done(function( response, textStatus, jqXHRH ) {
                //           $('ul#cart-prod').empty();
                //           $('ul#cart-prod').empty();
                //           getprod();
                //           $('#dropdown-bag').show();
                //       }).fail(function( jqXHR, status, errorThrown ){
                //           var response = $.parseJSON( jqXHR.responseText );
                //           alert('Nao temos esse produto momentaneamente no estoque ');
                //       }); 
            });
        });
        
        $(document).on('mouseleave', '.swiperIndividual', function(){
            var idItemHover = $(this).attr('idprodcarrousel');
            $('#description[data-id*="'+idItemHover+'"]').show();
            $('form.list-variants[data-id*="'+idItemHover+'"]').hide();
            // $('.size-check').empty('');
        });
    }


    vitri();
});
    