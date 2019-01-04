# SwagShop-Api
Contains all the APIs for the swag shop. Built using Node and Mongo.

## List of APIs

### Products
('/product').post(addProduct);
('/product').get(getProducts);

### Cart
('/cart').post(createCart);
('/cart').get(getCart);
('/cart/product/add').put(addToCart);
('/cart/product/remove').delete(removeItemFromCart);

### Sale items
('/sale-items').post(createSaleItem);
('/sale-items').get(getSaleItems);
('/sale-items/product/add').put(addProductToSaleItems);
('/sale-items/product/remove').delete(removeItemFromSaleItems);
('/sale-items/related-items/add').put(addRelatedProductToSaleItems);
('/sale-items/related-items/remove').delete(removeItemFromSaleItems);

### Wish list
('/wishlist').post(createWishList);
('/wishlist').get(getWishList);
('/wishlist/product/add').put(addProductToWishList);
