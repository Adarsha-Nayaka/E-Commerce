const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: "rzp_test_IIXw1fcDqJbFlK",
  key_secret: "9v2BbFPR0Ftnj79OBdIZMPXG",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerification,
};
