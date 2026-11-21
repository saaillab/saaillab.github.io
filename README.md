# SAAIL Lab: Sustainable AI for Agriculture & Intelligent Livelihoods

Official web platform of **SAAIL Lab** at the **School of Engineering and Science, Indian Institute of Technology Madras Zanzibar, Tanzania**, founded and directed by **Dr. Innocent Nyalala** ([inyalala.github.io](https://inyalala.github.io)).

## Research Highlights & Impact (2026)

- **42 Cataloged Works:** **20 SAAIL Lab manuscripts & papers** (**15 published/accepted + 5 under peer review**) alongside **22 prior PI publications** (2015–2024).
- **1,270 Google Scholar Citations** (`1,204` since 2021) · **h-index: 15** · **i10-index: 17**
- **2x Deep Learning Indaba Best Poster Awards:**
  - **DLI 2026 (Lagos, Nigeria):** *DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics* ([Project Page](https://saaillab.github.io/papers/dgs-bench/) · [Repo](https://github.com/saaillab/dgs-bench))
  - **DLI 2025 (Kigali, Rwanda):** *Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda (CARA-FM)*, PMLR Vol. 302 ([Project Page](https://saaillab.github.io/papers/cara-fm/) · [Repo](https://github.com/saaillab/cara-fm))
- **ETRI Journal (2026, Q2 SCI):** *Explainable AI for clove quality grading: Benchmarking post hoc XAI and compositional interpretability under domain shift* ([Project Page](https://saaillab.github.io/papers/clove-xai-etri2026/) · [DOI](https://doi.org/10.4218/etrij.2026-0225))
- **CVPR 2026 Workshop (V4A):** *CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading* ([Project Page](https://saaillab.github.io/papers/cloves-4603/) · [Repo](https://github.com/saaillab/CLOVES-4603))
- **ICLR 2026 Trustworthy AI Workshop:** *Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization* ([Project Page](https://saaillab.github.io/papers/trustworthy-ai-iclr2026/) · [Repo](https://github.com/saaillab/trustworthy-ai-iclr2026))
- **CropGuardNet (2026, Under Peer Review):** Unified lightweight 481,574-parameter CNN-Transformer evaluated on 35,420 UUID- and pHash-deduplicated leaf images (`99.17%` accuracy, `5.00 ms` ONNX CPU). ([Project Page](https://saaillab.github.io/papers/cropguardnet/) · [GitHub](https://github.com/saaillab/CropGuardNet))
- **CultureSEEDS East Africa:** Google.org / Google DeepMind research award (**US$100,000**) co-leading Swahili and regional East African cultural AI safety evaluation. ([Project Page](https://saaillab.github.io/projects/cultureseeds/))

## Architecture & Local Development

Built with **Astro 5** (`output: "static"`) with dedicated project websites (`/projects/<slug>/`), Academic Project Pages (`/papers/<slug>/`) featuring Highwire Press Scholar tags and Schema.org `ScholarlyArticle` JSON-LD, interactive conference slideshow albums (`/gallery/`), and unified BibTeX citations.

```bash
npm install
npm run dev      # local development server
npm run build    # outputs static site to ./dist/
```
