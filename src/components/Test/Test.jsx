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
import { MdKeyboard } from "react-icons/md";
import { MdOutlineFullscreen } from "react-icons/md";
import _ from "lodash";
import { Button } from "@nextui-org/react";
// export default Test;
import React, { useState, useContext, useEffect } from "react";
import MDEditor, { commands, EditorContext } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Edit from "./edit";

const Test = () => {
  //Xuất bản
  const [hide, setHide] = useState(false);
  
  
  //
  const [value, setValue] = React.useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Xử lý file ảnh ở đây, ví dụ: hiển thị ảnh, upload lên server, v.v.
    console.log(file);
  };
  const H1 = {
    name: "H1",
    keyCommand: "H1",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <h1 className="text-[34px]">H1</h1>,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  #`;

      // if (!state.selectedText) {
      //   modifyText = `### `;
      // }
      api.replaceSelection(modifyText);
    },
  };
  const H2 = {
    name: "H2",
    keyCommand: "H2",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <h2 className="text-[34px]">h2</h2>,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  ##`;
      api.replaceSelection(modifyText);
    },
  };
  const H3 = {
    name: "H3",
    keyCommand: "H3",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <h3 className="text-[34px]">H3</h3>,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  ###`;
      api.replaceSelection(modifyText);
    },
  };
  const H4 = {
    name: "H4",
    keyCommand: "H4",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <h4 className="text-[34px]">H4</h4>,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  ####`;
      api.replaceSelection(modifyText);
    },
  };
  const H5 = {
    name: "H5",
    keyCommand: "H5",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <h5 className="text-[34px]">H5</h5>,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  #####`;
      api.replaceSelection(modifyText);
    },
  };
  const H6 = {
    name: "H6",
    keyCommand: "H6",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <h6 className="text-[34px]">H6</h6>,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  ######`;
      api.replaceSelection(modifyText);
    },
  };

  const Blod = {
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
  };
  const Italic = {
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
  };
  const Underline = {
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
  };
  const Strikethrough = {
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
  };
  const ListUl = {
    name: "listUl",
    keyCommand: "listUl",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <FaListUl title="listUl" />,
    execute: (state, api) => {
      let modifyText = `${state.selectedText}
  * `;
      api.replaceSelection(modifyText);
    },
  };
  const ListOl = {
    name: "listOl",
    keyCommand: "listOl",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <FaListOl title="listOl" />,
    execute: (state, api) => {
      let modifyText = `${state.selectedText}
  1. `;
      api.replaceSelection(modifyText);
    },
  };
  const Quote = {
    name: "quote",
    keyCommand: "quote",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <FaQuoteLeft title="quote" />,
    execute: (state, api) => {
      console.log(state);
      console.log(api);
      let modifyText = `${state.selectedText}
  > `;
      api.replaceSelection(modifyText);
    },
  };
  const ListEnd = {
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
  };
  const Inline = {
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
  };
  const Code = {
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
  };
  const Table = {
    name: "table",
    keyCommand: "table",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <AiOutlineTable title="table" />,
    execute: (state, api) => {
      let modifyText = `${state.selectedText}
  ######`;
      api.replaceSelection(modifyText);
    },
  };
  const Image = {
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
  };
  const Link = {
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
  };
  const Delete = {
    name: "delete",
    keyCommand: "delete",
    buttonProps: { "aria-label": "Insert title3" },
    icon: <MdDelete title="delete" />,
    execute: (state, api) => {
      api.replaceSelection("");
      setValue("");
    },
  };
  const Undo = {
    name: "undo",
    keyCommand: "undo",
    buttonProps: { "aria-label": "Insert title3" },
    icon: (
      <IoMdUndo
        title="undo"
        className={`${value === "" && "cursor-not-allowed"}`}
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
  };
  const Redo = {
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
  };
  // const Disable = () => {
  //   const { preview, dispatch } = useContext(EditorContext);
  //   return (
  //     <button disabled={preview === "preview"}>
  //       <svg viewBox="0 0 16 16" width="12px" height="12px">
  //         <path
  //           d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
  //           fill="currentColor"
  //         />
  //       </svg>
  //     </button>
  //   );
  // };
  // const customButton = {
  //   name: "disable",
  //   keyCommand: "disable",
  //   value: "disable",
  //   icon: <Disable />,
  // };
  // const Buttons = () => {
  //   const { preview, dispatch } = useContext(EditorContext);
  //   const click = () => {
  //     dispatch({
  //       preview: preview === "edit" ? "preview" : "edit",
  //     });
  //   };
  //   if (preview === "edit") {
  //     return (
  //       <svg width="12" height="12" viewBox="0 0 520 520" onClick={click}>
  //         <polygon
  //           fill="currentColor"
  //           points="0 71.293 0 122 319 122 319 397 0 397 0 449.707 372 449.413 372 71.293"
  //         />
  //         <polygon
  //           fill="currentColor"
  //           points="429 71.293 520 71.293 520 122 481 123 481 396 520 396 520 449.707 429 449.413"
  //         />
  //       </svg>
  //     );
  //   }
  //   return (
  //     <svg width="12" height="12" viewBox="0 0 520 520" onClick={click}>
  //       <polygon
  //         fill="currentColor"
  //         points="0 71.293 0 122 38.023 123 38.023 398 0 397 0 449.707 91.023 450.413 91.023 72.293"
  //       />
  //       <polygon
  //         fill="currentColor"
  //         points="148.023 72.293 520 71.293 520 122 200.023 124 200.023 397 520 396 520 449.707 148.023 450.413"
  //       />
  //     </svg>
  //   );
  // };
  // const codePreview = {
  //   name: "preview",
  //   keyCommand: "preview",
  //   value: "preview",
  //   icon: <Buttons />,
  // };
  function log123() {
    setTimeout(function () {
      console.log("123");
    }, 2000);
  }
  return (
    <div>
      <section className="w-full overflow-hidden h-[100vh] ">
        <section className="min-[1113px]:mx-[-12px]">
          <section className="min-[1113px]:w-full block min-[1113px]:mx-3">
            <div className="newPost_wrapper">
              <div className="contenEdit">
                <input
                  placeholder="Tiêu đề"
                  className="ContentEditable_wrapper__YxeRy"
                ></input>
                <div className=" ml-2 flex gap-4 items-center justify-center">
                  <Button className="h-[30px]" color="default">
                    Lưu bản nháp
                  </Button>
                  <Button className="h-[30px]" color="primary"
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
                    value={value}
                    onChange={(e) => {
                      setValue(e);
                    }}
                    onKeyUpCapture={() => {
                      // console.log(123);
                    }}
                    commands={[
                      // Custom Toolbars

                      commands.group([H1, H2, H3, H4, H5, H6], {
                        name: "title",
                        groupName: "title",
                        buttonProps: { "aria-label": "Insert title" },
                        icon: <ImFontSize />,
                        minHeight: 50,
                      }),
                      Blod,
                      Italic,
                      Underline,
                      Strikethrough,
                      ListUl,
                      ListOl,
                      Quote,
                      ListEnd,
                      Inline,
                      Code,
                      Table,
                      Image,
                      Link,
                      Delete,
                      Undo,
                      Redo,
                    ]}
                    // extraCommands={[codePreview, commands.fullscreen]}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Edit />
    </div>
  );
};

export default Test;
