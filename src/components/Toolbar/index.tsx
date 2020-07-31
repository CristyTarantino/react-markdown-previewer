import React from 'react';
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface IToolbarProps {
    text: string,
    onClick: () => void,
    icon: IconProp,
}

const Toolbar: React.FC<IToolbarProps> = ({text, onClick, icon}) => {
  return (
    <div className="toolbar">
      <FontAwesomeIcon icon={faFreeCodeCamp} />
      {text}
      <FontAwesomeIcon onClick={onClick} icon={icon} />
    </div>
  )
}

export default Toolbar;