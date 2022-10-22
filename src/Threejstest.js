import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

function Mesh(props) {
  const ref = useRef(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta, xrFrame) => (ref.current.rotation.x += 0.01));
  const state = useThree();
  const camera = useThree((state) => state.camera);
  const set = useThree((state) => state.set);
  /*useEffect(() => {
    set({ camera: new THREE.OrthographicCamera() });
  }, []);*/
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(e) => console.log("click")}
      onContextMenu={(e) => console.log("context menu")}
      onDoubleClick={(e) => console.log("double click")}
      onWheel={(e) => console.log("wheel spins")}
      onPointerUp={(e) => console.log("up")}
      onPointerDown={(e) => console.log("down")}
      onPointerOver={(e) => console.log("over")}
      onPointerOut={(e) => console.log("out")}
      onPointerEnter={(e) => console.log("enter")} // see note 1
      onPointerLeave={(e) => console.log("leave")} // see note 1
      onPointerMove={(e) => console.log("move")}
      onPointerMissed={() => console.log("missed")}
      onUpdate={(self) => console.log("props have been updated")}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshNormalMaterial />
    </mesh>
  );
}
function Threejstest() {
  return (
    <div className="Three">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Mesh position={[-5, 0, 0]} />
        <Mesh position={[5, 0, -5]} />
      </Canvas>
    </div>
  );
}

export default Threejstest;
