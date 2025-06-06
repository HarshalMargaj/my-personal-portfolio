import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import MagicButton from "./MagicButton";
import { TypewriterEffect } from "./ui/TypeWritterEffect";

const ContactForm = () => {
	const words = [
		{ text: "Thank" },
		{ text: "you!" },
		{ text: "I'll" },
		{ text: "get" },
		{ text: "back" },
		{ text: "to" },
		{ text: "you" },
		{ text: "as" },
		{ text: "soon" },
		{ text: "as" },
		{ text: "possible.", className: "text-green-500 dark:text-green-400" },
	];

	const [state, handleSubmit] = useForm("mqabekva");
	if (state.succeeded) {
		return (
			<p className="text-center h-full flex items-center justify-center">
				<TypewriterEffect words={words} />
			</p>
		);
	}
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2">
			<label htmlFor="email">Email</label>
			<input
				id="email"
				type="email"
				name="email"
				className="bg-transparent rounded-md border border-violet-200 p-2"
				placeholder="Enter your email"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<label htmlFor="message">Message</label>
			<textarea
				id="message"
				name="message"
				rows={4}
				className="bg-transparent rounded-md border border-violet-200 p-2 resize-none overflow-hidden"
				placeholder="Enter your message"
			/>

			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<MagicButton title="Submit" />
		</form>
	);
};

export default ContactForm;
