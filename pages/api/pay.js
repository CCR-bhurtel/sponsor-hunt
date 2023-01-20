// const Stripe = require('stripe');
// const sgMail = require('@sendgrid/mail');
// const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// const templates = [
//     {
//         _id: '881f89e6-5bfa-4067-a56f-e86885fd4869',
//         name: '1Page Store Theme',
//         link: '',
//         price: 80,
//         coverImage:
//             'https://user-images.githubusercontent.com/58182980/204480265-2e4c7c44-993d-4d6e-88d7-b8d6d3e14442.png',
//     },
// ];

// const sendMail = (email, name) => {
//     sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
//     // const html = renderPug({
//     //   username: name,
//     //   templates,
//     //   tiktokLink: "",
//     //   instagramLink: "",
//     //   linkedInLink: "",
//     //   baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
//     // });
//     const html = '<h1>Test html</h1>';
//     const msg = {
//         from: 'hello@branddealer.com',
//         to: email,
//         subject: "Let's go ",
//         html,
//     };
//     const mailPromise = new Promise((resolve, reject) => {
//         sgMail
//             .send(msg)
//             .then(() => {
//                 resolve(`Check your email ${email}`);
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     });
//     return mailPromise;
// };

// const handler = (req, res) => {
//     const requestData = JSON.parse(req.body.body);
//     const { email, name, token } = requestData;
//     let totalPrice = 0;
//     templates.forEach((template) => (totalPrice += template.price));

//     try {
//         stripe.customers
//             .create({
//                 email,
//                 name,
//                 source: token,
//             })
//             .then((customer) => {
//                 return stripe.charges.create({
//                     amount: Math.round(totalPrice * 100),
//                     description: 'Price for 1page template',
//                     currency: 'usd',
//                     customer: customer.id,
//                 });
//             })
//             .then((charge) => {
//                 console.log('Charged');
//                 sendMail(email, name).then((response) => {
//                     res.status(200).json({
//                         message: response,
//                     });
//                 });

//                 // Send email template here
//             })
//             .catch((err) => {
//                 console.log(err);
//                 return res.status(500).json(err);
//             });
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json(e);
//     }
// };

// export default handler;
