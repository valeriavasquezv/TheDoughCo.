# Costeo Pastelería

Aplicación web para gestionar ingredientes, recetas, costos, mano de obra, productos y rentabilidad de un negocio de pastelería.

## Características

- React + TypeScript + Vite
- Responsive para computador y celular
- Persistencia automática con `localStorage`
- IVA configurable, inicialmente 19% para Chile
- Distinción entre valores netos y valores con IVA
- Base de ingredientes con historial de cambios de precio
- Recetas con selección de ingredientes y actualización automática de costos
- Costos variables y fijos
- Mano de obra por hora
- Costeo integral de productos
- Margen y food cost
- Punto de equilibrio
- Alertas de margen
- Datos de ejemplo
- Código de cálculos centralizado en `src/utils.ts`

## Requisitos

Node.js 20 o superior recomendado.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre la dirección que indique Vite, normalmente:

```text
http://localhost:5173
```

Para probar la versión de producción:

```bash
npm run build
npm run preview
```

## GitHub

1. Crea un repositorio nuevo en GitHub.
2. Descomprime este proyecto.
3. En la carpeta del proyecto ejecuta:

```bash
git init
git add .
git commit -m "Primera versión de Costeo Pastelería"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

No es necesario subir `node_modules`; el repositorio debe contener el código fuente y `package.json`.

## Despliegue

### Vercel

1. Importa el repositorio desde GitHub.
2. Framework: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

### Netlify

1. Importa el repositorio desde GitHub.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

## Persistencia

La primera versión guarda los datos en el navegador mediante `localStorage`.

Esto significa que los datos permanecen al cerrar el navegador, pero están asociados al navegador/dispositivo donde fueron ingresados.

La capa de almacenamiento está aislada en:

`src/storage.ts`

Para una futura base de datos se puede reemplazar esa implementación por Supabase, PostgreSQL u otro backend sin modificar la lógica principal de costeo.

## Modelo de datos

- `Ingredient`
- `Recipe`
- `OtherCost`
- `Labor`
- `Product`
- `AppSettings`
- `AppData`

## IVA y rentabilidad

El IVA se configura globalmente en `AppSettings`. Los cálculos internos de rentabilidad y punto de equilibrio usan preferentemente valores netos.

La aplicación muestra:

- Neto
- IVA
- Total

El IVA débito/crédito y cualquier IVA a pagar deben considerarse estimaciones de gestión interna y no reemplazan una declaración tributaria.

## Nota sobre costos fijos

En esta primera versión, el costo fijo mensual se distribuye de forma uniforme entre los productos activos para obtener un costo fijo asignado por producto. Para una segunda versión conviene incorporar métodos de asignación más precisos (por horas de producción, unidades, ventas, etc.).

## Estructura

```text
pasteleria-costos/
├── src/
│   ├── main.tsx
│   ├── styles.css
│   ├── types.ts
│   ├── utils.ts
│   ├── storage.ts
│   └── sampleData.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
