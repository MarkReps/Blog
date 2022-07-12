const {DataTypes} = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true},
    name:{
        type:DataTypes.STRING,
        require:true
    },
    email:{
        type:DataTypes.STRING,
        require:true,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        require:true
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"USER"
    }
})

const Token = sequelize.define('Token',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    token:{type:DataTypes.STRING,unique:true,require:true}
})

const Post = sequelize.define('Post',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,require:true},
    text:{type:DataTypes.TEXT,require:true},
    author_rating:{type:DataTypes.INTEGER,require:true,defaultValue:0},
})

const Tag = sequelize.define('Tag',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,require:true,unique:true}
})

const Group = sequelize.define('Group',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,require:true,unique:true}
})

const PostTag = sequelize.define('PostTag',{
    TagId:{
        type: DataTypes.INTEGER,
        references:{
            model: Tag,
            key:'id'
        }
    },
    PostId:{
        type: DataTypes.INTEGER,
        references:{
            model: Post,
            key:'id'
        }
    }
})


User.hasOne(Token)
Token.belongsTo(User)

User.hasMany(Post)
Post.belongsTo(User)

Group.hasMany(Post)
Post.belongsTo(Group)

Post.belongsToMany(Tag,{through:PostTag})
Tag.belongsToMany(Post,{through:PostTag})


module.exports ={
    User,
    Token,
    Post,
    Group,
    Tag,
    PostTag
}