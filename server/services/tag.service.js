const { Tag } = require("../models/models")


class TagService{

    async create(name){

        let tag = await Tag.findOne({where:{
            name
        }})

        if(tag){
            throw Error("такой тег уже существует.")
        }
        tag = await Tag.create({name})
        return tag;
    }

    async getAll(){
        const tags = await Tag.findAll()
        return tags;
    }

    async getOnebyName(name){

        const tag = await Tag.findOne({where:{name}})

        if(!tag){
            throw Error("такого тега не существует.")
        }

        return tag;
    }

    async delete(id){
        const tag = await Tag.findOne({where:{
            id
        }})

        if(!tag){
            throw Error("Такого тега не существует.")
        }

        await tag.destroy()
        await tag.save()
        return "Тег удален."
    }

}


module.exports = new TagService()