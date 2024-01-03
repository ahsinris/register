import dbconn from '../db/mysqlconfig.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
class Service {
  async userService (requestdata) {
    const { name, email, password } = requestdata

    const [isEmailExist] = await dbconn.query('select * from employees where email = ?', [email])
    if (isEmailExist.length) {
      return {
        sucess: false,
        status: 400,
        message: 'email already exist'
      }
    }
    const hashPassword = await bcrypt.hash(password, Number(process.env.SALTROUND))
    const [result] = await dbconn.query('insert into employees (name,email,password) values(?,?,?)', [name, email, hashPassword])
    return {
      sucess: true,
      data: result
    }
  }

  async loginService (requestdata) {
    const { email, password } = requestdata

    const [result] = await dbconn.query('select * from employees where email = ?', [email])
    if (!result.length) {
      return {
        sucess: false,
        status: 400,
        message: 'kindly register first'
      }
    }
    const isvalidpassword = await bcrypt.compare(password, result[0].password)
    if (!isvalidpassword) {
      return {
        sucess: false,
        status: 400,
        message: 'invalid crendtials'
      }
    }
    const payload = {
      name: result[0].name,
      email: result[0].email
    }
    payload.accesstoken = jwt.sign(payload, process.env.SECERETKEY, { expiresIn: '2h' })
    return {
      sucess: true,
      status: 200,
      message: 'login sucessfully',
      data: payload
    }
  }
}
export default new Service()
