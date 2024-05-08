import React from "react";
import Slide from "../../components/Slide/Slide";
import ListCourse from "./ListCourse/ListCourse";
import useSWR from "swr";
import { fetcher } from "../../utils/helper";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { data, isLoading } = useSWR("/home", fetcher);
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
