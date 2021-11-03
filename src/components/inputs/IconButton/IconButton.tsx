import styled from "@emotion/styled";

const IconButtonStyled = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  outline: none;
  background-color: #4d5bf9;
  border: none;
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
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, onClick, className } = props;
  return (
    <IconButtonStyled className={className} onClick={onClick}>
      {icon}
    </IconButtonStyled>
  );
};

export default IconButton;
