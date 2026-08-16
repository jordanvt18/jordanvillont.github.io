---
layout: figma-page
title: "Casos de estudio"
eyebrow: "Case studies"
sub: "Cuatro proyectos donde el rigor metodológico se traduce en impacto de negocio medible: problema → método → resultados con KPIs → código."
permalink: /case-studies/
---

<!-- ============ RADAR ============ -->
<section class="cs">
  <div class="cs-media">
    <img src="{{ site.baseurl }}/assets/images/projects/radar-dashboard.jpg" alt="Dashboard del Radar de Valorización Urbana: mapa Leaflet con predicciones" loading="lazy" />
  </div>
  <div>
    <div class="eyebrow">01 · Causal Inference + Spatial</div>
    <h3>Radar de Valorización Urbana</h3>
    <p class="cs-problem">
      Valoración inmobiliaria desactualizada y con brechas en Quito y Guayaquil: inversores y
      municipios sin señales de valorización oportunas ni incertidumbre cuantificada.
    </p>
    <ul class="clean">
      <li>Regresión cuantílica con <b>LightGBM</b> + modelo multimodal <b>CNN+MLP</b> con imágenes satelitales.</li>
      <li>Rejilla espacial <b>H3 (res 8)</b> y cross-validation espacial por celda, no aleatoria.</li>
      <li>Incertidumbre calibrada con <b>MC Dropout + Conformal Prediction</b>; explicabilidad con <b>SHAP</b>.</li>
      <li>API FastAPI + simulador de escenarios + frontend Leaflet/Plotly.</li>
    </ul>
    <table class="rtable">
      <tr><th>KPI</th><th>Valor</th></tr>
      <tr><td>Error de valoración (MAE)</td><td><b>~8.4%</b> (baseline hedónico ~12%)</td></tr>
      <tr><td>Cobertura de intervalos</td><td><b>91%</b> con Conformal Prediction</td></tr>
      <tr><td>Latencia API</td><td><b>p95 &lt; 100 ms</b></td></tr>
      <tr><td>ROI de selección de zonas</td><td><b>+15%</b> (escenario simulado)</td></tr>
    </table>
    <div class="pills"><i>Python</i><i>LightGBM</i><i>PyTorch</i><i>H3</i><i>FastAPI</i><i>Leaflet</i><i>Docker</i></div>
    <a class="btn btn-ghost btn-sm" href="https://github.com/jordanvt18/radar-valorizacion-urbana" target="_blank" rel="noopener">Ver código →</a>
  </div>
</section>

<!-- ============ BIOSEGURIDAD ============ -->
<section class="cs flip">
  <div class="cs-media">
    <img src="{{ site.baseurl }}/assets/images/projects/bioseguridad-dashboard.jpg" alt="Dashboard operativo de bioseguridad camarón: alertas y acciones del agente RL" loading="lazy" />
  </div>
  <div>
    <div class="eyebrow">02 · Deep Learning + Reinforcement Learning</div>
    <h3>Bioseguridad Camaronera (DL + RL)</h3>
    <p class="cs-problem">
      Brotes de enfermedad detectados tarde en piscinas camaroneras; acciones de bioseguridad
      costosas y reactivas. Entrenado con <b>472 registros reales de 174 piscinas</b>.
    </p>
    <ul class="clean">
      <li>ETL con resampleo a 15 min y etiquetado de brotes; detección de fallas de sensores.</li>
      <li>Detección: <b>LSTM/Transformer</b> + Autoencoder de anomalías + ensemble <b>RF/OCSVM</b>.</li>
      <li>Decisión: agente <b>PPO</b> con 5 acciones de mitigación y <b>simulador económico</b> de pérdidas evitadas.</li>
      <li>API FastAPI (7 endpoints) + dashboard operativo + Redis/nginx vía Docker.</li>
    </ul>
    <table class="rtable">
      <tr><th>KPI</th><th>Valor</th></tr>
      <tr><td>Lead time de alerta</td><td><b>7–14 días</b></td></tr>
      <tr><td>Reducción de costo de bioseguridad</td><td><b>−22%</b> (política RL vs. reactiva)</td></tr>
      <tr><td>Pérdidas evitadas</td><td><b>~$1.2M</b> (escenario anual)</td></tr>
      <tr><td>Precisión de brotes</td><td><b>F1 ~0.85</b> (out-of-time)</td></tr>
    </table>
    <div class="pills"><i>PyTorch</i><i>Stable Baselines3</i><i>FastAPI</i><i>Redis</i><i>Docker</i></div>
    <a class="btn btn-ghost btn-sm" href="https://github.com/jordanvt18/bioseguridad-camaron-AI" target="_blank" rel="noopener">Ver código →</a>
  </div>
</section>

<!-- ============ BANANO ============ -->
<section class="cs">
  <div class="cs-media">
    <img src="{{ site.baseurl }}/assets/images/projects/banana-plantation.jpg" alt="Plantación real de banano" loading="lazy" />
  </div>
  <div>
    <div class="eyebrow">03 · Computer Vision en campo real</div>
    <h3>Banana Disease Detection</h3>
    <p class="cs-problem">
      Inspección manual lenta y subjetiva en plantaciones de banano; uso excesivo de pesticidas por
      detección tardía de Sigatoka, Cordana y Pestalotiopsis.
    </p>
    <ul class="clean">
      <li><b>ResNet18 con transfer learning</b>, data augmentation y validación 5-fold.</li>
      <li>Exportación a <b>ONNX/TorchScript</b> para inferencia en CPU/edge (finca).</li>
      <li>Dockerizado con CI (GitHub Actions) y 24/24 tests.</li>
      <li>Tratamiento focalizado: menos químicos, menos pérdidas de cosecha.</li>
    </ul>
    <table class="rtable">
      <tr><th>KPI</th><th>Valor</th></tr>
      <tr><td>Tiempo de inferencia</td><td><b>5 s/imagen</b></td></tr>
      <tr><td>ROI de inspección</td><td><b>+150%</b></td></tr>
      <tr><td>Uso de pesticidas</td><td><b>−25%</b></td></tr>
      <tr><td>Validación</td><td><b>5-fold CV</b> · 24/24 tests</td></tr>
    </table>
    <div class="pills"><i>PyTorch</i><i>ResNet18</i><i>ONNX</i><i>Docker</i></div>
    <a class="btn btn-ghost btn-sm" href="https://github.com/jordanvt18/banana-disease-detection" target="_blank" rel="noopener">Ver código →</a>
  </div>
</section>

<!-- LO QUE DETECTA -->
<section class="section section-alt" style="margin-bottom: 56px;">
  <div class="container">
    <div class="eyebrow">En campo real · lo que el modelo detecta</div>
    <h2>Predicciones reales del modelo sobre hojas de banano</h2>
    <p class="section-lead">
      Imágenes reales del dataset BananaLSD procesadas por el sistema entrenado — clase predicha
      con su probabilidad sobre la hoja.
    </p>
    <div class="gallery">
      <figure class="gal"><img src="{{ site.baseurl }}/assets/images/projects/banana-sano.png" alt="Hoja sana detectada" loading="lazy" /><figcaption class="ok">Sano ✓</figcaption></figure>
      <figure class="gal"><img src="{{ site.baseurl }}/assets/images/projects/banana-cordana.png" alt="Detección de Cordana" loading="lazy" /><figcaption class="bad">Cordana</figcaption></figure>
      <figure class="gal"><img src="{{ site.baseurl }}/assets/images/projects/banana-pestalotiopsis.png" alt="Detección de Pestalotiopsis" loading="lazy" /><figcaption class="bad">Pestalotiopsis</figcaption></figure>
      <figure class="gal"><img src="{{ site.baseurl }}/assets/images/projects/banana-sigatoka.png" alt="Detección de Sigatoka" loading="lazy" /><figcaption class="bad">Sigatoka</figcaption></figure>
    </div>
    <div class="grid-3" style="margin-top: 20px;">
      <div class="card"><div class="icon">📉</div><h3>Curvas de entrenamiento</h3><p>Evolución de loss y accuracy en el entrenamiento con 5-fold CV.</p><img src="{{ site.baseurl }}/assets/images/projects/banana-training-curves.png" alt="Curvas de entrenamiento" loading="lazy" style="border-radius:10px;border:1px solid var(--border);" /></div>
      <div class="card"><div class="icon">🔍</div><h3>Matriz de confusión</h3><p>Errores por clase: dónde el modelo confunde y dónde acierta en campo.</p><img src="{{ site.baseurl }}/assets/images/projects/banana-confusion-matrix.png" alt="Matriz de confusión" loading="lazy" style="border-radius:10px;border:1px solid var(--border);" /></div>
      <div class="card"><div class="icon">🧪</div><h3>Validación 5-fold</h3><p>Estabilidad del rendimiento entre folds; exportación ONNX verificada por tests.</p><p style="margin-top:8px;"><a class="more" href="https://github.com/jordanvt18/banana-disease-detection" target="_blank" rel="noopener">Explorar el repo →</a></p></div>
    </div>
  </div>
</section>

<!-- ============ TRANSPARENCIA ============ -->
<section class="cs flip" style="padding-top: 0;">
  <div class="cs-media">
    <div style="position: relative;">
      <img src="{{ site.baseurl }}/assets/images/projects/transparencia-dashboard.jpg" alt="Comparador del Índice de Transparencia Municipal en producción" loading="lazy" />
      <div class="chip chip-c" style="bottom: 18px; left: 18px;"><b class="c2">221 municipios · Ecuador 2025</b></div>
    </div>
  </div>
  <div>
    <div class="eyebrow">04 · Índices compuestos + Civic Tech</div>
    <h3>Índice de Transparencia Municipal</h3>
    <p class="cs-problem">
      La transparencia municipal no se mejora con denuncias aisladas sino con evidencia comparable:
      comparador de municipios pares en compras públicas, rendición y declaraciones patrimoniales.
    </p>
    <ul class="clean">
      <li>Índice compuesto ponderado: <b>Apertura de Datos 30%</b> + compras + rendición + declaraciones.</li>
      <li>Normalización robusta (min-max) y análisis de sensibilidad de ponderación.</li>
      <li><b>Peer groups</b> por tamaño, presupuesto e indicadores socioeconómicos (INEC) para comparaciones justas.</li>
      <li>Datos de contratos trazables por municipio; API FastAPI y frontend estático.</li>
    </ul>
    <table class="rtable">
      <tr><th>KPI</th><th>Valor</th></tr>
      <tr><td>Cobertura</td><td><b>221 municipios (2025)</b></td></tr>
      <tr><td>Comparación por pares</td><td><b>Automatizada</b></td></tr>
      <tr><td>Componentes</td><td><b>4 ponderados</b> y documentados</td></tr>
    </table>
    <div class="pills"><i>Python</i><i>FastAPI</i><i>JSON/CSV</i><i>GitHub Pages</i></div>
    <a class="btn btn-ghost btn-sm" href="https://github.com/jordanvt18/transparency-index-ecuador" target="_blank" rel="noopener">Ver código →</a>
  </div>
</section>

<div class="section" style="padding-top: 0;">
  <div class="container">
    <p><a class="btn btn-ghost" href="{{ site.baseurl }}/projects/">Explorar los 10 proyectos →</a> &nbsp; <a class="btn btn-primary" href="{{ site.baseurl }}/publications/">Ver publicaciones →</a></p>
  </div>
</div>
