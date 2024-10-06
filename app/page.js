'use client'
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import DetailCard from '@/components/DetailCard'
const celestialObjects = [
  { name: 'Sun', type: 'star', color: 0xffcc00, radius: 13, orbitRadius: 1, textureUrl: '/sun.jpeg' },
  { name: 'Mercury', type: 'planet', color: 0x8c7c6e, radius: 0.78, orbitRadius: 20, textureUrl: '/m.jpeg' },
  { name: 'Venus', type: 'planet', color: 0xffd085, radius: 0.95, orbitRadius: 30, textureUrl: '/venus.jpeg' },
  { name: 'Earth', type: 'planet', color: 0x2b82c9, radius: 1, orbitRadius: 40, textureUrl: '/earth.jpg' },
  { name: 'Mars', type: 'planet', color: 0xd14e3a, radius: 1.53, orbitRadius: 50, textureUrl: '/mars.png' },
  { name: 'Jupiter', type: 'planet', color: 0xe3a857, radius: 5.2, orbitRadius: 70, textureUrl: '/Jupiter.jpg' },
  { name: 'Saturn', type: 'planet', color: 0xf4d587, radius: 5.45, orbitRadius: 100, textureUrl: '/sturn.jpeg' },
  { name: 'Uranus', type: 'planet', color: 0xb3e5e1, radius: 4, orbitRadius: 130, textureUrl: '/mars.png' },
  { name: 'Neptune', type: 'planet', color: 0x3d5ef3, radius: 3.88, orbitRadius: 160, textureUrl: '/Jupiter.jpg' },
  { name: 'Pluto', type: 'dwarf planet', color: 0xcac3b5, radius: 0.88, orbitRadius: 190, textureUrl: '/venus.jpeg' },
  { name: 'Halley\'s Comet', type: 'comet', color: 0xffffff, radius: 0.91, orbitRadius: 220, textureUrl: '/mars.png' },
  { name: 'Ceres', type: 'asteroid', color: 0x999999, radius: 0.77, orbitRadius: 60, textureUrl: '/mars.png' },
  { name: 'Bennu', type: 'NEA', color: 0x666666, radius: 0.75, orbitRadius: 45, textureUrl: '/Jupiter.jpg' },
  { name: '99942 Apophis', type: 'PHA', color: 0xff0000, radius: 0.66, orbitRadius: 55, textureUrl: '/Jupiter.jpg' },
];



export default function InteractiveOrrery() {
  const canvasRef = useRef(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add starry background
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);

    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Add celestial objects
    const textureLoader = new THREE.TextureLoader();
    const objectMeshes = celestialObjects.map(obj => {
      const geometry = new THREE.SphereGeometry(obj.radius, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: obj.color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = obj.orbitRadius;
      scene.add(mesh);

      // Load texture
      textureLoader.load(
        obj.textureUrl,
        (texture) => {
          mesh.material.map = texture;
          mesh.material.needsUpdate = true;
        },
        undefined,
        (err) => {
          console.error(`Error loading texture for ${obj.name}:`, err);
          setError(`Failed to load texture for ${obj.name}. Using color instead.`);
        }
      );
      
      return mesh;
    });

    // Add orbit lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x444444 });
    celestialObjects.forEach((obj) => {
      if (obj.orbitRadius > 0) {
        const orbitGeometry = new THREE.RingGeometry(obj.orbitRadius - 0.1, obj.orbitRadius + 0.1, 64);
        const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x444444, side: THREE.DoubleSide });
        const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbitMesh.rotation.x = Math.PI / 2;
        scene.add(orbitMesh);
      }
    });

    camera.position.z = 250;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseClick(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(objectMeshes);

      if (intersects.length > 0) {
        const clickedObject = celestialObjects[objectMeshes.indexOf(intersects[0].object)];
        setSelectedObject(clickedObject);
      } else {
        setSelectedObject(null);
      }
    }

    window.addEventListener('click', onMouseClick);

    function animate() {
      requestAnimationFrame(animate);
      
      objectMeshes.forEach((mesh, index) => {
        const obj = celestialObjects[index];
    
        // Check if the object is the Sun
        if (obj.name !== 'Sun') {
          // Apply rotation to all objects except the Sun
          mesh.position.x = obj.orbitRadius * Math.cos(Date.now() * 0.001 / obj.orbitRadius);
          mesh.position.z = obj.orbitRadius * Math.sin(Date.now() * 0.001 / obj.orbitRadius);
        }
      });
    
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener('click', onMouseClick);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      
      {selectedObject && (
        <DetailCard 
          object={selectedObject} 
          onClose={() => setSelectedObject(null)}
        />
      )}
    </div>
  );
}