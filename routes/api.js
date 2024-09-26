import express from 'express';
const router = express.Router();


import * as BrandController from '../app/controllers/BrandController.js';
import * as CartListController from '../app/controllers/CartListController.js';
import * as CategoryController from '../app/controllers/CategoryController.js';
import * as InvoiceController from '../app/controllers/InvoiceController.js';
import * as ProductController from '../app/controllers/ProductController.js';
import * as UserController from '../app/controllers/UsersController.js';
import * as WishListController from '../app/controllers/WishListController.js';



// user router

router.post('/Login', UserController.Login);
router.post('/VerifyLogin', UserController.VerifyLogin);
router.post('/CreateUserProfile', UserController.CreateUserProfile);
router.post('/UpdateUserProfile', UserController.UpdateUserProfile);
router.get('/ReadUserProfile', UserController.ReadUserProfile);


// Brand router

router.get('/BrandList', BrandController.BrandList);


// CartList router

router.post('/CreateCart', CartListController.CreateCart);
router.get('/ReadCartList', CartListController.ReadCartList);
router.post('/RemoveCart', CartListController.RemoveCart);
router.post('/UpdateCart', CartListController.UpdateCart);


// Category router

router.get('/CategoryList', CategoryController.CategoryList);


// Invoice router

router.post('/CreateInvoice', InvoiceController.CreateInvoice);
router.get('/ReadInvoiceDetails', InvoiceController.ReadInvoiceDetails);
router.get('/ReadInvoiceList', InvoiceController.ReadInvoiceList);


// Product router

router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory);
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark);
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand);
router.get('/ProductListBySlider', ProductController.ProductListBySlider);
router.get('/ProductDetailsID/:ProductID', ProductController.ProductDetailsID);
router.get('/ProductListByKeyword/:keyword', ProductController.ProductListByKeyword);
router.get('/ProductReviewListByID/:ProductID', ProductController.ProductReviewListByID);

// review router
router.post('/CreateProductReview', ProductController.CreateProductReview);



// wish list router

router.post('/CreateWish', WishListController.CreateWish);
router.get('/ReadWishList', WishListController.ReadWishList);
router.post('/RemoveWish', WishListController.RemoveWish);








export default router;

