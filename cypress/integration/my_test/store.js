describe('Тестирование сайта testqastudio.me', function () {
    it('Позитивный тест на покупку комода', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11345 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail') .click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Nana');
         cy.get('#billing_last_name').type('Pehshvelashvili');
         cy.get('#billing_address_1').type('yl. Maksimova, 17');
         cy.get('#billing_city').type('Baikonur');
         cy.get('#billing_state').type('Baikonur');
         cy.get('#billing_postcode').type('468320');
         cy.get('#billing_phone').type('+77778787528');
         cy.get('#billing_email').type('nanabaikonur@mail.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');
     })

     it('Позитивный тест на покупку кровати и столика', function () {
        cy.visit('https://testqastudio.me/');
        cy.reload();
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(5500);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Nana');
        cy.get('#billing_last_name').type('Pehshvelashvili');
        cy.get('#billing_address_1').type('yl. Maksimova, 17');
        cy.get('#billing_city').type('Baikonur');
        cy.get('#billing_state').type('Baikonur');
        cy.get('#billing_postcode').type('468320');
        cy.get('#billing_phone').type('+77778787528');
        cy.get('#billing_email').type('nanabaikonur@mail.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.'); 
     })

   
 })
 