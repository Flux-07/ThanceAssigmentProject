import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  let timeId = setInterval(() => {
    setCount(count - 1);
  }, 1000);
  useEffect(() => {
    if (count === 0) {
      navigate("/");
    }
    return () => {
      clearInterval(timeId);
    };
  }, [count]);
  console.log(count);
  return (
    <>
      <Helmet>
        <title>Submission Success - Confirmation of Your Request</title>
        <meta
          name="description"
          content="Your request has been successfully submitted and is under review. We'll reach out with updates shortly. Thank you for your submission."
        />
      </Helmet>

      {/* success page section */}
      <div className="flex w-full flex-col bg-white-A700 pt-[31px] sm:pt-5">
        {/* confirmation section */}
        <div className="container-xs flex flex-col items-end pl-5 pr-[113px] md:p-5 md:pr-5">
          <Img
            src="images/img_frame_1261155216.svg"
            alt="main image"
            className="h-[47px] w-[10%] self-start"
          />

          {/* checkmark list section */}
          <div className="mr-[215px] mt-[141px] flex w-[70%] flex-col items-center gap-[33px] md:mr-0 md:w-full">
            <Img
              src="images/img_checkmark.svg"
              alt="checkmark image"
              className="h-[80px] w-[80px]"
            />
            <div className="flex flex-col items-center gap-0.5 self-stretch">
              <Text
                size="4xl"
                as="p"
                className="!font-coveredbyyourgrace tracking-[-0.72px] !text-green-600"
              >
                Success Submitted
              </Text>

              {/* congratulations message section */}
              <div className="flex flex-col items-center gap-1.5 self-stretch">
                <Heading as="h1" className="tracking-[-1.12px]">
                  Congratulations
                </Heading>
                <Text
                  size="2xl"
                  as="p"
                  className="w-full text-center leading-[130%] !text-gray-600"
                >
                  Your request has been successfully submitted to us. We will
                  validate your information and reach out to your shortly with
                  updates
                </Text>
              </div>
            </div>
          </div>

          {/* redirection notice section */}
          <Text
            size="md"
            as="p"
            className="mr-[375px] mt-[100px] !text-gray-600 md:mr-0"
          >
            <span className="font-normal text-gray-600">
              Redirecting you to Homepage in
            </span>
            <span className="text-gray-600">&nbsp;</span>
            <span className="font-bold text-gray-900_02">{count} Seconds</span>
          </Text>

          {/* footer graphic section */}
          <Img
            src="images/img_path70.svg"
            alt="path image"
            className="mt-[2000px] h-[21px] w-[9%]"
          />
        </div>
      </div>
    </>
  );
}
