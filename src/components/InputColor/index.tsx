import { useEffect, useState } from "react";

type InputColorProps = {
	color: string;
	onChange: (color: string) => void;
};

const stripHash = (value: string) => value.replace(/#/g, "");

export const InputColor = ({ color, onChange }: InputColorProps) => {
	const [internalColor, setInternalColor] = useState(stripHash(color));

	useEffect(() => {
		setInternalColor(stripHash(color));
	}, [color]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (internalColor !== stripHash(color)) {
				onChange(internalColor);
			}
		}, 200);

		return () => clearTimeout(timeout);
	}, [internalColor, color, onChange]);

	const handleChange = (value: string) => {
		setInternalColor(stripHash(value));
	};

	return (
		<div className="w-fit flex flex-row gap-4xs p-4xs inset-ring-1 inset-ring-gray-75 rounded-sm bg-white">
			<div className="relative size-2xl border border-gray-75 rounded-2xs overflow-hidden">
				<input
					type="color"
					className="size-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
					value={`#${internalColor}`}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>

			<label className="w-fit flex flex-row items-center justify-start px-2xs h-2xl leading-none inset-ring-1 inset-ring-gray-75 rounded-2xs">
				<span className="text-gray-75">#</span>
				<input
					type="text"
					className="w-5xl text-gray-55 mb-5xs"
					value={internalColor}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</label>
		</div>
	);
};
