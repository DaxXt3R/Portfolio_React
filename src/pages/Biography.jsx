import { useSelector } from "react-redux";
import ImagePanel from "../components/ImagePanel";

export default function BiographyPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 gap-12 flex flex-col text-theme-text m-auto items-center max-w-[1170px] font-medium hyphens-auto">
			<h1 className="theme-h1 lg:w-[1170px]">Биография</h1>
			<section className="flex lg:flex-row flex-col gap-4 lg:px-20">
				<div className="flex-1 text-justify indent-6 flex flex-col gap-2">
					<h2 className="theme-h2 indent-0">{["english", "bulgarian"][lang]}</h2>
					<p>
						{
							[
								"When I was a kid, I didn’t know anything. I didn’t know what I wanted to be or what I was good at. All I knew was that I wanted to achieve something great. Maybe it was an inner instinct to prove my worth—to my friends, to my family, or maybe just to myself. But the truth is, I was lost and had no idea where to start.",
								"Когато бях дете, не знаех нищо. Не знаех какъв искам да стана, нито в какво съм добър. Единственото, което знаех, беше, че искам да постигна нещо велико. Може би това беше вътрешният инстинкт да докажеш себе си – пред приятелите си, пред семейството или може би пред самия себе си. Но истината беше, че бях загубен и нямах представа откъде да започна.",
							][lang]
						}
					</p>
					<p>
						{
							[
								"Like most kids, I turned to the adults around me for answers. One day, I asked my dad, “Out of all the people you know, who’s the most important? Who makes the most money?” My dad, who worked in construction, thought about it for a moment and then said, “The architects. They’re the ones who design everything—the buildings, the plans. They coordinate with the engineers, electricians, plumbers, and the builders. They’re the ones who bring it all together.",
								"Както повечето деца, се обърнах към възрастните. Помня, един ден попитах баща ми: „Тате от всички хора, които познаваш, кой е най-важният? Кой печели най-много пари?“ Баща ми, който работи като строителен инженер, се замисли за момент и после каза: „Архитектите. Те са тези, които проектират сградите. Те изготвят плановете, координират инженерите, електротехниците, водопроводчиците и строителите. Те обединяват всичко.",
							][lang]
						}
					</p>
				</div>

				<div className="lg:w-2/5 h-full">
					<ImagePanel
						src="/biography/11164684_886824664707331_1592759706639424709_o.jpg"
						desc={
							[
								"On a national masonry competition with my friend and teammate, 2nd place",
								"На национално състезание по зидария с приятел и съотборник, 2-ро място",
							][lang]
						}
					/>
				</div>
			</section>
			<ImagePanel
				className="lg:size-[500px]"
				src="/biography/Screenshot 2025-01-02 133824.png"
				desc={
					[
						"Making custom graphs and automated trading on cryptocurrencies",
						"Правене на собствени графи и автоматизирани стратегии на криптовалути",
					][lang]
				}
			/>
		</main>
	);
}
