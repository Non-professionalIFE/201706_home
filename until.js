class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log('吃了吗?')
    }
}

class Girl extends Person{
    constructor(name,age){
        super(name,age);
    }
}