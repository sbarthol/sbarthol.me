import Card from "./components/Card.js";
import Header from "./components/Header";

import gamebojGif from "./resources/gameboj.gif";
import scooglePng from "./resources/scoogle.png";
import tictactoeGif from "./resources/tictactoe.gif";

function App() {
  return (
    <div class="bg-indigo-50 h-full">
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
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
      <Card
        skills={["C", "Concurrency"]}
        title="threadlib"
        text="This is a thread library written from scratch in C built on top of my kernel."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
      <Card
        skills={["React", "Javascript"]}
        title="tictactoe"
        app="https://tictactoe.sbarthol.me"
        github="https://github.com/sbarthol/tictactoe"
        text="Tictactoe is an invincible tictactoe game written in React and using the minimax algorithm."
        image={tictactoeGif}
      />
      <Card
        skills={["React", "tailwindCSS"]}
        title="sbarthol.me"
        github="https://github.com/sbarthol/sbarthol.me"
        text="This website."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
    </div>
  );
}

export default App;
