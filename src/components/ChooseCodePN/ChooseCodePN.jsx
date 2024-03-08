import React, { useState } from "react";
import { Cascader, Radio } from "antd";
const options = [
  {
    value: "VN",
    label: "VN +84",
  },
  {
    value: "US",
    label: "US +12",
  },
  {
    value: "Vi",
    label: "Afghanistan +93",
  },
  {
    value: "US",
    label: "Afghanistan +93",
  },
  {
    value: "Vi",
    label: "AmericanSamoa +1 684",
  },
  {
    value: "US",
    label: "South Georgia and the South Sandwich Islands +500",
  },
  {
    value: "Vi",
    label: "Saint Helena, Ascension and Tristan Da Cunha +290",
  },
  {
    value: "US",
    label: "US +12",
  },
  {
    value: "Vi",
    label: "Vi +84 dnakjsndkjasndkjnkdjas",
  },
  {
    value: "US",
    label: "US +12",
  },
  {
    value: "Vi",
    label: "Vi +84 dnakjsndkjasndkjnkdjas",
  },
  {
    value: "US",
    label: "US +12",
  },
  {
    value: "Vi",
    label: "Vi +84 dnakjsndkjasndkjnkdjas",
  },
  {
    value: "US",
    label: "US +12",
  },
];
const ChooseCodePN = () => {
  const [placement, SetPlacement] = useState("topLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Cascader
        options={options}
        placeholder="Please select"
        defaultValue={"VN"}
        placement={"topLeft"}
      />
    </>
  );
};
export default ChooseCodePN;
