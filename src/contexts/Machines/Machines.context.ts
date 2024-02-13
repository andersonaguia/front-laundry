import { createContext } from "react";
import { MachinesInterfaces, commandMachines } from "./Machines.interfaces";

export const MachinesContext = createContext<MachinesInterfaces>({
  handleStatusMachines: () => Promise.resolve(),
  commandMachines: [],
});
