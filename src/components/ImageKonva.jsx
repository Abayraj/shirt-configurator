import React from "react";
import Konva from "konva";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import useModelStore from "@/store/useStore";

export default function ImageKonva() {
  const { image, setImage } = useModelStore();

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const stageRef = useRef(null);

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        const img = new window.Image();
        img.src = event.target.result;
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          const newWidth = 150;
          const newHeight = newWidth / aspectRatio;
          setImageWidth(newWidth);
          setImageHeight(newHeight);
          setImageX((300 - newWidth) / 2);
          setImageY((300 - newHeight) / 2);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const KonvaImage = () => {
    const [img] = useImage(uploadedImage);
    return (
      <Image
        image={img}
        x={imageX}
        y={imageY}
        width={imageWidth}
        height={imageHeight}
        alt="sda"
        draggable
        onDragEnd={(e) => {
          setImageX(e.target.x());
          setImageY(e.target.y());
        }}
      />
    );
  };
  return (
    <div>
      <div>
        <button
          className="flex justify-center items-center gap-1 border border-zinc-100 p-1 rounded-md"
          onClick={handleButtonClick}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            focusable="false"
            class=""
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path>
            <path d="m8 11-3 4h11l-4-6-3 4z"></path>
            <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
          </svg>
          <p>Load Image</p>
          <input
            type="file"
            ref={fileInputRef}
            // onChange={handleImageInput}
            accept="image/*"
            className="hidden"
          />
        </button>
      </div>
      <Stage width={300} height={300} ref={stageRef} className="bg-red-500">
        <Layer>
          <KonvaImage />
        </Layer>
      </Stage>
    </div>
  );
}
