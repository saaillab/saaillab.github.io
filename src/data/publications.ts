export interface Author {
  name: string;
  url?: string;
  affiliations?: number[];
  equal?: boolean;
}

export interface FigureItem {
  src: string;
  caption: string;
  alt?: string;
}

export interface MetricHighlight {
  value: string;
  label: string;
  sublabel?: string;
}

export interface TableBlock {
  title: string;
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface Publication {
  slug: string;
  repoSlug?: string;
  title: string;
  shortTitle?: string;
  authors: Author[];
  affiliations: string[];
  venue: string;
  venueShort: string;
  venueUrl?: string;
  year: number;
  month: string;
  dateISO: string;
  category: 'journal' | 'conference' | 'workshop' | 'preprint' | 'series';
  status: string;
  award?: string;
  impactFactor?: string;
  citations?: number;
  openAccess?: boolean;
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  datasetUrl?: string;
  posterUrl?: string;
  tldr: string;
  abstract: string;
  keywords: string[];
  topics: string[];
  seriesId?: 'cropguard';
  seriesNumber?: number;
  teaserImage?: string;
  teaserCaption?: string;
  figures?: FigureItem[];
  highlights?: MetricHighlight[];
  contributions?: string[];
  tables?: TableBlock[];
  bibtex: string;
  apa: string;
}

export const AFFILIATIONS = {
  IITMZ: 'School of Engineering and Science, Indian Institute of Technology Madras Zanzibar, Tanzania',
  WSAI: 'Wadhwani School of Data Science and AI (WSDSAI), Indian Institute of Technology Madras, Chennai, India',
  NAU: 'College of Engineering, Nanjing Agricultural University, Nanjing, China',
  DEAKIN: 'School of Information Technology, Deakin University, Australia',
  CAMBRIDGE: 'Department of Computer Science and Technology, University of Cambridge, UK',
  SALFORD: 'School of Science, Engineering and Environment, University of Salford, UK',
  XZUT: 'Xuzhou University of Technology, Xuzhou, China',
  LINCOLN: 'Lincoln Institute for Agri-Food Technology, University of Lincoln, UK',
};

export interface CropGuardSeriesItem {
  number: number;
  codeName: string;
  title: string;
  targetVenue: string;
  status: string;
  slug?: string;
  repoUrl?: string;
  summary: string;
  tags: string[];
}

export const CROPGUARD_SERIES: CropGuardSeriesItem[] = [
  {
    number: 1,
    codeName: 'CropGuardNet',
    title: 'CropGuardNet: A Unified Lightweight CNN-Transformer Framework with Multi-Scale Attention and Explainable AI for Cross-Crop Leaf Disease Detection',
    targetVenue: 'Artificial Intelligence in Agriculture (Elsevier)',
    status: 'Under Review · Project & Code Live',
    slug: 'cropguardnet',
    repoUrl: 'https://github.com/saaillab/CropGuardNet',
    summary: '481,574-parameter, 1.84 MB MobileNetV3-Small + MSFP + Compact ViT + Crop-Aware Conditioning framework evaluated on 35,420 UUID- & pHash-deduplicated leaf images across 8 crops and 38 classes (99.17% Acc, 0.9874 F1-macro, 5.00 ms ONNX CPU) with four-method XAI faithfulness evaluation.',
    tags: ['481.6K Params', '63.8M FLOPs', '5.00 ms CPU ONNX', '35,420 Unique Images', '4 XAI Families']
  },
  {
    number: 2,
    codeName: 'CropKD-Net',
    title: 'CropKD-Net: Multi-Teacher Knowledge Distillation and Quantization-Aware Compression for Sub-150KB Cross-Crop Edge Leaf Diagnostics',
    targetVenue: 'Computers and Electronics in Agriculture (Elsevier)',
    status: 'Active Experiments',
    slug: 'cropkd-net',
    repoUrl: 'https://github.com/saaillab/CropKD-Net',
    summary: 'Distills heterogeneous CNN and Transformer teachers into an ultra-compact student network with quantization-aware training (QAT) to bridge the INT8 activation sensitivity discovered in Paper 1, targeting sub-150 KB deployment on resource-constrained agricultural smartphones and IoT nodes.',
    tags: ['Knowledge Distillation', 'QAT INT8', 'Sub-150 KB', 'Edge Deployment']
  },
  {
    number: 3,
    codeName: 'CropMambaNet',
    title: 'CropMambaNet: Linear-Complexity Visual State-Space Models for High-Resolution Multi-Scale Foliar Pathology',
    targetVenue: 'CropGuard Research Series · Paper 3',
    status: 'Research Pipeline',
    summary: 'Investigates selective state-space scanning for fine lesion localization across varying leaf scales without quadratic self-attention overhead.',
    tags: ['Vision Mamba', 'State-Space Models', 'High-Res Pathology']
  },
  {
    number: 4,
    codeName: 'CropDomainNet',
    title: 'CropDomainNet: Unsupervised Test-Time Domain Adaptation from Controlled Laboratory Archives to Unconstrained Smallholder Fields',
    targetVenue: 'CropGuard Research Series · Paper 4',
    status: 'Research Pipeline',
    summary: 'Addresses the lab-to-field performance gap observed on PlantDoc and East African smartphone imagery via lightweight leaf-foreground alignment and unsupervised test-time adaptation.',
    tags: ['Domain Adaptation', 'Lab-to-Field', 'East Africa']
  },
  {
    number: 5,
    codeName: 'CropContinual',
    title: 'CropContinual: Replay-Efficient Class-Incremental Learning for Emerging Crop Pathogens Without Catastrophic Forgetting',
    targetVenue: 'CropGuard Research Series · Paper 5',
    status: 'Research Pipeline',
    summary: 'Enables agricultural extension systems to add newly emerging crops and diseases sequentially on-device while preserving diagnostic accuracy on prior species.',
    tags: ['Continual Learning', 'Open-World AI', 'Extension Systems']
  },
  {
    number: 6,
    codeName: 'CropGuard-Severity',
    title: 'CropGuard-Severity: Weakly Supervised Disease Severity Quantification and Actionable Intervention Thresholds',
    targetVenue: 'CropGuard Research Series · Paper 6',
    status: 'Research Pipeline',
    summary: 'Connects faithful lesion-level attribution maps and weakly supervised severity scoring to actionable agronomic spray and quarantine thresholds for smallholder advisors.',
    tags: ['Severity Scoring', 'Weakly Supervised', 'Agronomic Decision Support']
  }
];

export const PUBLICATIONS: Publication[] = [
  // =========================================================================
  // 2026 & CROPGUARD SERIES
  // =========================================================================
  {
    slug: 'cropguardnet',
    repoSlug: 'CropGuardNet',
    title: 'CropGuardNet: A Unified Lightweight CNN-Transformer Framework with Multi-Scale Attention and Explainable AI for Cross-Crop Leaf Disease Detection',
    shortTitle: 'CropGuardNet (Cross-Crop Leaf Disease AI)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Artificial Intelligence in Agriculture (Elsevier)',
    venueShort: 'Artificial Intelligence in Agriculture · 2026',
    venueUrl: 'https://www.sciencedirect.com/journal/artificial-intelligence-in-agriculture',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-18',
    category: 'series',
    status: 'Under Review (AIIA) · Paper 1 of CropGuard Series',
    codeUrl: 'https://github.com/saaillab/CropGuardNet',
    datasetUrl: 'https://github.com/saaillab/CropGuardNet#dataset-deduplication',
    seriesId: 'cropguard',
    seriesNumber: 1,
    teaserImage: '/images/papers/cropguardnet/architecture.png',
    teaserCaption: 'CropGuardNet unifies deterministic CLAHE-Gaussian-high-pass preprocessing, a half-width MobileNetV3-Small (α = 0.50) stem, a 3-branch dilated Multi-Scale Feature Pyramid (r ∈ {1, 2, 4}), depthwise separable refinement, SE attention, a 2-head Compact ViT, dual-path pooling, and crop-aware conditioning in 481,574 parameters (1.84 MB FP32, 63.8M FLOPs, 5.00 ms CPU ONNX).',
    tldr: 'A 481,574-parameter (1.84 MB, 5.00 ms CPU ONNX) conditioned CNN-Transformer evaluated on 35,420 UUID- and pHash-deduplicated leaf images across 8 crops and 38 classes (99.17% accuracy, 0.9874 F1-macro), purging 80,238 duplicates and auditing four XAI families.',
    abstract: 'Crop diseases threaten food security, yet deep detectors remain single-crop, heavyweight, or opaque for edge deployment. We propose CropGuardNet, a lightweight Convolutional Neural Network (CNN) and Transformer framework on MobileNetV3-Small (alpha = 0.50) with 481,574 parameters, 1.84 MB FP32 weights, and 63.8M FLOPs, running at 5.00 ms (200.0 FPS) in single-thread CPU ONNX inference. It unites a dilated multi-scale feature pyramid, depthwise separable refinement, squeeze-and-excitation attention, a two-head Transformer, dual-path pooling, crop-aware conditioning, and four explainable AI (XAI) methods: Grad-CAM++, LayerCAM, LIME, and GradientSHAP. After purging 80,238 PlantVillage duplicates via specimen Universally Unique Identifier (UUID) grouping and 64-bit perceptual hash auditing, evaluation on 35,420 unique images spanning 38 classes and 8 crops (n = 5,314 test) reaches 99.17% accuracy, 0.9874 F1-macro, 0.9914 Matthews correlation coefficient (MCC), and 0.9998 AUC-ROC, leading F1-macro across seven models at 3.2x-279.1x fewer parameters than five baselines and 6.0x larger than LeafXNet at 18.1x fewer FLOPs. Top models match on 35 non-Rice classes, whereas species conditioning eliminates cross-crop errors, supports 99.79% automatic crop routing, and lifts minority Rice accuracy to 94.44%. CropGuardNet leads 20-regime corruptions at 83.61% mean accuracy (severe Wilcoxon p = 0.0020 vs. LeafXNet), 8-fold leave-one-crop-out probing (n = 7,072) at 81.22% accuracy and 0.8879 binary AUC-ROC, and XAI faithfulness with LayerCAM Deletion AUC 0.7262 and GradientSHAP Insertion AUC 0.9259. On PlantDoc field images, guided Mode A1 reaches 40.63%-45.91% zero-shot accuracy vs. 16.06%-17.58% unguided, 60.62% unmasked vs. 62.18% masked head adaptation under Mode A1-Auto (tying ResNet-50 behind LeafXNet at 63.73%), and 62.20% Enhanced or 63.66% Raw RGB accuracy after 20-epoch tuning.',
    keywords: ['plant disease detection', 'lightweight CNN', 'Vision Transformer', 'explainable AI', 'multi-crop classification', 'data deduplication', 'smart agriculture'],
    topics: ['CropGuard Series', 'Agriculture', 'Deep Learning', 'Computer Vision', 'Responsible AI', 'Benchmarking'],
    highlights: [
      { value: '481,574', label: 'Parameters', sublabel: '1.84 MB FP32 · 63.8M FLOPs' },
      { value: '5.00 ms', label: 'CPU ONNX Latency', sublabel: '200.0 FPS single-thread' },
      { value: '99.17%', label: 'Test Accuracy', sublabel: '0.9874 F1-macro · n = 5,314' },
      { value: '80,238', label: 'Duplicates Purged', sublabel: 'UUID + 64-bit pHash audit' },
      { value: '83.61%', label: '20-Corruption Mean', sublabel: '+18.28 pp vs. LeafXNet' },
      { value: '99.79%', label: 'Auto Crop Routing', sublabel: 'Zero cross-crop FP (Mc = 0)' }
    ],
    contributions: [
      'Designed a compact 481,574-parameter hybrid CNN-Transformer combining parallel dilated multi-scale convolutions (r in {1, 2, 4}), depthwise separable refinement, squeeze-and-excitation recalibration, and dual-path GAP fusion at 63.8M FLOPs.',
      'Introduced a learnable 8-species crop-aware conditioning module eliminating cross-crop false positives under guided inference and supporting two-stage automatic crop routing (Mode A1-Auto) at 99.79% species accuracy.',
      'Constructed a leak-free multi-crop benchmark of 35,420 unique leaf images across 38 classes and 8 crops by purging 80,238 offline-augmented PlantVillage duplicate copies via specimen UUID grouping and auditing cross-split similarity via 64-bit DCT perceptual hashing.',
      'Evaluated four complementary XAI families (Grad-CAM++, LayerCAM, LIME, GradientSHAP) through 20-step Deletion/Insertion faithfulness curves alongside 20-regime corruption stress tests, 8-fold leave-one-crop-out probing, and external PlantDoc field adaptation.'
    ],
    tables: [
      {
        title: 'Unified 8-Crop, 38-Class Benchmark Comparison (Test n = 5,314)',
        caption: 'CropGuardNet ranks first in 38-class F1-Macro, Macro-Precision, and Macro-Recall while achieving the lowest FLOPs across all seven architectures.',
        headers: ['Model', 'Params', 'Size (MB)', 'FLOPs (M)', 'Acc (%)', 'F1-Macro', 'MCC', 'CPU Lat. (ms)'],
        rows: [
          ['VGG-16', '134,416,230', '512.76', '30,932.6', '97.95', '0.9703', '0.9787', '414.72 ± 17.82'],
          ['ResNet-50', '23,585,894', '89.97', '8,174.4', '99.13', '0.9751', '0.9910', '78.03 ± 2.38'],
          ['MangoXNet', '4,426,374', '16.89', '273.8', '99.15', '0.9746', '0.9912', '16.36 ± 0.75'],
          ['EfficientNet-B0', '4,056,226', '15.47', '769.2', '99.21', '0.9834', '0.9918', '30.79 ± 1.78'],
          ['MobileNetV3-Small', '1,556,806', '5.94', '111.1', '99.23', '0.9740', '0.9920', '11.38 ± 0.53'],
          ['LeafXNet', '79,782', '0.30', '1,156.6', '97.27', '0.9558', '0.9717', '22.64 ± 0.55'],
          ['CropGuardNet (Ours)', '481,574', '1.84', '63.8', '99.17', '0.9874', '0.9914', '11.49 (PyTorch) / 5.00 (ONNX)']
        ]
      },
      {
        title: 'Layer-by-Layer Architecture & Trainable Parameter Breakdown',
        caption: 'Total trainable parameters: 481,574 (1.84 MB FP32, 0.92 MB FP16, 0.46 MB raw INT8).',
        headers: ['Stage / Module', 'Configuration', 'Output Shape', 'Params', 'Share (%)'],
        rows: [
          ['1. Backbone', 'MobileNetV3-Small (α = 0.50, features-only, stride 32)', 'B × 288 × 7 × 7', '272,288', '56.54'],
          ['2. MSFP Pyramid', '3 parallel branches (1×1; 3×3 r=2; 3×3 r=4) + 1×1 fuse', 'B × 32 × 7 × 7', '178,432', '37.05'],
          ['3. DSR Refinement', 'DWConv 3×3 (288) + PWConv 1×1 (1,024) + BN + SiLU', 'B × 32 × 7 × 7', '1,376', '0.29'],
          ['4. SE Attention', 'GAP + bias-free FC 32→8→32 + Sigmoid', 'B × 32 × 7 × 7', '512', '0.11'],
          ['5. Compact ViT', 'PosEmbed (1,568) + 2-head MHSA (4,224) + FFN + 3×LN', 'B × 32 × 7 × 7', '10,176', '2.11'],
          ['6. Dual-Path Fusion', 'GAP(F_SE) || GAP(F_Trans) parameter-free pooling', 'B × 64', '0', '0.00'],
          ['7. Crop Conditioning', 'Embed(8×16) + Linear 80→64 + SiLU + Drop(0.1)', 'B × 64', '5,312', '1.10'],
          ['8. Classifier Head', 'Linear 64→128 + SiLU + BN + Drop(0.3) + Linear 128→38', 'B × 38', '13,478', '2.80'],
          ['Total', 'Complete CropGuardNet (1.84 MB FP32)', 'B × 38', '481,574', '100.00']
        ]
      },
      {
        title: 'Quantitative XAI Faithfulness (n = 80 Stratified Images, 10 per Crop)',
        caption: 'Evaluated at F_SE (32 × 7 × 7) over 20 steps against a 21×21 Gaussian blur baseline (σ = 10.0) under Mode A1.',
        headers: ['XAI Method', 'Mechanism Family', 'Deletion AUC (↓)', 'Insertion AUC (↑)'],
        rows: [
          ['LayerCAM', 'Element-wise Multi-Scale Spatial Gradients', '0.7262 ± 0.2705', '0.9181 ± 0.1175'],
          ['Grad-CAM++', 'Higher-Order Gradient Weights', '0.7289 ± 0.2643', '0.9214 ± 0.1141'],
          ['GradientSHAP', 'Game-Theoretic Path Gradients', '0.7446 ± 0.2515', '0.9259 ± 0.1013'],
          ['LIME', 'SLIC Superpixel Surrogate Regression', '0.8492 ± 0.1782', '0.9039 ± 0.1386']
        ]
      }
    ],
    figures: [
      { src: '/images/papers/cropguardnet/fig08_pareto_efficiency.png', caption: 'Multi-objective Pareto efficiency frontier across trainable parameters, FLOPs, and PyTorch vs. single-thread ONNX Runtime CPU latency (5.00 ms / 200 FPS).' },
      { src: '/images/papers/cropguardnet/fig01_dataset_distribution.png', caption: 'UUID-deduplicated 8-crop, 38-class dataset distribution (N = 35,420 unique leaf images after purging 80,238 PlantVillage duplicates).' },
      { src: '/images/papers/cropguardnet/fig02_per_crop_grouped_bars.png', caption: 'Per-crop within-crop accuracy and open-set macro-F1 (F1_open) showing zero cross-crop leakage under CropGuardNet conditioning.' },
      { src: '/images/papers/cropguardnet/fig_robustness_curves.png', caption: 'Accuracy degradation trajectories across 20 environmental perturbation regimes (Gaussian noise, blur, brightness shift, occlusion, JPEG).' },
      { src: '/images/papers/cropguardnet/fig_crosscrop_loco.png', caption: '8-fold Leave-One-Crop-Out cross-species transfer (n = 7,072 balanced cohort): +13.96 pp gain over random-neck baseline (p = 0.0078).' },
      { src: '/images/papers/cropguardnet/fig_plantdoc_field_transfer.png', caption: 'External laboratory-to-field transfer and adaptation on PlantDoc wild field images (zero-shot, few-shot head adaptation, and 20-epoch fine-tuning).' },
      { src: '/images/papers/cropguardnet/fig_xai_deletion_insertion.png', caption: 'Quantitative XAI faithfulness curves: 20-step Deletion and Insertion trajectories relative to blur baselines and 30-image controls.' },
      { src: '/images/papers/cropguardnet/fig_xai_master_8crops.png', caption: 'Four-method XAI visual attribution comparison (Grad-CAM++, LayerCAM, LIME, GradientSHAP) across all eight crop species.' },
      { src: '/images/papers/cropguardnet/fig05_confusion_matrix_38class.png', caption: 'Row-normalized 38 × 38 confusion matrix on the held-out test split (n = 5,314).' },
      { src: '/images/papers/cropguardnet/fig09_tsne_embeddings.png', caption: '2D t-SNE projection of conditioned 64-D embeddings across all 38 crop-disease classes.' }
    ],
    bibtex: `@article{nyalala2026cropguardnet,
  title={CropGuardNet: A Unified Lightweight CNN-Transformer Framework with Multi-Scale Attention and Explainable AI for Cross-Crop Leaf Disease Detection},
  author={Nyalala, Innocent},
  journal={Artificial Intelligence in Agriculture},
  year={2026},
  note={Under Review; CropGuard Research Series, Paper 1},
  url={https://saaillab.github.io/papers/cropguardnet/}
}`,
    apa: `Nyalala, I. (2026). CropGuardNet: A Unified Lightweight CNN-Transformer Framework with Multi-Scale Attention and Explainable AI for Cross-Crop Leaf Disease Detection. Artificial Intelligence in Agriculture (Under Review). https://saaillab.github.io/papers/cropguardnet/`
  },

  {
    slug: 'cropkd-net',
    repoSlug: 'CropKD-Net',
    title: 'CropKD-Net: Multi-Teacher Knowledge Distillation and Quantization-Aware Compression for Sub-150KB Cross-Crop Edge Leaf Diagnostics',
    shortTitle: 'CropKD-Net (Edge Knowledge Distillation)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Computers and Electronics in Agriculture (Pipeline · CropGuard Series Paper 2)',
    venueShort: 'CropGuard Series · Paper 2 (Active)',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-20',
    category: 'series',
    status: 'Active Experiments · Paper 2 of CropGuard Series',
    codeUrl: 'https://github.com/saaillab/CropKD-Net',
    seriesId: 'cropguard',
    seriesNumber: 2,
    tldr: 'Paper 2 of the CropGuard Research Series: distills multi-teacher CNN and Transformer plant pathology representations via Quantization-Aware Training (QAT) into an ultra-compact student network for sub-150 KB INT8 smartphone and microcontroller deployment.',
    abstract: 'Paper 1 (CropGuardNet) revealed a key bottleneck for ultra-low-bit edge deployment in agricultural computer vision: while post-training static INT8 quantization collapses parity accuracy on hybrid SiLU-Transformer architectures due to asymmetric activation clipping, unfactorized tiny CNNs incur over 1.15 GFLOPs and slow sequential CPU execution. CropKD-Net addresses this gap through heterogeneous multi-teacher knowledge distillation paired with Quantization-Aware Training (QAT) on the leak-free 35,420-image, 8-crop, 38-class CropGuard benchmark. By aligning spatial lesion attention, feature-pyramid geometry, and crop-conditioned logit calibration during student optimization, CropKD-Net bridges high-accuracy multi-crop teachers with sub-150 KB INT8 ONNX execution for offline smallholder diagnostic devices.',
    keywords: ['knowledge distillation', 'quantization-aware training', 'INT8 edge AI', 'plant disease detection', 'model compression', 'CropGuard'],
    topics: ['CropGuard Series', 'Agriculture', 'Deep Learning', 'Edge Computing', 'Benchmarking'],
    contributions: [
      'Directly resolves the SiLU, LayerNorm, and attention clipping bottleneck under post-training static INT8 quantization identified in CropGuardNet.',
      'Employs multi-teacher logit and intermediate feature distillation over the identical UUID- and 64-bit pHash-deduplicated 35,420-image multi-crop partition.',
      'Optimizes compact depthwise student topologies with Quantization-Aware Training (QAT) for sub-150 KB INT8 ONNX deployment.'
    ],
    bibtex: `@misc{nyalala2026cropkdnet,
  title={CropKD-Net: Multi-Teacher Knowledge Distillation and Quantization-Aware Compression for Sub-150KB Cross-Crop Edge Leaf Diagnostics},
  author={Nyalala, Innocent},
  year={2026},
  howpublished={SAAIL Lab CropGuard Research Series, Paper 2},
  url={https://saaillab.github.io/papers/cropkd-net/}
}`,
    apa: `Nyalala, I. (2026). CropKD-Net: Multi-Teacher Knowledge Distillation and Quantization-Aware Compression for Sub-150KB Cross-Crop Edge Leaf Diagnostics. SAAIL Lab CropGuard Research Series (Paper 2). https://saaillab.github.io/papers/cropkd-net/`
  },

  {
    slug: 'dgs-bench',
    repoSlug: 'dgs-bench',
    title: 'DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics — A Cassava Case Study',
    shortTitle: 'DGS-Bench (DLI 2026 Best Poster)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Surabhi Gudla', affiliations: [1] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Deep Learning Indaba 2026, Pan-Atlantic University, Lagos, Nigeria',
    venueShort: 'Deep Learning Indaba 2026',
    venueUrl: 'https://deeplearningindaba.com/2026/',
    year: 2026,
    month: 'Aug',
    dateISO: '2026-08-08',
    category: 'conference',
    status: 'Published · 18/114 Accepted (15.82%)',
    award: 'Best Poster Award — Deep Learning Indaba 2026 (Lagos, Nigeria)',
    openAccess: true,
    doi: '10.13140/rg.2.2.12603.17448',
    paperUrl: 'https://doi.org/10.13140/rg.2.2.12603.17448',
    posterUrl: 'https://doi.org/10.13140/RG.2.2.21909.90088',
    codeUrl: 'https://github.com/saaillab/dgs-bench',
    teaserImage: '/images/papers/posters/dli-2026-lagos-poster.webp',
    teaserCaption: 'DGS-Bench poster presented at Deep Learning Indaba 2026, Lagos, Nigeria — Winner of the Best Poster Award (18 accepted out of 114 submissions; 15.82% acceptance rate).',
    tldr: 'Demonstrates that aggregate accuracy hides catastrophic minority-disease failures under field shift in African cassava diagnostics, introducing balanced deployment-gap evaluation metrics (Best Poster Award, DLI 2026).',
    abstract: 'Aggregate classification accuracy on imbalanced agricultural datasets routinely hides silent failures on minority but economically devastating plant diseases. We introduce DGS-Bench, a Deployment Gap and Sensitivity Benchmark tailored for African agricultural AI, grounded in a multi-condition cassava pathology case study. Evaluating models across controlled versus real smallholder field acquisitions reveals that models boasting high top-line accuracy frequently suffer sharp drops in macro-averaged recall and per-class F1 on rare pathologies. DGS-Bench establishes a standardized evaluation protocol combining balanced per-class metrics, deployment gap quantification, and calibration checks, earning the Best Poster Award at Deep Learning Indaba 2026 (one of 18 papers accepted out of 114 submissions, 15.82% acceptance rate).',
    keywords: ['DGS-Bench', 'African agricultural AI', 'cassava disease', 'balanced metrics', 'deployment gap', 'Deep Learning Indaba'],
    topics: ['Agriculture', 'Benchmarking', 'Responsible AI', 'Cassava', 'East Africa'],
    highlights: [
      { value: '15.82%', label: 'Acceptance Rate', sublabel: '18 of 114 submissions' },
      { value: 'Best Poster', label: 'DLI 2026 Award', sublabel: '2nd consecutive DLI win' },
      { value: 'Balanced', label: 'Evaluation Protocol', sublabel: 'Macro-F1 · Per-class recall' }
    ],
    figures: [
      { src: '/images/papers/posters/dli-2026-lagos-poster.webp', caption: 'Full DGS-Bench conference poster presented at Deep Learning Indaba 2026, Lagos.' },
      { src: '/images/papers/posters/dli-2026-award-photo.webp', caption: 'Dr. Innocent Nyalala presenting DGS-Bench at Pan-Atlantic University, Lagos.' },
      { src: '/images/papers/posters/dli-2026-award-graphic.webp', caption: 'IIT Madras Zanzibar official announcement recognizing the DLI 2026 Best Poster Award.' }
    ],
    bibtex: `@inproceedings{nyalala2026dgsbench,
  title={DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics -- A Cassava Case Study},
  author={Nyalala, Innocent and Gudla, Surabhi and Vincent, Patrick},
  booktitle={Deep Learning Indaba 2026},
  address={Lagos, Nigeria},
  year={2026},
  month={August},
  doi={10.13140/rg.2.2.12603.17448},
  note={Best Poster Award; 18 of 114 accepted}
}`,
    apa: `Nyalala, I., Gudla, S., & Vincent, P. (2026, August). DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics — A Cassava Case Study. Deep Learning Indaba 2026, Lagos, Nigeria. https://doi.org/10.13140/rg.2.2.12603.17448`
  },

  {
    slug: 'cloves-4603',
    repoSlug: 'CLOVES-4603',
    title: 'CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading',
    shortTitle: 'CLOVES-4603 (CVPR 2026 V4A)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'CVPR 2026 — 7th Workshop on Vision for Agriculture (CV4A / V4A), Denver, USA',
    venueShort: 'CV4A @ CVPR 2026',
    venueUrl: 'https://cvpr.thecvf.com/Conferences/2026',
    year: 2026,
    month: 'May',
    dateISO: '2026-05-15',
    category: 'workshop',
    status: 'Accepted & Published · CVPR 2026 Workshop',
    openAccess: true,
    paperUrl: 'https://openreview.net/pdf?id=V1UbAtXS4M',
    codeUrl: 'https://github.com/saaillab/CLOVES-4603',
    datasetUrl: 'https://github.com/saaillab/CLOVES-4603',
    teaserImage: '/images/papers/posters/cvpr-cloves-2026.webp',
    teaserCaption: 'CLOVES-4603 benchmark graphic for the 7th Workshop on Vision for Agriculture at CVPR 2026: 4,603 standardized ZSTC clove images achieving 99.67% deep learning accuracy and 92.94% classical texture-fusion SVM accuracy.',
    tldr: 'Introduces CLOVES-4603, the first public 4,603-image benchmark for Zanzibar clove grading across four commercial grades, comparing classical texture pipelines (92.94%) against fine-tuned deep architectures (99.67%).',
    abstract: 'We introduce CLOVES-4603, the first public benchmark dataset for automated clove quality grading, comprising 4,603 standardized 224x224 RGB images spanning four commercial grades collected at the Zanzibar State Trading Corporation (ZSTC). We benchmark classical texture pipelines (HOG+SVM, GLCM+GLRLM+LBP fusion) against fine-tuned deep learning models including ResNet-50, MobileNetV3, and a frozen DINOv2 vision transformer. ResNet-50 achieves 99.67% accuracy on the test set, whereas texture-fusion SVM reaches 92.94%, providing a strong and deployment-friendly classical baseline. This benchmark informs real-world deployment trade-offs between accuracy, latency, and computational cost in agricultural settings where infrastructure is limited.',
    keywords: ['CLOVES-4603', 'clove quality grading', 'Zanzibar', 'texture features', 'deep learning', 'CVPR 2026', 'vision for agriculture'],
    topics: ['Agriculture', 'Computer Vision', 'Zanzibar', 'Benchmarking', 'Deep Learning'],
    highlights: [
      { value: '4,603', label: 'Curated Images', sublabel: '4 ZSTC commercial grades' },
      { value: '99.67%', label: 'ResNet-50 Accuracy', sublabel: '99.35% MobileNetV3-Large' },
      { value: '92.94%', label: 'Texture-Fusion SVM', sublabel: 'GLCM + GLRLM + LBP' }
    ],
    tables: [
      {
        title: 'CLOVES-4603 Benchmark Accuracy Summary',
        headers: ['Method / Architecture', 'Test Accuracy (%)', 'Deployment Profile'],
        rows: [
          ['ResNet-50 (Fine-Tuned)', '99.67%', 'Highest overall accuracy'],
          ['MobileNetV3-Large (Fine-Tuned)', '99.35%', 'Lightweight edge-friendly CNN'],
          ['Texture-Fusion SVM (GLCM+GLRLM+LBP)', '92.94%', 'Zero-GPU classical baseline']
        ]
      }
    ],
    bibtex: `@inproceedings{nyalala2026cloves4603,
  title={CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading},
  author={Nyalala, Innocent and Vincent, Patrick Ndowo},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops -- Vision for Agriculture (CV4A)},
  year={2026},
  url={https://openreview.net/pdf?id=V1UbAtXS4M}
}`,
    apa: `Nyalala, I., & Vincent, P. N. (2026). CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops (V4A). https://openreview.net/pdf?id=V1UbAtXS4M`
  },

  {
    slug: 'trustworthy-ai-iclr2026',
    repoSlug: 'trustworthy-ai-iclr2026',
    title: 'Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization',
    shortTitle: 'Trustworthy AI & Bias Unification (ICLR 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'ICLR 2026 Workshop on Principled Design for Trustworthy AI: Interpretability, Robustness, and Safety across Modalities, Rio de Janeiro, Brazil',
    venueShort: 'ICLR 2026 Workshop',
    venueUrl: 'https://iclr.cc/Conferences/2026',
    year: 2026,
    month: 'Apr',
    dateISO: '2026-04-27',
    category: 'workshop',
    status: 'Accepted & Published · ICLR 2026 Workshop',
    openAccess: true,
    citations: 1,
    paperUrl: 'https://openreview.net/forum?id=RCEEHTbSDk',
    codeUrl: 'https://github.com/saaillab/trustworthy-ai-iclr2026',
    teaserImage: '/images/papers/posters/iclr-2026-trustworthy-ai.webp',
    teaserCaption: 'Accepted paper at the ICLR 2026 Trustworthy AI Workshop unifying fairness, robustness, and out-of-distribution generalization via data-centric bias intervention.',
    tldr: 'Proposes a unified data-centric intervention that jointly improves algorithmic fairness, corruption robustness, and cross-domain generalization in agricultural and resource-constrained settings.',
    abstract: 'Fairness, robustness, and out-of-distribution generalization are typically studied in isolation despite sharing common roots in dataset acquisition bias, spurious shortcuts, and representational imbalance. We propose a unified data-centric framework that diagnoses and intervenes on learning biases prior to model fitting, demonstrating simultaneous gains across fairness disparities, environmental perturbations, and cross-domain transfer in resource-constrained deployments.',
    keywords: ['trustworthy AI', 'fairness', 'robustness', 'generalization', 'data-centric AI', 'ICLR 2026', 'learning biases'],
    topics: ['Responsible AI', 'Deep Learning', 'East Africa'],
    bibtex: `@inproceedings{vincent2026unifying,
  title={Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization},
  author={Vincent, Patrick Ndowo and Nyalala, Innocent},
  booktitle={ICLR 2026 Workshop on Principled Design for Trustworthy AI: Interpretability, Robustness, and Safety across Modalities},
  address={Rio de Janeiro, Brazil},
  year={2026},
  url={https://openreview.net/forum?id=RCEEHTbSDk}
}`,
    apa: `Vincent, P. N., & Nyalala, I. (2026). Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization. In ICLR 2026 Workshop on Principled Design for Trustworthy AI, Rio de Janeiro. https://openreview.net/forum?id=RCEEHTbSDk`
  },

  {
    slug: 'cara-fm',
    repoSlug: 'cara-fm',
    title: 'Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda',
    shortTitle: 'CARA-FM Framework (PMLR 2026 / DLI Best Poster)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Nirav Bhatt', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Deep Learning Indaba 2025 Research Track — Proceedings of Machine Learning Research (PMLR Vol. 302, pp. 1–11, 2026)',
    venueShort: 'PMLR Vol. 302 · DLI 2025/2026',
    venueUrl: 'https://proceedings.mlr.press/v302/nyalala26a.html',
    year: 2026,
    month: 'Jan',
    dateISO: '2026-01-20',
    category: 'conference',
    status: 'Published in PMLR Vol. 302 · Oral & Poster',
    award: 'Best Poster Award (Publication & Dataset Category) — Deep Learning Indaba 2025, Kigali',
    openAccess: true,
    paperUrl: 'https://proceedings.mlr.press/v302/nyalala26a.html',
    codeUrl: 'https://github.com/saaillab/cara-fm',
    teaserImage: '/images/papers/posters/CARA-POSTER.jpeg',
    teaserCaption: 'Award-winning CARA-FM poster presented at Deep Learning Indaba 2025 in Kigali, Rwanda (published in PMLR Vol. 302, 2026) and spotlighted by AI4Africa.',
    tldr: 'Introduces the four-pillar CARA-FM framework (Community-Driven Data, Indigenous Knowledge Systems, Edge-First Architecture, Participatory Governance) for East African agricultural foundation models.',
    abstract: 'East African agriculture supports more than 175 million people yet faces mounting challenges from climate variability, compute scarcity, and information barriers. Current foundation models fail to address the region\'s computational constraints, linguistic diversity spanning over 200 languages, and distinct ecological knowledge systems. We present CARA-FM, a theoretical framework comprising four pillars: Community-Driven Data Architecture, Indigenous Knowledge Systems, Edge-First Model Design, and Participatory Governance. We define multi-dimensional evaluation metrics spanning technical, agronomic, and cultural criteria to guide foundation model research under severe resource constraints.',
    keywords: ['CARA-FM', 'foundation models', 'East African agriculture', 'responsible AI', 'indigenous knowledge', 'PMLR', 'Deep Learning Indaba'],
    topics: ['Foundation Models', 'Responsible AI', 'Agriculture', 'East Africa'],
    highlights: [
      { value: 'PMLR 302', label: 'Proceedings', sublabel: 'nyalala26a (2026)' },
      { value: 'Best Poster', label: 'DLI 2025 Award', sublabel: 'Kigali, Rwanda' },
      { value: '4 Pillars', label: 'CARA-FM Architecture', sublabel: 'Data · Knowledge · Edge · Gov' }
    ],
    figures: [
      { src: '/images/papers/posters/CARA-POSTER.jpeg', caption: 'Full CARA-FMs research poster presented at Deep Learning Indaba 2025, Kigali, Rwanda.' },
      { src: '/images/papers/posters/cara-fm-dli-spotlight.webp', caption: 'AI4Africa Weekly Research Spotlight highlighting the CARA-FM framework.' }
    ],
    bibtex: `@inproceedings{nyalala2026carafm,
  title={Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda},
  author={Nyalala, Innocent and Bhatt, Nirav},
  booktitle={Deep Learning Indaba 2025 Research Track, Proceedings of Machine Learning Research (PMLR)},
  volume={302},
  pages={1--11},
  year={2026},
  url={https://proceedings.mlr.press/v302/nyalala26a.html}
}`,
    apa: `Nyalala, I., & Bhatt, N. (2026). Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda. Proceedings of Machine Learning Research (PMLR), 302, 1–11. https://proceedings.mlr.press/v302/nyalala26a.html`
  },

  {
    slug: 'clove-xai-etri2026',
    title: 'Explainable AI for Clove Quality Grading: Benchmarking Post Hoc XAI and Compositional Interpretability Under Domain Shift',
    shortTitle: 'Explainable AI for Clove Quality Grading (ETRI 2026)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'ETRI Journal',
    venueShort: 'ETRI Journal · 2026',
    year: 2026,
    month: 'Jun',
    dateISO: '2026-06-01',
    category: 'journal',
    status: 'Published · Journal Article',
    tldr: 'Benchmarks complementary post hoc XAI methods against compositional interpretability for Zanzibar clove grading under acquisition domain shift.',
    abstract: 'High classification accuracy alone is insufficient for agricultural commodity inspection where grading directly dictates smallholder farmer income. Focusing on Zanzibar clove quality grading, we benchmark multiple post hoc attribution families alongside compositional interpretability mechanisms under realistic illumination and background domain shift, demonstrating why relying on a single visual saliency method overlooks shortcut reliance and failure modes.',
    keywords: ['explainable AI', 'clove quality grading', 'post hoc XAI', 'compositional interpretability', 'domain shift', 'Zanzibar'],
    topics: ['Responsible AI', 'Agriculture', 'Computer Vision', 'Zanzibar'],
    bibtex: `@article{nyalala2026xai,
  title={Explainable {AI} for Clove Quality Grading: Benchmarking Post Hoc {XAI} and Compositional Interpretability Under Domain Shift},
  author={Nyalala, Innocent and Ndowo, Patrick V.},
  journal={ETRI Journal},
  year={2026}
}`,
    apa: `Nyalala, I., & Ndowo, P. V. (2026). Explainable AI for Clove Quality Grading: Benchmarking Post Hoc XAI and Compositional Interpretability Under Domain Shift. ETRI Journal.`
  },

  {
    slug: 'zstc-clove-v1',
    repoSlug: 'zstc-clove-v1',
    title: 'Deep Learning Feasibility Study for Automated Clove Quality Classification Using CNN Architectures on a Novel Zanzibar Dataset',
    shortTitle: 'ZSTC-Clove-V1 Feasibility Study (AI4EAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: '4th EAC STI Conference / AI for East Africa Conference (AI4EAC 2026), Kigali, Rwanda',
    venueShort: 'AI4EAC / EAC STI 2026',
    year: 2026,
    month: 'Mar',
    dateISO: '2026-03-01',
    category: 'conference',
    status: 'Published · Travel Grant ($980)',
    award: 'Competitive Travel Grant Award — EAC STI 2026, Kigali',
    openAccess: true,
    codeUrl: 'https://github.com/saaillab/zstc-clove-v1',
    datasetUrl: 'https://github.com/saaillab/zstc-clove-v1',
    teaserImage: '/images/papers/posters/eac-sti-2026-clove-grading.webp',
    teaserCaption: 'Presentation at the 4th EAC STI / AI4EAC Conference in Kigali, Rwanda evaluating automated clove grading across 5,298 ZSTC specimens.',
    tldr: 'Feasibility evaluation on ZSTC-Clove-V1 (5,298 single-clove images across 4 ZSTC grades), showing ResNet-18 reaches 94.46% accuracy while VGG-16 collapses to 31.32%.',
    abstract: 'We investigate the technical feasibility of automated clove quality grading using deep learning on ZSTC-Clove-V1, a novel dataset of 5,298 single-clove images across four official commercial grades collected at the Zanzibar State Trading Corporation (Saateni warehouse, Unguja). ResNet-18 achieves 94.46% accuracy (94.33% F1), whereas VGG-16 fails to converge at 31.32%, demonstrating sharp architectural sensitivity on fine-grained agricultural commodities and underscoring the need for trustworthy deployment.',
    keywords: ['ZSTC-Clove-V1', 'clove grading', 'Zanzibar', 'ResNet-18', 'East Africa', 'AI4EAC'],
    topics: ['Agriculture', 'Computer Vision', 'Zanzibar', 'East Africa'],
    bibtex: `@inproceedings{ndowo2026zstcclove,
  title={Deep Learning Feasibility Study for Automated Clove Quality Classification Using CNN Architectures on a Novel Zanzibar Dataset},
  author={Ndowo, Patrick Vincent and Nyalala, Innocent},
  booktitle={AI for East Africa Conference (AI4EAC) / 4th EAC STI Conference},
  address={Kigali, Rwanda},
  year={2026},
  url={https://github.com/saaillab/zstc-clove-v1}
}`,
    apa: `Ndowo, P. V., & Nyalala, I. (2026). Deep Learning Feasibility Study for Automated Clove Quality Classification Using CNN Architectures on a Novel Zanzibar Dataset. AI for East Africa Conference (AI4EAC / EAC STI), Kigali, Rwanda.`
  },

  {
    slug: 'dcgan-cassava-dsa2026',
    title: 'When Synthetic Data Hurts: DCGAN Augmentation Failure Under Extreme Data Scarcity for Cassava Disease Classification in East Africa',
    shortTitle: 'When Synthetic Data Hurts (DSA 2026 Oral)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Khamis Haji', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda',
    venueShort: 'DSA 2026 · Oral',
    venueUrl: 'https://www.datascienceafrica.org/',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-23',
    category: 'workshop',
    status: 'Published · Oral Presentation',
    award: 'Oral Presentation — Data Science Africa 2026, Kampala',
    openAccess: true,
    teaserImage: '/images/papers/dsa2026/fig1_f1_improvement.png',
    teaserCaption: 'Macro-F1 degradation caused by DCGAN synthetic augmentation across extreme few-shot regimes (n = 25, 50, 100 real images/class): pretrained ResNet-50 drops by 35.9 pp and EfficientNet-B3 by 32.7 pp.',
    tldr: 'Demonstrates empirically that DCGAN augmentation under extreme data scarcity (25–100 images/class) poisons cassava disease classifiers, dropping macro-F1 by up to 23.2 pp.',
    abstract: 'We test whether DCGAN augmentation alleviates labeled-data scarcity for cassava disease classification in Uganda. Training a DCGAN on 25, 50, or 100 real images per class and augmenting four classifier architectures to 500 images per class, we find that GAN augmentation consistently degrades macro-F1: by 23.2 pp at n = 25, 21.2 pp at n = 50, and 10.3 pp at n = 100. Pretrained classifiers suffer far more (ResNet-50: -35.9 pp; EfficientNet-B3: -32.7 pp) than a from-scratch CNN (-1.9 pp). GAN diagnostics confirm discriminator dominance and mode collapse, producing semantically empty images that poison fine-tuning. Within the unregularised DCGAN framework studied, these results establish an empirical minimum viability threshold of roughly 100-200 images per class and counsel caution against synthetic GAN augmentation in extreme few-shot African agricultural datasets.',
    keywords: ['DCGAN', 'synthetic data', 'data scarcity', 'cassava disease', 'East Africa', 'DSA 2026'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'East Africa'],
    figures: [
      { src: '/images/papers/dsa2026/fig1_f1_improvement.png', caption: 'Macro-F1 shift across classifier families when augmenting scarce real cassava cohorts (n = 25, 50, 100) with DCGAN outputs.' },
      { src: '/images/papers/dsa2026/fig3_real_vs_aug.png', caption: 'Real field cassava leaves versus collapsed DCGAN-synthesized outputs showing texture artifacts.' }
    ],
    bibtex: `@inproceedings{ndowo2026dcgan,
  title={When Synthetic Data Hurts: DCGAN Augmentation Failure Under Extreme Data Scarcity for Cassava Disease Classification in East Africa},
  author={Ndowo, Patrick and Nyalala, Innocent and Haji, Khamis},
  booktitle={Data Science Africa (DSA) 2026 Workshop},
  address={Makerere University, Kampala, Uganda},
  year={2026},
  month={July},
  note={Oral Presentation}
}`,
    apa: `Ndowo, P., Nyalala, I., & Haji, K. (2026, July). When Synthetic Data Hurts: DCGAN Augmentation Failure Under Extreme Data Scarcity for Cassava Disease Classification in East Africa. Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda. (Oral Presentation)`
  },

  {
    slug: 'auditing-crop-datasets-dsa2026',
    title: 'Auditing Representation in Crop Disease Benchmark Datasets Intended for Sub-Saharan African Deployment',
    shortTitle: 'Auditing Crop Benchmark Datasets (DSA 2026)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Khamis Haji', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda',
    venueShort: 'DSA 2026 · Oral & Poster',
    venueUrl: 'https://www.datascienceafrica.org/',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-23',
    category: 'workshop',
    status: 'Published · DSA 2026 Oral & Poster',
    openAccess: true,
    teaserImage: '/images/papers/dsa2026/fig1_audit_radar.png',
    teaserCaption: 'Five-dimension representativeness audit radar comparing PlantVillage, iCassava 2019, and iBean across geography, environment, class balance, image quality, and morphological diversity.',
    tldr: 'Presents a five-dimension representativeness audit of PlantVillage, iCassava 2019, and iBean alongside the six-item AgriAI Bias Card checklist for Sub-Saharan African deployment.',
    abstract: 'Crop disease image datasets are increasingly used to build decision-support tools for smallholder farmers in Sub-Saharan Africa, yet dataset representativeness across geography, imaging environment, class balance, image quality, and morphological diversity is rarely documented systematically. We apply a quantitative five-dimension representativeness audit to PlantVillage, iCassava 2019, and iBean, quantify cross-domain transfer penalties, and introduce the AgriAI Bias Card — a six-item documentation checklist tailored to African agricultural AI.',
    keywords: ['dataset auditing', 'AgriAI Bias Card', 'Sub-Saharan Africa', 'representativeness', 'PlantVillage', 'iCassava'],
    topics: ['Responsible AI', 'Agriculture', 'Benchmarking', 'East Africa'],
    figures: [
      { src: '/images/papers/dsa2026/fig1_audit_radar.png', caption: 'Multi-dimensional representativeness radar across PlantVillage, iCassava 2019, and iBean.' },
      { src: '/images/papers/dsa2026/fig2_transfer_heatmap.png', caption: 'Cross-dataset transfer accuracy matrix exposing laboratory-to-field degradation.' },
      { src: '/images/papers/dsa2026/fig3_accuracy_penalty.png', caption: 'Quantified deployment accuracy penalty when models cross environmental acquisition boundaries.' },
      { src: '/images/papers/dsa2026/fig4_audit_bars.png', caption: 'Component breakdown of dataset audit rubric scores.' },
      { src: '/images/papers/posters/dsa-2026-poster-auditing-representation.webp', caption: 'Conference poster presented at DSA 2026, Makerere University, Kampala.' }
    ],
    bibtex: `@inproceedings{nyalala2026auditing,
  title={Auditing Representation in Crop Disease Benchmark Datasets Intended for Sub-Saharan African Deployment},
  author={Nyalala, Innocent and Vincent, Patrick and Haji, Khamis},
  booktitle={Data Science Africa (DSA) 2026 Workshop},
  address={Makerere University, Kampala, Uganda},
  year={2026},
  month={July}
}`,
    apa: `Nyalala, I., Vincent, P., & Haji, K. (2026, July). Auditing Representation in Crop Disease Benchmark Datasets Intended for Sub-Saharan African Deployment. Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda.`
  },

  {
    slug: 'few-shot-cassava-dsa2026',
    title: 'Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Field Conditions',
    shortTitle: 'Few-Shot Cassava Transfer Learning (DSA 2026)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Shivam Vyas', affiliations: [1] },
      { name: 'Twamaa Makame', affiliations: [1] },
      { name: 'Surabhi Gudla', affiliations: [1] },
      { name: 'Khamis Haji', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda',
    venueShort: 'DSA 2026 · Oral & Poster',
    venueUrl: 'https://www.datascienceafrica.org/',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-23',
    category: 'workshop',
    status: 'Published · DSA 2026',
    openAccess: true,
    teaserImage: '/images/papers/dsa2026/p1_all_backbones.png',
    teaserCaption: 'Few-shot scaling curves across four pretrained backbones (ResNet-50, EfficientNet-B3, MobileNetV3, ViT-B/16) on 21,397 Ugandan field cassava images at k ∈ {10, 25, 50, 100} shots/class.',
    tldr: 'Evaluates ResNet-50, EfficientNet-B3, MobileNetV3, and ViT-B/16 under linear probing vs. full fine-tuning on 21,397 Ugandan field cassava images at 10–100 shots/class (+28.5 pp gain).',
    abstract: 'Cassava feeds over 500 million people across Sub-Saharan Africa, yet annual crop losses of up to 40% from Cassava Brown Streak Disease and Cassava Mosaic Disease often go undetected due to scarce diagnostic infrastructure. We present a systematic evaluation of few-shot transfer learning on 21,397 smartphone-captured Ugandan field images spanning five disease classes. Four pretrained backbones (ResNet-50, EfficientNet-B3, MobileNetV3, ViT-B/16) are evaluated under linear probing and full fine-tuning at k in {10, 25, 50, 100} labeled images per class with a shared hyperparameter configuration. Full fine-tuning of ViT-B/16 reaches 63.6% accuracy at k = 50, a +28.5 pp gain over training from scratch.',
    keywords: ['few-shot learning', 'transfer learning', 'cassava disease', 'East Africa', 'ViT-B/16', 'DSA 2026'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'East Africa'],
    figures: [
      { src: '/images/papers/dsa2026/p1_all_backbones.png', caption: 'Few-shot classification scaling trajectories across ResNet-50, EfficientNet-B3, MobileNetV3, and ViT-B/16.' },
      { src: '/images/papers/dsa2026/p1_lp_ft_lines.png', caption: 'Linear probing versus full end-to-end fine-tuning under k ∈ {10, 25, 50, 100} shots per class.' },
      { src: '/images/papers/dsa2026/p1_perclass_f1.png', caption: 'Per-class F1 breakdown across the five Ugandan cassava pathology categories.' },
      { src: '/images/papers/posters/dsa-2026-poster-few-shot-cassava.webp', caption: 'Full conference poster presented at DSA 2026, Makerere University.' }
    ],
    bibtex: `@inproceedings{nyalala2026fewshot,
  title={Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Field Conditions},
  author={Nyalala, Innocent and Vincent, Patrick and Vyas, Shivam and Makame, Twamaa and Gudla, Surabhi and Haji, Khamis},
  booktitle={Data Science Africa (DSA) 2026 Workshop},
  address={Makerere University, Kampala, Uganda},
  year={2026},
  month={July}
}`,
    apa: `Nyalala, I., Vincent, P., Vyas, S., Makame, T., Gudla, S., & Haji, K. (2026, July). Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Field Conditions. Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda.`
  },

  {
    slug: 'ai-policy-harmonization-tais2026',
    title: 'AI Policy Harmonization in East Africa: Cultural Sustainability in the New Technological Age',
    shortTitle: 'AI Policy Harmonization in East Africa (TAIS 2026)',
    authors: [
      { name: 'Hope K. McCoy', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: '3rd Technical AI Safety Conference (TAIS 2026), University of Oxford, UK',
    venueShort: 'TAIS 2026 · University of Oxford',
    year: 2026,
    month: 'Mar',
    dateISO: '2026-03-15',
    category: 'conference',
    status: 'Published · Oxford TAIS 2026',
    openAccess: true,
    doi: '10.13140/rg.2.2.19812.13443',
    paperUrl: 'https://doi.org/10.13140/rg.2.2.19812.13443',
    tldr: 'Compares Ethiopia, Kenya, and Rwanda AI policies to propose culturally grounded, regionally harmonized East African AI governance rooted in Harambee and Ujamaa values.',
    abstract: 'East African countries often mimic Western governance blueprints when crafting technology regulation, risking mismatches with communal values such as Harambee and Ujamaa and reinforcing structural dependency. This study compares the formal AI policies of Ethiopia, Kenya, and Rwanda — highlighting shared infrastructure priorities around water resources, electricity, indigenous language preservation, and South-South cooperation — and outlines a culturally sustainable roadmap for East African AI policy harmonization.',
    keywords: ['AI policy', 'East Africa', 'cultural sustainability', 'AI safety', 'global governance', 'TAIS 2026'],
    topics: ['AI Sovereignty', 'Policy', 'Responsible AI', 'East Africa'],
    bibtex: `@inproceedings{mccoy2026harmonization,
  title={AI Policy Harmonization in East Africa: Cultural Sustainability in the New Technological Age},
  author={McCoy, Hope K. and Nyalala, Innocent},
  booktitle={3rd Technical AI Safety Conference (TAIS 2026)},
  address={University of Oxford, UK},
  year={2026},
  month={March},
  doi={10.13140/rg.2.2.19812.13443}
}`,
    apa: `McCoy, H. K., & Nyalala, I. (2026, March). AI Policy Harmonization in East Africa: Cultural Sustainability in the New Technological Age. 3rd Technical AI Safety Conference (TAIS 2026), University of Oxford. https://doi.org/10.13140/rg.2.2.19812.13443`
  },

  {
    slug: 'ai-sovereignty-global-south-aaai2026',
    title: 'AI Sovereignty in the Global South: Power, Dependency, and Strategic Futures',
    shortTitle: 'AI Sovereignty in the Global South (AAAI 2026)',
    authors: [
      { name: 'S. Davies', affiliations: [5] },
      { name: 'Vikranth H. Nagaraja', affiliations: [6] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Nirav Bhatt', affiliations: [1] },
      { name: 'Soumya Banerjee', url: 'https://www.cl.cam.ac.uk/~sb2333/', affiliations: [5] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD],
    venue: 'AAAI 2026 Workshop on Equitable and Sustainable Global AI (EGSAI), Philadelphia, USA',
    venueShort: 'AAAI 2026 Workshop (EGSAI)',
    venueUrl: 'https://aaai.org/conference/aaai/',
    year: 2026,
    month: 'Jan',
    dateISO: '2026-01-25',
    category: 'workshop',
    status: 'Published · AAAI 2026 Workshop',
    openAccess: true,
    citations: 1,
    tldr: 'Analyzes compute, talent, and regulatory dependency across the Global South and proposes multipolar South-South AI governance involving the African Union and ASEAN.',
    abstract: 'This paper examines structural power asymmetries in artificial intelligence development across the Global South, mapping dependencies across foundational compute, proprietary model APIs, data extraction, and regulatory capture. We propose multipolar policy frameworks connecting regional blocs such as the African Union and ASEAN through South-South cooperation to safeguard strategic autonomy and equitable technological futures.',
    keywords: ['AI sovereignty', 'Global South', 'AI governance', 'geopolitics', 'AAAI 2026', 'South-South cooperation'],
    topics: ['AI Sovereignty', 'Policy', 'Global South', 'Responsible AI'],
    bibtex: `@inproceedings{davies2026sovereignty,
  title={AI Sovereignty in the Global South: Power, Dependency, and Strategic Futures},
  author={Davies, S. and Nagaraja, V. H. and Nyalala, Innocent and Bhatt, N. and Banerjee, S.},
  booktitle={AAAI 2026 Workshop on Equitable and Sustainable Global AI (EGSAI)},
  address={Philadelphia, USA},
  year={2026},
  month={January}
}`,
    apa: `Davies, S., Nagaraja, V. H., Nyalala, I., Bhatt, N., & Banerjee, S. (2026, January). AI Sovereignty in the Global South: Power, Dependency, and Strategic Futures. AAAI 2026 Workshop on Equitable and Sustainable Global AI (EGSAI), Philadelphia.`
  },

  {
    slug: 'eac-ai-strategy-aaiac2026',
    title: 'From Digital Consumerism to Strategic Sovereignty: Analyzing the Draft EAC Regional AI Strategy (2026)',
    shortTitle: 'Draft EAC Regional AI Strategy Analysis (AAIAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'AAIAC 2026 — 2nd International Conference on Advancements of AI in the African Context, Dar es Salaam, Tanzania',
    venueShort: 'AAIAC 2026 · Dar es Salaam',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-22',
    category: 'conference',
    status: 'Published · AAIAC 2026',
    tldr: 'Evaluates the Draft East African Community Regional AI Strategy (2026) through a sovereign infrastructure lens, pinpointing gaps between policy goals and regional compute capacity.',
    abstract: 'Critically analyzes the Draft East African Community Regional AI Strategy through a digital sovereignty lens, identifying concrete gaps between aspirational policy targets and structural constraints across compute infrastructure, cross-border data sharing, and regional AI talent retention.',
    keywords: ['EAC AI strategy', 'digital sovereignty', 'East Africa', 'AI policy', 'AAIAC 2026'],
    topics: ['AI Sovereignty', 'Policy', 'East Africa', 'Global South'],
    bibtex: `@inproceedings{ndowo2026eac,
  title={From Digital Consumerism to Strategic Sovereignty: Analyzing the Draft EAC Regional AI Strategy (2026)},
  author={Ndowo, Patrick and Nyalala, Innocent},
  booktitle={Proceedings of the 2nd International Conference on Advancements of AI in the African Context (AAIAC 2026)},
  address={Dar es Salaam, Tanzania},
  year={2026},
  month={July}
}`,
    apa: `Ndowo, P., & Nyalala, I. (2026, July). From Digital Consumerism to Strategic Sovereignty: Analyzing the Draft EAC Regional AI Strategy (2026). 2nd International Conference on Advancements of AI in the African Context (AAIAC 2026), Dar es Salaam, Tanzania.`
  },

  {
    slug: 'leakage-free-fraud-aaiac2026',
    title: 'Leakage-Free Fraud Detection in Mobile-First Banking: A PR-AUC Benchmark of XGBoost, Random Forest, and Isolation Forest for East Africa',
    shortTitle: 'Mobile-First Banking Fraud Benchmark (AAIAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'AAIAC 2026 — 2nd International Conference on Advancements of AI in the African Context, Dar es Salaam, Tanzania',
    venueShort: 'AAIAC 2026 · Dar es Salaam',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-22',
    category: 'conference',
    status: 'Published · AAIAC 2026',
    tldr: 'Establishes a leakage-free PR-AUC evaluation protocol comparing XGBoost, Random Forest, and Isolation Forest for East African mobile-money fraud detection.',
    abstract: 'Establishes a rigorous leakage-free PR-AUC benchmarking methodology for mobile-first banking fraud detection in East Africa, comparing XGBoost, Random Forest, and Isolation Forest under realistic class imbalance and temporal transaction boundaries.',
    keywords: ['fraud detection', 'mobile banking', 'PR-AUC', 'XGBoost', 'East Africa', 'data leakage'],
    topics: ['Fraud Detection', 'Benchmarking', 'East Africa'],
    bibtex: `@inproceedings{ndowo2026fraud,
  title={Leakage-Free Fraud Detection in Mobile-First Banking: A PR-AUC Benchmark of XGBoost, Random Forest, and Isolation Forest for East Africa},
  author={Ndowo, Patrick and Nyalala, Innocent},
  booktitle={Proceedings of the 2nd International Conference on Advancements of AI in the African Context (AAIAC 2026)},
  address={Dar es Salaam, Tanzania},
  year={2026},
  month={July}
}`,
    apa: `Ndowo, P., & Nyalala, I. (2026, July). Leakage-Free Fraud Detection in Mobile-First Banking: A PR-AUC Benchmark of XGBoost, Random Forest, and Isolation Forest for East Africa. AAIAC 2026, Dar es Salaam, Tanzania.`
  },

  {
    slug: 'physics-informed-solar-aaiac2026',
    title: 'A Physics-Informed Random Forest Framework for Multi-Decadal Solar Irradiance Forecasting in Tanzanian Off-Grid Mini-Grids',
    shortTitle: 'Physics-Informed Solar Forecasting (AAIAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'AAIAC 2026 — 2nd International Conference on Advancements of AI in the African Context, Dar es Salaam, Tanzania',
    venueShort: 'AAIAC 2026 · Dar es Salaam',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-22',
    category: 'conference',
    status: 'Published · AAIAC 2026',
    tldr: 'Integrates clear-sky solar geometry and atmospheric constraints into Random Forest forecasting for rural Tanzanian off-grid mini-grids.',
    abstract: 'Develops a physics-informed random forest model for long-horizon solar irradiance forecasting tailored to Tanzanian off-grid mini-grid deployments, embedding physical radiative bounds to maintain reliability under sparse ground-station measurements.',
    keywords: ['solar irradiance', 'off-grid mini-grids', 'Tanzania', 'physics-informed ML', 'AAIAC 2026'],
    topics: ['Solar Energy', 'East Africa', 'Deep Learning'],
    bibtex: `@inproceedings{ndowo2026solar,
  title={A Physics-Informed Random Forest Framework for Multi-Decadal Solar Irradiance Forecasting in Tanzanian Off-Grid Mini-Grids},
  author={Ndowo, Patrick and Nyalala, Innocent},
  booktitle={Proceedings of the 2nd International Conference on Advancements of AI in the African Context (AAIAC 2026)},
  address={Dar es Salaam, Tanzania},
  year={2026},
  month={July}
}`,
    apa: `Ndowo, P., & Nyalala, I. (2026, July). A Physics-Informed Random Forest Framework for Multi-Decadal Solar Irradiance Forecasting in Tanzanian Off-Grid Mini-Grids. AAIAC 2026, Dar es Salaam, Tanzania.`
  },

  {
    slug: 'military-5g-cyber-aaiac2026',
    title: 'Resilient Cyber Defence for African Military 5G Networks: A Multi-Stage Hybrid ML Framework for Zero-Day Detection',
    shortTitle: 'Hybrid ML for 5G Cyber Defence (AAIAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'AAIAC 2026 — 2nd International Conference on Advancements of AI in the African Context, Dar es Salaam, Tanzania',
    venueShort: 'AAIAC 2026 · Dar es Salaam',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-22',
    category: 'conference',
    status: 'Published · AAIAC 2026',
    tldr: 'Combines unsupervised anomaly detection with supervised signature classification for zero-day intrusion detection in African 5G network deployments.',
    abstract: 'Proposes a multi-stage hybrid machine learning framework for zero-day threat detection in mission-critical African 5G network environments, pairing unsupervised anomaly scoring with fast signature-based classifiers for resilient defence.',
    keywords: ['cybersecurity', '5G networks', 'zero-day detection', 'hybrid machine learning', 'AAIAC 2026'],
    topics: ['Cybersecurity', 'Deep Learning', 'East Africa'],
    bibtex: `@inproceedings{ndowo2026cyber,
  title={Resilient Cyber Defence for African Military 5G Networks: A Multi-Stage Hybrid ML Framework for Zero-Day Detection},
  author={Ndowo, Patrick and Nyalala, Innocent},
  booktitle={Proceedings of the 2nd International Conference on Advancements of AI in the African Context (AAIAC 2026)},
  address={Dar es Salaam, Tanzania},
  year={2026},
  month={July}
}`,
    apa: `Ndowo, P., & Nyalala, I. (2026, July). Resilient Cyber Defence for African Military 5G Networks: A Multi-Stage Hybrid ML Framework for Zero-Day Detection. AAIAC 2026, Dar es Salaam, Tanzania.`
  },

  {
    slug: 'sahel-insurgency-aaiac2026',
    title: 'Predicting Insurgency Hotspots in the Sahel: Leveraging GTD Data for Regional Defence Resource Allocation',
    shortTitle: 'Sahel Insurgency Hotspot Prediction (AAIAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'AAIAC 2026 — 2nd International Conference on Advancements of AI in the African Context, Dar es Salaam, Tanzania',
    venueShort: 'AAIAC 2026 · Dar es Salaam',
    year: 2026,
    month: 'Jul',
    dateISO: '2026-07-22',
    category: 'conference',
    status: 'Published · AAIAC 2026',
    tldr: 'Applies spatiotemporal machine learning over Global Terrorism Database (GTD) records to forecast conflict hotspots and support regional resource allocation in the Sahel.',
    abstract: 'Uses Global Terrorism Database (GTD) records with spatiotemporal machine learning models to forecast insurgency hotspots across the Sahel region, providing an evidence-driven decision aid for humanitarian and regional defence resource allocation.',
    keywords: ['Sahel', 'conflict forecasting', 'GTD', 'spatiotemporal ML', 'AAIAC 2026'],
    topics: ['Policy', 'Global South', 'East Africa'],
    bibtex: `@inproceedings{ndowo2026sahel,
  title={Predicting Insurgency Hotspots in the Sahel: Leveraging GTD Data for Regional Defence Resource Allocation},
  author={Ndowo, Patrick and Nyalala, Innocent},
  booktitle={Proceedings of the 2nd International Conference on Advancements of AI in the African Context (AAIAC 2026)},
  address={Dar es Salaam, Tanzania},
  year={2026},
  month={July}
}`,
    apa: `Ndowo, P., & Nyalala, I. (2026, July). Predicting Insurgency Hotspots in the Sahel: Leveraging GTD Data for Regional Defence Resource Allocation. AAIAC 2026, Dar es Salaam, Tanzania.`
  },

  // =========================================================================
  // 2025 PUBLICATIONS
  // =========================================================================
  {
    slug: 'bafnet-polyp-2025',
    title: 'BAFNet: Deep contour-aware features for colorectal polyps segmentation',
    shortTitle: 'BAFNet Colorectal Polyp Segmentation (ESWA 2025)',
    authors: [
      { name: 'Dibin Zhou', affiliations: [7] },
      { name: 'Ni Chen', affiliations: [7] },
      { name: 'Yueping Zhu', affiliations: [7] },
      { name: 'Xueyan Zhang', affiliations: [7] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Jiayu Zhang', affiliations: [7] },
      { name: 'Junfeng Gao', affiliations: [8] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD, AFFILIATIONS.XZUT, AFFILIATIONS.LINCOLN],
    venue: 'Expert Systems with Applications (Elsevier)',
    venueShort: 'Expert Systems with Applications · 2025',
    venueUrl: 'https://www.sciencedirect.com/journal/expert-systems-with-applications',
    year: 2025,
    month: 'Oct',
    dateISO: '2025-10-14',
    category: 'journal',
    status: 'Published · IF 7.5',
    impactFactor: '7.5',
    doi: '10.1016/j.eswa.2025.129998',
    paperUrl: 'https://doi.org/10.1016/j.eswa.2025.129998',
    tldr: 'Introduces BAFNet, a boundary-aware feature fusion network with gated contour selection for accurate colorectal polyp segmentation.',
    abstract: 'Automated segmentation of colorectal polyps remains challenging due to low tissue contrast and blurred mucosal boundaries. We propose BAFNet, a boundary-aware feature fusion network incorporating gating mechanisms that selectively preserve sharp contour cues alongside multi-scale semantic representations, advancing polyp segmentation accuracy across clinical colonoscopy benchmarks.',
    keywords: ['BAFNet', 'colorectal polyps', 'medical image segmentation', 'contour-aware', 'Expert Systems with Applications'],
    topics: ['Healthcare', 'Medical Imaging', 'Deep Learning'],
    bibtex: `@article{zhou2025bafnet,
  title={BAFNet: Deep contour-aware features for colorectal polyps segmentation},
  author={Zhou, Dibin and Chen, Ni and Zhu, Yueping and Zhang, Xueyan and Nyalala, Innocent and Zhang, Jiayu and Gao, Junfeng},
  journal={Expert Systems with Applications},
  year={2025},
  doi={10.1016/j.eswa.2025.129998},
  publisher={Elsevier}
}`,
    apa: `Zhou, D., Chen, N., Zhu, Y., Zhang, X., Nyalala, I., Zhang, J., & Gao, J. (2025). BAFNet: Deep contour-aware features for colorectal polyps segmentation. Expert Systems with Applications. https://doi.org/10.1016/j.eswa.2025.129998`
  },

  {
    slug: 'cassava-weakened-signals-2025',
    title: 'Rectifying the extremely weakened signals for cassava leaf disease detection',
    shortTitle: 'Rectifying Weakened Signals for Cassava (COMPAG 2025)',
    authors: [
      { name: 'Jiayu Zhang', affiliations: [7] },
      { name: 'Baohua Zhang', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Peter Mecha', affiliations: [3] },
      { name: 'Junlong Chen', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] },
      { name: 'Junfeng Gao', affiliations: [8] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD, AFFILIATIONS.XZUT, AFFILIATIONS.LINCOLN],
    venue: 'Computers and Electronics in Agriculture (Elsevier), Vol. 232, 110107',
    venueShort: 'Comput. Electron. Agric. · 2025',
    venueUrl: 'https://www.sciencedirect.com/journal/computers-and-electronics-in-agriculture',
    year: 2025,
    month: 'May',
    dateISO: '2025-05-01',
    category: 'journal',
    status: 'Published · IF 8.9',
    impactFactor: '8.9',
    citations: 4,
    doi: '10.1016/j.compag.2025.110107',
    paperUrl: 'https://doi.org/10.1016/j.compag.2025.110107',
    teaserImage: '/images/papers/posters/Publicaiton_compag.webp',
    teaserCaption: 'Published in Computers and Electronics in Agriculture (Vol. 232, May 2025): recovering attenuated early-stage foliar symptom signals in cassava leaf imagery.',
    tldr: 'Presents a signal-rectification neural mechanism that recovers attenuated early-stage foliar disease cues in cassava leaf classification.',
    abstract: 'Early-stage cassava leaf disease symptoms frequently appear as subtle, attenuated spatial signals overwhelmed by background foliage and illumination noise. We propose a weakened-signal rectification architecture published in Computers and Electronics in Agriculture (Vol. 232) that explicitly amplifies faint lesion representations prior to classification, improving diagnostic sensitivity across field cassava disease categories.',
    keywords: ['cassava leaf disease', 'weakened signals', 'deep learning', 'Computers and Electronics in Agriculture', 'precision agriculture'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'Computer Vision'],
    bibtex: `@article{zhang2025rectifying,
  title={Rectifying the extremely weakened signals for cassava leaf disease detection},
  author={Zhang, Jiayu and Zhang, Baohua and Nyalala, Innocent and Mecha, Peter and Chen, Junlong and Chen, Kunjie and Gao, Junfeng},
  journal={Computers and Electronics in Agriculture},
  volume={232},
  pages={110107},
  year={2025},
  doi={10.1016/j.compag.2025.110107},
  publisher={Elsevier}
}`,
    apa: `Zhang, J., Zhang, B., Nyalala, I., Mecha, P., Chen, J., Chen, K., & Gao, J. (2025). Rectifying the extremely weakened signals for cassava leaf disease detection. Computers and Electronics in Agriculture, 232, 110107. https://doi.org/10.1016/j.compag.2025.110107`
  },

  {
    slug: 'digital-sovereignty-serfdom-2025',
    title: 'Digital Sovereignty or Digital Serfdom? AI Strategies, Geopolitics, and the Quest for an Equitable Global South',
    shortTitle: 'Digital Sovereignty vs. Digital Serfdom (EurIPS/NeurIPS 2025)',
    authors: [
      { name: 'S. Davies', affiliations: [5] },
      { name: 'Vikranth H. Nagaraja', affiliations: [6] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Nirav Bhatt', affiliations: [1] },
      { name: 'Soumya Banerjee', url: 'https://www.cl.cam.ac.uk/~sb2333/', affiliations: [5] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD],
    venue: 'PAIG Workshop @ EurIPS / NeurIPS 2025 (Private AI Governance)',
    venueShort: 'PAIG Workshop @ EurIPS 2025',
    venueUrl: 'https://eurips.cc/',
    year: 2025,
    month: 'Nov',
    dateISO: '2025-11-20',
    category: 'workshop',
    status: 'Published · NeurIPS/EurIPS Workshop',
    openAccess: true,
    tldr: 'Introduces a seven-dimensional diagnostic framework across Singapore, Vietnam, Kenya, and Syria to evaluate whether national AI strategies advance digital sovereignty or digital serfdom.',
    abstract: 'This study examines whether nations across the Global South are charting autonomous AI trajectories or drifting toward digital serfdom. Applying a seven-dimensional governance framework across four comparative case studies (Singapore, Vietnam, Kenya, and Syria), we dissect structural asymmetries in compute ownership, local talent pipelines, data sovereignty, and regulatory capacity.',
    keywords: ['digital sovereignty', 'digital serfdom', 'Global South', 'AI governance', 'Kenya', 'EurIPS 2025'],
    topics: ['Digital Sovereignty', 'AI Sovereignty', 'Policy', 'Global South'],
    bibtex: `@inproceedings{davies2025serfdom,
  title={Digital Sovereignty or Digital Serfdom? AI Strategies, Geopolitics, and the Quest for an Equitable Global South},
  author={Davies, S. and Nagaraja, V. H. and Nyalala, Innocent and Bhatt, N. and Banerjee, S.},
  booktitle={Workshop on Private AI Governance (PAIG) @ EurIPS 2025},
  year={2025},
  month={November}
}`,
    apa: `Davies, S., Nagaraja, V. H., Nyalala, I., Bhatt, N., & Banerjee, S. (2025, November). Digital Sovereignty or Digital Serfdom? AI Strategies, Geopolitics, and the Quest for an Equitable Global South. PAIG Workshop @ EurIPS 2025.`
  },

  {
    slug: 'clove-codesign-africhi2025',
    title: 'From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar\'s Indigenous Experts',
    shortTitle: 'Co-Designing Clove Grading AI (AfriCHI 2025)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'AfriCHI ACM Conference 2025',
    venueShort: 'AfriCHI 2025 · ACM',
    venueUrl: 'https://dl.acm.org/conference/africhi',
    year: 2025,
    month: 'Nov',
    dateISO: '2025-11-10',
    category: 'conference',
    status: 'Published · ACM AfriCHI 2025',
    teaserImage: '/images/papers/posters/africhi-2025-poster.webp',
    teaserCaption: 'AfriCHI 2025 socio-technical co-design study pairing Zanzibar clove inspectors with segmentation-first mobile AI (99.0% accuracy).',
    tldr: 'Partners with Zanzibar clove grading inspectors via participatory HCI co-design alongside a 99.0% segmentation-first deep learning mobile grading workflow.',
    abstract: 'We propose a socio-technical co-design approach to modernizing Zanzibar\'s clove grading ecosystem alongside certified Indigenous grading experts. Technically validating a segmentation-first deep learning pipeline that achieves 99.0% accuracy, we embed inspector domain heuristics, transparent grade rationales, and mobile usability into the interface to foster farmer trust.',
    keywords: ['co-design', 'HCI4D', 'clove grading', 'Zanzibar', 'AfriCHI', 'indigenous knowledge'],
    topics: ['Responsible AI', 'Agriculture', 'Zanzibar', 'East Africa'],
    bibtex: `@inproceedings{nyalala2025africhi,
  title={From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar's Indigenous Experts},
  author={Nyalala, Innocent and Vincent, Patrick Ndowo},
  booktitle={Proceedings of the African Human-Computer Interaction Conference (AfriCHI 2025)},
  publisher={ACM},
  year={2025}
}`,
    apa: `Nyalala, I., & Vincent, P. N. (2025). From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar's Indigenous Experts. AfriCHI ACM Conference 2025.`
  },

  {
    slug: 'prime-directives-dsa2025',
    title: 'Prime Directives for Responsible AI for Africa: A Manifesto for Inclusive Technology',
    shortTitle: 'Prime Directives for Responsible AI (DSA 2025)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Data Science Africa (DSA) 2025, University of Ibadan, Nigeria',
    venueShort: 'DSA 2025 · Ibadan, Nigeria',
    venueUrl: 'https://www.datascienceafrica.org/',
    year: 2025,
    month: 'Jun',
    dateISO: '2025-06-05',
    category: 'conference',
    status: 'Published · DSA 2025',
    openAccess: true,
    teaserImage: '/images/posters/research-poster.png',
    teaserCaption: 'Research poster presented at Data Science Africa 2025, University of Ibadan, Nigeria.',
    tldr: 'Establishes actionable Prime Directives for participatory design, data equity, linguistic inclusion, and local agency in African AI systems.',
    abstract: 'We present a principled manifesto for developing inclusive, ethical, and sustainable artificial intelligence tailored to Africa\'s cultural, social, and infrastructural realities. Grounded in participatory design, data equity, and local empowerment, the Prime Directives outline concrete requirements for accountability before deploying AI in agricultural, healthcare, and civic institutions across the continent.',
    keywords: ['responsible AI', 'African AI ethics', 'participatory design', 'data equity', 'DSA 2025'],
    topics: ['Responsible AI', 'Policy', 'Global South', 'East Africa'],
    bibtex: `@inproceedings{nyalala2025manifesto,
  title={Prime Directives for Responsible AI for Africa: A Manifesto for Inclusive Technology},
  author={Nyalala, Innocent},
  booktitle={Data Science Africa (DSA) 2025},
  address={University of Ibadan, Nigeria},
  year={2025},
  month={June}
}`,
    apa: `Nyalala, I. (2025, June). Prime Directives for Responsible AI for Africa: A Manifesto for Inclusive Technology. Data Science Africa (DSA) 2025, University of Ibadan, Nigeria.`
  },

  // =========================================================================
  // 2024 PUBLICATIONS
  // =========================================================================
  {
    slug: 'cassava-salient-feature-2024',
    title: 'A salient feature establishment tactic for cassava disease recognition',
    shortTitle: 'Salient Feature Tactic for Cassava (AIIA 2024)',
    authors: [
      { name: 'Jiayu Zhang', affiliations: [7] },
      { name: 'Baohua Zhang', affiliations: [3] },
      { name: 'Zixuan Chen', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Kunjie Chen', affiliations: [3] },
      { name: 'Junfeng Gao', affiliations: [8] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD, AFFILIATIONS.XZUT, AFFILIATIONS.LINCOLN],
    venue: 'Artificial Intelligence in Agriculture (Elsevier), Vol. 14, pp. 115–132',
    venueShort: 'Artificial Intelligence in Agriculture · 2024',
    venueUrl: 'https://www.sciencedirect.com/journal/artificial-intelligence-in-agriculture',
    year: 2024,
    month: 'Nov',
    dateISO: '2024-11-15',
    category: 'journal',
    status: 'Published · Open Access · IF 12.4',
    impactFactor: '12.4',
    citations: 13,
    openAccess: true,
    doi: '10.1016/j.aiia.2024.11.004',
    paperUrl: 'https://doi.org/10.1016/j.aiia.2024.11.004',
    tldr: 'Develops a salient feature establishment tactic isolating fine foliar cassava pathology from noisy field backgrounds in Artificial Intelligence in Agriculture (IF 12.4).',
    abstract: 'Complex field backgrounds and overlapping symptoms impede accurate cassava disease classification. Published in Artificial Intelligence in Agriculture (Vol. 14, pp. 115-132), this study proposes a salient feature establishment strategy that suppresses uninformative background activations and accentuates disease-specific foliar morphology under natural field acquisition.',
    keywords: ['cassava disease recognition', 'salient features', 'Artificial Intelligence in Agriculture', 'computer vision'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'Computer Vision'],
    bibtex: `@article{zhang2024salient,
  title={A salient feature establishment tactic for cassava disease recognition},
  author={Zhang, Jiayu and Zhang, Baohua and Chen, Zixuan and Nyalala, Innocent and Chen, Kunjie and Gao, Junfeng},
  journal={Artificial Intelligence in Agriculture},
  volume={14},
  pages={115--132},
  year={2024},
  doi={10.1016/j.aiia.2024.11.004},
  publisher={Elsevier}
}`,
    apa: `Zhang, J., Zhang, B., Chen, Z., Nyalala, I., Chen, K., & Gao, J. (2024). A salient feature establishment tactic for cassava disease recognition. Artificial Intelligence in Agriculture, 14, 115–132. https://doi.org/10.1016/j.aiia.2024.11.004`
  },

  {
    slug: 'chicken-carcass-3d-2024',
    title: 'Online chicken carcass volume estimation using depth imaging and 3-D reconstruction',
    shortTitle: '3D Chicken Carcass Volume Estimation (Poultry Sci. 2024)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 3] },
      { name: 'Jiayu Zhang', affiliations: [7] },
      { name: 'Zixuan Chen', affiliations: [3] },
      { name: 'Junlong Chen', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD, AFFILIATIONS.XZUT],
    venue: 'Poultry Science (Elsevier), Vol. 103, 104232',
    venueShort: 'Poultry Science · 2024',
    year: 2024,
    month: 'Oct',
    dateISO: '2024-10-01',
    category: 'journal',
    status: 'Published · Open Access · IF 4.2',
    impactFactor: '4.2',
    citations: 10,
    openAccess: true,
    doi: '10.1016/j.psj.2024.104232',
    paperUrl: 'https://doi.org/10.1016/j.psj.2024.104232',
    tldr: 'Real-time non-contact 3-D surface reconstruction and depth-imaging pipeline for online poultry carcass volume estimation on processing lines.',
    abstract: 'Non-contact online volume estimation is vital for automated grading and throughput optimization in poultry processing plants. We present a depth-imaging and 3-D geometric reconstruction system evaluated under conveyor speeds, establishing strong volume-to-mass correlation without physical contact or line interruption.',
    keywords: ['3D reconstruction', 'depth imaging', 'chicken carcass', 'volume estimation', 'computer vision', 'Poultry Science'],
    topics: ['Agriculture', 'Computer Vision', '3D Reconstruction'],
    bibtex: `@article{nyalala2024chicken3d,
  title={Online chicken carcass volume estimation using depth imaging and 3-D reconstruction},
  author={Nyalala, Innocent and Zhang, Jiayu and Chen, Zixuan and Chen, Junlong and Chen, Kunjie},
  journal={Poultry Science},
  pages={104232},
  year={2024},
  doi={10.1016/j.psj.2024.104232},
  publisher={Elsevier}
}`,
    apa: `Nyalala, I., Zhang, J., Chen, Z., Chen, J., & Chen, K. (2024). Online chicken carcass volume estimation using depth imaging and 3-D reconstruction. Poultry Science, 104232. https://doi.org/10.1016/j.psj.2024.104232`
  },

  {
    slug: 'maianet-cassava-2024',
    title: 'MAIANet: Signal modulation in cassava leaf disease classification',
    shortTitle: 'MAIANet Cassava Classification (COMPAG 2024)',
    authors: [
      { name: 'Jiayu Zhang', affiliations: [7] },
      { name: 'Baohua Zhang', affiliations: [3] },
      { name: 'Chao Qi', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [1, 2] },
      { name: 'Peter Mecha', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] },
      { name: 'Junfeng Gao', affiliations: [8] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU, AFFILIATIONS.DEAKIN, AFFILIATIONS.CAMBRIDGE, AFFILIATIONS.SALFORD, AFFILIATIONS.XZUT, AFFILIATIONS.LINCOLN],
    venue: 'Computers and Electronics in Agriculture (Elsevier), Vol. 225, 109351',
    venueShort: 'Comput. Electron. Agric. · 2024',
    year: 2024,
    month: 'Sep',
    dateISO: '2024-09-01',
    category: 'journal',
    status: 'Published · IF 8.9 · 19+ Citations',
    impactFactor: '8.9',
    citations: 19,
    doi: '10.1016/j.compag.2024.109351',
    paperUrl: 'https://doi.org/10.1016/j.compag.2024.109351',
    tldr: 'Introduces MAIANet, a signal-modulation deep architecture enhancing discriminative foliar disease channels in cassava leaf diagnosis (19+ citations).',
    abstract: 'Published in Computers and Electronics in Agriculture (Vol. 225), MAIANet incorporates multi-scale signal modulation blocks to rebalance weak symptom cues and suppress background interference across field-acquired cassava leaf images.',
    keywords: ['MAIANet', 'signal modulation', 'cassava leaf disease', 'deep learning', 'Computers and Electronics in Agriculture'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'Computer Vision'],
    bibtex: `@article{zhang2024maianet,
  title={MAIANet: Signal modulation in cassava leaf disease classification},
  author={Zhang, Jiayu and Zhang, Baohua and Qi, Chao and Nyalala, Innocent and Mecha, Peter and Chen, Kunjie and Gao, Junfeng},
  journal={Computers and Electronics in Agriculture},
  volume={225},
  pages={109351},
  year={2024},
  doi={10.1016/j.compag.2024.109351},
  publisher={Elsevier}
}`,
    apa: `Zhang, J., Zhang, B., Qi, C., Nyalala, I., Mecha, P., Chen, K., & Gao, J. (2024). MAIANet: Signal modulation in cassava leaf disease classification. Computers and Electronics in Agriculture, 225, 109351. https://doi.org/10.1016/j.compag.2024.109351`
  },

  // =========================================================================
  // 2021 PUBLICATIONS
  // =========================================================================
  {
    slug: 'poultry-cv-review-2021',
    title: 'Weight and volume estimation of poultry and products based on computer vision systems: a review',
    shortTitle: 'Poultry Weight & Volume CV Review (Poultry Sci. 2021)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] },
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Luke Nyalala', affiliations: [3] },
      { name: 'Qi Chao', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Poultry Science (Elsevier), Vol. 100, 101072',
    venueShort: 'Poultry Science · 2021',
    year: 2021,
    month: 'May',
    dateISO: '2021-05-01',
    category: 'journal',
    status: 'Published · Open Access · 144+ Citations',
    impactFactor: '4.2',
    citations: 144,
    openAccess: true,
    doi: '10.1016/j.psj.2021.101072',
    paperUrl: 'https://doi.org/10.1016/j.psj.2021.101072',
    tldr: 'Comprehensive survey synthesizing 2D/3D computer vision, depth sensing, and regression pipelines for non-contact poultry weight and volume estimation (144+ citations).',
    abstract: 'This widely cited review synthesizes computer vision, depth-imaging, and machine learning frameworks for non-contact weight and volume estimation across live poultry, carcasses, cuts, and eggs, analyzing feature extraction, occlusion handling, camera calibration, and industrial conveyor integration.',
    keywords: ['poultry science', 'computer vision', 'weight estimation', 'volume estimation', 'depth imaging', 'review'],
    topics: ['Agriculture', 'Computer Vision', '3D Reconstruction'],
    bibtex: `@article{nyalala2021poultryreview,
  title={Weight and volume estimation of poultry and products based on computer vision systems: a review},
  author={Nyalala, Innocent and Okinda, Cedric and Chen, Kunjie and Korohou, Tchalla and Nyalala, Luke and Chao, Qi},
  journal={Poultry Science},
  pages={101072},
  year={2021},
  doi={10.1016/j.psj.2021.101072},
  publisher={Elsevier}
}`,
    apa: `Nyalala, I., Okinda, C., Chen, K., Korohou, T., Nyalala, L., & Chao, Q. (2021). Weight and volume estimation of poultry and products based on computer vision systems: a review. Poultry Science, 101072. https://doi.org/10.1016/j.psj.2021.101072`
  },

  {
    slug: 'occluded-tomatoes-2021',
    title: 'Weight and volume estimation of single and occluded tomatoes using machine vision',
    shortTitle: 'Occluded Tomatoes Machine Vision (IJFP 2021)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Qi Chao', affiliations: [3] },
      { name: 'Peter Mecha', affiliations: [3] },
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Yi Zuo', affiliations: [3] },
      { name: 'Samuel Nyalala', affiliations: [3] },
      { name: 'Jiayu Zhang', affiliations: [3] },
      { name: 'Chao Liu', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'International Journal of Food Properties (Taylor & Francis), Vol. 24, pp. 818–832',
    venueShort: 'Int. J. Food Properties · 2021',
    year: 2021,
    month: 'Jun',
    dateISO: '2021-06-01',
    category: 'journal',
    status: 'Published · Open Access · 46+ Citations',
    citations: 46,
    openAccess: true,
    doi: '10.1080/10942912.2021.1933024',
    paperUrl: 'https://doi.org/10.1080/10942912.2021.1933024',
    tldr: 'Extends non-contact machine vision mass and volume estimation from single cherry tomatoes to partially occluded fruit clusters (46+ citations).',
    abstract: 'Fruit occlusion severely degrades geometric volume and mass prediction in automated sorting lines. We combine depth imaging, morphological contour reconstruction, and machine learning regression to recover accurate mass and volume estimates for both isolated and partially occluded tomatoes.',
    keywords: ['tomato volume estimation', 'occlusion handling', 'machine vision', 'depth imaging', 'postharvest'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{nyalala2021occludedtomatoes,
  title={Weight and volume estimation of single and occluded tomatoes using machine vision},
  author={Nyalala, Innocent and Okinda, Cedric and Chao, Qi and Mecha, Peter and Korohou, Tchalla and Zuo, Yi and Nyalala, Samuel and Jiayu, Zhang and Liu, Chao and Chen, Kunjie},
  journal={International Journal of Food Properties},
  volume={24},
  number={1},
  pages={818--832},
  year={2021},
  doi={10.1080/10942912.2021.1933024}
}`,
    apa: `Nyalala, I., Okinda, C., Chao, Q., Mecha, P., Korohou, T., Zuo, Y., Nyalala, S., Jiayu, Z., Liu, C., & Chen, K. (2021). Weight and volume estimation of single and occluded tomatoes using machine vision. International Journal of Food Properties, 24(1), 818–832. https://doi.org/10.1080/10942912.2021.1933024`
  },

  {
    slug: 'precise-subsoiling-2021',
    title: 'Prediction of precise subsoiling based on analytical method, discrete element simulation and experimental data from soil bin',
    shortTitle: 'Precise Subsoiling & DEM Simulation (Sci. Rep. 2021)',
    authors: [
      { name: 'Nelson Richard Makange', affiliations: [3] },
      { name: 'Changying Ji', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Idris Idris Sunusi', affiliations: [3] },
      { name: 'Samwel Opiyo', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Scientific Reports (Nature Portfolio)',
    venueShort: 'Scientific Reports · Nature · 2021',
    year: 2021,
    month: 'May',
    dateISO: '2021-05-25',
    category: 'journal',
    status: 'Published · Nature Portfolio · 45+ Citations',
    citations: 45,
    openAccess: true,
    doi: '10.1038/s41598-021-90682-w',
    paperUrl: 'https://doi.org/10.1038/s41598-021-90682-w',
    tldr: 'Validates analytical models and discrete element method (DEM) soil-tillage simulations against controlled soil-bin measurements (45+ citations).',
    abstract: 'Combines analytical soil mechanics, Discrete Element Method (DEM) modeling, and instrumented soil-bin experiments to predict draft forces and disturbance profiles for precision agricultural subsoiling implements.',
    keywords: ['precision subsoiling', 'DEM simulation', 'soil bin', 'Scientific Reports', 'agricultural engineering'],
    topics: ['Agriculture'],
    bibtex: `@article{makange2021subsoiling,
  title={Prediction of precise subsoiling based on analytical method, discrete element simulation and experimental data from soil bin},
  author={Makange, Nelson Richard and Ji, Changying and Nyalala, Innocent and Sunusi, Idris Idris and Opiyo, Samwel},
  journal={Scientific Reports},
  year={2021},
  doi={10.1038/s41598-021-90682-w},
  publisher={Nature Portfolio}
}`,
    apa: `Makange, N. R., Ji, C., Nyalala, I., Sunusi, I. I., & Opiyo, S. (2021). Prediction of precise subsoiling based on analytical method, discrete element simulation and experimental data from soil bin. Scientific Reports. https://doi.org/10.1038/s41598-021-90682-w`
  },

  {
    slug: 'broiler-carcass-weight-2021',
    title: 'On-line weight estimation of broiler carcass and cuts by a computer vision system',
    shortTitle: 'Online Broiler Carcass & Cuts Weight CV (Poultry Sci. 2021)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Nelson Richard Makange', affiliations: [3] },
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Qi Chao', affiliations: [3] },
      { name: 'Luke Nyalala', affiliations: [3] },
      { name: 'Jiayu Zhang', affiliations: [3] },
      { name: 'Yi Zuo', affiliations: [3] },
      { name: 'Khurram Yousaf', affiliations: [3] },
      { name: 'Chao Liu', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Poultry Science (Elsevier), Vol. 100, 101474',
    venueShort: 'Poultry Science · 2021',
    year: 2021,
    month: 'Dec',
    dateISO: '2021-12-01',
    category: 'journal',
    status: 'Published · Open Access · 36+ Citations',
    impactFactor: '4.2',
    citations: 36,
    openAccess: true,
    doi: '10.1016/j.psj.2021.101474',
    paperUrl: 'https://doi.org/10.1016/j.psj.2021.101474',
    tldr: 'Automated vision-based online mass estimation across whole broiler carcasses and commercial retail cuts (36+ citations).',
    abstract: 'Develops an online computer vision and depth feature regression pipeline capable of estimating the weights of whole broiler carcasses and commercial anatomical cuts in real time without halting conveyor lines.',
    keywords: ['broiler carcass', 'weight estimation', 'computer vision', 'depth imaging', 'Poultry Science'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{nyalala2021broilercuts,
  title={On-line weight estimation of broiler carcass and cuts by a computer vision system},
  author={Nyalala, Innocent and Okinda, Cedric and Makange, Nelson Richard and Korohou, Tchalla and Chao, Qi and Nyalala, Luke and Jiayu, Zhang and Zuo, Yi and Yousaf, Khurram and Liu, Chao and Chen, Kunjie},
  journal={Poultry Science},
  pages={101474},
  year={2021},
  doi={10.1016/j.psj.2021.101474},
  publisher={Elsevier}
}`,
    apa: `Nyalala, I., Okinda, C., Makange, N. R., Korohou, T., Chao, Q., Nyalala, L., Jiayu, Z., Zuo, Y., Yousaf, K., Liu, C., & Chen, K. (2021). On-line weight estimation of broiler carcass and cuts by a computer vision system. Poultry Science, 101474. https://doi.org/10.1016/j.psj.2021.101474`
  },

  {
    slug: 'tea-chrysanthemum-fyolo-2021',
    title: 'Detecting the Early Flowering Stage of Tea Chrysanthemum Using the F-YOLO Model',
    shortTitle: 'F-YOLO Tea Chrysanthemum Detection (Agronomy 2021)',
    authors: [
      { name: 'Qi Chao', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Agronomy (MDPI), Vol. 11(5), 834',
    venueShort: 'Agronomy · 2021',
    year: 2021,
    month: 'Apr',
    dateISO: '2021-04-24',
    category: 'journal',
    status: 'Published · Open Access · 18+ Citations',
    citations: 18,
    openAccess: true,
    doi: '10.3390/agronomy11050834',
    paperUrl: 'https://doi.org/10.3390/agronomy11050834',
    tldr: 'Introduces F-YOLO for accurate, lightweight detection of early flowering stages in field tea chrysanthemum images.',
    abstract: 'Proposes the F-YOLO object detector tailored for detecting small, occluded early-stage tea chrysanthemum blossoms under complex outdoor lighting, enabling automated harvest timing.',
    keywords: ['F-YOLO', 'object detection', 'tea chrysanthemum', 'Agronomy', 'precision agriculture'],
    topics: ['Agriculture', 'Computer Vision', 'Deep Learning'],
    bibtex: `@article{chao2021fyolo,
  title={Detecting the Early Flowering Stage of Tea Chrysanthemum Using the F-YOLO Model},
  author={Chao, Qi and Nyalala, Innocent and Chen, Kunjie},
  journal={Agronomy},
  volume={11},
  number={5},
  pages={834},
  year={2021},
  doi={10.3390/agronomy11050834}
}`,
    apa: `Chao, Q., Nyalala, I., & Chen, K. (2021). Detecting the Early Flowering Stage of Tea Chrysanthemum Using the F-YOLO Model. Agronomy, 11(5), 834. https://doi.org/10.3390/agronomy11050834`
  },

  {
    slug: 'garlic-drying-optimization-2021',
    title: 'Drying process optimization of garlic slices in closed-loop heat pump drying system by Box-Behnken design',
    shortTitle: 'Closed-Loop Heat Pump Garlic Drying (JFPP 2021)',
    authors: [
      { name: 'Haolu Liu', affiliations: [3] },
      { name: 'Khurram Yousaf', affiliations: [3] },
      { name: 'Zhenwei Yu', affiliations: [3] },
      { name: 'Asad Riaz', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Muhammad Waqas Alam Chattha', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Journal of Food Processing and Preservation (Wiley)',
    venueShort: 'J. Food Process. Preserv. · 2021',
    year: 2021,
    month: 'Nov',
    dateISO: '2021-11-01',
    category: 'journal',
    status: 'Published · 20+ Citations',
    citations: 20,
    doi: '10.1111/jfpp.16190',
    paperUrl: 'https://doi.org/10.1111/jfpp.16190',
    tldr: 'Applies Box-Behnken response surface optimization to minimize energy consumption and preserve quality during closed-loop heat pump drying of garlic slices.',
    abstract: 'Investigates temperature, slice thickness, and airflow trade-offs in a closed-loop heat pump drying system using Box-Behnken experimental design to optimize thermal efficiency and dried garlic quality.',
    keywords: ['heat pump drying', 'Box-Behnken design', 'postharvest processing', 'food engineering'],
    topics: ['Agriculture'],
    bibtex: `@article{liu2021garlicdrying,
  title={Drying process optimization of garlic slices in closed-loop heat pump drying system by Box-Behnken design},
  author={Liu, Haolu and Yousaf, Khurram and Yu, Zhenwei and Riaz, Asad and Nyalala, Innocent and Chattha, Muhammad Waqas Alam and Chen, Kunjie},
  journal={Journal of Food Processing and Preservation},
  year={2021},
  doi={10.1111/jfpp.16190}
}`,
    apa: `Liu, H., Yousaf, K., Yu, Z., Riaz, A., Nyalala, I., Chattha, M. W. A., & Chen, K. (2021). Drying process optimization of garlic slices in closed-loop heat pump drying system by Box-Behnken design. Journal of Food Processing and Preservation. https://doi.org/10.1111/jfpp.16190`
  },

  // =========================================================================
  // 2020 PUBLICATIONS
  // =========================================================================
  {
    slug: 'poultry-welfare-review-2020',
    title: 'A review on computer vision systems in monitoring of poultry: A welfare perspective',
    shortTitle: 'Computer Vision in Poultry Welfare Review (AIIA 2020)',
    authors: [
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Celestine Okinda', affiliations: [3] },
      { name: 'Jintao Wang', affiliations: [3] },
      { name: 'Tracy Achieng', affiliations: [3] },
      { name: 'Patrick Wamalwa', affiliations: [3] },
      { name: 'Tai Mang', affiliations: [3] },
      { name: 'Mingxia Shen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Artificial Intelligence in Agriculture (Elsevier), Vol. 4, pp. 184–208',
    venueShort: 'Artificial Intelligence in Agriculture · 2020',
    year: 2020,
    month: 'Sep',
    dateISO: '2020-09-15',
    category: 'journal',
    status: 'Published · Open Access · 242+ Citations',
    impactFactor: '12.4',
    citations: 242,
    openAccess: true,
    doi: '10.1016/j.aiia.2020.09.002',
    paperUrl: 'https://doi.org/10.1016/j.aiia.2020.09.002',
    tldr: 'Landmark survey of computer vision architectures for continuous, non-invasive livestock behavior, health, and welfare monitoring in poultry production (242+ citations).',
    abstract: 'Comprehensive synthesis of RGB, thermal, and depth computer vision systems for automated monitoring of poultry gait, posture, flock distribution, thermal stress, and disease indicators from an animal welfare perspective.',
    keywords: ['poultry welfare', 'computer vision', 'precision livestock farming', 'Artificial Intelligence in Agriculture'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{okinda2020poultrywelfare,
  title={A review on computer vision systems in monitoring of poultry: A welfare perspective},
  author={Okinda, Cedric and Nyalala, Innocent and Korohou, Tchalla and Okinda, Celestine and Wang, Jintao and Achieng, Tracy and Wamalwa, Patrick and Mang, Tai and Shen, Mingxia},
  journal={Artificial Intelligence in Agriculture},
  volume={4},
  pages={184--208},
  year={2020},
  doi={10.1016/j.aiia.2020.09.002},
  publisher={Elsevier}
}`,
    apa: `Okinda, C., Nyalala, I., Korohou, T., Okinda, C., Wang, J., Achieng, T., Wamalwa, P., Mang, T., & Shen, M. (2020). A review on computer vision systems in monitoring of poultry: A welfare perspective. Artificial Intelligence in Agriculture, 4, 184–208. https://doi.org/10.1016/j.aiia.2020.09.002`
  },

  {
    slug: 'egg-volume-cv-2020',
    title: 'Egg volume estimation based on image processing and computer vision',
    shortTitle: 'Egg Volume Estimation via Computer Vision (JFE 2020)',
    authors: [
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Yuwen Sun', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Samwel Opiyo', affiliations: [3] },
      { name: 'Jintao Wang', affiliations: [3] },
      { name: 'Mingxia Shen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Journal of Food Engineering (Elsevier), Vol. 283, 110041',
    venueShort: 'J. Food Engineering · 2020',
    year: 2020,
    month: 'Oct',
    dateISO: '2020-10-01',
    category: 'journal',
    status: 'Published · IF 5.3 · 87+ Citations',
    impactFactor: '5.3',
    citations: 87,
    doi: '10.1016/j.jfoodeng.2020.110041',
    paperUrl: 'https://doi.org/10.1016/j.jfoodeng.2020.110041',
    tldr: 'Non-destructive morphological image processing and infrared-depth modeling for accurate egg volume estimation (87+ citations).',
    abstract: 'Develops an image-processing and geometric reconstruction pipeline to measure egg dimensions and estimate exact volume rapidly and non-destructively compared against water displacement baselines.',
    keywords: ['egg volume', 'image processing', 'computer vision', 'Journal of Food Engineering'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{okinda2020eggvolume,
  title={Egg volume estimation based on image processing and computer vision},
  author={Okinda, Cedric and Sun, Yuwen and Nyalala, Innocent and Korohou, Tchalla and Opiyo, Samwel and Wang, Jintao and Shen, Mingxia},
  journal={Journal of Food Engineering},
  volume={283},
  pages={110041},
  year={2020},
  doi={10.1016/j.jfoodeng.2020.110041},
  publisher={Elsevier}
}`,
    apa: `Okinda, C., Sun, Y., Nyalala, I., Korohou, T., Opiyo, S., Wang, J., & Shen, M. (2020). Egg volume estimation based on image processing and computer vision. Journal of Food Engineering, 283, 110041. https://doi.org/10.1016/j.jfoodeng.2020.110041`
  },

  {
    slug: 'wheat-grain-yield-2020',
    title: 'Wheat Grain Yield Estimation Based on Image Morphological Properties and Wheat Biomass',
    shortTitle: 'Wheat Grain Yield Estimation (J. Sensors 2020)',
    authors: [
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Haikang Li', affiliations: [3] },
      { name: 'Yifei Cao', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Lianfei Huo', affiliations: [3] },
      { name: 'Mouloumdema Pouwedeou Potcho', affiliations: [3] },
      { name: 'Xiang Li', affiliations: [3] },
      { name: 'Qishuo Ding', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Journal of Sensors, 1571936',
    venueShort: 'Journal of Sensors · 2020',
    year: 2020,
    month: 'Feb',
    dateISO: '2020-02-01',
    category: 'journal',
    status: 'Published · Open Access · 34+ Citations',
    citations: 34,
    openAccess: true,
    doi: '10.1155/2020/1571936',
    paperUrl: 'https://doi.org/10.1155/2020/1571936',
    tldr: 'Combines morphological image features and wheat biomass measurements for pre-harvest grain yield modeling (34+ citations).',
    abstract: 'Extracts quantitative morphological ear and canopy descriptors from wheat imaging alongside biomass features to establish reliable predictive models for field wheat grain yield.',
    keywords: ['wheat yield', 'morphological features', 'computer vision', 'biomass'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{korohou2020wheat,
  title={Wheat Grain Yield Estimation Based on Image Morphological Properties and Wheat Biomass},
  author={Korohou, Tchalla and Okinda, Cedric and Li, Haikang and Cao, Yifei and Nyalala, Innocent and Huo, Lianfei and Potcho, Mouloumdema Pouwedeou and Li, Xiang and Ding, Qishuo},
  journal={Journal of Sensors},
  pages={1571936},
  year={2020},
  doi={10.1155/2020/1571936}
}`,
    apa: `Korohou, T., Okinda, C., Li, H., Cao, Y., Nyalala, I., Huo, L., Potcho, M. P., Li, X., & Ding, Q. (2020). Wheat Grain Yield Estimation Based on Image Morphological Properties and Wheat Biomass. Journal of Sensors, 1571936. https://doi.org/10.1155/2020/1571936`
  },

  {
    slug: 'rice-kernels-separation-2020',
    title: 'Separation of partially occluded rice kernels and variety classification based on computer vision',
    shortTitle: 'Occluded Rice Kernel Classification (IAEJ 2020)',
    authors: [
      { name: 'Tchalla Korohou', affiliations: [3] },
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'I. Torotwa', affiliations: [3] },
      { name: 'E. Mwangi', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'International Agricultural Engineering Journal, ISSN 0858-2114',
    venueShort: 'Int. Agric. Eng. J. · 2020',
    year: 2020,
    month: 'Jan',
    dateISO: '2020-01-15',
    category: 'journal',
    status: 'Published · Journal Article',
    tldr: 'Morphological watershed segmentation and classification for separating touching and occluded rice kernels across grain varieties.',
    abstract: 'Addresses touching and overlapping rice grain clusters using watershed segmentation and morphological shape classification to automate rice variety identification in post-harvest grain inspection.',
    keywords: ['rice kernels', 'occlusion segmentation', 'variety classification', 'computer vision'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{korohou2020ricekernels,
  title={Separation of partially occluded rice kernels and variety classification based on computer vision},
  author={Korohou, Tchalla and Okinda, Cedric and Nyalala, Innocent and Torotwa, I. and Mwangi, E.},
  journal={International Agricultural Engineering Journal},
  year={2020}
}`,
    apa: `Korohou, T., Okinda, C., Nyalala, I., Torotwa, I., & Mwangi, E. (2020). Separation of partially occluded rice kernels and variety classification based on computer vision. International Agricultural Engineering Journal.`
  },

  // =========================================================================
  // 2019 PUBLICATIONS
  // =========================================================================
  {
    slug: 'sick-birds-broiler-2019',
    title: 'A machine vision system for early detection and prediction of sick birds: A broiler chicken model',
    shortTitle: 'Early Sick Broiler Detection via CV (Biosystems Eng. 2019)',
    authors: [
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Mingzhou Lu', affiliations: [3] },
      { name: 'Longshen Liu', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Caroline Muneri', affiliations: [3] },
      { name: 'Jintao Wang', affiliations: [3] },
      { name: 'Hailin Zhang', affiliations: [3] },
      { name: 'Mingxia Shen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Biosystems Engineering (Elsevier), Vol. 188, pp. 229–242',
    venueShort: 'Biosystems Engineering · 2019',
    year: 2019,
    month: 'Dec',
    dateISO: '2019-12-01',
    category: 'journal',
    status: 'Published · Open Access · 194+ Citations',
    impactFactor: '6.5',
    citations: 194,
    openAccess: true,
    doi: '10.1016/j.biosystemseng.2019.09.015',
    paperUrl: 'https://doi.org/10.1016/j.biosystemseng.2019.09.015',
    tldr: 'Continuous overhead machine vision posture and mobility tracking for early detection and prediction of illness in commercial broiler houses (194+ citations).',
    abstract: 'Early illness detection prevents devastating poultry flock mortality. Using continuous overhead RGB-depth imaging, shape posture descriptors, and optical-flow mobility features, we construct an automated classifier and early warning system for sick broiler chickens validated against clinical diagnosis.',
    keywords: ['broiler health', 'machine vision', 'early disease detection', 'Biosystems Engineering', 'livestock'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{okinda2019sickbirds,
  title={A machine vision system for early detection and prediction of sick birds: A broiler chicken model},
  author={Okinda, Cedric and Lu, Mingzhou and Liu, Longshen and Nyalala, Innocent and Muneri, Caroline and Wang, Jintao and Zhang, Hailin and Shen, Mingxia},
  journal={Biosystems Engineering},
  volume={188},
  pages={229--242},
  year={2019},
  doi={10.1016/j.biosystemseng.2019.09.015},
  publisher={Elsevier}
}`,
    apa: `Okinda, C., Lu, M., Liu, L., Nyalala, I., Muneri, C., Wang, J., Zhang, H., & Shen, M. (2019). A machine vision system for early detection and prediction of sick birds: A broiler chicken model. Biosystems Engineering, 188, 229–242. https://doi.org/10.1016/j.biosystemseng.2019.09.015`
  },

  {
    slug: 'cherry-tomato-volume-2019',
    title: 'Tomato volume and mass estimation using computer vision and machine learning algorithms: Cherry tomato model',
    shortTitle: 'Cherry Tomato Volume & Mass CV (JFE 2019)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Luke Nyalala', affiliations: [3] },
      { name: 'Nelson Richard Makange', affiliations: [3] },
      { name: 'Qi Chao', affiliations: [3] },
      { name: 'Chao Liu', affiliations: [3] },
      { name: 'Khurram Yousaf', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Journal of Food Engineering (Elsevier), Vol. 263, pp. 288–298',
    venueShort: 'J. Food Engineering · 2019',
    year: 2019,
    month: 'Dec',
    dateISO: '2019-12-01',
    category: 'journal',
    status: 'Published · IF 5.3 · 178+ Citations',
    impactFactor: '5.3',
    citations: 178,
    doi: '10.1016/j.jfoodeng.2019.07.012',
    paperUrl: 'https://doi.org/10.1016/j.jfoodeng.2019.07.012',
    tldr: 'Depth-imaging and machine learning regression (RBF-SVR) for non-contact cherry tomato volume and mass grading in postharvest lines (178+ citations).',
    abstract: 'Constructs a depth-camera computer vision pipeline extracting 2D geometric and 3D depth volume descriptors trained with support vector regression and Bayesian ANN models to estimate cherry tomato mass and volume with high precision (R^2 > 0.97).',
    keywords: ['cherry tomato', 'volume estimation', 'mass estimation', 'depth imaging', 'SVR', 'Journal of Food Engineering'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{nyalala2019tomato,
  title={Tomato volume and mass estimation using computer vision and machine learning algorithms: Cherry tomato model},
  author={Nyalala, Innocent and Okinda, Cedric and Nyalala, Luke and Makange, Nelson and Chao, Qi and Liu, Chao and Yousaf, Khurram and Chen, Kunjie},
  journal={Journal of Food Engineering},
  volume={263},
  pages={288--298},
  year={2019},
  doi={10.1016/j.jfoodeng.2019.07.012},
  publisher={Elsevier}
}`,
    apa: `Nyalala, I., Okinda, C., Nyalala, L., Makange, N., Chao, Q., Liu, C., Yousaf, K., & Chen, K. (2019). Tomato volume and mass estimation using computer vision and machine learning algorithms: Cherry tomato model. Journal of Food Engineering, 263, 288–298. https://doi.org/10.1016/j.jfoodeng.2019.07.012`
  },

  {
    slug: 'activated-carbon-sludge-2019',
    title: 'Production of activated carbon from sludge and herb residue of traditional Chinese medicine industry and its application for methylene blue removal',
    shortTitle: 'Activated Carbon from Herb Sludge (BioResources 2019)',
    authors: [
      { name: 'Zhenwei Yu', affiliations: [3] },
      { name: 'Qi Gao', affiliations: [3] },
      { name: 'Yue Zhang', affiliations: [3] },
      { name: 'Dandan Wang', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'BioResources, Vol. 14(1), pp. 1333–1346',
    venueShort: 'BioResources · 2019',
    year: 2019,
    month: 'Feb',
    dateISO: '2019-02-01',
    category: 'journal',
    status: 'Published · Open Access · 26+ Citations',
    citations: 26,
    openAccess: true,
    doi: '10.15376/biores.14.1.1333-1346',
    paperUrl: 'https://doi.org/10.15376/biores.14.1.1333-1346',
    tldr: 'Valorizes pharmaceutical herb residues and sludge into high-surface-area activated carbon adsorbents for wastewater dye remediation (26+ citations).',
    abstract: 'Develops sustainable pyrolysis-activated adsorbents derived from traditional Chinese medicine sludge and herb residues, demonstrating efficient adsorption kinetics for methylene blue dye removal from industrial effluents.',
    keywords: ['activated carbon', 'waste valorization', 'adsorption', 'sustainability'],
    topics: ['Agriculture'],
    bibtex: `@article{yu2019activatedcarbon,
  title={Production of activated carbon from sludge and herb residue of traditional Chinese medicine industry and its application for methylene blue removal},
  author={Yu, Zhenwei and Gao, Qi and Zhang, Yue and Wang, Dandan and Nyalala, Innocent and Chen, Kunjie},
  journal={BioResources},
  volume={14},
  number={1},
  pages={1333--1346},
  year={2019},
  doi={10.15376/biores.14.1.1333-1346}
}`,
    apa: `Yu, Z., Gao, Q., Zhang, Y., Wang, D., Nyalala, I., & Chen, K. (2019). Production of activated carbon from sludge and herb residue of traditional Chinese medicine industry and its application for methylene blue removal. BioResources, 14(1), 1333–1346. https://doi.org/10.15376/biores.14.1.1333-1346`
  },

  {
    slug: 'paddy-drying-efficiency-2019',
    title: 'Influence of environmental conditions on drying efficiency and heat pump performance in closed and open loop drying of paddy',
    shortTitle: 'Heat Pump Paddy Drying Efficiency (Drying Tech. 2019)',
    authors: [
      { name: 'Khurram Yousaf', affiliations: [3] },
      { name: 'Haolu Liu', affiliations: [3] },
      { name: 'Xu Gao', affiliations: [3] },
      { name: 'Chao Liu', affiliations: [3] },
      { name: 'Adnan Abbas', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Muhammad Ahmad', affiliations: [3] },
      { name: 'Muhammad Ameen', affiliations: [3] },
      { name: 'Kunjie Chen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Drying Technology (Taylor & Francis)',
    venueShort: 'Drying Technology · 2019',
    year: 2019,
    month: 'Nov',
    dateISO: '2019-11-01',
    category: 'journal',
    status: 'Published · 28+ Citations',
    citations: 28,
    doi: '10.1080/07373937.2019.1691011',
    paperUrl: 'https://doi.org/10.1080/07373937.2019.1691011',
    tldr: 'Compares thermodynamic efficiency and moisture extraction rates of closed-loop vs. open-loop heat pump paddy dryers across ambient regimes (28+ citations).',
    abstract: 'Evaluates how ambient temperature and relative humidity affect specific moisture extraction rates and coefficient of performance in closed-loop and open-loop paddy heat-pump drying systems.',
    keywords: ['paddy drying', 'heat pump', 'thermodynamics', 'postharvest engineering'],
    topics: ['Agriculture'],
    bibtex: `@article{yousaf2019paddy,
  title={Influence of environmental conditions on drying efficiency and heat pump performance in closed and open loop drying of paddy},
  author={Yousaf, Khurram and Liu, Haolu and Gao, Xu and Liu, Chao and Abbas, Adnan and Nyalala, Innocent and Ahmad, Muhammad and Ameen, Muhammad and Chen, Kunjie},
  journal={Drying Technology},
  year={2019},
  doi={10.1080/07373937.2019.1691011}
}`,
    apa: `Yousaf, K., Liu, H., Gao, X., Liu, C., Abbas, A., Nyalala, I., Ahmad, M., Ameen, M., & Chen, K. (2019). Influence of environmental conditions on drying efficiency and heat pump performance in closed and open loop drying of paddy. Drying Technology. https://doi.org/10.1080/07373937.2019.1691011`
  },

  // =========================================================================
  // 2018 – 2015 FOUNDATIONAL PUBLICATIONS
  // =========================================================================
  {
    slug: 'sow-asphyxia-farrowing-2018',
    title: 'Asphyxia occurrence detection in sows during the farrowing phase by inter-birth interval evaluation',
    shortTitle: 'Sow Asphyxia Detection During Farrowing (COMPAG 2018)',
    authors: [
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Mingzhou Lu', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Jiawei Li', affiliations: [3] },
      { name: 'Mingxia Shen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Computers and Electronics in Agriculture (Elsevier), Vol. 152, pp. 221–232',
    venueShort: 'Comput. Electron. Agric. · 2018',
    year: 2018,
    month: 'Sep',
    dateISO: '2018-09-01',
    category: 'journal',
    status: 'Published · IF 8.9 · 28+ Citations',
    impactFactor: '8.9',
    citations: 28,
    doi: '10.1016/j.compag.2018.07.007',
    paperUrl: 'https://doi.org/10.1016/j.compag.2018.07.007',
    tldr: 'Automated vision-based inter-birth interval tracking to flag neonatal piglet asphyxia risks in real time during sow farrowing (28+ citations).',
    abstract: 'Detects prolonged inter-birth intervals and dystocia events during farrowing through continuous pen camera monitoring, enabling timely stockperson intervention to reduce neonatal piglet asphyxia mortality.',
    keywords: ['farrowing monitoring', 'asphyxia detection', 'precision livestock', 'computer vision'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{okinda2018asphyxia,
  title={Asphyxia occurrence detection in sows during the farrowing phase by inter-birth interval evaluation},
  author={Okinda, Cedric and Lu, Mingzhou and Nyalala, Innocent and Li, Jiawei and Shen, Mingxia},
  journal={Computers and Electronics in Agriculture},
  volume={152},
  pages={221--232},
  year={2018},
  doi={10.1016/j.compag.2018.07.007},
  publisher={Elsevier}
}`,
    apa: `Okinda, C., Lu, M., Nyalala, I., Li, J., & Shen, M. (2018). Asphyxia occurrence detection in sows during the farrowing phase by inter-birth interval evaluation. Computers and Electronics in Agriculture, 152, 221–232. https://doi.org/10.1016/j.compag.2018.07.007`
  },

  {
    slug: 'farrowing-onset-classification-2018',
    title: 'Detection of an onset of farrowing by classification of crated sow\'s activities',
    shortTitle: 'Farrowing Onset Classification via Sow Activity (2018)',
    authors: [
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Mingxia Shen', affiliations: [3] },
      { name: 'Jiawei Li', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Longshen Liu', affiliations: [3] },
      { name: 'Mingzhou Lu', affiliations: [3] },
      { name: 'Guangyue Zhang', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'International Agricultural Engineering Journal / Asian Agricultural Engineering',
    venueShort: 'Agric. Engineering · 2018',
    year: 2018,
    month: 'Jun',
    dateISO: '2018-06-01',
    category: 'journal',
    status: 'Published · 3+ Citations',
    citations: 3,
    paperUrl: 'https://openalex.org/W3097890783',
    tldr: 'Classifies temporal posture transitions in crated sows to predict impending farrowing onset using overhead sensing.',
    abstract: 'Analyzes posture-change frequencies and resting-to-standing dynamics of crated sows prior to parturition, providing automated alerts ahead of farrowing onset.',
    keywords: ['sow behavior', 'farrowing prediction', 'activity classification', 'precision livestock'],
    topics: ['Agriculture', 'Computer Vision'],
    bibtex: `@article{okinda2018farrowingonset,
  title={Detection of an onset of farrowing by classification of crated sow's activities},
  author={Okinda, Cedric and Shen, Mingxia and Li, Jiawei and Nyalala, Innocent and Liu, Longshen and Lu, Mingzhou and Zhang, Guangyue},
  journal={International Agricultural Engineering Journal},
  year={2018}
}`,
    apa: `Okinda, C., Shen, M., Li, J., Nyalala, I., Liu, L., Lu, M., & Zhang, G. (2018). Detection of an onset of farrowing by classification of crated sow's activities. International Agricultural Engineering Journal.`
  },

  {
    slug: 'wsn-localization-virtual-force-2016',
    title: 'Research on range-based localisation algorithm with virtual force and time synchronisation in wireless sensor and actor networks',
    shortTitle: 'WSAN Virtual-Force Localization (IJCNDS 2016)',
    authors: [
      { name: 'Haoyun Wang', affiliations: [3] },
      { name: 'Ke Wang', affiliations: [3] },
      { name: 'Li Duo', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Yingjun Xiong', affiliations: [3] },
      { name: 'Huanliang Xu', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'International Journal of Communication Networks and Distributed Systems (Inderscience)',
    venueShort: 'IJCNDS · 2016',
    year: 2016,
    month: 'Apr',
    dateISO: '2016-04-01',
    category: 'journal',
    status: 'Published · 3+ Citations',
    citations: 3,
    doi: '10.1504/ijcnds.2016.076650',
    paperUrl: 'https://doi.org/10.1504/ijcnds.2016.076650',
    tldr: 'Improves node localization accuracy and clock synchronization across agricultural Wireless Sensor and Actor Networks using virtual-force refinement.',
    abstract: 'Proposes a range-based localization algorithm combining virtual-force iteration and distributed time synchronization to reduce spatial estimation error in agricultural wireless sensor and actor networks.',
    keywords: ['wireless sensor networks', 'localization', 'time synchronization', 'IoT'],
    topics: ['Agriculture', 'IoT'],
    bibtex: `@article{wang2016wsan,
  title={Research on range-based localisation algorithm with virtual force and time synchronisation in wireless sensor and actor networks},
  author={Wang, Haoyun and Wang, Ke and Duo, Li and Nyalala, Innocent and Xiong, Yingjun and Xu, Huanliang},
  journal={International Journal of Communication Networks and Distributed Systems},
  year={2016},
  doi={10.1504/ijcnds.2016.076650}
}`,
    apa: `Wang, H., Wang, K., Duo, L., Nyalala, I., Xiong, Y., & Xu, H. (2016). Research on range-based localisation algorithm with virtual force and time synchronisation in wireless sensor and actor networks. International Journal of Communication Networks and Distributed Systems. https://doi.org/10.1504/ijcnds.2016.076650`
  },

  {
    slug: 'intelligent-greenhouse-arduino-2016',
    title: 'Design and Implementation of an Intelligent Greenhouse Control and Monitoring System Based on Arduino',
    shortTitle: 'Intelligent Greenhouse IoT System (MSc Thesis 2016)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'Nanjing Agricultural University (M.Sc. Thesis Monograph)',
    venueShort: 'M.Sc. Thesis · NAU 2016',
    year: 2016,
    month: 'Jul',
    dateISO: '2016-07-01',
    category: 'journal',
    status: 'Published · M.Sc. Monograph',
    tldr: 'Embedded microcontroller and multi-sensor greenhouse automation architecture for real-time microclimate monitoring and actuation.',
    abstract: 'Designs and validates a low-cost Arduino-based environmental sensing and closed-loop greenhouse actuation platform tracking temperature, humidity, soil moisture, and illumination.',
    keywords: ['smart greenhouse', 'Arduino', 'embedded IoT', 'agricultural automation'],
    topics: ['Agriculture', 'IoT'],
    bibtex: `@mastersthesis{nyalala2016greenhouse,
  title={Design and Implementation of an Intelligent Greenhouse Control and Monitoring System Based on Arduino},
  author={Nyalala, Innocent},
  school={Nanjing Agricultural University},
  year={2016}
}`,
    apa: `Nyalala, I. (2016). Design and Implementation of an Intelligent Greenhouse Control and Monitoring System Based on Arduino. Master's Thesis, Nanjing Agricultural University.`
  },

  {
    slug: 'intelligent-energy-saving-2015',
    title: 'Intelligent energy saving system',
    shortTitle: 'Intelligent Energy Saving System (IJETAE 2015)',
    authors: [
      { name: 'Cedric Okinda', affiliations: [3] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io', affiliations: [3] },
      { name: 'Z. Chi', affiliations: [3] },
      { name: 'Mingxia Shen', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.NAU],
    venue: 'International Journal of Emerging Technology and Advanced Engineering',
    venueShort: 'IJETAE · 2015',
    year: 2015,
    month: 'May',
    dateISO: '2015-05-01',
    category: 'journal',
    status: 'Published · 4+ Citations',
    citations: 4,
    tldr: 'Sensor-triggered occupancy and ambient illumination controller designed for automated energy conservation in academic and industrial facilities.',
    abstract: 'Presents a microcontroller-driven sensor array and intelligent switching architecture reducing idle electrical loads across indoor facilities based on occupancy and ambient light levels.',
    keywords: ['energy conservation', 'embedded systems', 'sensors', 'IoT'],
    topics: ['IoT'],
    bibtex: `@article{okinda2015energy,
  title={Intelligent energy saving system},
  author={Okinda, C. S. and Nyalala, Innocent and Chi, Z. and Mingxia, S.},
  journal={International Journal of Emerging Technology and Advanced Engineering},
  year={2015}
}`,
    apa: `Okinda, C. S., Nyalala, I., Chi, Z., & Mingxia, S. (2015). Intelligent energy saving system. International Journal of Emerging Technology and Advanced Engineering.`
  }
];

export const ALL_TOPICS = Array.from(
  new Set(PUBLICATIONS.flatMap((p) => p.topics))
).sort();

export const ALL_YEARS = Array.from(
  new Set(PUBLICATIONS.map((p) => p.year))
).sort((a, b) => b - a);

export function getRelatedWorks(currentSlug: string, count = 6): Publication[] {
  const others = PUBLICATIONS.filter((p) => p.slug !== currentSlug);
  const current = PUBLICATIONS.find((p) => p.slug === currentSlug);
  if (!current) return others.slice(0, count);
  return others
    .map((p) => ({
      pub: p,
      score:
        (p.seriesId && p.seriesId === current.seriesId ? 10 : 0) +
        p.topics.filter((t) => current.topics.includes(t)).length * 2 +
        (p.award ? 1 : 0) +
        (p.year >= 2025 ? 1 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.pub);
}
