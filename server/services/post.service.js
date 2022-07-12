
const tagService = require('./tag.service');
const groupService = require('./group.service');
const {Post,PostTag, Tag} = require('../models/models');

class PostService{

    async create(name,groupName,tagsNames,text,author_rating,user){

        console.log(name,groupName,tagsNames,text,author_rating)
        tagsNames = tagsNames.split(' ')
        const group = await groupService.getOnebyName(groupName)
        const tags = [];
        if(tagsNames){
                tagsNames.forEach(async (tagName) => {
                const tag = await tagService.getOnebyName(tagName)
                if(!tag){
                    await tagService.create(tagName)
                }
                tags.push(tag)
            })
        }
        const post = await Post.create({name,GroupId:group.id,text,author_rating,UserId:user.id})
        if(tags){
            tags.map((elm)=>{
                PostTag.create({PostId:post.id,TagId:elm.id})
            })
        }
        
        
        return post;
    }

    async update(id,name,groupId,tagsId,text,author_rating){

        const post = await Post.findByPk(id)

        if(!post){
            throw Error('Пост не найден!')
        }

        await post.update({name,group,tags,text,author_rating})
        return post;
    }

    async getAll(groupId){
        
        let posts;
        if(groupId){
            posts = await Post.findAll({where:{
                GroupId:groupId
            },
            include:[{
                model: Tag
                }]
            })
            return posts;
        }
        posts = await Post.findAll({include:[{
            model: Tag
            }]
        })
        return posts;
    }


}



module.exports = new PostService()