import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <div
      className={`Payment_wrapper bg-[url('/image/payment/payment-bg.dd1049bd524ec6121c88.png')]`}
    >
      <div className="PaymentHeader_wrapper h-[100px] py-[27px] px-10 relative w-[100vw]">
        <div className="Header_logo items-center flex">
          <Link to="/" className="inline-block h-[48px] w-[48px]">
            <img
              className="rounded-[8px] w-[100%]"
              src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
              alt="F8 - Học lập trình để đi làm"
            />
          </Link>
          <div className="flex flex-col text-[16px] font-medium leading-[24px] ml-3 uppercase">
            <span className="inline-block flex-1 w-[193px] font-medium">
              Học lập trình
            </span>
            <span className="inline-block flex-1 w-[193px] font-medium">
              Để đi làm
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-[48px] font-medium leading-[120%] mt-[18px] text-center">
        Mở khóa toàn bộ khóa học
      </h1>
      <div className="PaymentContent_wrapper flex mt-[64px] max-w-[100vw] w-[1024px]">
        <div className="PaymentContent_left flex-1">
          <div className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
            <p>
              Sở hữu khóa học HTML CSS
              <em>
                <strong className="text-[#5ebbff]"> đầy đủ và chi tiết </strong>
              </em>
              nhất bạn có thể tìm thấy trên Internet 🙌
            </p>
            <p>
              Có tới
              <em>
                <strong className="text-[#5ebbff]"> hàng trăm bài tập </strong>
              </em>
              thực hành sau mỗi bài học và bạn sẽ được
              <em>
                <strong className="text-[#5ebbff]">
                  {" "}
                  làm 8 dự án thực tế{" "}
                </strong>
              </em>
              trong khóa học này. Với
              <em>
                <strong className="text-[#5ebbff]"> 1000+ bài học </strong>
              </em>
              (bao gồm video, bài tập, thử thách, flashcards, v.v) sẽ giúp bạn
              nắm kiến thức nền tảng vô cùng chắc chắn.
            </p>
          </div>
          <div className="PaymentContent_price items-end bg-[#202425] rounded-[8px] flex flex-col text-[24px] justify-center leading-[40px] mt-8 py-2 px-6">
            <div className="items-center flex gap-[16px]">
              <span className="text-[#a2adbd] text-[16px] font-normal leading-[16px] text-right">
                Giá bán:
              </span>
              <div className="flex gap-[16px]">
                <del className="text-[20px] font-medium text-[#a2adbd]">
                  2.500.000đ
                </del>
                <span className="text-[20px] font-medium text-[#52eeee]">
                  1.299.000đ
                </span>
              </div>
            </div>
            <div className=" rounded-[20px] border-t border-solid border-[#333c6d] my-4 mx-0 w-[100%]"></div>
            <div className="items-center flex gap-[16px]">
              <span className="text-[#fff] text-[18px] font-bold leading-[16px] text-right">
                Tổng tiền:
              </span>
              <span className="text-[#52eeee] text-[26px] font-bold flex justify-end min-w-[243px]">
                1.299.000đ
              </span>
            </div>
          </div>
          <div className="mt-8 w-[100%]">
            <Link to="/banking" className="PaymentButton_wrapper block w-[100%]">
              Lấy thông tin thanh toán
            </Link>
          </div>
        </div>
        <div className="PaymentContent_right w-[350px]">
          <div className="PaymentContent_benefit">
            <div className="bg-[#272a31] rounded-[6px] p-4">
              <h2 className="text-[#dae4f0] text-[24px] font-bold leading-[40px] text-center pb-[15px] px-0 pt-0">
                Bạn sẽ nhận được gì?
              </h2>
              <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
                <section className="min-[1113px]:w-[100%] min-[1113px]:px-3 min-[740px]:w-[50%] min-[740px]:px-2 w-[100%] px-1">
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/check-circle.9af250ebcec2d0bbb82b1d0328ec2ab1.svg"
                        alt=""
                      />
                    </span>
                    <div>
                      Truy cập toàn bộ khóa
                      <strong className="text-[#5ebbff] font-semibold">
                        {" "}
                        HTML CSS Pro
                      </strong>
                    </div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/person-chalkboard.e496b36a4b7e0c2965356cf1ac6797a8.svg"
                        alt=""
                      />
                    </span>
                    <div>
                      Hơn
                      <strong className="text-[#5ebbff] font-semibold">
                        {" "}
                        628{" "}
                      </strong>
                      bài học
                    </div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/book.4d96098b583fd76e7ac68daab0b273dd.svg"
                        alt=""
                      />
                    </span>
                    <div>
                      Hơn
                      <strong className="text-[#5ebbff] font-semibold">
                        {" "}
                        515{" "}
                      </strong>
                      bài tập và thử thách
                    </div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/news.11a396b759e638300ab458b44956b481.svg"
                        alt=""
                      />
                    </span>
                    <div>
                      Thực hành
                      <strong className="text-[#5ebbff] font-semibold">
                        {" "}
                        8{" "}
                      </strong>
                      dự án thực tế
                    </div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/flashcard.fd96dc4beed8cd478dce1428b7855159.svg"
                        alt=""
                      />
                    </span>
                    <div>
                      Hơn
                      <strong className="text-[#5ebbff] font-semibold">
                        {" "}
                        244{" "}
                      </strong>
                      flashcards
                    </div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/comments.2fd22436e79f374abba35fa8be0269f6.svg"
                        alt=""
                      />
                    </span>
                    <div>Kênh hỏi đáp riêng tư</div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/comment-check.eebcdfa33cca436acfb6c8e8ab2b6e35.svg"
                        alt=""
                      />
                    </span>
                    <div>Đáp án cho mọi thử thách</div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/certificate.9bde542036cc1bc13bec194469dbdcad.svg"
                        alt=""
                      />
                    </span>
                    <div>Nhận chứng chỉ khi hoàn thành</div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/star.79d54fbd438c1340456d28d97ed30a74.svg"
                        alt=""
                      />
                    </span>
                    <div>Cập nhật khóa học trong tương lai</div>
                  </div>
                  <div className="PaymentContent_benefit-item">
                    <span className="PaymentContent_icon">
                      <img
                        src="/image/payment/infinity.9c82e472bf648834b34de804d4675007.svg"
                        alt=""
                      />
                    </span>
                    <div>Mua một lần, học mãi mãi</div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[85px] items-center flex flex-col">
        <h2 className="text-[#fff] text-[48px] font-medium leading-[120%] max-w-[441px] text-center m-0">
          Bạn sẽ học được những gì?
        </h2>
        <div className="mt-[54px] max-w-[90vw] w-[980px]">
          <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
            <section className="Payment_module">
              <ul className="list-[unset]">
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Cấu trúc tiêu chuẩn của file HTML
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tìm hiểu về các thẻ meta
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tìm hiểu về thuộc tính trong HTML
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Sử dụng liên kết
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tính thừa kế CSS
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Thẻ inline và block
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Đệm, viền, khoảng lề
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Đơn vị trong CSS
                </li>
              </ul>
            </section>
            <section className="Payment_module">
              <ul className="list-[unset]">
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Làm việc với font chữ
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Làm việc với hình ảnh
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Làm việc với background
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Thuộc tính vị trí (position)
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Sử dụng biến trong CSS
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  CSS selectors nâng cao
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Đặt tên class chuẩn BEM
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Semantic trong HTML5
                </li>
              </ul>
            </section>
            <section className="Payment_module">
              <ul className="list-[unset]">
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Sử dụng Flexbox
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Sử dụng CSS Grid
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Form và validation
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Responsive web design
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Grid system 12 columns
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Transitions, animations
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Học về ngôn ngữ Sass
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tổng hợp kiến thức khác
                </li>
              </ul>
            </section>
            <section className="Payment_module">
              <ul className="list-[unset]">
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tìm hiểu về web UI, UX
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Luyện độ chi tiết (easy)
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Sử dụng Git, Github
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Kiến thức SEO cơ bản
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tra cứu thẻ HTML
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tính hợp lệ của HTML
                </li>
                <li className="text-[#dae4f0] text-[16px] font-normal leading-[24px] mb-5">
                  Tìm hiểu pseudo-elements
                </li>
              </ul>
            </section>
          </section>
        </div>
      </div>
      <div className="flex mt-[132px] relative w-[100vw] z-[1]">
        <img
          className="absolute right-0 top-0"
          src="/image/payment/landing_ellipse_13.4818807a98da32e2ca0a.png"
          alt=""
        />
        <div className="pt-[74px] flex-1">
          <h2 className="text-[#fff] text-[48px] font-medium leading-[120%] ml-[136px] mr-[102px]">
            Thực hành 8 dự án
          </h2>
          <div className="text-[#fff] text-[16pxpx] font-normal leading-[26px] ml-[136px] mr-[102px]">
            <p>
              Để thành thạo HTML CSS, có một công thức chung đó là bạn hãy
              <em>
                <strong className="text-[#5ebbff]">
                  {" "}
                  làm thật nhiều dự án{" "}
                </strong>
                khác nhau.
              </em>
            </p>
            <p>
              Trong khóa học này, bạn được
              <em>
                <strong className="text-[#5ebbff]">
                  {" "}
                  thực hành lên tới 8 dự án{" "}
                </strong>
                từ dễ đến khó, có thể áp dụng ngay vào thực tế.
              </em>
            </p>
            <p>
              Mỗi dự án đều được thiết kế trên Figma - một công cụ thiết kế nổi
              tiếng.
            </p>
          </div>
          <div className="Projects_list items-start flex flex-col ml-[144px] mt-[52px]">
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án I: Real Estate Landing Page
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án II: Education Platform Website
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án III: Dental Care Landing Page
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án IV: Lucy-Pet Care Landing Page
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án V: Mobile Banking Website
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án VI: Arif Personal Portfolio Website
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án VII: Podcast Lading Page
              </h3>
            </div>
            <div className="Projects_project-item-wrapper mb-4 relative">
              <h3 className="text-[#a2adbd] cursor-pointer text-[18px] leading-[26px] m-0 relative w-[100%]">
                Dự án VIII: Grocery Ecommerce Website
              </h3>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="BackdropContainer_wrapper min-h-[100%] pt-[74px] pr-[156px] pb-[131px] pl-[100px] z-[1] relative backdrop-blur-[10px]">
            <div className="BackdropContainer_mask"></div>
            <div className="BackdropContainer_background"></div>
            <div className="Projects_video pt-[56%] relative w-[100%]">
              <img
                className="rounded-[10px] h-[100%] w-[100%] left-[50%] max-h-[100%} max-w-[100%] absolute top-[50%] translate-x-[-50%] translate-y-[-50%]"
                src="/image/payment/62ec8557ce17c.png"
                alt=""
              />
            </div>
            <h4 className="text-[#fff] text-[24px] font-medium leadinh-[120%] mt-8 mb-0 mx-0">
              Dự án I: Real Estate Landing Page
            </h4>
            <div className="text-[#fff] text-[16px] font-normal leading-[26px] mt-4">
              <p>
                Đây là một Landing Page cho lĩnh vực bất động sản. Bạn sẽ được
                áp dụng các kiến thức cơ bản về HTML CSS để xây dựng trang web
                này.
              </p>
            </div>
            <div className="mt-[71px]">
              <Link className="PaymentButton_wrapper" to="">
                Mua khóa học này
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Feedbacks_wrapper mt-12 max-w-[90vw] p-16 relative w-[1206px] backdrop-blur-[10px]">
        <div className="BackdropContainer_mask"></div>
        <div className="BackdropContainer_background"></div>
        <div className="items-center flex justify-between">
          <h2 className="text-[48px] font-medium leading-[120%] w-[100%] m-0">
            Phản hồi từ học viên
          </h2>
          <div className="items-center flex">
            <button className="cursor-pointer ml-[14px] bg-[transparent] hover:opacity-70">
              <img
                src="/image/payment/prev-icon.d7fd2f86ea41858fe9dcacc5a5d97a4d.svg"
                alt=""
              />
            </button>
            <button className="cursor-pointer ml-[14px] bg-[transparent] hover:opacity-70">
              <img
                src="/image/payment/next-icon.190033a3d1b22972de3ea6d6aa7e3229.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="mt-[57px]">
          <div className="FeedbackSlide_wrapper">
            <div className="FeedbackSlide_slide flex h-[100%] absolute left-0 top-0 transition-[.5s]">
              <div className="FeedbackSlide_item p-8 w-[515px]">
                <div className="FeedbackSlide_background mr-[20px] w-[211px]">
                  <img
                    className="w-[100%]"
                    src="/image/payment/feedback-bg.1eb25167756b69df87c7.png"
                    alt="Phản hồi từ học viên LE HOANG MINH cho khóa học HTML CSS Pro tại F8"
                  />
                </div>
                <div className="FeedbackSlide_main flex flex-1 flex-col">
                  <div className="text-[#4a6268] flex-1 text-[14px] font-normal leading-[20px]">
                    <p className="overflow-hidden line-clamp-[9] break-words">
                      Cảm ơn Sơn Đặng rất nhiều. Trước kia mình cứ nghỉ học lập
                      trình sẽ rất khó. Nhưng từ khi mình vô tình lướt youtube
                      gặp kênh F8 hướng dẫn code về App media music, Sơn Đặng đã
                      tạo cho mình một nghị lực và quyết tâm và rồi mình đã lần
                      tìm đến với F8… Nhưng dịp năm cũ sắp qua đi, năm mới sắp
                      đến. Xin kính chúc Sơn Đặng và gia đình nhiều sức khỏe,
                      hạnh phúc và thành công. Chúc F8 ngày càng phát triển hơn
                      nữa. Kính chào!
                    </p>
                  </div>
                  <div className="flex h-[60px]">
                    <div className="text-[6.7px] rounded-[50%] bg-[transparent]">
                      <img
                        className="rounded-[50%] h-[9em] w-[9em] object-cover"
                        src="/image/payment/62e7e7e6b6974.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ml-[10px]">
                      <p className="m-0 text-[20px] font-bold line-clamp-1 break-words text-[#484848] leading-[32px] overflow-hidden">
                        LE HOANG MINH
                      </p>
                      <p className="text-[16px] font-normal break-words line-clamp-1 text-[#484848] leading-[32px] overflow-hidden m-0">
                        hoangminhle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="FeedbackSlide_item">
                <div className="FeedbackSlide_main flex flex-1 flex-col">
                  <div className="text-[#4a6268] flex-1 text-[14px] font-normal leading-[20px]">
                    <p className="overflow-hidden line-clamp-[9] break-words">
                      Cám ơn A Sơn rất nhiều vì khóa học. Nó là trải nghiệm rất
                      tuyệt vời mà e nghĩ không chỉ riêng e mà đối với mn cũng
                      thế. Có thể nói đây là bước đệm đầu tiên trong việc làm
                      quen với chuyên ngành cũng như theo đuổi ước mơ trở thành
                      1 lập trình viên font-end chuyên nghiệp. Một lần nữa e xin
                      cảm ơn a và chỉ muốn chúc a thật nhiều sức khỏe để có thể
                      sản xuất ra nhiều khóa học bổ ích và ngày càng được nhiều
                      người biết đến hơn ạ !!!
                    </p>
                  </div>
                  <div className="flex h-[60px]">
                    <div className="text-[6.7px] rounded-[50%] bg-[transparent]">
                      <img
                        className="rounded-[50%] h-[9em] w-[9em] object-cover"
                        src="/image/payment/62e7e7e6b6974.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ml-[10px]">
                      <p className="m-0 text-[20px] font-bold line-clamp-1 break-words text-[#484848] leading-[32px] overflow-hidden">
                        Khải Võ
                      </p>
                      <p className="text-[16px] font-normal break-words line-clamp-1 text-[#484848] leading-[32px] overflow-hidden m-0">
                        vokhai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="FeedbackSlide_item">
                <div className="FeedbackSlide_main flex flex-1 flex-col">
                  <div className="text-[#4a6268] flex-1 text-[14px] font-normal leading-[20px]">
                    <p className="overflow-hidden line-clamp-[9] break-words">
                      17/09/2021. Em đã hoàn thành khóa học này. Cảm ơn anh Sơn
                      rất nhiều vì các khóa học rất rất bổ ích, nội dung rất
                      hay, chỉ dẫn thì phải nói là rất tận tâm Cảm ơn anh lại 1
                      lần nữa, chúc anh Sơn và gia đình thật nhiều sức khỏe ạ!!!
                      Hy vọng anh sẽ ra thêm nhiều khóa học hay hơn nữa trong
                      tương lai.
                    </p>
                  </div>
                  <div className="flex h-[60px]">
                    <div className="text-[6.7px] rounded-[50%] bg-[transparent]">
                      <img
                        className="rounded-[50%] h-[9em] w-[9em] object-cover"
                        src="/image/payment/62e7e7e6b6974.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ml-[10px]">
                      <p className="m-0 text-[20px] font-bold line-clamp-1 break-words text-[#484848] leading-[32px] overflow-hidden">
                        Lê Trung Chính
                      </p>
                      <p className="text-[16px] font-normal break-words line-clamp-1 text-[#484848] leading-[32px] overflow-hidden m-0">
                        trungchinh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[27px] max-w-[100vw] w-[1024px]">
        <h2 className="text-[48px] font-medium leading-[120%] mb-10">FAQ</h2>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Đối tượng phù hợp
          </h3>
          <div className="faqs-list">
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Khóa học này có phù hợp với người hoàn toàn mới?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Khóa học này RẤT phù hợp với người hoàn toàn chưa biết về HTML
                  CSS (F8 thiết kế tập trung vào người mới mà). Bạn chỉ cần biết
                  sử dụng máy vi tính ở mức căn bản là có thể tham gia học.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Nếu tôi đã biết HTML CSS thì khóa học này còn phù hợp?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Dù bạn đã biết về HTML CSS thì khóa học này vẫn RẤT cần cho
                  bạn. Trong khóa học đề cập tới rất nhiều kiến thức chuyên sâu
                  mà bình thường không có khóa học nào đề cập tới (bạn có thể
                  vào học thử và xem outline bài học).
                </p>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Hơn thế nữa, khóa học này có rất nhiều loại hình bài học thú
                  vị và hấp dẫn như: các dạng bài tập thử thách, tặng thêm các
                  games hỗ trợ việc học, các thử thách độc lập nhiều học viên
                  cùng tham gia, v.v.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Khóa học Pro & Free
          </h3>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Khóa học này có phù hợp với người hoàn toàn mới?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Điểm khác biệt lớn nhất đó chính là chất lượng và số lượng nội
                  dung. Bạn hãy tin đây là khóa học HTML CSS đầy đủ và chi tiết
                  nhất bạn từng thấy. Khóa học giúp bạn có nền móng cực vững
                  chắc để trở thành nhà phát triển web chuyên nghiệp trong tương
                  lai.
                </p>
                <p>
                  Ngoài ra, các bạn sẽ được học trên nền tảng lập trình hoàn
                  toàn mới - nền tảng học lập trình Pro. Chất lượng khóa học
                  được nâng cao, từ hình ảnh, âm thanh, vv.
                </p>
                <p>
                  Bài học đa dạng hơn, gồm 7+ dạng bài học khác nhau, bài tập
                  phong phú & đa dạng hơn, được làm dự án thực chiến, tặng
                  games, v.v.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div className="faqs-list">
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Khóa Free có bị khóa không?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Mở bán khóa Pro, nhưng khóa Free sẽ không bị khóa, luôn được
                  mở và cập nhật thêm kiến thức nên các bạn yên tâm học nhé.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Quyền lợi
          </h3>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Tôi có thể xem video bao nhiêu lần?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Với những video đã học qua, bạn có thể thỏa thích xem lại bất
                  cứ video nào mà bạn muốn, không giới hạn số lần xem video. F8
                  thậm chí còn khuyến khích bạn xem càng nhiều càng tốt để có
                  thể nắm vững kiến thức hơn bạn nhé.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div className="faqs-list">
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Tôi có thể học vào thời gian nào?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Bài giảng đã được thiết kế sẵn, nội dung chi tiết và đầy đủ.
                  Chỉ cần có Internet, bạn có thể học bất kỳ lúc nào, bất kỳ nơi
                  đâu. Bạn luôn có thể chủ động thời gian và địa điểm mà không
                  cần lo lắng gì.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Ứng dụng thực tế
          </h3>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Tôi có thể ứng dụng được ngay sau khi học không?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Chắc chắn rồi! F8 luôn hướng tới các bạn học và đi đôi với
                  hành. Vì thế, sau mỗi bài học video hoặc văn bản, bạn sẽ được
                  làm rất nhiều bài tập để cô đọng lại kiến thức, nắm vững cú
                  pháp, thậm chí là làm một thử thách code mới.
                </p>
                <p>
                  Quan trọng hơn hết, bạn phải làm xong 8 dự án thực chiến -
                  được thiết kế bằng Figma thì mới hoàn thành khóa học nhé.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Thanh toán
          </h3>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Khi nào thì đơn hàng được duyệt?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Sau khi bạn thanh toán thành công, khóa học của bạn sẽ được
                  kích hoạt tự động ngay sau đó, trong trường hợp chưa được kích
                  hoạt, bạn hãy gọi ngay tới số hotline 0246.329.1102.
                </p>
                <p>
                  Sau khi F8 nhận được thanh toán từ bạn, khóa học của bạn sẽ
                  được kích hoạt và bạn có thể học ngay sau đó luôn bạn nhé.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Hỗ trợ học viên
          </h3>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Tôi có được hỗ trợ trong quá trình học không?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Tất nhiên rồi! Mặc dù bài tập đã có hướng dẫn, video chữa bài
                  tương ứng và được giải thích chi tiết nhất có thể nhưng nếu
                  bạn gặp khó, bạn không cần lo lắng không biết hỏi ai hay không
                  có người hướng dẫn.
                </p>
                <p>
                  Tại mỗi bài học ở F8, bạn luôn có thể đặt câu hỏi, trao đổi và
                  tương tác với các bạn cùng học.
                </p>
                <p>
                  Ngoài ra, chuyên viên hỗ trợ F8 sẽ luôn tận tình hướng dẫn nếu
                  bạn gặp khó khăn bạn nhé.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  Tôi muốn hỏi thì đăng câu hỏi ở đâu?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  Tại mỗi bài học luôn có phần đăng câu hỏi. Bạn chỉ cần đăng
                  câu hỏi mới và chờ câu trả lời của đội ngũ hỗ trợ trong ít
                  phút sau đó. Ngoài ra, ngay chính các học viên trong khóa học
                  cũng có thể tham gia hỗ trợ lẫn nhau nên bạn hãy yên tâm nhé!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-topic">
          <h3 className="text-[24px] font-medium leading-[120%] mb-[24px]">
            Khóa học Offline tại F8
          </h3>
          <div className="faqs-list">
            <div className="items-start flex mb-6">
              <span className="mr-2 mt-[6px]">
                <img
                  src="/image/payment/question-circle.fccb237b6e35a1a2c2cc5c08488295ce.svg"
                  alt=""
                />
              </span>
              <div>
                <h4 className="text-[#dae4f0] text-[18px] font-semibold leading-[24px] mt-0 mx-0 mb-2">
                  F8 có lớp học offline không?
                </h4>
                <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                  F8 có lớp offline tại Hà Nội bạn nhé. Ngoài các khóa học
                  online, F8 cũng triển khai đào tạo offline với các mảng
                  Front-end, Back-end, Fullstack. Để nắm chi tiết hơn, bạn đăng
                  ký tư vấn tại:&nbsp;
                  <Link className="text-[#5ebbff] font-medium underline" to="">
                    https://forms.gle/Hjqnu7vNiE1fd8X78
                  </Link>
                  &nbsp;nhé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ComingSoonCourses_wrapper flex mt-[42px] max-w-[100vw] w-[1024px]">
        <div className="ComingSoonCourses_left flex-1">
          <h2 className="text-[48px] font-medium leading-[140%] mb-[10px]">
            Khóa học nào sẽ được ra mắt tiếp theo?
          </h2>
          <div className="text-[16px] font-normal leading-[24px]">
            <p>
              Theo kế hoạch, từ giờ tới năm 2023 F8 sẽ ra mắt thêm 2 khóa học
              là:
            </p>
            <ol className="list-decimal my-7 mx-0 pl-6">
              <li>JavaScript Pro (dự kiến Pre-Order cuối năm 2023)</li>
              <li>ReactJS Pro (dự kiến Pre-Order cuối quý I 2024)</li>
            </ol>
            <p>
              <em>
                Sẽ có những ưu đãi đặc biệt hơn cho các bạn đã từng mua khóa
                HTML CSS Pro trước đó.
              </em>
            </p>
          </div>
          <div className="courses-list">
            <div className="ComingSoonCourses_courses-list-wrapper">
              <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
                <section className="min-[1113px]:w-[50%] min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
                  <div className="BackdropContainer_wrapper backdrop-blur-[10px] min-[1024px]:h-[100%] relative mb-4 p-[30px] h-[100%]">
                    <div className="BackdropContainer_mask"></div>
                    <div className="BackdropContainer_background"></div>
                    <img
                      className="mb-8"
                      src="/image/payment/6461a2024a498.png"
                      alt=""
                    />
                    <h3 className="text-[24px] font-medium leading-[120%] mb-4">
                      JavaScript Pro
                    </h3>
                    <p className="text-[16px] font-normal leading-[32px] m-0">
                      Dự kiến ra mắt vào tháng 3 năm 2024.
                    </p>
                  </div>
                </section>
                <section className="min-[1113px]:w-[50%] min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
                  <div className="BackdropContainer_wrapper backdrop-blur-[10px] min-[1024px]:h-[100%] relative mb-4 p-[30px] h-[100%]">
                    <div className="BackdropContainer_mask"></div>
                    <div className="BackdropContainer_background"></div>
                    <img
                      className="mb-8"
                      src="/image/payment/648020fcc8000.png"
                      alt=""
                    />
                    <h3 className="text-[24px] font-medium leading-[120%] mb-4">
                      NextJS Pro
                    </h3>
                    <p className="text-[16px] font-normal leading-[32px] m-0">
                      Dự kiến ra mắt vào tháng 6 năm 2024.
                    </p>
                  </div>
                </section>
                <section className="min-[1113px]:w-[50%] min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
                  <div className="BackdropContainer_wrapper backdrop-blur-[10px] min-[1024px]:h-[100%] relative mb-4 p-[30px] h-[100%]">
                    <div className="BackdropContainer_mask"></div>
                    <div className="BackdropContainer_background"></div>
                    <img
                      className="mb-8"
                      src="/image/payment/6461a2024a498.png"
                      alt=""
                    />
                    <h3 className="text-[24px] font-medium leading-[120%] mb-4">
                      Lập trình web fullstack với NodeJS và ReactJS
                    </h3>
                    <p className="text-[16px] font-normal leading-[32px] m-0">
                      Dự kiến ra mắt vào tháng 12 năm 2024.
                    </p>
                  </div>
                </section>
                <section className="min-[1113px]:w-[50%] min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
                  <div className="BackdropContainer_wrapper backdrop-blur-[10px] min-[1024px]:h-[100%] relative mb-4 p-[30px] h-[100%]">
                    <div className="BackdropContainer_mask"></div>
                    <div className="BackdropContainer_background"></div>
                    <img
                      className="mb-8"
                      src="/image/payment/65dc1836dd390.png"
                      alt=""
                    />
                    <h3 className="text-[24px] font-medium leading-[120%] mb-4">
                      Devops for Beginers
                    </h3>
                    <p className="text-[16px] font-normal leading-[32px] m-0">
                      Dự kiến ra mắt vào tháng 1 năm 2024.
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
        <div className="ComingSoonCourses_right">
            <img className="" src="/image/payment/payment-footer-bg.7213dff1ad93fec9be7b.png" alt="" />
        </div>
      </div>
      {/* Footer */}
      <div className="mt-[142px] max-w-[90vw] w-[1087px] z-[1]">
        <div className="Footer_top items-center flex">
            <div className="items-center flex pr-12">
                <Link to="/">
                    <img className="rounded-[4px] h-[48px] w-[48px]" src="/icon/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
                </Link>
                <div className="flex flex-col text-[19px] font-medium leading-[28px] ml-3 uppercase">
                    <span className="font-medium">Học lập trình</span>
                    <span className="font-medium">Để đi làm</span>
                </div>
            </div>
        </div>
        <div className="mt-[29px]">
            <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
                <section className="min-[1113px]:w-[33.33333%] min-[1113px]:px-3 min-[740px]:w-[33.33333%] min-[740px]:px-2 w-[100%] px-1">
                    <div className="items-start flex mb-4">
                        <span className="mr-3 pt-1">
                            <img src="/image/payment/phone.0c60754adb11aa1f42791f4b80423f6d.svg" alt="" />
                        </span>
                        <Link className="text-[#fff] text-[16px] font-normal leading-[24px]" to="">
                        0246.329.1102
                        </Link>
                    </div>
                    <div className="items-start flex mb-4">
                        <span className="mr-3 pt-1">
                            <img src="/image/payment/envelope.e7b59ce57be76a9435865a20e7021f56.svg" alt="" />
                        </span>
                        <Link className="text-[#fff] text-[16px] font-normal leading-[24px]" to="">
                        contact@fullstack.edu.vn
                        </Link>
                    </div>
                    <div className="items-start flex mb-4">
                        <span className="mr-3 pt-1">
                            <img src="/image/payment/map-location.d448ea4630d95df7331a9b1162a39a8f.svg" alt="" />
                        </span>
                        <span className="text-[#fff] text-[16px] font-normal leading-[24px]" to="">
                        Số 11D, khu đô thị Nam Trung Yên, Quận Cầu Giấy
                        </span>
                    </div>
                </section>
                <section className="min-[1113px]:w-[25%] min-[1113px]:px-3 min-[740px]:w-[25%] min-[740px]:px-2 w-[100%] px-1">
                    <div className="pl-[42px]">
                        <div>
                            <div className="Footer_item-title">Về F8</div>
                            <div className="flex flex-col">
                                <Link className="text-[#fff] text-[16px] font-normal leading-[24px] mb-3" to="">
                                Giới thiệu
                                </Link>
                                <Link className="text-[#fff] text-[16px] font-normal leading-[24px] mb-3" to="">
                                Cơ hội việc làm
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="min-[1113px]:w-[16.66667%] min-[1113px]:px-3 min-[740px]:w-[16.66667%] min-[740px]:px-2 w-[100%] px-1">
                <div className="">
                        <div>
                            <div className="Footer_item-title">Hỗ trợ</div>
                            <div className="flex flex-col">
                                <Link className="text-[#fff] text-[16px] font-normal leading-[24px] mb-3" to="">
                                Liên hệ
                                </Link>
                                <Link className="text-[#fff] text-[16px] font-normal leading-[24px] mb-3" to="">
                                Bảo mật
                                </Link>
                                <Link className="text-[#fff] text-[16px] font-normal leading-[24px] mb-3" to="">
                                Điều khoản
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="min-[1113px]:w-[25%] min-[1113px]:px-3 min-[740px]:w-[25%] min-[740px]:px-2 w-[100%] px-1">
                <div className="">
                        <div>
                            <div className="Footer_item-title">Công ty cổ phần công nghệ F8</div>
                            <div className="flex flex-col">
                                <div className="text-[#cfd2d8cc] text-[14px] font-normal leading-[24px]">
                                Mã số thuế: 0109922901
                                </div>
                                <div className="text-[#cfd2d8cc] text-[14px] font-normal leading-[24px]">
                                Ngày thành lập: 04/03/2022
                                </div>
                                <div className="text-[#cfd2d8cc] text-[14px] font-normal leading-[24px]">
                                Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <div className="flex justify-center relative mt-12 mx-0 mb-[84px]">
            <div className="items-center flex gap-[32px] left-0 absolute top-[50%] translate-y-[-50%]">
                <Link className="items-center flex h-[32px] w-[32px]" to="">
                    <img className="w-[100%]" src="/image/payment/facebook.114ffe79a2cfaeb8e3489bd4fbbf2f39.svg" alt="" />
                </Link>
                <Link className="items-center flex h-[32px] w-[32px]" to="">
                    <img className="w-[100%]" src="/image/payment/youtube.d6ca95670a626d4ba3b586614e442eb3.svg" alt="" />
                </Link>
                <Link className="items-center flex h-[32px] w-[32px]" to="">
                    <img className="w-[100%]" src="/image/payment/linkedin.142b2e62975439cef328de236784686e.svg" alt="" />
                </Link>
                <Link className="items-center flex h-[32px] w-[32px]" to="">
                    <img className="w-[100%]" src="/image/payment/tiktok.676d27a4617151b06eb4c27d8f1de065.svg" alt="" />
                </Link>
            </div>
            <span className="text-[16px] font-normal leading-[24px]">
            © 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam
            </span>
        </div>
      </div>
      {/* Arrow up
      <div className="cursor-pointer">
        <div className="items-center bottom-[132px] flex flex-col fixed right-[50px] z-[333] ">
            <div className="arrow-icon">
                <img className="w-[30px] text-[#fff] text-[26px]" src="/image/payment/arrow-up.a9c398e99328f13333218fc8d6a5911f.svg" alt="" />
            </div>
        </div>
      </div> */}
      {/*  */}
      <img className="absolute bottom-0 right-0" src="/image/payment/bottom-bg.97b203da81cf6e72b64a.png" alt="" />
    </div>
  );
};

export default Payment;
