import React from "react";
import Cookies from "js-cookie";
import Slide from "../../components/Slide/Slide";
import ListCourse from "./ListCourse/ListCourse";
import useSWR from "swr";
import { fetcher } from "../../utils/helper";
import Loading from "../../components/Loading/Loading";
import { logOut } from "../../services/auth.service";

const Home = () => {
  const { data, isLoading } = useSWR("/home", fetcher);
  if (data?.data?.status !== 200) {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  }
  const dataHome = data?.data?.data;
  return (
    <>
      <Slide data={dataHome?.banners} />
      <ListCourse data={dataHome} />
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
