import React from 'react'
import "./PostDetail.css";
function PostDetail() {
  return (
    <section className='w-[100%] p-0 mt-0 mb-[80px] mx-auto '>
        <section className='flex flex-wrap min-[1113px]:ml-[8px] min-[1113px]:mr-[-12px] min-[740px]:ml-[-8px] min-[740px]:mr-[-8px] '>
            <section className='min-[1113px]:ml-[8.3%] min-[1113px]:w-[16.66667%] min-[1113px]:block min-[1113px]:pl-[12px] min-[1113px]:pr-[12px] min-[740px]:hidden min-[740px]:pl-[-8px] min-[740px]:pr-[-8px]'>
                <div className='user pr-12 '>
                    <a href="">
                        <h4 className='text-[#292929] text-[16px] leading-[26px] font-semibold mb-0'>Alan King</h4>
                    </a>
                    <p className='text-[#757575] text-[14px] mt-1 pl-[178px]'></p>
                    <hr />
                    <div className='flex text-[#757575] text-[16px] mt-6'>
                        <div className='py-1 px-2 select-none'>
                        <i className="text-[20px] fa-regular fa-heart"></i>
                        <span className='ml-2'>15</span>
                        </div>

                        <div className='py-1 px-2 select-none ml-6'>
                        <i className="text-[20px] fa-regular fa-comment"></i>
                        <span className='ml-2'>18</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='min-[1113px]:w-[50%] min-[1113px]:block min-[1113px]:pl-[12px] min-[1113px]:pr-[12px] min-[740px]:w-[100%] min-[740px]:block min-[740px]:pl-[-8px] min-[740px]:pr-[-8px]'>
                <div>
                    <h1 className='text-[#222] text-[40px] font-bold my-[27px] mx-0'>Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới</h1>
                    <div className='flex items-center justify-between mb-7'>
                        <div className='flex'>
                            <a href="">
                                <div className='avatar flex text-[5.6px] items-center justify-center relative p-1 rounded-[50%]'>
                                    <img className='rounded-[50%] h-[9em] object-cover w-[9em] border-none' src="https://files.fullstack.edu.vn/f8-prod/user_avatars/391289/65e2b1c101de2.png" alt="" />
                                    <img className='h-[3.2em] absolute right-[-1.7em] top-[-0.2em] ' src="https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg" alt="" />
                                </div>
                            </a>
                            <div className='flex flex-col text-[14px] justify-center ml-3 '>
                                <a  href=""><span className='text-[#292929] text-[16px] leading-[26px] font-semibold mb-0'>Alan King</span></a>
                                <p className='text-[#757575] m-0'>
                                    10 tháng trước
                                    <span className='text-[#757575] font-medium py-0 px-1 '>·</span>
                                    2 phút đọc
                                </p>
                            </div>
                        </div>
                        <div className='text-[#757575] flex text-[16px] mr-[-8px] select-none'>
                            <div className='text-[#757575] cursor-pointer py-1 px-2'>
                            <i class="fa-regular fa-bookmark"></i>
                            </div>
                            <div className='text-[#757575] cursor-pointer py-1 px-2'>
                            <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                    <div className='text-[18px] leading-9 text-[#292929] break-words'>
                        <p className='my-[6px] mx-0'>Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng đủ để dùng và phát triển. Tuy nhiên, xu hướng mới là webapp nên tôi phải cung cấp tool, giao diện người dùng... thông qua đó. Phải nói rất tốt cho công việc chung.</p>
                        <p className='my-[6px] mx-0'>Nền tảng tôi dùng đã cung cấp sẵn các công cụ để xây dựng app dựa trên các widget có sẵn với khả năng tùy biến nhất định. Tuy nhiên, nhu cầu của người dùng và đặc thù công việc là vô cùng phong phú. Vì vậy, nền tảng cũng cung cấp cho SDK để phát triển widget để nhồi vào app. Yêu cầu dùng TypeScript và React. Mục tiêu là viết các widget có thể "nói chuyện" với nhau, truyền thông tin, propertíes qua lại lẫn nhau.</p>
                        <p className='my-[6px] mx-0'>Tiếc là tài liệu và bài học về SDK của nền tảng hoặc quá sơ sài, mặc định người dùng biết hết rồi, hoặc rời rạc do bản thân React cũng đã thay dổi, updata...
                        của bên F8 thì đã đi được hơn một nửa khóa học thì cũng đã nắm được ổn kiến thức này, mình dự định khi F8 mở khóa JSPro thì mình đăng ký học. Cũng đã đăng ký học tiếng anh để trao dồi thêm kiến thức của bản thân.</p>
                        <p className='my-[6px] mx-0'>Mình thấy hoa cả mắt khi nhìn thấy cấu trúc file pack trong một dự án, rồi file này nối sang file kia. Bản thân mình rất quen thuộc với việc viết module trên python, nhưng đúng là chạm vào thế giới JS thấy có vẻ phức tạp hơn.</p>
                        <p className='my-[6px] mx-0'>Xem một số bài học của F8 thấy ít nhất là có giải thích cho người ta hiểu cái gì là cái gì, tại sao như vậy rồi nó làm việc ra sao. Quyết định đăng ký học để xem liệu mình có hiểu để viết được widget trên SDK nền tảng của mình ko.</p>
                        <p className='my-[6px] mx-0'>Có tuổi rồi, học gì cũng ngại...</p>
                        
                    </div>
                    <div className='mt-[60px]'>
                        <div className='text-[#757575] flex text-[16px] mt-6'>
                        <div className='py-1 px-2 select-none'>
                        <i className="text-[20px] fa-regular fa-heart"></i>
                        <span className='ml-2'>15</span>
                        </div>

                        <div className='py-1 px-2 select-none ml-6'>
                        <i className="text-[20px] fa-regular fa-comment"></i>
                        <span className='ml-2'>18</span>
                        </div>
                        </div>
                    <div className='flex flex-wrap mt-12'>
                        <a className='bg-[#f2f2f2] rounded-[3px] text-[#666] text-[14px] mt-2 mr-2 py-1 px-[10px]' href="">Front-end</a>
                        <a className='bg-[#f2f2f2] rounded-[3px] text-[#666] text-[14px] mt-2 mr-2 py-1 px-[10px]' href="">Tư vấn</a>
                        <a className='bg-[#f2f2f2] rounded-[3px] text-[#666] text-[14px] mt-2 mr-2 py-1 px-[10px]' href="">DAU</a>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[22px] leading-[35px] font-semibold'>Bài đăng cùng tác giả</h3>
                        <p className='text-[#757575] text-[16px] leading-[26px]'>Tác giả chưa có bài đăng nào khác.</p>
                    </div>
                    <div className='border-solid border-t-[3px] border-[#F05123] mt-[100px] pt-[32px]'>
                        <h2 className='text-[32px] font-semibold'>Bài viết nổi bật khác</h2>
                        <div className='border-b-[1px] border-solid border-[#e6e6e6] mt-12 '>
                            <div className='text-[15px]'>Đăng bởi
                            <a href=""><strong className='text-[#333] font-semibold'> Sơn Đặng</strong></a>
                            <strong className='text-[#757575] font-medium py-0 px-2'>·</strong>
                            <span className='text-[#757575]'>3 năm trước</span>
                            </div>
                        <a href="">
                            <h3 className='text-[#292929] text-[32px] leading-[51px] font-bold mb-1 mt-3'>Tổng hợp các sản phẩm của học viên tại F8 👏👏</h3>
                        </a>
                        <div className='text-[#757575] font-medium text-[32px]'></div>
                        <a href="">
                            <img className='bg-[#ebebeb] rounded-[16px] text-[#757575] block text-[16px] h-[320px] mb-4 mt-6 object-cover overflow-hidden text-center w-[100%]' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png" alt="Tổng hợp các sản phẩm của học viên tại F8 👏👏" />
                        </a>
                        <div className='img-mask text-[18px] max-h-[420px] leading-[36px] overflow-hidden text-[#292929] break-words'>
                            <p className='my-[6px] mx-0'>
                            Bài viết này nhằm tổng hợp lại các dự án mà học viên 
                            <a className='text-[#F05123] underline mx-[4px]' href="">F8</a>
                            đã hoàn thành và chia sẻ trên nhóm 
                            <a className='text-[#F05123] underline mx-[4px]' href="">Học lập trình web F8</a>
                            . Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.
                            </p>
                            <blockquote className='border-l-[3px] border-[#F05123] text-[#757575] ml-0 pb-[2px] pl-5'>
                                <p className='m-0'>
                                <a className='text-[#F05123] underline mx-[4px]' href="">Xem thêm hàng trăm dự án khác do học viên tại F8 tự làm.</a>
                                </p>
                            </blockquote>
                            <hr className='bg-[#ddd] h-[1px] my-10 mx-0 overflow-visible box-content' />
                            <h2 className='text-[#666]'>
                                <a className='text-[#666] hidden text-[18px] ml-[-28px] no-underline w-[28px]' href=""></a>
                                MANCHESTER UNITED
                            </h2>
                            <p className=' my-[6px] mx-0'>
                                <img className=' max-w-[100%] border-none' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139e2ba0f350.png" alt="" />
                            </p>
                            {/* ul */}
                        </div>
                        <a className='text-[#F05123] inline-block text-[16px] font-medium pt-8 pb-12' href="">
                        Xem tiếp 
                        <span className='text-[#F05123] text-[16px] font-medium mx-[5px]'>·</span>
                        6 phút đọc
                        </a>
                        
                        </div>
                        <div className='border-b border-solid border-[#e6e6e6] text-[16px] mt-12'>
                        <div className='text-[15px]'>Đăng bởi
                            <a href=""><strong className='text-[#333] font-semibold'> Sơn Đặng</strong></a>
                            <strong className='text-[#757575] font-medium py-0 px-2'>·</strong>
                            <span className='text-[#757575]'>2 năm trước</span>
                            </div>
                            <a href="">
                                <h3 className='text-[#292929] text-[32px] font-bold mb-1 mt-3'>[Phần 1] Tạo dự án ReactJS với Webpack và Babel</h3>
                            </a>
                            <div className='text-[#757575] text-[2px] font-medium'></div>
                            <a href="">
                                <img className='bg-[#ebebeb] rounded-[16px] text-[#757575] block text-[16px] h-[320px] mb-4 mt-6 object-cover overflow-hidden text-center w-[100%]' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg" alt="[Phần 1] Tạo dự án ReactJS với Webpack và Babel" />
                            </a>
                            <div className='img-mask text-[18px] max-h-[420px] leading-[36px] overflow-hidden text-[#292929] break-words '>
                                <p className='my-[6px] mx-0'>Chào mọi người 🤗🤗</p>
                                <p className='my-[6px] mx-0'>Hôm nay mình có quay một video trong 
                                <a className='text-[#F05123] underline mx-[4px]' href="">khóa học ReactJS</a>
                                là "Tạo dự án ReactJS với Webpack và Babel". Mình làm video này với mong muốn chia sẻ cho các bạn có thể hình dung ra dự án được tạo bởi "create-react-app" được xây dựng như thế nào. Các bạn có thể xem thêm video hướng dẫn ở đây nhé.
                                </p>
                                <p className='my-[6px] mx-0'>
                                    <em><strong>Click vào hình ảnh này để mở video nhé anh em!</strong></em>
                                </p>
                                <p className='my-[6px] mx-0'>
                                    <a href=""><img className='max-w-[100%]' src="http://i3.ytimg.com/vi/1EBe-l1E3pM/maxresdefault.jpg" alt="" /></a>
                                </p>
                            </div>
                            <a className='text-[#F05123] inline-block text-[16px] font-medium pt-8 pb-12' href="">
                        Xem tiếp 
                        <span className='text-[#F05123] text-[16px] font-medium mx-[5px]'>·</span>
                        6 phút đọc
                        </a>
                        
                        <div className='text-[15px]'>Đăng bởi
                            <a href=""><strong className='text-[#333] font-semibold'> Sơn Đặng</strong></a>
                            <strong className='text-[#757575] font-medium py-0 px-2'>·</strong>
                            <span className='text-[#757575]'>2 năm trước</span>
                            </div>
                            <a href="">
                                <h3 className='text-[#292929] text-[32px] font-bold mb-1 mt-3'>Cách đưa code lên Github và tạo GitHub Pages</h3>
                            </a>
                            <div className='text-[#757575] text-[2px] font-medium'></div>
                            <a href="">
                                <img className='bg-[#ebebeb] rounded-[16px] text-[#757575] block text-[16px] h-[320px] mb-4 mt-6 object-cover overflow-hidden text-center w-[100%]' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png" alt="" />
                            </a>
                            <div className='img-mask text-[18px] max-h-[420px] leading-[36px] overflow-hidden text-[#292929] break-words'>
                                <p className='my-[6px] mx-0'>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615424715714d.png" alt="" />
                                </p>
                                <p className='my-[6px] mx-0'>Xin các bạn tại F8, khi mình đọc những bài viết trên nhóm F8 thì mình thấy có nhiều bạn vẫn không biết đưa code lên GitHub, hoặc bị lỗi, hoặc có thể là những bạn mới và đặc biệt là các bạn không biết tạo GitHub Pages ( cụ thể là hiển thị ra trang web để cho mọi người xem á! ). Ok, hôm nay mình sẽ hướng dẫn cụ thể để cho những bạn không biết bấy lâu nay có thể đưa code mình lên GitHub được nhe. Mình là Kha, là một thành viên trong nhóm "</p>
                            </div>
                            <a className='text-[#F05123] inline-block text-[16px] font-medium pt-8 pb-12' href="">
                        Xem tiếp 
                        <span className='text-[#F05123] text-[16px] font-medium mx-[5px]'>·</span>
                        6 phút đọc
                        </a>
                        </div>
                        <div className='text-[15px] mt-[50px]'>Đăng bởi
                            <a href=""><strong className='text-[#333] font-semibold'> Sơn Sơn</strong></a>
                            <strong className='text-[#757575] font-medium py-0 px-2'>·</strong>
                            <span className='text-[#757575]'>2 năm trước</span>
                            </div>
                            <a href="">
                                <h3 className='text-[#292929] text-[32px] font-bold mb-1 mt-3'>Ký sự ngày thứ 25 học ở F8</h3>
                            </a>
                            <div className='text-[#757575] text-[2px] font-medium'></div>
                            <a href="">
                                <img className='bg-[#ebebeb] rounded-[16px] text-[#757575] block text-[16px] h-[320px] mb-4 mt-6 object-cover overflow-hidden text-center w-[100%]' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png" alt="Ký sự ngày thứ 25 học ở F8 " />
                            </a>
                        </div>
                        <div className='img-mask text-[18px] max-h-[420px] leading-[36px] overflow-hidden text-[#292929] break-words'>
                        <p className='my-[6px] mx-0'>Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi. Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1. Sau khi nghe truyền thuyết thằng anh sinh năm 96 học cơ khí bách khoa, tôi đã lao đầu ngay vào học code vì nghe bảo ngành được xã hội trọng dụng, nhắc đến là gái chảy nước( một phần là sợ bị tụt hậu-nghe đồn là ngành IT đào thải nhanh lắm). Khoảng thời gian trước đó việc tìm hiểu học về web tôi còn khá lơ mơ vì trên mạng người ta chỉ loạn cả lên ( không có lộ trình rõ ràng). Đó là khi F8 của anh Sơn xuất hiện, với lộ trình rõ ràng, bài học được chia ra rạch ròi, course-mate  khá là tậm tâm giúp đỡ. Tôi đã có câu hỏi ngớ ngấn nhu bao anh em khác, đó là web này trả phí hả anh Sơn. Tôi cũng khác bất ngờ về việc một người bỏ khác nhiều công sức, làm việc nghiệm túc nhưng lại không thu phí. F8 cho  ta một con đường rõ ràng, không lan man, có thế tiết kiệm được vài tháng đến cả năm. Tôi hy vọng ae học và phát triển cộng đồng này nhiệt tình đề không phí công ông anh Sơn Đặng nhé. Nếu ai hỏi tôi nên học khóa front-end nào cho begginer tôi chắc chắn sẽ recommend F8. Tus này mục đích chủ yếu test thử tính năng Blog .</p>
                        </div>  
                        <a className='text-[#F05123] inline-block text-[16px] font-medium pt-8 pb-12' href="">
                        Xem tiếp 
                        <span className='text-[#F05123] text-[16px] font-medium mx-[5px]'>·</span>
                        1 phút đọc
                        </a>
                    </div>
                    <div className='text-[15px]'>Đăng bởi
                         <a href=""><strong className='text-[#333] font-semibold'> Vương Dương</strong></a>
                         <strong className='text-[#757575] font-medium py-0 px-2'>·</strong>
                         <span className='text-[#757575]'>2 năm trước</span>
                    </div>
                    <a href="">
                                <h3 className='text-[#292929] text-[32px] font-bold mb-1 mt-3'>Các nguồn tài nguyên hữu ích cho 1 front-end developer</h3>
                            </a>
                            <div className='text-[#757575] text-[2px] font-medium'></div>
                            <a href="">
                                <img className='bg-[#ebebeb] rounded-[16px] text-[#757575] block text-[16px] h-[320px] mb-4 mt-6 object-cover overflow-hidden text-center w-[100%]' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png" alt="" />
                            </a>
                            <div className='img-mask text-[18px] max-h-[420px] leading-[36px] overflow-hidden text-[#292929] break-words'>
                                <p className='my-[6px] mx-0'>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1e8d8fc47.jpg" alt="" />
                                </p>
                            </div>
                            <div className='img-mask text-[18px] max-h-[420px] leading-[36px] overflow-hidden text-[#292929] break-words'>
                            </div>
                            <a className='text-[#F05123] inline-block text-[16px] font-medium pt-8 pb-12' href="">
                        Xem tiếp 
                        <span className='text-[#F05123] text-[16px] font-medium mx-[5px]'>·</span>
                        2 phút đọc
                        </a>  
                </div>
                <div>
                    <h3 className='text-[#757575] text-[14px] font-medium leading-[25px]'>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
                    <ul className='flex flex-wrap text-[14px] pl-0 list-none'>
                        <li><a className='bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mr-2 mb-2 py-[6px] px-4 select-none' href="">Front-end / Mobile apps</a></li>
                        <li><a className='bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mr-2 mb-2 py-[6px] px-4 select-none' href="">Back-end / Devops</a></li>
                        <li><a className='bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mr-2 mb-2 py-[6px] px-4 select-none' href="">UI / UX / Design</a></li>
                        <li><a className='bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mr-2 mb-2 py-[6px] px-4 select-none' href="">Others</a></li>
                    </ul>
                </div>
            </section>
                
        </section>
    </section>
  )
}

export default PostDetail