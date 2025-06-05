export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Testimonials", link: "#testimonials" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	// {
	// 	id: 1,
	// 	title: "I prioritize client collaboration, fostering open communication ",
	// 	description: "",
	// 	className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
	// 	imgClassName: "w-full h-full",
	// 	titleClassName: "justify-end",
	// 	img: "/b1.svg",
	// 	spareImg: "",
	// },
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
		description: "",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "",
		spareImg: "",
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
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
];

export const companies = [
	{
		id: 1,
		name: "cloudinary",
		img: "/cloud.svg",
		nameImg: "/cloudName.svg",
	},
	{
		id: 2,
		name: "appwrite",
		img: "/app.svg",
		nameImg: "/appName.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/host.svg",
		nameImg: "/hostName.svg",
	},
	{
		id: 4,
		name: "stream",
		img: "/s.svg",
		nameImg: "/streamName.svg",
	},
	{
		id: 5,
		name: "docker.",
		img: "/dock.svg",
		nameImg: "/dockerName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Frontend Engineer Intern",
		desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Mobile App Dev - JSM Tech",
		desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "Freelance App Dev Project",
		desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Lead Frontend Developer",
		desc: "Developed and maintained user-facing features using modern frontend technologies.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
	},
	{
		id: 2,
		img: "/twit.svg",
	},
	{
		id: 3,
		img: "/link.svg",
	},
];
