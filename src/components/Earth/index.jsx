import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import EarthDayMap from "../.././assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../.././assets/textures/8k_earth_normal_map.jpeg";
import EarthSpecularMap from "../.././assets/textures/8k_earth_specular_map.jpeg";
import EarthCloudsMap from "../.././assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        color="#ffffff"
        position={[3, 0, 9]}
        intensity={3} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true} />
      <mesh ref={cloudsRef} position={[0, 0, 1]}>
        <sphereGeometry args={[2.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 1]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.6} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4} />
      </mesh>
    </>
  )
}

export default Earth;