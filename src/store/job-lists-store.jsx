import { useReducer, createContext } from "react";

export const JobList = createContext({
	jobList: [],
	addJob: () => {},
});

const jobListReducer = (currJobList, action) => {
	let newJobList = currJobList;
	if (action.type === "ADD_JOB") {
		newJobList = [action.payload, ...currJobList];
	}
	return newJobList;
};

const JobListProvider = ({ children }) => {
	const [jobList, dispatchJobList] = useReducer(
		jobListReducer,
		DEFAULT_POST_LIST
	);

	const addJob = (
		jobTitle,
		companyName,
		jobType,
		jobTime,
		jobMinSalary,
		jobMaxSalary,
		jobDescription,
		jobLocation,
		jobSkills
	) => {
		console.log(
			jobTitle,
			companyName,
			jobType,
			jobTime,
			jobMinSalary,
			jobMaxSalary,
			jobDescription,
			jobLocation,
			jobSkills
		);

		dispatchJobList({
			type: "ADD_JOB",
			payload: {
				id: Date.now(),
				title: jobTitle,
				name: companyName,
				type: jobType,
				time: jobTime,
				minSalary: jobMinSalary,
				maxSalary: jobMaxSalary,
				description: jobDescription,
				location: jobLocation,
				skills: jobSkills,
			},
		});
	};

	return (
		<JobList.Provider value={{ jobList, addJob }}>{children}</JobList.Provider>
	);
};
const DEFAULT_POST_LIST = [
	{
		id: "1",
		title: "web dev",
		name: "Google",
		type: "Part Time",
		time: "1 to 7 months",
		minSalary: 43,
		maxSalary: 78,
		description: "hjgcjkdgbcgjkdbcjkb",
		location: "delhi",
		skills: ["HTML ", "CSS "],
	},
	{
		id: "2",
		title: "Marketing",
		name: "Facebook",
		type: "Full Time",
		time: "1 to 7 months",
		minSalary: 43,
		maxSalary: 78,
		description: "hjgcjkdgbcgjkdbcjkb",
		location: "Mumbai",
		skills: ["REACT ", "CSS ", "JS", "GITHUB"],
	},
];

export default JobListProvider;
