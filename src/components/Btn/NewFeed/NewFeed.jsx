import React from "react";
import "./NewFeed.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
const NewFeed = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="NewFeed_btn">
      <div className="fixed left-[22px] bottom-[60px]">
        <button className="btn-newFeed">
          <span className="btn-newFeed1" onClick={() => onOpen()}>
            <FaBullhorn />
          </span>
        </button>
        <Modal
          size="3xl"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior={"inside"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-bold text-[24px]">
                  F8 News Feed
                </ModalHeader>
                <ModalBody>
                  <div className="new_feed_item">
                    <h2 className="text-[18px] font-semibold">
                      <span className="new_feed_hash">#</span>
                      Ra mắt Server Discord F8 - Học Lập Trình Không Khó
                    </h2>
                    <div className="content_item_feed">
                      <p className="text-feed">
                        Học lập trình một mình sao bằng có bạn bè cùng tiến?
                        Đừng để bản thân phải lạc lõng, hãy ghé qua Discord của
                        F8 và cảm nhận sự khác biệt nhé!
                      </p>
                      <ul className="list_content_feed">
                        <li>
                          Cùng nhau xây dựng team code siêu chất, học hỏi lẫn
                          nhau và cùng tiến bộ!
                        </li>
                        <li>
                          Cùng nhau học hỏi từ người đi trước, có thêm động lực
                          và sự tự giác trong học tập!
                        </li>
                        <li>
                          Nơi mà sự tiêu cực không có chỗ đứng, câu hỏi nào cũng
                          được trả lời, không sợ bị đánh giá toxic, chỉ có sự hỗ
                          trợ và tôn trọng lẫn nhau!
                        </li>
                      </ul>
                      <p>
                        ✅ <strong>THAM GIA NGAY</strong>:{" "}
                        <a
                          href="https://discord.gg/sCdvr5MufX"
                          className="link_feed"
                        >
                          https://discord.gg/sCdvr5MufX
                        </a>
                      </p>
                      <p>
                        <a href="https://discord.gg/sCdvr5MufX">
                          <img
                            alt="image.png"
                            src="https://files.fullstack.edu.vn/f8-prod/public-images/6603da227f20c.png"
                          />
                        </a>
                      </p>
                      <p>
                        <em>
                          Hãy biến quá trình học lập trình của bạn thành một
                          hành trình thú vị và đầy ắp tiếng cười!
                        </em>
                      </p>
                    </div>
                    <p className="NewFeed_author">
                      Đăng bởi{" "}
                      <a className="NewFeed_name" href="#">
                        Sơn Đặng
                        <FaCheckCircle className="text-toastify-icon-color-info" />
                      </a>
                      <span className="NewFeed_dot=">·</span>
                      <time className="NewFeed_time">3 ngày trước</time>
                    </p>
                  </div>
                  <div className="new_feed_item">
                    <h2 className="text-[18px] font-semibold">
                      <span className="new_feed_hash">#</span>
                      Ra mắt Server Discord F8 - Học Lập Trình Không Khó
                    </h2>
                    <div className="content_item_feed">
                      <p className="text-feed">
                        Học lập trình một mình sao bằng có bạn bè cùng tiến?
                        Đừng để bản thân phải lạc lõng, hãy ghé qua Discord của
                        F8 và cảm nhận sự khác biệt nhé!
                      </p>
                      <ul className="list_content_feed">
                        <li>
                          Cùng nhau xây dựng team code siêu chất, học hỏi lẫn
                          nhau và cùng tiến bộ!
                        </li>
                        <li>
                          Cùng nhau học hỏi từ người đi trước, có thêm động lực
                          và sự tự giác trong học tập!
                        </li>
                        <li>
                          Nơi mà sự tiêu cực không có chỗ đứng, câu hỏi nào cũng
                          được trả lời, không sợ bị đánh giá toxic, chỉ có sự hỗ
                          trợ và tôn trọng lẫn nhau!
                        </li>
                      </ul>
                      <p>
                        ✅ <strong>THAM GIA NGAY</strong>:{" "}
                        <a
                          href="https://discord.gg/sCdvr5MufX"
                          className="link_feed"
                        >
                          https://discord.gg/sCdvr5MufX
                        </a>
                      </p>
                      <p>
                        <a href="https://discord.gg/sCdvr5MufX">
                          <img
                            alt="image.png"
                            src="https://files.fullstack.edu.vn/f8-prod/public-images/6603da227f20c.png"
                          />
                        </a>
                      </p>
                      <p>
                        <em>
                          Hãy biến quá trình học lập trình của bạn thành một
                          hành trình thú vị và đầy ắp tiếng cười!
                        </em>
                      </p>
                    </div>
                    <p className="NewFeed_author">
                      Đăng bởi{" "}
                      <a className="NewFeed_name" href="#">
                        Sơn Đặng
                        <FaCheckCircle className="text-toastify-icon-color-info" />
                      </a>
                      <span className="NewFeed_dot=">·</span>
                      <time className="NewFeed_time">3 ngày trước</time>
                    </p>
                  </div>
                  <div className="new_feed_item">
                    <h2 className="text-[18px] font-semibold">
                      <span className="new_feed_hash">#</span>
                      Ra mắt Server Discord F8 - Học Lập Trình Không Khó
                    </h2>
                    <div className="content_item_feed">
                      <p className="text-feed">
                        Học lập trình một mình sao bằng có bạn bè cùng tiến?
                        Đừng để bản thân phải lạc lõng, hãy ghé qua Discord của
                        F8 và cảm nhận sự khác biệt nhé!
                      </p>
                      <ul className="list_content_feed">
                        <li>
                          Cùng nhau xây dựng team code siêu chất, học hỏi lẫn
                          nhau và cùng tiến bộ!
                        </li>
                        <li>
                          Cùng nhau học hỏi từ người đi trước, có thêm động lực
                          và sự tự giác trong học tập!
                        </li>
                        <li>
                          Nơi mà sự tiêu cực không có chỗ đứng, câu hỏi nào cũng
                          được trả lời, không sợ bị đánh giá toxic, chỉ có sự hỗ
                          trợ và tôn trọng lẫn nhau!
                        </li>
                      </ul>
                      <p>
                        ✅ <strong>THAM GIA NGAY</strong>:{" "}
                        <a
                          href="https://discord.gg/sCdvr5MufX"
                          className="link_feed"
                        >
                          https://discord.gg/sCdvr5MufX
                        </a>
                      </p>
                      <p>
                        <a href="https://discord.gg/sCdvr5MufX">
                          <img
                            alt="image.png"
                            src="https://files.fullstack.edu.vn/f8-prod/public-images/6603da227f20c.png"
                          />
                        </a>
                      </p>
                      <p>
                        <em>
                          Hãy biến quá trình học lập trình của bạn thành một
                          hành trình thú vị và đầy ắp tiếng cười!
                        </em>
                      </p>
                    </div>
                    <p className="NewFeed_author">
                      Đăng bởi{" "}
                      <a className="NewFeed_name" href="#">
                        Sơn Đặng
                        <FaCheckCircle className="text-toastify-icon-color-info" />
                      </a>
                      <span className="NewFeed_dot=">·</span>
                      <time className="NewFeed_time">3 ngày trước</time>
                    </p>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default NewFeed;
