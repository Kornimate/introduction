// HackerLogo3D.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Avatar = ({ imageSrc = "/assets/avatar.png" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05060a);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00ffff, 1.0);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x00ffcc, 0.8, 15);
    rimLight.position.set(-4, 0, 3);
    scene.add(rimLight);

    // Logo plate (backing)
    const plateGeometry = new THREE.BoxGeometry(4, 4, 0.4);
    const plateMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b1220,
      metalness: 0.7,
      roughness: 0.35
    });
    const plateMesh = new THREE.Mesh(plateGeometry, plateMaterial);
    scene.add(plateMesh);

    // Glowing rim effect (slightly bigger wireframe box)
    const rimGeometry = new THREE.BoxGeometry(4.15, 4.15, 0.5);
    const rimMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const rimMesh = new THREE.Mesh(rimGeometry, rimMaterial);
    scene.add(rimMesh);

    // Logo plane with texture (your hacker icon)
    const logoGeometry = new THREE.PlaneGeometry(3, 3);
    const textureLoader = new THREE.TextureLoader();

    const logoMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load(imageSrc),
      transparent: true,
      metalness: 0.3,
      roughness: 0.6
    });

    const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
    logoMesh.position.z = 0.25; // float slightly above the plate
    scene.add(logoMesh);

    // Slight blue glow behind logo
    const glowGeometry = new THREE.PlaneGeometry(3.2, 3.2);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.18
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.position.z = 0.21;
    scene.add(glowMesh);

    // Animation
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      plateMesh.rotation.y = 0.4 * Math.sin(t * 0.5);
      plateMesh.rotation.x = 0.25 * Math.cos(t * 0.4);

      logoMesh.rotation.copy(plateMesh.rotation);
      glowMesh.rotation.copy(plateMesh.rotation);
      rimMesh.rotation.copy(plateMesh.rotation);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const onResize = () => {
      if (!mount) return;
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);

      plateGeometry.dispose();
      plateMaterial.dispose();
      rimGeometry.dispose();
      rimMaterial.dispose();
      logoGeometry.dispose();
      logoMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Avatar;
