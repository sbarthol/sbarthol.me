import React from "react";
import Arrow from "./Arrow.js";

function Hyperlink({ href, children }) {
	return (
		<a href={href} class="inline align-baseline text-indigo-500 hover:underline">
			{children}
			<Arrow />
		</a>
	);
}

export default Hyperlink;
