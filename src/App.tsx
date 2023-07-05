import { CustomThemeProvider } from "./contexts/CustomTheme/CustomTheme.provider";
import { LoggedOutUser } from "./layouts/LoggedOutUser";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <LoggedOutUser />
      </CustomThemeProvider>
    </>
  );
}

export default App;
