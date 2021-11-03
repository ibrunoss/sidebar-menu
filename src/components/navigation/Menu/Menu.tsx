import styled from "@emotion/styled";

const MenuStyled = styled("div")<MenuProps>`
  position: absolute;
  box-sizing: initial;
  top: 20px;
  left: 20px;
  width: ${({ open }) => (open ? "300px" : "60px")};
  min-height: calc(100vh - 40px);
  border-radius: 10px;
  background-color: #4d5bf9;
  border-left: 10px solid #4d5bf9;
  transition: 0.5s;
`;

const MenuContainerStyled = styled("ul")`
  margin-top: 10px;
  width: 100%;
`;
interface MenuProps {
  open?: boolean;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { open, children } = props;
  return (
    <MenuStyled open={open}>
      <MenuContainerStyled>{children}</MenuContainerStyled>
    </MenuStyled>
  );
};

export default Menu;
