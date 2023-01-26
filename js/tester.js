var cart = {
    customerId: null,
    loadCustomerId: function(){
        if(!cart.customerId){
            const customerInfo = dataLayer.find(element => ('customerId' in element));
            cart.customerId = customerInfo ? customerInfo.customerId : null;   
            console.log('cart.customerId',cart.customerId); 
        }        
    },
    session: function () {
        return jQuery("html").attr("data-session");
    },
    filterVariant: function(variants, selects){
        var i = 0;      
        var select = selects.eq(0).val();
  
        if(!!select){
            var select2 = selects.eq(1).val();
            while(i < variants.length){
                if(variants[i].option == select && variants[i].option2 == select2){                    
                    return variants[i];
                }
                i++;
            }
        }
        return 500;
    },
    stockAlert: function(e){
        var variant = cart.filterVariant(jQuery(e).data('variants'), jQuery(e).find('select'));
        var quant = Number(e.find('input[type="number"]').val());
  
        e.find('input[type="number"]').attr('max', variant.stock).attr('data-variant', variant.id);
  
        var numberFormat = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
        var price = numberFormat.format(variant.price.price);
        var payment = variant.price.payment;
  
        e.closest('.product').find('.product-price').html('<div class="price-off new-price">'+ price +'</div><div class="product-payment">'+ payment +'</div>');
  
        if(Number(variant.stock) >= quant) {
            jQuery(e).removeClass('dont-stock');
        } else{
            jQuery(e).addClass('dont-stock');
        }
        
    },
    initAdd: function () {

        jQuery('body').on('change', '.add-cart input', function(){
            var total = Number(jQuery(this).val());
            jQuery(this).val(total > 0 ? total : 1);
        });

        jQuery('body').on('change', '.list-variants select', function() {
            
            if(jQuery(this).hasClass('first')){
                if(jQuery(this).parents('.list-variants').find('.second').val() || !jQuery(this).parents('.list-variants').find('.second').length){
                    cart.stockAlert(jQuery(this).parents('.list-variants'));
                }
            } else{
                if(jQuery(this).parents('.list-variants').find('.first').val()){            
                    cart.stockAlert(jQuery(this).parents('.list-variants'));
                }
            }
            
        });

        jQuery('body').on('submit', '.list-variants', function(e){
            e.preventDefault();

            if(jQuery(this).hasClass('dont-stock')) return false;            
            var id = jQuery(this).data('id');
            var quant = jQuery(this).find('input').val();
            var href = jQuery(this).parents('.product').find('> a').attr('href');
            var variant = jQuery(this).data('variants').length ? jQuery(this).find('input').attr('data-variant') : 0;
            var validaApi = jQuery(this).data('api-cart');

            cart.addToCart(id, quant, variant, href, validaApi);
        });
    },
    addToCart: function(productId, quantity, variant, href){                    

        cart.loadCustomerId();

        const data = {
            Cart: {
                session_id : cart.session(),
                product_id : productId,
                variant_id : variant ? variant : 0,
                quantity   : quantity
            }
        };

        if(cart.customerId){
            data.Cart.customer_id = cart.customerId;
        }

        jQuery.ajax({
            method: 'post',
            url: '/web_api/cart/',
            dataType: 'json',
            data: data,
            success: function(response) {
                // exibe o carrinho lateral ou faz a ação desejada pelo parceiro
                // Exemplo: cart.showCart();
            },
            error: function( ){
                window.location.href = href;
            }    
        });

    }
}    

cart.initAdd(); 