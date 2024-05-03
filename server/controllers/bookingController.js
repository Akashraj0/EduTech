const Booking = require("../models/bookingModel");
const stripe = require("stripe")(
  "sk_test_51P8dcYSISXYVPIJTBpXq6bzGeaZGQuqInr13oDG7G0RncghT2BMLbY1ogW5O1gPqthqzlDaYKZmD1wufVG9ziwJf00isFf3pVT"
);
exports.getCheckoutSession = async (req, res) => {
  try {
    const book = await Booking.create({
      purchase: req.body.purchase,
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      price: req.body.price,
    });
    const product = await stripe.products.create({
      name: req.body.purchase,
    });

    if (product) {
      var price = await stripe.prices.create({
        product: `${product?.id}`,
        unit_amount: req.body.price * 100,
        currency: "inr",
      });
    }

    if (price.id) {
      const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: price.id,
            quantity: 1,
          },
        ],
        customer_email: req.body.email,
        mode: "payment",
        return_url: `http://localhost:5173/return?session_id={CHECKOUT_SESSION_ID}`,
      });

      res.send({ clientSecret: session.client_secret });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.sessionStatus = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
};
