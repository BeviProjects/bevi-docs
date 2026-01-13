import type { ReactNode } from "react"

const containerSizes = {
	full: "max-w-[1920px]",
	lg: "max-w-[1536px]",
	md: "max-w-[1280px]",
	sm: "max-w-[1024px]",
} as const

type ContainerType = {
	children: ReactNode
	size?: keyof typeof containerSizes
	padding?: string
	className?: string
}

export const Container = ({
	children,
	size = "md",
	padding = "px-2xl lg:px-5xl",
	className,
}: ContainerType) => {
	return (
		<div
			className={`w-full ${containerSizes[size]} mx-auto ${padding} ${className}`}
		>
			{children}
		</div>
	)
}
