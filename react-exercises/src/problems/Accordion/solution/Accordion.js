import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIdx, setExpandedIdx] = useState(0);

  const handleOnClick = (idx) => {
    setExpandedIdx(idx === expandedIdx ? -1 : idx);
  };

  return (
    <div>
      {items.map((item, idx) => {
        const isExpanded = idx === expandedIdx;
        return (
          <div onClick={() => handleOnClick(idx)} key={item.title}>
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
              <h1 style={{ marginLeft: "10px" }}>{item.title}</h1>
            </div>
            {isExpanded && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
