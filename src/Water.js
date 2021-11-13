import { useFrame } from "@react-three/fiber";
import React from "react";
import { Color, ShaderMaterial, Vector2 } from "three";
import { fragmentShader, vertexShader } from "./utils/shader";

const Water = () => {
  let prevTime = 0;

  var timeUniform = {
    iGlobalTime: {
      type: "f",
      value: 0.1,
    },
    iResolution: {
      type: "v2",
      value: new Vector2(),
    },
  };

  timeUniform.iResolution.value.x = window.innerWidth;
  timeUniform.iResolution.value.y = window.innerHeight;

  const material = new ShaderMaterial({
    uniforms: timeUniform,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  useFrame(({ clock }) => {
    const currentTime = clock.getElapsedTime();
    const deltaTime = currentTime - prevTime;
    prevTime = currentTime;
    timeUniform.iGlobalTime.value += deltaTime;
  });

  return (
    <group>
      <mesh material={material}>
        <planeBufferGeometry
          args={[window.innerWidth, window.innerHeight, 40]}
        />
      </mesh>
      <mesh>
        <sphereBufferGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color={new Color(0xffff00)} />
      </mesh>
    </group>
  );
};

export default Water;
