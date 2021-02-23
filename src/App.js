import { Card, Link } from "./components/Card.js";
import Header from "./components/Header";

import gamebojGif from "./resources/gameboj.gif";
import scooglePng from "./resources/scoogle.png";
import tictactoeGif from "./resources/tictactoe.gif";
import kernelPng from "./resources/kernel.png";
import threadlibPng from "./resources/threadlib.png";
import sbartholMePng from "./resources/sbarthol.me.png";
import doodleJumpJpg from "./resources/doodle-jump.jpg";
import nottenJpg from "./resources/notten.jpg";
import bittorrentPng from "./resources/bittorrent.png";
import ilglPng from "./resources/ilgl.png";

function App() {
  return (
    <div>
      <Header />
      <Card
        skills={["React", "tailwindCSS"]}
        title="sbarthol.me"
        app="https://sbarthol.me"
        github="https://github.com/sbarthol/sbarthol.me"
        image={sbartholMePng}
      >
        This website, that I decided to build after a 8.5 x 11 resume page
        wasn't enough anymore to store all my open source projects.
      </Card>
      <Card
        skills={["Scala", "Akka Framework", "React"]}
        github="https://github.com/sbarthol/scoogle"
        app="https://scoogle.sbarthol.me"
        title="scoogle"
        image={scooglePng}
      >
        Scoogle is a Search Engine written from scratch in Scala and using Akka
        Actors. Its components are a web crawler, a HBase data store, a server
        serving a backend API and a frontend written in React.
      </Card>
      <Card
        skills={["React", "Javascript"]}
        title="tictactoe"
        app="https://tictactoe.sbarthol.me"
        github="https://github.com/sbarthol/tictactoe"
        image={tictactoeGif}
      >
        Tictactoe is an invincible tictactoe game written in React and using the{" "}
        <Link href="https://en.wikipedia.org/wiki/Minimax">minimax</Link>{" "}
        algorithm.
      </Card>
      <Card
        skills={["C++", "CMake", "googletest"]}
        title="bittorrent"
        github="https://github.com/sbarthol/bittorrent"
        image={bittorrentPng}
      >
        This is a small torrenting client written from scratch in C++. It
        downloads a bencoded torrent file from a tracker, decodes the torrent
        bencode, and downloads a file from a list of peers given by the tracker
        using the bittorrent protocol (application layer protocol on top of
        TCP).
      </Card>
      <Card
        skills={["C", "x86 Assembly", "Concurrency"]}
        title="kernel"
        github="https://gitfront.io/r/sbarthol/bf74b9f7a5b48ca06f80f54ab4a9e74321c72fd3/kernel/"
        image={kernelPng}
      >
        This is the kernel from Carnegie Mellon University{" "}
        <Link href="https://www.cs.cmu.edu/~410/">15410</Link> class. With a
        partner, we implemented scheduler, virtual memory, hardware interrupts
        (keyboard, timer), a console driver and more than 20 system calls. We
        later added a console multiplexer and an implementation of the{" "}
        <Link href="https://en.wikipedia.org/wiki/Uptime#Linux">
          Linux uptime
        </Link>{" "}
        command.
      </Card>
      <Card
        skills={["C", "x86 Assembly", "Concurrency"]}
        title="threadlib"
        github="https://gitfront.io/r/sbarthol/5bd5996d5ecf32b5971d83be2b1e1eacd3b14a89/threadlib/"
        image={threadlibPng}
      >
        This is a 1:1 pure kernel thread library written from scratch in C built
        on top of my kernel. Once the library was able to spawn and join
        threads, we added mutexes using the x86 xchg instruction. We then added
        condition variables, semaphores and read-write locks on top of that.
      </Card>
      <Card
        skills={["C++", "algorithms"]}
        title="doodle jump"
        github="https://github.com/sbarthol/doodle-jump"
        app="https://portal.education.lu/Portals/21/LIO/2018/Questionnaire%20Finale.pdf"
        image={doodleJumpJpg}
      >
        Doodle Jump is a competitive programming problem that I successfully
        submitted for the Luxembourgish Olympiad in Informatics{" "}
        <Link href="https://portal.education.lu/infosolympiad/Historique-LIO/LIO-2018-2020">
          (2018 edition)
        </Link>
        . I had won the 2017 edition the year before. It is a hard dynamic
        programming problem in which a jumper must hop from platform to platform
        using the least number of jetpacks. None of the contestants were able to
        solve the problem entirely that year.
      </Card>
      <Card
        github="https://github.com/sbarthol/gameboj"
        skills={["Java", "Assembly"]}
        title="gameboj"
        image={gamebojGif}
      >
        Gameboj is a complete Nintendo{" "}
        <Link href="https://en.wikipedia.org/wiki/Game_Boy">1989 Game Boy</Link>{" "}
        emulator written from scratch in Java. Any game cartridge can be
        downloaded as a .gb file and played on the emulator. The original Sharp
        LR35902 processor is emulated on a very low level. Bus controller, ROM,
        RAM, Direct Memory Accesses (DMA), screen controller etc... are
        implemented according to the original Nintendo specs.
      </Card>
      <Card
        skills={["Objective-C", "Swift", "Cocoa Framework", "XCode"]}
        title="notten"
        app="https://www.facebook.com/NottenLuxembourg"
        github="https://github.com/sbarthol/notten"
        image={nottenJpg}
      >
        Notten is an iOS App written in Objective-C and Swift. Students enter
        their grades and receive all sorts of statistics, data, charts, graphs
        etc... It ranked number 1 in the Luxembourgish App Store, was downloaded
        6950 times and generated a revenue of $2.12K during its lifetime.
      </Card>
      <Card
        skills={["Objective-C", "Cocoa Framework", "XCode"]}
        title="iLGL"
        github="https://github.com/sbarthol/iLGL"
        app="https://www.facebook.com/ilglCompanionApp"
        image={ilglPng}
      >
        This is an iOS App that I programmed in Objective-C for my high school
        in Luxembourg. It supported various features like of list of absent
        teachers, a daily joke, the current weather fetched by a local Raspberry
        Pi antenna, a contest of who was able to hold a button for the longest
        time etc... It was downloaded 4510 times according to iTunes Connect.
      </Card>
    </div>
  );
}

export default App;
