import React, { useEffect, useState } from "react";
import { handleGetprofile } from "../../services/auth.service";
import Cookies from "js-cookie";
import UploadImage from "./UploadImage";
const Test = () => {
  const [open, setOpen] = useState(false);
  // const token = Cookies.get("accessToken");
  // const [data, setData] = useState();

  // const [files, setFiles] = useState([]);
  // useEffect(() => {
  //   try {
  //     const fetch = async () => {
  //       const res = await handleGetprofile(token);
  //       setData(res?.data?.data);
  //     };
  //     fetch();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [data]);
  // const handleSubmitProfile = async (e) => {
  //   e.preventDefault();
  //   if (files?.length) {
  //     const formData = new FormData();
  //     files.forEach((file) => formData.append("file", file));
  //     const res = await fetch(`http://apif8.somee.com/user/update`, {
  //       method: "POST",
  //       body: formData,
  //     }).then((res) => res.json());
  //     if (res.status === 200) {
  //       picture = res.metadata.url;
  //     }
  //   }
  //   const payload = {
  //     name,
  //     picture,
  //     desc,
  //     userId: userInfo.id,
  //   };
  //   const resProfile = await dispatch(requestUpdateProfile(payload));
  //   const dataProfile = unwrapResult(resProfile);
  //   setLoading(false);
  //   if (dataProfile.status === 200) {
  //     toast.success("Update profile success!");
  //   }
  // };
  return (
    // <form
    //   action=""
    //   // onSubmit={handleSubmitProfile}
    //   className="flex items-start gap-10"
    // >
    //   <UploadImage userInfo={data} onFiles={setFiles} files={files} />
    // </form>
    <>
      {/* <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal> */}
      <h1>hi</h1>
    </>
  );
};

export default Test;
