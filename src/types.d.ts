type Todo = {
  id: number;
  name: string;
  description: string;
  priority: number;
  complete: boolean;
};

type TodoList = Array<Todo>;

type ContextProps = {
  todoListDB: TodoList;
  setTodoListDB: (todoList: TodoList) => void;
};

type RestContextProps = {
  openModal: () => void;
  closeModal: () => void;
  modalVisible: boolean;
  setModalVisible: (modal: boolean) => void;
  newTodo: Todo;
  setNewTodo: (newTodo: Todo) => void;
};
