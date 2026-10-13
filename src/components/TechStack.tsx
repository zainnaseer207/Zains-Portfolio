import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/Python.webp",
  "/images/javascript.webp",
  "/images/mysql.webp",
  "/images/c++.webp",
  "/images/n8n.webp",
  "/images/html.webp",
  "/images/sqlite.webp",
  "/images/django.webp",
  "/images/office.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));
const visibleTextures = textures.slice(0, 6);

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
  isMobile: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
  isMobile,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={
        isMobile
          ? [r(3.5), r(4) - 7, r(3) - 4]
          : [r(20), r(20) - 25, r(20) - 10]
      }
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".techstack");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "100px 0px" }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);
  // TechStack is lazy-loaded, so it mounts AFTER Work's pin was measured.
  // Re-measure so the pinned Work section releases before this section starts.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  const materials = useMemo(() => {
    return visibleTextures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  return (
    <section className="techstack" aria-labelledby="techstack-title">
      <h2 id="techstack-title">My Tech Stack</h2>
      {isMobile && (
        <p className="techstack-hint">Touch and drag to move the balls</p>
      )}

      <Canvas
        shadows={!isMobile}
        dpr={isMobile ? 1 : [1, 2]}
        frameloop={isActive ? "always" : "demand"}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
        style={{ position: "absolute", inset: 0 }}
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow={!isMobile}
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres
            .slice(0, isMobile ? 12 : spheres.length)
            .map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={materials[i % materials.length]}
                isActive={isActive}
                isMobile={isMobile}
              />
            ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        {!isMobile && (
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        )}
      </Canvas>
    </section>
  );
};

export default TechStack;