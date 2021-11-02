import styled from "@emotion/styled";

const IconButtonStyled = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  outline: none;
  background-color: #4d5bf9;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;

  & svg {
    width: 34px;
    height: 34px;
  }
`;

export interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: (event: React.MouseEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, onClick } = props;
  return <IconButtonStyled onClick={onClick}>{icon}</IconButtonStyled>;
};

export default IconButton;
