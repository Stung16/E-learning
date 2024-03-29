import React from "react";
import ResgiterWithPhone from "./ResgiterWithPhone";
import ResgiterWithEmail from "./ResgiterWithEmail";

const FormResgiter = ({ setrResgiterWithEmail, resgiterWithEmail }) => {
  return (
    <>
      {!resgiterWithEmail ? (
        <ResgiterWithEmail
          setrResgiterWithEmail={setrResgiterWithEmail}
          resgiterWithEmail={resgiterWithEmail}
        />
      ) : (
        <ResgiterWithPhone
          setrResgiterWithEmail={setrResgiterWithEmail}
          resgiterWithEmail={resgiterWithEmail}
        />
      )}
    </>
  );
};

export default FormResgiter;
