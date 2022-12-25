const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    getAllOrders
  );

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin", "superadmin"), updateOrder)
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin", "superadmin"),
    deleteOrder
  );

module.exports = router;
