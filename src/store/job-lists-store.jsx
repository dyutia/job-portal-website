import { useReducer, createContext } from "react";

export const JobList = createContext({
	jobList: [],
	addJob: () => {},
	filter: () => {},
});

const jobListReducer = (currJobList, action) => {
	let newJobList = currJobList;
	console.log(newJobList);
	if (action.type === "ADD_JOB") {
		newJobList = [action.payload, ...currJobList];
	} else if (action.type === "FILTER") {
		newJobList = currJobList.filter((job) => {
			const matchesTitle = action.payload.title
				? job.title.toLowerCase().includes(action.payload.title)
				: true;

			const matchesLocation = action.payload.location
				? job.location.includes(action.payload.location)
				: true;

			return matchesTitle && matchesLocation;
		});
	}
	console.log(newJobList);
	return newJobList;
};

const JobListProvider = ({ children }) => {
	const [jobList, dispatchJobList] = useReducer(
		jobListReducer,
		DEFAULT_POST_LIST
	);

	const filter = (title, location) => {
		dispatchJobList({
			type: "FILTER",
			payload: {
				title: title,
				location: location,
			},
		});
	};
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
		<JobList.Provider value={{ jobList, addJob, filter }}>
			{children}
		</JobList.Provider>
	);
};
const DEFAULT_POST_LIST = [
	{
		id: "1",
		title: "web development",
		name: "Google",
		type: "Part Time",
		time: "1 to 7 months",
		minSalary: 43,
		maxSalary: 78,
		description: "hjgcjkdgbcgjkdbcjkb",
		location: "Delhi",
		skills: ["HTML ", "CSS "],
	},
	{
		id: "2",
		title: "marketing",
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
