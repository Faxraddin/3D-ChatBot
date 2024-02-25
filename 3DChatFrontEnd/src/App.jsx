import React from 'react';
import './App.css';
import { Loader } from '@react-three/drei';
import { Leva } from 'leva';
import UI from './components/UI';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

function App() {

  return (
    <>
      <Loader/>
      <Leva hidden/>

      <UI/>
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
