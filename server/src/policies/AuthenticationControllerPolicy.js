// const Joi = require('joi')
// // maybe the validation should be done in the client side

// const RegisterSchema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).max(32).required()
// })

// module.exports = {
//   register (req, res, next) { // Just to validate the data of the register
//     console.log(req.body);
//     const {err, value} = Joi.validate(req.body, RegisterSchema); // the return value
//     if (err) {
//       switch (err.details[0].context.key) { // ?
//         case 'email':
//           res.status(400).send({
//             error: 'The email address you provided is not valid!'
//           })
//           break;
//         case 'password':
//           res.status(400).send({
//             error: `The password should be longer than 6 and be shorter than 32!`
//           })
//           break
//         default:
//           res.status(400).send({
//             error: 'Invald registration information.'
//           })
//       }
//     } else {
//       console.log('The register request is valid.')
//       next() // succeed, and the next function get the control right
//     }
//   }
// }


// ------------------------------------------------------------------------------
module.exports = {
  register (req, res, next) {
    var email = req.body.email
    var password = req.body.password
    var flag = true
    if (email.indexOf('@') == -1 || email.indexOf('.') <= email.indexOf('@')) {
      res.status(400).send({
        error: 'You should input the correct email address.'
      })
      flag = false
    }
    if (password.length < 8 || password.length >= 32) {
      res.status(400).send({
        error: 'The password should be longer than 7 and be shorter than 32'
      })
      flag = false
    }
    if (flag) next()
  }
}