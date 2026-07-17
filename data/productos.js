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
  sku: "DVT-APA-MOT-0001",
  referencia: "UR4EK",
  nombre: "Bujía TVS Apache 160/200 4V (UR4EK)",
  descripcion: "Bujía original TVS para Apache 160 4V y Apache 200 4V. Mejora el arranque, optimiza la combustión y ofrece un excelente rendimiento.",
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
  sku: "DVT-APA-MOT-0002",
  referencia: "",
  nombre: "Filtro de aire Apache 160 FI / 200 FI",
  descripcion: "Filtro de aire original TVS que protege el motor y mantiene un flujo de aire limpio para un mejor desempeño.",
  precio: 40250,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache 160 FI, Apache 200 FI",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/filtro-aire.jpg"
  ]
},

{
  id: "prod_003",
  sku: "DVT-APA-CON-0003",
  referencia: "",
  nombre: "Guaya clutch Apache RTR 160",
  descripcion: "Guaya de clutch reforzada con excelente suavidad y resistencia para uso diario.",
  precio: 24000,
  categoria: "Control",
  marca: "KTO",
  compatibilidad: "Apache RTR 160",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/guaya-clutch.jpg"
  ]
},

{
  id: "prod_004",
  sku: "DVT-APA-CON-0004",
  referencia: "",
  nombre: "Guaya acelerador Apache RTR 160",
  descripcion: "Guaya de acelerador de alta resistencia con respuesta rápida y larga vida útil.",
  precio: 36000,
  categoria: "Control",
  marca: "KTO",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/guaya-acelerador.jpg"
  ]
},

{
  id: "prod_005",
  sku: "DVT-APA-FRE-0005",
  referencia: "",
  nombre: "Pastillas de freno traseras Apache",
  descripcion: "Pastillas de freno de excelente desempeño para una frenada segura y confiable.",
  precio: 57000,
  categoria: "Frenos",
  marca: "Ind. Jap",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/pastillas-freno.jpg"
  ]
},

{
  id: "prod_006",
  sku: "DVT-APA-CON-0006",
  referencia: "",
  nombre: "Manigueta izquierda Apache",
  descripcion: "Manigueta izquierda resistente, ideal para reemplazo con excelente acabado.",
  precio: 24000,
  categoria: "Control",
  marca: "KTO",
  compatibilidad: "Apache 160, Apache 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/manigueta-izq.jpg"
  ]
},

{
  id: "prod_007",
  sku: "DVT-APA-CON-0007",
  referencia: "",
  nombre: "Manigueta derecha Apache cromada",
  descripcion: "Manigueta derecha cromada con acabado brillante y gran resistencia.",
  precio: 25000,
  categoria: "Control",
  marca: "KTO",
  compatibilidad: "Apache 160, Apache 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/manigueta-der.jpg"
  ]
},

{
  id: "prod_008",
  sku: "DVT-APA-MOT-0008",
  referencia: "",
  nombre: "Empaque tapa clutch Apache",
  descripcion: "Empaque de tapa de clutch original que evita fugas de aceite y asegura un sellado perfecto.",
  precio: 19000,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache 160, Apache 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/empaque-clutch.jpg"
  ]
},

{
  id: "prod_009",
  sku: "DVT-APA-MOT-0009",
  referencia: "",
  nombre: "Empaque culata Apache 160",
  descripcion: "Empaque de culata original para mantener la compresión adecuada del motor.",
  precio: 29000,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache 160",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/empaque-culata.jpg"
  ]
},

{
  id: "prod_010",
  sku: "DVT-APA-FRE-0010",
  referencia: "",
  nombre: "Manguera freno delantera Apache 200 4V",
  descripcion: "Manguera de freno delantera de alta presión para una frenada segura.",
  precio: 46000,
  categoria: "Frenos",
  marca: "TGY",
  compatibilidad: "Apache 200 4V",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/manguera-freno.jpg"
  ]
},

{
  id: "prod_011",
  sku: "DVT-APA-ELE-0011",
  referencia: "",
  nombre: "Comando izquierdo Apache",
  descripcion: "Comando izquierdo para luces, direccionales y cambio de altas/bajas.",
  precio: 38000,
  categoria: "Eléctrico",
  marca: "Taiwan",
  compatibilidad: "Apache 160, Apache 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/comando-izq.jpg"
  ]
},

{
  id: "prod_012",
  sku: "DVT-APA-ELE-0012",
  referencia: "",
  nombre: "Comando derecho Apache",
  descripcion: "Comando derecho para encendido y control eléctrico de la motocicleta.",
  precio: 38000,
  categoria: "Eléctrico",
  marca: "Taiwan",
  compatibilidad: "Apache 160, Apache 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/comando-der.jpg"
  ]
},

{
  id: "prod_013",
  sku: "DVT-APA-MOT-0013",
  referencia: "",
  nombre: "Empaque de cilindro Apache RTR 160 / 180",
  descripcion: "Empaque de cilindro de excelente calidad que garantiza un sellado confiable del motor.",
  precio: 18000,
  categoria: "Motor",
  marca: "KTO",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/empaque-cilindro-160.jpg"
  ]
},

{
  id: "prod_014",
  sku: "DVT-APA-MOT-0014",
  referencia: "",
  nombre: "Empaque de cilindro Apache RTR 200",
  descripcion: "Empaque de cilindro fabricado para soportar altas temperaturas y un sellado óptimo.",
  precio: 22000,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/empaque-cilindro-200.jpg"
  ]
},

{
  id: "prod_015",
  sku: "DVT-APA-MOT-0015",
  referencia: "",
  nombre: "Filtro de aceite Apache / Suzuki",
  descripcion: "Filtro de aceite compatible con TVS Apache y diversos modelos Suzuki. Ayuda a mantener el motor limpio y protegido.",
  precio: 17000,
  categoria: "Motor",
  marca: "VX",
  compatibilidad: "Apache RTR 160, Apache RTR 180, Suzuki GN125, Viva, Best, AX4, Hayate, Gixxer",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/filtro-aceite.jpg"
  ]
},

{
  id: "prod_016",
  sku: "DVT-APA-MOT-0016",
  referencia: "",
  nombre: "Kit completo de empaques Apache RTR 160",
  descripcion: "Juego completo de empaques para reparación de motor. Excelente sellado y resistencia a altas temperaturas.",
  precio: 52000,
  categoria: "Motor",
  marca: "KTO",
  compatibilidad: "Apache RTR 160",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/kit-empaques-160.jpg"
  ]
},

{
  id: "prod_017",
  sku: "DVT-APA-MOT-0017",
  referencia: "",
  nombre: "Kit completo de empaques Apache RTR 180",
  descripcion: "Juego completo de empaques para reparación de motor Apache RTR 180.",
  precio: 56000,
  categoria: "Motor",
  marca: "KTO",
  compatibilidad: "Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/kit-empaques-180.jpg"
  ]
},

{
  id: "prod_018",
  sku: "DVT-APA-MOT-0018",
  referencia: "",
  nombre: "Discos de clutch Apache RTR 200",
  descripcion: "Juego de discos de clutch de excelente desempeño y larga vida útil.",
  precio: 89000,
  categoria: "Motor",
  marca: "VX",
  compatibilidad: "Apache RTR 200",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/discos-clutch.jpg"
  ]
},

{
  id: "prod_019",
  sku: "DVT-APA-MOT-0019",
  referencia: "",
  nombre: "Empaque culatín Apache RTR 200",
  descripcion: "Empaque de culatín para Apache RTR 200 con excelente sellado y durabilidad.",
  precio: 16000,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/empaque-culatin.jpg"
  ]
},

{
  id: "prod_020",
  sku: "DVT-APA-MOT-0020",
  referencia: "",
  nombre: "Balancines admisión y escape Apache RTR 160 / 180",
  descripcion: "Balancines para admisión y escape fabricados con materiales de alta resistencia.",
  precio: 76000,
  categoria: "Motor",
  marca: "VX",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/balancines.jpg"
  ]
},

{
  id: "prod_021",
  sku: "DVT-APA-TRA-0021",
  referencia: "",
  nombre: "Tensor de cadena derecho Apache RTR 180",
  descripcion: "Tensor derecho para mantener el ajuste correcto de la cadena de transmisión.",
  precio: 18000,
  categoria: "Transmisión",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/tensor-derecho.jpg"
  ]
},

{
  id: "prod_022",
  sku: "DVT-APA-TRA-0022",
  referencia: "",
  nombre: "Tensor de cadena izquierdo Apache RTR 180",
  descripcion: "Tensor izquierdo para cadena de transmisión de alta resistencia.",
  precio: 18000,
  categoria: "Transmisión",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/tensor-izquierdo.jpg"
  ]
},

{
  id: "prod_023",
  sku: "DVT-APA-MOT-0023",
  referencia: "",
  nombre: "Guías de cadenilla Apache RTR 200",
  descripcion: "Juego de guías de cadenilla para reducir desgaste y mejorar el funcionamiento del motor.",
  precio: 39000,
  categoria: "Motor",
  marca: "KTO",
  compatibilidad: "Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/guias-cadenilla.jpg"
  ]
},

{
  id: "prod_024",
  sku: "DVT-APA-SUS-0024",
  referencia: "",
  nombre: "Eje de rueda trasero Apache 160 4V",
  descripcion: "Eje de rueda trasero original de alta resistencia para reemplazo directo.",
  precio: 45000,
  categoria: "Suspensión",
  marca: "TVS Original",
  compatibilidad: "Apache 160 4V",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/eje-trasero.jpg"
  ]
},

{
  id: "prod_025",
  sku: "DVT-APA-CON-0025",
  referencia: "",
  nombre: "Soporte de manigueta izquierda Apache",
  descripcion: "Soporte para manigueta izquierda con ajuste preciso y excelente acabado.",
  precio: 25000,
  categoria: "Control",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/soporte-manigueta.jpg"
  ]
},

{
  id: "prod_026",
  sku: "DVT-APA-CON-0026",
  referencia: "",
  nombre: "Pesas de manubrio Apache 160 4V / Raider 125",
  descripcion: "Pesas de manubrio originales que reducen vibraciones y mejoran la estabilidad.",
  precio: 32000,
  categoria: "Control",
  marca: "TVS Original",
  compatibilidad: "Apache 160 4V, Raider 125",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/pesas-manubrio.jpg"
  ]
},

{
  id: "prod_027",
  sku: "DVT-APA-CON-0027",
  referencia: "",
  nombre: "Calapiés traseros Apache RTR 160 / 180",
  descripcion: "Juego de calapiés traseros resistentes con excelente acabado y ajuste.",
  precio: 47000,
  categoria: "Control",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/calapies.jpg"
  ]
},

{
  id: "prod_028",
  sku: "DVT-APA-MOT-0028",
  referencia: "",
  nombre: "Tapón medidor de nivel de aceite Apache",
  descripcion: "Tapón medidor original para verificar fácilmente el nivel de aceite del motor.",
  precio: 12000,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache 160 2V, Apache 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/tapon-aceite.jpg"
  ]
},

{
  id: "prod_029",
  sku: "DVT-APA-MOT-0029",
  referencia: "",
  nombre: "Tapón de culata Apache",
  descripcion: "Tapón de culata original para motores TVS con excelente ajuste y durabilidad.",
  precio: 9000,
  categoria: "Motor",
  marca: "TVS Original",
  compatibilidad: "Apache 160 2V, Apache 180, Stryker 125, King 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/tapon-culata.jpg"
  ]
},

{
  id: "prod_030",
  sku: "DVT-APA-TRA-0030",
  referencia: "",
  nombre: "Tornillos porta sprocket Apache RTR 160 / 180",
  descripcion: "Juego de tornillos porta sprocket fabricados en acero de alta resistencia para una instalación segura.",
  precio: 15000,
  categoria: "Transmisión",
  marca: "TVS Original",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/tornillos-sprocket.jpg"
  ]
},

{
  id: "prod_031",
  sku: "DVT-APA-TRA-0031",
  referencia: "",
  nombre: "Kit de arrastre Apache RTR 160 4V",
  descripcion: "Kit de arrastre de excelente calidad que ofrece una transmisión suave y mayor durabilidad.",
  precio: 185000,
  categoria: "Transmisión",
  marca: "Rolon",
  compatibilidad: "Apache RTR 160 4V",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/kit-arrastre-160-4v.jpg"
  ]
},

{
  id: "prod_032",
  sku: "DVT-APA-TRA-0032",
  referencia: "",
  nombre: "Cadena 428H Apache RTR 160",
  descripcion: "Cadena reforzada de alta resistencia para transmisión de potencia confiable.",
  precio: 78000,
  categoria: "Transmisión",
  marca: "Rolon",
  compatibilidad: "Apache RTR 160",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/cadena-428h.jpg"
  ]
},

{
  id: "prod_033",
  sku: "DVT-APA-TRA-0033",
  referencia: "",
  nombre: "Piñón de salida Apache RTR 160",
  descripcion: "Piñón fabricado en acero templado para mayor duración y desempeño.",
  precio: 28000,
  categoria: "Transmisión",
  marca: "Rolon",
  compatibilidad: "Apache RTR 160",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/pinon-apache.jpg"
  ]
},

{
  id: "prod_034",
  sku: "DVT-APA-TRA-0034",
  referencia: "",
  nombre: "Corona Apache RTR 160",
  descripcion: "Corona de transmisión de excelente calidad para un funcionamiento eficiente.",
  precio: 52000,
  categoria: "Transmisión",
  marca: "Rolon",
  compatibilidad: "Apache RTR 160",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/corona-apache.jpg"
  ]
},

{
  id: "prod_035",
  sku: "DVT-APA-FRE-0035",
  referencia: "",
  nombre: "Pastillas de freno delanteras Apache",
  descripcion: "Pastillas delanteras con excelente poder de frenado y larga duración.",
  precio: 62000,
  categoria: "Frenos",
  marca: "Elig",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/pastillas-delanteras.jpg"
  ]
},

{
  id: "prod_036",
  sku: "DVT-APA-FRE-0036",
  referencia: "",
  nombre: "Disco de freno delantero Apache RTR 160",
  descripcion: "Disco de freno delantero de alta precisión para una frenada segura.",
  precio: 135000,
  categoria: "Frenos",
  marca: "TGY",
  compatibilidad: "Apache RTR 160",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/disco-delantero.jpg"
  ]
},

{
  id: "prod_037",
  sku: "DVT-APA-FRE-0037",
  referencia: "",
  nombre: "Bomba de freno delantera Apache",
  descripcion: "Bomba de freno completa con excelente desempeño hidráulico.",
  precio: 128000,
  categoria: "Frenos",
  marca: "TGY",
  compatibilidad: "Apache RTR 160, Apache RTR 180",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/bomba-freno-delantera.jpg"
  ]
},

{
  id: "prod_038",
  sku: "DVT-APA-FRE-0038",
  referencia: "",
  nombre: "Bomba de freno trasera Apache",
  descripcion: "Bomba de freno trasera con excelente calidad y fácil instalación.",
  precio: 118000,
  categoria: "Frenos",
  marca: "TGY",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/bomba-freno-trasera.jpg"
  ]
},

{
  id: "prod_039",
  sku: "DVT-APA-SUS-0039",
  referencia: "",
  nombre: "Retén de suspensión Apache",
  descripcion: "Juego de retenes para barras delanteras que evita fugas de aceite.",
  precio: 36000,
  categoria: "Suspensión",
  marca: "NOK",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/reten-suspension.jpg"
  ]
},

{
  id: "prod_040",
  sku: "DVT-APA-SUS-0040",
  referencia: "",
  nombre: "Rodamientos de dirección Apache",
  descripcion: "Kit de rodamientos de dirección para una conducción suave y segura.",
  precio: 85000,
  categoria: "Suspensión",
  marca: "SKF",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/rodamientos-direccion.jpg"
  ]
},

{
  id: "prod_041",
  sku: "DVT-APA-SUS-0041",
  referencia: "",
  nombre: "Rodamiento rueda delantera Apache",
  descripcion: "Rodamiento delantero de alta calidad y larga vida útil.",
  precio: 26000,
  categoria: "Suspensión",
  marca: "SKF",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/rodamiento-delantero.jpg"
  ]
},

{
  id: "prod_042",
  sku: "DVT-APA-SUS-0042",
  referencia: "",
  nombre: "Rodamiento rueda trasera Apache",
  descripcion: "Rodamiento trasero resistente para un funcionamiento confiable.",
  precio: 28000,
  categoria: "Suspensión",
  marca: "SKF",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/rodamiento-trasero.jpg"
  ]
},

{
  id: "prod_043",
  sku: "DVT-APA-ELE-0043",
  referencia: "",
  nombre: "Batería 12V Apache RTR 160",
  descripcion: "Batería sellada libre de mantenimiento con excelente capacidad de arranque.",
  precio: 168000,
  categoria: "Eléctrico",
  marca: "MAC",
  compatibilidad: "Apache RTR 160, Apache RTR 200",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/bateria-apache.jpg"
  ]
},

{
  id: "prod_044",
  sku: "DVT-APA-ELE-0044",
  referencia: "",
  nombre: "Relé de direccionales Apache",
  descripcion: "Relé electrónico para el correcto funcionamiento de las direccionales.",
  precio: 24000,
  categoria: "Eléctrico",
  marca: "Generico",
  compatibilidad: "Apache RTR 160, Apache RTR 180, Apache RTR 200",
  stock: true,
  destacado: false,
  imagenes: [
    "data/images/rele-direccionales.jpg"
  ]
},

{
  id: "prod_045",
  sku: "DVT-APA-ELE-0045",
  referencia: "",
  nombre: "Bombillo LED H4 Alta/Baja",
  descripcion: "Bombillo LED de alta potencia para mejorar la iluminación nocturna.",
  precio: 85000,
  categoria: "Eléctrico",
  marca: "Philips",
  compatibilidad: "Apache RTR 160, Apache RTR 180, Apache RTR 200",
  stock: true,
  destacado: true,
  imagenes: [
    "data/images/bombillo-led-h4.jpg"
  ]
},

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
