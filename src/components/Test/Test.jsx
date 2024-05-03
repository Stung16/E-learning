import "./test.css";
import { ImFontSize } from "react-icons/im";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { RiStrikethrough2 } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { LuListEnd } from "react-icons/lu";
import { IoCodeSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineTable } from "react-icons/ai";
import { FaImage } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoMdUndo } from "react-icons/io";
import { IoMdRedo } from "react-icons/io";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import MDEditor, { commands, EditorContext } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { redirect } from "react-router-dom";
import Edit from "./Edit";
import { handlePostNew } from "../../services/auth.service";
import { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Cookies from "js-cookie";
const Test = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const token = Cookies.get("accessToken");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const config = {
    H1: {
      name: "H1",
      keyCommand: "H1",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <h1 className="text-[34px]">H1</h1>,
      execute: (state, api) => {
        let modifyText = `${state.selectedText}
# `;

        // if (!state.selectedText) {
        //   modifyText = `### `;
        // }
        api.replaceSelection(modifyText);
      },
    },
    H2: {
      name: "H2",
      keyCommand: "H2",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <h2 className="text-[34px]">h2</h2>,
      execute: (state, api) => {
        console.log(state);
        console.log(api);
        let modifyText = `${state.selectedText}
## `;
        api.replaceSelection(modifyText);
      },
    },
    H3: {
      name: "H3",
      keyCommand: "H3",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <h3 className="text-[34px]">H3</h3>,
      execute: (state, api) => {
        console.log(state);
        console.log(api);
        let modifyText = `${state.selectedText}
### `;
        api.replaceSelection(modifyText);
      },
    },
    H4: {
      name: "H4",
      keyCommand: "H4",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <h4 className="text-[34px]">H4</h4>,
      execute: (state, api) => {
        console.log(state);
        console.log(api);
        let modifyText = `${state.selectedText}
#### `;
        api.replaceSelection(modifyText);
      },
    },
    H5: {
      name: "H5",
      keyCommand: "H5",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <h5 className="text-[34px]">H5</h5>,
      execute: (state, api) => {
        console.log(state);
        console.log(api);
        let modifyText = `${state.selectedText}
##### `;
        api.replaceSelection(modifyText);
      },
    },
    H6: {
      name: "H6",
      keyCommand: "H6",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <h6 className="text-[34px]">H6</h6>,
      execute: (state, api) => {
        console.log(state);
        console.log(api);
        let modifyText = `${state.selectedText}
###### `;
        api.replaceSelection(modifyText);
      },
    },
    Blod: {
      name: "blod",
      keyCommand: "blod",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <FaBold title="bold" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}****`;
        const middlePosition = currentCursorPosition + 2;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Italic: {
      name: "italic",
      keyCommand: "italic",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <FaItalic title="italic" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}**`;
        const middlePosition = currentCursorPosition + 1;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Underline: {
      name: "underline",
      keyCommand: "underline",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <FaUnderline title="underline" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}++++`;
        const middlePosition = currentCursorPosition + 2;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Strikethrough: {
      name: "strikethrough",
      keyCommand: "strikethrough",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <RiStrikethrough2 title="itastrikethroughlic" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}~~~~`;
        const middlePosition = currentCursorPosition + 2;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    ListUl: {
      name: "listUl",
      keyCommand: "listUl",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <FaListUl title="listUl" />,
      execute: (state, api) => {
        let modifyText = `${state.selectedText}
* `;
        api.replaceSelection(modifyText);
      },
    },
    ListOl: {
      name: "listOl",
      keyCommand: "listOl",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <FaListOl title="listOl" />,
      execute: (state, api) => {
        let modifyText = `${state.selectedText}
1. `;
        api.replaceSelection(modifyText);
      },
    },
    Quote: {
      name: "quote",
      keyCommand: "quote",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <FaQuoteLeft title="quote" />,
      execute: (state, api) => {
        let modifyText = `${state.selectedText}
> `;
        api.replaceSelection(modifyText);
      },
    },
    ListEnd: {
      name: "listend",
      keyCommand: "listend",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <LuListEnd title="listend" />,
      execute: (state, api) => {
        console.log(state);
        console.log(api);
        let modifyText = `${state.selectedText}
---`;
        api.replaceSelection(modifyText);
      },
    },
    Inline: {
      name: "inline",
      keyCommand: "inline",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <IoCodeSharp title="inline" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}\`\``;
        const middlePosition = currentCursorPosition + 1;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Code: {
      name: "code",
      keyCommand: "code",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <IoCodeSlash title="code" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}\n\`\`\n\n\`\`\n`;
        const middlePosition = currentCursorPosition + 4;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Table: {
      name: "table",
      keyCommand: "table",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <AiOutlineTable title="table" />,
      execute: (state, api) => {
        let modifyText = `${state.selectedText}
        table`;
        api.replaceSelection(modifyText);
      },
    },
    Image: {
      name: "image",
      keyCommand: "image",
      buttonProps: { "aria-label": "Insert title3" },
      icon: (
        <span>
          <label htmlFor="imageInput">
            <FaImage title="image" />
          </label>
          {/* <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                onChange={handleImageUpload}
                accept="image/*"
              ></input> */}
        </span>
      ),
      // <input type="file" id="imageInput" accept="image/*"  onChange={handleImageUpload} ><FaImage /></input>
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}![]()`;
        const middlePosition = currentCursorPosition + 2;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Link: {
      name: "link",
      keyCommand: "link",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <IoLink title="link" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const currentCursorPosition = textarea.selectionStart;
        let modifyText = `${state.selectedText}[]()`;
        const middlePosition = currentCursorPosition + 1;
        api.replaceSelection(modifyText);
        textarea.setSelectionRange(middlePosition, middlePosition);
      },
    },
    Delete: {
      name: "delete",
      keyCommand: "delete",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <MdDelete title="delete" />,
      execute: (state, api) => {
        api.replaceSelection("");
        setForm({ ...form, ["content"]: "" });
      },
    },
    Undo: {
      name: "undo",
      keyCommand: "undo",
      buttonProps: { "aria-label": "Insert title3" },
      icon: (
        <IoMdUndo
          title="undo"
          className={`${form.content === "" && "cursor-not-allowed"}`}
        />
      ),
      execute: (state, api) => {
        const textarea = api.textArea;
        const event = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "z",
          ctrlKey: true,
        });
        textarea.dispatchEvent(event);
        api.replaceSelection("");
      },
    },
    Redo: {
      name: "redo",
      keyCommand: "redo",
      buttonProps: { "aria-label": "Insert title3" },
      icon: <IoMdRedo title="redo" />,
      execute: (state, api) => {
        const textarea = api.textArea;
        const event = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "y",
          ctrlKey: true,
        });
        textarea.dispatchEvent(event);
        api.replaceSelection("");
      },
    },
  };
  const { mutate } = useSWRConfig();
  return (
    <div>
      <section className="w-full overflow-hidden h-[100vh] ">
        <section className="min-[1113px]:mx-[-12px]">
          <section className="min-[1113px]:w-full block min-[1113px]:mx-3">
            <div className="newPost_wrapper">
              <div className="contenEdit">
                <input
                  placeholder="Tiêu đề"
                  name="title"
                  value={form.title}
                  onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value });
                  }}
                  className="ContentEditable_wrapper__YxeRy"
                ></input>
                <div className=" ml-2 flex gap-4 items-center justify-center">
                  <Button
                    className={`h-[30px] ${
                      (form.content.trim() === "" ||
                        form.title.trim() === "") &&
                      "pointer-events-none opacity-40"
                    }`}
                    color="default"
                    onClick={async () => {
                      try {
                        setLoading(true);
                        const resPost = await handlePostNew(form);
                        if (resPost?.data?.status === 200) {
                          navigate("/blog?page=1");
                          toast.success("Tạo bài viểt thành công!!!");
                        }
                      } catch (error) {
                        return toast.error("Đã có lỗi xảy ra!!!");
                      } finally {
                        setLoading(false);
                      }
                    }}
                  >
                    Lưu bản nháp
                  </Button>
                  <Button
                    className={`h-[30px] ${
                      (form.content.trim() === "" ||
                        form.title.trim() === "") &&
                      "pointer-events-none opacity-40"
                    }`}
                    color="primary"
                    onClick={() => {
                      setHide(true);
                    }}
                  >
                    Xuất bản
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <div data-color-mode="light">
                  <MDEditor
                    value={form.content}
                    onChange={(e) => {
                      setForm({ ...form, ["content"]: e });
                    }}
                    commands={[
                      // Custom Toolbars

                      commands.group(
                        [
                          config.H1,
                          config.H2,
                          config.H3,
                          config.H4,
                          config.H5,
                          config.H6,
                        ],
                        {
                          name: "title",
                          groupName: "title",
                          buttonProps: { "aria-label": "Insert title" },
                          icon: <ImFontSize />,
                          minHeight: 50,
                        }
                      ),
                      config.Blod,
                      config.Italic,
                      config.Underline,
                      config.Strikethrough,
                      config.ListUl,
                      config.ListOl,
                      config.Quote,
                      config.ListEnd,
                      config.Inline,
                      config.Code,
                      config.Table,
                      config.Image,
                      config.Link,
                      config.Delete,
                      config.Undo,
                      config.Redo,
                    ]}
                    // extraCommands={[codePreview, commands.fullscreen]}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      {loading && <Loading />}
      {hide && (
        <Edit hide={hide} setHide={setHide} form={form} setForm={setForm} />
      )}
    </div>
  );
};

export default Test;
