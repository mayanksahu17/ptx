import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, RatingBar, CheckBox, Slider } from "../../components";

export default function HOMEPAGEPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Mayanksahu17's Application5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="flex justify-center self-stretch bg-black-900 p-[13px]">
          <Text as="p" className="self-end text-center capitalize !text-white-A700">
            Contact Us Today To Discuss Your Painting Project And Schedule A Free Estimate
          </Text>
        </div>
        <header className="mt-[15px] flex w-[83%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
          <div className="mx-auto flex w-full max-w-[942px] items-center justify-between gap-5 md:flex-col">
            <Img
              src="images/img_image_479.png"
              alt="image479_one"
              className="h-[75px] w-[19%] object-cover md:w-full"
            />
            <div className="flex w-[65%] justify-between gap-5 md:w-full sm:flex-col">
              <a href="Home" target="_blank" rel="noreferrer">
                <Heading size="xs" as="h6" className="!text-indigo-900">
                  Home
                </Heading>
              </a>
              <div className="flex items-center gap-[5px]">
                <Text as="p" className="!font-medium capitalize !text-indigo-900">
                  Services
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[7px]" />
              </div>
              <div className="flex items-center gap-[5px]">
                <Text as="p" className="!font-medium capitalize !text-indigo-900">
                  About us
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[7px]" />
              </div>
              <Text as="p" className="!font-medium !text-indigo-900">
                Portfolio
              </Text>
              <Text as="p" className="!font-medium capitalize !text-indigo-900">
                Press
              </Text>
              <a href="#">
                <Text as="p" className="!font-medium capitalize !text-indigo-900">
                  Contact Us
                </Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <Img src="images/img_volume.svg" alt="volume_one" className="h-[25px] w-[25px]" />
              <Text as="p" className="self-end text-right !font-medium capitalize !text-indigo-900_01">
                Call anytime
              </Text>
            </div>
            <Text size="2xl" as="p" className="text-right !font-medium capitalize !text-yellow-900">
              (973) 828-8349
            </Text>
          </div>
        </header>
        <div className="mt-[15px] flex flex-col self-stretch overflow-auto">
          <div>
            <div className="relative h-[750px] md:h-auto">
              <div className="flex w-full items-start justify-center md:flex-col">
                <Img
                  src="images/img_image_75.png"
                  alt="imageseventyfiv"
                  className="relative z-[1] h-[375px] w-[40%] object-cover md:w-full"
                />
                <div className="relative ml-[-369px] flex flex-1 items-center md:ml-0 md:flex-col md:self-stretch md:p-5">
                  <div className="relative z-[2] w-full rounded-md bg-white-A700 px-14 py-[72px] shadow-sm md:p-5">
                    <div className="mb-[7px] mt-[3px] flex flex-col items-center gap-7">
                      <div className="flex flex-col items-center gap-[22px] self-stretch">
                        <div className="flex flex-col items-center gap-[17px] self-stretch">
                          <div className="flex w-[61%] items-center gap-1.5 md:w-full">
                            <RatingBar value={5} isEditable={true} size={16} className="flex justify-between" />
                            <Text as="p" className="text-center">
                              <span className="text-blue_gray-900">Rated&nbsp;</span>
                              <span className="font-bold text-blue_gray-900">4.9/5&nbsp;</span>
                              <span className="text-blue_gray-900">| Based on&nbsp;</span>
                              <span className="font-bold text-blue_gray-900">100+ reviews</span>
                            </Text>
                          </div>
                          <Heading
                            size="3xl"
                            as="h1"
                            className="text-center capitalize leading-[120%] !text-indigo-900"
                          >
                            We Set The Standard For High-Quality Painting Projects
                          </Heading>
                        </div>
                        <Text size="2xl" as="p" className="w-[95%] text-center leading-[140%] md:w-full">
                          Whether you require stunning painting for your property or a client’s, we approach the job
                          with skill, professionalism, and attention to detail.
                        </Text>
                      </div>
                      <Button
                        shape="round"
                        rightIcon={<Img src="images/img_line_1.svg" alt="Line 1" className="h-px w-[16px]" />}
                        className="min-w-[418px] gap-4 font-bold uppercase sm:px-5"
                      >
                        SCHEDULE MY FREE ESTIMATE
                      </Button>
                    </div>
                  </div>
                  <div className="relative ml-[-369px] w-full md:ml-0">
                    <Img
                      src="images/img_image_74.png"
                      alt="imageseventyfou"
                      className="h-[375px] w-full object-cover md:h-auto"
                    />
                    <Img
                      src="images/img_rectangle_5.png"
                      alt="image"
                      className="h-[375px] w-full object-cover md:h-auto"
                    />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_3008.png"
                alt="image_one"
                className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[375px] w-[50%] object-cover"
              />
            </div>
            <div className="relative h-[100px]">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[32px] w-full max-w-[1749px] px-[95px] md:h-auto md:p-5 md:px-5">
                <div className="ml-[59px] flex gap-[25px] md:ml-0 md:flex-col">
                  <Heading as="h2" className="capitalize">
                    Experienced & Skilled Painting Crew
                  </Heading>
                  <Heading as="h3" className="capitalize">
                    -
                  </Heading>
                  <div className="flex">
                    <Heading as="h4" className="capitalize">
                      Premium-Quality Paints & Materials
                    </Heading>
                  </div>
                  <Heading as="h5" className="capitalize">
                    -
                  </Heading>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[96%] flex-col items-end">
                  <div className="flex w-[49%] flex-col items-center md:w-full">
                    <div className="flex flex-wrap justify-between gap-5 self-stretch">
                      <Heading as="h6" className="capitalize">
                        10 years of excellent service
                      </Heading>
                      <Heading as="h4" className="capitalize">
                        100% Satisfaction Guarantee
                      </Heading>
                    </div>
                    <Heading as="h4" className="relative mt-[-27px] capitalize">
                      -
                    </Heading>
                  </div>
                  <div className="relative mt-[-29px] flex w-full flex-wrap justify-between gap-5">
                    <Heading as="h4" className="capitalize">
                      Experienced & Skilled Painting Crew
                    </Heading>
                    <Heading as="h4" className="capitalize">
                      Eco-Friendly & Low-Voc Paint Options
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-[-253.00px] top-0 my-auto h-[100px] w-full">
                <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[100px] w-[86%] bg-gradient" />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-between gap-5 pl-[307px] md:relative md:flex-col md:pl-5">
                  <div className="flex gap-6 md:flex-col">
                    <Heading as="h4" className="self-end capitalize md:p-5">
                      -
                    </Heading>
                    <div className="flex self-end md:p-5">
                      <Heading as="h4" className="capitalize">
                        Premium-Quality Paints & Materials
                      </Heading>
                    </div>
                    <Heading as="h4" className="self-end capitalize md:p-5">
                      -
                    </Heading>
                    <Heading as="h4" className="self-start capitalize md:p-5">
                      Satisfaction Guarantee
                    </Heading>
                    <Heading as="h4" className="self-end capitalize md:p-5">
                      -
                    </Heading>
                  </div>
                  <div className="mt-1.5 flex w-[33%] justify-between gap-5 md:w-full">
                    <div className="flex flex-wrap gap-[26px]">
                      <Heading as="h4" className="capitalize">
                        -
                      </Heading>
                      <Heading as="h4" className="capitalize">
                        -
                      </Heading>
                    </div>
                    <div className="flex gap-[25px]">
                      <Heading as="h4" className="capitalize">
                        -
                      </Heading>
                      <div className="flex">
                        <Heading as="h4" className="capitalize">
                          -
                        </Heading>
                        <div className="relative ml-[-7px] flex flex-wrap gap-[25px]">
                          <Heading as="h4" className="capitalize">
                            -
                          </Heading>
                          <Heading as="h4" className="capitalize">
                            -
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center bg-white-A700 px-14 py-[100px] md:p-5">
              <div className="mx-auto flex w-full max-w-[1244px] items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[40%] flex-col gap-[30px] md:w-full">
                  <Heading size="4xl" as="h1" className="w-[94%] capitalize leading-[120%] !text-indigo-900 md:w-full">
                    Engage Our Services In 3 Easy Steps
                  </Heading>
                  <Text size="2xl" as="p" className="leading-[140%]">
                    Whatever the project, we make it easy and convenient from start to finish.
                  </Text>
                </div>
                <div className="flex w-[44%] flex-col gap-[30px] md:w-full">
                  <div className="flex flex-1 items-center justify-between gap-5 sm:flex-col">
                    <Img src="images/img_menu.svg" alt="image" className="h-[80px] w-[80px] sm:w-full" />
                    <div className="flex w-[74%] flex-col gap-[15px] sm:w-full">
                      <div className="flex flex-wrap items-center gap-[21px] self-start">
                        <Heading
                          size="md"
                          as="h5"
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-[17px] border border-solid border-white-A700 bg-yellow-900 text-center capitalize !text-gray-100"
                        >
                          1
                        </Heading>
                        <Heading as="h4" className="capitalize !text-indigo-900_01">
                          Schedule Your Free Estimate
                        </Heading>
                      </div>
                      <Text as="p" className="leading-[140%]">
                        Call us or fill out our online form to arrange a comprehensive estimate free of charge or to
                        discuss the scope of your project.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-5 sm:flex-col">
                    <Img
                      src="images/img_painting_brush_1.svg"
                      alt="paintingbrush"
                      className="mt-3.5 h-[80px] w-[80px] sm:w-full"
                    />
                    <div className="flex w-[74%] flex-col gap-[15px] sm:w-full">
                      <div className="flex flex-wrap items-center gap-[21px]">
                        <Heading
                          size="md"
                          as="h5"
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-[17px] border border-solid border-white-A700 bg-yellow-900 text-center capitalize !text-gray-100"
                        >
                          2
                        </Heading>
                        <Heading as="h4" className="capitalize !text-indigo-900_01">
                          We Deliver
                        </Heading>
                      </div>
                      <Text as="p" className="leading-[140%]">
                        Schedule the job whenever suits you. We then get to work, keeping disruption and mess to a
                        minimum and delivering on time and on budget.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5 sm:flex-col">
                    <Img src="images/img_television.svg" alt="television_one" className="h-[80px] w-[80px] sm:w-full" />
                    <div className="flex w-[74%] flex-col gap-[15px] sm:w-full">
                      <div className="flex flex-wrap items-center gap-[21px]">
                        <Heading
                          size="md"
                          as="h5"
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-[17px] border border-solid border-white-A700 bg-yellow-900 text-center capitalize !text-gray-100"
                        >
                          3
                        </Heading>
                        <Heading as="h4" className="capitalize !text-indigo-900_01">
                          Your Vision Realized
                        </Heading>
                      </div>
                      <Text as="p" className="leading-[140%]">
                        You or your client can enjoy the stunning new paintwork, fully backed by our customer
                        satisfaction guarantee.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col">
              <div className="flex w-[50%] justify-center bg-gray-50 px-14 py-[58px] md:w-full md:p-5">
                <div className="flex w-[82%] flex-col items-center gap-[30px] md:w-full">
                  <div className="flex flex-col items-center gap-[18px] self-stretch">
                    <div className="flex w-[70%] items-center gap-1.5 md:w-full">
                      <RatingBar value={5} isEditable={true} size={16} className="flex justify-between" />
                      <Text as="p" className="text-center !font-lato !text-black-900">
                        <span className="font-dmsans text-blue_gray-900">Rated&nbsp;</span>
                        <span className="font-dmsans font-bold text-blue_gray-900">4.9/5&nbsp;</span>
                        <span className="font-dmsans text-blue_gray-900">| Based on&nbsp;</span>
                        <span className="font-dmsans font-bold text-blue_gray-900">100+</span>
                        <span className="font-dmsans text-blue_gray-900">&nbsp;reviews</span>
                      </Text>
                    </div>
                    <Heading size="4xl" as="h1" className="text-center capitalize leading-[120%] !text-indigo-900">
                      Trust Us For Exceptional Painting Services
                    </Heading>
                    <div className="flex flex-col gap-6 self-stretch">
                      <Text size="2xl" as="p" className="text-center leading-[140%]">
                        We deliver a smooth and stress-free experience with exemplary results.
                      </Text>
                      <Text as="p" className="text-center leading-[140%]">
                        <>
                          We go out of our way to understand your needs and meticulously prepare for the project,
                          whatever its size or scope.
                          <br />
                          <br />
                          Our in-house team of master painters takes immense pride in their work and will not rest until
                          you are 100% satisfied with the outcome.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[80%] flex-col items-center gap-[15px] md:w-full">
                    <Button
                      shape="round"
                      rightIcon={<Img src="images/img_line_1.svg" alt="Line 1" className="h-px w-[16px]" />}
                      className="w-full gap-4 font-bold uppercase sm:px-5"
                    >
                      SCHEDULE MY FREE ESTIMATE
                    </Button>
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-3">
                        <Img
                          src="images/img_phone_call_5_1.svg"
                          alt="phonecall5one"
                          className="h-[25px] w-[25px] self-start"
                        />
                        <Text size="lg" as="p" className="self-end text-right capitalize !text-indigo-900_01">
                          Call anytime
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="self-start text-right capitalize !text-yellow-900">
                        (973) 828-8349
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_3.png"
                alt="image_two"
                className="h-[591px] w-[50%] object-cover md:w-full"
              />
            </div>
            <div className="flex justify-center bg-white-A700 px-14 py-[66px] md:p-5">
              <div className="mx-auto mt-[19px] flex w-full max-w-[1246px] flex-col items-center gap-[51px] sm:gap-[25px]">
                <div className="flex flex-col items-center gap-[17px]">
                  <Heading size="4xl" as="h1" className="text-center capitalize !text-indigo-900">
                    Our Services
                  </Heading>
                  <Text size="2xl" as="p" className="text-center">
                    Painting and decorating services for those with exceptional taste.
                  </Text>
                </div>
                <div className="flex items-start gap-[11px] self-stretch px-[70px] md:flex-col md:px-5">
                  <div className="relative h-[571px] w-[37%] md:w-full">
                    <div className="absolute left-0 right-0 top-[0.00px] m-auto w-[95%] shadow-md">
                      <Img
                        src="images/img_rectangle_9283.png"
                        alt="image_three"
                        className="h-[345px] w-full rounded-tl-md rounded-tr-md object-cover md:h-auto"
                      />
                      <div className="flex flex-col items-center gap-[15px] rounded-bl-md rounded-br-md bg-white-A700 p-[27px] sm:p-5">
                        <Heading size="2xl" as="h3" className="text-center capitalize !text-indigo-900">
                          Exterior
                        </Heading>
                        <Text size="lg" as="p" className="w-[93%] text-center !font-normal leading-[140%] md:w-full">
                          <span className="text-blue_gray-900">
                            Pristine, refined exteriors that make the best first impression possible with&nbsp;
                          </span>
                          <span className="font-bold text-indigo-900">
                            crisp lines, flawless finishes, and expertly applied coats
                          </span>
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_pointinghand_9.svg"
                      alt="pointinghandnin"
                      className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[60px] w-[60px]"
                    />
                  </div>
                  <div className="mt-[25px] flex flex-1 gap-[31px] md:flex-col md:self-stretch">
                    <div className="flex w-full flex-col">
                      <Img
                        src="images/img_rectangle_3007.png"
                        alt="image"
                        className="h-[299px] rounded-tl-md rounded-tr-md object-cover"
                      />
                      <div className="flex flex-col items-center justify-center gap-4 p-[30px] sm:p-5">
                        <Heading as="h4" className="mt-[3px] text-center capitalize !text-indigo-900">
                          Interior
                        </Heading>
                        <Text as="p" className="mb-1 text-center leading-[140%]">
                          <span className="text-blue_gray-900">
                            Transform indoor spaces with stunning paint effects. From&nbsp;
                          </span>
                          <span className="font-bold text-indigo-900">
                            subtle luxury to dramatic statements, all applied with care and finesse.
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-full flex-col">
                      <Img
                        src="images/img_rectangle_9292.png"
                        alt="image"
                        className="h-[299px] rounded-tl-md rounded-tr-md object-cover"
                      />
                      <div className="flex flex-col items-center justify-center gap-4 p-[30px] sm:p-5">
                        <Heading as="h4" className="mt-[3px] text-center capitalize !text-indigo-900">
                          Custom Services
                        </Heading>
                        <Heading
                          size="xs"
                          as="h6"
                          className="mb-1 text-center !font-dmsans leading-[140%] !text-indigo-900"
                        >
                          <span className="font-normal text-blue_gray-900">Decorative finishes provide the&nbsp;</span>
                          <span className="text-indigo-900">ultimate distinctive touch,&nbsp;</span>
                          <span className="font-normal text-blue_gray-900">
                            transforming spaces with one-of-a-kind details tailored to your tastes.
                          </span>
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center rounded-[10px] bg-gray-50 px-14 py-[78px] md:p-5">
              <div className="mx-auto mt-[18px] flex w-full max-w-[1244px] items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[39%] flex-col items-start md:w-full">
                  <Heading size="4xl" as="h1" className="capitalize !text-indigo-900">
                    Masters of our craft
                  </Heading>
                  <Text size="2xl" as="p" className="mt-[21px] w-[94%] leading-[140%] md:w-full">
                    We employ the most reliable and proficient artisans, skilled in a wide range of fine painting and
                    decorating techniques.
                  </Text>
                  <Text as="p" className="mt-8 w-[86%] leading-[140%] md:w-full">
                    To maintain our high standards, we do not use contractors. All our painters are in-house and undergo
                    rigorous training to sharpen their skills.
                  </Text>
                  <div className="mt-8 flex w-[86%] flex-col items-start gap-[13px] md:w-full">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-3">
                        <Img src="images/img_volume.svg" alt="volume_three" className="h-[25px] w-[25px]" />
                        <Text size="xs" as="p" className="self-end text-right capitalize !text-indigo-900_01">
                          Call anytime
                        </Text>
                      </div>
                      <Text as="p" className="text-right !font-medium capitalize !text-yellow-900">
                        (973) 828-8349
                      </Text>
                    </div>
                    <Button
                      shape="round"
                      rightIcon={<Img src="images/img_line_1.svg" alt="Line 1" className="h-px w-[16px]" />}
                      className="w-full gap-4 font-bold uppercase sm:px-5"
                    >
                      SCHEDULE MY FREE ESTIMATE
                    </Button>
                    <div className="flex w-[87%] items-center gap-1.5 md:w-full">
                      <RatingBar value={5} isEditable={true} size={16} className="flex justify-between" />
                      <Text as="p" className="text-center">
                        <span className="text-blue_gray-900">Rated&nbsp;</span>
                        <span className="font-bold text-blue_gray-900">4.9/5</span>
                        <span className="text-blue_gray-900">&nbsp;| Based on&nbsp;</span>
                        <span className="font-bold text-blue_gray-900">100+ reviews</span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="grid w-[45%] grid-cols-[repeat(auto-fill,_minmax(253px_,_1fr))] gap-[55px]">
                  <div className="flex w-full flex-col gap-[26px]">
                    <Img src="images/img_paint_1.svg" alt="painting_one" className="h-[100px] w-[100px]" />
                    <div className="flex flex-col items-start gap-4">
                      <Heading as="h4" className="!text-indigo-900">
                        Painting
                      </Heading>
                      <Text as="p" className="leading-[140%]">
                        <span className="text-blue_gray-900">
                          Interior, exterior, chemical stripping, restoration, feather sanding, borate&nbsp;
                        </span>
                        <span className="font-bold text-indigo-900">
                          treatments, sealing of brick/stone, caulking, brushed, sprayed.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[26px]">
                    <Img src="images/img_calendar.svg" alt="calendar_one" className="h-[100px] w-[100px]" />
                    <div className="flex flex-col items-start gap-4">
                      <Heading as="h4" className="!text-indigo-900">
                        Plastering
                      </Heading>
                      <Text as="p" className="leading-[140%]">
                        Repairs, casting and re-casting, trowel work, skim coating, veneers, red top, textured surfaces,
                        diamond finishes
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[26px]">
                    <Img src="images/img_spot_1.svg" alt="spotone_one" className="h-[100px] w-[100px]" />
                    <div className="flex flex-col items-start gap-4">
                      <Heading as="h4" className="!text-indigo-900">
                        Staining
                      </Heading>
                      <Heading size="xs" as="h6" className="leading-[140%] !text-indigo-900">
                        New and restoration, custom matching, blending, toning, penetrating, gel, NGR, Brushed and
                        sprayed polyurethanes, varnishes, and lacquers.
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[26px]">
                    <Img src="images/img_wallpaper_1.svg" alt="wallpaperone" className="h-[100px] w-[100px]" />
                    <div className="flex flex-col items-start gap-4">
                      <Heading as="h4" className="text-center !text-indigo-900">
                        Wallpaper Hanging
                      </Heading>
                      <Heading size="xs" as="h6" className="leading-[140%] !text-indigo-900">
                        <span className="text-indigo-900">Grass cloth, vinyl, fabric, silk, hand-printed/painted,</span>
                        <span className="font-normal text-blue_gray-900">
                          &nbsp;blocked, hand-stencil, machine-printed, flock.
                        </span>
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[1071px] w-full max-w-[2086px] md:p-5">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[72%] justify-center bg-white-A700 px-14 py-[90px] md:p-5">
              <div className="mb-[799px] flex flex-col gap-[13px]">
                <Heading size="4xl" as="h2" className="text-center capitalize !text-indigo-900">
                  Our Reputation Is Everything
                </Heading>
                <Text size="2xl" as="p" className="text-center">
                  We put our clients’ satisfaction first. Here’s what they say about us.
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[9%] left-0 right-0 m-auto flex w-full flex-col items-center gap-5">
              <div className="relative h-[714px] self-stretch md:h-auto">
                <div className="w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                    paddingLeft={105}
                    paddingRight={105}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(15)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="mx-2.5 flex flex-col opacity-0.3">
                          <Img
                            src="images/img_rectangle_9232.png"
                            alt="image"
                            className="h-[320px] rounded-md object-cover"
                          />
                          <div className="flex flex-col items-start justify-center gap-6 rounded-bl-[25px] rounded-br-[25px] bg-white-A700 p-6 sm:p-5">
                            <Text as="p" className="mt-1.5 leading-[140%]">
                              “We had been told beforehand that PTX Painting would do meticulous work. We were more than
                              pleased with the job they did. The work was performed expeditiously with the quality of
                              work exceeding what we had come to expect from other painters.”
                            </Text>
                            <div className="h-px self-stretch bg-black-900_19" />
                            <div className="mb-1.5 flex w-[70%] items-center gap-[18px] md:w-full">
                              <Img
                                src="images/img_vector.png"
                                alt="vector_one"
                                className="h-[75px] w-[75px] rounded-[50%]"
                              />
                              <div className="flex flex-1 flex-col items-start gap-[11px]">
                                <Heading size="xs" as="h3" className="!font-semibold !text-black-900">
                                  Robert Smith, Client
                                </Heading>
                                <CheckBox
                                  name="verifiedclient"
                                  label="Verified Client"
                                  id="verifiedclient4"
                                  className="gap-1 p-px text-center text-sm text-blue_gray-900"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
                <Button
                  color="white_A700"
                  size="xs"
                  shape="circle"
                  className="absolute left-[19%] top-[19%] m-auto w-[40px] rotate-[180deg] !rounded-[20px] border border-solid border-indigo-700"
                >
                  <Img src="images/img_frame_89.svg" />
                </Button>
                <div className="absolute right-[18%] top-[19%] m-auto flex w-[3%] items-start justify-end sm:relative sm:flex-col">
                  <Button
                    color="indigo_900"
                    size="xs"
                    shape="circle"
                    className="w-[40px] !rounded-[20px] border border-solid border-white-A700"
                  >
                    <Img src="images/img_frame_1484580783.svg" />
                  </Button>
                  <Img
                    src="images/img_pointinghand_9.svg"
                    alt="pointinghandnin"
                    className="relative ml-[-39px] h-[60px] w-full md:h-auto sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
              <div className="flex h-[17px] w-[93px] justify-center" />
            </div>
          </div>
          <div className="mt-1">
            <div className="flex items-center justify-between gap-5 bg-gray-50 p-[61px] md:flex-col md:p-5">
              <div className="ml-[67px] flex w-[39%] flex-col items-start gap-8 md:ml-0 md:w-full">
                <div className="flex flex-col gap-8 self-stretch">
                  <Heading size="4xl" as="h2" className="w-[97%] capitalize leading-[120%] !text-indigo-900 md:w-full">
                    Join Our Referral Program To Earn Cash, Gifts & Prizes
                  </Heading>
                  <Text size="2xl" as="p" className="leading-[140%]">
                    Earn points by referring us to friends, clients, or other professionals
                  </Text>
                  <Text as="p" className="leading-[140%]">
                    We run a unique referral program to recognize clients who recommend us to others. Earn points every
                    time you refer us, then trade them in for rewards of your choice.
                  </Text>
                </div>
                <Button
                  variant="outline"
                  shape="round"
                  rightIcon={<Img src="images/img_line_1_yellow_900.svg" alt="Line 1" className="h-px w-[16px]" />}
                  className="min-w-[268px] gap-4 font-bold uppercase sm:px-5"
                >
                  LEARn MORE
                </Button>
              </div>
              <div className="mr-[29px] flex w-[50%] flex-col items-start md:mr-0 md:w-full">
                <div className="relative z-[3] h-[79px] self-stretch">
                  <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[79px] w-[94%] rounded-tl-[7px] rounded-tr-[7px] border-[0.5px] border-solid border-blue-600 bg-indigo-900" />
                  <div className="absolute bottom-[21.12px] left-0 right-0 m-auto flex">
                    <Heading size="lg" as="h3" className="!text-[24.92px]">
                      Here’s how you can earn points
                    </Heading>
                  </div>
                </div>
                <div className="relative mt-[-79px] w-[94%] pt-[79px] shadow-xs md:w-full md:pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-5 border-[0.5px] border-solid border-indigo-900_19 bg-white-A700 p-[25px] sm:p-5">
                    <Text size="xl" as="p" className="mb-1.5 self-end !text-[19.93px] !text-indigo-900">
                      Refer us to your friend
                    </Text>
                    <Heading size="s" as="h4" className="!text-[19.93px] capitalize !text-indigo-900">
                      +10 points
                    </Heading>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-5 border-[0.5px] border-solid border-indigo-900_19 bg-white-A700 p-[25px] sm:p-5">
                    <Text size="xl" as="p" className="mb-1.5 self-end !text-[19.93px] !text-indigo-900">
                      Refer us to your client
                    </Text>
                    <Heading size="s" as="h5" className="!text-[19.93px] capitalize !text-indigo-900">
                      +20 points
                    </Heading>
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-5 border-[0.5px] border-solid border-indigo-900_19 bg-white-A700 p-[25px] sm:p-5">
                    <Text size="xl" as="p" className="mb-1.5 mt-[9px] !text-[19.93px] !text-indigo-900">
                      Refer us to other professionals
                    </Text>
                    <Heading size="s" as="h6" className="mb-1.5 !text-[19.93px] capitalize !text-indigo-900">
                      +30 points
                    </Heading>
                  </div>
                  <div className="rounded-bl-[7px] rounded-br-[7px] border-[0.5px] border-solid border-indigo-900_19 bg-white-A700 p-[19px]">
                    <div className="mt-[9px] pr-[37px] sm:pr-5">
                      <Text size="md" as="p" className="!text-[17.44px] leading-[120%] !text-indigo-900">
                        Redeem these points for cash, services, digital products, and more.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-11 bg-white-A700 px-14 pt-[58px] md:px-5 md:pt-5">
              <div className="mt-[34px] flex flex-col gap-2">
                <Text size="4xl" as="p" className="text-center !font-futurapt capitalize !text-indigo-900">
                  <span className="font-raleway font-semibold text-indigo-900">Frequently&nbsp;</span>
                  <span className="font-raleway font-semibold text-indigo-900">Asked Questions</span>
                </Text>
                <Text size="2xl" as="p" className="text-center">
                  Do you need additional information? Find all your answers here.
                </Text>
              </div>
              <div className="flex gap-5">
                <Button
                  color="indigo_900"
                  size="sm"
                  shape="square"
                  className="min-w-[387px] font-semibold text-white-A700 sm:px-5"
                >
                  For homeowners and individuals
                </Button>
                <Button
                  color="indigo_900"
                  size="sm"
                  variant="outline"
                  shape="square"
                  className="min-w-[347px] font-semibold sm:px-5"
                >
                  For Professional Clients
                </Button>
              </div>
              <div className="flex w-[78%] flex-col items-start self-end py-2.5 md:w-full">
                <div className="mx-auto flex w-full max-w-[792px] flex-wrap items-center justify-between gap-5 md:p-5">
                  <Text size="2xl" as="p" className="!text-black-900">
                    How do you guarantee such high-quality paint jobs?
                  </Text>
                  <Heading as="h4" className="!font-dmsans !font-bold !text-indigo-900">
                    -
                  </Heading>
                </div>
                <Text as="p" className="mt-1 w-[70%] leading-[140%] !text-blue_gray-900_99 md:w-full">
                  Our painters complete specialized training to meet rigorous quality standards. Project managers
                  oversee entire jobs, planning for consistency from start to finish, while precise protocols reinforce
                  meticulous prep, uniform application, and precision detailing. Unlike many painting firms, we do not
                  rely on subcontractors. Instead, we invest in our team to ensure they are masters of their craft!
                </Text>
                <div className="mt-[30px] h-px w-[73%] bg-indigo-900_16" />
                <div className="mb-20 mt-[21px] flex flex-col items-center gap-6 self-stretch">
                  <div className="mx-auto flex w-full max-w-[791px] flex-wrap items-center justify-between gap-5 self-stretch md:p-5">
                    <Text as="p" className="mb-[3px] self-end !text-blue_gray-700">
                      How can I choose the perfect colors for my home?
                    </Text>
                    <Text size="3xl" as="p" className="!text-indigo-900">
                      +
                    </Text>
                  </div>
                  <div className="mx-auto h-px w-full max-w-[792px] self-stretch bg-indigo-900_16 md:p-5" />
                  <div className="mx-auto flex w-full max-w-[791px] flex-wrap items-center justify-between gap-5 self-stretch md:p-5">
                    <Text as="p" className="mb-[3px] self-end !text-blue_gray-700">
                      How long will your paint jobs last?
                    </Text>
                    <Text size="3xl" as="p" className="!text-indigo-900">
                      +
                    </Text>
                  </div>
                  <div className="mx-auto h-px w-full max-w-[792px] self-stretch bg-indigo-900_16 md:p-5" />
                  <div className="mx-auto flex w-full max-w-[791px] flex-wrap items-center justify-between gap-5 self-stretch md:p-5">
                    <Text as="p" className="mb-[3px] self-end !text-blue_gray-700">
                      Are your products environmentally responsible?
                    </Text>
                    <Text size="3xl" as="p" className="!text-indigo-900">
                      +
                    </Text>
                  </div>
                  <div className="mx-auto h-px w-full max-w-[792px] self-stretch bg-indigo-900_16 md:p-5" />
                  <div className="mx-auto flex w-full max-w-[791px] flex-wrap items-center justify-between gap-5 self-stretch md:p-5">
                    <Text as="p" className="mb-[3px] self-end !text-blue_gray-700">
                      Will my home be disrupted and messy during painting?
                    </Text>
                    <Text size="3xl" as="p" className="!text-indigo-900">
                      +
                    </Text>
                  </div>
                  <div className="mx-auto h-px w-full max-w-[792px] self-stretch bg-indigo-900_16 md:p-5" />
                  <div className="mx-auto flex w-full max-w-[791px] flex-wrap items-center justify-between gap-5 self-stretch md:p-5">
                    <Text as="p" className="mb-[3px] self-end !text-blue_gray-700">
                      I’m allergic to some paints. Can you help?
                    </Text>
                    <Text size="3xl" as="p" className="!text-indigo-900">
                      +
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[100px] w-full max-w-[1667px] md:p-5">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[100px] w-[90%] bg-gradient" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-[25px] md:relative md:flex-col">
              <div className="mt-[3px] flex flex-wrap gap-[25px] self-start">
                <Heading as="h2" className="capitalize">
                  -
                </Heading>
                <Heading as="h3" className="capitalize">
                  -
                </Heading>
              </div>
              <Heading as="h4" className="capitalize">
                <span className="text-white-A700">2000+&nbsp;</span>
                <span className="font-normal text-white-A700">Happy Clients</span>
              </Heading>
              <Heading as="h5" className="capitalize">
                -
              </Heading>
              <Heading as="h6" className="capitalize">
                <span className="text-white-A700">26+&nbsp;</span>
                <span className="font-normal text-white-A700">Years Experience</span>
              </Heading>
              <Heading as="h4" className="capitalize">
                -
              </Heading>
              <Heading as="h4" className="capitalize">
                <span className="text-white-A700">94.7%&nbsp;</span>
                <span className="font-normal text-white-A700">Repeat/Referred Customers</span>
              </Heading>
              <Heading as="h4" className="capitalize">
                -
              </Heading>
              <Heading as="h4" className="capitalize">
                <span className="text-white-A700">2000+</span>
                <span className="font-normal text-white-A700">&nbsp;Happy Clients</span>
              </Heading>
              <Heading as="h4" className="capitalize">
                -
              </Heading>
              <Heading as="h4" className="capitalize">
                <span className="text-white-A700">26+&nbsp;</span>
                <span className="font-normal text-white-A700">Years Experience</span>
              </Heading>
            </div>
          </div>
          <div className="flex md:flex-col">
            <div className="h-[756px] w-full bg-[url(/public/images/img_group_6.png)] bg-cover bg-no-repeat md:h-auto md:p-5">
              <Img
                src="images/img_rectangle_4.png"
                alt="image_four"
                className="h-[756px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="flex w-full flex-col items-center bg-gray-50 px-14 py-[85px] md:p-5">
              <div className="mb-9 flex w-[78%] flex-col items-center gap-[29px] md:w-full">
                <div className="flex flex-col items-center gap-[17px] self-stretch">
                  <div className="flex w-[73%] items-center gap-1.5 md:w-full">
                    <RatingBar value={5} isEditable={true} size={16} className="flex justify-between" />
                    <Text as="p" className="text-center !font-lato !text-black-900">
                      <span className="font-dmsans text-blue_gray-900">Rated&nbsp;</span>
                      <span className="font-dmsans font-bold text-blue_gray-900">4.9/5&nbsp;</span>
                      <span className="font-dmsans text-blue_gray-900">| Based on&nbsp;</span>
                      <span className="font-dmsans font-bold text-blue_gray-900">100+</span>
                      <span className="font-dmsans text-blue_gray-900">&nbsp;reviews</span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5 self-stretch">
                    <Heading size="4xl" as="h2" className="text-center capitalize leading-[120%] !text-indigo-900">
                      Ready To Start Your Next Project?
                    </Heading>
                    <div className="flex flex-col gap-6">
                      <Text size="2xl" as="p" className="text-center leading-[140%]">
                        We’d love to discuss how we can make your vision a reality. Please get in touch today.
                      </Text>
                      <Text as="p" className="text-center leading-[140%]">
                        Whether for yourself or a client, we guarantee a hassle-free process and exceptional outcomes.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84%] flex-col items-center gap-[15px] md:w-full">
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_line_1.svg" alt="Line 1" className="h-px w-[16px]" />}
                    className="w-full gap-4 font-bold uppercase sm:px-5"
                  >
                    SCHEDULE MY FREE ESTIMATE
                  </Button>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-3">
                      <Img
                        src="images/img_phone_call_5_1.svg"
                        alt="phonecall5one"
                        className="h-[25px] w-[25px] self-start"
                      />
                      <Text size="lg" as="p" className="self-end text-right capitalize !text-indigo-900_01">
                        Call anytime
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="self-start text-right capitalize !text-yellow-900">
                      (973) 828-8349
                    </Text>
                  </div>
                </div>
                <div className="flex w-[89%] gap-px md:w-full md:flex-row sm:flex-col">
                  <div className="flex flex-1 flex-col items-center gap-5">
                    <Img src="images/img_painter_1.svg" alt="image" className="h-[60px] w-[60px]" />
                    <div className="self-stretch px-5">
                      <Text as="p" className="text-center capitalize leading-[140%]">
                        Experienced & Skilled Painting Crew
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[27%] flex-col items-center gap-5 sm:w-full">
                    <Img src="images/img_guarantee_4_1.svg" alt="guarantee4one" className="h-[60px] w-[60px]" />
                    <Text as="p" className="text-center capitalize leading-[140%]">
                      Satisfaction Guarantee
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-5">
                    <Img
                      src="images/img_painting_brush_1_indigo_900_01.svg"
                      alt="paintingbrush"
                      className="h-[60px] w-[60px]"
                    />
                    <div className="self-stretch px-5">
                      <Text as="p" className="text-center capitalize leading-[140%]">
                        Premium-Quality Paints & Materials
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center self-stretch bg-white-A700 p-[54px] md:p-5">
          <div className="mx-auto mb-[5px] flex w-full max-w-[1242px] items-center justify-between gap-5 md:flex-col">
            <div className="mt-[5px] flex w-[24%] flex-col items-start gap-[11px] md:w-full">
              <Img src="images/img_image_479.png" alt="image479_three" className="h-[75px] w-[59%] object-cover" />
              <Text as="p">© 2024 PTX Painting. All rights reserved.</Text>
            </div>
            <div className="flex w-[29%] items-center justify-between gap-5 md:w-full">
              <div className="flex flex-col items-start gap-[33px]">
                <Heading size="xs" as="h6" className="!text-indigo-900">
                  Home
                </Heading>
                <ul className="flex flex-col items-start gap-[34px]">
                  <li>
                    <a href="#">
                      <div className="flex">
                        <Text as="p" className="!font-medium capitalize !text-indigo-900">
                          Services
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="flex">
                        <Text as="p" className="!font-medium capitalize !text-indigo-900">
                          About us
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="flex">
                        <Text as="p" className="capitalize !text-indigo-900">
                          Privacy Policy
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col items-start gap-[33px]">
                <li>
                  <a href="#">
                    <Text as="p" className="!font-medium !text-indigo-900">
                      Portfolio
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!font-medium capitalize !text-indigo-900">
                      Press
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!font-medium capitalize !text-indigo-900">
                      Contact Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize !text-indigo-900">
                      Terms of Service
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-[25%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-[18px]">
                <Heading as="h4" className="text-center !font-bold uppercase !text-indigo-900">
                  ABOUT US
                </Heading>
                <Text as="p" className="leading-[140%] !text-indigo-900">
                  PTX Painting sets the standard for premium painting services, employing skilled craftsmen to provide
                  reliable, hassle-free experiences for projects of any size
                </Text>
              </div>
              <div className="flex flex-col items-start gap-[13px]">
                <Text size="2xl" as="p" className="text-right !text-indigo-900">
                  Let’s Get Social
                </Text>
                <div className="flex gap-2.5">
                  <Img src="images/img_facebook_8_1.svg" alt="facebook8one" className="h-[30px] w-[30px]" />
                  <Img src="images/img_instagram_13_1.svg" alt="instagram13one" className="h-[30px] w-[30px]" />
                  <Img src="images/img_trash.svg" alt="trash_one" className="h-[30px] w-[30px]" />
                  <Img src="images/img_warning.svg" alt="warning_one" className="h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
