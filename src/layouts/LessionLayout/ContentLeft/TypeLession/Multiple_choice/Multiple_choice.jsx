import React, { useEffect, useState } from "react";
import "./Multiple_choice.css";
import toast from "react-hot-toast";
import Confetti from "../../../../../components/Btn/Confetti/Confetti";

const Multiple_choice = ({ info }) => {
  const [selected, setSelected] = useState();
  const [anserinfo, setAnserinfo] = useState("");
  const [explain, setExplain] = useState("");
  return (
    <div className="mt-0 mb-[100px] mx-auto max-w-[90vw] w-[720px]">
      <div className="question">
        <span>{info?.question}</span>
      </div>
      <div className="answers mt-9">
        {info?.answers?.map((answer) => {
          return (
            <div key={answer?.id} className="mt-9">
              <input
                type="radio"
                name="option"
                id={answer?.id}
                className="hidden"
                onChange={() => {
                  setExplain("");
                }}
              />
              <label
                className={`answers label-checked`}
                htmlFor={answer?.id}
                onClick={() => {
                  setAnserinfo(answer);
                }}
              >
                {answer?.answerQuestion}
              </label>
            </div>
          );
        })}
        <button
          className={`bg-toastify-color-info p-4 mt-10 ${
            anserinfo === "" && "pointer-events-none opacity-50"
          }`}
          onClick={() => {
            setExplain(anserinfo.explain);
            if (anserinfo.status) {
              toast.success("chính xác");
            } else {
              toast.error("đáp án sai");
            }
          }}
        >
          trả lời
        </button>
        {explain !== "" && (
          <div className="block mt-5">
            <span>Giải thích :</span>
            {explain}
          </div>
        )}
      </div>
      <Confetti />
    </div>
  );
};

export default Multiple_choice;
