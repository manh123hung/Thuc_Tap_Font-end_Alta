// ButtonDropdown.tsx

import React, { useState } from 'react';
import { Dropdown, DropdownItem } from "flowbite-react";

interface ButtonDropdownProps {
  buttonText: string;
  dropdownItems: { label: string; value: string }[];
  title: string;
  content: string;
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({ buttonText, dropdownItems, title, content }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <Dropdown label={buttonText} placement="right">
        {dropdownItems.map((item) => (
          <DropdownItem key={item.value} value={item.value}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>
      <button className="bt1" 
              style={{ borderRadius: "50%" }} 
              onClick={() => setShowInfo(!showInfo)}>
        {title} 
      </button>
      {showInfo && (
        <div className="info-container">
          <p>{content}</p> 
        </div>
      )}
    </div>
  );
};

export default ButtonDropdown;