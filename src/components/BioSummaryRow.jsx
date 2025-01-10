export default function ({ heading, desc, last = false }) {
	return (
		<li className={"border-theme-muted flex-1" + ` ${last ? "border-y-2" : "border-t-2"}`}>
			<h2 className="theme-h2 border-theme-muted border-b-2 border-dashed">{heading}</h2>
			<p className="text-right">{desc}</p>
		</li>
	);
}
