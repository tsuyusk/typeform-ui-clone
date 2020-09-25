import styled, { css } from 'styled-components';

interface ContainerProps {
  isBlack: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: transparent;
  color: #111;
  padding: 12px 16px;
  border: 1px solid #111;
  border-radius: 4px;
  transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease;

  &:hover {
    color: #666;
    border-color: #666;
  }

  ${props =>
    props.isBlack &&
    css`
      font-weight: 700;
      background: #111;
      color: #fff;

      &:hover {
        color: #fff;
        background: #454546;
      }
    `}
`;
