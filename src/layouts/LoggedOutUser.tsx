import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import { useCustomTheme } from "../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../themes/themeLight";
import { themeDark } from "../themes/themeDark";
import { Background } from "../components/Background/Background";
import { useMachines } from "../contexts/Machines/useMachines";
import { useEffect } from "react";
import { Card } from "../components/Card/Card";

export const LoggedOutUser: React.FC = () => {
  const { theme } = useCustomTheme();
  const { commandMachines } = useMachines();

  useEffect(() => {
    console.log("OPA: ", commandMachines);
  }, [commandMachines.length]);

  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main
          children={
            <>
              {commandMachines.length > 0 ? (
                commandMachines.map((item, i) => {
                  return <Card key={item.id} machineData={item} />;
                })
              ) : (
                <h1>Nenhum dado encontrado</h1>
              )}
            </>
          }
        />
        <Footer />
      </Background>
    </ThemeProvider>
  );
};
