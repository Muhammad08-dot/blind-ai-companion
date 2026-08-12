# 👁️ Blind People's AI Companion ( दृष्टि / بصارت )

[![CI/CD Pipeline](https://github.com/Muhammad08-dot/blind-ai-companion/actions/workflows/ci.yml/badge.svg)](https://github.com/Muhammad08-dot/blind-ai-companion/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

Production-Grade Accessibility & Vision AI Assistant empowering visually impaired users with Real-time Scene Description, Currency Detection, OCR Text-to-Speech Reading, Face Recognition, and Obstacle Warning.

---

## 🏗️ System Architecture

```
                                +-------------------+
                                | Next.js 15 PWA UI |
                                |  (WCAG 2.1 AA)    |
                                +---------+---------+
                                          |
                                 High-Speed WebSocket
                                          |
                                +---------v---------+
                                |  FastAPI Gateway  |
                                +----+----+----+----+
                                     |    |    |
        +----------------------------+    |    +----------------------------+
        |                                 |                                 |
+-------v-------+                 +-------v-------+                 +-------v-------+
| Vision-LLM    |                 | Qdrant Vector |                 | Fast Speech   |
| Engine (LLaVA)|                 | (Face Store)  |                 | Synthesizer   |
+---------------+                 +---------------+                 +---------------+
```

---

## 🚀 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/Muhammad08-dot/blind-ai-companion.git
cd blind-ai-companion

# 2. Launch Stack with Docker Compose
docker compose -f infrastructure/docker/docker-compose.dev.yml up --build
```
