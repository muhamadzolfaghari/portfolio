"use client";
import Image from "next/image";
import { describe } from "node:test";
import { useImperativeHandle, useRef } from "react";

// network layer
function post(
  url: string,
  data: File,
  onprogress: (event: ProgressEvent) => void
) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.upload.onprogress = onprogress;

    xhr.onreadystatechange = (event) => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        resolve(xhr);
      }
    };

    const formData = new FormData();
    formData.append("file", data);
    xhr.send(formData);
  });
}

export default function Home() {
  const fileInput = useRef<HTMLInputElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  // functional kiss
  // SOLID
  // DRY
  async function handleClick() {
    // step
    const res = await post(
      "/upload",
      fileInput.current!.files?.[0]!,
      (event) => {
        console.log(event);
      }
    );

    console.log(res);

    // OOP
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <label
        className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100"
        role="uploader"
      >
        <input
          className="hidden"
          id="file-input"
          type="file"
          ref={fileInput}
          accept="*.jpg, *.png"
        />
      </label>
      <div ref={percentageRef} className="color-green"></div>
      <button onClick={handleClick}>upload</button>
    </main>
  );
}
