export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#experience" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "What I Actually Do",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "What I Bring to the Table",
		// description: "",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		// img: "",
		// spareImg: "",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Full Stack E-commerce Application",
		titleUrl: "https://shopvistav4.netlify.app/",
		des: "Built a feature-rich eCommerce site using ReactJS, Tailwind CSS, Redux, Strapi, and Stripe. Implemented search, cart, wishlist, authentication, and secure payments. Ensured a responsive UI and optimized state management with Redux.",
		img: "/E-Commerce.png",
		iconLists: [
			"/re.svg",
			"/tail.svg",
			"/redux-svgrepo-com.svg",
			"/strapi-icon-svgrepo-com.svg",
			"/stripe-v2-svgrepo-com.svg",
		],
		link: "/ui.earth.com",
		tech_stack: ["React.JS", "Strapi", "Stripe", "Redux", "Tailwind.CSS"],

		// New detailed info for modal
		details: {
			overview:
				"This is a modern, full-featured eCommerce web application developed using ReactJS on the frontend and Strapi as the backend CMS. The platform offers users a seamless shopping experience with secure authentication, dynamic product management, and smooth checkout using Stripe payment gateway. The UI is built with Tailwind CSS for a clean and responsive design that works well across devices. State management is optimized using Redux for better performance and maintainability.",
			features: [
				"Secure login and registration with JWT tokens.",
				"Product search and filtering for easy navigation.",
				"Shopping cart and wishlist with persistent state.",
				"Stripe payment integration for secure transactions.",
				"Admin panel for managing products, categories, and orders via Strapi.",
				"Fully responsive design optimized for all screen sizes.",
				"Efficient state management using Redux.",
			],
			tech_stack: [
				"ReactJS - Frontend UI library",
				"Strapi - Headless CMS backend",
				"Stripe - Payment processing",
				"Redux - State management",
				"Tailwind CSS - Styling and responsive design",
				"JWT - Authentication",
			],
			challenges_and_learnings: [
				"Handling complex state synchronization between frontend and backend.",
				"Implementing secure payment workflows with Stripe API.",
				"Optimizing performance and user experience.",
				"Designing reusable components for scalability.",
			],
			future_improvements: [
				"Add multi-currency and localization support.",
				"Implement user reviews and ratings system.",
				"Add advanced filtering and sorting options.",
				"Integrate real-time order tracking.",
			],
			project_source_code:
				"https://github.com/HarshalMargaj/E-Commerce-Application",
		},
	},
	{
		id: 2,
		title: "Full Stack Project Management Tool",
		titleUrl: "https://taskflow-v3.vercel.app/",
		des: "Built a Trello-like project management app using ReactJS, Next.js, TypeScript, Zustand, Tailwind CSS, Clerk, Prisma, and Supabase. Features include organizations, boards, lists, tasks, drag-and-drop, and authentication. Ensured a real-time, responsive UI with optimized state management.",
		img: "/taskflow.png",
		iconLists: [
			"/next.svg",
			"/tail.svg",
			"/ts.svg",
			"/prisma-svgrepo-com (1).svg",
			"/stripe-v2-svgrepo-com.svg",
		],
		link: "/ui.yoom.com",
		tech_stack: [
			"React.JS",
			"Next.Js",
			"TypeScript",
			"Tailwind.CSS",
			"Zustand",
			"Clerk",
			"Prisma",
			"Supabase",
			"Shadcn",
		],

		details: {
			overview:
				"This project management tool is a full-stack, Trello-inspired web app that enables users to organize their work with boards, lists, and tasks. Built with ReactJS and Next.js for a performant frontend, TypeScript for type safety, and Zustand for state management, the app features real-time collaboration with Supabase and secure user authentication via Clerk. Tailwind CSS ensures a clean, responsive UI.",
			features: [
				"Create and manage organizations, boards, lists, and tasks.",
				"Drag-and-drop functionality for tasks and lists.",
				"Real-time updates using Supabase subscriptions.",
				"User authentication and role management with Clerk.",
				"Type-safe codebase using TypeScript.",
				"Responsive and accessible UI built with Tailwind CSS.",
				"Optimized state management with Zustand.",
			],
			tech_stack: [
				"ReactJS - Frontend UI library",
				"Next.js - SSR and routing framework",
				"TypeScript - Static typing",
				"Tailwind CSS - Styling and responsive design",
				"Zustand - Lightweight state management",
				"Clerk - Authentication and user management",
				"Prisma - ORM for database interactions",
				"Supabase - Backend-as-a-Service for real-time data",
				"Shadcn UI - Component library",
			],
			challenges_and_learnings: [
				"Implementing smooth drag-and-drop with React DnD and Zustand.",
				"Managing real-time data synchronization via Supabase.",
				"Ensuring type safety across frontend and backend with TypeScript and Prisma.",
				"Building scalable, reusable components for complex UI.",
			],
			future_improvements: [
				"Add calendar and timeline views for tasks.",
				"Enable notifications and reminders for deadlines.",
				"Integrate third-party tools like Slack and Google Drive.",
				"Implement offline mode and data caching.",
			],
			project_source_code: "https://github.com/HarshalMargaj/taskflow",
		},
	},
];

export const testimonials = [
	{
		quote: "I'm a Frontend Developer with 1 year of hands-on experience building modern, responsive web applications. I specialize in ReactJS, Next.js, and Tailwind CSS, with strong skills in state management using Redux and Zustand. I’m passionate about clean UI, scalable architecture, and delivering smooth user experiences. Always eager to learn, collaborate, and turn ideas into reality.",
		name: "Harshal Margaj",
		title: "Software Engineer",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Software Engineer",
		duration: "Jan 2024 - Dec 2024",
		company: "Oculon.AI, Mumbai",
		desc: `• Led the end-to-end development of the product Dashboard and Settings Panel, owning the entire frontend architecture and UI/UX implementation.
• Built and maintained scalable, reusable components using ReactJS, Tailwind CSS, Redux, and Next.js, aligned with a design system.
• Integrated REST APIs and designed mock API structures to streamline frontend development and testing workflows.
• Optimized performance and responsiveness of the React app, enhancing load times and overall user experience.
• Collaborated cross-functionally with designers and backend engineers to deliver production-ready features on tight timelines.`,
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Full Stack Developer Intern",
		duration: "Jul 2023 - Sep 2023",
		company: "Fynd, Mumbai",
		desc: `• Collaborated with a team of interns to solve practical development tasks and build mini-projects simulating real-world scenarios.
• Gained hands-on experience with frontend and backend workflows, including API handling and component-based architecture.`,
		className: "",
		thumbnail: "/exp2.svg", // You can replace this with your actual thumbnail if you have one
	},
];

export const socialMedia = [
	{
		id: 1,
		name: "Github",
		img: "/git.svg",
		link: "https://github.com/HarshalMargaj",
	},
	{
		id: 2,
		name: "Linkedin",
		img: "/link.svg",
		link: "https://www.linkedin.com/in/harshal-margaj/",
	},
	{
		id: 3,
		name: "Leetcode",
		img: "/icons8-leetcode.svg",
		link: "https://leetcode.com/u/Harshal_Margaj/",
	},
	{
		id: 4,
		name: "Instagram",
		img: "/icons8-instagram (1).svg",
		link: "https://www.instagram.com/harshal.margaj/",
	},
];
