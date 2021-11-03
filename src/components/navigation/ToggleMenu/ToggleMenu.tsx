import styled from "@emotion/styled";
import IconButton from "../../inputs/IconButton/IconButton";

export interface ToggleMenuProps {
  open?: boolean;
  onClick: (open: boolean) => void;
}

const ToggleMenuContainerStyled = styled("div")`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  transition: 0.4s;
`;

const OpenMenuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseMenuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const CloseIconButtonStyled = styled(IconButton)`
  background-color: #ff4d89;
`;

const ToggleMenu: React.FC<ToggleMenuProps> = (props) => {
  const { open, onClick } = props;
  const openMenu = () => onClick(true);
  const closeMenu = () => onClick(false);

  return (
    <ToggleMenuContainerStyled>
      {open ? (
        <CloseIconButtonStyled icon={CloseMenuIcon} onClick={closeMenu} />
      ) : (
        <IconButton icon={OpenMenuIcon} onClick={openMenu} />
      )}
    </ToggleMenuContainerStyled>
  );
};

export default ToggleMenu;
