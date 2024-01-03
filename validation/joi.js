import joi from 'joi'
class Validation {
  async registerValidation(req, res, next) {
    try {
      const schema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
      })
      await schema.validateAsync(req.body)
      next()
    } catch (e) {
      // console.log(e)
      return res.status(500).json({
        message: 'server error' + e
      })
    }
  }

  async loginValidation(req, res, next) {
    try {
      const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
      })
      await schema.validateAsync({ ...req.body })
      next()
    } catch (e) {
      // console.log(e)
      return res.status(500).json({
        message: 'server error' + e
      })
    }
  }
}
export default new Validation()
