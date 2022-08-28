const getJwtToken = require('../helpers/getJwtToken')

const cookieToken = (user, req) => {
    const token = getJwtToken(user.id)
    const option = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    user.password = undefined;
    req.status(200).cookie('token', token, option).json({
        success: true,
        token,
        user
    })
}
module.exports = cookieToken;