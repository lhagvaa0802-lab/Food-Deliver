"use client";
import { Dispatch, SetStateAction, useState } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

type ImageUploadProps = {
  setImage: Dispatch<SetStateAction<string>>;
};

export function ImageUplaod({ setImage }: ImageUploadProps) {
  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info === "object") {
      setImage(result.info.secure_url);
    }
  };

  return (
    <CldUploadWidget uploadPreset="food-delivery" onSuccess={handleSuccess}>
      {({ open }) => <button onClick={() => open()}>Upload Image</button>}
    </CldUploadWidget>
  );
}
