import React, { useState } from "react";

const AccordionSection = ({ title, content, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);

  const handleOnClick = () => {
    // note -- there could be a potential bug here -- come back at the end to discuss
    // and potentially implement a functional state up to fix the bug
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <div onClick={handleOnClick}>
        {title} <span aria-hidden={true} className={isExpanded ? "accordion-icon-left" : "accordion-icon"} />
      </div>
      {isExpanded && <div>{content}</div>}
    </div>
  );
};

export default AccordionSection;
