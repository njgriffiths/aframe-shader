varying vec2 vUv;

void main() {
    vUv = uv;
    // projection matrix = projection for the scene including FOV
    // modelViewMatrix = camera position and orientation in three.js scene
    // gl_Position is applied to every vertex in the object
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}