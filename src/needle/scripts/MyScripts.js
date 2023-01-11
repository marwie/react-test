import { Behaviour } from "@needle-tools/engine";

export class CameraController extends Behaviour {
    update() {
        const active = CameraTarget.activeTarget;
        if (active) {
            const mainCamera = this.context.mainCameraComponent;
            const target = active.gameObject.position;
            const t = this.context.time.deltaTime / .2;
            mainCamera.gameObject.position.lerp(target, t);
            mainCamera.gameObject.quaternion.slerp(active.gameObject.quaternion, t);
        }
    }
}
export class CameraTarget extends Behaviour {

    static activeTarget = null;
    static targets = [];

    static setActive(id) {
        for(const target of CameraTarget.targets) {
            if (target.id === id) {
                console.log("Setting active target", target)
                CameraTarget.activeTarget = target;
                return;
            }
        }
    }

    //@type int
    id;

    awake() {
        CameraTarget.targets.push(this);
    }
}