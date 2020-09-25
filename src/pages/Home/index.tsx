import React, { useState, useMemo } from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { FiChevronDown } from 'react-icons/fi';
import {
  Container,
  Section,
  FrameWrapper,
  FrameWrapperContent,
  Frame,
  FrameItemsWrapper,
  FrameBorder,
  FrameItem,
  LeftSide,
  RightSide,
  BackgroundRightSide,
  ButtonsContainer,
  GreenBox,
  YesNoContainer,
  HowYouFeelTodayContainer,
  HowYouFeelButtons,
  FormButtonsLegend,
  AdvantagesContainer,
  RowAdvantage,
  ColumnAdvantage,
  YouUsedToNeedDevelopersContainer,
  Footer,
  UiCloneCredits,
} from './styles';

const Home: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const frameScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1],
  );

  const frameBorderOpacity = useTransform(
    scrollYProgress,
    [0.196, 0.198],
    [0, 1],
  );

  const frameBorderScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8],
  );

  const frameBorderWidth = useTransform(
    scrollYProgress,
    [0.198, 0.264],
    [0, 6],
  );

  const frameWrapperContentOpacity = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 1, 1, 0],
  );

  const greenBoxHeight = useTransform(
    scrollYProgress,
    [0, 0.019],
    ['10vh', '100vh'],
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%'],
  );

  const howAreYouFeelingButtonsAmount = useMemo(() => {
    return Array.from(
      {
        length: 10,
      },
      (_, i) => i + 1,
    );
  }, []);

  const imagesCarrousel = useMemo(
    () => [
      'https://www.typeform.com/static/home-page/hero/layouts-1@2x.jpg',
      'https://www.typeform.com/static/home-page/hero/layouts-2@2x.jpg',
      'https://www.typeform.com/static/home-page/hero/layouts-3@2x.jpg',
      'https://www.typeform.com/static/home-page/hero/layouts-4@2x.jpg',
    ],
    [],
  );

  return (
    <Container>
      <Header />
      <Section style={{ height: '72.7%' }}>
        <FrameWrapper>
          <FrameWrapperContent
            style={{
              opacity: frameWrapperContentOpacity,
            }}
          >
            <h1>Bring questions to life</h1>
            <h2>
              Free access to millions of images and videos. <br />
              Courtesy of our friends at Unsplash and Pexels.
            </h2>
          </FrameWrapperContent>
          <FrameBorder
            style={{
              borderWidth: frameBorderWidth,
              scale: frameBorderScale,
              opacity: frameBorderOpacity,
            }}
          />
          <Frame
            style={{
              scale: frameScale,
            }}
          >
            <FrameItemsWrapper style={{ y: offsetY }}>
              <FrameItem>
                <LeftSide>
                  <h1>People-friendly forms and surveys</h1>
                  <h2>
                    Turn a list of questions into a friendly conversation. And
                    get better data.
                  </h2>

                  <ButtonsContainer>
                    <Button black>Sign up for free</Button>
                    <a href="/">Take a peek</a>
                  </ButtonsContainer>

                  <GreenBox style={{ height: greenBoxHeight }} />
                </LeftSide>
                <RightSide />
              </FrameItem>
              <FrameItem>
                <LeftSide backgroundColor="#582534">
                  <form>
                    <h1>Do you like this architeture ?</h1>
                    <YesNoContainer>
                      <button type="button">
                        <span>A </span>
                        <h1>Yes</h1>
                      </button>
                      <button type="button">
                        <span>B </span>
                        <h1>No</h1>
                      </button>
                    </YesNoContainer>
                  </form>
                </LeftSide>
                <RightSide>
                  <BackgroundRightSide backgroundURL="https://www.typeform.com/static/home-page/hero/city.jpg" />
                </RightSide>
              </FrameItem>
              <FrameItem>
                <HowYouFeelTodayContainer>
                  <div>
                    <form>
                      <h1>How do you feel today?</h1>
                      <HowYouFeelButtons>
                        {howAreYouFeelingButtonsAmount.map(value => (
                          <button key={`button-${value}`}>{value}</button>
                        ))}
                      </HowYouFeelButtons>
                      <FormButtonsLegend>
                        <span>Tired</span>
                        <span>Energetic</span>
                      </FormButtonsLegend>
                    </form>
                  </div>
                </HowYouFeelTodayContainer>
              </FrameItem>
            </FrameItemsWrapper>
          </Frame>
        </FrameWrapper>
      </Section>
      <Section style={{ height: '25.3%', background: '#fff' }}>
        <AdvantagesContainer>
          <RowAdvantage>
            <div>
              <h1>Look iconic</h1>
              <p>
                Icons are the universal <br /> language. <br /> Now you're
                fluent
              </p>
            </div>
            <video autoPlay loop playsInline preload="auto">
              <source
                src="https://www.typeform.com/static/home-page/hero/icons-desktop-en.mp4"
                type="video/mp4"
              />
            </video>
          </RowAdvantage>
          <ColumnAdvantage>
            <div>
              <h1>Make it yours</h1>
              <p>
                With custom layouts, you'll put your best foot forward every
                time.
              </p>
            </div>
            <div>
              <div>
                <button onClick={() => setSelectedImageIndex(0)}>
                  <img
                    src="https://www.typeform.com/static/home-page/hero/layouts-1.svg"
                    alt="1"
                  />
                </button>
                <button onClick={() => setSelectedImageIndex(1)}>
                  <img
                    src="https://www.typeform.com/static/home-page/hero/layouts-2.svg"
                    alt="2"
                  />
                </button>
                <button onClick={() => setSelectedImageIndex(2)}>
                  <img
                    src="https://www.typeform.com/static/home-page/hero/layouts-3.svg"
                    alt="3"
                  />
                </button>
                <button onClick={() => setSelectedImageIndex(3)}>
                  <img
                    src="https://www.typeform.com/static/home-page/hero/layouts-4.svg"
                    alt="4"
                  />
                </button>
              </div>
              <img
                src={imagesCarrousel[selectedImageIndex]}
                alt="Demonstration"
              />
            </div>
          </ColumnAdvantage>
          <RowAdvantage backgroundColor="#FCFAF8">
            <div>
              <h1>Integrations that banish busywork</h1>
              <p>
                Sync responses to Google Sheets. Ping people in Slack when
                someone fills out your survey. Sit back and watch your work
                flow.
                <br /> <br />
                <a href="#">See all integrations</a>
              </p>
            </div>
            <div>
              <div>
                <div>
                  <img
                    alt="zapier"
                    src="https://www.typeform.com/static/home-page/integrations/zapier@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="airtable"
                    src="https://www.typeform.com/static/home-page/integrations/airtable@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="gsheets"
                    src="https://www.typeform.com/static/home-page/integrations/gsheets@2x.png"
                  />
                </div>
              </div>
              <div>
                <div>
                  <img
                    alt="ganalytics"
                    src="https://www.typeform.com/static/home-page/integrations/ganalytics@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="mailchimp"
                    src="https://www.typeform.com/static/home-page/integrations/mailchimp@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="slack"
                    src="https://www.typeform.com/static/home-page/integrations/slack@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="hubspot"
                    src="https://www.typeform.com/static/home-page/integrations/hubspot@2x.png"
                  />
                </div>
              </div>
              <div>
                <div>
                  <img
                    alt="gtm"
                    src="https://www.typeform.com/static/home-page/integrations/gtm@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="web-hook"
                    src="https://www.typeform.com/static/home-page/integrations/web-hook@2x.png"
                  />
                </div>
                <div>
                  <img
                    alt="facebookpixel"
                    src="https://www.typeform.com/static/home-page/integrations/facebookpixel@2x.png"
                  />
                </div>
              </div>
            </div>
          </RowAdvantage>
        </AdvantagesContainer>
        <YouUsedToNeedDevelopersContainer>
          <div>
            <h1>”You used to need developers to do all this. Not anymore.”</h1>
            <strong>Kyle Maltz</strong>
            <span>Sales & Partnerships at Dollar Flight Club</span>

            <Button black>Sign up for FREE</Button>
          </div>
        </YouUsedToNeedDevelopersContainer>
      </Section>
      <Footer>
        <div>
          <div>
            <h1>Product</h1>
            <a href="#">Pricing</a>
            <a href="#">Professional features</a>
            <a href="#">Lead generation</a>
            <a href="#">Conversations</a>
          </div>
          <div>
            <h1>Templates</h1>
            <a href="#">
              Popular templates <FiChevronDown color="#fff" />
            </a>
            <a href="#">
              Lead generation <FiChevronDown color="#fff" />
            </a>
            <a href="#">
              Form templates <FiChevronDown color="#fff" />
            </a>
            <a href="#">
              Questionnaire & Survey Templates <FiChevronDown color="#fff" />
            </a>
          </div>
          <div>
            <h1>Integrations</h1>
            <a href="#">Google sheets</a>
            <a href="#">Zapier</a>
            <a href="#">Google analytics</a>
            <a href="#">Mail chimp</a>
            <a href="#">HubSpot</a>
            <a href="#">Facebook Pixel</a>
            <a href="#">Airtable</a>
            <a href="#">All apps & Integrations</a>
          </div>
          <div>
            <h1>Resources</h1>
            <a href="#">Help Center</a>
            <a href="#">Tutorials</a>
            <a href="#">FAQs</a>
            <a href="#">System status</a>
            <a href="#">Developers / API</a>
          </div>
          <div>
            <h1>Get to Know Us</h1>
            <a href="#">Our blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact us</a>
            <a href="#">News</a>
            <a href="#">Terms & Conditions</a>

            <div></div>
          </div>
        </div>
        <hr />
        <UiCloneCredits>
          <div>
            UI Clone made by <a href="https://github.com/tsuyusk">Tsuyusk</a>
          </div>
          <div>
            UI Cloned:{' '}
            <a href="https://www.typeform.com/">Typeform landing page</a>
          </div>
        </UiCloneCredits>
      </Footer>
    </Container>
  );
};

export default Home;
