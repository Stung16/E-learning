import React from 'react'
import { FaLink } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import "./Privacy.css"
const Privacy = () => {
  return (
    <div className='App_withSidebarContent pt-0 pl-5 pr-10 flex-1 '>
      <section className='w-[100%] p-0 my-0 mx-auto max-w-[1920px] min-[1113px]:pl-[12px] min-[1113px]:pr-[12px] '>
        <div className='mb-[60px] p-2 pl-[10px] pr-0 '>
          <div className='mb-[80px] '>
            <h1 className='text-[#242424] text-[28px] font-black my-[19px] '>Chính sách bảo vệ thông tin (Privacy)</h1>
            <div className='text-[15px] leading-4 max-w-[840px] text-[#292929] break-words'>
              <p className='my-[6px] mx-0'>Chính sách bảo mật</p>
            </div>
          </div>
          <div className=' min-[1113px]:mx-[-12px] flex flex-wrap'>
            <section className='min-[1113px]:w-4/6 min-[1113px]:block min-[1113px]:pl-3 min-[1113px]:pr-3'>
              <div className='text-[18px] text-[#292929] break-words'>
                <h2 className='group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink  className='text-[22px]' /></Link>
                  1. Thu thập thông tin cá nhân
                </h2>
                <p className='my-[6px] mx-0 leading-[36px]'>
                F8 sẽ thu thập thông tin của Khách hàng bao gồm: Tên đầy đủ; Địa chỉ liên lạc; Email; Số điện thoại; Tên đăng nhập; Mật khẩu đăng nhập để thiết lập hồ sơ cá nhân
                </p>
                <p className='my-[6px] mx-0 leading-[36px]'>Nội dung bao gồm các thông tin bắt buộc khai báo của Khách hàng khi đăng ký tài khoản trên F8;</p>
                <p className='my-[6px] mx-0 leading-[36px]'>Khi thu thập các thông tin cá nhân của Khách hàng, F8 mong muốn cung cấp những tiện ích thiết thực nhất tới Khách hàng, bảo vệ quyền lợi và đảm bảo tôn trọng sự riêng tư cho Khách hàng.</p>
                <p className='my-[6px] mx-0 leading-[36px]'>Trong phạm vi điều khoản, F8 cam kết sẽ không bán, cho thuê hay trao đổi dữ liệu thông tin Khách hàng đã thu thập cho các đối tượng nào khác ngoài đối tượng được liệt kê trong Quy chế này.</p> 
                <hr/>
                <h2 className='font-semibold group group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  2. Sử dụng thông tin cá nhân
                </h2>
                
                <p className='my-[6px] mx-0 leading-[36px]'>Thông tin thu thập từ Khách hàng được sử dụng trong phạm vi:</p>
                <ul className='my-[28px] mx-0 pl-6 leading-[36px] list-disc'>
                  <li>Cung cấp dịch vụ tư vấn cho Khách hàng theo thông tin Khách hàng cung cấp;</li>
                  <li>Gửi Khách hàng các thông báo về hoạt động trao đổi thông tin giữa F8 và thành viên;</li>
                  <li>Đảm bảo an toàn cho Khách hàng khi có nguy cơ phá hủy, chiếm đoạt tài khoản của Khách hàng và hoạt động giả mạo Khách hàng;</li>
                  <li>Liên lạc với Khách hàng để cung cấp hàng hóa/dịch vụ khi Khách hàng mua các sản phẩm hàng hóa/dịch vụ trên website của F8. Xác nhận thông tin khi thực hiện hoạt động mua, giao hàng;</li>
                  <li>Thực hiện các cuộc khảo sát; các hoạt động quảng bá, cung cấp các thông tin cập nhật về điều khoản hoạt động của website có ảnh hưởng đến Khách hàng; Bảo mật thông tin Khách hàng là ưu tiên hàng đầu của F8 khi thu thập dữ liệu thông tin Khách hàng. F8 luôn cố gắng bắt kịp các tiêu chuẩn bảo vệ thông tin các nhân của khách hàng; F8 yêu cầu xác nhận lại mật khẩu khi đăng nhập để chống lại những truy cập trái phép vào hệ thống thông tin cá nhân Khách hàng. Trong trường hợp Khách hàng rời máy tính và chưa đăng xuất trên website, hệ thống sẽ tự động đăng xuất sau một khoảng thời gian</li>
                </ul>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  3. Thời gian lưu trữ thông tin
                </h2>
                <ol className='my-7 mx-0 pl-6 leading-[36px] list-decimal'>
                  <li>F8 sẽ lưu trữ thông tin thu thập từ Khách hàng từ thời điểm Khách hàng khai báo thông tin đến khi tài khoản của Khách hàng ngừng hoạt động.</li>
                  <li>F8 sẽ lưu giữ và sử dụng thông tin của khách hàng khi cần tuân theo nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi các thoả thuận của F8.</li>
                  <li>Khách hàng cũng có thể rút lại sự đồng ý cho phép thu thập, sử dụng và/hoặc tiết lộ dữ liệu cá nhân của khách hàng mà F8 đang lưu giữ hoặc kiểm soát bằng cách gửi email cho Bộ phận Chăm sóc khách hàng của ban quản trị F8 tại địa chỉ email
                  <Link className='text-[#F05123] underline' to=""> contact@fullstack.edu.vn </Link>
                  hoặc qua số điện thoại, và chúng tôi sẽ xử lý các yêu cầu này theo Chính Sách Bảo Mật cũng như quy định pháp luật có liên quan. Tuy nhiên, việc khách rút lại sự đồng ý có thể có nghĩa là F8 sẽ không thể tiếp tục cung cấp Các Dịch Vụ cho khách hàng, và ban quản trị F8 có thể cần phải chấm dứt quan hệ hiện tại của bạn và/hoặc hợp đồng của bạn với F8
                  </li>
                </ol>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  4. Thay đổi hoặc loại bỏ thông tin cá nhân
                </h2>
                <p className='my-[6px] mx-0 leading-[36px]'>Khách hàng có thể tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng các cách sau đây:</p>
                <ul className='my-7 mx-0 pl-6 list-disc leading-[36px]'>
                <li>Khách hàng tự đăng nhập vào tài khoản của mình, vào mục cài đặt và chỉnh sửa thông tin cá nhân;              
                </li>
                <li>Khách hàng gọi điện đến số điện thoại hỗ trợ/email hỗ trợ của Ban quản trị F8 và yêu cầu được chỉnh sửa thông tin cá nhân.
                </li>
                </ul>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  5. Chính sách bảo vệ thông tin cá nhân
                </h2>
                <p className='my-[6px] mx-0 leading-[36px]'>Ban quản trị F8 cam kết bảo mật thông tin cá nhân của Khách hàng theo những nội dung sau:</p>
                <ul className='my-7 mx-0 pl-6 list-disc leading-[36px]'>
                <li>Cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của F8;              
                </li>
                <li>Cam kết bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Khách hàng bao gồm các thông tin về lịch sử giao dịch; thông tin về chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn;
                </li>
                <li>Cam kết không sử dụng, không chuyển giao, không cung cấp hay tiết lộ cho bên thứ ba nào khác về thông tin cá nhân của Khách hàng khi không có sự cho phép từ Khách hàng ngoại trừ điều khoản khác được quy định trong Quy chế này và theo quy định của Pháp luật;
                </li>
                <li>Trong trường hợp phát sinh các lỗi kỹ thuật hoặc bị tấn công dữ liệu, Ban quản trị F8 có trách nhiệm thông báo cho cơ quan chức năng và Khách hàng trong thời gian 03 ngày kể từ khi có sự cố xảy ra.
                </li>
                </ul>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  6. Chính sách bảo vệ thông tin thanh toán
                </h2>
                <p className='my-[6px] mx-0 leading-[36px]'>F8 cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện trên website/ứng dụng của F8</p>
                <strong>Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán gồm:</strong>
                <ul className='my-7 mx-0 pl-6 list-disc leading-[36px] text-[18px]'>
                <li>Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL (Secure Sockets Layer).             
                </li>
                <li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.             
                </li>
                <li>Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.             
                </li>
                <li>Tiêu chuẩn mã hóa MD5 128 bit.            
                </li>
                <li>Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.            
                </li>
                </ul>
                <strong>Chính sách bảo mật giao dịch trong thanh toán của F8 áp dụng với Khách hàng:</strong>
                <ul className='my-7 mx-0 pl-6 list-disc leading-[36px] text-[18px]'>
                <li>F8 chỉ lưu chuỗi đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp cho F8. F8 không trực tiếp lưu trữ thông tin thẻ khách hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.             
                </li>
                <li>Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống của F8. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.           
                </li>
                <li>Đối với thẻ nội địa (internet banking), F8 chỉ lưu trữ mã đơn hàng, mã giao dịch và tên ngân hàng.             
                </li>
                </ul>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  7. Đối tượng chia sẻ thông tin cá nhân
                </h2>
                <ol className='my-7 mx-0 pl-6 leading-[36px] list-decimal'>
                  <li>Ban quản trị F8 có thể chia sẻ, tiết lộ thông tin cá nhân của Khách hàng khi tin rằng việc làm đó là cần thiết để bảo vệ các quyền lợi của Khách hàng, đảm bảo sự an toàn giao dịch cho Khách hàng và theo yêu cầu của bên thứ 3 có thẩm quyền.</li>
                  <li>Ban quản trị F8 có thể chia sẻ thông tin cá nhân của Khách hàng tới nhóm các Công ty nằm trong Tổ hợp Công nghệ Giáo dục F8 Group để nghiên cứu và giới thiệu tới Khách hàng những sản phẩm hàng hóa và dịch vụ tốt hơn tới từng cá nhân Khách hàng.Trong trường hợp Khách hàng không muốn chia sẻ thông tin, F8 hoàn toàn đồng ý khi nhận được yêu cầu từ Khách hàng.</li>
                  <li>F8 có thể tiết lộ thông tin cá nhân của khách hàng theo yêu cầu của luật sư cũng như cơ quan chức năng có thẩm quyền.</li>
                  <li>Nếu F8 tham gia vào sát nhập hoặc được mua lại một phần hay toàn bộ tài sản, khách hàng sẽ được thông báo qua email hoặc qua tin tức chính thức trên trang web của F8 về bất kì sự thay đổi quyền sở hữu hoặc sử dụng thông tin cá nhân của khách hàng, cũng như bất kì quyền của khách hàng nào liên quan đến thông tin cá nhân của khách hàng, tới bất kì bên thứ 3 nào với sự đồng ý của khách hàng.</li>
                  <li>F8 và các đối tác sử dụng Cookies để ghi nhớ thông tin khách hàng khi bạn truy cập vào trang web. Cookies là một mẩu thông tin mà trang web lưu trữ lại ở trình duyệt máy tính hoặc trên ổ cứng của khách hàng khi khách hàng truy cập vào trang web bất kì.</li>
                  <li>F8 sử dụng dịch vụ của bên thứ 3 để giám sát tính hữu dụng của công ty để theo dõi hành vi khách hàng truy cập vào trang web của chúng tôi. Tuy nhiên, chúng tôi không có quyền tham gia hoặc điều chỉnh Cookies của họ. Thông tin chúng tôi thu được thông qua sự theo dõi của bên thứ 3, hoàn toàn ẩn danh và sử dụng để cải thiện dịch vụ và hiệu quả marketing.</li>
                  <li>Như hầu hết các trang web khác, chúng tôi tự động tổng hợp thông tin và lưu trữ chúng trên tập tin lịch sử lưu trữ.Thông tin này bao gồm địa chỉ Internet, loại trình duyệt và ngôn ngữ, nhà cung cấp dịch vụ Internet, trang đến và trang đi, hệ thống vận hành, ngày tháng và thông tin về click chuột. Chúng tôi sử dụng thông tin này để tìm hiểu và phân tích xu hướng, để quản trị trang web đồng thời nghiên cứu hành vi khách hàng, thu thập thông tin cá nhân của người dùng.</li>
                </ol>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  8. Yêu Cầu Xóa Dữ Liệu Cá Nhân
                </h2>
                <p className='my-[6px] mx-0 leading-[36px]'>Chúng tôi tôn trọng và chấp hành quyền riêng tư của người dùng, bao gồm quyền yêu cầu xóa dữ liệu cá nhân. Dưới đây là hướng dẫn chi tiết về cách người dùng có thể yêu cầu xóa dữ liệu của họ:</p>
                <strong>8.1. Liên hệ với Chúng Tôi</strong>
                <p className='my-[6px] mx-0 leading-[36px]'>Nếu bạn muốn yêu cầu xóa dữ liệu cá nhân mà chúng tôi đã thu thập về bạn, vui lòng liên hệ với chúng tôi qua một trong các cách sau:</p>
                <ul className='my-7 mx-0 pl-6 list-disc leading-[36px] text-[18px]'>
                <li>Gửi email đến địa chỉ email:<Link className='text-[#F05123] underline' to=""> contact@fullstack.edu.vn </Link>             
                </li>
                <li>Gọi số điện thoại: 0246.329.1102             
                </li>
                <li>Gửi thư đến địa chỉ: Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội             
                </li>
                </ul>
                <strong>8.2. Định danh Người Dùng</strong>
                <p className='my-[6px] mx-0 leading-[36px]'>Để đảm bảo tính bảo mật và xác thực, chúng tôi có thể yêu cầu bạn cung cấp thông tin để xác định bạn là chủ sở hữu của dữ liệu cá nhân cần xóa. Thông tin này có thể bao gồm tên, địa chỉ email, số điện thoại, và/hoặc các chi tiết xác thực khác mà chúng tôi yêu cầu.</p>
                <strong>8.3. Thời Hạn Xử Lý</strong>
                <p className='my-[6px] mx-0 leading-[36px]'>Chúng tôi cam kết xử lý yêu cầu xóa dữ liệu một cách nhanh chóng và hiệu quả. Thời hạn cụ thể để xử lý yêu cầu sẽ được thông báo cho bạn trong quá trình yêu cầu.</p>
                <strong>8.4. Xóa Dữ Liệu</strong>
                <p className='my-[6px] mx-0 leading-[36px]'>Sau khi chúng tôi xác nhận và xử lý yêu cầu của bạn, dữ liệu cá nhân liên quan sẽ được xóa hoặc vô hiệu hóa theo các quy định về bảo quản dữ liệu.</p>
                <p className='my-[6px] mx-0 leading-[36px]'>Chúng tôi luôn lắng nghe ý kiến và phản hồi từ người dùng, và chúng tôi cam kết duy trì tính minh bạch và tuân thủ đối với quyền riêng tư của bạn. Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu bổ sung, vui lòng liên hệ với chúng tôi theo thông tin liên hệ ở mục 8.1.</p>
                <p className='my-[6px] mx-0 leading-[36px]'>Các dịch vụ hỗ trợ cụ thể như sau:</p>
                <hr />
                <h2 className='font-semibold group'>
                  <Link className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px] group-hover:inline-block' to=""><FaLink className='text-[22px]' /></Link>
                  9. Địa chỉ lưu trữ thông tin
                </h2>
                <p className='my-[6px] mx-0 leading-[36px]'>Mọi thông tin của Khách hàng được lưu trữ tại địa chỉ:</p>
                <strong>CÔNG TY TNHH CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</strong>
                <ul className='my-7 mx-0 pl-6 list-disc leading-[36px] text-[18px]'>
                <li><strong>Email:</strong><Link className='text-[#F05123] underline' to=""> contact@fullstack.edu.vn </Link>             
                </li>
                <li><strong>Điện thoại: </strong>0246.329.1102    
                </li>
                <li><strong>Địa chỉ:</strong> Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội          
                </li>
                </ul> 
                <p className='my-[6px] mx-0 leading-[36px]'>Một số đề mục trong chính sách bảo mật của F8 có thể thay đổi. Nếu chúng tôi quyết định thay đổi cách thức thu thập, sử dụng hoặc chia sẻ thông tin, chúng tôi sẽ thương mại hoá các bước để thông báo tới các thành viên bằng email và giải trình sự thay đổi đó và đưa ra lựa chọn có cho phép hay không việc sử dụng thông tin cá nhân của khách hàng trên các thay đổi mới.</p>
                <p className='my-[6px] mx-0 leading-[36px]'>Nếu bạn có bất kì câu hỏi nào về hệ thống chính sách, hoặc bất kì thắc mắc về F8, vui lòng liên hệ với chúng tôi theo thông tin sau để được hỗ trợ kịp thời.</p>
                <hr />
              </div>
            </section>
            <section className='index-module min-[1113px]:w-2/6 min-[1113px]:pl-[126px] min-[1113px]:pr-3 pl-[100px]'>
              <div className='sticky top-[80px]  flex justify-end '>
              <div className='Banners_content flex flex-col max-w-[300px] pl-[2px]'>
                <Link className='mt-[32px]' to="">
                  <img className='max-w-[100%] w-[100%] rounded-lg object-cover opacity-100 hover:opacity-80' src="image/img_baiviet/63dc61f2a061e.png" alt="" />
                </Link>
                <Link className='mt-[32px]' to="">
                  <img className='max-w-[100%] w-[100%] rounded-lg object-cover opacity-100 hover:opacity-80' src="image/img_baiviet/6421144f7b504.png" alt="" />
                </Link>
              </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy