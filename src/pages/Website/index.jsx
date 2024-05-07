import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";

export default function WebsitePage() {
  return (
    <>
      <Helmet>
        <title>Success Stories - Optimize Project Execution & Save Costs</title>
        <meta
          name="description"
          content="Discover how our platform has optimized team availability to reduce project execution time by 40%, saved client expenses, and enhanced Fortune 50 company research capabilities. Explore success stories and onboard top talent today."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-white-A700">
        {/* content area section */}
        <div className="flex flex-col gap-[2614px] md:gap-[1960px] sm:gap-[1307px]">
          {/* hero section */}
          <div>
            {/* hero top stack section */}
            <div className="relative h-[966px] md:h-auto ">
              {/* hero create form section */}
              <div className="h-[1000px] w-full bg-white-A700" />

              {/* hero image section */}
              <Img
                src="images/img_group_1171281397.png"
                alt="image"
                className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[566px] w-[33%] object-cover"
              />

              {/* hero navigation row section */}
              <div className="container-xs absolute left-0 right-0 top-[24.00px] my-auto flex justify-center rounded-[55px] border border-solid border-gray-200_01 bg-white-A700_cc py-4 pl-4 pr-3 md:p-5">
                {/* hero navigation buttons section */}
                <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
                  <Img
                    src="images/img_frame_1261155216.svg"
                    alt="featured image"
                    className="h-[47px] w-[10%] sm:w-full"
                  />

                  {/* hero buttons section */}
                  <div className="flex gap-[15px]">
                    <NavLink to="/formfieldempty">
                      <Button
                        color="gray_200_01"
                        variant="outline"
                        shape="round"
                        className="min-w-[189px] font-medium capitalize sm:px-5"
                      >
                        Get projects
                      </Button>
                    </NavLink>
                    <Button
                      shape="round"
                      color="gray_900_02_gray_800"
                      className="min-w-[223px] font-semibold capitalize sm:px-5"
                    >
                      Onboard Talent
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* features section */}
            <div className="relative z-[1] mt-[-831px] sm:mt-[5px] flex flex-col gap-5">
              {/* faq section */}
              <div className="flex flex-col gap-[62px] sm:gap-[31px]">
                {/* success stories stack section */}
                <div className="relative h-[1044px] pb-[79px] pt-[69px] md:h-auto md:py-5">
                  {/* success stories intro section */}
                  <div className="flex flex-col items-center rounded-[39px] bg-white-A700 pb-[19px] pl-5 pr-[19px] pt-5">
                    <Img
                      src="images/img_frame.svg"
                      alt="image"
                      className="h-[40px] w-[40px]"
                    />
                  </div>
                  <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center pl-5 pr-[113px] md:p-5 md:pr-5">
                    <div className="w-full">
                      {/* success stories content section */}
                      <div className="flex flex-col items-center">
                        <Text
                          size="4xl"
                          as="p"
                          className="!font-coveredbyyourgrace tracking-[-0.72px] !text-green-600"
                        >
                          Success stories
                        </Text>
                        <Heading
                          as="h1"
                          className="mr-[281px] mt-1 w-[61%] self-end text-center leading-[120%] tracking-[-1.12px] md:mr-0 md:w-full"
                        >
                          Every success journey we’ve encountered.
                        </Heading>

                        {/* success stories stats section */}
                        <div className="mt-[11px] flex items-center justify-between gap-5 self-stretch md:flex-col">
                          {/* success stories testimonials section */}
                          <div className="relative h-[596px] w-[59%] md:w-full">
                            {/* success stories highlights section */}
                            <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[90%] items-start md:relative md:flex-col">
                              <div className="relative z-[3] mt-[91px] h-[261px] w-[33%] md:w-full">
                                <div className="absolute bottom-[-0.72px] left-0 right-0 m-auto flex w-[96%] justify-center rounded-[27px] bg-white-A700 p-7 shadow-sm sm:p-5">
                                  {/* success stories highlight item section */}
                                  <div className="flex w-full flex-col items-start gap-[3px]">
                                    <Text
                                      size="6xl"
                                      as="p"
                                      className="!font-switzer tracking-[-1.92px]"
                                    >
                                      40%
                                    </Text>
                                    <Text
                                      as="p"
                                      className="w-full leading-[130%] !text-gray-600_02"
                                    >
                                      Achieved reduction in project execution
                                      time by optimising team availability
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_spark_sparkle.svg"
                                  alt="sparkle image"
                                  className="absolute left-[-20.00px] sm:left-[-20.00px] sm:top-[40.00px] top-[-100.00px] m-auto h-[101px] w-[102px]"
                                />
                              </div>

                              {/* success stories duration section */}
                              <div className="relative ml-[-181px] flex flex-1 items-center md:ml-0 md:self-stretch">
                                <div className="relative z-[2] mb-[45px] flex items-start gap-3.5 self-end rounded-[44px] bg-white-A700 px-4 pb-[13px] pt-4 shadow-md">
                                  <Button
                                    color="gray_300_63"
                                    size="xs"
                                    variant="fill"
                                    shape="circle"
                                    className="w-[52px] !rounded-[26px]"
                                  >
                                    <Img src="images/img_frame_green_600.svg" />
                                  </Button>

                                  {/* success stories duration detail section */}
                                  <div className="flex flex-col items-start gap-[3px]">
                                    <Heading
                                      size="s"
                                      as="h2"
                                      className="uppercase"
                                    >
                                      10 days
                                    </Heading>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!text-gray-600_02"
                                    >
                                      Staff Deployment
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_image_32618.png"
                                  alt="green image"
                                  className="relative ml-[-186px] h-[546px] w-[67%] rounded-[50px] object-cover"
                                />
                              </div>
                            </div>

                            {/* success stories cost saving section */}
                            <div className=" gray_800_01_gray_800_00_border absolute bottom-[0.00px] right-[0.00px] m-auto flex w-[39%] flex-col items-center gap-[13px] rounded-[28px] border border-solid bg-gray-900_01 pb-[38px] pl-8 pr-[30px] pt-8 shadow-xs sm:p-2 ">
                              <div className="flex flex-wrap items-center gap-[11px] self-start">
                                <Text
                                  size="5xl"
                                  as="p"
                                  className="!font-switzer !text-[63.37px] tracking-[-1.90px] !text-white-A700"
                                >
                                  $0.5
                                </Text>
                                <Text
                                  size="xl"
                                  as="p"
                                  className="mb-[13px] self-end !font-switzer !text-[22.81px] uppercase tracking-[0.23px] !text-gray-500_01"
                                >
                                  million
                                </Text>
                              </div>
                              <Text
                                as="p"
                                className="w-full leading-[130%] !text-blue_gray-100"
                              >
                                Reduced client expenses by saving on hiring and
                                employee costs.
                              </Text>
                            </div>
                          </div>

                          {/* success stories cta section */}
                          <div className="sm:pt-[300px] flex w-[32%] flex-col items-start md:w-full">
                            <Heading
                              size="md"
                              as="h3"
                              className="w-full leading-[120%] tracking-[-0.80px]"
                            >
                              Enhance fortune 50 company’s insights teams
                              research capabilities
                            </Heading>
                            <div className="mt-[55px] flex h-[10px] w-[56px]" />
                            <Button
                              size="lg"
                              color="gray_900_02_gray_800"
                              rightIcon={
                                <Img
                                  src="images/img_arrowleft.svg"
                                  alt="arrow_left"
                                  className="h-[24px] w-[24px]"
                                />
                              }
                              className="bg-red sm:mt-[10px] mt-[130px] min-w-[245px] gap-4 rounded-[44px] font-semibold capitalize sm:px-5"
                            >
                              Explore more
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* faq expansion section */}
                <div className="flex justify-center bg-white-A700 py-8 sm:pt-[700px]">
                  {/* faq questions row section */}
                  <div className=" container-xs flex justify-center rounded-[40px] bg-green-50 pr-14 pt-[76px] md:p-5 md:pr-5 md:pt-5">
                    {/* faq question item section */}
                    <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                      <div className="flex w-[38%] flex-col items-start md:w-full">
                        <Text
                          size="3xl"
                          as="p"
                          className="ml-[94px] !font-coveredbyyourgrace tracking-[-0.64px] !text-gray-500 md:ml-0"
                        >
                          What’s on your mind
                        </Text>
                        <Heading
                          size="xl"
                          as="h4"
                          className="self-end tracking-[-0.60px]"
                        >
                          Ask Questions
                        </Heading>
                        <Img
                          src="images/img_union.png"
                          alt="union image"
                          className="sm:hidden mt-[73px] h-[475px] w-full object-cover md:h-auto"
                        />
                      </div>

                      {/* faq expandable list section */}
                      <Accordion
                        preExpanded={[0]}
                        className="flex w-[45%] flex-col gap-[35px] md:w-full"
                      >
                        {[...Array(5)].map((_, i) => (
                          <AccordionItem uuid={i} key={`FAQ List${i}`}>
                            {/* faq multiple talents section */}
                            <div className="mt-[60px] flex flex-1 flex-col gap-[22px] pb-[25px] sm:pb-5">
                              <AccordionItemHeading className="w-full">
                                <AccordionItemButton>
                                  <AccordionItemState>
                                    {(props) => (
                                      <>
                                        <div className="flex flex-wrap items-center justify-between gap-5 sm:flex-col">
                                          <Heading size="xs" as="h5">
                                            Can I hire multiple talents at once?
                                          </Heading>
                                          {props?.expanded ? (
                                            <Img
                                              src="images/img_frame_black_900_24x24.svg"
                                              alt="expand icon"
                                              className="h-[24px] w-[24px] self-start sm:w-full"
                                            />
                                          ) : (
                                            <Img
                                              src="images/img_frame_black_900.svg"
                                              alt="collapse icon"
                                              className="h-[24px] w-[24px] self-start sm:w-full"
                                            />
                                          )}
                                        </div>
                                      </>
                                    )}
                                  </AccordionItemState>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="leading-[160%] !text-blue_gray-600"
                                  >
                                    If unhappy with a project, communicate with
                                    the freelancer, allow for revisions, and
                                    refer to the agreement. Escalate to platform
                                    support if needed, considering mediation.
                                    Review policies, seek collaborative
                                    solutions for resolution.
                                  </Text>
                                </div>
                              </AccordionItemPanel>
                            </div>
                            <div className="h-px w-full rotate-[0deg] bg-blue_gray-100_01" />
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>

              {/* footer section */}
              <div className="container-xs flex justify-center rounded-[40px] bg-gray-100 px-[47px] pb-14 pt-[60px] md:p-5">
                {/* footer content row section */}
                <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                  {/* footer branding section */}
                  <div className="flex items-center gap-2.5">
                    <Img
                      src="images/img_frame_gray_900_02.svg"
                      alt="brand image"
                      className="h-[24px] w-[24px] self-start"
                    />
                    <Text as="p" className="self-end">
                      Talup 2023. All rights reserved
                    </Text>
                  </div>

                  {/* footer links section */}
                  <div className="flex w-[25%] flex-wrap justify-between gap-5 md:w-full">
                    <a href="#" className="self-start">
                      <Text as="p" className="!font-normal underline">
                        Terms & Conditions
                      </Text>
                    </a>
                    <a href="#" className="self-end">
                      <Text as="p" className="!font-normal underline">
                        Privacy Policy
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* background image section */}
          <div className="container-xs pl-[1147px] pr-[113px] md:p-5 md:px-5">
            <Img
              src="images/img_path70.svg"
              alt="featured image"
              className="h-[21px] w-full md:h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
