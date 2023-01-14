// $(document).ready(function(){
//     var dataSession =  $("html").attr("data-session");
//     var data_Id =  $(".prod-id").attr("data-product-id");
//     const urlParams = window.location.search;
//     var numsStr = urlParams.replace(/[^0-9]/g,'');
//     var numero = parseInt(numsStr);
//     var vari_id = numero;
    
//     $(document).on('click', 'button.buy-prod', function() {
//         const data = {
//         Cart: {
//             session_id : dataSession,
//             product_id : data_Id,
//             variant_id : vari_id,
//             quantity   : "1",
//         }
//         };

//         // $(this).load("{% element 'carrinho.js' %}", function(responseTxt, statusTxt, xhr){
//         //     if(statusTxt == "success")
//         //       alert("refereciou");
//         //     if(statusTxt == "error")
//         //       alert("Error: " + xhr.status + ": " + xhr.statusText);
//         //   });

//         $.ajax({
//             method: "POST",
//             url: "/web_api/cart/",
//             contentType: "application/json; charset=utf-8",
//             data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+data_Id+'","quantity":"1","variant_id":"'+vari_id+'"}}'
//         }).done(function( response, textStatus, jqXHRH ) {
//             getprod();
//             $(this).load('../elements/snippets/cart.html');
//             $('#dropdown-bag').show();
//         }).fail(function( jqXHR, status, errorThrown ){
//             var response = $.parseJSON( jqXHR.responseText );
//             alert('deu errado');
//         }); 
//     });
// });
    