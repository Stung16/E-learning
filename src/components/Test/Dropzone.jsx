import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";
const baseStyle = {
  height: 200,
  with: 547,
};

function Dropzone({ files, onFiles }) {
  const [rejected, setRejected] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(""); //test
  const [imageAdded, setImageAdded] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      onFiles(() => [
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
      setRejected([]);
    }
    const file = acceptedFiles[0]; // Lấy ảnh đầu tiên khi chọn ảnh
    setBackgroundImage(URL.createObjectURL(file));
    setImageAdded(true);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxSize: 1024 * 1000 * 5,
    multiple: false,
    onDrop,
  });

  //set bg
  const rootPropsWithStyle = getRootProps({
    className: "post_img",
    style: { backgroundImage: `url(${backgroundImage})` },
  });

  const thumbs = files.map((file) => (
    <div key={file.name} style={{ backgroundImage: `url(${file.preview})` }} />
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="post_img_main">
      {/* <div {...getRootProps({ style })}> */}
      <div {...rootPropsWithStyle}>
        <input {...getInputProps()} />
        <div className="h-[162px] ">
          <p style={{ opacity: imageAdded ? 0 : 1 }}>
            Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn hút hơn
            với độc giả.
          </p>
          <span
            className="text-[#f05123] mt-3"
            style={{ opacity: imageAdded ? 0 : 1 }}
          >
            Kéo thả ảnh vào đây, hoặc bấm để chọn ảnh
          </span>
        </div>
      </div>
      <div>
        <p className="text-danger">
          {rejected.length ? "Cannot upload photos larger than 5MB ":""}
        </p>
      </div>
      <aside
        className={`${rejected.length ? "border-danger" : "border-blue1"}`}
      >
        {thumbs}
      </aside>
    </section>
  );
}

export default Dropzone;
