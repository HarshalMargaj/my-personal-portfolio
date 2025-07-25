import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { ThreeDMarquee } from "./Marquee";
import { MultiStepLoader } from "./multi-step-loader";

const skills = [
	"Python",
	"JavaScript ES6",
	"ReactJS",
	"NextJS",
	"TypeScript",
	"HTML5",
	"CSS3",
	"Tailwind CSS",
	"Redux",
	"Git and GitHub",
	"RESTful APIs",
	"AWS (EC2, S3)",
	"DSA",
	"OOP",
	"NodeJS",
	"ExpressJS",
	"PostgreSQL",
	"MongoDB",
];

const loadingStates = [
	{ text: "Building pixel-perfect UIs" },
	{ text: "Integrating REST & GraphQL APIs" },
	{ text: "Creating mock APIs for testing" },
	{ text: "Collaborating with designers & backend devs" },
	{ text: "Ensuring responsive web design" },
	{ text: "Writing scalable and maintainable code" },
	{ text: "Optimizing performance and load time" },
	{ text: "Handling client-side routing and state" },
	{ text: "Fixing cross-browser issues" },
	{ text: "Implementing accessibility (a11y) best practices" },
	{ text: "Writing unit and integration tests" },
	{ text: "Participating in code reviews" },
	{ text: "Staying updated with frontend trends" },
];

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const leftLists = ["ReactJS", "NextJS", "Typescript"];
	const rightLists = ["Redux", "TailwindCSS", "JavaScript"];

	const [copied, setCopied] = useState(false);

	const duration = 2000;

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleCopy = () => {
		const text = "harshal.margaj12@gmail.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(
								imgClassName,
								"object-cover object-center "
							)}
						/>
					)}
				</div>
				<div className={`absolute right-0 -bottom-5  `}>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>

				{id === 6 && (
					<BackgroundGradientAnimation>
						<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
					</div>

					<div
						className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
					>
						{title}
					</div>

					{id === 2 && <GridGlobe />}

					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								{leftLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    				lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
							</div>
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
								{rightLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    				lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					)}

					{id === 6 && (
						<div className="mt-5 relative">
							{/* <div className={`absolute -bottom-5 right-0`}>
								<Lottie
									options={defaultOptions}
									height={200}
									width={400}
								/>
							</div> */}

							<MagicButton
								title={
									copied
										? "Email is Copied!"
										: "Copy my email address"
								}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161A31] md:text-[14px] text-[9px]"
							/>
						</div>
					)}

					{id === 5 && <ThreeDMarquee images={skills} />}

					{id === 1 && (
						<div className="w-full h-[60vh] flex items-center justify-center">
							<MultiStepLoader
								loadingStates={loadingStates}
								duration={duration}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
