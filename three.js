const scene = new THREE.Scene();

// The cube will have a different color on each side.
const materials = [
  new THREE.MeshBasicMaterial({color: 0xff0000}),
  new THREE.MeshBasicMaterial({color: 0x0000ff}),
  new THREE.MeshBasicMaterial({color: 0x00ff00}),
  new THREE.MeshBasicMaterial({color: 0xff00ff}),
  new THREE.MeshBasicMaterial({color: 0x00ffff}),
  new THREE.MeshBasicMaterial({color: 0xffff00})
];

// Create the cube and add it to the demo scene.
const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(0.2, 0.2, 0.2), materials);
cube.position.set(1, 1, 1);
scene.add(cube);

// Set up the WebGLRenderer, which handles rendering to the session's base layer.
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  preserveDrawingBuffer: true,
  canvas: canvas,
  context: gl
});
renderer.autoClear = false;

// The API directly updates the camera matrices.
// Disable matrix auto updates so three.js doesn't attempt
// to handle the matrices independently.
const camera = new THREE.PerspectiveCamera();
camera.matrixAutoUpdate = false;
