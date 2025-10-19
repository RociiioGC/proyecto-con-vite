# Proyecto React con Vite ⚡️

Este proyecto fue creado como parte de las prácticas del **Módulo 4 (React)** en **ADA**.

---

## 💻 Ejercicios incluidos

### 🧠 Clase 03 — Componentes y Props

**Objetivos**
- Componentes funcionales (funciones que devuelven JSX)
- Pasar información con `props`
- Desestructuración y valores por defecto
- Uso de `children` para composición
- Componer componentes en un caso práctico: `LoginForm`

**Componentes creados**
- `Input.jsx` — props: `type`, `placeholder`
- `Button.jsx` — props: `label`, `disabled`, `variant` (`primary`, `secondary`, `danger`)
- `Card.jsx` — usa `children` para envolver contenido
- `LoginForm.jsx` — combina `Card`, `Input` y `Button`

**Ejemplo de uso**
```jsx
import LoginForm from "./components/LoginForm.jsx";

export default function App() {
  return <LoginForm />;
}

--- 

✨ Creado por: Rocio Garcia Cabrera
📚 Práctica del Módulo React — ADA Frontend