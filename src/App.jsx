import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";
import { useState,useRef } from "react";
// import styles from './index.css';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const experienceMounted = useRef(false);

  const setExperienceMounted = () => {
    experienceMounted.current = true;
    setIsLoading(false);
  };

  return (
    <>
    <Leva hidden />
    {isLoading && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <p>Loading 3D Components...</p>
        </div>     
      )}
      {!isLoading && <Overlay />}
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience setMounted={setExperienceMounted} />
      </Canvas>
    </>
  );
}

export default App;
