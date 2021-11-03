import styled from "@emotion/styled";

export interface MenuItemProps {
  label: string;
  icon: React.ReactElement;
  href?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const MenuItemStyled = styled("li")<Pick<MenuItemProps, "active">>`
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  ${({ active }) => (active ? "background-color: #ffffff;" : "")};

  &:hover {
    background-color: #${({ active }) => (active ? "ffffff;" : "3749ff")};
  }

  &:hover a {
    overflow-x: initial;
    background-color: #${({ active }) => (active ? "ffffff;" : "3749ff")};
    border-radius: 10px;
  }

  &:hover span {
    border-radius: 10px;
    background-color: #${({ active }) => (active ? "ffffff;" : "3749ff")};
  }

  ${({ active }) => (active ? "" : "")}
`;

const MenuItemIconStyled = styled("span")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 60px;
  & svg {
    width: 32px;
    height: 32px;
  }
`;

const MenuItemAnchorStyled = styled("a")<Pick<MenuItemProps, "active">>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  overflow-x: hidden;
  transition: 0.5s;
  color: #${({ active }) => (active ? "333333" : "ffffff")};
  ${({ active }) => (active ? "font-weight: 600" : "")};
`;

const MenuItemLabelStyled = styled("span")`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 60px;
  min-width: 230px;
  white-space: normal;
`;

const UpDecoration = styled("b")<Pick<MenuItemProps, "active">>`
  display: ${({ active }) => (active ? "block" : "none")};
  position: absolute;
  top: -10px;
  width: 100%;
  height: 10px;
  background-color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 10px;
    background-color: #4d5bf9;
  }
`;

const DownDecoration = styled("b")<Pick<MenuItemProps, "active">>`
  display: ${({ active }) => (active ? "block" : "none")};
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 10px;
  background-color: #ffffff;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    background-color: #4d5bf9;
  }
`;

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, label, href, onClick, active } = props;

  return (
    <MenuItemStyled active={active}>
      <UpDecoration active={active} />
      <DownDecoration active={active} />
      <MenuItemAnchorStyled
        href={href || "#"}
        onClick={onClick}
        active={active}
      >
        <MenuItemIconStyled>{icon}</MenuItemIconStyled>
        <MenuItemLabelStyled>{label}</MenuItemLabelStyled>
      </MenuItemAnchorStyled>
    </MenuItemStyled>
  );
};

export default MenuItem;
