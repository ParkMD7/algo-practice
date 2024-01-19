import React, { useState, useEffect } from "react";
import BreakingText from "./BreakingText";
import { breakify } from "./breakify";

import "./styles.css";

const BreakingBad = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [breakingFirstName, setBreakingFirstName] = useState("");
  const [breakingLastName, setBreakingLastName] = useState("");

  useEffect(() => {
    setBreakingFirstName(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setBreakingLastName(breakify(lastName));
  }, [lastName]);

  return (
    <div className="breakingBadRoot">
      <div className="breakingTextContainer">
        <BreakingText text={breakingFirstName} />
        <BreakingText text={breakingLastName} />
      </div>
      <div className="inputWrapper">
        <label className="label">First Name</label>
        <input
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="label">Last Name</label>
        <input
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BreakingBad;
