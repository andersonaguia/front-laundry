import {
  NavStyled,
  TitleStyled,
  LogoStyled,
  HeaderStyled,
  ButtonStyled,
} from "./Header.styles";
import logoSolar from "../../assets/img/solar.png";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";

export const Header: React.FC = () => {
  const { theme, handleTheme } = useCustomTheme();

  return (
    <NavStyled>
      <HeaderStyled>
        <LogoStyled src={logoSolar} alt="logo solar tambau" />
        <TitleStyled>Solar Clean</TitleStyled>
      </HeaderStyled>
      <ButtonStyled onClick={handleTheme}>
        {theme === "dark" ? (
          <BsSunFill size={25} color="#f5d20a"/>
        ) : (
          <BsMoonStarsFill size={20} />
        )}
      </ButtonStyled>
    </NavStyled>
  );
};
