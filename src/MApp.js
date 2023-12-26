import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Background, Todo, Logo, ColoredText, ToSpan, DoSpan, ModalButton, ListP, ListElem, DeleteButton, EditButton ,
  TotalP, 
  CountHolder, FinishedP} from './styles/StyledComponents';
import CreateModal from './CreateModal'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

const fetchTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  return todos;
};

const getCompletedAmount = () => {
  var amount = 0;
  var tds = fetchTodos();
  tds.map((todo) => {
    if (todo.completed === true) amount += 1;
  })
  return amount;
}

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const TodoList = () => {
  const queryClient = useQueryClient();
  const [id, setDeletionId] = useState("");
  const [edit_id, setEditId] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const { data: todos } = useQuery('todos', fetchTodos);

  


  const handleCheckTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    saveTodos(updatedTodos);
    queryClient.setQueryData('todos', updatedTodos);
  };



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
      <div style={{flexDirection: "row", display: "flex", width: "70%", justifyContent: "space-between"}}>
        <div style={{flexDirection: "row", display: "flex", alignItems: "center", gap: "8px"}}>
          <TotalP>Total: </TotalP>
          <CountHolder>{fetchTodos().length}</CountHolder>
        </div>
        <div style={{flexDirection: "row", display: "flex", alignItems: "center", gap: "8px"}}>
          <FinishedP>Completed:</FinishedP>
          <CountHolder>{getCompletedAmount()} from {fetchTodos().length}</CountHolder>
        </div>
      </div>
      <ul style={{ flexDirection: "column", display: "flex" , padding: "0px", gap: "8px", width: "70%"}}>
        {todos &&
          todos.map((todo) => (
            <ul key={todo.id} style={{ padding: "0px"}}>
              <ListElem>
              <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckTodo(todo.id, todo.completed)}
                />
                <ListP>{todo.title}</ListP>{' '}
                <DeleteButton onClick={() => {
                  setDeletionId(todo.id)
                  openDeleteModal();
                }}></DeleteButton>
                <EditButton onClick={() => {
                  setEditId(todo.id)
                  openEditModal();
                }}></EditButton>
              </ListElem>
            </ul>
          ))}
      </ul>
    </Todo>
  );
};

export default TodoList;
