import { Button } from "react-bootstrap";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  return (
    <div>
      <Button variant="primary">abc</Button>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
