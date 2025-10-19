function TaskList() {
  const tasks = ["Finish React homework", "Go to the gym", "Prepare healthy lunch", "Watch a design tutorial"];
  
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;


/*  const tasks = ["Finish React homework", "Go to the gym", "Prepare lunch", "Watch a design tutorial"];

  export const TaskList = () => {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  };*/
  