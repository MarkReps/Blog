import {makeAutoObservable} from 'mobx';

import UserStore from './userStore';
import PostStore from './postStore';

export default class RootStore {
    
    
    
    constructor(){
        this.userStore = new UserStore()
        this.postStore = new PostStore()
        
        this._isLoading = true;
        makeAutoObservable(this)
    }

    get isLoading(){
        return this._isLoading;
    }

    set isLoading(bool){
        this._isLoading = bool;
    }
}