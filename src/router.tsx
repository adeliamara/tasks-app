import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { HomePage } from './pages/HomePage'
import { TaskDetailsPage } from './pages/TaskDetailsPage'
import { LoginPage } from './pages/LoginPage'
import { TaskFormPage } from './pages/TasKFormPage'


export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="tasks">
      <Route index element={<TasksPage />} />
      <Route path=":id" element={<TaskDetailsPage />} />
    </Route>
    <Route path="login" element={<LoginPage />} />
    <Route path="createTask" element={<TaskFormPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
