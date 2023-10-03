import { CustomThemeProvider } from "./contexts/CustomTheme/CustomTheme.provider";
import { LoggedOutUser } from "./layouts/LoggedOutUser";
import { MachinesProvider } from "./contexts/Machines/Machines.provider";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <MachinesProvider>
          <LoggedOutUser />
        </MachinesProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
