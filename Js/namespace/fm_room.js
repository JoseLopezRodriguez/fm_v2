class Room{

    new_room(name){
        this.name=name;
        this.chores=[]
    }
    add_chore(chore){
        if( typeof this != 'undefined'){
            this.chores.push(chore);
        }else{
            return false;
        } 
    }
    set_chores(chores){
        if( typeof this != 'undefined'){
            this.chores=chores;
        }else{
            return false;
        } 
    }
    

}