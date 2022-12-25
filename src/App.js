import Card from "./components/Card";
import Header from "./components/Header";
import Hyperlink from "./components/Hyperlink";

import gamebojGif from "./resources/gameboj.gif";
import scoogleGif from "./resources/scoogle.gif";
import tictactoeGif from "./resources/tictactoe.gif";
import kernelPng from "./resources/kernel.png";
import threadlibPng from "./resources/threadlib.png";
import sokobanGif from "./resources/sokoban.gif";
import sbartholMePng from "./resources/sbarthol.me.png";
import doodleJumpJpg from "./resources/doodle-jump.jpg";
import nottenJpg from "./resources/notten.jpg";
import bittorrentPng from "./resources/bittorrent.png";
import ilglPng from "./resources/ilgl.png";
import ivrogneGif from "./resources/ivrogne.gif";
import l3cPng from "./resources/l3c.png";
import raftPng from "./resources/raft.png";
import ssaPng from "./resources/ssa.png";
import satSvg from "./resources/sat.svg";
import hamburguesaGif from "./resources/hamburguesa.gif";
import spaceBashGif from "./resources/space-bash.gif";

function App() {
	return (
		<div>
			<Header />
			<Card
				skills={["Javascript", "HTML", "Websockets"]}
				title="hamburguesa"
				github="https://github.com/sbarthol/hamburguesa"
				app="https://hamburguesa.sbarthol.me/"
				image={hamburguesaGif}
			>
				Game created for the CMU <Hyperlink href="https://www.cmu-webapps.org/">17637</Hyperlink>{" "}
				class. Two players compete against each other in order to create the burger following the
				recipe as quickly as possible. Assets were drawn by hand. The client renders the UI
				according to websocket messages it receives from the server.
			</Card>
			<Card
				skills={["C++"]}
				title="space-bash"
				github="https://github.com/sbarthol/space-bash"
				image={spaceBashGif}
			>
				Game created for the CMU{" "}
				<Hyperlink href="http://graphics.cs.cmu.edu/courses/15-466-f22/">15666</Hyperlink> class. A
				rocket must avoid colliding with foods coming in from all four directions. An asset pipeline
				was designed and implemented to fit hand-drawn tile assets on a very constrained display system
				based on the{" "}
				<Hyperlink href="https://www.nesdev.org/wiki/PPU">
					Nintendo Entertainment System's PPU
				</Hyperlink>
				.
			</Card>
			<Card
				skills={["C++", "OpenMP"]}
				title="parallel-sat"
				github="https://github.com/sbarthol/parallel-sat"
				image={satSvg}
			>
				Non-deterministic parallel k-SAT solver using data parallelism and OpenMP. Uses multi-bit
				assignments and{" "}
				<Hyperlink href="https://en.wikipedia.org/wiki/Unit_propagation">
					unit propagation{" "}
				</Hyperlink>{" "}
				to speed up results. Developed for the{" "}
				<Hyperlink href="http://www.cs.cmu.edu/~418/">15618 </Hyperlink> class at Carnegie Mellon
				University. Implementation based on{" "}
				<Hyperlink href="http://www.cs.cmu.edu/~mheule/publications/JSAT4_6_Heule.pdf">
					this paper
				</Hyperlink>
				.
			</Card>
			<Card
				skills={["OCaml", "C"]}
				title="c0c"
				github={
					process.env.REACT_APP_VISIBILITY === "PUBLIC"
						? undefined
						: "https://gitfront.io/r/sbarthol/373c44c39ac6459869d0045de2d090674b8fd958/c0c/"
				}
				image={ssaPng}
			>
				c0c is a compiler that compiles{" "}
				<Hyperlink href="http://w.twelf.org/tutorial/">C0</Hyperlink> to x86-64 assembly and was
				written for Carnegie Mellon University's{" "}
				<Hyperlink href="http://www.cs.cmu.edu/~411/index.html">15611</Hyperlink> class. It uses
				static single assignment to perform optimizations (copy propagation, dead code elimination,
				folding), does register allocation and automatic garbage collection. Its performance lies
				between the -O0 and -O1 flags of gcc.
			</Card>
			<Card
				skills={["Go", "RPC"]}
				title="raft"
				github={
					process.env.REACT_APP_VISIBILITY === "PUBLIC"
						? undefined
						: "https://gitfront.io/r/sbarthol/de0730b2ba112625e216527718d91821d24c9285/raft/"
				}
				image={raftPng}
			>
				<Hyperlink href="https://raft.github.io/">Raft</Hyperlink> is a consensus algorithm that is
				designed to be easy to understand. It's equivalent to Paxos in fault-tolerance and
				performance, but decomposed into independent subproblems. The implementation is based on the{" "}
				<Hyperlink href="https://raft.github.io/raft.pdf">Raft paper</Hyperlink>.
			</Card>
			<Card
				skills={["Scala", "C"]}
				title="l3c"
				app="https://l3c.sbarthol.me"
				github={
					process.env.REACT_APP_VISIBILITY === "PUBLIC"
						? undefined
						: "https://gitfront.io/r/sbarthol/e819ac69f87ba53a9dddba54a59226edefd473c3/l3c/"
				}
				image={l3cPng}
			>
				Compiler written in Scala for the functional language L3. Advanced compilation techniques
				like{" "}
				<Hyperlink href="https://en.wikipedia.org/wiki/Continuation-passing_style">
					continuation-passing style
				</Hyperlink>
				, closure conversion and various optimizations (common subexpression elimination, constant
				folding, dead code elimination, inlining etc...) where used. The assembly runs on a virtual
				machine written in C that implements a{" "}
				<Hyperlink href="https://en.wikipedia.org/wiki/Tracing_garbage_collection">
					mark-and-sweep
				</Hyperlink>{" "}
				garbage collector.
			</Card>
			<Card
				skills={["React", "tailwindCSS", "nginx"]}
				title="sbarthol.me"
				app="https://sbarthol.me"
				github="https://github.com/sbarthol/sbarthol.me"
				image={sbartholMePng}
			>
				This website, that I decided to build after a 8.5 x 11 resume page wasn't enough anymore to
				store all my open source projects.
			</Card>
			<Card
				skills={["Scala", "Akka Framework", "React"]}
				github="https://github.com/sbarthol/scoogle"
				app="https://scoogle.sbarthol.me"
				title="scoogle"
				image={scoogleGif}
			>
				Scoogle is a Search Engine written from scratch in Scala and using Akka Actors. Its
				components are a web crawler, a HBase data store, a server serving a backend API and a
				frontend written in React.
			</Card>
			<Card
				skills={["React", "Javascript"]}
				title="tictactoe"
				app="https://tictactoe.sbarthol.me"
				github="https://github.com/sbarthol/tictactoe"
				image={tictactoeGif}
			>
				Tictactoe is an invincible tictactoe game written in React and using the{" "}
				<Hyperlink href="https://en.wikipedia.org/wiki/Minimax">minimax</Hyperlink> algorithm.
			</Card>
			<Card
				skills={["C++", "CMake", "googletest"]}
				title="bittorrent"
				github="https://github.com/sbarthol/bittorrent"
				image={bittorrentPng}
			>
				This is a small torrenting client written from scratch in C++. It downloads a bencoded
				torrent file from a tracker, decodes the torrent bencode, and downloads a file from a list
				of peers given by the tracker using the bittorrent protocol (application layer protocol on
				top of TCP).
			</Card>
			<Card
				skills={["C", "x86 Assembly", "Concurrency"]}
				title="kernel"
				github={
					process.env.REACT_APP_VISIBILITY === "PUBLIC"
						? undefined
						: "https://gitfront.io/r/sbarthol/bf74b9f7a5b48ca06f80f54ab4a9e74321c72fd3/kernel/"
				}
				image={kernelPng}
			>
				This is the kernel from Carnegie Mellon University's{" "}
				<Hyperlink href="https://www.cs.cmu.edu/~410/">15410</Hyperlink> class. With a partner, I
				designed and implemented a complete, preemptive, multi-threaded kernel from scratch. We
				thread scheduler, virtual memory, hardware interrupts (keyboard, timer), a console driver
				and more than 20 system calls. We later added a console multiplexer, an implementation of
				the <Hyperlink href="https://en.wikipedia.org/wiki/Uptime#Linux">Linux uptime</Hyperlink>{" "}
				command and a thread library.
			</Card>
			<Card
				skills={["C", "x86 Assembly", "Concurrency"]}
				title="threadlib"
				github={
					process.env.REACT_APP_VISIBILITY === "PUBLIC"
						? undefined
						: "https://gitfront.io/r/sbarthol/5bd5996d5ecf32b5971d83be2b1e1eacd3b14a89/threadlib/"
				}
				image={threadlibPng}
			>
				This is a 1:1 pure kernel thread library written from scratch in C built on top of my
				kernel. Once the library was able to spawn and join threads, we added mutexes using the x86
				xchg instruction. We then added condition variables, semaphores and read-write locks on top
				of that.
			</Card>
			<Card
				skills={["C"]}
				title="sokoban"
				github={
					process.env.REACT_APP_VISIBILITY === "PUBLIC"
						? undefined
						: "https://gitfront.io/r/sbarthol/qvJhMfECMkjY/sokoban/"
				}
				image={sokobanGif}
			>
				<Hyperlink href="https://en.wikipedia.org/wiki/Sokoban">Sokoban</Hyperlink> is a puzzle
				video game in which the player pushes boxes around in a warehouse, trying to get them to
				storage locations. The game was written in pure kernel mode, and the drivers (CRTC cursor,
				keyboard and timer) are implemented using the memory mapped IO and{" "}
				<Hyperlink href="https://fr.wikipedia.org/wiki/Interrupt_Descriptor_Table">
					interrupt descriptor table
				</Hyperlink>{" "}
				of the x86 architecture.
			</Card>
			<Card
				skills={["C++", "algorithms"]}
				title="doodle-jump"
				github="https://github.com/sbarthol/doodle-jump"
				app="https://portal.education.lu/Portals/21/LIO/2018/Questionnaire%20Finale.pdf"
				image={doodleJumpJpg}
			>
				Doodle Jump is a competitive programming problem that I successfully submitted for the
				Luxembourgish Olympiad in Informatics{" "}
				<Hyperlink href="https://portal.education.lu/infosolympiad/Historique-LIO/LIO-2018-2020">
					(2018 edition)
				</Hyperlink>
				. I had won the 2017 edition the year before. It is a hard dynamic programming problem in
				which a jumper must hop from platform to platform using the least number of jetpacks. None
				of the contestants were able to solve the problem entirely that year.
			</Card>
			<Card
				github="https://github.com/sbarthol/gameboj"
				skills={["Java", "Assembly"]}
				title="gameboj"
				image={gamebojGif}
			>
				Gameboj is a complete Nintendo{" "}
				<Hyperlink href="https://en.wikipedia.org/wiki/Game_Boy">1989 Game Boy</Hyperlink> emulator
				written from scratch in Java. Any game cartridge can be downloaded as a .gb file and played
				on the emulator. The original Sharp LR35902 processor is emulated on a very low level. Bus
				controller, ROM, RAM, Direct Memory Accesses (DMA), screen controller etc... are implemented
				according to the original Nintendo specs.
			</Card>
			<Card
				skills={["Pascal"]}
				title="ivrogne"
				github="https://github.com/sbarthol/ivrogne"
				image={ivrogneGif}
			>
				Ivrogne is a tiny high school project written in Pascal. The player first configures a board
				of size n x n with a number m of obstacles, a house and a drunk. The goal is to get the
				drunk back to his house by advancing in a random direction each time, avoiding obstacles.
			</Card>
			<Card
				skills={["Objective-C", "Swift", "Cocoa Framework", "XCode"]}
				title="notten"
				app="https://www.facebook.com/NottenLuxembourg"
				github="https://github.com/sbarthol/notten"
				image={nottenJpg}
			>
				Notten is an iOS App written in Objective-C and Swift. Students enter their grades and
				receive all sorts of statistics, data, charts, graphs etc... It ranked number 1 in the
				Luxembourgish App Store, was downloaded 6950 times and generated a revenue of $2.12K during
				its lifetime.
			</Card>
			<Card
				skills={["Objective-C", "Cocoa Framework", "XCode"]}
				title="iLGL"
				github="https://github.com/sbarthol/iLGL"
				app="https://www.facebook.com/ilglCompanionApp"
				image={ilglPng}
			>
				This is an iOS App that I programmed in Objective-C for my high school in Luxembourg. It
				supported various features like of list of absent teachers, a daily joke, the current
				weather fetched by a local Raspberry Pi antenna, a contest of who was able to hold a button
				for the longest time etc... It was downloaded 4510 times according to iTunes Connect.
			</Card>
		</div>
	);
}

export default App;
