import { Behaviour } from "@needle-tools/engine";





export class MyScript extends Behaviour {


    update(){
        this.gameObject.rotateY(0.01);
    }

}