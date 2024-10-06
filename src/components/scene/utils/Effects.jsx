import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={1}
        intensity={0.1}
      />
    </EffectComposer>
  );
}
