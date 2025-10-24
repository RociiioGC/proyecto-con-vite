# React + Vite

# ⚛️ React + Vite  

## 🧩 Clase 05 – Listas, Props y Componentes Dinámicos  

### 🎯 Objetivo  
Aprender a:  
- Pasar datos entre componentes mediante **props**.  
- Renderizar listas con **.map()**.  
- Organizar componentes (**App**, **List**, **Card**, etc.) para mostrar información dinámica.  
- Manejar estado y funciones con **Hooks**.  

---

### 🧠 Conceptos clave  
- **Props:** Permiten pasar información desde un componente padre a uno hijo.  
- **Desestructuración:** Facilita el acceso a las props (`const { name } = user`).  
- **Renderizado dinámico:** Con `.map()` se recorren arrays para generar componentes repetidos.  
- **Keys únicas:** Siempre agregar `key={}` al iterar listas.  
- **Hooks en React:** Permiten agregar estado y lógica a componentes funcionales.  
- **Reglas de los Hooks:** Solo se llaman en el nivel superior de un componente o desde otros hooks.  
- **useState:** Para crear y actualizar valores en el estado.  
- **Inmutabilidad:** Nunca modificar el estado directamente, siempre crear una copia.  
- **Estado vs Props:** Props vienen de un componente padre; el estado se maneja internamente.  
- **Pasando funciones como props:** Permite que un componente hijo comunique cambios al padre.  
- **Atributos de eventos:** Ejemplo `onClick`, `onChange`, `onSubmit`.  

---
### 🧱 Componentes implementados  
- **App.jsx:** Componente principal que renderiza `List` y maneja los usuarios.  
- **List.jsx:** Renderiza una lista de usuarios con botón para filtrar usuarios activos (usando `useState`).  
- **Card.jsx:** Muestra la información de cada usuario y permite cambiar su estado activo/inactivo con un checkbox.  

---

✨ **Creado por:** Rocio García Cabrera  
📚 **Módulo 4 – React / Clase 05 (ADA Frontend)**  