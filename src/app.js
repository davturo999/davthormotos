/**
 * ============================================================
 *  MOTOREPUESTOSYA.COM - Lógica principal
 *  app.js
 *
 *  Este archivo no necesitas tocarlo normalmente.
 *  Todo lo que editas está en /data/productos.js
 *
 *  Si quieres cambiar comportamientos del sitio, busca
 *  la función correspondiente y modifica según el comentario.
 * ============================================================
 */

/* ============================================================
   ÍCONOS POR CATEGORÍA
   Si agregas una categoría nueva en productos.js,
   agrégala aquí también con su emoji.
============================================================ */
const ICONOS_CATEGORIA = {
  "Motor":        "⚙️",
  "Frenos":       "🛑",
  "Transmisión":  "⛓️",
  "Eléctrico":    "⚡",
  "Filtros":      "🔵",
  "Lubricantes":  "🛢️",
  "Carrocería":   "🏍️",
  "Otros":        "🔧",
};

/* ============================================================
   ESTADO GLOBAL
============================================================ */
let filtroActivo = "Todos";
let busqueda     = "";

/* ============================================================
   INICIALIZACIÓN
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  aplicarContacto();
  renderPromos();
  renderCategorias();
  renderProductos();
  iniciarBuscador();
  iniciarNav();
  iniciarScrollHeader();
  iniciarReveal();
  actualizarFooterCats();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ============================================================
   CONTACTO
   Toma los datos de CONTACTO (en productos.js) y los aplica
   a los botones WhatsApp y a la sección de contacto.
============================================================ */
function aplicarContacto() {
  const url = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(CONTACTO.whatsappMensaje)}`;

  const ids = ["heroWhatsapp", "contactWhatsapp", "fabWhatsapp"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });

  const emailEl = document.getElementById("contactEmail");
  if (emailEl) emailEl.textContent = CONTACTO.email;

  const horarios = ["contactHorario", "contactHorarioCard"];
  horarios.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = CONTACTO.horario;
  });
}

/* ============================================================
   RENDERIZAR PROMOCIONES
   Solo muestra las promos con activa: true
============================================================ */
function renderPromos() {
  const grid = document.getElementById("promosGrid");
  if (!grid) return;

  const activas = PROMOCIONES.filter(p => p.activa);

  if (activas.length === 0) {
    // Si no hay promos activas, ocultamos la sección completa
    const seccion = document.getElementById("promociones");
    if (seccion) seccion.style.display = "none";
    return;
  }

  grid.innerHTML = activas.map(promo => `
    <div class="promo-card reveal">
      <span class="promo-emoji">${promo.emoji}</span>
      <h3 class="promo-titulo">${promo.titulo}</h3>
      <p class="promo-desc">${promo.descripcion}</p>
      <span class="promo-fechas">📅 ${promo.fechas}</span>
    </div>
  `).join("");
}

/* ============================================================
   RENDERIZAR CATEGORÍAS
   Genera los botones de categoría automáticamente desde
   los productos que existan en el array PRODUCTOS.
============================================================ */
function renderCategorias() {
  const grid = document.getElementById("catsGrid");
  if (!grid) return;

  // Contar productos por categoría
  const conteo = {};
  PRODUCTOS.forEach(p => {
    conteo[p.categoria] = (conteo[p.categoria] || 0) + 1;
  });

  const categorias = Object.keys(conteo);

  // Generar botón "Todos" + cada categoría
  const tarjetas = [
    { nombre: "Todos", count: PRODUCTOS.length, icono: "🏪" },
    ...categorias.map(cat => ({ nombre: cat, count: conteo[cat], icono: ICONOS_CATEGORIA[cat] || "🔧" }))
  ];

  grid.innerHTML = tarjetas.map(cat => `
    <div
      class="cat-card reveal ${cat.nombre === filtroActivo ? 'active' : ''}"
      onclick="filtrarPorCategoria('${cat.nombre}')"
    >
      <span class="cat-icon">${cat.icono}</span>
      <span class="cat-name">${cat.nombre}</span>
      <span class="cat-count">${cat.count} ref.</span>
    </div>
  `).join("");

  // También llenar el filtro de tags encima del grid de productos
  const tagsWrap = document.getElementById("filterTags");
  if (tagsWrap) {
    tagsWrap.innerHTML = tarjetas.map(cat => `
      <button
        class="filter-tag ${cat.nombre === filtroActivo ? 'active' : ''}"
        onclick="filtrarPorCategoria('${cat.nombre}')"
      >${cat.nombre}</button>
    `).join("");
  }
}

/* ============================================================
   RENDERIZAR PRODUCTOS
   Aplica los filtros activos y genera las tarjetas.
============================================================ */
function renderProductos() {
  const grid  = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  if (!grid) return;

  let lista = PRODUCTOS;

  // Filtro por categoría
  if (filtroActivo !== "Todos") {
    lista = lista.filter(p => p.categoria === filtroActivo);
  }

  // Filtro por búsqueda
  if (busqueda.trim()) {
    const q = busqueda.toLowerCase();
    lista = lista.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      (p.marca && p.marca.toLowerCase().includes(q)) ||
      (p.compatibilidad && p.compatibilidad.toLowerCase().includes(q)) ||
      p.categoria.toLowerCase().includes(q)
    );
  }

  if (lista.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  grid.innerHTML = lista.map(prod => {
    const imagenHTML = prod.imagenes && prod.imagenes.length > 0
      ? `<img
           class="product-img"
           src="${prod.imagenes[0]}"
           alt="${prod.nombre}"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
         />
         <div class="product-img-placeholder" style="display:none;">${ICONOS_CATEGORIA[prod.categoria] || "🔧"}</div>`
      : `<div class="product-img-placeholder">${ICONOS_CATEGORIA[prod.categoria] || "🔧"}</div>`;

    const waMsg = encodeURIComponent(
      `Hola! Vi en motorepuestosya.com el producto *${prod.nombre}* a $${formatPrecio(prod.precio)} COP y me interesa 🏍️`
    );
    const waUrl = `https://wa.me/${CONTACTO.whatsapp}?text=${waMsg}`;

    return `
      <article class="product-card reveal" onclick="abrirModal('${prod.id}')">
        <div class="product-img-wrap">
          ${imagenHTML}
          ${prod.destacado ? '<span class="product-badge">⭐ Destacado</span>' : ''}
          ${!prod.stock ? '<span class="product-badge-agotado">Agotado</span>' : ''}
        </div>
        <div class="product-body">
          <span class="product-cat">${prod.categoria}</span>
          <h3 class="product-name">${prod.nombre}</h3>
          ${prod.marca ? `<p class="product-marca">${prod.marca}</p>` : ''}
          ${prod.compatibilidad ? `<p class="product-compat">Compatible: ${prod.compatibilidad}</p>` : ''}
          <div class="product-footer">
            <div>
              <span class="product-price">$${formatPrecio(prod.precio)}</span>
              <span class="product-price-sub">COP</span>
            </div>
            <a
              href="${waUrl}"
              class="product-wa-btn"
              onclick="event.stopPropagation()"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedir
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Re-activar animaciones reveal
  iniciarReveal();
}

/* ============================================================
   FILTRADO POR CATEGORÍA
============================================================ */
function filtrarPorCategoria(cat) {
  filtroActivo = cat;
  renderCategorias(); // actualiza botones activos
  renderProductos();

  // Scroll suave a la sección de productos
  document.getElementById("productos")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================================================
   RESET FILTROS
============================================================ */
function resetFilters() {
  filtroActivo = "Todos";
  busqueda     = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  renderCategorias();
  renderProductos();
}

/* ============================================================
   BUSCADOR
============================================================ */
function iniciarBuscador() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  let timeout;
  input.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      busqueda = input.value;
      renderProductos();
    }, 280); // debounce 280ms
  });
}

/* ============================================================
   MODAL DETALLE DE PRODUCTO
============================================================ */
function abrirModal(id) {
  const prod = PRODUCTOS.find(p => p.id === id);
  if (!prod) return;

  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");

  const imagenHTML = prod.imagenes && prod.imagenes.length > 0
    ? `<img
         class="modal-img"
         src="${prod.imagenes[0]}"
         alt="${prod.nombre}"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
       />
       <div class="modal-img-placeholder" style="display:none;">${ICONOS_CATEGORIA[prod.categoria] || "🔧"}</div>`
    : `<div class="modal-img-placeholder">${ICONOS_CATEGORIA[prod.categoria] || "🔧"}</div>`;

  const waMsg = encodeURIComponent(
    `Hola! Vi en motorepuestosya.com el producto *${prod.nombre}* a $${formatPrecio(prod.precio)} COP y me interesa 🏍️`
  );
  const waUrl = `https://wa.me/${CONTACTO.whatsapp}?text=${waMsg}`;

  content.innerHTML = `
    ${imagenHTML}
    <p class="modal-cat">${prod.categoria}</p>
    <h2 class="modal-name">${prod.nombre}</h2>
    <p class="modal-desc">${prod.descripcion}</p>
    <div class="modal-meta">
      ${prod.marca          ? `<div class="modal-meta-row"><span class="modal-meta-label">Marca:</span><span class="modal-meta-val">${prod.marca}</span></div>` : ''}
      ${prod.compatibilidad ? `<div class="modal-meta-row"><span class="modal-meta-label">Compatible:</span><span class="modal-meta-val">${prod.compatibilidad}</span></div>` : ''}
      <div class="modal-meta-row">
        <span class="modal-meta-label">Disponibilidad:</span>
        <span class="modal-meta-val" style="color:${prod.stock ? '#4caf50' : '#f44336'}">${prod.stock ? '✅ En stock' : '❌ Agotado'}</span>
      </div>
    </div>
    <div class="modal-price">$${formatPrecio(prod.precio)}</div>
    <p class="modal-price-sub">Precio en pesos colombianos (COP)</p>
    <div class="modal-actions">
      <a href="${waUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Consultar por WhatsApp
      </a>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose")?.addEventListener("click", cerrarModal);
document.getElementById("modalOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) cerrarModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarModal();
});

/* ============================================================
   NAVEGACIÓN MÓVIL
============================================================ */
function iniciarNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");

  hamburger?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Cerrar al hacer clic en un link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

/* ============================================================
   HEADER - CAMBIO AL HACER SCROLL
============================================================ */
function iniciarScrollHeader() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   ANIMACIONES SCROLL (REVEAL)
   Los elementos con clase .reveal aparecen suavemente
   cuando entran en la pantalla.
============================================================ */
function iniciarReveal() {
  const els = document.querySelectorAll(".reveal:not(.visible)");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 60); // stagger suave
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}

/* ============================================================
   FOOTER - CATEGORÍAS DINÁMICAS
============================================================ */
function actualizarFooterCats() {
  const ul = document.getElementById("footerCats");
  if (!ul) return;

  const cats = [...new Set(PRODUCTOS.map(p => p.categoria))];
  ul.innerHTML = cats.map(cat => `
    <li><a href="#productos" onclick="filtrarPorCategoria('${cat}')">${cat}</a></li>
  `).join("");
}

/* ============================================================
   UTILIDADES
============================================================ */

/**
 * Formatea el precio: si ya tiene puntos, lo deja igual.
 * Si viene como "12000", lo convierte a "12.000"
 */
function formatPrecio(precio) {
  if (!precio) return "Consultar";
  const num = parseFloat(precio.toString().replace(/\./g, "").replace(",", "."));
  if (isNaN(num)) return precio;
  return num.toLocaleString("es-CO");
}
