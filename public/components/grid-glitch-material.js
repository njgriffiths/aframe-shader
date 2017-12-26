const glsl = require('glslify');
const vertexShader = require('../shaders/vertex.vs');
const fragmentShader = require('../shaders/fragment.fs');

AFRAME.registerComponent('grid-glitch-material', {
    schema: {
        color: {
            type: 'color'
        }
    },
    /**
       * Creates a new THREE.ShaderMaterial using the two shaders defined
       * in vertex.glsl and fragment.glsl.
    */
    init: function() {
        const data = this.data;

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 },
                color: { value: new THREE.Color(data.color) }
            },
            vertexShader,
            fragmentShader
        });

        this.applyToMesh();
        this.el.addEventListener('model-loaded', () => this.applyToMesh());
    },
    // apply ShaderMaterial to current entity
    applyToMesh: function() {
        const mesh = this.el.getObject3D('mesh');

        if (mesh) {
            mesh.material = this.material;
        }
    },
    // update the 'time' uniform in the shaders on each tick
    tick: function(time, delta) {
        this.material.uniforms.time.value = time / 1000;
    },
    // update the ShaderMaterial when component data changes
    update: function() {
        this.material.uniforms.color.value.set(this.data.color);
    }
});

