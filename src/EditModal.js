import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {ModalOverlay, ModalContent, Input, ModalButton, ModalP} from './styles/StyledComponents'

const EditModal = ({ onClose, todos, id, queryClient}) => {

    const [newTodo, setEditTodo] = useState('');

    const editTodoMutation = useMutation(
        (newTodo) => {
            todos.map((todo) => {
                if (todo.id === id) todo.title = newTodo;
            })
          const updatedTodos = [...todos];
          saveTodos(updatedTodos);
          return updatedTodos;
        },
        {
          onSuccess: (data) => {
            queryClient.setQueryData('todos', data);
          },
        }
      );

    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
      };

    const handleEditTodo = () => {
        if (newTodo.trim() !== '') {
          editTodoMutation.mutate(newTodo);
          setEditTodo('');
          onClose();
        }
      };

    return (
      <ModalOverlay>
        <ModalContent>
          <ModalP>Edit task</ModalP>
          <Input onChange={(e) => setEditTodo(e.target.value)}></Input>
          <ModalButton onClick={() => handleEditTodo(id)}>Add task</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ModalContent>
      </ModalOverlay>
    );
  };

export default EditModal;