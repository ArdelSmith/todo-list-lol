import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {ModalOverlay, ModalContent, Input, ModalButton, ModalP} from './styles/StyledComponents'

const DeleteModal = ({ onClose, todos, id, queryClient}) => {

    const [newTodo, setNewTodo] = useState('');


    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
      };

      const handleDeleteTodo = (id) => {
        deleteTodoMutation.mutate(id);
        onClose();
      };

      const deleteTodoMutation = useMutation(
        (id) => {
          const updatedTodos = todos.filter((todo) => todo.id !== id);
          saveTodos(updatedTodos);
          return updatedTodos;
        },
        {
          onSuccess: (data) => {
            queryClient.setQueryData('todos', data);
          },
        }
      );

    return (
      <ModalOverlay>
        <ModalContent>
          <ModalP>Are you sure that you want to delete this task?</ModalP>
          <ModalButton onClick={() => handleDeleteTodo(id)}>Delete</ModalButton>
          <ModalButton onClick={onClose}>Cancel</ModalButton>
        </ModalContent>
      </ModalOverlay>
    );
  };

export default DeleteModal;