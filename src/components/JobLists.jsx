import React, { useContext } from "react";
import Job from "./job";
import { JobList } from "../store/job-lists-store";

const JobLists = () => {
	const { jobList } = useContext(JobList);
	return (
		<div className="w-4/6  h-screen m-5 p-5">
			{jobList.map((job) => (
				<Job key={job.id} company={job} />
			))}
		</div>
	);
};

export default JobLists;
