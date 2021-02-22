import Card from "./components/Card.js";

function App() {
  return (
    <div class="bg-indigo-50 font-mono tracking-tighter h-full">
      <div class="sticky top-0 shadow-lg w-full flex items-center h-auto bg-indigo-500">
        <div class="p-6 text-4xl font-medium text-white">
          Sacha Bartholme's open source portfolio
        </div>
      </div>
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
