
const tagService = require('../services/tag.service')

class TagController{

    async create(req,res){
        try {
            const {name} = req.body
            const tag = await tagService.create(name)
            return res.json(tag)
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }

    async getAll(req,res){
        try {
            const tags = await tagService.getAll()
            return res.json(tags)
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }

    async delete(req,res){
        try {
            const {id} = req.params
            const message = await tagService.delete(id)
            return res.json({message:message})
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }
}


module.exports = new TagController()