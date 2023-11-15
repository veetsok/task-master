export interface ModalAddTodoProps {
  handleAddTodo?: () => void;
  changeNewTodoTitle?: string;
  setChangeNewTodoTitle?: (value: string) => void;
  changeNewTodoDescription?: string;
  setChangeNewTodoDescription?: (value: string) => void;
  onClose?: () => void;
  selectedDate?: Date | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedDate?: (date: any) => void;
  workHours?: number;
  setWorkHours?: (hours: number) => void;
  selectedPriority?: string;
  setSelectedPriority?: (priority: string) => void;
}
