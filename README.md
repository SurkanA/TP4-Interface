# TP4-Interface

Hecho con Vite, Angular 22, Tailwind CSS y Typescript. El formulario esta hecho con la API de Angular usando Reactive-Forms.
Incluye Test Unitarios que checkean que el formulario siempre funcione correctamente (leer codigo) y una API usando [MockAPI](https://6a31b5207bc5e1c612661991.mockapi.io/api/forms).

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** [Angular](https://angular.dev/)
- **Gestor de Paquetes:** [PNPM](https://pnpm.io/)
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **API:** [MockAPI](https://mockapi.io/)

---

### 📋 Detalle de los Endpoints

#### 1. Obtener todos los registros

- **Método:** `GET`
- **URL:** `https://6a31b5207bc5e1c612661991.mockapi.io/api/forms`
- **Descripción:** Recupera la lista completa de formularios enviados.

#### 2. Obtener un registro por ID

- **Método:** `GET`
- **URL:** `https://6a31b5207bc5e1c612661991.mockapi.io/api/forms/{id}`
- **Descripción:** Recupera los detalles de un formulario específico utilizando su identificador único.

#### 3. Enviar un nuevo formulario

- **Método:** `POST`
- **URL:** `https://6a31b5207bc5e1c612661991.mockapi.io/api/forms`
- **Headers Requeridos:** `Content-Type: application/json`
- **Descripción:** Guarda los datos de un nuevo formulario en el servidor.

---

### 📝 Estructura del Payload (Request Body)

```json
{
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "telephone": "2494583904",
  "topic": "general",
  "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}
```
