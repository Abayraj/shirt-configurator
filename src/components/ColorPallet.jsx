import React, { useEffect, useRef } from "react";
import iro from "@jaames/iro";
import useModelStore from "@/store/useStore";

export default function ColorPallet() {
  const { color, setColor } = useModelStore();
  const colorPickerRef = useRef(null);
  const colorPickerInstanceRef = useRef(null);

  useEffect(() => {
    if (!colorPickerInstanceRef.current) {
      colorPickerInstanceRef.current = new iro.ColorPicker(
        colorPickerRef.current,
        {
          width: 100,
          color: color || "#ffffff",
        }
      );

      colorPickerInstanceRef.current.on("color:change", (color) => {
        setColor(color.hexString);
      });
    } else {
      colorPickerInstanceRef.current.on("color:change", (color) => {
        setColor(color.hexString);
      });
    }

    return () => {
      if (colorPickerInstanceRef.current) {
        colorPickerInstanceRef.current.off("color:change");
      }
    };
  }, [color, setColor]);

  return (
    <div className="container bg-green-500 relative">
      <div ref={colorPickerRef} className="inline-block"></div>
    </div>
  );
}
