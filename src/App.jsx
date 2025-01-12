import React, { useState } from "react";
import JobLists from "./components/JobLists";
import PostJob from "./components/PostJob";
import JobListProvider from "./store/job-lists-store";
import ApplyForm from "./components/ApplyForm";
import Header from "./components/Header";
import Filter from "./components/Filter";

const App = () => {
	const [selectedTab, setSelectedTab] = useState("Jobs");
	return (
		<JobListProvider>
			<Header />
			{selectedTab === "Jobs" && (
				<div className="flex m-24 justify-center">
					<Filter />
					<JobLists />
				</div>
			)}
			{selectedTab === "PostJob" && <PostJob />}
		</JobListProvider>
	);
};

export default App;
