import styled from "styled-components";
import Colors from "../../../constants/colors";

interface NavbarProps {
  $isOpen: boolean;
}

export const Navbar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const ResetContainer = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ProfileSvg = styled.div`
  & div {
    width: 20px;
    margin-right: 15px;
  }
`;

export const NameText = styled.div`
  max-width: 320px;
  @media (max-width: 550px) {
    max-width: 180px;
  }
`;

export const ProfileText = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  & h5 {
    color: ${(props) => (props.$isOpen ? `${Colors.ORANGE}` : `${Colors.DEFAULT}`)};
    font-weight: 600;
  }
`;


export const Modal = styled.div<NavbarProps>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;
export const Account = styled.div`
  position: absolute;
  padding: 20px;
  top: 40px;
  right: 0px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 5px;
  background: ${Colors.WHITE};
  box-shadow: 0px 10px 40px 0px rgba(181, 194, 194, 0.2);
  & button {
    cursor: pointer;
    & div {
      width: 24px;
      height: 24px;
      & svg {
        width: 100%;
      }
    }
  }
`;

export const AccountBlock = styled.div`
  position: relative;
  min-width: 250px;
  & button {
    margin-top: 20px;
    & div {
      margin-right: 5px;
    }
    & h5 {
      font-weight: 700;
    }
  }
`;

export const AccountSvg = styled.div`
  position: absolute;
  top: -35px;
  right: 15px;
  & div {
    width: 16px;
    height: 11px;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AccountName = styled.div`
  & h5 {
    font-weight: 600;
  }
  & H6 {
    color: ${Colors.GRAY};
  }
`;
