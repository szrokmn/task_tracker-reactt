import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTask)
    const newTask = {task , date}
    addNewTask(newTask)
    setTask("")
    setDate("")
  }

const addNewTask = async(newTask) => {
  const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";
  try {
    await axios.post(url, newTask)
  } catch (error) {
    
  }
}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" onChange={(e)=> setTask(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e)=> setDate(e.target.value)}/>
        </Form.Group>
        
        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
