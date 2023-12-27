import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Background, Todo, Logo, ColoredText, ToSpan, DoSpan, ModalButton, ListP, ListElem, DeleteButton, EditButton ,
  TotalP, CountHolder, FinishedP, TaskHolder, Container, ButtonsHolder, TasksUl, TaskUlElem, Input} from './styles/StyledComponents';
import CreateModal from './CreateModal'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'



const TodoList = () => {
  const queryClient = useQueryClient();
  const [id, setDeletionId] = useState("");
  const [edit_id, setEditId] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  

  const fetchTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
  };
  
  const { data: todos } = useQuery('todos', fetchTodos);
  
  useEffect(() => {
    const updatedFilteredTodos = (todos || []).filter(todo =>
      todo.title.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredTodos(updatedFilteredTodos);
  }, [todos, filterValue]);
  
  
  const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const totalAmount = filterValue ? filteredTodos.length : (todos || []).length;
  const completedAmount = filterValue 
    ? filteredTodos.filter(todo => todo.completed).length 
    : (todos || []).filter(todo => todo.completed).length;


    const handleCheckTodo = (id) => {
      const updatedTodos = (todos || []).map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      saveTodos(updatedTodos);
      queryClient.setQueryData('todos', updatedTodos);
    };

  
    const handleInputChange = (value) => {
      setFilterValue(value.trim());
    }



  return (
    <Todo>
    {isCreateModalOpen && <CreateModal onClose={closeCreateModal} todos={todos} queryClient={queryClient}/>}
    {isDeleteModalOpen && <DeleteModal onClose={closeDeleteModal} todos={todos} id={id} queryClient={queryClient}/>}
    {isEditModalOpen && <EditModal onClose={closeEditModal} todos={todos} id={edit_id} queryClient={queryClient}/>}
      <Background>
        <Logo>
          <img src="/rocket.svg"></img>
          <ColoredText>
            <ToSpan>to</ToSpan>
            <DoSpan>do</DoSpan>
          </ColoredText>
        </Logo>
      </Background>
      <ModalButton onClick={openCreateModal}>Add new task</ModalButton>
      <Input placeholder='Find task' onChange={(e) => {handleInputChange(e.target.value)}}></Input>
      <TaskHolder>
        <Container>
          <TotalP>Total: </TotalP>
          <CountHolder>{totalAmount}</CountHolder>
        </Container>
        <Container>
          <FinishedP>Completed:</FinishedP>
          <CountHolder>{completedAmount} from {totalAmount}</CountHolder>
        </Container>
      </TaskHolder>
      <TasksUl>
        {todos &&
          filteredTodos.map((todo) => (
            <TaskUlElem key={todo.id}>
              <ListElem>
              <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckTodo(todo.id, todo.completed)}
                />
                <ListP>{todo.title}</ListP>{' '}
                <ButtonsHolder>
                <DeleteButton onClick={() => {
                  setDeletionId(todo.id)
                  openDeleteModal();
                }}></DeleteButton>
                <EditButton onClick={() => {
                  setEditId(todo.id)
                  openEditModal();
                }}></EditButton>
                </ButtonsHolder>
              </ListElem>
            </TaskUlElem>
          ))}
      </TasksUl>
    </Todo>
  );
};

export default TodoList;
