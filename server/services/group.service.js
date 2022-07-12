
const {Group} = require('../models/models')

class GroupService{

    async create(name){

        const candidate = await Group.findOne({where:{name}})
        if(candidate){
            throw Error("Такая группа уже есть.")
        }

        const group = await Group.create({name})
        
        return group;
    }

    async getAll(){

        const group = await Group.findAll()
        return group;
    }

    async getOnebyName(name){

        const group = await Group.findOne({where:{name}})
        if(!group){
            throw Error("Такой группы не существует.")
        }
        return group;
    }

    async delete(id){

        const group = await Group.findOne({where:{
            id
        }})
        await group.destroy()
        await group.save()
        return 'Группа удалена'
    }
    
}


module.exports = new GroupService()