import React, { createContext, useContext } from "react";

const StateContext = createContext();

const statesOfIndia = [
	"Delhi",
	"Bangalore",
	"Hyderabad",
	"Mumbai",
	"Pune",
	"Chennai",
	"Gurgaon",
	"Noida",
	"Kolkata",
];

export const StateProvider = ({ children }) => {
	return (
		<StateContext.Provider value={statesOfIndia}>
			{children}
		</StateContext.Provider>
	);
};
export default StateContext;
