import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import { useCustomTheme } from "../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../themes/themeLight";
import { themeDark } from "../themes/themeDark";
import { Background } from "../components/Background/Background";
import { Card } from "../components/Card/Card";

export const LoggedOutUser: React.FC = () => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main
          children={
            <>
              <Card />
              <Card />
              <Card />
              <Card />
            </>
          }
        />
        <Footer />
      </Background>
    </ThemeProvider>
  );
};
