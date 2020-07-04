type Todo = {
  id: string;
  name: string;
  description: string;
  priority: number;
  complete: boolean;
};

type TodoList = Array<Todo>;
