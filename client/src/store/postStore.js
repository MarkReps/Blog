import {makeAutoObservable} from 'mobx';


export default class PostStore{

    constructor(){
        this._groups = []
        this._tags = []
        this._selectedGroup = []
        this._posts = []
        makeAutoObservable(this)
    }

    set Groups(groups){
        this._groups = groups;
    }

    set Tags(tags){
        this._tags = tags;
    }

    set SelectedGroup(group){
        this._selectedGroup = group;
    }

    set Posts(posts){
        this._posts = posts;
    }

    get Groups(){
        return this._groups;
    }

    get Tags(){
        return this._tags;
    }

    get SelectedGroup(){
        return this._selectedGroup;
    }

    get Posts(){
        return this._posts;
    }
}