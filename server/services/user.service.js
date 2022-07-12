const bcrypt = require('bcrypt');

const {User} = require('../models/models');
const UserDto = require('../dtos/userDto')
const tokenService = require('./token.service')

class UserService{
    
    async registration(name,email,password,role){

        const candidate = await User.findOne({where:{email}})

        if(candidate){
            throw Error("Пользователь уже существует.")
        }

        const hashedPassword = await bcrypt.hash(password,7);

        const user = await User.create({name,email,password:hashedPassword,role})
        
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto});
        
        await tokenService.createToken(tokens.refreshToken,user.id)
        
        return {
            ...tokens
        }
        
    }

    async login(email,password){
        const user = await User.findOne({where:{email}})

        if(!user){
            throw Error("Пользователя не существует.")
        }

        const isMatch = bcrypt.compare(password,user.password);
        if(!isMatch){
            throw Error("Неправильный пароль.")
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.updateToken(tokens.refreshToken,user.id)

        return {
            ...tokens
        };
    }

    async getUser(id){
        
        const user = await User.findByPk(id);
        return user;
    }

    async getAllUsers(){
        const users = await User.findAll()
        return users;
    }

    async delete(id){
        const user = await this.getUser(id)

        if(!user){
            throw Error('Пользователь не найден')
        }

        await user.destroy()
    }

    async update(id,name,password){
        const user = await this.getUser(id)

        if(!user){
            throw Error('Пользователь не найден')
        }
        
        if(!name){
            name = user.name
        }
        if(!password){
            password = user.password
        }

        await user.update({name,password})
        
    }

    check(user){
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto});
        return {
            ...tokens,
            userDto};
    }
}


module.exports = new UserService();