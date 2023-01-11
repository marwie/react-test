import { engine } from "@needle-tools/engine/engine/engine";
import "./register_types"
import { scripts } from "./scripts";
import * as THREE from 'three';

// BUILD SCENE 	(=^･ｪ･^=))ﾉ彡☆
const loadScene = async function(context, opts)
{
	context.hash = "1673432376836";

	const scene = context.scene;
	let scriptsList = context.new_scripts;
	
	const sceneRoot_1597275519 = await engine.loadSync(context, "public/sceneRoot.glb?v=1673432376836", null, false, prog => opts?.progress?.call(opts, {name: "sceneRoot.glb", progress: prog, index: 0, count: 1}));
	if(sceneRoot_1597275519)
	{
		scene.add(sceneRoot_1597275519.scene);
	}
	
	
	// RESOLVE REFERENCES ※\(^o^)/※
	
	// point to global scripts array now
	scriptsList = context.scripts;
}
engine.build_scene_functions["loadScene"] = loadScene;

console.log("Made\ with\ ♥\ by\ 🌵\ needle\ -\ https://needle\.tools\ —\ Version\ 2\.58\.1-pre");
