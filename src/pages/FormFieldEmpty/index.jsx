import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, Text } from "../../components";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormFieldEmptyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [invalidEmail, setInvalidEmail] = useState(false);
  let disabledCheck = true;
  const navigate = useNavigate();

  function checkingEmptyInput() {
    if (formData.email !== "" && formData.name !== "") {
      disabledCheck = false;
    } else {
      disabledCheck = true;
    }
  }
  checkingEmptyInput();
  console.log(disabledCheck);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(formData.email);
    if (emailRegex.test(formData.email)) {
      navigate("/success");
    } else {
      setInvalidEmail(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Register - Start Your Success Journey</title>
        <meta
          name="description"
          content="Join our platform to embark on your success journey. Fill out the registration form to connect with top talent and kickstart your projects. Start here!"
        />
      </Helmet>

      {/* form page section */}
      <div className="flex w-full flex-col bg-white-A700 pt-[31px] sm:pt-5">
        {/* form container section */}
        <div className="container-xs flex flex-col items-center px-5 md:p-5">
          {/* header row section */}
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_frame_1261155216.svg"
              alt="frame image"
              className="h-[47px] w-[10%]"
            />
            <NavLink to="/">
              <Button
                size="sm"
                variant="outline"
                shape="circle"
                className="w-[64px] !rounded-[32px]"
              >
                <Img src="images/img_close.svg" />
              </Button>
            </NavLink>
          </div>

          {/* registration section */}
          <div className="mt-[41px] flex w-[44%] flex-col items-center gap-[61px] md:w-full sm:gap-[30px]">
            <div className="flex flex-col items-center self-stretch">
              <Text
                size="4xl"
                as="p"
                className="!font-coveredbyyourgrace tracking-[-0.72px] !text-green-600"
              >
                Registration Form
              </Text>
              <Heading
                as="h1"
                className="relative mt-[-1px] w-full text-center leading-[120%] tracking-[-1.12px]"
              >
                Start your success Journey here!
              </Heading>
            </div>

            {/* input fields section */}
            <div className="flex w-[71%] flex-col gap-[47px] md:w-full">
              <div className="flex flex-col gap-6">
                <input
                  className="inputs"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  style={{
                    background: "#EFEFEF",
                  }}
                />
                <input
                  className="inputs"
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    background: "#EFEFEF",
                  }}
                />
                {invalidEmail && formData.email !== "" ? (
                  <p>
                    {" "}
                    <div className="flex items-center gap-[7px]">
                      <Img
                        src="images/img_video_camera.svg"
                        alt="camera icon"
                        className="h-[20px] w-[20px]"
                      />
                      <Text size="s" as="p" className="!text-red-A700">
                        Enter a valid email address
                      </Text>
                    </div>
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button
                className={disabledCheck ? "dead inputs" : "alive inputs"}
                disabled={disabledCheck}
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>

          {/* footer image section */}
          <Img
            src="images/img_path70.svg"
            alt="decorative image"
            className="mr-[93px] mt-[4152px] h-[21px] w-[9%] self-end md:mr-0"
          />
        </div>
      </div>
    </>
  );
}
