import React from "react";
import "./AboutUs.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section className="index-module_grid w-[100%] p-0 my-0 mx-auto">
      <div className="About_wrapper">
        <section className="index-module_wide__3c1pI p-0 my-0 mx-auto w-[100%] max-w-[1110px]">
          <section className="index-module_row min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
            <section className="About_wrapper_img min-[1113px]:w-[50%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[50%] px-1">
              <img
                className="h-[100%] object-cover border-0 block max-w-[100%] w-[100%]"
                src="/image/f8-og-image.245ebc1d5d7a5240254c.png"
                alt=""
              />
            </section>
            <section className="About_introText min-[1113px]:w-[50%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[50%] px-1">
              <div className="About_text ml-6">
                <h1 className="About_heading">BẠN CÓ BIẾT?</h1>
                <p>
                  Ngoài kia có rất nhiều bạn làm sai nghề, tư duy an phận và bị
                  chôn chân với một công việc không đủ vui, không đủ sống, các
                  bạn ấy gặp hết khủng hoảng tuổi này tới tuổi kia.
                </p>
                <p>
                  Tuổi 22 đang ngỡ ngàng không biết mình nên làm nghề gì. Tuổi
                  28 thì bàng hoàng không biết lương như mình thì lập gia đình
                  và nuôi dạy con cái làm sao. Tuổi 40 nuối tiếc thanh xuân của
                  mình liệu có phải đã phí hoài không nhỉ...
                </p>
              </div>
            </section>
            <section className="index-module_col__2EQm9 min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 pl-0 pr-1">
              <div className="mt-11">
                <p>
                  Mọi chuyện sẽ rất khác nếu họ được định hướng công việc phù
                  hợp, biết cách đặt cho mình một mục tiêu rõ ràng và có đầy đủ
                  kĩ năng cần thiết để phát triển sự nghiệp.
                </p>
                <p>
                  F8 tin rằng con người Việt Nam không hề thua kém gì so với con
                  người ở bất cứ nơi đâu. Con rồng cháu tiên hoàn toàn có thể
                  trở thành công dân toàn cầu để sánh vai cùng các cường quốc
                  năm châu.
                </p>
                <p>
                  F8 mong muốn trở thành một tổ chức góp phần tạo nên sự thay
                  đổi đó, và việc tạo ra cộng đồng học lập trình mới chỉ là điểm
                  bắt đầu. Chúng tôi đang nỗ lực tạo ra các khóa học có nội dung
                  chất lượng vượt trội, giúp học viên sau khi hoàn thành khóa
                  học có thể trở thành những lập trình viên luôn được nhiều công
                  ty săn đón.
                </p>
              </div>
            </section>
          </section>
        </section>
      </div>
      <section className="index-module_wide__3c1pI p-0 my-0 mx-auto max-w-[1110px]">
        <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
          <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 px-1">
            <div className="About_goal min-h-[100px] pt-7 px-0 pb-[52px] ">
              <h2 className=" text-[#0c71c3] text-[24px] mb-2 mt-8 uppercase">
                Tầm nhìn
              </h2>
              <p className="mb-4 mt-0 text-[#404040] text-[18px] leading-[32px]">
                Trở thành công ty công nghệ giáo dục có vị thế vững vàng trên
                thị trường, với các sản phẩm hỗ trợ học lập trình chất lượng,
                thông minh và hiệu quả. F8 sẽ nổi tiếng bởi chất lượng sản phẩm
                vượt trội và được cộng đồng tin tưởng chứ không phải vì tiếp thị
                tốt.
              </p>
              <h2 className=" text-[#0c71c3] text-[24px] mb-2 mt-8 uppercase">
                GIÁ TRỊ CỐT LÕI
              </h2>
              <p className="mb-4 mt-0 text-[#404040] text-[18px] leading-[32px]">
                <strong>Sự tử tế:</strong>
                &nbsp;Tử tế trong chính người F8 với nhau và tử tế với học viên
                là kim chỉ nam phấn đấu. Đã làm sản phẩm là phải chất lượng và
                chứng minh được hiệu quả, bất kể là sản phẩm miễn phí hay giá
                rẻ. Làm ra phải thấy muốn để người thân mình dùng.
              </p>
              <p className="mb-4 mt-0 text-[#404040] text-[18px] leading-[32px]">
                <strong>Tư duy số: </strong>
                Sản phẩm làm ra không phải là để vừa lòng đội ngũ trong công ty.
                Sản phẩm làm ra với mục tiêu cao nhất là người học thấy dễ học,
                được truyền cảm hứng tự học, học tới bài học cuối cùng và người
                học có thể tự tay làm ra những dự án bằng kiến thức đã học.
              </p>
              <p className="mb-4 mt-0 text-[#404040] text-[18px] leading-[32px]">
                <strong>Luôn đổi mới và không ngừng học: </strong>
                Học từ chính đối thủ, học từ những công ty công nghệ giáo dục
                tốt trên thế giới và luôn luôn lắng nghe mọi góp ý từ phía học
                viên.
              </p>
              <p className="mb-4 mt-0 text-[#404040] text-[18px] leading-[32px]">
                <strong>Tư duy bền vững: </strong>
                Có hai thứ đáng để đầu tư giúp mang lại thành quả tài chính tốt
                nhất trong dài hạn của một công ty đó là nhân viên và khách
                hàng.
              </p>
            </div>
          </section>
        </section>
      </section>
      <div className="About_whatToSale h-[280px] mb-[360px]">
        <section className="index-module_wide max-w-[1110px] w-[100%] my-0 mx-auto p-0">
          <section className="min-[1113px]:-mx-3 min-[740px]:mx-2 flex flex-wrap -mx-1">
            <section className="About_content min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px] px-1">
              <h3 className="About_heading__AoPVO text-[#0c71c3] text-[24px] text-center uppercase">
                Bạn nhận được gì từ F8?
              </h3>
              <div className="flex flex-wrap mt-9">
                <div className="About_gridItem text-[18px] leading-[32px]">
                  <h4 className="About_heading__AoPVO2 mt-0 text-[#000] text-[18px] mb-0 ">
                    1. Sự thành thạo
                  </h4>
                  Các bài học đi đôi với thực hành, làm bài kiểm tra ngay trên
                  trang web và bạn luôn có sản phẩm thực tế sau mỗi khóa học.
                </div>
                <div className="About_gridItem text-[18px] leading-[32px]">
                  <h4 className="mt-0 text-[#000] text-[18px] mb-0 ">
                    2. Tính tự học
                  </h4>
                  Một con người chỉ thực sự trưởng thành trong sự nghiệp nếu họ
                  biết cách tự thu nạp kiến thức mới cho chính mình.
                </div>
                <div className="About_gridItem text-[18px] leading-[32px]">
                  <h4 className="mt-0 text-[#000] text-[18px] mb-0 ">
                    3. Tiết kiệm thời gian1
                  </h4>
                  Thay vì chật vật vài năm thì chỉ cần 4-6 tháng để có thể bắt
                  đầu công việc đầu tiên với vị trí Intern tại công ty IT.
                </div>
                <div className="About_gridItem text-[18px] leading-[32px]">
                  <h4 className="mt-0 text-[#000] text-[18px] mb-0 ">
                    4. Làm điều quan trọng
                  </h4>
                  Chỉ học và làm những điều quan trọng để đạt được mục tiêu đi
                  làm được trong thời gian ngắn nhất.
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>

      <section className="index-module_grid__1q71E max-w-[1110px] w-[100%] my-0 mx-auto p-0">
        <section className="min-[1113px]:-mx-3 min-[740px]:mx-2 flex flex-wrap -mx-1">
          <section className="index-module_col min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px] px-1">
            <div className="About_strategy pb-[60px] text-[18px] leading-[32px]">
              <h3 className="text-[#0c71c3] text-[24px] text-center uppercase">
                Chiến lược phát triển
              </h3>
              <h4 className="text-[#000] mb-0">
                1. Coi trọng đào tạo và phát triển nhân tài
              </h4>
              <p className="mt-2 text-[#404040]">
                F8 tin rằng sản phẩm tuyệt vời chỉ có thể tạo ra bởi những con
                người tài năng. Công ty muốn tăng trưởng nhanh bền vững phải có
                những nhân sự xuất sắc có tâm, có tài. Vì vậy, F8 không ngừng
                tìm kiếm và phát triển những cá nhân tài năng cùng xây dựng bộ
                máy. Nếu bạn muốn được làm cùng với những người giỏi giang khác?
                Bạn muốn được chủ động quyết định trong công việc của mình? Và
                bạn muốn được tương thưởng xứng đáng? Hãy về với F8 😍
              </p>
              <div className="About_textHorizontalWithImg flex">
                <div className="About_textBlock">
                  <h4 className="text-[#000] mb-0">
                    2. Sản phẩm làm ra là phải chất lượng, là phải bán được
                  </h4>
                  <p className="mt-2 text-[#404040]">
                    F8 làm ra những sản phẩm phục vụ thị trường lớn, chất lượng
                    và hiệu quả thực sự, đáp ứng nhu cầu cấp thiết của học viên.
                    Mỗi khóa học, mỗi bài giảng của F8 không phải được làm ra
                    bởi chỉ một người. Mà đó là tổng hoà chuyên môn của người
                    dạy, sales, marketing, lập trình viên, đạo diễn hình ảnh và
                    âm thanh… Khúc nào cũng phải cố benchmarking, tự tin đứng
                    cạnh các sản phẩm của thế giới. Tức là làm một cách thông
                    minh và xâu chuỗi nhiều loại hiểu biết khác nhau.
                  </p>
                </div>
                <img
                  className="About_img"
                  src="/image/img_about_us/about-1.c8179beb513c0a025314.png"
                  alt=""
                />
              </div>
              <div className="About_textHorizontalWithImg flex-row-reverse flex">
                <div className="About_textBlock ml-[52px] mr-auto flex-1">
                  <h4 className="text-[#000] mb-0">
                    3. Tập trung vào khách hàng
                  </h4>
                  <p className="mt-2 text-[#404040]">
                    Khi học lập trình phần đông học viên dễ bị mất định hướng,
                    dễ nản khi gặp khó khăn mà không ai giúp đỡ, nhiều khi thấy
                    làm giống hệt video rồi mà không chạy... Tại F8, chúng tôi
                    thấu hiểu những khó khăn của các bạn, chúng tôi nỗ lực tạo
                    ra giáo trình và hệ thống bài tập, hệ thống hỗ trợ các bạn
                    tối đa trong quá trình học tập.
                  </p>
                </div>
                <img
                  className="About_img"
                  src="/image/img_about_us/about-2.9172a49089c8c29156f7.png"
                  alt=""
                />
              </div>
              <p className="mt-2 text-[#404040]">
                F8 tin rằng trong mỗi chúng ta luôn tồn tại một "đứa trẻ", để
                đứa trẻ đó học tốt một kiến thức mới thì sản phẩm không thể chỉ
                thành công về mặt học thuật, mà phải tạo được thật nhiều cảm
                xúc. F8 thiết kế hành trình cảm xúc đó bằng hình ảnh, âm thanh,
                bằng các nội dung xu hướng, bằng cách ghi nhận sự nỗ lực của học
                viên và luôn tạo cảm hứng học tập.
              </p>
              <div className="About_textHorizontalWithImg flex">
                <div className="About_textBlock">
                  <h4 className="text-[#000] mb-0">
                    4. Bán hàng và chăm sóc khách hàng bền vững
                  </h4>
                  <p className="mt-2 text-[#404040]">
                    Việc bán hàng sẽ trở nên rất dễ dàng khi khách hàng sử dụng
                    hiệu quả và truyền tai nhau về sản phẩm. Thành công về mặt
                    doanh số không quan trọng bằng việc người học đánh giá cao
                    sản phẩm sau đó tiếp tục sử dụng, thậm chí còn giới thiệu
                    cho người thân và bạn bè. F8 là một trong những công ty giáo
                    dục, có lẽ là duy nhất đầu tư rất nhiều ngân sách vào việc
                    chăm sóc khách hàng, thay vì bỏ tiền đi đánh bóng tên tuổi.
                    F8 sẽ tìm mọi cách để dần đạt được con số 99% khách hàng hài
                    lòng.
                  </p>
                  <p className="mt-2 text-[#404040]">
                    <em>
                      1% còn lại là những con người của F8, chúng tôi không cho
                      phép bản thân mình cảm thấy hài lòng hoàn toàn về sản
                      phẩm. Đó chính là động lực để chúng tôi liên tục cải
                      thiện, liên tục phát triển và tạo ra các sản phẩm hỗ trợ
                      học tập chất lượng cho cộng đồng.
                    </em>
                  </p>
                </div>
                <img
                  className="About_img"
                  src="/image/img_about_us/about-3.61ca6adf22cc550c0c03.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </section>
      </section>
      <div className="About_environment">
        <section className="index-module_wide__3c1pI max-w-[1110px] w-[100%] my-0 mx-auto p-0">
          <section className="min-[1113px]:-mx-3 min-[740px]:mx-2 flex flex-wrap -mx-1">
            <section className="index-module_l-12__340Ve min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px] px-1">
              <h3 className="About_heading text-[24px] text-center uppercase">
                Môi trường làm việc
              </h3>
              <p>
                Môi trường làm việc lành mạnh. Không toxic, không gossip, trong
                công việc thử thách hết mình nhưng ngoài công việc không bè phái
                ganh đua hay tấn công gì nhau.
              </p>
              <p>
                Quan điểm làm việc của F8 là dân chủ, sếp có thể sai nhưng tổ
                chức phải đúng. Sai thì nhận và sửa. Nhân viên thoải mái nói lên
                chính kiến của mình. Trên dưới lắng nghe và cởi mở với góc nhìn
                của nhau, quyết tâm vì mục tiêu chung.
              </p>
              <p>
                Tỷ lệ nghỉ việc tại các bộ phận chuyên môn cao dưới 5%, nhưng
                đối với F8 đúng người đúng việc sẽ quan trọng hơn. Các bạn được
                thử thách với công việc mới khi đã làm tốt chuyên môn cũ và công
                ty luôn sẵn sàng đầu tư cho nhân viên đi học thêm các kỹ năng
                cần thiết cho công việc. Quan điểm của F8, nhân viên là người
                bạn đồng hành cùng sự phát triển của công ty, luôn sẵn sàng giúp
                nhân viên có cuộc sống cân bằng và phát triển chuyên môn tối đa.
              </p>
              <div className="About_quote">
                Quan điểm của F8 chúng mình là không phải bạn đi xin việc và
                công ty cũng không đi xin ứng viên tài năng. F8 tôn trọng thời
                gian và sự quan tâm của các bạn tới chúng mình. Nếu có điều gì
                không hài lòng về quy trình tuyển dụng của công ty, hãy góp ý
                nhẹ vào
                <Link className="text-[#0000ee]" to="">
                  {" "}
                  contact@fullstack.edu.vn{" "}
                </Link>
                nhé. F8 cảm ơn bạn đã quan tâm và rất mong chờ gặp bạn tại F8 😍
              </div>
            </section>
          </section>
        </section>
      </div>
      <section className="index-module_wide__3c1pI max-w-[1110px] w-[100%] my-0 mx-auto p-0">
        <section className="min-[1113px]:-mx-3 min-[740px]:mx-2 flex flex-wrap -mx-1">
          <section className="index-module_l-12__340Ve min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px] px-1">
            <div className="About_recruitment pt-8 px-0 pb-[64px] text-[18px] leading-[32px]">
              <h3 className="text-[#0c71c3] text-[24px] text-center uppercase">
                Vị trí dành cho các bạn đam mê làm giáo dục
              </h3>
              <p className="text-[#404040]">
                F8 tin rằng mỗi người đều có những tiềm năng vô hạn để trở nên
                giỏi giang. Vấn đề là họ không áp dụng đúng phương pháp để việc
                học hiệu quả hơn. Vì vậy F8 mong muốn giúp cho những người gặp
                khó khăn trong việc học hành nói chung và học lập trình nói
                riêng được tiếp cận các phương pháp, kinh nghiệm học lập trình
                thông minh để trở nên giỏi thực sự.
              </p>
              <p className="text-[#404040]">
                Bạn muốn đồng hành với F8 để cùng nhau thực hiện những điều trên
                chứ?
              </p>
              <div className="flex flex-wrap mt-7">
                <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group ">
                  <div>
                    <h4 className="font-semibold text-[18px] leading-[14px] mb-1 mt-0 group-hover:text-[#DC143C]">
                      Fresher/Mid Tester
                    </h4>
                    <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                      $ Mức lương:
                      <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                        {" "}
                        8.000.000 - 15.000.000
                      </span>
                    </div>
                    <div className="mt-4 flex"></div>
                  </div>
                  <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">
                    một năm trước
                  </div>
                </div>
                <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
                  <div>
                    <h4 className="font-semibold text-[18px] leading-[14px] mb-1 mt-0 group-hover:text-[#DC143C]">
                      Fresher/Mid Tester
                    </h4>
                    <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                      $ Mức lương:
                      <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                        {" "}
                        8.000.000 - 15.000.000
                      </span>
                    </div>
                    <div className="mt-4 flex"></div>
                  </div>
                  <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">
                    một năm trước
                  </div>
                </div>
                <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
                  <div>
                    <h4 className="font-semibold text-[18px] leading-[14px] mb-1 mt-0 group-hover:text-[#DC143C]">
                      Fresher/Mid Tester
                    </h4>
                    <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                      $ Mức lương:
                      <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                        {" "}
                        8.000.000 - 15.000.000
                      </span>
                    </div>
                    <div className="mt-4 flex"></div>
                  </div>
                  <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">
                    một năm trước
                  </div>
                </div>
                <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
                  <div>
                    <h4 className="font-semibold text-[18px] leading-[14px] mb-1 mt-0 group-hover:text-[#DC143C]">
                      Fresher/Mid Tester
                    </h4>
                    <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                      $ Mức lương:
                      <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                        {" "}
                        8.000.000 - 15.000.000
                      </span>
                    </div>
                    <div className="flex mt-4 group-hover:text-[#DC143C] ">
                      <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">
                        PHP
                      </div>
                      <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">
                        Laravel
                      </div>
                      <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">
                        MySQL
                      </div>
                      <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">
                        REST API
                      </div>
                    </div>

                    <div className="mt-4 flex"></div>
                  </div>
                  <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">
                    một năm trước
                  </div>
                </div>
              </div>
              <button className="base-module_button__2kgqC">
                <div className="py-3 px-5 items-center flex h-[100%] justify-center">
                  <span className="base-module_text__1MM8s">Tìm hiểu thêm</span>
                </div>
              </button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
