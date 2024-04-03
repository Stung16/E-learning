import React from "react";
import Slide from "../../components/Slide/Slide";
import ListCourse from "./ListCourse/ListCourse";
import useSWR from "swr";
import { fetcher } from "../../utils/helper";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { data, isLoading } = useSWR("/home", fetcher);
  if(data?.data?.status === 200){
    console.log(1243);
  }
  
  return (
    <>
      <Slide />
      <ListCourse />
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
