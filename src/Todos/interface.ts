export interface I_Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface I_PropsList {
  todos: I_Todo[];
  handleDelete: (id: number) => void;
  handleToggleChecked: (id: number) => void;
}

export interface I_PropsForm {
  handleCreate: (data: I_Todo) => void;
}
