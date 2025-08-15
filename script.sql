-- script.sql
-- Script para crear la base de datos y tabla de tareas

-- Crear base de datos
CREATE DATABASE TaskManagerDb;
GO

USE TaskManagerDb;
GO

-- Crear tabla Tasks
CREATE TABLE Tasks (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(255) NOT NULL,
    IsCompleted BIT NOT NULL DEFAULT 0
);
GO

-- Insertar tareas de ejemplo
INSERT INTO Tasks (Title, IsCompleted) VALUES
('Aprender Angular', 0),
('Crear API con .NET Core', 1),
('Hacer commit en Git', 0);
GO