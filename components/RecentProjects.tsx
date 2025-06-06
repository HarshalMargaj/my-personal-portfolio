"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger,
} from "./ui/Animated-Modal";
import { useState } from "react";
import MagicButton from "./MagicButton";

type ProjectType = {
	id: number;
	title: string;
	titleUrl: string;
	des: string;
	img: string;
	iconLists: string[];
	link: string;
	tech_stack: string[];
	details: {
		overview: string;
		features: string[];
		tech_stack: string[];
		challenges_and_learnings: string[];
		future_improvements: string[];
		project_source_code: string;
	};
};

const RecentProjects = () => {
	const [project, setProject] = useState<ProjectType | null>(null);

	return (
		<Modal>
			<div className="py-20" id="projects">
				<h1 className="heading">
					A small selection of{" "}
					<span className="text-purple">recent projects</span>
				</h1>
				<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
					{projects.map(item => (
						<div
							className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
							key={item.id}
						>
							<PinContainer
								title={item.titleUrl}
								href="https://twitter.com/mannupaaji"
							>
								<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
									<div
										className="relative w-full h-full overflow-hidden lg:rounded-3xl"
										style={{ backgroundColor: "#13162D" }}
									>
										<img src="/bg.png" alt="bgimg" />
									</div>
									<img
										src={item.img}
										alt="cover"
										className="z-10 absolute bottom-0 h-[230px]"
									/>
								</div>

								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{item.title}
								</h1>

								<p
									className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
									style={{
										color: "#BEC1DD",
										margin: "1vh 0",
									}}
								>
									{item.des}
								</p>

								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
												style={{
													transform: `translateX(-${
														5 * index + 2
													}px)`,
												}}
											>
												<img
													src={icon}
													alt="icon5"
													className="p-2"
												/>
											</div>
										))}
									</div>

									<div onClick={() => setProject(item)}>
										<ModalTrigger className="md:flex hidden justify-center items-center">
											<p className="flex lg:text-xl md:text-xs text-sm text-purple">
												See more
											</p>
											<FaLocationArrow
												className="ms-3"
												color="#CBACF9"
											/>
										</ModalTrigger>
									</div>
								</div>
								<div className="md:hidden lg:hidden flex gap-2 items-center w-full">
									<a
										href={
											item?.details?.project_source_code
										}
										target="_blank"
										className="w-full"
									>
										<MagicButton title="Source Code" />
									</a>
									<a
										href={item?.titleUrl}
										target="_blank"
										className="w-full"
									>
										<MagicButton
											title="Visit Site"
											otherClasses="w-full"
										/>
									</a>
								</div>
							</PinContainer>
						</div>
					))}
				</div>
			</div>

			<ModalBody className="h-[500px] w-[550px]">
				<ModalContent className="h-full w-full">
					<div className="space-y-6 h-full overflow-y-auto px-4 py-3 scrollbar-hide w-full">
						<img
							src={project?.img}
							alt={project?.title}
							className="rounded-lg w-full object-cover"
						/>

						<h2 className="font-bold lg:text-2xl md:text-xl text-lg">
							{project?.title}
						</h2>

						{/* Overview */}
						{project?.details?.overview && (
							<section>
								<h3 className="text-violet-400 font-semibold mb-1">
									Overview
								</h3>
								<p className="text-sm text-gray-300">
									{project.details.overview}
								</p>
							</section>
						)}

						{/* Features */}
						{project?.details?.features && (
							<section>
								<h3 className="text-violet-400 font-semibold mb-1">
									Key Features
								</h3>
								<ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
									{project.details.features.map(
										(feature, idx) => (
											<li key={idx}>{feature}</li>
										)
									)}
								</ul>
							</section>
						)}

						{/* Tech Stack */}
						{project?.details?.tech_stack && (
							<section>
								<h3 className="text-violet-400 font-semibold mb-1">
									Tech Stack
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.details.tech_stack.map(
										(tech, idx) => (
											<div
												key={idx}
												className="border border-violet-300 text-violet-300 rounded-md px-2 py-1 text-xs font-medium"
											>
												{tech}
											</div>
										)
									)}
								</div>
							</section>
						)}

						{/* Challenges & Learnings */}
						{project?.details?.challenges_and_learnings && (
							<section>
								<h3 className="text-violet-400 font-semibold mb-1">
									Challenges & Learnings
								</h3>
								<ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
									{project.details.challenges_and_learnings.map(
										(item, idx) => (
											<li key={idx}>{item}</li>
										)
									)}
								</ul>
							</section>
						)}

						{/* Future Improvements */}
						{project?.details?.future_improvements && (
							<section>
								<h3 className="text-violet-400 font-semibold mb-1">
									Future Improvements
								</h3>
								<ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
									{project.details.future_improvements.map(
										(item, idx) => (
											<li key={idx}>{item}</li>
										)
									)}
								</ul>
							</section>
						)}

						<div className="flex gap-2 items-center w-full">
							<a
								href={project?.details?.project_source_code}
								target="_blank"
								className="w-full"
							>
								<MagicButton title="Source Code" />
							</a>
							<a
								href={project?.titleUrl}
								target="_blank"
								className="w-full"
							>
								<MagicButton
									title="Visit Site"
									otherClasses="w-full"
								/>
							</a>
						</div>
					</div>
				</ModalContent>
			</ModalBody>
		</Modal>
	);
};

export default RecentProjects;
