---
title: "Casos de estudio"
permalink: /case-studies/
author_profile: true
---

Cuatro proyectos seleccionados por su impacto de negocio, profundidad metodológica y calidad de
ingeniería. Cada caso sigue la misma disciplina: **problema → método → resultados con KPIs → código**.

## Radar de Valorización Urbana

**Sistema de predicción de valorización inmobiliaria para Quito y Guayaquil.**

- **Problema:** valoración inmobiliaria desactualizada y con brechas; decisiones de inversión y
  catastro sin señales de valorización oportunas.
- **Método:** regresión cuantílica con LightGBM + modelo multimodal CNN+MLP (imágenes satelitales);
  rejilla espacial H3 (resolución 8); incertidumbre calibrada con MC Dropout y Conformal Prediction;
  explicabilidad con SHAP.
- **Resultados:**

| KPI | Valor |
|---|---|
| Error de valoración (MAE) | ~8.4% (vs. ~12% baseline hedónico) |
| Cobertura de intervalos | 91% con Conformal Prediction |
| Latencia API | p95 < 100 ms |
| ROI de selección de zonas | +15% (escenario simulado) |

- **Stack:** Python · LightGBM · PyTorch · H3 · FastAPI · Leaflet/Plotly · Docker
- **Código:** [radar-valorizacion-urbana](https://github.com/jordanvt18/radar-valorizacion-urbana)

## Bioseguridad Camaronera (DL + RL)

**Predicción de brotes y recomendación óptima de acciones de bioseguridad en piscinas camaroneras.**

- **Problema:** brotes detectados tarde; acciones de bioseguridad costosas y reactivas.
- **Método:** ETL con resampleo a 15 min; detección con LSTM/Transformer + Autoencoder + ensemble
  RandomForest/One-Class SVM; decisión con agente RL (PPO, 5 acciones) y simulador económico de
  pérdidas evitadas. Entrenado con 472 registros reales de 174 piscinas.
- **Resultados:**

| KPI | Valor |
|---|---|
| Lead time de alerta | 7–14 días |
| Reducción de costo de bioseguridad | −22% (política RL vs. reactiva) |
| Pérdidas evitadas | ~$1.2M (escenario anual) |

- **Stack:** PyTorch · Stable Baselines3 · FastAPI · Redis · Docker
- **Código:** [bioseguridad-camaron-AI](https://github.com/jordanvt18/bioseguridad-camaron-AI)

## Detección de Enfermedades en Banano

**Visión por computador para detección temprana de enfermedades foliares (Sigatoka, Cordana, Pestalotiopsis).**

- **Problema:** inspección manual lenta y subjetiva; uso excesivo de pesticidas por detección tardía.
- **Método:** ResNet18 con transfer learning, data augmentation, validación 5-fold y exportación a
  ONNX/TorchScript para inferencia en edge/CPU.
- **Resultados:**

| KPI | Valor |
|---|---|
| Tiempo de inferencia | 5 s/imagen |
| ROI de inspección | +150% |
| Uso de pesticidas | −25% |
| Tests | 24/24 |

- **Stack:** PyTorch · ResNet18 · ONNX · Docker · GitHub Actions CI
- **Código:** [banana-disease-detection](https://github.com/jordanvt18/banana-disease-detection)

## Índice de Transparencia Municipal

**Comparador de transparencia entre municipios pares de Ecuador (compras públicas, rendición y declaraciones patrimoniales).**

- **Problema:** transparencia municipal difícil de comparar y auditar; anomalías ocultas en contratación pública.
- **Método:** índice compuesto ponderado (Apertura de Datos 30% + compras públicas + rendición +
  declaraciones), normalización robusta y agrupamiento de municipios por similitud (tamaño,
  presupuesto, indicadores socioeconómicos INEC).
- **Resultados:**

| KPI | Valor |
|---|---|
| Cobertura | 221 municipios (2025) |
| Comparación por pares | Automatizada |
| Datos de contratos | JSON trazables por municipio |

- **Stack:** Python · FastAPI · datasets JSON/CSV · frontend estático
- **Código:** [transparency-index-ecuador](https://github.com/jordanvt18/transparency-index-ecuador)

---

## ¿Quieres ver más?

Explora los [10 proyectos del portafolio](/projects/) o el [portafolio v1](/legacy/).
