/**
 * Created by SONY on 2016/8/1.
 */
import person from "/.teacher";
export default class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = this.klass;
    }
    introduce(){
        if(this.klass !== null){
            return super.introduce() + "I am a Teacher. I teach Class"+ this.klass+".";
        }else{
            return super.introduce() + "I am a Teacher. I teach No Class.";
        }

    }
}
