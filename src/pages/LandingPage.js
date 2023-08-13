import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "antd";
import { Button as BsButton, Form } from "react-bootstrap";
import { Select as ChakraSelect } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <div className="relative bg-base-white w-[100%] flex flex-col items-start justify-start">
      <section className="bg-primary-900 w-[100%] overflow-hidden flex flex-col items-center justify-center text-left text-[52px] text-base-white font-headline-m-desktop-semibold">
        <header className="self-stretch flex flex-row py-5 items-center justify-center z-[1] text-left text-mini text-base-white font-headline-m-desktop-semibold border-b-[1px] border-solid border-primary-400">
          <div className="w-[100%] flex flex-row py-0 px-8 box-border items-center justify-between lg:flex-wrap md:flex-wrap sm:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[64px] lg:flex-wrap md:flex-wrap sm:flex-wrap">
              <img
                className="relative w-40 h-10"
                alt=""
                src="/company-logo.svg"
              />
              <nav className="m-0 flex flex-row items-center justify-start gap-[32px] text-left text-mini text-base-white font-headline-m-desktop-semibold">
                <Button className="text-base-white leading-[22px] font-semibold" type="text" size="middle" shape="default">
                  Home
                </Button>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <Button className="text-base-white leading-[22px] font-semibold" type="text" size="middle" shape="default">
                  Our Products
                </Button>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="self-stretch rounded-8xs h-[22px] flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <Button className="text-base-white leading-[22px] font-semibold" type="text" size="middle" shape="default">
                  Resources
                </Button>
                    <ChakraSelect
                      className="relative hidden"
                      variant="filled"
                      w="20px"
                      textColor="rgba(26, 32, 44, 0)"
                      backgroundColor="#3182ce"
                      borderColor="rgba(226, 232, 240, 0)"
                    />
                  </div>
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <Button className="text-base-white leading-[22px] font-semibold" type="text" size="middle" shape="default">
                    Contacts
                </Button>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </nav>
            </div>
            <div className="flex flex-row items-center justify-end gap-[24px]">
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <Button className="text-base-white leading-[22px] font-semibold" type="text" size="middle" shape="default">
                    Login
                </Button>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <BsButton variant="primary">Sign up</BsButton>
            </div>
          </div>
        </header>
        <div className="w-xl flex flex-row pt-12 px-8 pb-20 box-border items-center justify-start gap-[64px] z-[0]  lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse sm:mx-auto">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
            <div className="self-stretch h-[528px] flex flex-col items-start justify-end gap-[80px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[60px] font-bold font-inherit text-[inherit]">
                    Your Supercharged Design Workflow.
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-lg text-primary-200">
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-12 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.1px] leading-[26px]">
                      We’ve been told it is not possible to overachieve our
                      customers’ expectations. We have not reinvented the wheel,
                      we decided to build upon it.
                    </div>
                  </div>
                </div>
                <BsButton variant="primary" className="sm:[100%]">Get Started</BsButton>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[-0.1px] leading-[20px] font-medium">
                    Who supports us
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="relative w-28 h-7 overflow-hidden shrink-0"
                    alt=""
                    src="/company-logo1.svg"
                  />
                  <img
                    className="relative w-28 h-7 overflow-hidden shrink-0"
                    alt=""
                    src="/company-logo2.svg"
                  />
                  <img
                    className="relative w-28 h-7 overflow-hidden shrink-0"
                    alt=""
                    src="/company-logo3.svg"
                  />
                  <img
                    className="relative w-28 h-7 overflow-hidden shrink-0"
                    alt=""
                    src="/company-logo4.svg"
                  />
                  <img
                    className="relative w-32 h-8 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative rounded-3xs w-[640px] h-[656px] mx-auto"
            alt=""
            src="/hero-3--desktop.svg"
          />
        </div>
      </section>
      <section className="bg-base-white w-[100%] flex flex-col py-16 px-0 box-border items-center justify-center gap-[64px] text-left text-sm text-gray-700 font-headline-m-desktop-semibold ">
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-center text-primary-600">
          <div className="w-[100%] flex flex-col items-center justify-center gap-[8px]">
            <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden">
              1% OF THE INDUSTRY
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
              <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.02em] leading-[40px] font-bold font-inherit text-[inherit]">
                Messaging for all
              </h1>
              <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                User generated content in real-time will have multiple
                touchpoints for offshoring.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-start gap-[64px] text-3xl">
          <div className="self-stretch flex flex-row items-start justify-center gap-[32px]">
            <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Easier Work Organization
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">{`Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. `}</div>
                </div>
              </div>
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative leading-[22px] font-semibold  hover:text-gray-400 hover:cursor-pointer">
                  Learn more
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder1@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Fast Connection
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">{`Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. `}</div>
                </div>
              </div>
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative leading-[22px] font-semibold  hover:text-gray-400 hover:cursor-pointer">
                  Learn more
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder2@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Streamlined Processes
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    Objectively innovate empowered scalable manufactured
                    products whereas parallel platforms predominate extensible.
                  </div>
                </div>
              </div>
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative leading-[22px] font-semibold  hover:text-gray-400 hover:cursor-pointer">
                  Learn more
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-8xs hidden" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[32px]">
            <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder3@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Easier Integrations
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    Completely pursue scalable customer try through
                    potentialities. Pontificate portals installed. Efficiently
                    unleash information.
                  </div>
                </div>
              </div>
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative leading-[22px] font-semibold  hover:text-gray-400 hover:cursor-pointer">
                  Learn more
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder4@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Marketing Analytics
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    Phosfluorescently engage worldwide methodologies with
                    web-enabled Interactively coordinate.
                  </div>
                </div>
              </div>
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative leading-[22px] font-semibold  hover:text-gray-400 hover:cursor-pointer">
                  Learn more
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder5@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Workflow Builder
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    Collaboratively administrate turnkey service channels
                    whereas virtual e-tailers. This is objectively scalable
                    metrics whereas.
                  </div>
                </div>
              </div>
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative leading-[22px] font-semibold  hover:text-gray-400 hover:cursor-pointer">
                  Learn more
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-8xs hidden" />
          </div>
        </div>
        <div className="w-[100%] hidden flex-row py-0 px-8 box-border items-center justify-center gap-[16px] text-mini">
          <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-32 overflow-hidden shrink-0 hidden flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] w-32 overflow-hidden shrink-0 flex flex-row py-3 px-[18px] box-border items-center justify-center gap-[6px] text-base-white">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-base-white w-[100%] flex flex-col py-16 px-0 box-border items-center justify-center gap-[64px] text-left text-sm text-gray-700 font-headline-m-desktop-semibold">
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-center text-primary-600">
          <div className="w-[100%] flex flex-col items-center justify-center gap-[8px]">
            <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden">
              1% OF THE INDUSTRY
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
              <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.02em] leading-[40px] font-bold font-inherit text-[inherit]">
                Redefining Product Features
              </h1>
              <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-row py-0 px-8 box-border items-center justify-start xl:gap-[124px] lg:gap-[40px] md:gap-[40px] text-3xl flex lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse">
          <div className="flex-1 flex flex-col items-start justify-start flex lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] flex lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder6@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                      Explore ideas together
                    </h3>
                    <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[22px] font-semibold">
                      Learn more
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder7@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                      Bring those ideas to life
                    </h3>
                    <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[22px] font-semibold">
                      Learn more
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder8@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                      Ship better outcomes
                    </h3>
                    <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[22px] font-semibold">
                      Learn more
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[560px] h-[560px] object-cover"
            alt=""
            src="/leftright@2x.png"
          />
        </div>
        <div className="w-[100%] hidden flex-row py-0 px-8 box-border items-center justify-center gap-[16px] text-mini">
          <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-32 overflow-hidden shrink-0 hidden flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] w-32 overflow-hidden shrink-0 flex flex-row py-3 px-[18px] box-border items-center justify-center gap-[6px] text-base-white">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-950 w-[100%] flex flex-col py-16 px-0 box-border items-center justify-center gap-[64px] text-left text-sm text-primary-600 font-headline-m-desktop-semibold">
        <div className="w-[100%] hidden flex-col py-0 px-8 box-border items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden">
              1% OF THE INDUSTRY
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-neutral-200">
              <b className="self-stretch relative tracking-[-0.02em] leading-[40px]">
                Redefining Product Features
              </b>
              <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-neutral-800">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-row py-0 px-8 box-border items-center justify-start gap-[80px] text-3xl text-neutral-200 lg:flex-wrap md:flex-wrap sm:flex-wrap">
          <img
            className="w-[560px] h-[560px] lg:h-[460px] lg:w-auto relative "
            alt=""
            src="/screenshot-20221009-at-1651-2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start lg:flex-wrap md:flex-wrap sm:flex-wrap">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="rounded-11xl overflow-hidden object-cover"
                  alt=""
                  src="/icon-placeholder6@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                      Explore ideas together
                    </h3>
                    <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-neutral-800">
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[22px] font-semibold">
                      Learn more
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder7@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                      Bring those ideas to life
                    </h3>
                    <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-neutral-800">
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[22px] font-semibold">
                      Learn more
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon-placeholder8@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                      Ship better outcomes
                    </h3>
                    <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-neutral-800">
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[22px] font-semibold">
                      Learn more
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] hidden flex-row py-0 px-8 box-border items-center justify-center gap-[16px] text-mini text-gray-700">
          <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-32 overflow-hidden shrink-0 hidden flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] w-32 overflow-hidden shrink-0 flex flex-row py-3 px-[18px] box-border items-center justify-center gap-[6px] text-base-white">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-base-white w-[100%] flex flex-col py-16 px-0 box-border items-center justify-center gap-[64px] text-left text-sm text-gray-700 font-headline-m-desktop-semibold">
        <div className="w-[100%] hidden flex-col py-0 px-8 box-border items-center justify-center text-primary-600">
          <div className="w-[800px] flex flex-col items-center justify-center gap-[8px]">
            <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden">
              1% OF THE INDUSTRY
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
              <b className="self-stretch relative tracking-[-0.02em] leading-[40px]">
                What Our Customers Say
              </b>
              <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment. Bring to the
                table win-win strategies to ensure domination.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-center text-center text-9xl">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <div className="rounded-8xs overflow-hidden hidden flex-row items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className="flex-1 rounded-3xs bg-neutral-100 flex flex-col p-8 items-start justify-start">
              <div className="self-stretch flex flex-col py-0 px-[154px] items-center justify-start gap-[32px]">
                <img
                  className="relative w-32 h-8"
                  alt=""
                  src="/company-logo5.svg"
                />
                <h2 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[38px] font-medium font-inherit text-[inherit]">
                  Thank you for making it painless, pleasant and most of all
                  hassle free! I love LookScout. I can't say enough about
                  LookScout. Great job, I will definitely be ordering again!
                </h2>
                <div className="flex flex-row items-center justify-start gap-[10px] text-left text-mini">
                  <img
                    className="rounded-31xl w-10 h-10 object-cover"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.1px] leading-[22px] font-medium">
                      Lisa Smith
                    </div>
                    <div className="relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50">
                      CEO Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-8xs overflow-hidden hidden flex-row items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/placeholder.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] hidden flex-row py-0 px-8 box-border items-center justify-center gap-[16px] text-mini">
          <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-32 overflow-hidden shrink-0 hidden flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] w-32 overflow-hidden shrink-0 flex flex-row py-3 px-[18px] box-border items-center justify-center gap-[6px] text-base-white">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-base-white w-[100%] flex flex-col py-16 px-0 box-border items-center justify-center gap-[64px] text-left text-sm text-gray-700 font-headline-m-desktop-semibold">
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-center text-primary-600 lg:flex-wrap md:flex-wrap sm:flex-wrap">
          <div className="w-[100%] flex flex-col items-center justify-center gap-[8px] lg:flex-wrap md:flex-wrap sm:flex-wrap">
            <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden lg:flex-wrap md:flex-wrap sm:flex-wrap">
              1% OF THE INDUSTRY
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
              <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.02em] leading-[40px] font-bold font-inherit text-[inherit]">
                Latest Blog Posts
              </h1>
              <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-row py-0 px-8 box-border items-center justify-center gap-[32px] text-3xl">
          <div className="flex-1 rounded-8xs flex flex-col items-start justify-center gap-[24px]">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[300px] shrink-0 object-cover"
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h3 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[30px] font-semibold font-inherit text-[inherit]">
                    Organize your digital assets with a new methodology here.
                  </h3>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    <p className="m-0">
                      Podcasting operational management inside of workflows to
                      establish a framework seamless.
                    </p>
                    <p className="m-0">Convergence collaboratively.</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[25px] text-sm">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="rounded-31xl w-10 h-10 object-cover"
                    alt=""
                    src="/avatar1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.1px] leading-[20px] font-medium">
                      Andrew Miller
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[20px] text-gray-50">
                      CEO
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative tracking-[-0.1px] leading-[20px] font-medium text-gray-50 text-right">
                  25 Apr
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-8xs flex flex-col items-start justify-center gap-[24px]">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[300px] shrink-0 object-cover"
              alt=""
              src="/rectangle-11@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[30px] font-semibold">
                    Organize your digital assets with a new methodology here.
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    Keeping your eye while performing a deep dive on the
                    start-up mentality to derive convergence collaboratively.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[25px] text-sm">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="rounded-31xl w-10 h-10 object-cover"
                    alt=""
                    src="/avatar2@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.1px] leading-[20px] font-medium">
                      David Munsan
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[20px] text-gray-50">
                      UX
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative tracking-[-0.1px] leading-[20px] font-medium text-gray-50 text-right">
                  25 Apr
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-8xs flex flex-col items-start justify-center gap-[24px]">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[300px] shrink-0 object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[30px] font-semibold">
                    Organize your digital assets with a new methodology here.
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C .
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[25px] text-mini">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="rounded-31xl w-10 h-10 object-cover"
                    alt=""
                    src="/avatar3@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.1px] leading-[22px] font-medium">
                      Andrew Meller
                    </div>
                    <div className="relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50">
                      UI
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50 text-right">
                  25 Apr
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] hidden flex-row py-0 px-8 box-border items-center justify-center gap-[16px] text-mini">
          <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-32 overflow-hidden shrink-0 hidden flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] w-32 overflow-hidden shrink-0 flex flex-row py-3 px-[18px] box-border items-center justify-center gap-[6px] text-base-white">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-base-white w-[100%] flex flex-col py-16 px-0 box-border items-center justify-start gap-[64px] text-left text-sm text-primary-600 font-headline-m-desktop-semibold">
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-center flex lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse">
          <div className="w-[100%] flex flex-col items-center justify-center gap-[8px]">
            <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden">
              1% OF THE INDUSTRY
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
              <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.02em] leading-[40px] font-bold font-inherit text-[inherit]">
                Proud to Be Used By
              </h1>
              <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
                Professionally cultivate one-to-one customer service with robust
                ideas. Dynamically innovate resource-leveling customer service
                for state of the art customer service.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[100%] flex flex-col py-0 px-8 box-border items-center justify-start flex lg:flex-wrap md:flex-wrap sm:flex-wrap">
          <div className="relative self-stretch flex flex-row items-start justify-center gap-[64px] lg:flex-wrap md:flex-wrap sm:flex-wrap">
            <img
              className="relative w-32 h-8 overflow-hidden shrink-0"
              alt=""
              src="/press-logo.svg"
            />
            <img
              className="relative w-32 h-8 overflow-hidden shrink-0"
              alt=""
              src="/company-logo6.svg"
            />
            <img
              className="relative w-32 h-8 overflow-hidden shrink-0"
              alt=""
              src="/company-logo7.svg"
            />
            <img
              className="relative w-32 h-8 overflow-hidden shrink-0"
              alt=""
              src="/company-logo8.svg"
            />
            <img
              className="relative w-32 h-8 overflow-hidden shrink-0"
              alt="Hello"
              src="/company-logo9.svg"
            />
            <img
              className="relative w-32 h-8 overflow-hidden shrink-0"
              alt=""
              src="/company-logo10.svg"
            />
          </div>
        </div>
        <div className="w-[100%] hidden flex-row py-0 px-8 box-border items-center justify-center gap-[16px] text-mini text-gray-700">
          <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-32 overflow-hidden shrink-0 hidden flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] w-32 overflow-hidden shrink-0 flex flex-row py-3 px-[18px] box-border items-center justify-center gap-[6px] text-base-white">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
            <div className="relative leading-[22px] font-semibold">Button</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 w-[100%] overflow-hidden flex flex-row py-16 px-0 box-border items-center justify-center text-left text-sm text-primary-600 font-headline-m-desktop-semibold">
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-center justify-center gap-[32px]">
          <div className="w-[auto] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative tracking-[-0.1px] leading-[20px] font-semibold">
                1% OF THE INDUSTRY
              </div>
              <div className="w-[auto] flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
                <h1 className="m-0 self-stretch relative text-[inherit] tracking-[-0.01em] leading-[42px] font-semibold font-inherit text-[inherit]">
                  Welcome to your new digital reality that will rock your world
                  truly at all throughout.
                </h1>
                <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50 hidden">
                  <p className="m-0">
                    Let us help you take you from zero to serious business and
                    beyond.
                  </p>
                  <p className="m-0">
                    Our no-strings attached free trial lets you test our product
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[32px] text-gray-700">
            <div className="w-[auto] flex flex-col py-0 px-[120px] box-border items-center justify-start">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.1px] leading-[20px] font-medium hidden">
                  Label
                </div>
                <div className="self-stretch rounded-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row items-start justify-start">
                  <Form.Group className="[border:none] bg-[transparent] flex-1">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <BsButton className="mt-[30px]" variant="primary">Submit</BsButton>
                </div>
                <div className="self-stretch relative tracking-[-0.1px] leading-[20px] text-gray-50 hidden">
                  Hint text
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[40px] text-base">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/vertical-container@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                    Fully Secure
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[24px] text-gray-50 hidden">
                    Supporting text goes here
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/vertical-container@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                    24/7 Support
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[24px] text-gray-50 hidden">
                    Supporting text goes here
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/vertical-container@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                    Done Deal
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[24px] text-gray-50 hidden">
                    Supporting text goes here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-950 w-[100%] flex flex-col py-16 px-0 box-border items-center justify-start text-left text-base text-neutral-200 font-headline-m-desktop-semibold">
        <div className="w-[100%] flex flex-col py-0 px-8 box-border items-start justify-start gap-[48px] lg:flex-wrap md:flex-wrap sm:flex-wrap">
          <div className="self-stretch flex flex-row items-start justify-between lg:flex-wrap md:flex-wrap sm:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[16px] text-neutral-800 lg:flex-wrap md:flex-wrap sm:flex-wrap">
              <img
                className="relative w-40 h-10"
                alt=""
                src="/company-logo11.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.1px] leading-[24px] inline-block w-[247px]">
                  Generate outside the box thinking with the possibility to
                  targtet the low.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
                  Resources
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-neutral-800">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Community
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Events
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Help Center
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Partners
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
                  Products
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-neutral-800">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Integrations
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Solutions
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Features
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[24px] font-medium hover:text-white hover:cursor-pointer">
                    Enterprise
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
                  Get Email Notifications
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-neutral-800">
                <div className="relative tracking-[-0.1px] leading-[24px] inline-block w-[302px]">
                  Generate outside the box thinking with the possibility to
                  targtet the low
                </div>
                <div className="w-[302px] flex flex-col items-start justify-start gap-[8px] text-sm text-neutral-200">
                  <div className="self-stretch relative tracking-[-0.1px] leading-[20px] font-medium hidden">
                    Label
                  </div>
                  <div className="self-stretch rounded-md overflow-hidden flex flex-row items-start justify-start">
                    <Form.Group className="[border:none] bg-[transparent] flex-1">
                      <Form.Label>Enter email....</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <BsButton className="mt-[27px]" variant="primary">Submit</BsButton>
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[20px] text-neutral-800 hidden">
                    Hint text
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row pt-6 px-0 pb-0 items-center justify-between text-center text-neutral-800 border-t-[1px] border-solid border-gray-300">
            <div className="relative tracking-[-0.1px] leading-[24px]">
              © 2023 Lookscout. All Rights Reserved.
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hover:cursor-pointer hover:opacity-50"
                alt=""
                src="/social-platforms-logo.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hover:cursor-pointer hover:opacity-50"
                alt=""
                src="/social-platforms-logo1.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hover:cursor-pointer hover:opacity-50"
                alt=""
                src="/social-platforms-logo2.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hover:cursor-pointer hover:opacity-50"
                alt=""
                src="/social-platforms-logo3.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
