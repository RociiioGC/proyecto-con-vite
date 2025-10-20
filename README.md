# React + Vite

 # ⚛️ Clase 04 – Renderizado condicional y props booleanas

Proyecto del **Módulo 4 de React (ADA)** para practicar el **renderizado condicional**, el uso de **props booleanas** y la composición de componentes simples.

---

## 🧩 Conceptos aplicados
- `if / else` → Mostrar u ocultar contenido (`LoginStatus`)
- `return null` → Evitar renderizado (`Notificaciones`)
- `? :` (ternario) → Alternar entre dos mensajes (`EstadoCarga`)
- `&&` → Renderizar solo si una condición es verdadera (`Mensajes`)
- Props booleanas y numéricas para controlar estados visuales

---

## 🧠 Componentes creados

| Componente | Descripción | Lógica usada |
|-------------|--------------|---------------|
| **LoginStatus** | Muestra “Bienvenid@” o “Inicia sesión” | `if / else` |
| **Notificaciones** | Muestra cantidad o nada si es 0 | `return null` |
| **EstadoCarga** | “Cargando…” / “Datos listos ✅” | Operador ternario |
| **Mensajes** | “Tienes nuevos mensajes” si hayMensajes = true | `&&` |

---
✨ Creado por: Rocio García Cabrera
📚 Módulo 4 – React / Clase 04 (ADA Frontend)