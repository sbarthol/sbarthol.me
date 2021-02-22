import Card from "./components/Card.js";
import Header from "./components/Header";

function App() {
  return (
    <div class="bg-indigo-50 h-full">
      <Header />
      <Card
        skills={["C++", "VSCode"]}
        title="Finding customers for your new business"
        text="Getting a new business off the ground is a lot of hard work. Here
        are five ideas you can use to find your first customers."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
      <Card
        skills={["C++", "VSCode"]}
        title="Finding customers for your new business"
        text="Getting a new business off the ground is a lot of hard work. Here
        are five ideas you can use to find your first customers."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
      <Card
        skills={["C++", "VSCode"]}
        title="Finding customers for your new business"
        text="Getting a new business off the ground is a lot of hard work. Here
        are five ideas you can use to find your first customers."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
      <Card
        skills={["C++", "VSCode"]}
        title="Finding customers for your new business"
        text="rst customers."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
      <Card
        skills={["C++", "Java", "Concurrency", "Assembly"]}
        title="Finding customers for your new business"
        text="Getting a new business off the ground is a lot of hard work. Here
        are five ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here
        are five ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here
        are five ideas you can use to find your first customers."
        image="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      />
    </div>
  );
}

export default App;
