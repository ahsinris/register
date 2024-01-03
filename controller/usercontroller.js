import service from '../service/userservice.js'
class Controller {
  async registerController (req, res) {
    try {
      const result = await service.userService(req.body)
      if (!result.sucess) {
        return res.status(result.status).json({
          message: result.message
        })
      }
      return res.status(200).json({
        message: 'sucessfully registered',
        data: result.data
      })
    } catch (e) {
      return res.status(500).json({
        message: 'server error ' + e
      })
    }
  }

  async loginController (req, res) {
    try {
      const result = await service.loginService(req.body)
      if (!result.sucess) {
        return res.status(result.status).json({
          message: result.message
        })
      }
      return res.status(result.status).json({
        message: result.message,
        data: result.data
      })
    } catch (e) {
      return res.status(500).json({
        message: 'server error ' + e
      })
    }
  }
}
export default new Controller()
