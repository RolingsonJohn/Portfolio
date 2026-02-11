## Portfolio de John Rolingson

Este repositorio contiene el código de mi portfolio personal, construido con **Astro** y **Tailwind CSS**, y desplegado en GitHub Pages.

La web está disponible en **español** e **inglés**, con selector de idioma en la barra de navegación.

---

### ✨ Características principales

- **Astro + Tailwind CSS**: sitio estático rápido y moderno.
- **Diseño responsive**: adaptado para móvil, tablet y escritorio.
- **Internacionalización (i18n)**:
  - Español y inglés.
  - Textos centralizados en ficheros JSON en `src/i18n/es` y `src/i18n/en`.
- **Secciones**:
  - Perfil / Hero.
  - Proyectos destacados.
  - Experiencia profesional.
  - Formación académica.
  - Sobre mí.

---

### 🧱 Estructura del proyecto

Las carpetas más relevantes son:

```text
src/
  components/    # Componentes Astro reutilizables (Header, Footer, Profile, etc.)
  layouts/       # Layout principal de la página
  pages/
    index.astro  # Versión en español
    en/
      index.astro  # Versión en inglés
  i18n/
    es/          # Textos en español
    en/          # Textos en inglés
  styles/        # Estilos globales (Tailwind + CSS adicional)
```

---

### 🌐 Internacionalización

La lógica de idiomas se basa en:

- **Rutas**:
  - `/Portfolio/` → versión en **español**.
  - `/Portfolio/en/` → versión en **inglés**.
- **Selector de idioma**:
  - En el `Header` hay un desplegable con las banderas de España 🇪🇸 y Reino Unido 🇬🇧.
  - Cambiar de bandera navega a la ruta correspondiente (`/Portfolio/` o `/Portfolio/en/`).
- **Textos**:
  - Todo el contenido textual se lee desde JSON:
    - `src/i18n/es/*.json`
    - `src/i18n/en/*.json`

Para añadir un nuevo idioma, puedes copiar la carpeta `es` dentro de `i18n`, renombrarla (por ejemplo `fr`) y traducir los valores manteniendo las mismas claves.

---

### 🔧 Scripts disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando         | Descripción                                               |
| --------------- | --------------------------------------------------------- |
| `npm install`   | Instala las dependencias                                  |
| `npm run dev`   | Arranca el servidor de desarrollo (por defecto en 4321)  |
| `npm run build` | Genera la versión de producción en la carpeta `dist/`    |
| `npm run preview` | Previsualiza localmente la build de producción         |

---

### 🚀 Despliegue

El proyecto está configurado para desplegarse en **GitHub Pages**:

- `site`: `https://RolingsonJohn.github.io`
- `base`: `Portfolio`

Esto significa que la web se sirve desde:  
`https://RolingsonJohn.github.io/Portfolio/`

---

### 🙏 Créditos

- Basado en el tutorial de portfolio de [`midudev`](https://github.com/midudev/porfolio.dev).
- Construido con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/).

