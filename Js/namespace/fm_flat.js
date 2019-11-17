class Flat{

    new_flat(name,direction){
        // Variables iniciales necesarias
        this.name=name; //string
        this.direction= direction; //string
        this.people=[];
        this.chores=[];
        this.rooms=[];
    }
    add_user(user){
        if(typeof this !== 'undefined'){
            this.configuration.people.push(user);
        }else{
            return false;
        }
    }
    add_room(room){
        if(typeof this !== 'undefined'){
            this.configuration.rooms.push(room);
        }else{
            return false;
        }
    }
    set_flat(flat){
        this.token=flat.token;
        this.name=flat.name; 
        this.direction=flat.direction; 
        this.people=flat.people;
        this.chores=flat.chores;
        this.rooms=flat.direction;
    }
    
}