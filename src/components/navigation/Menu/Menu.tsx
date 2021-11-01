import styled from "@emotion/styled";

const MenuStyled = styled("div")<MenuProps>`
  position: fixed;
  box-sizing: initial;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: ${({ open }) => (open ? "300px" : "60px")};
  border-radius: 10px;
  background-color: #4d5bf9;
  border-left: 10px solid #4d5bf9;
  transition: 0.5s;
  overflow-x: hidden;
`;
interface MenuProps {
  open?: boolean;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { open } = props;
  return <MenuStyled open={open}>Menu</MenuStyled>;
};

export default Menu;
