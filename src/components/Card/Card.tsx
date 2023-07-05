import { useState, useEffect } from "react";
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

export const Card: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const targetTime = parseISOString("2023-07-03T23:00:00Z");

    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = targetTime.getTime() - currentTime.getTime();
      //console.log(targetTime.getTime + " << GT >> " + currentTime.getTime())
      console.log("TAR: ", targetTime);
      //console.log("CURR: ", currentTime);*/
      if (difference > 0) {
        console.log("DIFFE: ", difference);
        setCountdown(difference);
      } else {
        clearInterval(interval);
        setCountdown(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <CardStyled className={isOn ? "on" : "off"}>
      <H2Styled className={isOn ? "on" : "off"}>Grupo 1</H2Styled>
      <UlStyled className={isOn ? "on" : "off"}>
        <li>
          Lavadora
          <BiSolidWasher size={40} />
        </li>
        <li>
          Secadora
          <BiSolidDryer size={40} />
        </li>
      </UlStyled>
      <H3Styled className={isOn ? "on" : "off"}>Apartamento</H3Styled>
      <PStyled className={isOn ? "on" : "off"}>201</PStyled>
      <H3Styled className={isOn ? "on" : "off"}>Tempo Restante</H3Styled>
      <PStyled className={isOn ? "on" : "off"}>{formatTime(countdown)}</PStyled>
      <ButtonStyled onClick={handleClick} className={isOn ? "on" : "off"}>
        {isOn ? "DESLIGAR" : "LIGAR"}
      </ButtonStyled>
    </CardStyled>
  );
};
