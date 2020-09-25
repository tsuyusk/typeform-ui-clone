import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

export const Container = styled.main`
  height: 1610vh;
  background: #f5f1ea;
`;

export const Section = styled.section`
  width: 100%;
  position: relative;
`;

export const FrameWrapper = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
`;

export const FrameWrapperContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  padding: 16px;

  > h1 {
    font-size: 48px;
    font-weight: 300;
  }

  > h2 {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const Frame = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const FrameItemsWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const FrameBorder = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-color: #fff;
  border-style: solid;
  border-radius: 4px;
  z-index: 1;
  pointer-events: none;
`;

export const FrameItem = styled.section`
  display: flex;
  height: 100vh;
`;

interface LeftSideProps {
  backgroundColor?: string;
}

export const LeftSide = styled.div<LeftSideProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 64px;

  width: 50%;

  background: ${props => props.backgroundColor || 'transparent'};

  > h1 {
    font-size: 64px;
    font-weight: 300;
  }

  > h2 {
    font-weight: 300;
    color: #262627;
  }

  > form {
    > h1 {
      color: #fff;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 16px;

  > a {
    text-decoration: underline;
    margin-left: 16px;
  }
`;

export const GreenBox = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #7dbb91;
  z-index: -1;
`;

export const RightSide = styled.div`
  width: 50%;
`;

interface BackgroundRightSideProps {
  backgroundURL: string;
}

export const BackgroundRightSide = styled.div<BackgroundRightSideProps>`
  width: 100%;
  height: 100%;
  background: url(${props => props.backgroundURL}) center no-repeat;
  background-size: cover;
`;

export const YesNoContainer = styled.div`
  margin-top: 36px;
  > button {
    padding: 4px;
    width: 120px;
    display: flex;
    align-items: center;
    border: 1px solid #ffffff50;
    background: #ffffff25;
    overflow-x: visible;

    > span {
      display: flex;
      border: 1px solid #ffffff80;
      color: #fff;
      margin-right: 8px;
    }

    > h1 {
      color: #fff;
    }

    &:hover {
      border-color: #ffffff90;
      background: #ffffff65;

      > span {
        position: relative;
      }
    }
  }
`;

export const HowYouFeelTodayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url('https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg')
    no-repeat center;
  background-size: cover;

  > div {
    position: relative;
    z-index: 9;
    display: flex;
    align-items: center;
    width: 50%;
    height: 50%;
    padding: 24px;

    > form {
      width: 100%;
      > h1 {
        color: #fff;
        font-size: 16px;
      }
    }
  }
`;

export const HowYouFeelButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 60px;

  > button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-size: 16px;
    font-weight: 700;

    &:hover {
      background: #ffffff50;
    }

    &:not(:first-child) {
      border-left: 0;
    }
  }
`;

export const FormButtonsLegend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 8px;

  > span {
    display: inline-block;
    color: #fff;
  }
`;

export const AdvantagesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px 80px;
  height: 80%;
`;

interface RowAdvantageProps {
  backgroundColor?: string;
}

export const RowAdvantage = styled.div<RowAdvantageProps>`
  display: flex;
  height: 600px;

  background-color: ${props => props.backgroundColor};

  > div:nth-child(1) {
    margin: auto;
    width: 50%;

    > h1 {
      font-size: 48px;
      font-weight: 300;

      margin-bottom: 40px;
    }

    > p {
      font-size: 20px;
      font-weight: 300;

      > a {
        text-decoration: underline;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      width: 100%;
      display: flex;
      justify-content: center;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 96px;
        height: 96px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 24px #0000000d;

        > img {
          max-width: 50%;
          max-height: 50%;
        }

        & + div {
          margin-left: 4px;
        }
      }
    }
  }

  > video {
    width: 50%;
  }
`;

export const ColumnAdvantage = styled.div`
  width: 100%;

  > div:nth-child(1) {
    width: 100%;
    > h1 {
      font-size: 48px;
      font-weight: 300;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px auto 0;
    > div {
      display: flex;
      flex-direction: column;
      margin-right: 30px;

      > button {
        width: 30px;
        height: 30px;
        background: #fff;
        border: 0;
        outline: 0;

        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        &:hover {
          filter: brightness(95%);
        }
      }
    }

    > img {
      width: 628px;
      height: 370px;
    }
  }
`;

export const YouUsedToNeedDevelopersContainer = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  padding: 48px 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    > h1 {
      font-size: 36px;
      font-weight: 300;
      text-align: center;
    }

    > strong {
      margin-top: 32px;
    }

    > span {
      font-style: italic;
    }

    > button {
      margin-top: 32px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5%;
  padding: 0 200px;
  background: #262627;

  > div {
    width: 100%;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(5, 1fr);

    > div {
      display: flex;
      flex-direction: column;

      > h1 {
        color: #fff;
        font-size: 18px;

        margin-bottom: 24px;
      }

      > a {
        cursor: pointer;
        color: #bdbdbd;
        transition: color 0.3s ease, transform 0.3s ease;
        max-width: 180px;

        &:hover {
          transform: translateX(8px);
          color: ${shade(0.2, '#bdbdbd')};
        }

        & + a {
          margin-top: 16px;
        }
      }
    }
  }

  > hr {
    margin: 16px 0;
    width: 100%;
    border-top: 1px solid #bdbdbd50;
  }
`;

export const UiCloneCredits = styled.div`
  display: flex !important;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex !important;
    color: #fff;

    > a {
      color: #fff;
      text-decoration: underline;
    }
  }
`;
