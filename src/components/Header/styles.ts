import styled from 'styled-components';
import { motion } from 'framer-motion';
import { shade } from 'polished';

export const Container = styled(motion.header)`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 160px;

  z-index: 999;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  height: 100%;
  margin: 0 auto;

  > img {
    height: 100%;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  > nav {
    display: flex;
    align-items: center;
    margin-right: 16px;

    > a {
      display: flex;
      align-items: center;

      & + a {
        margin-left: 12px;
      }
    }
  }

  > button + button {
    margin-left: 8px;
  }
`;

export const Covid19Alert = styled.a`
  background: #db3b26;
  color: #fff;
  font-size: 12px;

  border-radius: 4px;
  padding: 4px 8px;

  transition: background 0.3s ease;

  &:hover {
    background: ${shade(0.2, '#db3b26')};
  }
`;
