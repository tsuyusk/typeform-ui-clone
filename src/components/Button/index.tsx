import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  black?: boolean;
}

const Button: React.FC<ButtonProps> = ({ black = false, ...rest }) => {
  return <Container isBlack={black} {...rest} />;
};

export default Button;
