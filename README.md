# Soporte Carranza — Landing Page

Landing page responsive en React + Vite, organizada en componentes independientes.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en desarrollo
```bash
npm install
npm run dev
```

## Compilar para publicar
```bash
npm run build
```
Vite generará la carpeta `dist`.

## Estructura
- `src/components/Header.jsx` — navegación responsive
- `src/components/Hero.jsx` — portada principal
- `src/components/TrustStrip.jsx` — categorías destacadas
- `src/components/Services.jsx` — catálogo de servicios
- `src/components/About.jsx` — presentación y valores
- `src/components/Process.jsx` — proceso de atención
- `src/components/Contact.jsx` — formulario de contacto
- `src/components/Footer.jsx` — pie de página
- `src/styles.css` — diseño responsive y estilos globales

## Personalización importante
- El formulario abre la aplicación de correo con `ayuda@soportecarranza.com.mx`; no almacena datos en un servidor.
- El enlace de WhatsApp usa `https://wa.me/?text=...`. Para vincular un número de negocio, reemplaza `https://wa.me/` por `https://wa.me/52TU_NUMERO` (sin espacios ni símbolos).
- Ajusta la ubicación y los datos de contacto en `Contact.jsx` y `Footer.jsx` si es necesario.


## Configurar WhatsApp
En `src/components/Contact.jsx`, busca la constante:
```js
const WHATSAPP_NUMBER = '52TU_NUMERO';
```
Reemplaza `52TU_NUMERO` por el número real del negocio con código de país, sin `+`, espacios ni guiones. Por ejemplo, para México el formato empieza por `52` seguido del número. Configura también el enlace de WhatsApp flotante en `src/App.jsx` con ese mismo número.
El formulario ya no solicita correo ni teléfono: prepara el mensaje y abre WhatsApp para que el cliente lo revise y lo envíe.
