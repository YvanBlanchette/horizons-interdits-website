import * as Headless from "@headlessui/react";
import { Link as RouterLink } from "react-router-dom";
import { forwardRef } from "react";

export const Link = forwardRef(function Link(props, ref) {
	// Convertir href en to pour React Router
	const { href, to, ...restProps } = props;

	return (
		<Headless.DataInteractive>
			<RouterLink
				ref={ref}
				to={to || href}
				{...restProps}
			/>
		</Headless.DataInteractive>
	);
});
