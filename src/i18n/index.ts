/**
 * Idioma actual del sitio.
 * Para traducir: copia la carpeta `es/` a `en/` (o otro código de idioma),
 * traduce los valores en los JSON y luego cambia los imports en los componentes
 * de `../i18n/es/` a `../i18n/en/` (o usa rutas dinámicas por idioma).
 */
export const currentLocale = "es" as const;
export type Locale = "es";
