import React, { useState } from "react";
import JobLists from "./components/JobLists";
import PostJob from "./components/PostJob";
import JobListProvider from "./store/job-lists-store";
import Filter from "./components/Filter";
import JobHeader from "./components/JobHeader";

const App = () => {
	return <JobListProvider></JobListProvider>;
};

export default App;
