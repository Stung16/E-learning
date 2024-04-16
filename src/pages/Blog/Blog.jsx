import React, { Fragment, useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import "./Blog.css";
import useSWR from "swr";
import { changeMonth, customText, fetcher } from "../../utils/helper";
import Loading from "../../components/Loading/Loading";
import BlogList from "./BlogList";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function Blog() {
  const location = useLocation();
  const [page, setPage] = useState(
    location?.search.substring(location?.search.indexOf("=") + 1)
  );
  const query = {
    page,
  };
  const queryStringified = queryString.stringify(query);
  const { data, isLoading } = useSWR(`/blog?${queryStringified}`, fetcher);
  const dataPosst = data?.data;
  const pages = useMemo(() => {
    return dataPosst?.totalPost ? Math.ceil(dataPosst?.totalPost / 10) : 0;
  }, [data, page]);
  // if (isLoading) {
  //   return <Loading />;
  // }
  if (page === 0 || page > pages) {
    return <NotFound />;
  }
  return (
    <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
      <div className="DefaultLayout_container mb-[60px] mt-2 mx-11 ">
        <div className="mb-20">
          <h1 className="text-[#242424] text-[28px] font-black my-[0.67em] mx-0">
            Bài viết nổi bật
          </h1>
          <div className="text-[15px] max-w-[840px] break-words text-[#292929] ">
            <p className="my-[6px] mx-0">
              Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
              online và các kỹ thuật lập trình web.
            </p>
          </div>
        </div>
        <div>
          <section className="min-[1113px]:ml-[-12px] w-[100%] min-[1113px]:mr-[-12px] min-[740px]:pl-[-8px] min-[740px]:pr-[-8px] flex flex-wrap">
            <section className="index-module min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3">
              <div className="pr-[64px] pb-11">
                <div>
                  <BlogList
                    listBlog={dataPosst}
                    page={page}
                    onPage={setPage}
                    pages={pages}
                  />
                </div>
              </div>
            </section>
            <section className="min-[1113px]:w-2/6 min-[1113px]:block min-[1113px]:px-3 ">
              <div>
                <h3 className="text-[#757575] uppercase font-medium text-[14px] ">
                  Các chủ đề được đề xuất
                </h3>
                <ul className="flex flex-wrap text-[14px] pl-0">
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Front-end / Mobile apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Back-end / Devops
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      UI / UX / Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sticky top-[80px] items-start flex">
                <div className="Banners_content flex max-w-[300px] flex-col">
                  <Link className="mt-8" to="">
                    <img
                      className="rounded-[8px] max-w-[100%] object-cover w-[100%]"
                      src="/image/img_baiviet/63dc61f2a061e.png"
                      alt=""
                    />
                  </Link>
                  <Link className="mt-8" to="">
                    <img
                      className="rounded-[8px] max-w-[100%] object-cover w-[100%]"
                      src="/image/img_baiviet/6421144f7b504.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
export default Blog;
