# 🏍️ MotoRepuestosYa — motorepuestosya.com

Página web estática lista para GitHub Pages. Hecha con HTML, CSS y JavaScript puro, sin frameworks ni dependencias.

---

## 📁 Estructura de carpetas

```
motorepuestosya/
│
├── index.html              ← Página principal (no necesitas tocarla casi nunca)
│
├── src/
│   ├── styles.css          ← Estilos visuales del sitio
│   └── app.js              ← Lógica del sitio (no tocar normalmente)
│
├── data/
│   ├── productos.js        ← ⭐ AQUÍ MANEJAS PRODUCTOS Y PROMOCIONES
│   └── images/             ← Aquí van las fotos de los productos
│       └── (tus imágenes)
│
└── README.md               ← Este archivo
```

---

## 🚀 Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (ej: `motorepuestosya`)
2. Sube todos estos archivos al repositorio
3. Ve a **Settings → Pages**
4. En "Branch" selecciona `main` y carpeta `/root`
5. Guarda y espera 1-2 minutos
6. Tu sitio estará en: `https://tu-usuario.github.io/motorepuestosya/`

### Con dominio personalizado (motorepuestosya.com):
1. En Settings → Pages → Custom domain, escribe `motorepuestosya.com`
2. En tu registrador de dominio, crea estos registros DNS:

   | Tipo  | Nombre | Valor              |
   |-------|--------|--------------------|
   | A     | @      | 185.199.108.153     |
   | A     | @      | 185.199.109.153     |
   | A     | @      | 185.199.110.153     |
   | A     | @      | 185.199.111.153     |
   | CNAME | www    | tu-usuario.github.io |

3. Marca "Enforce HTTPS" en la configuración de Pages

---

## ➕ Cómo agregar un producto

Abre `data/productos.js` y agrega un bloque al array `PRODUCTOS`:

```javascript
{
  id: "prod_011",                          // ID único, no lo repitas
  nombre: "Nombre del repuesto",
  descripcion: "Descripción del producto.", // Sé detallado, ayuda al SEO
  precio: "35.000",                        // Solo números y punto (sin $ ni COP)
  categoria: "Motor",                      // Ver categorías abajo
  marca: "Nombre de marca",
  compatibilidad: "Honda CB125, AKT 125",  // Motos compatibles
  stock: true,                             // true = en stock | false = agotado
  destacado: false,                        // true = aparece con estrella
  imagenes: [
    "data/images/mi-foto.jpg"              // Nombre del archivo en data/images/
  ]
},
```

### Categorías disponibles:
- `"Motor"` `"Frenos"` `"Transmisión"` `"Eléctrico"`
- `"Filtros"` `"Lubricantes"` `"Carrocería"` `"Otros"`

Para agregar una categoría nueva, también agrégala en `src/app.js` en el objeto `ICONOS_CATEGORIA` con su emoji.

---

## ➖ Cómo quitar un producto

Borra el bloque completo del producto en `data/productos.js`, desde la `{` hasta la `,` que lo cierra.

---

## 🖼️ Imágenes de productos

1. Pon el archivo en `data/images/`
2. Formatos recomendados: `.jpg` o `.webp`
3. Tamaño ideal: **800×600px** o similar proporción 4:3
4. Peso recomendado: menos de 150KB por imagen
5. Nómbralos descriptivo: `bujia-ngk-cr7hsa.jpg` no `IMG_3847.jpg`

> Si un producto no tiene imagen, el sitio muestra automáticamente el emoji de su categoría.

---

## 🔥 Cómo manejar las promociones

En `data/productos.js`, busca el array `PROMOCIONES`:

```javascript
{
  id: "promo_001",
  titulo: "¡Semana de las Bujías!",
  descripcion: "Del 21 al 25 de abril, descuento en todas las bujías NGK.",
  fechas: "21 al 25 de Abril",
  emoji: "⚡",
  activa: true        // ← true para mostrar, false para ocultar
},
```

- **Activar**: cambia `activa: false` → `activa: true`
- **Desactivar**: cambia `activa: true` → `activa: false`
- Si no hay ninguna promo activa, la sección desaparece sola

---

## 📞 Cambiar número de WhatsApp o datos de contacto

En `data/productos.js`, busca el objeto `CONTACTO`:

```javascript
const CONTACTO = {
  whatsapp: "573202274732",    // Con código de país, sin + ni espacios
  whatsappMensaje: "...",      // Mensaje predeterminado al abrir WhatsApp
  ciudad: "Colombia",
  horario: "Lun – Sáb: 8am – 6pm",
  email: "info@motorepuestosya.com"
};
```

---

## 🎨 Cambiar colores

En `src/styles.css`, al inicio del archivo, edita las variables:

```css
:root {
  --orange: #FF5C00;    /* Color principal naranja */
  --black:  #0A0A0A;    /* Fondo negro */
  --light:  #F5F5F0;    /* Fondo claro */
  /* ... */
}
```

---

## 🔍 SEO — Para aparecer en Google

El sitio ya tiene lo fundamental:
- Meta tags de título y descripción ✅
- Schema.org (datos estructurados para Google) ✅
- Open Graph (preview en WhatsApp/redes) ✅
- Imágenes con `alt` descriptivo ✅
- Scroll suave y rendimiento optimizado ✅

Para mejorar aún más:
1. **Google Search Console**: regístralo en [search.google.com/search-console](https://search.google.com/search-console) y verifica tu dominio. Envía el sitemap.
2. **Google Business Profile**: crea tu ficha en [business.google.com](https://business.google.com) con la misma información.
3. **Descripciones ricas**: en `productos.js`, escribe descripciones detalladas con palabras clave naturales (marca + modelo + uso).
4. **Imágenes con nombre descriptivo**: `bujia-ngk-125cc.jpg` > `imagen1.jpg`

---

## ⚡ Tips rápidos

| Acción | Dónde |
|--------|-------|
| Agregar producto | `data/productos.js` → array `PRODUCTOS` |
| Activar oferta | `data/productos.js` → array `PROMOCIONES` → `activa: true` |
| Subir imagen | Carpeta `data/images/` |
| Cambiar WhatsApp | `data/productos.js` → objeto `CONTACTO` |
| Cambiar colores | `src/styles.css` → variables `:root` |
| Ver cambios local | Abre `index.html` en tu navegador |

---

Hecho con 💛 para David y MotoRepuestosYa 🇨🇴
