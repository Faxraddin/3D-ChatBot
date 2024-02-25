import {
    CameraControls,
    ContactShadows,
    Environment,
    Text,
  } from "@react-three/drei";
  import { Suspense, useEffect, useRef, useState,React } from "react";
  import Avatar from "./Avatar";
  import useChat from "../hooks/useChat";
  
  const Dots = (props) => {
    const { loading } = useChat();
    const [loadingText, setLoadingText] = useState("");
    useEffect(() => {
      if (loading) {
        const interval = setInterval(() => {
          setLoadingText((loadingText) => {
            if (loadingText.length > 2) {
              return ".";
            }
            return loadingText + ".";
          });
        }, 800);
        return () => clearInterval(interval);
      } else {
        setLoadingText("");
      }
    }, [loading]);
    if (!loading) return null;
    return (
      <group {...props}>
        <Text fontSize={0.14} anchorX={"left"} anchorY={"bottom"}>
          {loadingText}
          <meshBasicMaterial attach="material" color="black" />
        </Text>
      </group>
    );
  };
  
  export default function Experience () {
    const cameraControls = useRef();
    const { cameraZoomed } = useChat();
  
    useEffect(() => {
      cameraControls.current.setLookAt(0, 2, 5, 0, 1.5, 0);
    }, []);
  
    useEffect(() => {
      if (cameraZoomed) {
        cameraControls.current.setLookAt(0, 1.5, 1.5, 0, 1.5, 0, true);
      } else {
        cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
      }
    }, [cameraZoomed]);
    return (
      <>
        <CameraControls ref={cameraControls} />
        <Environment preset="sunset" />
        <Suspense>
          <Dots position-y={1.75} position-x={-0.02} />
        </Suspense>
        <Avatar />
        <ContactShadows opacity={0.7} />
      </>
    );
  };