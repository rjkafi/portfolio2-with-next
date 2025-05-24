// components/HeroCanvas.jsx
'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Add particles
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
  color: 0xff00cc,
  size: 0.05,
  sizeAttenuation: true,
  transparent: true,
});

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
