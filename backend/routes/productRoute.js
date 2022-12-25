const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  getSuperAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/superadmin/products")
  .get(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    getSuperAdminProducts
  );

router
  .route("/admin/products")
  .get(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    getAdminProducts
  );

router
  .route("/admin/product/new")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    createProduct
  );

router
  .route("/admin/product/:id")
  .put(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    updateProduct
  )
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    deleteProduct
  );

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
