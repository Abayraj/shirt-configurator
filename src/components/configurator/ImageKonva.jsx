/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import useModelStore from "@/store/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ImageKonva() {
  const stageRef = useRef(null);
  const { setCanvasImage } = useModelStore();

  useEffect(() => {
    if (stageRef.current) {
      const canvasElement = stageRef.current.content.querySelector("canvas");
      setCanvasImage(canvasElement);
    }
  }, [setCanvasImage]);

  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [uploadedImage, setUploadedImage] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const isWidth = isDesktop ? 400 : 220;
  const isheight = isDesktop ? 400 : 200;

  const handleStageClick = (e) => {
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
    setOpen(true);
  };

  const handleImageInput = (e) => {
    const files = e.target.files;
    if (files) {
      const newImages = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new window.Image();
          img.src = event.target.result;
          img.onload = () => {
            const aspectRatio = img.width / img.height;

            let newWidth, newHeight;

            if (img.width > img.height) {
              newWidth = Math.min(img.width, isWidth * 0.8);
              newHeight = newWidth / aspectRatio;
            } else {
              newHeight = Math.min(img.height, isheight * 0.8);
              newWidth = newHeight * aspectRatio;
            }

            newImages.push({
              src: event.target.result,
              width: newWidth,
              height: newHeight,
              x: (isWidth - newWidth) / 2,
              y: (isheight - newHeight) / 2,
              rotation: 0,
            });
            if (newImages.length === files.length) {
              setUploadedImage((prevImages) => [...prevImages, ...newImages]);
            }
          };
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const KonvaImage = ({
    uploadedImage,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
    setImageX,
    setImageY,
    rotation,
    setRotation,
    isSelected,
    onSelect,
    onTransformEnd,
  }) => {
    const [img] = useImage(uploadedImage);
    const imageRef = useRef(null);
    const transformerRef = useRef(null);

    useEffect(() => {
      if (isSelected) {
        transformerRef.current.nodes([imageRef.current]);
        transformerRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);

    return (
      <>
        <Image
          image={img}
          x={imageX}
          y={imageY}
          width={imageWidth}
          height={imageHeight}
          draggable
          ref={imageRef}
          onClick={onSelect}
          onTap={onSelect}
          rotation={rotation}
          onDragEnd={(e) => {
            setImageX(e.target.x());
            setImageY(e.target.y());
          }}
          onTransformEnd={(e) => {
            const node = imageRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            node.scaleX(1);
            node.scaleY(1);

            setImageX(node.x());
            setImageY(node.y());
            setRotation(node.rotation());
            onTransformEnd({
              width: node.width() * scaleX,
              height: node.height() * scaleY,
            });
          }}
        />
        {isSelected && (
          <Transformer
            ref={transformerRef}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 20 || newBox.height < 20) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )}
      </>
    );
  };
  return (
    <div className="block">
      <div className="flex gap-1">
        <button
          className="flex justify-center items-center gap-1 border border-zinc-100 p-1 rounded-md text-sm"
          onClick={handleButtonClick}
        >
          <p className="font-secondary">Load Image</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageInput}
            accept="image/*"
            className="hidden"
          />
        </button>

        <button
          className="flex justify-center items-center gap-1 border border-zinc-100 p-1 rounded-md text-sm"
          onClick={() => setOpen((prev) => !prev)}
        >
          <p className="font-secondary"> {open ? "close" : "open"} </p>
        </button>
      </div>

      <div
        className={`lg:relative lg:pt-2 ${
          open ? "flex" : "hidden"
        } transition-all duration-700 ease-in-out  `}
      >
        <div
          className={`relative bg-slate-950 rounded  guide overflow-clip ${
            isDesktop ? "w-[400px]" : "w-[220px]"
          } ${isDesktop ? "h-[400px]" : "h-[200px]"}`}
        >
          <Stage
            width={isWidth}
            height={isheight}
            ref={stageRef}
            className="absolute top-0 left-0 w-[400px] h-[400px] block   "
            onClick={handleStageClick}
            onTap={handleStageClick}
          >
            <Layer>
              {uploadedImage.map((image, index) => (
                <KonvaImage
                  key={index}
                  uploadedImage={image.src}
                  imageX={image.x}
                  imageY={image.y}
                  imageWidth={image.width}
                  imageHeight={image.height}
                  setImageX={(x) => {
                    const newImages = [...uploadedImage];
                    newImages[index].x = x;
                    setUploadedImage(newImages);
                  }}
                  setImageY={(y) => {
                    const newImages = [...uploadedImage];
                    newImages[index].y = y;
                    setUploadedImage(newImages);
                  }}
                  rotation={image.rotation}
                  setRotation={(rotation) => {
                    const newImages = [...uploadedImage];
                    newImages[index].rotation = rotation;
                    setUploadedImage(newImages);
                  }}
                  isSelected={selectedId === index}
                  onSelect={() => {
                    setSelectedId(index);
                  }}
                  onTransformEnd={({ width, height }) => {
                    const newImages = [...uploadedImage];
                    newImages[index].width = width;
                    newImages[index].height = height;
                    setUploadedImage(newImages);
                  }}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}
