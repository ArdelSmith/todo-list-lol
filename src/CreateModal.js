import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {ModalOverlay, ModalContent, Input, ModalButton, ModalP} from './styles/StyledComponents'

const CreateModal = ({ onClose, todos, queryClient}) => {

    const [newTodo, setNewTodo] = useState('');

    const addTodoMutation = useMutation(
        (newTodo) => {
          const updatedTodos = [...todos, { id: Date.now(), title: newTodo, completed: false }];
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

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
          addTodoMutation.mutate(newTodo);
          setNewTodo('');
          onClose();
        }
      };

    return (
      <ModalOverlay>
        <ModalContent>
          <ModalP>Create new task</ModalP>
          <Input onChange={(e) => setNewTodo(e.target.value)}></Input>
          <ModalButton onClick={handleAddTodo}>Add task</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ModalContent>
      </ModalOverlay>
    );
  };

export default CreateModal;