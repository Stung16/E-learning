import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Progress from "../Progress";
import { changeMonth } from "../../../utils/helper";
const MyCourse = () => {
  const profile = useSelector((state) => state.detailtData.profile);

  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            disabled
            className="bg-toastify-color-transparent text-black-color cursor-pointer mr-4 p-2 font-semibold leading-4 text-[14px]"
          >
            Khóa học của tôi
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className="w-[380px] max-h-[600px] overflow-x-auto"
          disabledKeys={["link", "delete"]}
        >
          <DropdownItem key="link">
            <div className="flex items-center">
              <h6 className="text-[18px] font-semibold m-0 ">
                Khoá học của tôi
              </h6>
              <Link
                className="text-[#f05123] p-2 ml-auto text-[14px]"
                to={"/my-courses"}
              >
                xem tất cả
              </Link>
            </div>
          </DropdownItem>
          {profile?.courses?.map((item) => {
            return (
              <DropdownItem key={item?.id}>
                <Link
                  to={`/courses/${item?.slug}`}
                  className="flex items-center"
                >
                  <img
                    src={item?.avatar}
                    alt=""
                    className="w-[120px] min-h-[76px] rounded-md"
                  />
                  <span className="ml-3 flex-1">
                    <h3 className="mt-[6px] text-[14px] font-semibold cursor-text">
                      {item?.title}
                    </h3>
                    <p className="text-[#666] text-[12px] mt-1 mb-0 cursor-text">
                      {changeMonth(item?.timeUsed) === 0
                        ? "Bạn chưa học khoá học này"
                        : `Học cách đây ${changeMonth(
                            item?.timeUsed
                          )} tháng trước`}
                    </p>
                    {changeMonth(item?.timeUsed) === 0 ? (
                      <span className="text-primary-color font-bold cursor-pointer">
                        Bắt đầu học
                      </span>
                    ) : (
                      <Progress data={50} />
                    )}
                  </span>
                </Link>
              </DropdownItem>
            );
          })}
          {/* <DropdownItem key="write">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="1">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="2">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="3">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="4">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="5">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="6">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
                <Progress data={50} />
              </span>
            </div>
          </DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MyCourse;
