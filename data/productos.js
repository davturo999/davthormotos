/**
 * ============================================================
 *  ARCHIVO DE PRODUCTOS - motorepuestosya.com
 * ============================================================
 *
 *  👋 ¡Hola David! Este es el archivo donde manejas TODOS los
 *  productos de la tienda. Es sencillo de editar:
 *
 *  ➕ AGREGAR un producto: Copia un bloque completo (de { hasta },)
 *     y pégalo al final del array, antes del ];
 *     Luego cambia los datos y listo.
 *
 *  ➖ QUITAR un producto: Borra el bloque completo de ese producto
 *     (desde la { que lo abre hasta la , que lo cierra).
 *
 *  🖼️ IMÁGENES: Pon los archivos de imagen en la carpeta
 *     /data/images/ y referéncialos como "data/images/tu-imagen.jpg"
 *     Puedes poner varias imágenes por producto en el array [].
 *
 *  💲 PRECIOS: Escríbelos como string, ej: "45.000"  (solo números,
 *     sin $ ni COP, el sitio los muestra automático)
 *
 *  🏷️ CATEGORÍAS disponibles (puedes crear nuevas):
 *     "Motor" | "Frenos" | "Transmisión" | "Eléctrico" |
 *     "Filtros" | "Lubricantes" | "Carrocería" | "Otros"
 *
 *  ⭐ DESTACADO: ponlo en true para que aparezca en la sección
 *     principal de la página de inicio.
 *
 * ============================================================
 */

const PRODUCTOS = [

  {
    id: "prod_001",
    nombre: "Bujía TVS Apache 160/200 4V (UR4EK)",
    descripcion: "Bujía original TVS para Apache 160 4V y 200 4V. Mejora el arranque y optimiza la combustión.",
    precio: 14947,
    categoria: "Motor",
    marca: "TVS Original",
    compatibilidad: "Apache 160 4V, Apache 200 4V",
    stock: true,
    destacado: true,
    imagenes: [
      "data/images/bujia-apache.jpg"
    ]
  },
  {
    id: "prod_002",
    nombre: "Filtro de aire Apache 160 FI / 200 FI",
    descripcion: "Filtro de aire original que protege el motor y mejora el rendimiento.",
    precio: 40250,
    categoria: "Motor",
    marca: "TVS Original",
    compatibilidad: "Apache 160 FI, Apache 200 FI",
    stock: true,
    destacado: true,
    imagenes: ["data/images/filtro-aire.jpg"]
  },
  {
    id: "prod_003",
    nombre: "Guaya clutch Apache RTR 160",
    descripcion: "Cable de clutch reforzado, suave y resistente.",
    precio: 24000,
    categoria: "Control",
    marca: "KTO",
    compatibilidad: "Apache RTR 160",
    stock: true,
    destacado: false,
    imagenes: ["data/images/guaya-clutch.jpg"]
  },
  {
    id: "prod_004",
    nombre: "Guaya acelerador Apache RTR 160",
    descripcion: "Respuesta rápida y durabilidad para uso urbano.",
    precio: 36000,
    categoria: "Control",
    marca: "KTO",
    compatibilidad: "Apache RTR 160 / 180",
    stock: true,
    destacado: true,
    imagenes: ["data/images/guaya-acelerador.jpg"]
  },
  {
    id: "prod_005",
    nombre: "Pastillas de freno traseras Apache",
    descripcion: "Frenado seguro y duradero para uso en ciudad.",
    precio: 57000,
    categoria: "Frenos",
    marca: "Ind. Jap",
    compatibilidad: "Apache RTR 160, 180",
    stock: true,
    destacado: true,
    imagenes: ["data/images/pastillas-freno.jpg"]
  },
  {
    id: "prod_006",
    nombre: "Manigueta izquierda Apache",
    descripcion: "Manigueta izquierda resistente y económica.",
    precio: 24000,
    categoria: "Control",
    marca: "KTO",
    compatibilidad: "Apache 160 / 180",
    stock: true,
    destacado: false,
    imagenes: ["data/images/manigueta-izq.jpg"]
  },
  {
    id: "prod_007",
    nombre: "Manigueta derecha Apache cromada",
    descripcion: "Manigueta derecha cromada con excelente acabado.",
    precio: 25000,
    categoria: "Control",
    marca: "KTO",
    compatibilidad: "Apache 160 / 180",
    stock: true,
    destacado: false,
    imagenes: ["data/images/manigueta-der.jpg"]
  },
  {
    id: "prod_008",
    nombre: "Empaque tapa clutch Apache",
    descripcion: "Empaque que evita fugas de aceite y asegura buen sellado.",
    precio: 19000,
    categoria: "Motor",
    marca: "TVS Original",
    compatibilidad: "Apache 160 / 200",
    stock: true,
    destacado: false,
    imagenes: ["data/images/empaque-clutch.jpg"]
  },
  {
    id: "prod_009",
    nombre: "Empaque culata Apache 160",
    descripcion: "Empaque de culata que garantiza buena compresión del motor.",
    precio: 29000,
    categoria: "Motor",
    marca: "TVS Original",
    compatibilidad: "Apache 160",
    stock: true,
    destacado: false,
    imagenes: ["data/images/empaque-culata.jpg"]
  },
  {
    id: "prod_010",
    nombre: "Manguera freno delantera Apache",
    descripcion: "Manguera de freno resistente a alta presión.",
    precio: 46000,
    categoria: "Frenos",
    marca: "TGY",
    compatibilidad: "Apache 200 4V",
    stock: true,
    destacado: false,
    imagenes: ["data/images/manguera-freno.jpg"]
  },
  {
    id: "prod_011",
    nombre: "Comando izquierdo Apache",
    descripcion: "Switch de control izquierdo para luces y direccionales.",
    precio: 38000,
    categoria: "Eléctrico",
    marca: "Taiwan",
    compatibilidad: "Apache 160 / 180",
    stock: true,
    destacado: false,
    imagenes: ["data/images/comando-izq.jpg"]
  },
  {
    id: "prod_012",
    nombre: "Comando derecho Apache",
    descripcion: "Switch derecho para encendido y control eléctrico.",
    precio: 38000,
    categoria: "Eléctrico",
    marca: "Taiwan",
    compatibilidad: "Apache 160 / 180",
    stock: true,
    destacado: false,
    imagenes: ["data/images/comando-der.jpg"]
  }

];

// ============================================================
//  PROMOCIONES VIGENTES
// ============================================================
//
//  Aquí configuras las promociones. Cada promo tiene:
//  - titulo: Título llamativo
//  - descripcion: Detalle de la oferta
//  - fechas: Período de la promo (solo texto, es decorativo)
//  - emoji: Un emoji para hacerla visual 🎉
//  - activa: true = se muestra | false = oculta pero guardada
//
//  ➕ Agregar promo: Copia un bloque y pégalo en el array
//  🔕 Ocultar promo: Cambia activa: true → activa: false
// ============================================================

const PROMOCIONES = [

  {
    id: "promo_001",
    titulo: "¡Semana de las Bujías!",
    descripcion: "Del 21 al 25 de abril, todas las bujías NGK con descuento especial. No dejes que tu moto falle cuando más la necesitas.",
    fechas: "21 al 25 de Abril",
    emoji: "⚡",
    activa: true
  },

  {
    id: "promo_002",
    titulo: "Mes del Aceite",
    descripcion: "Durante mayo, aceite 10W-40 con descuento en compras de 2 litros o más. Cuida el corazón de tu moto.",
    fechas: "Todo el mes de Mayo",
    emoji: "🛢️",
    activa: true
  },

  {
    id: "promo_003",
    titulo: "Promo Frenos Seguros",
    descripcion: "Combo pastillas delanteras + traseras con precio especial. Porque frenar bien no tiene precio... bueno, casi.",
    fechas: "Hasta agotar existencias",
    emoji: "🛑",
    activa: false
  }

];

// ============================================================
//  INFORMACIÓN DE CONTACTO
//  Edita tus datos aquí
// ============================================================

const CONTACTO = {
  whatsapp: "573202274732",       // Número con código de país, sin + ni espacios
  whatsappMensaje: "Hola! Vi su página Davthormotos.com y tengo una consulta sobre repuestos",
  ciudad: "Bogotá",
  horario: "24/7 envios Bogota",
  email: "ventas@davthormotos.com"  // Actualiza cuando tengas el correo
};
