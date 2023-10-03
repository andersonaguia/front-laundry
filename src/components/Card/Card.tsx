import { useState } from "react";
import {
  CardStyled,
  H2Styled,
  H3Styled,
  PStyled,
  UlStyled,
  ButtonStyled,
} from "./Card.styles";
import { BiSolidWasher } from "react-icons/bi";
import { BiSolidDryer } from "react-icons/bi";
import { formatTime, parseISOString } from "../../utils/formatDate";
import { useMachines } from "../../contexts/Machines/useMachines";
import { commandMachines } from "../../contexts/Machines/Machines.interfaces";

interface Props {
  machineData: commandMachines;
}

export const Card: React.FC<Props> = (props) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);
  
  console.log("PROPS: ", props);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <CardStyled className={props.machineData.isOn ? "on" : "off"}>
      <H2Styled className={props.machineData.isOn ? "on" : "off"}>
        Grupo {props.machineData.machineGroup}
      </H2Styled>
      <UlStyled className={props.machineData.isOn ? "on" : "off"}>
        <li>
          Lavadora
          <BiSolidWasher size={40} />
        </li>
        <li>
          Secadora
          <BiSolidDryer size={40} />
        </li>
      </UlStyled>
      <H3Styled className={props.machineData.isOn ? "on" : "off"}>
        Apartamento
      </H3Styled>
      <PStyled className={props.machineData.isOn ? "on" : "off"}>201</PStyled>
      <H3Styled className={props.machineData.isOn ? "on" : "off"}>
        Tempo Restante
      </H3Styled>
      <PStyled className={props.machineData.isOn ? "on" : "off"}>
        {formatTime(countdown)}
      </PStyled>
      <ButtonStyled
        onClick={handleClick}
        className={props.machineData.isOn ? "on" : "off"}
      >
        {props.machineData.isOn ? "DESLIGAR" : "LIGAR"}
      </ButtonStyled>
    </CardStyled>
  );
};
