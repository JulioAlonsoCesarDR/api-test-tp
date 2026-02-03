# REST API - Test TotalPlay

Una API REST simple para gestionar direcciones, construida con TypeScript, Express y Sequelize.

## Descripción

Esta API permite realizar operaciones CRUD básicas sobre direcciones. Incluye validaciones de entrada y está diseñada para pruebas y desarrollo.

## Tecnologías Utilizadas

- **Node.js** con **TypeScript**
- **Express.js** para el servidor web
- **Sequelize** como ORM para PostgreSQL
- **express-validator** para validaciones de entrada
- **nodemon** para desarrollo
- **colors** para logs coloreados

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd rest_api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=4000
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_db
   ```

4. Asegúrate de tener PostgreSQL corriendo y crea la base de datos correspondiente.

## Uso

Para ejecutar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor se iniciará en el puerto 4000 (o el especificado en la variable de entorno PORT).

## Endpoints de la API

### Obtener todas las direcciones
- **GET** `/`
- Respuesta: Lista de direcciones en formato JSON

### Crear una nueva dirección
- **POST** `/`
- Cuerpo de la solicitud (JSON):
  ```json
  {
    "ip": "192.168.1.1",
    "city": "Ciudad Ejemplo",
    "region": "Región Ejemplo",
    "country_name": "País Ejemplo",
    "postal": "12345",
    "country_code": "PE",
    "latitude": -12.0464,
    "longitude": -77.0428
  }
  ```
- Validaciones requeridas: Todos los campos son obligatorios
- Respuesta: La dirección creada en formato JSON

### Eliminar una dirección
- **DELETE** `/:id`
- Parámetro: `id` (entero)
- Respuesta: Confirmación de eliminación

## Estructura del Proyecto

```
rest_api/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── handlers/
│   │   └── address.ts
│   ├── middleware/
│   │   └── index.ts
│   ├── models/
│   │   └── Address.model.ts
│   ├── types/
│   │   └── types.ts
│   ├── index.ts
│   ├── router.ts
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Scripts Disponibles

- `npm run dev`: Ejecuta el servidor en modo desarrollo con nodemon
- `npm test`: Ejecuta las pruebas (actualmente no implementadas)
