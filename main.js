// Escena básica con Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometría del portal (toro)
const geometry = new THREE.TorusGeometry(2, 0.6, 30, 200);
const material = new THREE.MeshStandardMaterial({ color: 0x7f00ff, metalness: 0.8, roughness: 0.2 });
const portal = new THREE.Mesh(geometry, material);
scene.add(portal);

// Iluminación
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xff00ff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Posición de cámara
camera.position.z = 5;

// Animación
function animate() {
  requestAnimationFrame(animate);
  portal.rotation.x += 0.005;
  portal.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();