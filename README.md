# SwagShop-Api
Contains all the APIs for the swag shop. Built using NodeJS and MongoDB.

## List of APIs

### Products
```javascript
('/product').post(addProduct);
('/product').get(getProducts);
```

### Cart
```javascript
('/cart').post(createCart);
('/cart').get(getCart);
('/cart/product/add').put(addToCart);
('/cart/product/remove').delete(removeItemFromCart);
```

### Sale items
```javascript
('/sale-items').post(createSaleItem);
('/sale-items').get(getSaleItems);
('/sale-items/product/add').put(addProductToSaleItems);
('/sale-items/product/remove').delete(removeItemFromSaleItems);
('/sale-items/related-items/add').put(addRelatedProductToSaleItems);
('/sale-items/related-items/remove').delete(removeRelatedProductFromSaleItems);
```

### Wish list
```javascript
('/wishlist').post(createWishList);
('/wishlist').get(getWishList);
('/wishlist/product/add').put(addProductToWishList);
('/wishlist/product/remove').delete(removeProductFromWishList);
```
