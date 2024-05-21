import React, { useCallback, useEffect, useState } from "react";
import "./Banking.css";
import { Link, useLocation } from "react-router-dom";
import { handleInforBanking } from "../../services/payment.service";
import Loading from "../../components/Loading/Loading";
import Countdown from "../../components/Btn/CountDown";
const Banking = () => {
  const { pathname } = useLocation();
  const [inforPayment, setInforPayment] = useState(null);
  const [loading, setLoading] = useState(false);
  const slugCourse = useCallback(
    (id) => {
      return pathname?.split("/")?.[id];
    },
    [pathname]
  );
  useEffect(() => {
    const fetcher = async () => {
      try {
        setLoading(true);
        const res = await handleInforBanking(slugCourse(2));
        if (res?.data?.status === 200) {
          setInforPayment(res?.data?.data);
        } else {
          window.location.href = "/";
        }
        console.log(res);
      } catch (error) {
        window.location.href = "/";
      } finally {
        setLoading(false);
      }
    };
    fetcher();
  }, [pathname, slugCourse(2)]);
  console.log(inforPayment);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="banking_main bg-[#272a31]">
          <Link
            to="/payment"
            className="text-[#fff] cursor-pointer text-[36px] fixed pt-3 px-6 pb-6 right-[8px] top-0 z-[9999]"
          >
            ×
          </Link>
          <div className="p-0 flex flex-col overflow-hidden overflow-y-hidden relative w-[100%] z-[1]">
            <div className="flex h-[100%] w-[100%]">
              <div className="border-r border-solid border-[#333c6d] h-[100%] py-5 px-7 w-[360px]">
                <div className="">
                  <span className="text-[#dae4f0] text-[18px] block font-medium mt-2 w-[100%]">
                    Đang chờ thanh toán
                  </span>
                  <span className="mr-[18px] mt-2">
                    <span className="loading1"></span>
                    <span className="loading2"></span>
                    <span className="loading3"></span>
                  </span>
                </div>
                {/* time */}
                <div>
                  <h1 className="text-[#dae4f0] text-[24px] font-medium text-center">
                    <p className="font-medium">
                    <Countdown initialMinutes={1} initialSeconds={30} />
                    </p>
                  </h1>
                </div>
                <hr className=" rounded-[20px] border-t border-solid border-[#333c6d] my-4 mx-0 w-[100%]" />
                <div>
                  <span className="text-[#dae4f0] block text-[18px] font-medium mt-4 w-[100%]">
                    Tên khóa học:
                  </span>
                  <h2 className="text-[#dae4f0] text-[16px] font-bold mt-2">
                    {inforPayment?.title}
                  </h2>
                </div>
                <div>
                  <span className="text-[#dae4f0] block text-[18px] font-medium mt-4 w-[100%]">
                    Mã đơn hàng:
                  </span>
                  <h2 className="text-[#fa8c16] text-[16px] font-bold mt-2">
                    {inforPayment?.content}
                  </h2>
                </div>
                <hr className=" rounded-[20px] border-t border-solid border-[#333c6d] my-4 mx-0 w-[100%]" />
                <div className="items-center flex gap-[8px] my-6 mx-0 relative">
                  <input
                    className="bg-[#323c4a] border border-solid border-[transparent] rounded-[8px] text-[#fff] text-[14px] font-normal h-[36px] leading-[24px] outline-none py-0 px-4 w-[100%]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Nhập mã khuyến mãi"
                  />
                  <button className="Payment_submit-btn">
                    <span className="items-center bg-[#191d1e] rounded-[6px] text-[#fff] flex text-[12px] font-bold h-[100%] justify-center leading-[24px] py-0 px-2 uppercase transition-[.3s] w-[100%] whitespace-nowrap">
                      Áp dụng
                    </span>
                  </button>
                </div>
                <div>
                  <div>
                    <span className="text-[#dae4f0] text-[18px] font-medium">
                      Chi tiết thanh toán:
                    </span>
                    <div className="items-center bg-[#202425] rounded-[8px] flex flex-wrap mt-[10px] py-[18px] px-3">
                      <div className="items-center flex flex-wrap justify-between mb-3 w-[100%]">
                        <span className="text-[#dae4f0] text-[16px] font-medium">
                          Giá bán:
                        </span>
                        <span className="text-[16px] font-medium text-[#52eeee] self-end">
                          <del className="text-[#a2adbd] text-[14px] font-normal mr-2">
                            {`${inforPayment?.price}đ`}
                          </del>
                          <span className="text-[#52eeee] text-[16px] font-medium">
                            {`${inforPayment?.discount}đ`}
                          </span>
                        </span>
                      </div>
                      <hr className=" rounded-[20px] border-t border-solid border-[#333c6d] my-4 mx-0 w-[100%]" />
                      <div className="mb-0 items-center flex flex-wrap justify-between w-[100%]">
                        <span className="text-[#fff] font-bold text-[16px]">
                          Tổng tiền:
                        </span>
                        <span className="text-[#52eeee] text-[26px] font-bold">
                          {`${inforPayment?.discount}đ`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[100%] overflow-hidden py-2 px-10 w-[70%]">
                <div>
                  <h2 className="mt-2 text-[#dae4f0] text-[24px] font-bold leading-[40px] mx-0 mb-0">
                    Chuyển khoản bằng QR
                  </h2>
                  <div className="flex mt-4">
                    <div className="bg-[#fff] rounded-[8px] h-[125px] mr-2 overflow-hidden p-[5px] w-[125px]">
                      <img src={inforPayment?.qrCode} alt="" />
                    </div>
                    <ul className="text-[#dae4f0] text-[16px] font-normal leading-[28px] m-0 pl-4">
                      <li>Bước 1: Mở app ngân hàng và quét mã QR.</li>
                      <li>
                        Bước 2: Đảm bảo nội dung chuyển khoản là
                        <span className="text-[#fa8c16] font-bold">
                          {" "}
                          {inforPayment?.content}
                        </span>
                        .
                      </li>
                      <li>Bước 3: Thực hiện thanh toán.</li>
                    </ul>
                  </div>
                  <h2 className="text-[#dae4f0] text-[24px] leading-[40px] mt-8 mx-0 mb-0 font-bold">
                    Chuyển khoản thủ công
                  </h2>
                  <div className="flex flex-col gap-[8px] mt-4">
                    <div className="flex gap-[8px]">
                      <div className="bg-[#202425] rounded-[8px] flex-1 py-2 px-4 relative">
                        <div className="text-[#a2adbd] text-[12px] font-normal leading-[16px] mb-2">
                          Số tài khoản
                        </div>
                        <div className="items-center text-[#dae4f0] flex text-[18px] font-semibold justify-between leading-[24px]">
                          {inforPayment?.accountNumber}
                          <img
                            className="cursor-pointer ml-2"
                            src="/image/payment/clone.d2ecd3252b355d732cabb677ec33e5c6.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="bg-[#202425] rounded-[8px] flex-1 py-2 px-4 relative">
                        <div className="text-[#a2adbd] text-[12px] font-normal leading-[16px] mb-2">
                          Tên tài khoản
                        </div>
                        <div className="items-center text-[#dae4f0] flex text-[18px] font-semibold justify-between leading-[24px]">
                          {inforPayment?.accountName}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <div className="bg-[#202425] rounded-[8px] flex-1 py-2 px-4 relative">
                        <div className="text-[#a2adbd] text-[12px] font-normal leading-[16px] mb-2">
                          Nội dung
                        </div>
                        <div className="items-center text-[#dae4f0] flex text-[18px] font-semibold justify-between leading-[24px]">
                          <span className="text-[#fa8c16] font-semibold">
                            {inforPayment?.content}
                          </span>
                          <img
                            className="cursor-pointer ml-2"
                            src="/image/payment/clone.d2ecd3252b355d732cabb677ec33e5c6.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="bg-[#202425] rounded-[8px] flex-1 py-2 px-4 relative">
                        <div className="text-[#a2adbd] text-[12px] font-normal leading-[16px] mb-2">
                          Chi nhánh
                        </div>
                        <div className="items-center text-[#dae4f0] flex text-[18px] font-semibold justify-between leading-[24px]">
                        {inforPayment?.branch}
                        </div>
                      </div>
                    </div>
                    {/* Lưu ý */}
                    <div className="pb-5">
                      <h2 className="text-[#dae4f0] text-[24px] leading-[40px] mt-8 mx-0 mb-0 font-bold">
                        Lưu ý
                      </h2>
                      <p className="text-[#dae4f0] text-[16px] font-normal leading-[24px]">
                        Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống
                        không phản hồi vui lòng liên hệ ngay bộ phận hỗ trợ của
                        F8.
                      </p>
                      <div>
                        <div className="items-start flex mb-4">
                          <span className="mr-3 pt-1">
                            <img
                              src="/image/payment/phone.0c60754adb11aa1f42791f4b80423f6d.svg"
                              alt=""
                            />
                          </span>
                          <Link
                            className="text-[#fff] text-[16px] font-normal leading-[24px]"
                            to=""
                          >
                            0246.329.1102
                          </Link>
                        </div>
                        <div className="items-start flex mb-4">
                          <span className="mr-3 pt-1">
                            <img
                              src="/image/payment/envelope.e7b59ce57be76a9435865a20e7021f56.svg"
                              alt=""
                            />
                          </span>
                          <Link
                            className="text-[#fff] text-[16px] font-normal leading-[24px]"
                            to=""
                          >
                            contact@fullstack.edu.vn
                          </Link>
                        </div>
                        <div className="items-start flex mb-4">
                          <span className="mr-3 pt-1">
                            <img
                              src="/image/payment/map-location.d448ea4630d95df7331a9b1162a39a8f.svg"
                              alt=""
                            />
                          </span>
                          <span
                            className="text-[#fff] text-[16px] font-normal leading-[24px]"
                            to=""
                          >
                            Số 11D, khu đô thị Nam Trung Yên, Quận Cầu Giấy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banking;
