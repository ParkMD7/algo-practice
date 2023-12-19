import React from "react";

// Accordion
// import Problem from "./problems/Accordion/Problem";
import { accordionItems } from "./problems/Accordion/solution/props"
import Accordion from "./problems/Accordion/solution/Accordion";

// Table
// import Problem from "./problems/Table/Problem";
// import Table from "./problems/Table/solution/Table";

// HolyGrail
// import Problem from "./problems/HolyGrail/Problem";
// import HolyGrail from "./problems/HolyGrail/solution/HolyGrail";

// BreakingBad
// import Problem from "./problems/BreakingBad/Problem";
// import BreakingBad from "./problems/BreakingBad/solution/BreakingBad";

// Temperature Converter
// import Problem from "./problems/TemperatureConverter/Problem"
// import TemperatureConverter from "./problems/TemperatureConverter/solution/TemperatureConverter";

// Temperature Converter
// import Problem from "./problems/ImageGallery/Problem"
// import ImageGallery from "./problems/ImageGallery/solution/ImageGallery";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
