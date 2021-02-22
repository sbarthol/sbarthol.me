import Card from "./components/Card.js";
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

function App() {
  return (
    <div>
      <Header />
      <Card
        github="https://github.com/sbarthol/gameboj"
        skills={["Java", "Assembly"]}
        title="gameboj"
        text="Gameboj is a complete Nintendo Game Boy of 1989 emulator written 
        from scratch in Java. Any game cartridge can be downloaded as a .gb file 
        and played on the emulator."
        image={gamebojGif}
      />
      <Card
        skills={["Scala", "Akka", "React"]}
        github="https://github.com/sbarthol/scoogle"
        app="https://scoogle.sbarthol.me"
        title="scoogle"
        text="Scoogle is a Search Engine written from scratch in Scala and using Akka Actors. 
        Its components are a web crawler, a HBase data store, a server serving a 
        backend API and a frontend written in React."
        image={scooglePng}
      />
      <Card
        skills={["C", "x86 Assembly", "Concurrency"]}
        title="kernel"
        text="This is the kernel from Carnegie Mellon University 15410 class. 
        With a partner, we implemented scheduler, virtual memory, hardware interrupts 
        (keyboard, timer), a console driver and more than 20 system calls."
        image={kernelPng}
      />
      <Card
        skills={["C", "Concurrency"]}
        title="threadlib"
        text="This is a thread library written from scratch in C built on top of my kernel."
        image={threadlibPng}
      />
      <Card
        skills={["React", "Javascript"]}
        title="tictactoe"
        app="https://tictactoe.sbarthol.me"
        github="https://github.com/sbarthol/tictactoe"
        text="Tictactoe is an invincible tictactoe game written in 
        React and using the minimax algorithm."
        image={tictactoeGif}
      />
      <Card
        skills={["React", "tailwindCSS"]}
        title="sbarthol.me"
        github="https://github.com/sbarthol/sbarthol.me"
        text="This website, that I decided to build after a 8.5 x 11 resume page wasn't 
        enough anymore to store all my open source projects."
        image={sbartholMePng}
      />
      <Card
        skills={["C++", "algorithms"]}
        title="doodle jump"
        github="https://github.com/sbarthol/doodle-jump"
        app="https://portal.education.lu/Portals/21/LIO/2018/Questionnaire%20Finale.pdf"
        text="A competitive programming problem that I successfully submitted for the Luxembourgish 
        Olympiad in Informatics (2018 edition). I had won the 2017 edition the year before. 
        It is a hard dynamic programming problem in which a jumper must hop from platform to platform
        using the least number of jetpacks. None of the contestants were able to solve the problem
        entirely that year."
        image={doodleJumpJpg}
      />
      <Card
        skills={["Objective-C", "Swift", "Cocoa", "XCode"]}
        title="notten"
        github="https://github.com/sbarthol/notten"
        text="Notten is an iOS App written in Objective-C and Swift. 
        Students enter their grades and receive all sorts of statistics,
        data, charts, graphs etc... 
        It ranked number 1 in the Luxembourgish App Store and 
        was downloaded 6950 times during its lifetime."
        image={nottenJpg}
      />
      <Card
        skills={["C++", "CMake"]}
        title="bittorrent"
        github="https://github.com/sbarthol/bittorrent"
        text="This is a small torrenting client written from scratch in C++.
        It downloads a bencoded torrent file from a tracker, decodes the torrent bencode,
        and downloads a file from a list of peers given by the tracker using the bittorrent
        protocol (application layer protocol on top of TCP)."
        image={bittorrentPng}
      />
    </div>
  );
}

export default App;
