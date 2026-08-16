/* ============================================================
   i18n ES/EN — portafolio Jordán Villón
   Intercambia nodos de texto usando un diccionario ES→EN (y su
   reverso EN→ES generado). El idioma se persiste en localStorage.
   ============================================================ */
(function () {
  'use strict';

  var MAP = {
    /* ---------- Nav ---------- */
    "Inicio": "Home",
    "Casos de estudio": "Case studies",
    "Proyectos": "Projects",
    "Publicaciones": "Publications",
    "Contactar": "Contact me",
    "Contacto": "Contact",

    /* ---------- Hero ---------- */
    "Principal Data Scientist · Ecuador · Remoto": "Principal Data Scientist · Ecuador · Remote",
    "Convierto": "I turn",
    "incertidumbre": "uncertainty",
    "en decisiones de negocio.": "into business decisions.",
    "Econometría causal, aprendizaje por refuerzo y sistemas de ML escalables aplicados a KPIs medibles — desde valorización urbana hasta bioseguridad industrial.": "Causal econometrics, reinforcement learning and scalable ML systems applied to measurable KPIs — from urban valorization to industrial biosafety.",
    "📊 Ver casos de estudio": "📊 View case studies",
    "🚀 Explorar proyectos": "🚀 Explore projects",

    /* ---------- Stats ---------- */
    "proyectos en producción": "projects in production",
    "ROI en detección por visión": "ROI in vision detection",
    "alertas tempranas en acuicultura": "early warnings in aquaculture",
    "municipios con índice de transparencia": "municipalities in the transparency index",

    /* ---------- Flagship ---------- */
    "Proyectos insignia": "Flagship projects",
    "Tres sistemas donde el rigor estadístico y la ingeniería de producción se traducen en impacto medible.": "Three systems where statistical rigor and production engineering translate into measurable impact.",
    "Predicción de valorización inmobiliaria para Quito y Guayaquil con intervalos calibrados y explicabilidad SHAP.": "Real estate valorization forecasting for Quito and Guayaquil with calibrated intervals and SHAP explainability.",
    "Predicción de brotes con Deep Learning + agente RL que recomienda acciones de bioseguridad óptimas.": "Outbreak prediction with Deep Learning + an RL agent recommending optimal biosafety actions.",
    "Detección de enfermedades del banano en 5 s por imagen con transfer learning y exportación a edge.": "Banana disease detection in 5 s per image with transfer learning and edge export.",
    "Ver los 10 proyectos →": "View all 10 projects →",
    "Cobertura": "Coverage",
    "Latencia": "Latency",
    "Alerta": "Alert",
    "Evitado": "Avoided",
    "Pesticidas": "Pesticides",
    "Inferencia": "Inference",

    /* ---------- Áreas ---------- */
    "Áreas estratégicas": "Strategic areas",
    "Cinco dominios donde concentro mi experiencia técnica y de liderazgo.": "Five domains where I focus my technical and leadership expertise.",
    "Causal Inference & Econometría": "Causal Inference & Econometrics",
    "Modelos hedónicos, diferencias-en-diferencias y diseño de experimentos para pricing, valoración y políticas públicas.": "Hedonic models, difference-in-differences and experiment design for pricing, valuation and public policy.",
    "ARIMA/SARIMA, GAMs y deep learning con intervalos conformales para pronósticos con incertidumbre honesta.": "ARIMA/SARIMA, GAMs and deep learning with conformal intervals for forecasts with honest uncertainty.",
    "Agentes PPO/DDQN para optimizar decisiones secuenciales bajo incertidumbre en operaciones y recursos.": "PPO/DDQN agents to optimize sequential decisions under uncertainty in operations and resources.",
    "ETL → feature store → API → dashboard, con monitoreo de drift (PSI), reentrenamiento y gobernanza.": "ETL → feature store → API → dashboard, with drift monitoring (PSI), retraining and governance.",
    "Rejillas H3, econometría espacial (Moran, LISA) y geoestadística para decisiones territoriales.": "H3 grids, spatial econometrics (Moran, LISA) and geostatistics for territorial decisions.",
    "Traduzco problemas de negocio en hojas de ruta de datos con priorización por impacto y riesgo.": "I translate business problems into data roadmaps prioritized by impact and risk.",
    "Ver casos →": "View cases →",
    "Ver proyectos →": "View projects →",
    "Ver publicaciones →": "View publications →",

    /* ---------- How I work ---------- */
    "Del problema al KPI medible": "From problem to measurable KPI",
    "Un proceso que empieza en la hipótesis económica y termina en producción monitoreada.": "A process that starts with the economic hypothesis and ends in monitored production.",
    "Problema de negocio": "Business problem",
    "Definir la decisión que hay que mejorar y su KPI.": "Define the decision to improve and its KPI.",
    "Hipótesis causal": "Causal hypothesis",
    "Explicitar el mecanismo económico o físico que conecta datos y resultado.": "Make the economic or physical mechanism connecting data and outcome explicit.",
    "Pipelines versionados con validación de esquemas y calidad.": "Versioned pipelines with schema and quality validation.",
    "Modelado riguroso": "Rigorous modeling",
    "Validación espacial/temporal, calibración de incertidumbre y explicabilidad.": "Spatial/temporal validation, uncertainty calibration and explainability.",
    "Producción + monitoreo": "Production + monitoring",
    "APIs, drift (PSI), reentrenamiento y gobernanza de modelos.": "APIs, drift (PSI), retraining and model governance.",
    "Decisión con KPI": "Decision with KPI",
    "Cerrar el ciclo midiendo el impacto real sobre el negocio.": "Close the loop by measuring real business impact.",

    /* ---------- Quote / CTA ---------- */
    "\"Los modelos no venden; las decisiones sí.\"": "\"Models don't sell; decisions do.\"",
    "¿Buscas un líder para tu equipo de datos?": "Looking for a leader for your data team?",
    "Escríbeme": "Email me",

    /* ---------- Contacto ---------- */
    "Hablemos de tu equipo de datos": "Let's talk about your data team",
    "Cuéntame tu reto — el mensaje llega directo a mi correo y suelo responder en menos de 24 h.": "Tell me your challenge — the message goes straight to my inbox and I usually reply within 24 h.",
    "Contacto directo": "Direct contact",
    "haz clic para copiar": "click to copy",
    "copiar": "copy",
    "abrir →": "open →",
    "chatear →": "chat →",
    "📍 Ecuador · GMT-5 · disponible en remoto": "📍 Ecuador · GMT-5 · available remote",
    "⚡ Respuesta habitual en < 24 h": "⚡ Usual response within 24 h",
    "Nombre": "Name",
    "¿Qué estás buscando?": "What are you looking for?",
    "Consultoría / Colaboración": "Consulting / Collaboration",
    "Otro": "Other",
    "Mensaje": "Message",
    "Enviar mensaje": "Send message",

    /* ---------- Footer ---------- */
    "© 2026 Jordán Villón · Imágenes: capturas reales de los sistemas en producción y fotos de Wikimedia Commons (licencias libres).": "© 2026 Jordán Villón · Images: real screenshots from production systems and Wikimedia Commons photos (free licenses).",

    /* ---------- Página Proyectos ---------- */
    "Los 10 repositorios que componen el portafolio, ordenados por impacto de negocio. Cada uno con README a nivel senior: metodología, arquitectura, resultados y gobernanza.": "The 10 repositories in this portfolio, ordered by business impact. Each with a senior-level README: methodology, architecture, results and governance.",
    "Valorización inmobiliaria Quito/Guayaquil con intervalos calibrados y SHAP.": "Quito/Guayaquil real estate valorization with calibrated intervals and SHAP.",
    "Brotes en piscinas con DL+RL y simulador económico.": "Pond outbreaks with DL+RL and an economic simulator.",
    "Detección de enfermedades del banano por visión por computador.": "Banana disease detection with computer vision.",
    "Índice de transparencia municipal y comparador de municipios pares.": "Municipal transparency index and peer-municipality comparator.",
    "Índice de profesionalización de candidatos (Elecciones 2026), reproducible.": "Reproducible candidate professionalization index (2026 Elections).",
    "Comparativa reproducible de tiempo y memoria para decidir stack con evidencia.": "Reproducible time and memory comparison to choose your stack with evidence.",
    "Comparador de seguridad financiera: solvencia, morosidad, liquidez, ROA/ROE.": "Financial safety comparator: solvency, delinquency, liquidity, ROA/ROE.",
    "Analítica de salud 100% local con retraining y validación holdout.": "100% local health analytics with retraining and holdout validation.",
    "Analítica espacial y temporal de criminalidad con 43,976 registros oficiales.": "Spatial and temporal crime analytics with 43,976 official records.",
    "Este portafolio: Jekyll + design system propio, deploy automático por GitHub Actions.": "This portfolio: Jekyll + custom design system, auto-deployed with GitHub Actions.",
    "Metodología": "Methodology",
    "Protocolo": "Protocol",
    "controlado": "controlled",
    "Indicadores": "Indicators",
    "Privacidad": "Privacy",
    "Registros": "Records",
    "Índices": "Indices",
    "Año": "Year",
    "automático": "automatic",
    "Ver casos de estudio →": "View case studies →",
    "Portafolio v1 (legacy) →": "Portfolio v1 (legacy) →",

    /* ---------- Casos de estudio ---------- */
    "Cuatro proyectos donde el rigor metodológico se traduce en impacto de negocio medible: problema → método → resultados con KPIs → código.": "Four projects where methodological rigor translates into measurable business impact: problem → method → KPI results → code.",
    "Valoración inmobiliaria desactualizada y con brechas en Quito y Guayaquil: inversores y municipios sin señales de valorización oportunas ni incertidumbre cuantificada.": "Outdated real estate valuation with gaps in Quito and Guayaquil: investors and municipalities without timely valorization signals or quantified uncertainty.",
    "Regresión cuantílica con": "Quantile regression with",
    "+ modelo multimodal": "+ a multimodal model",
    "con imágenes satelitales.": "with satellite imagery.",
    "Rejilla espacial": "Spatial grid",
    "y cross-validation espacial por celda, no aleatoria.": "and spatial cross-validation by cell, not random.",
    "Incertidumbre calibrada con": "Uncertainty calibrated with",
    "; explicabilidad con": "; explainability with",
    "API FastAPI + simulador de escenarios + frontend Leaflet/Plotly.": "FastAPI API + scenario simulator + Leaflet/Plotly frontend.",
    "Error de valoración (MAE)": "Valuation error (MAE)",
    "(baseline hedónico ~12%)": "(hedonic baseline ~12%)",
    "con Conformal Prediction": "with Conformal Prediction",
    "ROI de selección de zonas": "Zone selection ROI",
    "(escenario simulado)": "(simulated scenario)",
    "Ver código →": "View code →",
    "Brotes de enfermedad detectados tarde en piscinas camaroneras; acciones de bioseguridad costosas y reactivas. Entrenado con": "Disease outbreaks detected late in shrimp ponds; costly, reactive biosafety actions. Trained on",
    "472 registros reales de 174 piscinas": "472 real records from 174 ponds",
    "ETL con resampleo a 15 min y etiquetado de brotes; detección de fallas de sensores.": "ETL with 15-min resampling and outbreak labeling; sensor failure detection.",
    "Detección:": "Detection:",
    "+ Autoencoder de anomalías + ensemble": "+ anomaly Autoencoder + ensemble",
    "Decisión: agente": "Decision: agent",
    "con 5 acciones de mitigación y": "with 5 mitigation actions and",
    "simulador económico": "an economic simulator",
    "de pérdidas evitadas.": "of avoided losses.",
    "API FastAPI (7 endpoints) + dashboard operativo + Redis/nginx vía Docker.": "FastAPI API (7 endpoints) + operational dashboard + Redis/nginx via Docker.",
    "Lead time de alerta": "Alert lead time",
    "Reducción de costo de bioseguridad": "Biosafety cost reduction",
    "(política RL vs. reactiva)": "(RL policy vs. reactive)",
    "Pérdidas evitadas": "Avoided losses",
    "(escenario anual)": "(annual scenario)",
    "Precisión de brotes": "Outbreak precision",
    "Inspección manual lenta y subjetiva en plantaciones de banano; uso excesivo de pesticidas por detección tardía de Sigatoka, Cordana y Pestalotiopsis.": "Slow, subjective manual inspection in banana plantations; excessive pesticide use from late detection of Sigatoka, Cordana and Pestalotiopsis.",
    ", data augmentation y validación 5-fold.": ", data augmentation and 5-fold validation.",
    "Exportación a": "Export to",
    "para inferencia en CPU/edge (finca).": "for CPU/edge inference (farm).",
    "Dockerizado con CI (GitHub Actions) y 24/24 tests.": "Dockerized with CI (GitHub Actions) and 24/24 tests.",
    "Tratamiento focalizado: menos químicos, menos pérdidas de cosecha.": "Targeted treatment: fewer chemicals, less harvest loss.",
    "Tiempo de inferencia": "Inference time",
    "5 s/imagen": "5 s/image",
    "ROI de inspección": "Inspection ROI",
    "Uso de pesticidas": "Pesticide use",
    "En campo real · lo que el modelo detecta": "In the real field · what the model detects",
    "Predicciones reales del modelo sobre hojas de banano": "Real model predictions on banana leaves",
    "Imágenes reales del dataset BananaLSD procesadas por el sistema entrenado — clase predicha con su probabilidad sobre la hoja.": "Real images from the BananaLSD dataset processed by the trained system — predicted class with its probability on the leaf.",
    "Sano ✓": "Healthy ✓",
    "Curvas de entrenamiento": "Training curves",
    "Evolución de loss y accuracy en el entrenamiento con 5-fold CV.": "Loss and accuracy evolution during training with 5-fold CV.",
    "Matriz de confusión": "Confusion matrix",
    "Errores por clase: dónde el modelo confunde y dónde acierta en campo.": "Per-class errors: where the model confuses and where it gets it right in the field.",
    "Estabilidad del rendimiento entre folds; exportación ONNX verificada por tests.": "Performance stability across folds; ONNX export verified by tests.",
    "Explorar el repo →": "Explore the repo →",
    "La transparencia municipal no se mejora con denuncias aisladas sino con evidencia comparable: comparador de municipios pares en compras públicas, rendición y declaraciones patrimoniales.": "Municipal transparency isn't improved by isolated complaints but by comparable evidence: a peer-municipality comparator covering public procurement, accountability and asset declarations.",
    "Índice compuesto ponderado:": "Weighted composite index:",
    "+ compras + rendición + declaraciones.": "+ procurement + accountability + declarations.",
    "Normalización robusta (min-max) y análisis de sensibilidad de ponderación.": "Robust (min-max) normalization and weighting sensitivity analysis.",
    "por tamaño, presupuesto e indicadores socioeconómicos (INEC) para comparaciones justas.": "by size, budget and socioeconomic indicators (INEC) for fair comparisons.",
    "Datos de contratos trazables por municipio; API FastAPI y frontend estático.": "Traceable contract data per municipality; FastAPI API and static frontend.",
    "Comparación por pares": "Peer comparison",
    "Automatizada": "Automated",
    "Componentes": "Components",
    "4 ponderados": "4 weighted",
    "y documentados": "and documented",
    "Explorar los 10 proyectos →": "Explore all 10 projects →",

    /* ---------- Publicaciones ---------- */
    "Working papers, charlas y publicaciones técnicas. Los marcados como «en preparación» se actualizarán con enlaces y fechas reales.": "Working papers, talks and technical publications. Those marked «in preparation» will be updated with real links and dates.",
    "Construcción de índices compuestos en contextos de datos parciales: ponderación, normalización robusta y validación de estabilidad.": "Building composite indices under partial data: weighting, robust normalization and stability validation.",
    "Causal Inference aplicado a valorización urbana: lecciones de Quito y Guayaquil": "Causal Inference applied to urban valorization: lessons from Quito and Guayaquil",
    "Identificación, cuantificación de incertidumbre (conformal prediction) y modelos hedónicos modernos en mercados emergentes.": "Identification, uncertainty quantification (conformal prediction) and modern hedonic models in emerging markets.",
    "Talk · próximamente": "Talk · coming soon",
    "Del notebook a producción: cómo sobrevive un modelo a su primer release": "From notebook to production: how a model survives its first release",
    "MLOps, monitoreo de drift (PSI) y gobernanza: el caso real de sistemas servidos por API con latencia p95 < 100 ms.": "MLOps, drift monitoring (PSI) and governance: the real case of API-served systems with p95 latency < 100 ms.",
    "Reinforcement Learning para decisiones operativas: bioseguridad camaronera": "Reinforcement Learning for operational decisions: shrimp biosafety",
    "De la predicción de brotes al agente PPO con simulador económico: cómo convertir una alerta en una decisión accionable.": "From outbreak prediction to a PPO agent with an economic simulator: turning an alert into an actionable decision.",
    "En preparación": "In preparation",
    "Post técnico": "Technical post",
    "Evidencia reproducible de tiempo y memoria con protocolo controlado.": "Reproducible time and memory evidence with a controlled protocol.",
    "Construyendo este portafolio: Jekyll, design tokens y deploy con GitHub Actions": "Building this portfolio: Jekyll, design tokens and GitHub Actions deploys",
    "Cómo se construyó y despliega este sitio, con imágenes reales de los proyectos.": "How this site is built and deployed, with real project screenshots.",
    "¿Quieres invitarme a hablar o colaborar?": "Want to invite me to speak or collaborate?",
    "Escríbeme →": "Email me →",

    /* ---------- Faltantes del caso de estudio ---------- */
    "Cobertura de intervalos": "Interval coverage",
    "Latencia API": "API latency",
    "Datos + ETL": "Data + ETL",
    "03 · Computer Vision en campo real": "03 · Computer Vision in the real field",
    "04 · Índices compuestos + Civic Tech": "04 · Composite indices + Civic Tech",
    "Benchmarking de procesamiento de datos: Pandas vs. Polars vs. data.table": "Data processing benchmarking: Pandas vs. Polars vs. data.table",
    "Índice de Profesionalización Electoral — metodología y resultados (Ecuador 2026)": "Electoral Professionalization Index — methodology and results (Ecuador 2026)",
    "Simulador": "Simulator"
  };

  /* Atributos: placeholders y aria-labels */
  var ATTR_MAP = {
    "placeholder": {
      "Tu nombre": "Your name",
      "tu@email.com": "you@email.com",
      "Cuéntame sobre tu proyecto, equipo o reto...": "Tell me about your project, team or challenge..."
    },
    "aria-label": {
      "Menú": "Menu",
      "Idioma / Language": "Language / Idioma"
    },
    "title": {
      "Copiar dirección de correo": "Copy email address"
    }
  };

  /* Títulos por página y meta description */
  var TITLES = {
    "Casos de estudio · Jordán Villón · Principal Data Scientist": "Case studies · Jordán Villón · Principal Data Scientist",
    "Proyectos · Jordán Villón · Principal Data Scientist": "Projects · Jordán Villón · Principal Data Scientist",
    "Publicaciones & Talks · Jordán Villón · Principal Data Scientist": "Publications & Talks · Jordán Villón · Principal Data Scientist"
  };
  var DESC = {
    es: "Portafolio profesional de Jordán Villón, Principal Data Scientist: econometría causal, aprendizaje por refuerzo y sistemas de ML escalables aplicados a decisiones de negocio.",
    en: "Professional portfolio of Jordán Villón, Principal Data Scientist: causal econometrics, reinforcement learning and scalable ML systems applied to business decisions."
  };

  /* Mapa inverso EN→ES */
  var REV = {};
  Object.keys(MAP).forEach(function (es) { REV[MAP[es]] = es; });
  var REV_TITLES = {};
  Object.keys(TITLES).forEach(function (es) { REV_TITLES[TITLES[es]] = es; });

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  function currentLang() {
    try { return localStorage.getItem('lang') || 'es'; } catch (e) { return 'es'; }
  }

  function applyTextNodes(dict) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var p = node.parentElement;
      if (!p) return;
      var tag = p.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'SVG' || tag === 'NOSCRIPT') return;
      var lead = (node.data.match(/^\s*/) || [''])[0];
      var trail = (node.data.match(/\s*$/) || [''])[0];
      var rep = dict[norm(node.data)];
      if (rep) node.data = lead + rep + trail;
    });
  }

  function applyAttrs(lang) {
    Object.keys(ATTR_MAP).forEach(function (attr) {
      var dict = lang === 'en' ? ATTR_MAP[attr] : null;
      var rev = {};
      if (lang !== 'en') {
        Object.keys(ATTR_MAP[attr]).forEach(function (es) { rev[ATTR_MAP[attr][es]] = es; });
        dict = rev;
      }
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var v = el.getAttribute(attr);
        if (!v) return;
        var rep = dict[norm(v)];
        if (rep) el.setAttribute(attr, rep);
      });
    });
  }

  function apply(lang) {
    var dict = lang === 'en' ? MAP : REV;
    applyTextNodes(dict);
    applyAttrs(lang);
    document.documentElement.lang = lang;
    var t = document.title;
    if (lang === 'en' && TITLES[t]) document.title = TITLES[t];
    else if (lang === 'es' && REV_TITLES[t]) document.title = REV_TITLES[t];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', DESC[lang]);
    document.querySelectorAll('#lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    window.__lang = lang;
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
    apply(lang);
  }

  window.__lang = currentLang();
  document.addEventListener('DOMContentLoaded', function () {
    var sw = document.getElementById('lang-switch');
    if (sw) {
      sw.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-lang]');
        if (b) setLang(b.getAttribute('data-lang'));
      });
    }
    var saved = currentLang();
    if (saved !== 'es') apply(saved);
    else document.querySelectorAll('#lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === 'es');
    });
  });
})();
