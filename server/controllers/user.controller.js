const userService = require('../services/user.service');

class UserController{
    
    async registration(req,res){
        try {
            const {email,password,name,role} = req.body
            const user = await userService.registration(name,email,password,role);
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json(error.message)
        }
        
    }

    async login(req,res){
        try {
            const {email,password} = req.body
            const user = await userService.login(email,password);
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async getUser(req,res){
        try {
            const {id} = req.params
            const user = await userService.getUser(id)
            return res.json(user)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async getAllUsers(req,res){
        try {
            const users = await userService.getAllUsers()
            return res.json(users);
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async delete(req,res){
        try {
            const {id} = req.params
            await userService.delete(id)
            return res.json({message:"Пользователь удален."})

        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async update(req,res){
        try {
            const {name,password} = req.body
            const {id} = req.params
            const user = await userService.update(id,name,password)
            return res.json(user)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async check(req,res){
        res.json(userService.check(req.user))
    }
}


module.exports = new UserController();