import { useSelector } from "react-redux";
import ImagePanel from "../components/ImagePanel";
import VideoPanel from "../components/VideoPanel";
import BioSummaryRow from "../components/BioSummaryRow";

export default function BiographyPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 gap-2 flex flex-col text-theme-text m-auto items-center max-w-[1170px] font-medium hyphens-auto pb-28">
			<h1 className="theme-h1 lg:w-[1170px]">{["Biography", "Биография"][lang]}</h1>

			<section className="flex w-full gap-4 justify-center my-32">
				<ul className="w-[450px] flex flex-col">
					<BioSummaryRow
						heading={["name:", "име:"][lang]}
						desc={["Diyan Nikolov", "Диян Николов"][lang]}
					/>
					<BioSummaryRow
						heading={["fluent languanges:", "говорими езици:"][lang]}
						desc={["English, Bulgarian", "Английски, Български"][lang]}
					/>
					<BioSummaryRow
						heading={["education:", "проф. образование:"][lang]}
						desc={["Masters in Architecture", "Архитектура - Магистър"][lang]}
					/>
					<BioSummaryRow
						heading={["location:", "местоположение:"][lang]}
						desc={["Sofia, Bulgaria", "гр.София, България"][lang]}
					/>
					<BioSummaryRow
						heading={["hobbies:", "хобита:"][lang]}
						desc={
							[
								"the gym, painting, crypto-trading, BMX, prototyping video-games",
								"фитнес, рисуване, крипто-валути, BMX, прототипване на видео-игри",
							][lang]
						}
						last
					/>
					<a
						className="theme-button mt-4 ml-auto"
						href="/biography/Diyan_Nikolov_CV.pdf"
						download={"Diyan_Nikolov_CV.pdf"}>
						{["DOWNLOAD CV", "ИЗТЕГЛИ CV"][lang]}
					</a>
				</ul>
				<img
					src="/biography/Party 1.jpg"
					alt=""
					className="float-left h-[370px] w-[400px]  object-cover object-top rounded-lg border-2 border-theme-text"
				/>
			</section>

			{/*-------------------- В НАЧАЛОТО --------------------*/}
			<section className="flex lg:flex-row flex-col gap-4 lg:px-20 items-center">
				<div className="flex-1 text-justify indent-6 flex flex-col gap-2">
					<h2 className="theme-h2 indent-0 text-right">
						{["In the beginning", "В началото"][lang]}
					</h2>
					<p>
						{
							[
								"When I was a child, I knew nothing. I didn't know what I wanted to become, nor what I was good at. The only thing I knew was that I wanted to achieve something great. Maybe it was an inner instinct to prove myself – to my friends, to my family, or perhaps to myself. But the truth was, I was lost and had no idea where to start. ",
								"Когато бях дете, не знаех нищо. Не знаех какъв искам да стана, нито в какво съм добър. Единственото, което знаех, беше, че искам да постигна нещо велико. Може би това беше вътрешният инстинкт да докажеш себе си – пред приятелите си, пред семейството или може би пред самия себе си. Но истината беше, че бях загубен и нямах представа откъде да започна.",
							][lang]
						}
					</p>
					<p>
						{
							[
								'Like most children, I turned to the adults. I remember one day asking my father: "Dad, of all the people you know, who is the most important? Who makes the most money?" My father, who works as a construction engineer, thought for a moment and then said: "The architects. They are the ones who design the buildings. They create the plans, coordinate the engineers, electricians, plumbers, and builders. They bring everything together."',
								"Както повечето деца, се обърнах към възрастните. Помня, един ден попитах баща ми: „Тате от всички хора, които познаваш, кой е най-важният? Кой печели най-много пари?“ Баща ми, който работи като строителен инженер, се замисли за момент и после каза: „Архитектите. Те са тези, които проектират сградите. Те изготвят плановете, координират инженерите, електротехниците, водопроводчиците и строителите. Те обединяват всичко.",
							][lang]
						}
					</p>
					<p>
						{
							[
								"That answer stuck with me. It wasn't as glamorous as becoming a movie director, or an illustrator, or a rally driver, but it was realistic. Something that sounded achievable. And maybe deep down, I wanted to follow in my father's footsteps – at least to some extent. So, I decided: I will become an architect.",
								"Този отговор остана в съзнанието ми. Не беше толкова бляскаво, колкото да станеш кинозвезда, нито толкова вълнуващо, колкото да станеш състезателен пилот, но беше реалистично. Нещо което звучеше постижимо. А може би дълбоко в себе си исках да последвам стъпките на баща ми – поне донякъде. Затова реших: ще стана архитект.",
							][lang]
						}
					</p>
				</div>
				<ImagePanel
					src="/biography/11164684_886824664707331_1592759706639424709_o.jpg"
					desc={
						[
							"On a national masonry competition with my friend and teammate, 2nd place",
							"На национално състезание по зидария с приятел и съотборник, 2-ро място",
						][lang]
					}
					canMaximize
					className="float-left lg:w-[450px] lg:h-[520px] flex-none"
				/>
			</section>

			<section className="lg:px-20 indent-6 text-justify hyphens-auto">
				<p>
					{
						[
							"Initially, it wasn't the dream I always had as a child. It wasn't a wild fantasy or something I was passionate about for years. But it was a plan – a real plan. And I clung to it. I enrolled in the Sliven Professional High School of Construction and Architecture, determined to succeed. Architecture seemed like a smart choice. From a young age, I loved to draw and build models of buildings from paper and glue, so a profession that mixed art, design, and logic sounded perfect. ",
							"Първоначално това не беше мечтата, за която винаги съм мечтал като дете. Не беше дива фантазия или нещо, за което бях страстен от години. Но беше план – истински план. И аз се вкопчих в него. Записах се в Сливенската професионална гимназия по строителство и архитектура, решен да успея. Архитектурата изглеждаше като умен избор: начин да изградя собственото си бъдеще, като остана свързан със света, който баща ми познаваше толкова добре.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"I worked hard and gradually things started to fall into place. After finishing school, I managed to get into the University of Architecture, Civil Engineering and Geodesy – the big leagues!",
							"Работих здраво и постепенно нещата започнаха да се нареждат. След като завърших училището, успях да вляза в Университета по строителство и геодезия – голямата работа! Това беше скок напред, шанс да докажа пред себе си и пред другите, че съм способен на нещо.",
						][lang]
					}
				</p>
			</section>

			{/*-------------------- ЖИВОТЪТ В УНИ --------------------*/}
			<section className="lg:px-20 indent-6 text-justify hyphens-auto">
				<ImagePanel
					className="lg:w-[350px] lg:h-[550px] float-left m-4 ml-0"
					src="/biography/gallery_9.png"
					canMaximize
					desc={
						[
							"University of Architecture, Construction and Geodesy - Sofia",
							"Университет по Архитектура, Строителство и Геодезия - София",
						][lang]
					}
				/>
				<h2 className="theme-h2 indent-0 my-2">
					{["Life at university", "Животът в университета"][lang]}
				</h2>
				<p>
					{
						[
							"However, university life was not what I expected. There were many sleepless nights spent finishing projects, and the mornings were reserved for staring at bright projectors in dark halls. We had to memorize trivial details from old socialist textbooks. All this, combined with the alienation from the new city and the distance from family and friends, led to moments filled with stress and doubts about the future. ",
							"Животът в университета обаче не беше това, което очаквах. Имаше много безсънни нощи, прекарани в довършване на проекти, а сутрините бяха запазени за взиране в ярки проектори в тъмни зали. Налагаше се да наизустяваме незначителни детайли от стари социалистически учебници. Всичко това, съчетано с отчуждението от новия град и разстоянието от семейството и приятелите, водеше до моменти, изпълнени със стрес и съмнения относно бъдещето.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"Amidst the monotony and tension, I sought something to distract me. Most people indulge in TV series, gambling, video games (I'm guilty of this too), or hanging out with friends. But I remember one day during the summer vacation, I was scrolling through something on my screen, and it struck me: 'I've used computers all my life, but always with programs that someone else made. I wonder how hard it would be to unlock the power of the computer and write my own programs that do what I want?' My curiosity got the better of me, and a few months later, I found myself in front of the screen, yelling in frustration because I couldn't get a character on the screen to move according to the keyboard buttons. It did whatever it wanted.",
							"Сред монотонността и напрежението търсех нещо, което да ми отвлече вниманието. Повечето хора се упояват с телевизионни сериали, хазарт, видеоигри (и аз съм виновен за това), или излизат с приятели. Но помня, един ден, по време на лятната ваканция, скролвах нещо пред монитора и ми хрумна: „Цял живот използвам компютри, но винаги с програми, които някой друг е направил. Чудя се колко трудно ще е, ако сам отключа силата на компютъра и напиша свои собствени програми, които да правят каквото аз искам?“ Любопитството ми надделя, и няколко месеца по-късно се озовах пред екрана, крещейки изнервено, защото не успявах да накарам един герой на екрана да се движи според бутоните на клавиатурата ми. Той правеше каквото си иска.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"That's when I realized how vast the world of programming is that I was trying to enter – and how painful it was to learn even the basic principles.",
							"Тогава осъзнах колко огромен е светът на програмирането, в който се опитвах да навляза – и колко болезнено щеше да бъде да научиш дори основните принципи.",
						][lang]
					}
				</p>
			</section>

			{/*-------------------- ПРОГРАМИРАНЕ КАТО ХОБИ --------------------*/}

			<section className="lg:px-20 indent-6 text-justify hyphens-auto">
				<ImagePanel
					className="lg:h-[270px] lg:w-[360px] float-right ml-4 mt-4"
					src="/biography/Screenshot 2025-01-02 133824.png"
					canMaximize
					desc={
						[
							"Making custom graphs and trading strategies on cryptocurrencies",
							"Правене на графи и стратегии за обмяна на криптовалути",
						][lang]
					}
				/>
				<h2 className="theme-h2 indent-0 my-2 text-right">
					{["Programming as a hobby", "Програмиране като хоби"][lang]}
				</h2>
				<p>
					{
						[
							"The first couple of years were all about experimenting. I dived into game engines like MUGEN, Game Maker Studio, Unity, and Godot, eager to create something entirely my own. I loved taking elements from my favorite games and combining them into something new—something I had complete creative control over. I got to decide the who, the where, the what, and the why. It felt like I was building my own worlds, and that kind of freedom was intoxicating.",
							"През първите няколко години експериментирах с гейм енджини като MUGEN, Game Maker Studio, Unity и Godot. Обожавах да взимам елементи от любимите ми игри и да ги комбинирам в нещо ново, над което имах пълен творчески контрол. Аз избирах кой, къде, какво и защо.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"The deeper I got into programming, the more addictive it became. There’s something about solving problems that gives you a rush—a little dopamine hit every time you break something down and put it back together again, only better. With every bug I fixed and every feature I added, I could feel myself getting hooked.",
							"Трябва да призная, че колкото повече учех за програмирането и решаването на проблеми, толкова по-увлекателно ставаше. Всеки път, когато работиш върху нещо, което те вдъхновява, получаваш малки дози допамин от това, че разглобяваш нещо и после го изграждаш отново, но по-добре.",
						][lang]
					}
				</p>
				{/* <video src="/biography/Untitled.mp4" className="w-[400px] float-left" muted autoPlay loop></video> */}
				<VideoPanel
					className="w-[400px] h-[310px] float-left mr-4 mt-4"
					canMaximize
					src="/biography/videoGame prototype.mp4"
					desc={"2d Sidescroller prototyping - made with Godot"}
				/>
				<p className="mt-4">
					{
						[
							"But it wasn’t until I stumbled upon a charting tool for cryptocurrencies called TradingView that everything really clicked. TradingView is a platform for graphing crypto prices with bar charts, but it also allows you to inject your own code to create custom graphs or even automate cryptocurrency trades based on strategies you define.",
							"Мисля, че моментът, в който нещата ми се избистриха, беше, когато се заиграх с графичен инструмент за криптовалути, наречен TradingView. Софтуерът произвежда таблици с цените на криптовалутите, но има начин да инжектираш свой собствен код, за да създадеш персонализирани графики или дори да купуваш и продаваш криптовалути според стратегия със зададени параметри, напълно автоматизирано.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"It was a game-changer for me. Unlike the complex 2D game engines I had been wrestling with—where I had to account for physics, frames per second, and countless other moving parts—TradingView was simpler, more numbers-driven. And for the first time, I could see programming fundamentals in action: selecting objects, reading and writing properties, using functions. It was as if a fog had lifted, and I finally understood the building blocks that made everything work.",
							"За мен това беше пробив. За разлика от сложните 3D гейм енджини, TradingView беше по-опростен и базиран на числа. И за първи път видях програмирането като ясна система: избиране на обекти, четене и записване на свойства, използване на функции. Беше като да се вдигне мъгла, и аз най-накрая разбрах основните градивни частици.",
						][lang]
					}
				</p>
			</section>

			{/*-------------------- ПРОГРАМИРАНЕ КАТО СТРАСТ --------------------*/}

			<section className="lg:px-20 indent-6 text-justify hyphens-auto">
				<ImagePanel
					className="lg:h-[360px] float-right m-4 mr-0 "
					src="/biography/udemy-WebDeveloper bootcamp.jpg"
					canMaximize
					desc={"Web Developer Bootcamp by Colt Steele"}
				/>
				<h2 className="theme-h2 indent-0 my-2 text-right">
					{["Programming as a passion", "Програмиране като страст"][lang]}
				</h2>

				<p>
					{
						[
							"After graduating, I faced the job market, where I discovered that no one was looking for inexperienced young people with no professional reputation. After months spent in low-paying jobs, I found an enthusiastic startup studio called MYX Robotics. They hired me for the construction team, where I worked on planning sites for telecommunications towers. ",
							"След дипломиране, се сблъсках с пазара на труда – където открих че никой не търси неопитни, млади хора с нулева професионална репутация. След месеци, прекарани в нископлатени работи, намерих ентусиазирано стартъп студио, наречено MYX Robotics. Наеха ме в строителния екип, където работех върху планирането на обекти за телекомуникационни кули.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"The first years were intense. I had problems with rent, my car, and working in a team, but over time things fell into place. Gradually, I became more efficient – tasks that initially took me a week now I completed in 1-2 days. This freed up time, which I used to deepen my programming skills through courses like The Web Developer Bootcamp, The Git & Github Bootcamp, and React – The Complete Guide 2024.",
							"Първите години бяха напрегнати. Имах проблеми с наема, колата и работата в екип, но с времето нещата се наредиха. Постепенно станах по-ефективен – задачи, които ми отнемаха седмица в началото, сега завършвах за 1-2 дни. Това ми освободи време, което използвах, за да задълбоча уменията си в програмирането чрез курсове като The Web Developer Bootcamp, The Git & Github Bootcamp и React – The Complete Guide 2024.",
						][lang]
					}
				</p>
			</section>

			{/*-------------------- НОВО НАЧАЛО --------------------*/}

			<section className="lg:px-20 indent-6 text-justify hyphens-auto">
				<ImagePanel
					className="lg:h-[360px] float-left m-4 ml-0 "
					src="/biography/udemy-React.jpg"
					canMaximize
					desc={"React-The complete guide by Maximilian Schwarzmuller"}
				/>
				<h2 className="theme-h2 indent-0 my-2 text-left">
					{["A new beginning", "Ново начало"][lang]}
				</h2>
				<p>
					{
						[
							"Two months ago, I was laid off from my job. My bosses couldn't secure enough projects to keep the team, so they had to let many of us go. It was a tough moment, but not entirely unexpected. The construction sector can be unpredictable, and I was already starting to feel that architecture wasn't where my future lay. Instead of seeing it as a failure, I saw it as an opportunity – a chance to finally make the big move I had been preparing for.",
							"Преди два месеца ме съкратиха от работа. Шефовете ми не успяха да осигурят достатъчно проекти, за да поддържат екипа, и се наложи да освободят много от нас. Това беше труден момент, но не беше напълно неочакван. Строителният сектор може да бъде непредсказуем, а аз вече започвах да усещам, че архитектурата не е мястото, където лежи моето бъдеще. Вместо да го възприема като провал, го видях като възможност – шанс най-накрая да направя голямата стъпка, за която се подготвях.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"I decided to completely abandon architecture and dedicate myself to a career in software development. Over the years, I discovered a real passion for programming and knew that with the right mindset, I could turn this passion into a profession. I'm not naive – I know I don't have enough years of experience to get a high salary or have big demands. But I don't care. I'm ready to start from scratch and prove myself.",
							"Реших напълно да изоставя архитектурата и да се посветя на кариера в софтуерната разработка. През годините открих истинска страст към програмирането и знаех, че с правилното мислене мога да превърна тази страст в професия. Не съм наивен – знам, че нямам достатъчно години опит, за да получа висока заплата или да имам големи изисквания. Но не ми пука. Готов съм да започна от нулата и да се докажа.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"After all, I've come this far entirely on my own. Every skill I've learned, every problem I've solved, and every achievement I've marked are the result of my own curiosity, determination, and desire for growth. I taught myself to program when I didn't even know where to start. I navigated the confusing world of frameworks and technologies, often feeling lost, but I never gave up. And I know I can keep going, regardless of whether others believe in me or not.",
							"В крайна сметка стигнах дотук напълно сам. Всяко умение, което съм научил, всеки проблем, който съм решил, и всяко постижение, което съм отбелязал, са резултат от моето собствено любопитство, решителност и желание за развитие. Научих се да програмирам, когато дори не знаех откъде да започна. Преодолявах объркания свят на фреймуъркове и технологии, често се чувствах изгубен, но никога не се отказвах. И знам, че мога да продължа, независимо дали другите вярват в мен или не.",
						][lang]
					}
				</p>
				<p>
					{
						[
							"This is just the beginning. I'm ready to enter the world of software development, face the challenges, and keep improving every day. It doesn't matter where I'll start or how small the job may be – what matters is where I'm headed. And I know exactly where I'm going.",
							"Това е само началото. Готов съм да навляза в света на софтуерната разработка, да се изправя пред предизвикателствата и да продължавам да се подобрявам всеки ден. Няма значение откъде ще започна или колко малка може да бъде работата – това, което има значение, е накъде съм се запътил. А аз знам точно къде отивам.",
						][lang]
					}
				</p>
			</section>
		</main>
	);
}
