import { Behaviour } from "@needle-tools/engine";





export class MyScript extends Behaviour {

    //@type float
    speed = 0.01;

    start(){
        console.log(this.speed);
    }

    update() {
        this.gameObject.rotateY(this.speed);
    }

} 