const postService = require('../services/post.service')

class PostController{

    async create(req,res){
        try {
            const {name,group,tags,text,author_rating} = req.body
            const user = req.user
            const post = await postService.create(name,group,tags,text,author_rating,user)
            res.json(post)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    async update(req,res){
        try {
            const {id,name,group,tags,text,author_rating} = req.body
            const post = await postService.update(id,name,group,tags,text,author_rating)
            return res.json(post)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    async getAll(req,res){
        try{
            const {groupId} = req.query
            const posts = await postService.getAll(groupId)
            return res.json(posts)
        } catch(error){
            res.status(500).json({message:error.message})
        }
    }
}


module.exports = new PostController()