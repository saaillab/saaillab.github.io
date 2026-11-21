# SAAIL Lab — Sustainable AI for Agriculture & Intelligent Livelihoods

Official web platform of **SAAIL Lab** at **IIT Madras Zanzibar** and the **Wadhwani School of Data Science and AI (WSDSAI), IIT Madras**, founded and directed by **Dr. Innocent Nyalala** ([inyalala.github.io](https://inyalala.github.io)).

## Highlights & Impact (2026)

- **45+ Peer-Reviewed & Indexed Works** spanning Agricultural Computer Vision, Maternal Medical Imaging, Explainable AI, and Trustworthy African AI
- **1,185+ Google Scholar Citations** · **h-index: 15** · **i10-index: 17**
- **2x Deep Learning Indaba Best Poster Awards**:
  - **DLI 2026 (Lagos, Nigeria):** *DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics* ([Project Page](https://saaillab.github.io/papers/dgs-bench/) | [Repo](https://github.com/saaillab/dgs-bench))
  - **DLI 2025 (Kigali, Rwanda):** *CARA-FMs: Context-Aware and Responsible AI Framework for Foundation Models in East Africa* ([Project Page](https://saaillab.github.io/papers/cara-fm/) | [Repo](https://github.com/saaillab/cara-fm))
- **ICLR 2026 Workshop:** *Unifying Perspectives on Learning Biases* ([Project Page](https://saaillab.github.io/papers/trustworthy-ai-iclr2026/) | [Repo](https://github.com/saaillab/trustworthy-ai-iclr2026))
- **CVPR 2026 Workshop (V4A):** *CLOVES-4603* ([Project Page](https://saaillab.github.io/papers/cloves-4603/) | [Repo](https://github.com/saaillab/CLOVES-4603))

## The CropGuard Research Ecosystem (Papers 1-6)

Umbrella Hub: **[saaillab.github.io/cropguard/](https://saaillab.github.io/cropguard/)**

1. **Paper 1 — CropGuardNet** (*Artificial Intelligence in Agriculture*, under review): Unified 481,574-parameter CNN-Transformer evaluated on 35,420 UUID- and pHash-deduplicated leaf images (`99.17%` accuracy, `5.00 ms` ONNX CPU). [Project Page](https://saaillab.github.io/papers/cropguardnet/) · [GitHub](https://github.com/saaillab/CropGuardNet)
2. **Paper 2 — CropKD-Net** (*Active Study*): Sub-100K parameter INT8 knowledge-distilled edge models. [Project Page](https://saaillab.github.io/papers/cropkd-net/) · [GitHub](https://github.com/saaillab/CropKD-Net)
3. **Papers 3-6**: `CropMambaNet`, `CropDomainNet`, `CropContinual`, and `CropGuard-Severity` — see the [CropGuard Hub](https://saaillab.github.io/cropguard/).

## Architecture & Development

Built with **Astro 5** (`output: "static"`) with dedicated Academic Project Pages (`/papers/<slug>/`) featuring Highwire Press Google Scholar tags, Schema.org `ScholarlyArticle` JSON-LD, interactive figure carousels, and BibTeX copy controls.

```bash
npm install
npm run dev      # local preview
npm run build    # outputs static HTML to ./dist/
```
