# 📋 TaskApp - Frontend

Aplicación web desarrollada con **Angular 14** que permite gestionar tareas (CRUD) consumiendo una API REST construida con **.NET Core 8**. Esta interfaz permite a los usuarios agregar, marcar como completadas y eliminar tareas en tiempo real.

![Angular](https://img.shields.io/badge/Angular-14-red?logo=angular)
![.NET Core](https://img.shields.io/badge/.NET_Core-8-blue?logo=dotnet)
![Bootstrap](https://img.shields.io/badge/CSS-SCSS-9cf)

---

## ✨ Características

- ✅ Listado de tareas con estado de completitud.
- ✅ Campo de texto y botón para agregar nuevas tareas.
- ✅ Botón para marcar tareas como completadas.
- ✅ Botón para eliminar tareas.
- ✅ Interfaz limpia y responsiva.
- ✅ Consumo de API REST (GET, POST, PUT, DELETE).
- ✅ Persistencia en backend con SQLite (vía .NET API).

---

## 🚀 Tecnologías utilizadas

- **Frontend**: Angular 14
- **Framework de pruebas**: [Karma](https://karma-runner.github.io) + Jasmine
- **Backend (API)**: .NET Core 8 Web API
- **Base de datos**: SQLite (en memoria / archivo `tasks.db`)
- **Control de versiones**: Git

---

## 🛠️ Instalación y uso
```bash
npm install
ng serve 
```
### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/task-app.git
cd task-app
```