import React from "react";
import { AimFill } from "./AimFill";
import { AvatarDescription } from "./AvatarDescription";
import { BlockHeader } from "./BlockHeader";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { CompanyLogo } from "./CompanyLogo.svg";
import { Footer } from "./Footer";
import { Icon } from "./Icon";
import { IconComponentNode } from "./IconComponentNode";
import { IconPlaceholder } from "./IconPlaceholder";
import { InputField } from "./InputField";
import { Intersect2Fill } from "./Intersect2Fill";
import { LeftToRight } from "./LeftToRight";
import { LightBulbFill } from "./LightBulbFill";
import { LogoSection } from "./LogoSection";
import { MindMap1Fill } from "./MindMap1Fill";
import { MindMap4Fill } from "./MindMap4Fill";
import { MindMap5Fill } from "./MindMap5Fill";
import { NamecandidateNameSocialPlatformsLogoScore101 } from "./NamecandidateNameSocialPlatformsLogoScore101";
import { PageHeader } from "./PageHeader";
import { PaperPlaneFill } from "./PaperPlaneFill";
import { PenFill } from "./PenFill";
import { Right } from "./Right";
import { SocialPlatformsLogo } from "./SocialPlatformsLogo";
import { SubtitleIcon } from "./SubtitleIcon";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <PageHeader
          breakPoint="desktop"
          className="page-header-instance"
          companyLogoLogoLookscoutTheme="company-logo-12.svg"
          dropdown="off"
          theme="color"
          variant="one"
        />
        <div className="card">
          <div className="hero-base">
            <div className="horizontal-container-2">
              <div className="div-4">
                <div className="horizontal-container-3">
                  <div className="text-wrapper-8">Your Supercharged Design Workflow.</div>
                  <SubtitleIcon
                    className="subtitle-icon-instance"
                    showIcon={false}
                    text="We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it."
                    thisIsAnSubtitleClassName="subtitle-icon-2"
                  />
                </div>
                <div className="button-2">
                  <Button
                    className="design-component-instance-node-4"
                    destructive={false}
                    hierarchy="primary"
                    leftIcon={false}
                    rightIcon={false}
                    size="large"
                    state="default"
                    text="Get Started"
                    textClassName="button-3"
                    theme="default"
                    type="button"
                  />
                </div>
              </div>
              <div className="div-5">
                <div className="text-input-3">
                  <div className="text-wrapper-9">Who supports us</div>
                </div>
                <div className="text-input-4">
                  <CompanyLogo
                    className="company-logo-3"
                    logo="gitlab"
                    logoGitlabTheme="company-logo-6.svg"
                    theme="white"
                  />
                  <CompanyLogo
                    className="company-logo-3"
                    logo="slack"
                    logoSlackTheme="company-logo-7.svg"
                    theme="white"
                  />
                  <CompanyLogo
                    className="company-logo-3"
                    logo="netflix"
                    logoNetflixTheme="company-logo-8.svg"
                    theme="white"
                  />
                  <CompanyLogo
                    className="company-logo-3"
                    logo="paypal"
                    logoPaypalTheme="company-logo-9.svg"
                    theme="white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-desktop">
            <div className="overlap-group">
              <div className="background" />
              <div className="graphic-elements">
                <img className="elem" alt="Elem" src="elem-1.svg" />
                <img className="img" alt="Elem" src="elem-2.svg" />
                <img className="elem-2" alt="Elem" src="elem-3.svg" />
                <img className="elem-3" alt="Elem" src="elem-4.svg" />
                <img className="elem-4" alt="Elem" src="elem-5.svg" />
                <div className="ellipse-wrapper">
                  <div className="ellipse" />
                </div>
                <img className="elem-5" alt="Elem" src="elem-7.png" />
                <div className="elem-6" />
                <img className="elem-7" alt="Elem" src="elem-9.svg" />
                <img className="rectangle" alt="Rectangle" src="rectangle-34624127.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-6">
        <BlockHeader
          breakpoint="desktop"
          className="design-component-instance-node-4"
          hierarchy="default"
          orientation="center"
          text="Messaging for all"
          text1="User generated content in real-time will have multiple touchpoints for offshoring."
        />
        <div className="content-2">
          <div className="content-3">
            <div className="features-base">
              <div className="content-4">
                <IconPlaceholder
                  className="design-component-instance-node-4"
                  icon={<MindMap1Fill className="icon-3" color="white" />}
                  iconType="fill"
                  size="default"
                  style="round"
                  type="primary-white"
                />
                <div className="text-container-3">
                  <div className="text-wrapper-10">Easier Work Organization</div>
                  <p className="div-7">
                    Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables
                    for real-time schemas.
                  </p>
                </div>
              </div>
              <Button
                className="design-component-instance-node-4"
                destructive={false}
                hierarchy="primary"
                icon={<Right className="arrow-right-2" />}
                leftIcon={false}
                size="large"
                state="default"
                text="Learn more"
                theme="default"
                type="link"
              />
            </div>
            <div className="features-base">
              <div className="content-4">
                <IconPlaceholder
                  className="design-component-instance-node-4"
                  icon={<AimFill className="icon-3" color="white" />}
                  iconType="fill"
                  size="default"
                  style="round"
                  type="primary-white"
                />
                <div className="text-container-3">
                  <div className="text-wrapper-10">Fast Connection</div>
                  <p className="div-7">
                    Completely pursue scalable customer cross- media through potentialities. Holistically quickly
                    installed portals.
                  </p>
                </div>
              </div>
              <Button
                className="design-component-instance-node-4"
                destructive={false}
                hierarchy="primary"
                icon={<Right className="arrow-right-2" />}
                leftIcon={false}
                size="large"
                state="default"
                text="Learn more"
                theme="default"
                type="link"
              />
            </div>
            <div className="features-base">
              <div className="content-4">
                <IconPlaceholder
                  className="design-component-instance-node-4"
                  icon={<MindMap4Fill className="icon-3" color="white" />}
                  iconType="fill"
                  size="default"
                  style="round"
                  type="primary-white"
                />
                <div className="text-container-3">
                  <div className="text-wrapper-10">Streamlined Processes</div>
                  <p className="div-7">
                    Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate
                    extensible.
                  </p>
                </div>
              </div>
              <Button
                className="design-component-instance-node-4"
                destructive={false}
                hierarchy="primary"
                icon={<Right className="arrow-right-2" />}
                leftIcon={false}
                size="large"
                state="default"
                text="Learn more"
                theme="default"
                type="link"
              />
            </div>
          </div>
          <div className="content-3">
            <div className="features-base">
              <div className="content-4">
                <IconPlaceholder
                  className="design-component-instance-node-4"
                  icon={<Intersect2Fill className="icon-3" color="white" />}
                  iconType="fill"
                  size="default"
                  style="round"
                  type="primary-white"
                />
                <div className="text-container-3">
                  <div className="text-wrapper-10">Easier Integrations</div>
                  <p className="div-7">
                    Completely pursue scalable customer try through potentialities. Pontificate portals installed.
                    Efficiently unleash information.
                  </p>
                </div>
              </div>
              <Button
                className="design-component-instance-node-4"
                destructive={false}
                hierarchy="primary"
                icon={<Right className="arrow-right-2" />}
                leftIcon={false}
                size="large"
                state="default"
                text="Learn more"
                theme="default"
                type="link"
              />
            </div>
            <div className="features-base">
              <div className="content-4">
                <IconPlaceholder
                  className="design-component-instance-node-4"
                  icon={<MindMap5Fill className="icon-3" color="white" />}
                  iconType="fill"
                  size="default"
                  style="round"
                  type="primary-white"
                />
                <div className="text-container-3">
                  <div className="text-wrapper-10">Marketing Analytics</div>
                  <p className="div-7">
                    Phosfluorescently engage worldwide methodologies with web-enabled&nbsp;&nbsp;Interactively
                    coordinate.
                  </p>
                </div>
              </div>
              <Button
                className="design-component-instance-node-4"
                destructive={false}
                hierarchy="primary"
                icon={<Right className="arrow-right-2" />}
                leftIcon={false}
                size="large"
                state="default"
                text="Learn more"
                theme="default"
                type="link"
              />
            </div>
            <div className="features-base">
              <div className="content-4">
                <IconPlaceholder
                  className="design-component-instance-node-4"
                  icon={<PenFill className="icon-3" color="white" />}
                  iconType="fill"
                  size="default"
                  style="round"
                  type="primary-white"
                />
                <div className="text-container-3">
                  <div className="text-wrapper-10">Workflow Builder</div>
                  <p className="div-7">
                    Collaboratively administrate turnkey service channels whereas virtual e-tailers. This&nbsp;&nbsp;is
                    objectively scalable metrics whereas.
                  </p>
                </div>
              </div>
              <Button
                className="design-component-instance-node-4"
                destructive={false}
                hierarchy="primary"
                icon={<Right className="arrow-right-2" />}
                leftIcon={false}
                size="large"
                state="default"
                text="Learn more"
                theme="default"
                type="link"
              />
            </div>
          </div>
        </div>
      </div>
      <LeftToRight
        breakPoint="desktop"
        className="design-component-instance-node-4"
        leftRightPhoto="photo-2.png"
        leftToRightBaseButtonIcon={<Right className="arrow-right-2" />}
        leftToRightBaseButtonIcon1={<Right className="arrow-right-2" />}
        leftToRightBaseIconPlaceholderIcon={<Icon className="icon-3" />}
        leftToRightBaseIconPlaceholderIcon1={<PaperPlaneFill className="icon-3" color="white" />}
        leftToRightBaseIconPlaceholderIcon2={<LightBulbFill className="icon-3" color="white" />}
        orientation={false}
        override={<Right className="arrow-right-2" />}
        theme="light"
        variant="five"
      />
      <LeftToRight
        breakPoint="desktop"
        className="design-component-instance-node-4"
        header={false}
        leftRightImg="photo-3.png"
        leftToRightBaseButtonIcon2={<Right className="arrow-right-2" />}
        leftToRightBaseButtonIcon3={<Right className="arrow-right-2" />}
        leftToRightBaseButtonIcon4={<Right className="arrow-right-2" />}
        leftToRightBaseIconPlaceholderIcon3={<Icon className="icon-3" />}
        leftToRightBaseIconPlaceholderIcon4={<PaperPlaneFill className="icon-3" color="white" />}
        leftToRightBaseIconPlaceholderIcon5={<LightBulbFill className="icon-3" color="white" />}
        orientation
        theme="dark"
        variant="five"
      />
      <div className="div-6">
        <div className="content-wrapper">
          <div className="content-5">
            <div className="horizontal-container-wrapper">
              <div className="horizontal-container-4">
                <CompanyLogo className="company-logo-4" img="company-logo-10.svg" logo="lookscout" theme="default" />
                <p className="thank-you-for-making">
                  Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can&#39;t
                  say enough about LookScout. Great job, I will definitely be ordering again!
                </p>
                <AvatarDescription
                  avatarTypePhotoSizeClassName="avatar-description-instance"
                  className="design-component-instance-node-4"
                  size="large"
                  text="Lisa Smith"
                  text1="CEO Company"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-6">
        <BlockHeader
          breakpoint="desktop"
          className="design-component-instance-node-4"
          hierarchy="default"
          orientation="center"
          text="Latest Blog Posts"
          text1="Completely synergize resource taxing relationships via premier niche markets. Professionally&nbsp;&nbsp;cultivate one-to-one customer service with robust ideas."
        />
        <div className="content-6">
          <div className="blog-base">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1.png" />
            <div className="container-4">
              <div className="div-4">
                <div className="div-5">
                  <p className="text-wrapper-10">Organize your digital assets with a new methodology here.</p>
                  <p className="div-7">
                    <span className="span">
                      Podcasting operational management inside of workflows to establish a framework seamless.
                      <br />
                      Convergence collaboratively.
                    </span>
                  </p>
                </div>
              </div>
              <div className="horizontal-container-5">
                <AvatarDescription
                  avatarTypePhotoSizeClassName="avatar-description-2"
                  className="design-component-instance-node-4"
                  size="medium"
                  text="Andrew Miller"
                  text1="CEO"
                />
                <div className="text-wrapper-11">25 Apr</div>
              </div>
            </div>
          </div>
          <div className="blog-base">
            <img className="rectangle-2" alt="Rectangle" src="image.png" />
            <div className="container-4">
              <div className="div-4">
                <div className="div-5">
                  <p className="text-wrapper-10">Organize your digital assets with a new methodology here.</p>
                  <p className="div-7">
                    Keeping your eye while performing a deep dive on the start-up mentality to derive convergence
                    collaboratively.
                  </p>
                </div>
              </div>
              <div className="horizontal-container-5">
                <AvatarDescription
                  avatarTypePhotoSizeClassName="avatar-description-3"
                  className="design-component-instance-node-4"
                  size="medium"
                  text="David Munsan"
                  text1="UX"
                />
                <div className="text-wrapper-11">25 Apr</div>
              </div>
            </div>
          </div>
          <div className="blog-base">
            <img className="rectangle-2" alt="Rectangle" src="rectangle-1-2.png" />
            <div className="container-4">
              <div className="div-4">
                <div className="div-5">
                  <p className="text-wrapper-10">Organize your digital assets with a new methodology here.</p>
                  <p className="div-7">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate
                    B2C .
                  </p>
                </div>
              </div>
              <div className="horizontal-container-5">
                <AvatarDescription
                  avatarTypePhotoSizeClassName="avatar-description-4"
                  className="design-component-instance-node-4"
                  size="large"
                  text="Andrew Meller"
                  text1="UI"
                />
                <div className="text-wrapper-11">25 Apr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSection
        breakPoint="desktop"
        className="design-component-instance-node-4"
        companyLogoLogoGoogleTheme="company-logo-15.svg"
        companyLogoLogoMailchimpTheme="company-logo-17.svg"
        companyLogoLogoPaypalTheme="company-logo-16.svg"
        companyLogoLogoPinterestTheme="company-logo-13.svg"
        companyLogoLogoSlackTheme="company-logo-14.svg"
        pressLogoPropertyTheVerge="press-logo-2.svg"
        theme="light"
        variant="two"
      />
      <div className="call-to-action">
        <div className="content-ccenter">
          <div className="button-wrapper">
            <div className="button-4">
              <div className="text-wrapper-12">1% OF THE INDUSTRY</div>
              <div className="paragraph-container-2">
                <p className="headline-2">
                  Welcome to your new digital reality that will rock your world truly at all throughout.
                </p>
              </div>
            </div>
          </div>
          <div className="card-2">
            <div className="segmented-picker">
              <InputField
                buttonText="Submit"
                className="input-field-3"
                destructive={false}
                hintText={false}
                label={false}
                showIcon={false}
                size="medium"
                state="placeholder"
                text="Enter your email"
                theme="light"
                type="has-button"
              />
            </div>
            <div className="horizontal-container-6">
              <Checkbox
                checkboxBaseType="round-checkbox"
                checked
                className="checkbox-instance"
                divClassName="checkbox-3"
                hasText
                size="medium"
                supportingText={false}
                text="Fully Secure"
                textContainerClassName="checkbox-2"
                theme="light"
              />
              <Checkbox
                checkboxBaseType="round-checkbox"
                checked
                className="checkbox-instance"
                divClassName="checkbox-3"
                hasText
                size="medium"
                supportingText={false}
                text="24/7 Support"
                textContainerClassName="checkbox-2"
                theme="light"
              />
              <Checkbox
                checkboxBaseType="round-checkbox"
                checked
                className="checkbox-instance"
                divClassName="checkbox-3"
                hasText
                size="medium"
                supportingText={false}
                text="Done Deal"
                textContainerClassName="checkbox-2"
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        breakPoint="desktop"
        className="footer-instance"
        companyLogoLogoLookscoutTheme="company-logo-18.svg"
        icon={<SocialPlatformsLogo className="social-platforms-logo" />}
        icon1={<NamecandidateNameSocialPlatformsLogoScore101 className="social-platforms-logo" />}
        override={<IconComponentNode className="social-platforms-logo" />}
        theme="dark"
        variant="three"
      />
    </div>
  );
};

export default LandingPage;
