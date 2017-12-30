varying vec2 vUv; // vUv is a 2D vector that contains the UV coordinates of the pixel being processed. UV coords go from 0 to 1. This value is always called vUv and is passed in automatically by three.js
uniform vec3 color;
uniform float time;

void main() {
    // Use sin(time), which curves between 0 and 1 over time,
    // to determine the mix of two colors:
    //    (a) Dynamic color where 'R' and 'B' channels come
    //        from a modulus of the UV coordinates.
    //    (b) Base color.
    //
    // The color itself is a vec4 containing RGBA values 0-1.
    gl_FragColor = mix(
        vec4(mod(vUv, 0.05) * 20.0, 1.0, 1.0),
        vec4(color, 1.0),
        sin(time)
    );
}