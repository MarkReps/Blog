const jwt = require('jsonwebtoken')

const {Token} = require('../models/models')

class TokenService{

     generateTokens(payload){
        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{expiresIn:'1h'})
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{expiresIn:'15d'})

        return{
            accessToken,
            refreshToken
        }
    }

    async createToken(token,UserId){
        const createdToken = await Token.create({token:token,UserId})
    }

    async updateToken(token,UserId){
        
        const tokenInDb = await Token.findOne({where:{
            UserId
        }})

        if(!tokenInDb){
            throw Error('Токен не найден.')
        }

        tokenInDb.token = token
        await tokenInDb.save()
    }

}

module.exports = new TokenService()