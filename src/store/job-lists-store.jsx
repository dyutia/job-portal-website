import { useReducer, createContext } from "react";

export const JobList = createContext({
	jobList: [],
	addJob: () => {},
	filter: () => {},
	filterJobs: () => {},
});

const jobListReducer = (currJobList, action) => {
	let newJobList = currJobList;
	
	if (action.type === "ADD_JOB") {
		newJobList = [action.payload, ...currJobList];
	} else if (action.type === "FILTER") {
		newJobList = currJobList.filter((job) => {
			const matchesTitle = action.payload.title
				? job.title.toLowerCase().includes(action.payload.title)
				: true;

			const matchesLocation = action.payload.location
				? job.location.toLowerCase().includes(action.payload.location)
				: true;

			return matchesTitle && matchesLocation;
		});
	} else if (action.type === "FILTER_JOBS") {
		newJobList = DEFAULT_POST_LIST.filter((job) => {
			const { company, category, location, jobTypes, salaryRange } = action.payload;

			const matchesCompany = company
				? job.name.toLowerCase().includes(company.toLowerCase())
				: true;

			const matchesCategory = category
				? job.title === category
				: true;

			const matchesLocation = location
				? job.location === location
				: true;

			const matchesJobType = jobTypes.length > 0
				? jobTypes.includes(job.type)
				: true;

			let matchesSalary = true;
			if (salaryRange) {
				const [min, max] = salaryRange === "25+" 
					? [25, Infinity] 
					: salaryRange.split("-").map(Number);
				
				matchesSalary = job.minSalary >= min && 
					(max === Infinity ? true : job.maxSalary <= max);
			}

			return matchesCompany && matchesCategory && matchesLocation && 
				matchesJobType && matchesSalary;
		});
	}
	
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

	const filterJobs = (filters) => {
		dispatchJobList({
			type: "FILTER_JOBS",
			payload: filters,
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
		<JobList.Provider value={{ jobList, addJob, filter, filterJobs }}>
			{children}
		</JobList.Provider>
	);
};

const DEFAULT_POST_LIST = [
	{
		id: "1",
		title: "Web Development",
		name: "Facebook",
		type: "Part Time",
		logo: "/pics/facebook.png",
		time: "1 to 3 months",
		minSalary: 43,
		maxSalary: 78,
		description: "Looking for an experienced Web Designer for our company",
		location: "Delhi",
		skills: ["HTML", "CSS", "SASS", "PHOTOSHOP", "BOOTSTRAP"],
	},
	{
		id: "2",
		title: "Frontend Developer",
		name: "Google",
		type: "Full Time",
		time: "3 to 6 months",
		minSalary: 50,
		logo: "/pics/google.png",
		maxSalary: 90,
		description: "Seeking a skilled Frontend Developer with React experience",
		location: "Bangalore",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
	},
	{
		id: "3",
		title: "Backend Developer",
		name: "Amazon",
		type: "Full Time",
		time: "6 months",
		logo: "/pics/amazon.png",
		minSalary: 60,
		maxSalary: 120,
		description: "Hiring Backend Developer with Node.js and MongoDB expertise",
		location: "Hyderabad",
		skills: ["Node.js", "Express", "MongoDB", "SQL", "AWS"],
	},
	{
		id: "4",
		title: "UI/UX Designer",
		name: "Netflix",
		type: "Full Time",
		logo: "/pics/netflix.png",

		time: "2 months",
		minSalary: 40,
		maxSalary: 70,
		description:
			"Looking for a creative UI/UX Designer to revamp our app interface",
		location: "Mumbai",
		skills: ["Figma", "Sketch", "Adobe XD", "Wireframing", "Prototyping"],
	},
	{
		id: "5",
		title: "Data Scientist",
		name: "Microsoft",
		logo: "/pics/microsoft.png",

		type: "Remote",
		time: "1 year",
		minSalary: 100,
		maxSalary: 200,
		description:
			"Data Scientist required to develop advanced machine learning models",
		location: "Bangalore",
		skills: ["Python", "R", "Machine Learning", "SQL", "TensorFlow"],
	},
	{
		id: "6",
		title: "DevOps Engineer",
		name: "Flipkart",
		logo: "/pics/flipkart.png",

		type: "Part Time",
		time: "6 months",
		minSalary: 70,
		maxSalary: 110,
		description:
			"DevOps Engineer to automate and optimize cloud infrastructure",
		location: "Gurgaon",
		skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
	},
	{
		id: "7",
		title: "Mobile App Developer",
		name: "Zomato",
		type: "Full Time",
		logo: "/pics/zomato.png",

		time: "4 months",
		minSalary: 45,
		maxSalary: 85,
		description:
			"Android and iOS developer needed for restaurant app enhancements",
		location: "Mumbai",
		skills: ["Flutter", "React Native", "Kotlin", "Swift", "UI/UX"],
	},
	{
		id: "8",
		title: "Cybersecurity Analyst",
		name: "TCS",
		type: "Full Time",
		logo: "/pics/tcs.png",

		time: "1 year",
		minSalary: 90,
		maxSalary: 150,
		description:
			"Experienced Cybersecurity Analyst needed for threat management",
		location: "Noida",
		skills: [
			"Cybersecurity",
			"Penetration Testing",
			"Ethical Hacking",
			"SIEM",
			"Firewalls",
		],
	},
	{
		id: "9",
		title: "AI Engineer",
		name: "Microsoft",
		type: "Remote",
		logo: "/pics/microsoft.png",

		time: "9 months",
		minSalary: 120,
		maxSalary: 250,
		description:
			"AI Engineer required to develop and train advanced language models",
		location: "Chennai",
		skills: ["Python", "Deep Learning", "PyTorch", "TensorFlow", "NLP"],
	},
	{
		id: "10",
		title: "Cloud Architect",
		name: "IBM",
		type: "Full Time",
		logo: "/pics/ibm.png",

		time: "6 months",
		minSalary: 95,
		maxSalary: 140,
		description:
			"Cloud Architect required to design and deploy scalable solutions",
		location: "Kolkata",
		skills: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible"],
	},
	{
		id: "11",
		title: "Blockchain Developer",
		name: "Coinbase",
		logo: "/pics/coinbase.png",

		type: "Remote",
		time: "1 year",
		minSalary: 100,
		maxSalary: 190,
		description:
			"Blockchain Developer to create and maintain decentralized applications",
		location: "Mumbai",
		skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "JavaScript"],
	},
	{
		id: "12",
		title: "Web Development",
		name: "Amazon",
		type: "Full Time",
		logo: "/pics/amazon.png",

		time: "2 years",
		minSalary: 80,
		maxSalary: 150,
		description:
			"Game Developer needed for high-performance 3D game development",
		location: "Pune",
		skills: ["Unity", "C#", "Unreal Engine", "3D Modeling", "Animation"],
	},
	{
		id: "13",
		title: "Digital Marketing Specialist",
		name: "Netflix",
		logo: "/pics/netflix.png",

		type: "Full Time",
		time: "3 months",
		minSalary: 30,
		maxSalary: 50,
		description: "Specialist needed to manage digital campaigns and analytics",
		location: "Bangalore",
		skills: [
			"SEO",
			"Google Ads",
			"Content Marketing",
			"Social Media",
			"Analytics",
		],
	},
	{
		id: "14",
		title: "Full Stack Developer",
		name: "Swiggy",
		type: "Full Time",
		logo: "/pics/swiggy.png",

		time: "1 year",
		minSalary: 80,
		maxSalary: 140,
		description: "Full Stack Developer required for food delivery platform",
		location: "Hyderabad",
		skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],
	},
	{
		id: "15",
		title: "IT Support Specialist",
		name: "Infosys",
		type: "Freelancing",
		logo: "/pics/infosys.png",

		time: "6 months",
		minSalary: 40,
		maxSalary: 70,
		description:
			"IT Support Specialist needed for troubleshooting and system maintenance",
		location: "Chennai",
		skills: [
			"Windows",
			"Linux",
			"Networking",
			"Troubleshooting",
			"Customer Support",
		],
	},

	{
		id: "16",
		title: "Frontend Developer",
		name: "Google",
		type: "Part Time",
		time: "3 months",
		minSalary: 45,
		maxSalary: 85,
		logo: "/pics/google.png",
		description:
			"Seeking a Frontend Developer with strong JavaScript and CSS skills.",
		location: "Delhi",
		skills: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		id: "17",
		title: "Backend Developer",
		name: "Amazon",
		type: "Remote",
		time: "9 months",
		minSalary: 65,
		maxSalary: 130,
		logo: "/pics/amazon.png",
		description:
			"Backend Developer needed with experience in APIs and database management.",
		location: "Bangalore",
		skills: ["Node.js", "Express", "SQL", "MongoDB", "AWS"],
	},
	{
		id: "18",
		title: "UI Designer",
		name: "Netflix",
		type: "Part Time",
		time: "4 months",
		minSalary: 38,
		maxSalary: 65,
		logo: "/pics/netflix.png",
		description:
			"Looking for a creative UI Designer to enhance the user interface.",
		location: "Pune",
		skills: ["Adobe XD", "Sketch", "Wireframing", "Prototyping"],
	},
	{
		id: "19",
		title: "Data Analyst",
		name: "Microsoft",
		type: "Freelancing",
		time: "1 year",
		minSalary: 80,
		maxSalary: 150,
		logo: "/pics/microsoft.png",
		description:
			"Data Analyst required for advanced data visualization and reporting.",
		location: "Chennai",
		skills: ["Excel", "SQL", "Tableau", "Power BI"],
	},
	{
		id: "20",
		title: "DevOps Engineer",
		name: "Flipkart",
		type: "Full Time",
		time: "1 year",
		minSalary: 75,
		maxSalary: 120,
		logo: "/pics/flipkart.png",
		description: "DevOps Engineer required to manage scalable cloud solutions.",
		location: "Hyderabad",
		skills: ["Docker", "Kubernetes", "Terraform", "AWS", "Linux"],
	},
	{
		id: "21",
		title: "Mobile App Developer",
		name: "Zomato",
		type: "Part Time",
		time: "3 months",
		minSalary: 50,
		maxSalary: 90,
		logo: "/pics/zomato.png",
		description:
			"Mobile App Developer needed for restaurant app interface upgrades.",
		location: "Mumbai",
		skills: ["React Native", "Flutter", "Kotlin", "Swift"],
	},
	{
		id: "22",
		title: "Cybersecurity Analyst",
		name: "TCS",
		type: "Full Time",
		time: "2 years",
		minSalary: 95,
		maxSalary: 160,
		logo: "/pics/tcs.png",
		description:
			"Cybersecurity Analyst required to strengthen threat defense systems.",
		location: "Noida",
		skills: ["Firewalls", "Penetration Testing", "SIEM", "Ethical Hacking"],
	},
	{
		id: "23",
		title: "AI Researcher",
		name: "Microsoft",
		type: "Remote",
		time: "6 months",
		minSalary: 130,
		maxSalary: 240,
		logo: "/pics/microsoft.png",
		description:
			"AI Researcher needed to enhance machine learning applications.",
		location: "Bangalore",
		skills: ["Python", "PyTorch", "TensorFlow", "Deep Learning"],
	},
	{
		id: "24",
		title: "Cloud Solutions Engineer",
		name: "IBM",
		type: "Remote",
		time: "1 year",
		minSalary: 90,
		maxSalary: 135,
		logo: "/pics/ibm.png",
		description:
			"Cloud Solutions Engineer required for secure cloud infrastructure.",
		location: "Delhi",
		skills: ["AWS", "Google Cloud", "Azure", "DevOps", "Kubernetes"],
	},
	{
		id: "25",
		title: "Blockchain Developer",
		name: "Coinbase",
		type: "Part Time",
		time: "9 months",
		minSalary: 110,
		maxSalary: 180,
		logo: "/pics/coinbase.png",
		description:
			"Blockchain Developer needed for decentralized application updates.",
		location: "Mumbai",
		skills: ["Solidity", "Ethereum", "JavaScript", "Smart Contracts"],
	},
];

export default JobListProvider;