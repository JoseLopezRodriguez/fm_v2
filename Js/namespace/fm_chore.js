class Chore{

    new_chore(name, repetition, weight){
        this.name=name;
        this.repetition= repetition;
        this.weight= weight;
    }
    set(chore){
        this.name=chore.name;
        this.repetition= chore.repetition;
        this.weight= chore.weight;
    }
    edit(mod){
        if(typeof this != 'undefined'){
            for(prop in this){
                if(prop===mod.prop)
                    this.prop=mod.value;
            }
        }else{
            return false;
        }
    }
}