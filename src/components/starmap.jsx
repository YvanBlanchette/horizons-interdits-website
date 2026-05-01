import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SpriteText from "three-spritetext";

import starsData from "../data/nearby-stars.json";

// 2.5D controls: on affiche un disque lisible
const SCALE = 12; // 1 ly -> 12 unités (ajuste selon ton goût)
const HEIGHT_COMPRESS = 0.12; // compresse l'épaisseur du disque

export default function StarMap3D() {
	const mountRef = useRef(null);

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;

		// Scene
		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#05050a");

		// Camera
		const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 50000);
		camera.position.set(0, 650, 950);

		// Renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(mount.clientWidth, mount.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		mount.appendChild(renderer.domElement);

		// Controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.06;
		controls.target.set(0, 0, 0);
		controls.minPolarAngle = 0.25;
		controls.maxPolarAngle = 1.05;

		// Light
		scene.add(new THREE.AmbientLight(0xffffff, 0.35));
		const dir = new THREE.DirectionalLight(0xffffff, 0.8);
		dir.position.set(300, 900, 500);
		scene.add(dir);

		// Sol
		const sol = new THREE.Mesh(
			new THREE.SphereGeometry(6, 32, 32),
			new THREE.MeshStandardMaterial({
				emissive: new THREE.Color("#ffd27d"),
				emissiveIntensity: 1.3,
				color: new THREE.Color("#ffcc66"),
			}),
		);
		scene.add(sol);

		const solLabel = new SpriteText("Sol", 10, "#ffffff");
		solLabel.position.set(0, 16, 0);
		scene.add(solLabel);

		// Rings (distance)
		const ringGroup = new THREE.Group();
		scene.add(ringGroup);

		function addRing(radiusLy) {
			const r = radiusLy * SCALE;
			const segments = 256;
			const pts = [];
			for (let i = 0; i <= segments; i++) {
				const a = (i / segments) * Math.PI * 2;
				pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
			}
			const geo = new THREE.BufferGeometry().setFromPoints(pts);
			const mat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.18 });
			ringGroup.add(new THREE.Line(geo, mat));

			const lbl = new SpriteText(`${radiusLy} ly`, 7, "rgba(255,255,255,0.65)");
			lbl.position.set(r, 0, 0);
			ringGroup.add(lbl);
		}

		[5, 10, 20, 30, 40, 50].forEach(addRing);

		// Background stars (ambiance)
		const bgCount = 5000;
		const bgPos = new Float32Array(bgCount * 3);
		const rand = (min, max) => min + Math.random() * (max - min);
		for (let i = 0; i < bgCount; i++) {
			const i3 = i * 3;
			bgPos[i3] = rand(-20000, 20000);
			bgPos[i3 + 1] = rand(-20000, 20000);
			bgPos[i3 + 2] = rand(-20000, 20000);
		}
		const bgGeo = new THREE.BufferGeometry();
		bgGeo.setAttribute("position", new THREE.BufferAttribute(bgPos, 3));
		const bgMat = new THREE.PointsMaterial({ size: 1, sizeAttenuation: true });
		scene.add(new THREE.Points(bgGeo, bgMat));

		// Stars group
		const starGroup = new THREE.Group();
		scene.add(starGroup);

		// Simple “colony list” (tu vas remplacer ça par un fichier séparé)
		const colonies = new Set(["Sol", "Proxima Centauri"]);

		// Create stars
		starsData.forEach((s) => {
			// s.x,y,z sont en années-lumière (selon ton script)
			const px = s.x * SCALE;
			const pz = s.z * SCALE;
			const py = s.y * SCALE * HEIGHT_COMPRESS;

			const isColony = colonies.has(s.name) || s.colony;

			const star = new THREE.Mesh(
				new THREE.SphereGeometry(1.25, 16, 16),
				new THREE.MeshStandardMaterial({
					color: isColony ? new THREE.Color("#b9ffd3") : new THREE.Color("#cfd3ff"),
					emissive: isColony ? new THREE.Color("#2bff7a") : new THREE.Color("#8890ff"),
					emissiveIntensity: isColony ? 0.9 : 0.25,
				}),
			);

			star.position.set(px, py, pz);
			star.userData = { ...s, colony: isColony };
			starGroup.add(star);

			// Labels seulement pour proches, sinon c’est l’enfer visuel
			if (s.distLy <= 15) {
				const label = new SpriteText(s.name, 7, "rgba(255,255,255,0.85)");
				label.position.set(px, py + 7, pz);
				starGroup.add(label);
			}

			// Halo vert colonies
			if (isColony) {
				const halo = new THREE.Mesh(
					new THREE.SphereGeometry(3.2, 16, 16),
					new THREE.MeshBasicMaterial({
						color: "#2bff7a",
						transparent: true,
						opacity: 0.18,
					}),
				);
				halo.position.set(px, py, pz);
				halo.userData = { type: "halo" };
				starGroup.add(halo);
			}
		});

		// Hover tooltip
		const raycaster = new THREE.Raycaster();
		const mouse = new THREE.Vector2();
		const tooltip = document.createElement("div");
		tooltip.className = "pointer-events-none fixed z-50 rounded-lg border border-white/15 bg-black/80 px-3 py-2 text-xs text-white shadow-xl";
		tooltip.style.display = "none";
		document.body.appendChild(tooltip);

		function onPointerMove(e) {
			const rect = renderer.domElement.getBoundingClientRect();
			mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

			raycaster.setFromCamera(mouse, camera);

			const hits = raycaster.intersectObjects(starGroup.children, false).filter((h) => h.object.userData?.name);

			if (!hits.length) {
				tooltip.style.display = "none";
				return;
			}

			const d = hits[0].object.userData;
			tooltip.style.display = "block";
			tooltip.style.left = `${e.clientX + 12}px`;
			tooltip.style.top = `${e.clientY + 12}px`;
			tooltip.innerHTML = `
        <div class="font-semibold">${d.name}</div>
        <div class="opacity-80">${Number(d.distLy).toFixed(2)} ly</div>
        <div class="opacity-80">Colonie: ${d.colony ? "Oui" : "Non"}</div>
        ${d.spect ? `<div class="opacity-80">Spectre: ${d.spect}</div>` : ""}
      `;
		}

		renderer.domElement.addEventListener("pointermove", onPointerMove);

		// Resize
		function onResize() {
			camera.aspect = mount.clientWidth / mount.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(mount.clientWidth, mount.clientHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		}
		window.addEventListener("resize", onResize);

		// Animate
		const clock = new THREE.Clock();
		let raf = 0;

		function animate() {
			raf = requestAnimationFrame(animate);
			const t = clock.getElapsedTime();

			// Pulse halos
			starGroup.children.forEach((o) => {
				if (o.userData?.type === "halo") {
					const s = 1 + 0.08 * Math.sin(t * 2.2);
					o.scale.set(s, s, s);
				}
			});

			controls.update();
			renderer.render(scene, camera);
		}
		animate();

		// Cleanup
		return () => {
			cancelAnimationFrame(raf);
			renderer.domElement.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("resize", onResize);
			controls.dispose();
			renderer.dispose();
			tooltip.remove();
			mount.removeChild(renderer.domElement);
		};
	}, []);

	return (
		<div className="w-full h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-black">
			<div
				ref={mountRef}
				className="w-full h-full"
			/>
		</div>
	);
}
