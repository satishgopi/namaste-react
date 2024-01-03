import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaruntContainer
 *   - RestaruntCard
 *    - Img
 *    - Name of Res, Star Rating, cusine, delevry Time
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
