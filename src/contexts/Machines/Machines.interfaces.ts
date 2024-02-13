export interface MachinesProviderProps {
  children: React.ReactNode;
}

export interface commandMachines {
  id: number;
  isOn: boolean;
  machineGroup: number;
}

export interface MachinesInterfaces {  
  handleStatusMachines: () => void;
  commandMachines: commandMachines[];
}
