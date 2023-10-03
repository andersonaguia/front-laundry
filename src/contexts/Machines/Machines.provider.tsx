import { useEffect, useState } from "react";
import {
  MachinesInterfaces,
  MachinesProviderProps,
  commandMachines,
} from "./Machines.interfaces";
import { MachinesContext } from "./Machines.context";
import { findCommandMachines } from "../../services/api/api";

export const MachinesProvider: React.FC<MachinesProviderProps> = ({
  children,
}) => {
  const [commandMachines, setCommandMachines] = useState<commandMachines[]>([]);

  const handleStatusMachines = async () => {
    await findCommandMachines()
      .then((res) => {
        console.log("RES: ", res)
        setCommandMachines(res);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    handleStatusMachines();
  }, []);

  const machinesContextValues: MachinesInterfaces = {
    handleStatusMachines,
    commandMachines,
  };

  return (
    <MachinesContext.Provider value={machinesContextValues}>
      {children}
    </MachinesContext.Provider>
  );
};
