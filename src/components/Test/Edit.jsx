import React, {useState} from "react";
import "./Edit.css";
import Dropzone from '../Test/Dropzone'
import {Checkbox} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
// const { updateShow } = courseSlice.actions;

export const Edit = () => {
  // const isShow = useSelector((state) => state.courseData.isShow);
  // const dispatch = useDispatch();
  const [hide, setHide] = useState(false);

  return (
    <div 
    className={`editPost_main ${!hide && "hidden"} `}>
    <div className="editPost_wrapper bg-[#fff]">
      <div className="editPost_close text-[#0000008a] hover:text-[#333] cursor-pointer text-[36px] pt-3 px-6 pb-6 fixed right-[8px] top-0 z-[999] "
      
      >
        ×
      </div>
      <div className="editPost_content m-auto flex flex-col overflow-hidden overflow-y-auto py-[145px] px-8 relative w-[100%] z-[1]">
        <section className="editPost_grid w-[100%] max-w-[1224px] my-0 mx-auto">
          <section className="editPost_row min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
            <section className="contentPost_left min-[1113px]:w-[50%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
              <div className="PublishPreview_left pr-7 leading-[26px]">
                <h3 className="text-[16px] text-[#333] ">Xem trước</h3>
                <Dropzone />
                {/* <div className="PublishPreview_img bg-[#fafafa] bg-[50%] bg-cover text-[#0000008a] text-[14px] h-[200px] mt-4 outline-none p-6 relative text-center">
                    <p>
                    Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn hút hơn với độc giả.
                    </p>
                    <span className="text-[#f05123] mt-3">
                    Kéo thả ảnh vào đây, hoặc bấm để chọn ảnh
                    </span>
                </div> */}
                {/* Tiêu đề khi xuất bản */}
                <div className="PublishPreview_input text-[20px] font-semibold">Đây là tiêu đề</div>
                {/* Mô tả khi xuất bản */}
                <div className="PublishPreview_input text-[14px]">Đây là mô tả</div>
                <p className="text-[#0000008a] text-[14px] mt-6">
                    <strong>Lưu ý: </strong>
                    Chỉnh sửa tại đây sẽ thay đổi cách bài viết được hiển thị tại trang chủ, tin nổi bật - Chứ không ảnh hưởng tới nội dung bài viết của bạn.
                </p>
              </div>
            </section>
            
            <section className="contentPost_right min-[1113px]:w-[50%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
                <div className="PublishPreview_right pl-7">
                    <div>
                        <div className="text-[#333] text-[14px] mb-2">
                            <span className="opacity-[1] text-[14px] ">
                            Thêm tối đa 5 thẻ để độc giả biết bài viết của bạn nói về điều gì.
                            </span>
                        </div>
                        <div className="items-center bg-[#fafafa] border border-solid border-[#00000026] flex flex-wrap min-h-[52px] pb-2">
                            <input  className=" bg-transparent bg-[#fafafa] border-none flex-1 h-[37px] mt-2 outline-none pl-2" type="text" name="" id="" placeholder="Ví dụ: Front-end, ReactJS, UI, UX" />
                        </div>
                        <div className="PublishPreview_recommend mt-[26px]">
                            <label className="flex opacity-[1] text-[14px] font-normal leading-[28px] relative" htmlFor="">
                                <Checkbox  defaultSelected></Checkbox>
                                <span className="opacity-[1]">Đề xuất bài viết của bạn đến các độc giả quan tâm tới nội dung này.</span>
                            </label>
                        </div>
                        <div className="PublishPreview_action mt-8">
                            <button className="button bg-[#029e74] text-[#fff] hover:opacity-90">Xuất bản ngay</button>
                        </div>
                    </div>
                </div>
            </section>
          </section>
        </section>
      </div>
    </div>
    </div>
  );
};
export default Edit;
