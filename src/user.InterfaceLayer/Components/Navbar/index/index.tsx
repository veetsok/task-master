import React, { useEffect, useState } from "react";
import * as ST from "../styled/styled";
import Logo from "../../../UI_KIT/Molecules/Logo.molecule";
import ButtonEnum from "../../../UI_KIT/Atom/Button/enum";
import Button from "../../../UI_KIT/Atom/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUser,
  signOut,
} from "../../../../business.InterfaceLayer/store/actions/authActions";

import Profile from "../../../shared/assets/icons/profile.svg?react";
import Logout from "../../../shared/assets/icons/logOut.svg?react";
import ProfilePos from "../../../shared/assets/icons/profilePos.svg?react";
import Image from "../../../UI_KIT/Atom/Image";
import Text from "../../../UI_KIT/Atom/Text";
import { RootState } from "../../../../business.InterfaceLayer/store/reducers/rootReducer";
import ImageEnum from "../../../UI_KIT/Atom/Image/enum";
import TextEnum from "../../../UI_KIT/Atom/Text/enum";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  const handleSignOut = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(signOut());
    history("/signin");
  };

  if (!user.name) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(loadUser());
  }

  const toggleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOnModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isModalOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as Element).closest("#modal")) {
          setIsModalOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isModalOpen]);

  return (
    <ST.Navbar>
      <ST.ResetContainer>
        <Logo />
        <ST.Block>
          {user._id ? (
            <ST.Profile>
              <ST.ProfileText $isOpen={isModalOpen} onClick={toggleModal}>
                <ST.ProfileSvg>
                  <Image type={ImageEnum.enum_defaultSvg} icon={<Profile />} />
                </ST.ProfileSvg>
                <ST.NameText>
                  <Text type={TextEnum.enum_Text_H5} children={user.name} />
                </ST.NameText>
              </ST.ProfileText>

              <ST.Modal $isOpen={isModalOpen} onClick={handleClickOnModal} id="modal">
                <ST.Account>
                  <ST.AccountBlock>
                    <ST.AccountSvg>
                      <Image type={ImageEnum.enum_defaultSvg} icon={<ProfilePos />} />
                    </ST.AccountSvg>
                    <ST.AccountName>
                      <Text type={TextEnum.enum_Text_H5} children={user.name} />
                      <Text type={TextEnum.enum_Text_H6} children={user.email} />
                    </ST.AccountName>
                    <Button
                      type={ButtonEnum.enum_logoutButton}
                      onClick={() => handleSignOut()}
                    >
                      <Image type={ImageEnum.enum_defaultSvg} icon={<Logout />} />
                      <Text type={TextEnum.enum_Text_H5} children="Log out" />
                    </Button>
                  </ST.AccountBlock>
                </ST.Account>
              </ST.Modal>
            </ST.Profile>
          ) : (
            <>
              <Link to="/signin" style={{ marginRight: 20 }}>
                <Button type={ButtonEnum.enum_loginButton} children="Log in" />
              </Link>
              <Link to="/signup">
                <Button type={ButtonEnum.enum_signupButton} children="Sign up" />
              </Link>
            </>
          )}
        </ST.Block>
      </ST.ResetContainer>
    </ST.Navbar>
  );
};
export default Navbar;
