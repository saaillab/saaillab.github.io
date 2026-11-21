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
  category: 'journal' | 'conference' | 'workshop' | 'preprint';
  status: string;
  award?: string;
  impactFactor?: string;
  citations?: number;
  isSaailLab?: boolean;
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
  figureHeading?: string;
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
  ABERDEEN: 'Department of Computer Science, University of Aberdeen, Aberdeen, UK',
  HNU: 'School of Information Science and Technology, Hangzhou Normal University, Hangzhou, China',
  ZJHU: "Women's Hospital, School of Medicine, Zhejiang University, Hangzhou, China",
};

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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Manuscript Under Peer Review',
    venueShort: 'Under Review · 2026',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-18',
    category: 'preprint',
    status: 'Under Peer Review',
    codeUrl: 'https://github.com/saaillab/CropGuardNet',
    datasetUrl: 'https://github.com/saaillab/CropGuardNet#dataset-deduplication',
    teaserImage: '/images/papers/cropguardnet/architecture.png',
    teaserCaption: 'CropGuardNet integrates CLAHE-Gaussian-high-pass preprocessing, MobileNetV3-Small (α = 0.50), a 3-branch dilated Multi-Scale Feature Pyramid (r ∈ {1, 2, 4}), depthwise separable refinement, SE attention, a 1-layer 2-head Compact ViT (10,176 params), dual-path pooling, and crop-aware conditioning in 481,574 parameters (1.84 MB FP32, 63.8M FLOPs, 5.00 ms CPU ONNX).',
    tldr: 'A 481,574-parameter (1.84 MB, 5.00 ms CPU ONNX) conditioned CNN-Transformer evaluated on 35,420 UUID- and pHash-deduplicated leaf images across 8 crops and 38 classes (99.17% accuracy, 0.9874 F1-macro), purging 80,238 duplicates and auditing four XAI families.',
    abstract: 'Crop diseases threaten food security, yet deep detectors remain single-crop, heavyweight, or opaque for edge deployment. We propose CropGuardNet, a lightweight Convolutional Neural Network (CNN) and Transformer framework on MobileNetV3-Small (α = 0.50) with 481,574 parameters, 1.84 MB FP32 weights, and 63.8M FLOPs, running at 5.00 ms (200.0 FPS) in single-thread CPU ONNX inference. It unites a dilated multi-scale feature pyramid, depthwise separable refinement, squeeze-and-excitation attention, a two-head Transformer, dual-path pooling, crop-aware conditioning, and four explainable AI (XAI) methods: Grad-CAM++, LayerCAM, LIME, and GradientSHAP. After purging 80,238 PlantVillage duplicates via specimen Universally Unique Identifier (UUID) grouping and 64-bit perceptual hash auditing, evaluation on 35,420 unique images spanning 38 classes and 8 crops (n = 5,314 test) reaches 99.17% accuracy, 0.9874 F1-macro, 0.9914 Matthews correlation coefficient (MCC), and 0.9998 AUC-ROC, leading F1-macro across seven models at 3.2x-279.1x fewer parameters than five baselines and 6.0x larger than LeafXNet at 18.1x fewer FLOPs. Top models match on 35 non-Rice classes, whereas species conditioning eliminates cross-crop errors, supports 99.79% automatic crop routing, and lifts minority Rice accuracy to 94.44%. CropGuardNet leads 20-regime corruptions at 83.61% mean accuracy (severe Wilcoxon p = 0.0020 vs. LeafXNet), 8-fold leave-one-crop-out probing (n = 7,072) at 81.22% accuracy and 0.8879 binary AUC-ROC, and XAI faithfulness with LayerCAM Deletion AUC 0.7262 and GradientSHAP Insertion AUC 0.9259. On PlantDoc field images, guided Mode A1 reaches 40.63%-45.91% zero-shot accuracy vs. 16.06%-17.58% unguided, 60.62% unmasked vs. 62.18% masked head adaptation under Mode A1-Auto (tying ResNet-50 behind LeafXNet at 63.73%), and 62.20% Enhanced or 63.66% Raw RGB accuracy after 20-epoch tuning.',
    keywords: ['plant disease detection', 'lightweight CNN', 'Vision Transformer', 'explainable AI', 'multi-crop classification', 'data deduplication', 'smart agriculture'],
    topics: [
      'Agriculture',
      'Deep Learning',
      'Computer Vision',
      'Explainable AI',
      'Benchmarking'
    ],
    highlights: [
      { value: '481,574', label: 'Parameters', sublabel: '1.84 MB FP32 · 63.8M FLOPs' },
      { value: '5.00 ms', label: 'CPU ONNX Latency', sublabel: '200.0 FPS single-thread' },
      { value: '99.17%', label: 'Test Accuracy', sublabel: '0.9874 F1-macro · n = 5,314' },
      { value: '80,238', label: 'Duplicates Purged', sublabel: 'UUID + 64-bit pHash audit' },
      { value: '83.61%', label: '20-Corruption Mean', sublabel: '+18.28 pp vs. LeafXNet' },
      { value: '99.79%', label: 'Auto Crop Routing', sublabel: 'Zero cross-crop FP (Mc = 0)' }
    ],
    contributions: [
      'Designed a compact 481,574-parameter hybrid CNN-Transformer combining parallel dilated multi-scale convolutions (r ∈ {1, 2, 4}), depthwise separable refinement, squeeze-and-excitation recalibration, and dual-path GAP fusion at 63.8M FLOPs.',
      'Introduced a learnable 8-species crop-aware conditioning module eliminating cross-crop false positives under guided inference and supporting two-stage automatic crop routing (Mode A1-Auto) at 99.79% species accuracy.',
      'Constructed a leak-free multi-crop benchmark of 35,420 unique leaf images across 38 classes and 8 crops by purging 80,238 offline-augmented PlantVillage duplicate copies via specimen UUID grouping and auditing cross-split similarity via 64-bit DCT perceptual hashing.',
      'Evaluated four complementary XAI families (Grad-CAM++, LayerCAM, LIME, GradientSHAP) through 20-step Deletion/Insertion faithfulness curves alongside 20-regime corruption stress tests, 8-fold leave-one-crop-out probing, and external PlantDoc field adaptation.'
    ],
    tables: [
      {
        title: 'Unified 8-Crop, 38-Class Benchmark Comparison (Test n = 5,314)',
        caption: 'CropGuardNet ranks first in 38-class F1-Macro, Macro-Precision, and Macro-Recall and achieves the lowest FLOPs across all seven architectures.',
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
    figureHeading: 'Multi-Crop Explainable AI Attribution',
    figures: [
      { src: '/images/papers/cropguardnet/fig_xai_master_8crops.png', caption: 'Quad-family explainable AI attribution (Grad-CAM++, LayerCAM, LIME, and GradientSHAP) across all eight crop species under Mode A1 inference. Gradient maps concentrate on necrotic leaf pathology with low Deletion AUC (0.7262 for LayerCAM; 0.7289 for Grad-CAM++), whereas GradientSHAP achieves the highest Insertion AUC (0.9259).' }
    ],
    isSaailLab: true,
    bibtex: `@misc{nyalala2026cropguardnet,
  title={CropGuardNet: A Unified Lightweight CNN-Transformer Framework with Multi-Scale Attention and Explainable AI for Cross-Crop Leaf Disease Detection},
  author={Nyalala, Innocent},
  howpublished={Manuscript Under Peer Review (SAAIL Lab)},
  year={2026},
  url={https://saaillab.github.io/papers/cropguardnet/}
}`,
    apa: `Nyalala, I. (2026). CropGuardNet: A Unified Lightweight CNN-Transformer Framework with Multi-Scale Attention and Explainable AI for Cross-Crop Leaf Disease Detection. Manuscript Under Peer Review. https://saaillab.github.io/papers/cropguardnet/`
  },

  {
    slug: 'capture-session-confounding-cloves',
    title: 'Capture-session confounding undermines the measurement validity of deep learning clove grading: evidence from Zanzibar',
    shortTitle: 'Capture-Session Confounding in Clove AI',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Manuscript Under Peer Review',
    venueShort: 'Under Review · 2026',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-05',
    category: 'preprint',
    status: 'Under Peer Review',
    isSaailLab: true,
    openAccess: false,
    teaserImage: '/images/papers/cloves/fig1_workflow.png',
    teaserCaption: 'Three-part experimental protocol testing capture-session confounding across 4,603 single-clove and 695 batch images, duplicate-aware 64-bit dHash grouping (3,455 groups), input mask ablation, and foreground/background swap probes.',
    tldr: 'Shows that 16 of 17 neural networks reach 98.1% to 99.3% in-session test macro-F1 on clove grading yet collapse to 29% to 47% on unseen capture days, still scoring 98.5% on empty backgrounds with cloves inpainted away.',
    abstract: 'The Zanzibar State Trading Corporation (ZSTC) prices cloves (Syzygium aromaticum) by four commercial grades assigned through non-destructive visual inspection. Using an image dataset aligned with these grades (4,603 single-clove and 695 batch images), we evaluated grading models under a protocol that controls near-duplicate leakage and training differences. Sixteen of seventeen pretrained networks reached 98.1% to 99.3% test macro-F1. Because the grades were photographed in separate sittings on six capture days, we tested what the networks learned. Trained on images taken on some days and tested on days never seen in training, mean macro-F1 fell from 99% to between 29% and 47%, with recall ranging from 1.5% to 95% across held-out grade-days. Images with the bud removed by inpainting were still graded at 98.5%, whereas the bud silhouette alone reached 68%. When a clove of one grade was pasted onto the background of another, networks followed the background in 53% to 57% of cases and the clove in 30% to 33%, whereas pasting each clove back onto its own background left accuracy unchanged (97% to 98%). The bud region alone supported about 93% macro-F1, so grade information is present in the clove; trained networks combine it with a capture-specific cue that dominates when the two conflict and causes some unseen sittings to be misgraded as a whole. We describe a low-cost probe protocol for testing the measurement validity of image datasets collected one class at a time, and the collection design needed to measure clove grading accuracy without this confound.',
    keywords: ['clove grading', 'capture-session confounding', 'shortcut learning', 'measurement validity', 'data leakage', 'Zanzibar'],
    topics: ['Agriculture', 'Computer Vision', 'Responsible AI', 'Benchmarking'],
    highlights: [
      { value: '99% to 29-47%', label: 'Cross-Day F1 Drop', 'sublabel': 'Unseen capture sittings collapse' },
      { value: '98.5%', label: 'Empty BG Grading', 'sublabel': 'Accuracy after bud inpainting' },
      { value: '53-57%', label: 'BG Override Rate', 'sublabel': 'Background beats clove in swaps' },
      { value: '17 Models', label: 'Duplicate-Controlled', 'sublabel': '3,455 dHash groups + 695 batches' }
    ],
    contributions: [
      'Demonstrates across 17 pretrained architectures (16 reaching 98.1%-99.3% standard F1) that single-session class acquisition creates catastrophic hidden confounding masked by standard random or dHash-grouped splits.',
      'Quantifies extreme cross-day collapse (29% to 47% mean macro-F1, per-grade recall 1.5% to 95%) when models are tested on held-out photography days.',
      'Proves shortcut dominance directly via bud-inpainting (98.5% accuracy with empty background) and foreground-background swaps (53%-57% background override vs. 93% isolated-clove ceiling).',
      'Delivers a practical low-cost validity probe protocol and randomized lot collection design eliminating session confounding in agricultural vision datasets.'
    ],
    figureHeading: 'Capture-Session Confounding Diagnostics',
    figures: [
      { src: '/images/papers/cloves/fig6_confound.png', caption: 'Inpainting and background-swap diagnostic probes proving networks follow capture-session background cues (98.5% accuracy without buds; 53%-57% swap override) over isolated clove buds.' }
    ],
    tables: [
      {
        title: 'Summary of Validity Probes Exposed on Duplicate-Controlled Clove Grading (17 Networks, n = 4,603)',
        headers: ['Evaluation Probe', 'Measured Macro-F1 / Accuracy', 'Diagnostic Interpretation'],
        rows: [
          ['Standard dHash-Grouped Split (16/17 CNN/ViT)', '98.1% - 99.3% macro-F1', 'Top models statistically indistinguishable (DenseNet-121 / Xception / ViT 99.25%)'],
          ['Held-Out Unseen Capture Day Split', '29% - 47% macro-F1', 'Catastrophic cross-session failure despite zero duplicate overlap'],
          ['Empty Background (Bud Removed via Inpainting)', '98.5% accuracy', 'Tray/illumination session artifacts carry almost full class signal'],
          ['Conflict Swap (Grade A Bud on Grade B BG)', '53% - 57% follow BG · 30% - 33% follow bud', 'Session background cue overrides biological bud features under conflict'],
          ['Isolated Clove Bud Foreground Alone', '~93% macro-F1', 'True morphological grading signal exists once background confounds are removed']
        ]
      }
    ],
    bibtex: `@misc{ndowo2026capture_confounding,
  title={Capture-session confounding undermines the measurement validity of deep learning clove grading: evidence from Zanzibar},
  author={Ndowo, Patrick Vincent and Nyalala, Innocent},
  year={2026},
  note={Manuscript under peer review}
}`,
    apa: `Ndowo, P. V., & Nyalala, I. (2026). Capture-session confounding undermines the measurement validity of deep learning clove grading: evidence from Zanzibar [Manuscript under peer review].`
  },

  {
    slug: 'digital-authoritarianism-east-africa',
    title: 'AI-Powered Surveillance, Internet Shutdowns, and Digital Citizenship as Resistance in East Africa: Evidence from Tanzania and Kenya',
    shortTitle: 'AI Surveillance & Digital Citizenship in EA',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Manuscript Under Peer Review',
    venueShort: 'Under Review · 2026',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-04',
    category: 'preprint',
    status: 'Under Peer Review',
    isSaailLab: true,
    openAccess: false,
    tldr: 'Comparative political-economy and governance analysis of AI surveillance, internet shutdowns, and Ubuntu/Afrofeminist digital citizenship resistance across Tanzania and Kenya between 2015 and 2025.',
    abstract: 'This study examines what happens to digital rights, political freedom, and citizen agency when governments deploy artificial intelligence surveillance systems and internet shutdowns across East African hybrid regimes between 2015 and 2025. Although Sub-Saharan Africa reached 29% mobile internet penetration in 2024, African governments spent over 1 billion USD annually on citizen surveillance infrastructure and imposed 21 internet shutdowns across 15 countries in 2024 alone, costing over 1.6 billion USD. Focusing on Tanzania (October 2025 election internet blackout and blocking of 80,000+ websites alongside cybercrime prosecution of journalists) and Kenya (Huawei Safe City facial recognition in Nairobi and Mombasa, constitutional litigation over biometric ID, and 2024 Finance Bill Gen Z protest disruptions), this study addresses Northern theoretical bias by grounding analysis in Ubuntu communal ethics and Afrofeminist data governance.',
    keywords: ['digital authoritarianism', 'AI surveillance', 'internet shutdowns', 'digital citizenship', 'Ubuntu ethics', 'Tanzania', 'Kenya', 'GovTech'],
    topics: ['Responsible AI', 'AI Policy & GovTech', 'East Africa'],
    highlights: [
      { value: '$1B+ / yr', label: 'Surveillance Spend', 'sublabel': 'African citizen monitoring infra' },
      { value: '$1.6B+', label: 'Shutdown Losses', 'sublabel': '21 blackouts across 15 states (2024)' },
      { value: '2015-2025', label: 'Tanzania & Kenya', 'sublabel': 'Comparative hybrid regime cases' },
      { value: 'Ubuntu', label: 'Counter-Framework', 'sublabel': 'Afrofeminist digital resistance' }
    ],
    contributions: [
      'Documents concrete mechanisms linking imported biometric/facial recognition infrastructure, telecommunications control, and statutory surveillance in Tanzania and Kenya between 2015 and 2025.',
      'Quantifies the economic and civic shock of electoral and protest blackouts, contrasting Tanzania October 2025 filtering of 80,000+ domains with Kenya Finance Bill 2024 civic disruptions.',
      'Advances an original African theoretical lens integrating Ubuntu relational solidarity and Afrofeminist data governance to analyze VPN mobilization, youth counterpublics, and legal resistance.'
    ],
    tables: [
      {
        title: 'Comparative Digital Repression & Civic Resistance Vectors in East Africa (2015-2025)',
        headers: ['Analytical Dimension', 'Tanzania Evidence', 'Kenya Evidence'],
        rows: [
          ['Surveillance & Connectivity Control', 'EPOCA & Cybercrimes statutory monitoring; Oct 2025 blackout + 80,000+ sites blocked', 'Huawei Safe City cameras (Nairobi/Mombasa); 2024 Finance Bill protest disruptions'],
          ['Legal & Institutional Arena', 'Constrained judicial review under centralized executive enforcement', 'Strategic High Court constitutional rulings on biometric digital ID (Huduma Namba)'],
          ['Citizen Counter-Power', 'Encrypted messaging, diaspora journalism, circumvention tooling', '#RejectFinanceBill2024 digital coordination & feminist counterpublic networks']
        ]
      }
    ],
    bibtex: `@misc{nyalala2026digital_authoritarianism,
  title={AI-Powered Surveillance, Internet Shutdowns, and Digital Citizenship as Resistance in East Africa: Evidence from Tanzania and Kenya},
  author={Nyalala, Innocent},
  year={2026},
  note={Manuscript under peer review}
}`,
    apa: `Nyalala, I. (2026). AI-Powered Surveillance, Internet Shutdowns, and Digital Citizenship as Resistance in East Africa: Evidence from Tanzania and Kenya [Manuscript under peer review].`
  },

  {
    slug: 'digital-ag-platform-failure-east-africa',
    title: 'Launched, Celebrated, Forgotten: A Critical Review of Why Digital and AI-Enabled Agriculture Platforms Fail, Stall, or Survive in East Africa',
    shortTitle: 'Why Digital Ag Platforms Fail or Survive in EA',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Manuscript Under Peer Review',
    venueShort: 'Under Review · 2026',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-03',
    category: 'preprint',
    status: 'Under Peer Review',
    isSaailLab: true,
    openAccess: false,
    teaserImage: '/images/papers/govtech/figure_01_taxonomy.png',
    teaserCaption: 'Institutional survival taxonomy across 22 independently verified East African digital agriculture platforms (2009-2026): only 1 of 10 venture/donor standalone startups remains confirmed active, versus 12 of 12 telecom-, government-, or consortium-embedded platforms.',
    tldr: 'Audits 22 named digital and AI agriculture platforms across five East African countries (2009-2026), revealing only 1 of 10 standalone startups sustains active scale compared with 12 of 12 institutionally embedded platforms.',
    abstract: 'East Africa is frequently framed as a global frontier for digital and AI-enabled agriculture, yet no systematic record tracks what actually happens to widely publicized platforms three to ten years after launch. Combining structured literature synthesis with primary evidence verification across 22 named digital agriculture platforms operating in Kenya, Uganda, Rwanda, Tanzania, and Ethiopia between 2009 and 2026, we audit operational survival against independent primary records rather than self-reported user totals. We observe a sharp institutional divergence: venture- or donor-funded standalone startups exhibit high attrition (only 1 of 10 confirmed active at scale, with documented shutdowns and severe organizational crises), whereas all 12 platforms embedded inside mobile network operators, public agricultural extension systems, asset-financing models, or sustained academic-nonprofit consortia remain active. We formulate a six-model institutional survival taxonomy alongside mandatory post-launch accountability reporting standards.',
    keywords: ['digital agriculture', 'platform failure', 'agtech sustainability', 'East Africa', 'ICT4D', 'GovTech', 'institutional economics'],
    topics: ['Agriculture', 'Responsible AI', 'AI Policy & GovTech', 'East Africa'],
    highlights: [
      { value: '22 Platforms', label: 'Individually Audited', 'sublabel': 'KE · UG · RW · TZ · ET (2009-2026)' },
      { value: '1 / 10', label: 'Standalone Startups', 'sublabel': 'Confirmed sustainably active' },
      { value: '12 / 12', label: 'Embedded Platforms', 'sublabel': 'MNO, gov, asset-finance, consortium' },
      { value: '6 Models', label: 'Survival Taxonomy', 'sublabel': 'Post-launch accountability standard' }
    ],
    contributions: [
      'Builds the first verified longitudinal ledger of 22 named East African digital and AI agricultural platforms (2009-2026) evaluated against primary operational records rather than launch press releases.',
      'Quantifies the institutional survival gap: 10% confirmed active survival among standalone VC/donor startups (1/10) versus 100% continuity across institutionally embedded platforms (12/12).',
      'Documents pervasive data-transparency deficits where conflicting sources disagree on whether prominent farmer platforms remain operational, recommending funder-mandated longitudinal outcome reporting.'
    ],
    tables: [
      {
        title: 'Institutional Survival Breakdown Across 22 Verified East African AgTech Platforms (2009-2026)',
        headers: ['Institutional Embedding Archetype', 'Survival Characteristic', 'Core Driver'],
        rows: [
          ['Standalone Venture / Donor Startup', '1 / 10 confirmed active', 'Post-grant valley of death & low smallholder SaaS willingness-to-pay'],
          ['Telecom-Embedded Services', 'Confirmed sustained', 'Bundled zero-rated distribution & carrier billing'],
          ['Government Extension / Subsidy Registry', 'Confirmed sustained', 'Recurring public budget & mandatory farmer enrollment'],
          ['Asset-Financing & Input Bundling', 'Confirmed sustained', 'Direct credit/input margin recovers digital platform cost'],
          ['Research Consortium & Institutional Transition', 'Confirmed sustained', 'Multi-cycle grant continuity & public data integration']
        ]
      }
    ],
    bibtex: `@misc{nyalala2026agtech_survival,
  title={Launched, Celebrated, Forgotten: A Critical Review of Why Digital and AI-Enabled Agriculture Platforms Fail, Stall, or Survive in East Africa},
  author={Nyalala, Innocent},
  year={2026},
  note={Manuscript under peer review}
}`,
    apa: `Nyalala, I. (2026). Launched, Celebrated, Forgotten: A Critical Review of Why Digital and AI-Enabled Agriculture Platforms Fail, Stall, or Survive in East Africa [Manuscript under peer review].`
  },

  {
    slug: 'institutional-drivers-digital-ag-ssa',
    title: 'Between Promise and Practice: Institutional Drivers and Barriers to Digital Transformation in Sub-Saharan African Smallholder Agriculture',
    shortTitle: 'Institutional Barriers in SSA Digital Ag',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Manuscript Under Peer Review',
    venueShort: 'Under Review · 2026',
    year: 2026,
    month: 'Nov',
    dateISO: '2026-11-02',
    category: 'preprint',
    status: 'Under Peer Review',
    isSaailLab: true,
    openAccess: false,
    teaserImage: '/images/papers/govtech/figure_01_framework.png',
    teaserCaption: 'Technology-Organization-Environment (TOE) and institutional voids synthesis connecting rural infrastructure constraints, cooperative platform governance, and conditional smallholder productivity gains across Sub-Saharan Africa.',
    tldr: 'Synthesizes Technology-Organization-Environment (TOE) and institutional voids evidence across Kenya, Tanzania, and Ethiopia showing why isolated digital tools stall despite 25% conditional yield gains.',
    abstract: 'Digital transformation has emerged as a central pillar of agricultural development strategy in Sub-Saharan Africa, where agriculture employs over 60% of the workforce, yet translation into sustained value for smallholder farmers operating under two hectares remains uneven. Drawing on the Technology-Organization-Environment (TOE) framework and institutional voids theory across Ethiopia, Kenya, and Tanzania, we synthesize empirical evidence on mobile advisories, AI diagnostics, and market linkages. Although controlled interventions demonstrate conditional yield gains up to 25% and income gains of 200 to 600 USD per hectare, most initiatives fail to scale due to weak institutional coordination, digital literacy gaps, fragmented data infrastructures, and extractive platform incentives. Sustainable adoption requires deliberate institutional co-evolution combining connectivity policy, inclusive platform design, and cooperative farmer governance.',
    keywords: ['digital transformation', 'smallholder agriculture', 'TOE framework', 'institutional voids', 'Sub-Saharan Africa', 'AI policy'],
    topics: ['Agriculture', 'Responsible AI', 'AI Policy & GovTech', 'East Africa'],
    highlights: [
      { value: 'Up to 25%', label: 'Conditional Yield Gain', 'sublabel': 'When advisory aligns with inputs' },
      { value: '$200-$600/ha', label: 'Documented Income Gain', 'sublabel': 'Controlled East African pilots' },
      { value: 'TOE + Voids', label: 'Theoretical Lens', 'sublabel': 'Tech, Org & Environment synthesis' },
      { value: 'KE · TZ · ET', label: 'Regional Scope', 'sublabel': 'Plots under 2 hectares' }
    ],
    contributions: [
      'Integrates Technology-Organization-Environment (TOE) adoption determinants with institutional voids theory across smallholder farming systems in Kenya, Tanzania, and Ethiopia.',
      'Reconciles stark divergence between pilot-level yield/income gains (up to 25% yield; $200-$600/ha) and macro-scale stalling when credit, input markets, and cooperative trust are absent.',
      'Proposes four policy propositions centering smallholder cooperative governance, rural connectivity subsidies, and interoperable public agricultural data standards.'
    ],
    tables: [
      {
        title: 'TOE & Institutional Voids Proposition Matrix for Sub-Saharan African Digital Agriculture',
        headers: ['TOE Dimension', 'Observed Structural Barrier', 'Institutional Co-Evolution Policy'],
        rows: [
          ['Technological Readiness', 'High feature-phone share & English-only UI', 'Local Swahili/dialect voice UI & offline edge models'],
          ['Organizational Governance', 'Extractive platform revenue extracting trader margins', 'Cooperative data trusts & smallholder revenue-share'],
          ['Environmental & Credit Voids', 'AI advice unusable without fertilizer/input access', 'Bundle agronomic advisories with cooperative credit & markets']
        ]
      }
    ],
    bibtex: `@misc{nyalala2026institutional_drivers,
  title={Between Promise and Practice: Institutional Drivers and Barriers to Digital Transformation in Sub-Saharan African Smallholder Agriculture},
  author={Nyalala, Innocent},
  year={2026},
  note={Manuscript under peer review}
}`,
    apa: `Nyalala, I. (2026). Between Promise and Practice: Institutional Drivers and Barriers to Digital Transformation in Sub-Saharan African Smallholder Agriculture [Manuscript under peer review].`
  },

  {
    slug: 'dgs-bench',
    repoSlug: 'dgs-bench',
    title: 'DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics: A Cassava Case Study',
    shortTitle: 'DGS-Bench (DLI 2026 Best Poster)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    status: 'Published · 18/114 Accepted (15.79%)',
    award: 'Best Poster Award, Deep Learning Indaba 2026 (Lagos, Nigeria)',
    openAccess: true,
    paperUrl: 'https://deeplearningindaba.com/2026/',
    posterUrl: '/images/papers/posters/dgs-bench-poster-dli2026.png',
    codeUrl: 'https://github.com/saaillab/dgs-bench',
    teaserImage: '/images/papers/posters/dgs-bench-poster-dli2026.png',
    teaserCaption: 'Camera-ready poster awarded Best Poster at Deep Learning Indaba 2026 (Lagos, Nigeria; 18 accepted of 114 submissions). Shows how class-imbalanced field splits induce a -5.96 pp raw-accuracy evaluation mirage, whereas macro-F1 exposes +8.19 pp true deployment degradation.',
    tldr: 'Demonstrates that aggregate accuracy hides catastrophic minority-disease failures under field shift in African cassava diagnostics, introducing balanced deployment-gap evaluation metrics (Best Poster Award, DLI 2026).',
    abstract: 'Aggregate classification accuracy on imbalanced agricultural datasets routinely hides silent failures on minority but economically devastating plant diseases. We introduce DGS-Bench, a Deployment Gap and Sensitivity Benchmark tailored for African agricultural AI, grounded in a multi-condition cassava pathology case study. Evaluating models across controlled versus real smallholder field acquisitions reveals that models boasting high top-line accuracy frequently suffer sharp drops in macro-averaged recall and per-class F1 on rare pathologies. DGS-Bench establishes a standardized evaluation protocol combining balanced per-class metrics, deployment gap quantification, and calibration checks, earning the Best Poster Award at Deep Learning Indaba 2026 (one of 18 papers accepted out of 114 submissions, 15.79% acceptance rate).',
    keywords: ['DGS-Bench', 'African agricultural AI', 'cassava disease', 'balanced metrics', 'deployment gap', 'Deep Learning Indaba'],
    topics: ['Agriculture', 'Benchmarking', 'Responsible AI', 'Cassava', 'East Africa'],
    highlights: [
      { value: '+8.19 pp', label: 'Mean Macro-F1 Gap', sublabel: 'Paired t = 10.2, p = 0.002' },
      { value: '-5.96 pp', label: 'Raw Acc Mirage', sublabel: 'Field Acc hides minority failure' },
      { value: '-17.0 pp', label: 'BG Perturbation Drop', sublabel: 'ViT-Small/16 loses 21.3 pp' },
      { value: 'Best Poster', label: 'DLI 2026 Winner', sublabel: '18 / 114 accepted (15.79%)' }
    ],
    figureHeading: 'Deployment Gap Score Across Architectures',
    figures: [
      { src: '/images/papers/dgs2026/fig1_dgs_bar.png', caption: 'Lab vs. natural field accuracy across four architectures revealing negative raw-accuracy DGS mirage, whereas macro-F1 exposes +8.19 pp mean deployment degradation.' }
    ],
    contributions: [
      'Defines the Deployment Gap Score (DGS) across raw accuracy, balanced accuracy, and macro-F1 to quantify lab-to-field distribution shift on imbalanced smallholder datasets.',
      'Demonstrates an evaluation mirage across four frozen linear-probe architectures (ResNet-50, EfficientNet-B3, MobileNetV3-S, ViT-Small/16) where 65.8% CMD prevalence inflates field accuracy despite minority-class collapse (Healthy recall drops from 52.5% to 47.7%).',
      'Establishes through seven controlled perturbations that background texture reliance (-13.6 to -21.3 pp) rather than brightness variation (<1.7 pp) dominates deployment fragility across CNNs and Vision Transformers.',
      'Reproduces the evaluation gap across three crops and class cardinalities (Cassava 5 classes, PlantVillage Tomato 10 classes, Rice Leaf Disease 4 classes) under a reproducible 11-minute free T4 GPU benchmark.'
    ],
    tables: [
      {
        title: 'DGS-Bench Primary Benchmark: Lab (Balanced n=400) vs. Natural Field (n=19,397, 65.8% CMD)',
        caption: 'Raw field accuracy artificially exceeds lab accuracy across all models (negative DGS_Acc), whereas Macro-F1 exposes +6.23 to +9.67 pp degradation.',
        headers: ['Architecture', 'Lab Acc (%)', 'Field Acc (%)', 'DGS Acc (pp)', 'Field BAcc (%)', 'Lab F1 (%)', 'Field F1 (%)', 'DGS F1 (pp)'],
        rows: [
          ['ResNet-50', '54.75', '62.80', '-8.05', '56.36', '54.71', '48.47', '+6.23'],
          ['EfficientNet-B3', '56.25', '61.93', '-5.68', '54.66', '56.10', '46.78', '+9.32'],
          ['MobileNetV3-S', '54.00', '56.97', '-2.97', '53.26', '54.05', '44.37', '+9.67'],
          ['ViT-Small/16', '57.00', '64.14', '-7.14', '57.51', '56.88', '49.37', '+7.51']
        ]
      },
      {
        title: 'Controlled Perturbation Drop (pp) on Field Features at Severity 1.0',
        headers: ['Architecture', 'Base Field Acc (%)', 'Background Δ (pp)', 'Gaussian Noise Δ (pp)', 'Brightness Δ (pp)'],
        rows: [
          ['ResNet-50', '62.8', '14.3', '9.9', '-0.9'],
          ['EfficientNet-B3', '61.9', '13.6', '9.0', '-0.5'],
          ['MobileNetV3-S', '57.0', '18.8', '14.8', '-1.6'],
          ['ViT-Small/16', '64.1', '21.3', '16.0', '-0.6']
        ]
      }
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{nyalala2026dgsbench,
  title={DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics: A Cassava Case Study},
  author={Nyalala, Innocent and Gudla, Surabhi and Ndowo, Patrick Vincent},
  booktitle={Deep Learning Indaba 2026},
  address={Lagos, Nigeria},
  year={2026},
  month={August},
  note={Best Poster Award; 18 of 114 accepted (15.79\\% acceptance rate)}
}`,
    apa: `Nyalala, I., Gudla, S., & Ndowo, P. V. (2026, August). DGS-Bench: Measuring the Deployment Gap in African Agricultural AI Requires Balanced Metrics: A Cassava Case Study. Deep Learning Indaba 2026, Lagos, Nigeria.`
  },

  {
    slug: 'cloves-4603',
    repoSlug: 'CLOVES-4603',
    title: 'CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading',
    shortTitle: 'CLOVES-4603 (CVPR 2026 V4A)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'CVPR 2026: 7th Workshop on Vision for Agriculture (CV4A / V4A), Denver, USA',
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
    teaserImage: '/images/papers/cloves/Fig4_Comprehensive_Model_Comparison.png',
    teaserCaption: 'Five-family benchmark on CLOVES-4603 (4,603 ZSTC clove images): fine-tuned ResNet-50 reaches 99.67% accuracy, frozen DINOv2 linear probe achieves 94.90%, and GPU-free GLCM+GLRLM+LBP texture fusion SVM reaches 92.94%.',
    tldr: 'Introduces CLOVES-4603, the first public 4,603-image benchmark for Zanzibar clove grading across four commercial grades, comparing classical texture pipelines (92.94%) against fine-tuned deep architectures (99.67%).',
    abstract: 'We introduce CLOVES-4603, the first public benchmark dataset for automated clove quality grading, comprising 4,603 standardized 224x224 RGB images spanning four commercial grades collected at the Zanzibar State Trading Corporation (ZSTC). We benchmark classical texture pipelines (HOG+SVM, GLCM+GLRLM+LBP fusion) against fine-tuned deep learning models including ResNet-50, MobileNetV3, and a frozen DINOv2 vision transformer. ResNet-50 achieves 99.67% accuracy on the test set, whereas texture-fusion SVM reaches 92.94%, providing a strong and deployment-friendly classical baseline. This benchmark informs real-world deployment trade-offs between accuracy, latency, and computational cost in agricultural settings where infrastructure is limited.',
    keywords: ['CLOVES-4603', 'clove quality grading', 'Zanzibar', 'texture features', 'deep learning', 'CVPR 2026', 'vision for agriculture'],
    topics: ['Agriculture', 'Computer Vision', 'Zanzibar', 'Benchmarking', 'Deep Learning'],
    highlights: [
      { value: '4,603', label: 'Curated Images', sublabel: '224x224 RGB · 4 ZSTC grades' },
      { value: '99.67%', label: 'ResNet-50 Acc', sublabel: '99.66% Macro-F1 (n=921 test)' },
      { value: '94.90%', label: 'DINOv2 Probe', sublabel: 'Frozen ViT-B/14 baseline' },
      { value: '92.94%', label: 'Texture-Fusion SVM', sublabel: 'GLCM + GLRLM + LBP' }
    ],
    tables: [
      {
        title: 'CLOVES-4603 Five-Family Test Benchmark (n = 921 Held-Out Images)',
        headers: ['Method / Architecture', 'Test Accuracy (%)', 'Training Mode / Features'],
        rows: [
          ['ResNet-50', '99.67%', 'Fine-tuned ImageNet CNN (99.66% F1)'],
          ['MobileNetV3-Large', '99.35%', 'Lightweight edge-deployable CNN'],
          ['DINOv2 ViT-B/14', '94.90%', 'Frozen self-supervised linear probe'],
          ['GLCM + GLRLM + LBP SVM', '92.94%', 'Classical 96-dim texture fusion'],
          ['HOG + SVM', '32.68%', 'Shape-gradient classical baseline']
        ]
      }
    ],
    contributions: [
      'Introduces CLOVES-4603, the first open benchmark dataset of 4,603 lot-aware stratified images spanning four ISO 2254-2004 / ZSTC commercial clove quality grades collected in Zanzibar.',
      'Establishes rigorous 5-seed evaluation protocols with bootstrap 95% confidence intervals comparing classical texture descriptors, self-supervised vision transformers, and fine-tuned CNNs.',
      'Demonstrates that combined GLCM+GLRLM+LBP texture fusion with RBF-SVM achieves 92.94% test accuracy without GPUs, outperforming HOG+SVM (32.68%) by +60.26 percentage points.',
      'Profiles accuracy-latency-parameter Pareto trade-offs showing MobileNetV3-Large reaches 99.35% accuracy as a mobile-ready alternative to ResNet-50 (99.67%).'
    ],
    figureHeading: 'Stratified Grade Distribution of CLOVES-4603',
    figures: [
      { src: '/images/papers/cloves/Fig1_Class_Distribution.png', caption: 'Lot-aware stratified 70/10/20 class distribution across Grades 1 to 4 (N = 4,603 ZSTC clove images).' }
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{nyalala2026cloves4603,
  title={CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading},
  author={Nyalala, Innocent and Ndowo, Patrick Vincent},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops -- Vision for Agriculture (CV4A)},
  address={Denver, USA},
  year={2026},
  url={https://openreview.net/pdf?id=V1UbAtXS4M}
}`,
    apa: `Nyalala, I., & Ndowo, P. V. (2026). CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models for Clove Quality Grading. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops (V4A). https://openreview.net/pdf?id=V1UbAtXS4M`
  },

  {
    slug: 'trustworthy-ai-iclr2026',
    repoSlug: 'trustworthy-ai-iclr2026',
    title: 'Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization',
    shortTitle: 'Trustworthy AI & Bias Unification (ICLR 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
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
    citations: 2,
    paperUrl: 'https://openreview.net/forum?id=RCEEHTbSDk',
    codeUrl: 'https://github.com/saaillab/trustworthy-ai-iclr2026',
    teaserImage: '/images/papers/posters/iclr-2026-trustworthy-ai.webp',
    teaserCaption: 'Accepted paper at the ICLR 2026 Trustworthy AI Workshop unifying fairness, robustness, and out-of-distribution generalization via data-centric bias intervention.',
    tldr: 'Introduces Dynamic Data Re-weighting (DDR), a data-centric intervention using adversarial introspection to jointly improve algorithmic fairness, spurious-correlation robustness, and out-of-distribution generalization without group labels.',
    abstract: 'Fairness disparities, shortcut vulnerability, and out-of-distribution generalization failures are typically addressed in separate silos despite tracing back to a shared reliance on non-causal spurious correlations in training data. We introduce Dynamic Data Re-weighting (DDR), a data-centric framework that uses adversarial introspection to detect and up-weight difficult, shortcut-dependent examples without requiring expensive explicit spurious group annotations. Evaluated across background biases, attribute shifts, and class imbalances, DDR consistently improves Worst-Group Accuracy alongside out-of-distribution generalization.',
    keywords: ['trustworthy AI', 'fairness', 'robustness', 'generalization', 'Dynamic Data Re-weighting', 'ICLR 2026'],
    topics: ['Responsible AI', 'Deep Learning', 'East Africa'],
    contributions: [
      'Unifies subgroup fairness, spurious-shortcut robustness, and out-of-distribution generalization as linked outcomes of non-causal correlation reliance during empirical risk minimization.',
      'Proposes Dynamic Data Re-weighting (DDR) to automatically identify and emphasize high-difficulty, shortcut-vulnerable training examples without requiring group-level spurious attribute annotations.',
      'Demonstrates concurrent gains across Worst-Group Accuracy and distribution-shift robustness across background-biased, demographic-skewed, and class-imbalanced benchmarks.'
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{ndowo2026unifying,
  title={Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization},
  author={Ndowo, Patrick Vincent and Nyalala, Innocent},
  booktitle={ICLR 2026 Workshop on Principled Design for Trustworthy AI: Interpretability, Robustness, and Safety across Modalities},
  address={Rio de Janeiro, Brazil},
  year={2026},
  url={https://openreview.net/forum?id=RCEEHTbSDk}
}`,
    apa: `Ndowo, P. V., & Nyalala, I. (2026). Unifying Perspectives on Learning Biases: A Data-Centric Intervention for Holistic Fairness, Robustness, and Generalization. In ICLR 2026 Workshop on Principled Design for Trustworthy AI, Rio de Janeiro. https://openreview.net/forum?id=RCEEHTbSDk`
  },

  {
    slug: 'cara-fm',
    repoSlug: 'cara-fm',
    title: 'Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda',
    shortTitle: 'CARA-FM Framework (PMLR 2026 / DLI Best Poster)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
      { name: 'Nirav Bhatt', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'Deep Learning Indaba 2025 Research Track, Proceedings of Machine Learning Research (PMLR Vol. 302, pp. 1–11, 2026)',
    venueShort: 'PMLR Vol. 302 · DLI 2025/2026',
    venueUrl: 'https://proceedings.mlr.press/v302/nyalala26a.html',
    year: 2026,
    month: 'Jan',
    dateISO: '2026-01-20',
    category: 'conference',
    status: 'Published in PMLR Vol. 302 · Oral & Poster',
    award: 'Best Poster Award (Publication & Dataset Category), Deep Learning Indaba 2025, Kigali',
    openAccess: true,
    paperUrl: 'https://proceedings.mlr.press/v302/nyalala26a.html',
    codeUrl: 'https://github.com/saaillab/cara-fm',
    teaserImage: '/images/papers/posters/cara-fm-poster-dli2025.png',
    teaserCaption: 'Best Poster presentation at Deep Learning Indaba 2025 (Kigali, Rwanda; published in PMLR Vol. 302): quantifies 5x-40x infrastructure disparities in East Africa and defines four architectural pillars plus Tiny/Lite/Edge deployment tiers.',
    tldr: 'Introduces the four-pillar CARA-FM framework (Community-Driven Data, Indigenous Knowledge Systems, Edge-First Architecture, Participatory Governance) for East African agricultural foundation models.',
    abstract: 'East African agriculture supports more than 175 million people yet faces mounting challenges from climate variability, compute scarcity, and information barriers. Current foundation models fail to address the region\'s computational constraints, linguistic diversity spanning over 200 languages, and distinct ecological knowledge systems. We present CARA-FM, a theoretical framework comprising four pillars: Community-Driven Data Architecture, Indigenous Knowledge Systems, Edge-First Model Design, and Participatory Governance. We define multi-dimensional evaluation metrics spanning technical, agronomic, and cultural criteria to guide foundation model research under severe resource constraints.',
    keywords: ['CARA-FM', 'foundation models', 'East African agriculture', 'responsible AI', 'indigenous knowledge', 'PMLR', 'Deep Learning Indaba'],
    topics: ['Foundation Models', 'Responsible AI', 'Agriculture', 'East Africa'],
    highlights: [
      { value: 'PMLR 302', label: 'Published Proceedings', sublabel: 'pp. 1-11 (DLI 2025 Oral)' },
      { value: '4 Pillars', label: 'CARA-FM Architecture', sublabel: 'Data, IKS, Edge, Governance' },
      { value: '10x-40x', label: 'Infra Resource Gap', sublabel: 'RAM & bandwidth reality' },
      { value: '5M-50M', label: 'Edge Compression Tiers', sublabel: 'Tiny / Lite / Edge specs' }
    ],
    figureHeading: 'Deep Learning Indaba 2025 Best Poster Recognition',
    figures: [
      { src: '/images/papers/posters/cara-fm-dli-spotlight.webp', caption: 'Best Poster Award recognition at Deep Learning Indaba 2025, Kigali, Rwanda (published in PMLR Vol. 302, 2026).' }
    ],
    posterUrl: '/images/papers/posters/cara-fm-poster-dli2025.png',
    contributions: [
      'Quantifies concrete resource mismatches between standard foundation models (8-32 GB RAM, 50+ Mbps) and East African field realities (1-3 GB smartphones, 1.2 Mbps connectivity, intermittent power).',
      'Formulates four interdependent design pillars: Community-Driven Data Architecture, Indigenous Knowledge Systems (IKS), Edge-First Model Design (5M-50M params), and Participatory Governance.',
      'Defines multi-dimensional evaluation criteria balancing technical accuracy with local linguistic coverage, agrarian equity, and energy constraints.'
    ],
    tables: [
      {
        title: 'East African Edge Reality vs. Standard Foundation Model Assumptions',
        headers: ['Resource Dimension', 'Standard FM Assumption', 'East African Field Reality', 'Gap Factor'],
        rows: [
          ['Model Memory (RAM)', '8 - 32 GB', '1 - 3 GB', '10x'],
          ['Network Bandwidth', '50+ Mbps', '1.2 Mbps', '40x'],
          ['Power Availability', 'Continuous', '4 - 8 hours/day', '6x'],
          ['Target Device Cost', '$500+', '< $100', '5x'],
          ['Cloud GPU Acceleration', 'Required', 'Unavailable offline', 'Inf']
        ]
      },
      {
        title: 'Proposed CARA-FM Edge-Cloud Deployment Tiers',
        headers: ['Tier', 'Parameter / Size Budget', 'Target Hardware', 'Target Acc.', 'Primary Use Case'],
        rows: [
          ['CARA-Tiny', '5M params / 20 MB', 'Entry feature & low-end phones', '80%', 'Offline crop symptom screening'],
          ['CARA-Lite', '15M params / 60 MB', 'Budget smartphones (1-2 GB RAM)', '85%', 'Multi-disease field triage'],
          ['CARA-Edge', '50M params / 200 MB', 'Mid-range extension phones', '90%', 'Full seasonal advisory']
        ]
      }
    ],
    isSaailLab: true,
    citations: 1,
    bibtex: `@inproceedings{pmlr-v302-nyalala26a,
  title={Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda},
  author={Nyalala, Innocent and Bhatt, Nirav},
  booktitle={Proceedings of the Deep Learning Indaba 2025 Research Track},
  series={Proceedings of Machine Learning Research (PMLR)},
  volume={302},
  pages={1--11},
  year={2026},
  url={https://proceedings.mlr.press/v302/nyalala26a.html}
}`,
    apa: `Nyalala, I., & Bhatt, N. (2026). Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A Theoretical Framework and Research Agenda. Proceedings of Machine Learning Research (PMLR), 302, 1–11. https://proceedings.mlr.press/v302/nyalala26a.html`
  },

  {
    slug: 'clove-xai-etri2026',
    title: 'Explainable AI for clove quality grading: Benchmarking post hoc XAI and compositional interpretability under domain shift',
    shortTitle: 'XAI for Clove Grading (ETRI Journal 2026)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: 'ETRI Journal, Vol. 48, No. 5, pp. 911-923 (Wiley / ETRI)',
    venueShort: 'ETRI Journal 48(5) · 2026',
    year: 2026,
    month: 'Oct',
    dateISO: '2026-10-01',
    category: 'journal',
    status: 'Published · Q2 SCI · Vol. 48(5)',
    tldr: 'Evaluates 7 post hoc XAI methods across 8 CNN/ViT models on 4,603 ZSTC clove images, revealing 33.4-82.4% EER attribution fragility and up to 86.5 pp shift drops, whereas a U-Net + ResNet-18 compositional pipeline reaches 99.45% F1 with 100% EER.',
    abstract: 'Reliable agricultural commodity grading requires accuracy and explanations that match regulatory criteria. Using 4,603 expert-graded clove images across four Zanzibar State Trading Corporation (ZSTC) quality grades, we benchmark post hoc explainable artificial intelligence (XAI) methods including Grad-CAM, LIME, and GradientSHAP across eight CNN and Vision Transformer architectures and compare them with a compositional segmentation-classification pipeline. All eight monolithic architectures achieve 99.48% to 99.85% test F1-score, yet their Explanation Evidence Ratio (EER) varies sharply from 33.4% to 82.4%, with domain-shift F1 drops ranging from 6.7 to 86.5 percentage points. By isolating clove foregrounds prior to attribute grading via U-Net segmentation (Dice 0.9505) and ZSTC mpeta percentage rules, the compositional pipeline achieves 99.45% F1 with 100% EER by design and receives unanimous preference from three certified ZSTC inspectors.',
    keywords: [
      'explainable AI',
      'clove quality grading',
      'ZSTC',
      'compositional interpretability',
      'Explanation Evidence Ratio',
      'domain shift',
      'ETRI Journal'
    ],
    topics: [
      'Agriculture',
      'Explainable AI',
      'Computer Vision',
      'Zanzibar',
      'Cloves'
    ],
    venueUrl: 'https://onlinelibrary.wiley.com/journal/22337326',
    impactFactor: 'SCI Q2 · IF 1.6',
    citations: 1,
    openAccess: true,
    doi: '10.4218/etrij.2026-0225',
    paperUrl: 'https://doi.org/10.4218/etrij.2026-0225',
    teaserImage: '/images/papers/etri2026/fig1_pipeline.png',
    teaserCaption: 'Compositional vs. post hoc XAI evaluation framework on 4,603 ZSTC clove images: U-Net foreground segmentation (Dice = 0.9505) coupled with ResNet-18 attribute grading yields 99.45% macro-F1 and 100% Explanation Evidence Ratio (EER) by architectural design.',
    highlights: [
      { value: '99.45%', label: 'Compositional F1', sublabel: '100% EER by design' },
      { value: '33.4-82.4%', label: 'Post Hoc EER Range', sublabel: 'High accuracy hides shift risk' },
      { value: '86.5 pp', label: 'Max Shift F1 Drop', sublabel: 'EfficientNet-B0 on bg shift' },
      { value: '3/3', label: 'ZSTC Expert Preference', sublabel: 'Unanimous certified graders' }
    ],
    contributions: [
      'Introduced the Explanation Evidence Ratio (EER) to measure what fraction of a visual attribution heatmap actually falls inside annotated clove foreground masks rather than spurious tray background.',
      'Benchmarked eight deep architectures (ResNet-18/50, DenseNet-121/201, EfficientNet-B0/B2, DeiT-Base, Swin-Base) across 4,603 ZSTC images, proving that >99.4% clean F1 masks severe EER spread (33.4% DeiT Grad-CAM to 81.9% Swin SHAP) and runtime bottlenecks (up to 26.1 s/image for SHAP).',
      'Quantified background domain-shift robustness across all eight monolithic backbones, uncovering F1 collapses of 53.7 pp (EfficientNet-B2) to 86.5 pp (EfficientNet-B0) despite near-100% in-domain scores.',
      'Built and validated a compositional U-Net (Dice 0.9505) + ResNet-18 rule-aligned grading pipeline achieving 99.45% F1, guaranteed 100% EER, and unanimous approval from three certified ZSTC clove graders.'
    ],
    figureHeading: 'Explanation Faithfulness and Domain-Shift Robustness',
    figures: [
      { src: '/images/papers/etri2026/fig3_eer_vs_robustness.png', caption: 'Correlation between Explanation Evidence Ratio (EER) and classification F1 retention under acquisition domain shift across eight deep architectures.' }
    ],
    tables: [
      {
        title: 'In-Domain Clove Grading Classification Benchmark (N = 4,603 Images, 4 ZSTC Grades)',
        headers: ['Architecture', 'Params (M)', 'F1 (%)', 'Precision (%)', 'Recall (%)'],
        rows: [
          ['DenseNet-201', '20.0', '99.85', '99.84', '99.86'],
          ['Swin-Base', '88.0', '99.79', '99.76', '99.81'],
          ['DenseNet-121', '8.0', '99.76', '99.77', '99.75'],
          ['ResNet-50', '25.6', '99.74', '99.75', '99.73'],
          ['DeiT-Base', '86.6', '99.70', '99.70', '99.70'],
          ['ResNet-18', '11.7', '99.58', '99.58', '99.59'],
          ['EfficientNet-B0', '5.3', '99.53', '99.55', '99.50'],
          ['EfficientNet-B2', '9.2', '99.48', '99.48', '99.47'],
          ['Compositional (U-Net + ResNet-18)', '13.2', '99.45', '99.45', '99.45']
        ]
      },
      {
        title: 'Post Hoc XAI Faithfulness (EER %) & Inference Time per Image (s)',
        headers: ['Architecture', 'Grad-CAM EER (%)', 'Grad-CAM Time (s)', 'LIME EER (%)', 'LIME Time (s)', 'SHAP EER (%)', 'SHAP Time (s)'],
        rows: [
          ['Swin-Base', '73.6', '0.028', '81.1', '5.8', '81.9', '26.1'],
          ['DeiT-Base', '33.4', '0.007', '82.4', '5.3', '65.4', '24.1'],
          ['DenseNet-121', '65.7', '0.049', '74.4', '2.0', '66.0', '5.1'],
          ['ResNet-50', '71.2', '0.020', '71.6', '2.0', '64.5', '4.8'],
          ['ResNet-18', '69.4', '0.009', '57.9', '1.7', '66.8', '3.2'],
          ['DenseNet-201', '62.9', '0.089', '56.2', '2.3', '70.0', '6.8'],
          ['EfficientNet-B2', '60.3', '0.037', '48.5', '1.9', '60.4', '4.5'],
          ['EfficientNet-B0', '43.8', '0.029', '41.9', '1.8', '61.4', '3.7']
        ]
      },
      {
        title: 'Background Domain Shift Robustness Across Monolithic Models',
        headers: ['Architecture', 'Original F1 (%)', 'Shifted F1 (%)', 'Drop (pp)', 'Grad-CAM EER (%)'],
        rows: [
          ['DenseNet-201', '99.85', '93.2', '6.7', '62.9'],
          ['Swin-Base', '99.79', '90.7', '9.0', '73.6'],
          ['ResNet-50', '99.74', '88.7', '11.0', '71.2'],
          ['DenseNet-121', '99.76', '88.6', '11.1', '65.7'],
          ['DeiT-Base', '99.70', '86.9', '12.8', '33.4'],
          ['ResNet-18', '99.58', '65.7', '33.8', '69.4'],
          ['EfficientNet-B2', '99.48', '45.8', '53.7', '60.3'],
          ['EfficientNet-B0', '99.53', '13.0', '86.5', '43.8']
        ]
      }
    ],
    isSaailLab: true,
    bibtex: `@article{nyalala2026etri_clove_xai,
  title={Explainable AI for clove quality grading: Benchmarking post hoc XAI and compositional interpretability under domain shift},
  author={Nyalala, Innocent and Ndowo, Patrick Vincent},
  journal={ETRI Journal},
  volume={48},
  number={5},
  pages={911--923},
  year={2026},
  doi={10.4218/etrij.2026-0225}
}`,
    apa: `Nyalala, I., & Ndowo, P. V. (2026). Explainable AI for clove quality grading: Benchmarking post hoc XAI and compositional interpretability under domain shift. ETRI Journal, 48(5), 911-923. https://doi.org/10.4218/etrij.2026-0225`
  },

  {
    slug: 'zstc-clove-v1',
    repoSlug: 'zstc-clove-v1',
    title: 'Deep Learning Feasibility Study for Automated Clove Quality Classification Using CNN Architectures on a Novel Zanzibar Dataset',
    shortTitle: 'ZSTC-Clove-V1 Feasibility Study (AI4EAC 2026)',
    authors: [
      { name: 'Patrick Vincent Ndowo', url: 'https://www.linkedin.com/in/patrick-ndowo/', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
    ],
    affiliations: [AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI],
    venue: '4th EAC STI Conference / AI for East Africa Conference (AI4EAC 2026), Kigali, Rwanda',
    venueShort: 'AI4EAC / EAC STI 2026',
    year: 2026,
    month: 'Mar',
    dateISO: '2026-03-01',
    category: 'conference',
    status: 'Published · Travel Grant ($980)',
    award: 'Competitive Travel Grant Award, EAC STI 2026, Kigali',
    openAccess: true,
    codeUrl: 'https://github.com/saaillab/zstc-clove-v1',
    datasetUrl: 'https://github.com/saaillab/zstc-clove-v1',
    teaserImage: '/images/papers/cloves/figure_benchmark_f1.png',
    teaserCaption: 'Empirical CNN feasibility benchmark on ZSTC-Clove-V1 (5,298 single-clove images across four ZSTC grades): ResNet-18 achieves 94.46% test accuracy (94.33% macro-F1), whereas plain VGG-16 collapses to 31.32% majority-class prediction.',
    tldr: 'Evaluates CNN feasibility on ZSTC-Clove-V1 (5,298 single-clove images across 4 ZSTC grades), finding ResNet-18 reaches 94.46% accuracy (94.33% F1) whereas unresidualized VGG-16 collapses to 31.32% (14.94% F1), motivating explainable pipelines.',
    abstract: 'We investigate the technical feasibility of automated clove quality grading using deep learning on ZSTC-Clove-V1, a novel dataset of 5,298 single-clove images across four official commercial grades collected at the Zanzibar State Trading Corporation (Saateni warehouse, Unguja). ResNet-18 achieves 94.46% accuracy (94.33% F1), whereas VGG-16 fails to converge at 31.32%, demonstrating sharp architectural sensitivity on fine-grained agricultural commodities and highlighting the need for trustworthy deployment.',
    keywords: ['ZSTC-Clove-V1', 'clove grading', 'Zanzibar', 'ResNet-18', 'East Africa', 'AI4EAC'],
    topics: ['Agriculture', 'Computer Vision', 'Zanzibar', 'East Africa'],
    posterUrl: '/images/papers/posters/eac-sti-2026-clove-grading.webp',
    highlights: [
      { value: '94.46%', label: 'ResNet-18 Accuracy', sublabel: '94.33% Macro-F1' },
      { value: '31.32%', label: 'VGG-16 Collapse', sublabel: '14.94% F1 (residual need)' },
      { value: '5,298', label: 'Single-Clove Images', sublabel: '4 ZSTC grades · Saateni, Unguja' },
      { value: '$980', label: 'EAC Travel Grant', sublabel: '4th EAC STI Conference' }
    ],
    contributions: [
      'Constructed ZSTC-Clove-V1, a 5,298-image single-clove benchmark graded by certified Zanzibar State Trading Corporation (ZSTC) inspectors (Grade I: 1,455; Grade II: 1,320; Grade III: 1,398; Grade IV: 1,125) under 70/15/15 stratified splits (κ = 0.87).',
      'Empirically demonstrated dramatic architectural divergence on fine-grained spice surfaces: residual connections enable ResNet-18 to reach 94.46% accuracy and 94.39% precision, whereas plain VGG-16 fails to converge (31.32% accuracy, 14.94% F1).',
      'Analyzed spatial Grad-CAM attributions showing why pure black box classifiers risk latching onto background tray cues rather than botanical bud discoloration (mpeta), directly motivating subsequent segmentation-first grading systems.'
    ],
    figureHeading: 'Spatial Attention on Commercial Clove Samples',
    figures: [
      { src: '/images/papers/cloves/figure_03_gradcam.png', caption: 'Grad-CAM inspection revealing sensitivity to tray background alongside bud discoloration.' }
    ],
    tables: [
      {
        title: 'CNN Architecture Feasibility Comparison on ZSTC-Clove-V1 Held-Out Test Split (n = 794)',
        headers: ['Architecture', 'Test Accuracy (%)', 'Precision (%)', 'Recall (%)', 'Macro-F1 (%)'],
        rows: [
          ['ResNet-18', '94.46', '94.39', '94.34', '94.33'],
          ['VGG-16', '31.32', '9.81', '31.32', '14.94']
        ]
      },
      {
        title: 'ZSTC-Clove-V1 Stratified Dataset Partition Across Commercial Grades (N = 5,298)',
        headers: ['ZSTC Grade', 'Quality Tier', 'Total Images', 'Train (70%)', 'Val (15%)', 'Test (15%)'],
        rows: [
          ['Grade I', 'Premium Golden / Crown', '1,455', '1,019', '218', '218'],
          ['Grade II', 'Standard Commercial', '1,320', '924', '198', '198'],
          ['Grade III', 'Lower Faded Grade', '1,398', '979', '210', '209'],
          ['Grade IV', 'Mpeta / Defective', '1,125', '787', '169', '169'],
          ['Total', 'All 4 Commercial Grades', '5,298', '3,709', '795', '794']
        ]
      }
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{ndowo2026zstcclovev1,
  title={Deep Learning Feasibility Study for Automated Clove Quality Classification Using CNN Architectures on a Novel Zanzibar Dataset},
  author={Ndowo, Patrick Vincent and Nyalala, Innocent},
  booktitle={4th EAC STI Conference / AI for East Africa Conference (AI4EAC 2026)},
  address={Kigali, Rwanda},
  year={2026},
  month={March},
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    award: 'Oral Presentation, Data Science Africa 2026, Kampala',
    openAccess: true,
    teaserImage: '/images/papers/dsa2026/fig1_f1_improvement.png',
    teaserCaption: 'Macro-F1 degradation caused by DCGAN synthetic augmentation across extreme few-shot regimes (n = 25, 50, 100 real images/class): pretrained ResNet-50 drops by 35.9 pp and EfficientNet-B3 by 32.7 pp.',
    tldr: 'Demonstrates empirically that DCGAN augmentation under extreme data scarcity (25–100 images/class) poisons cassava disease classifiers, dropping macro-F1 by up to 23.2 pp.',
    abstract: 'We test whether DCGAN augmentation alleviates labeled-data scarcity for cassava disease classification in Uganda. Training a DCGAN on 25, 50, or 100 real images per class and augmenting four classifier architectures to 500 images per class, we find that GAN augmentation consistently degrades macro-F1: by 23.2 pp at n = 25, 21.2 pp at n = 50, and 10.3 pp at n = 100. Pretrained classifiers suffer far more (ResNet-50: -35.9 pp; EfficientNet-B3: -32.7 pp) than a from-scratch CNN (-1.9 pp). GAN diagnostics confirm discriminator dominance and mode collapse, producing semantically empty images that poison fine-tuning. Within the unregularised DCGAN framework studied, these results establish an empirical minimum viability threshold of roughly 100-200 images per class and counsel caution against synthetic GAN augmentation in extreme few-shot African agricultural datasets.',
    keywords: ['DCGAN', 'synthetic data', 'data scarcity', 'cassava disease', 'East Africa', 'DSA 2026'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'East Africa'],
    figureHeading: 'Real vs. DCGAN-Augmented Few-Shot Accuracy',
    figures: [
      { src: '/images/papers/dsa2026/fig3_real_vs_aug.png', caption: 'Classifier performance comparing real-only geometric augmentation against real + DCGAN augmentation across n = 25, 50, and 100 real training images per class on iCassava.' }
    ],
    posterUrl: '/images/papers/posters/dsa2026-dcgan-poster.png',
    highlights: [
      { value: '-23.2 pp', label: 'Mean Drop (n=25)', sublabel: 'Synthetic GAN poisons training' },
      { value: '-35.9 pp', label: 'ResNet-50 Drop', sublabel: 'Pretrained hierarchy damage' },
      { value: '45 Runs', label: 'Controlled Matrix', sublabel: '3 scales x 4 backbones' },
      { value: '100-200', label: 'Min Real Threshold', sublabel: 'Required images per class' }
    ],
    contributions: [
      'Conducted 45 controlled DCGAN augmentation runs across three low-shot regimes (n = 25, 50, 100 real images/class) and four classifiers on Ugandan field cassava pathology.',
      'Demonstrated that unregularized DCGAN augmentation reduces macro-F1 by an average of 23.2 pp at n = 25, 21.2 pp at n = 50, and 10.3 pp at n = 100 compared with geometric augmentation alone.',
      'Identified asymmetric harm to ImageNet-pretrained backbones (-35.9 pp ResNet-50, -32.7 pp EfficientNet-B3) due to discriminator dominance and semantic mode collapse (lossD near 0.000, lossG spiking to 44.5).'
    ],
    tables: [
      {
        title: 'Macro-F1 Delta (pp) from DCGAN Augmentation vs. Geometric-Only Baseline (3 Seeds)',
        headers: ['Classifier', 'n = 25 imgs/cls', 'n = 50 imgs/cls', 'n = 100 imgs/cls'],
        rows: [
          ['Lightweight CNN (scratch)', '-1.9 ± 2.2', '-4.5 ± 2.4', '+0.6 ± 2.8'],
          ['MobileNetV3', '-22.1 ± 9.2', '-20.9 ± 2.2', '-10.1 ± 8.0'],
          ['EfficientNet-B3', '-32.7 ± 8.1', '-22.0 ± 6.0', '+0.9 ± 0.7'],
          ['ResNet-50', '-35.9 ± 11.8', '-37.3 ± 4.0', '-32.5 ± 9.2'],
          ['4-Model Mean', '-23.2 ± 15.4', '-21.2 ± 13.4', '-10.3 ± 15.7']
        ]
      }
    ],
    isSaailLab: true,
    citations: 1,
    bibtex: `@inproceedings{ndowo2026dcgan,
  title={When Synthetic Data Hurts: DCGAN Augmentation Failure Under Extreme Data Scarcity for Cassava Disease Classification in East Africa},
  author={Ndowo, Patrick Vincent and Nyalala, Innocent and Haji, Khamis},
  booktitle={Data Science Africa (DSA) 2026 Workshop},
  address={Makerere University, Kampala, Uganda},
  year={2026},
  month={July},
  note={Oral Presentation}
}`,
    apa: `Ndowo, P. V., Nyalala, I., & Haji, K. (2026, July). When Synthetic Data Hurts: DCGAN Augmentation Failure Under Extreme Data Scarcity for Cassava Disease Classification in East Africa. Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda. (Oral Presentation)`
  },

  {
    slug: 'auditing-crop-datasets-dsa2026',
    title: 'Auditing Representation in Crop Disease Benchmark Datasets Intended for Sub-Saharan African Deployment',
    shortTitle: 'Auditing Crop Benchmark Datasets (DSA 2026)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    abstract: 'Crop disease image datasets are increasingly used to build decision-support tools for smallholder farmers in Sub-Saharan Africa, yet dataset representativeness across geography, imaging environment, class balance, image quality, and morphological diversity is rarely documented systematically. We apply a quantitative five-dimension representativeness audit to PlantVillage, iCassava 2019, and iBean, quantify cross-domain transfer penalties, and introduce the AgriAI Bias Card, a six-item documentation checklist tailored to African agricultural AI.',
    keywords: ['dataset auditing', 'AgriAI Bias Card', 'Sub-Saharan Africa', 'representativeness', 'PlantVillage', 'iCassava'],
    topics: ['Responsible AI', 'Agriculture', 'Benchmarking', 'East Africa'],
    figureHeading: 'Five-Dimension Representativeness Audit Scores',
    figures: [
      { src: '/images/papers/dsa2026/fig4_audit_bars.png', caption: 'Per-dimension representation audit scores comparing PlantVillage (4/10) against iCassava (9/10) and iBean (9/10), illustrating Geographic Origin and Capture Environment gaps.' }
    ],
    posterUrl: '/images/papers/posters/dsa-2026-poster-auditing-representation.webp',
    highlights: [
      { value: '5 Dims', label: 'Audit Rubric (0-10)', sublabel: 'Geo, Env, Balance, Quality, Morph' },
      { value: '4 / 10', label: 'PlantVillage Score', sublabel: 'Lab background limitations' },
      { value: '9 / 10', label: 'iCassava & iBean', sublabel: 'Field-collected in East Africa' },
      { value: '6-Item', label: 'AgriAI Bias Card', sublabel: 'Deployment readiness checklist' }
    ],
    contributions: [
      'Constructed a quantitative five-dimension representativeness rubric (0-10 points) evaluating geography, imaging environment, Gini class balance (threshold ≤ 0.10), image quality, and morphological coverage.',
      'Audited three widely deployed agricultural benchmarks, documenting PlantVillage at 4/10 versus Sub-Saharan field-collected iCassava 2019 (9/10) and iBean (9/10).',
      'Introduced the six-item AgriAI Bias Card giving researchers and agronomic practitioners a standardized pre-deployment documentation protocol.'
    ],
    tables: [
      {
        title: 'Five-Dimension Representativeness Audit Across Agricultural Benchmarks',
        headers: ['Dataset', 'Collection Regime', 'Audit Score (/10)', 'Key Limitation / Strength'],
        rows: [
          ['PlantVillage (~54,306 imgs)', 'Laboratory uniform grey/black background', '4 / 10', 'High lab volume; low East African field transfer'],
          ['iCassava 2019 (21,397 imgs)', 'Ugandan smallholder smartphones', '9 / 10', 'Ecologically valid field shift; heavy CMD skew'],
          ['iBean (Makerere)', 'In-field Ugandan bean plots', '9 / 10', 'Authentic lighting & field occlusions']
        ]
      }
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{nyalala2026auditing,
  title={Auditing Representation in Crop Disease Benchmark Datasets Intended for Sub-Saharan African Deployment},
  author={Nyalala, Innocent and Ndowo, Patrick Vincent and Haji, Khamis},
  booktitle={Data Science Africa (DSA) 2026 Workshop},
  address={Makerere University, Kampala, Uganda},
  year={2026},
  month={July}
}`,
    apa: `Nyalala, I., Ndowo, P. V., & Haji, K. (2026, July). Auditing Representation in Crop Disease Benchmark Datasets Intended for Sub-Saharan African Deployment. Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda.`
  },

  {
    slug: 'few-shot-cassava-dsa2026',
    title: 'Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Field Conditions',
    shortTitle: 'Few-Shot Cassava Transfer Learning (DSA 2026)',
    authors: [
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    abstract: 'Cassava feeds over 500 million people across Sub-Saharan Africa, yet annual crop losses of up to 40% from Cassava Brown Streak Disease and Cassava Mosaic Disease often go undetected due to scarce diagnostic infrastructure. We present a systematic evaluation of few-shot transfer learning on 21,397 smartphone-captured Ugandan field images spanning five disease classes. Four pretrained backbones (ResNet-50, EfficientNet-B3, MobileNetV3, ViT-B/16) are evaluated under linear probing and full fine-tuning at k ∈ {10, 25, 50, 100} labeled images per class with a shared hyperparameter configuration. Full fine-tuning of ViT-B/16 reaches 63.6% accuracy at k = 50, a +28.5 pp gain over training from scratch.',
    keywords: ['few-shot learning', 'transfer learning', 'cassava disease', 'East Africa', 'ViT-B/16', 'DSA 2026'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'East Africa'],
    figureHeading: 'Linear Probe vs. Full Fine-Tuning Scaling',
    figures: [
      { src: '/images/papers/dsa2026/p1_lp_ft_lines.png', caption: 'ViT-B/16 linear probe versus full fine-tuning accuracy scaling across k ∈ {10, 25, 50, 100} shots per class on iCassava Uganda, highlighting the +20.3 pp adaptation gain at optimal k = 50.' }
    ],
    posterUrl: '/images/papers/posters/dsa-2026-poster-few-shot-cassava.webp',
    highlights: [
      { value: '68.8%', label: 'ViT-B/16 (k=100)', sublabel: '+29.6 pp over scratch (39.2%)' },
      { value: '63.6%', label: 'ViT-B/16 (k=50)', sublabel: '+28.5 pp at 250 total images' },
      { value: 'k = 50', label: 'Optimal Field Budget', sublabel: '~2 field collection days' },
      { value: '21,397', label: 'Field Cassava Images', sublabel: '5 disease conditions · Uganda' }
    ],
    contributions: [
      'Evaluated four pretrained backbones (ViT-B/16, EfficientNet-B3, ResNet-50, MobileNetV3) under linear probing vs. full fine-tuning across k ∈ {10, 25, 50, 100} shots/class on 21,397 Ugandan field images.',
      'Demonstrated that full fine-tuning outperforms linear probing by +18 to +20 pp at small k, proving ImageNet features require end-to-end spatial adaptation for field cassava symptoms.',
      'Identified Healthy leaf confusion (F1: 0.49, 25% misclassified as CBB) vs. CMD (F1: 0.77) and established k = 50 labels/class (250 images total, +0.053 pp/image marginal ROI) as the optimal collection budget.'
    ],
    tables: [
      {
        title: 'Few-Shot Top-1 Accuracy (%) on Ugandan Field Cassava (21,397-Image Pool)',
        headers: ['Method & Adaptation', 'k = 10', 'k = 25', 'k = 50', 'k = 100'],
        rows: [
          ['ViT-B/16 (Full Fine-Tuning)', '50.6', '58.0', '63.6', '68.8'],
          ['ResNet-50 (Full Fine-Tuning)', '45.5', '58.0', '62.3', '68.6'],
          ['EfficientNet-B3 (Full Fine-Tuning)', '40.5', '52.7', '63.5', '68.4'],
          ['MobileNetV3 (Full Fine-Tuning)', '41.3', '56.6', '62.2', '66.3'],
          ['ViT-B/16 (Linear Probe only)', '30.0', '32.9', '43.3', '50.3'],
          ['ResNet-50 (Linear Probe only)', '28.9', '34.1', '45.2', '49.8'],
          ['Scratch Baseline (No Pretraining)', '26.9', '32.1', '35.1', '39.2']
        ]
      }
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{nyalala2026fewshot,
  title={Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Field Conditions},
  author={Nyalala, Innocent and Ndowo, Patrick Vincent and Vyas, Shivam and Makame, Twamaa and Gudla, Surabhi and Haji, Khamis},
  booktitle={Data Science Africa (DSA) 2026 Workshop},
  address={Makerere University, Kampala, Uganda},
  year={2026},
  month={July}
}`,
    apa: `Nyalala, I., Ndowo, P. V., Vyas, S., Makame, T., Gudla, S., & Haji, K. (2026, July). Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Field Conditions. Data Science Africa (DSA) 2026 Workshop, Makerere University, Kampala, Uganda.`
  },

  {
    slug: 'ai-policy-harmonization-tais2026',
    title: 'AI Policy Harmonization in East Africa: Cultural Sustainability in the New Technological Age',
    shortTitle: 'AI Policy Harmonization in East Africa (TAIS 2026)',
    authors: [
      { name: 'Hope K. McCoy', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] }
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
    abstract: 'East African countries often mimic Western governance blueprints when crafting technology regulation, risking mismatches with communal values such as Harambee and Ujamaa and reinforcing structural dependency. This study compares the formal AI policies of Ethiopia, Kenya, and Rwanda, highlighting shared infrastructure priorities around water resources, electricity, indigenous language preservation, and South-South cooperation, and outlines a culturally sustainable roadmap for East African AI policy harmonization.',
    keywords: ['AI policy', 'East Africa', 'cultural sustainability', 'AI safety', 'global governance', 'TAIS 2026'],
    topics: [
      'Responsible AI',
      'AI Policy & GovTech',
      'East Africa'
    ],
    teaserImage: '/images/papers/posters/tais2026-oxford-poster.png',
    posterUrl: '/images/papers/posters/tais2026-oxford-poster.png',
    teaserCaption: 'A2 poster presented at TAIS 2026 (Oxford Martin School, University of Oxford): comparative synthesis of Ethiopia (2022), Kenya (2025), and Rwanda (2023) AI policies proposing Harambee and Ujamaa-grounded regional coordination.',
    highlights: [
      { value: '3 Nations', label: 'Policy Comparison', sublabel: 'Ethiopia · Kenya · Rwanda' },
      { value: 'Ujamaa', label: 'Communal Ethics', sublabel: 'Harambee & Ubuntu alignment' },
      { value: 'TAIS 2026', label: 'Oxford Presentation', sublabel: 'Oxford Martin School, UK' },
      { value: '4 Pillars', label: 'Harmonized Roadmap', sublabel: 'Compute, Water, Grid, Language' }
    ],
    contributions: [
      'Audits formal national AI strategies in Ethiopia (2022), Kenya (2025), and Rwanda (2023) across focus areas, cultural grounding, data governance, and regional coordination.',
      'Exposes shared structural omissions around electricity resilience, water footprints of compute facilities, indigenous East African language preservation, and cross-border interoperability.',
      'Formulates an East African Community (EAC) AI harmonization blueprint anchoring technical safety governance in Harambee and Ujamaa communal stewardship values.'
    ],
    tables: [
      {
        title: 'Comparative Matrix of Formal East African National AI Strategies',
        headers: ['Dimension', 'Ethiopia', 'Kenya', 'Rwanda'],
        rows: [
          ['Adoption Year', '2022', '2025', '2023'],
          ['Primary Policy Focus', 'Education & Healthcare', 'Digital Infrastructure & Data', 'National Readiness & Governance'],
          ['Cultural Grounding', 'Low', 'Low', 'Moderate'],
          ['Regional EAC Coordination', 'None specified', 'None specified', 'Partial'],
          ['Data Governance Formalization', 'Nascent', 'Explicit framework', 'Explicit framework']
        ]
      }
    ],
    isSaailLab: true,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    topics: [
      'Responsible AI',
      'AI Policy & GovTech',
      'Global South'
    ],
    highlights: [
      { value: 'AAAI 2026', label: 'EGSAI Workshop', sublabel: 'Philadelphia, USA' },
      { value: '4 Vectors', label: 'Dependency Audit', sublabel: 'Compute, APIs, Data, Policy' },
      { value: 'AU + ASEAN', label: 'Multipolar Alliances', sublabel: 'South-South AI governance' },
      { value: 'Shared Pool', label: 'Strategic Agenda', sublabel: 'Regional compute & datasets' }
    ],
    contributions: [
      'Categorizes structural Global South AI dependency into four reinforcing asymmetries: foundational compute monopoly, proprietary model API lock-in, raw data extraction, and external regulatory capture.',
      'Critiques single-bloc technology dependency and outlines multipolar South-South AI governance bridging the African Union (AU) and ASEAN.',
      'Proposes regional public-interest compute pooling, shared multilingual benchmarks, and reciprocity clauses for cross-border dataset licensing.'
    ],
    tables: [
      {
        title: 'Four-Vector Structural Dependency Taxonomy & Multipolar Mitigation Levers',
        headers: ['Dependency Vector', 'Current Global South Bottleneck', 'Recommended Sovereignty Lever'],
        rows: [
          ['Foundational Compute', 'Zero domestic hyperscale clusters', 'Regional federated academic HPC pools'],
          ['Model & API Layer', 'Foreign closed-weight API lock-in', 'Open-weight regional domain adaptation'],
          ['Data Flows', 'Uncompensated raw linguistic extraction', 'Community data trusts & benefit-sharing'],
          ['Regulatory Design', 'Verbatim copy of external AI acts', 'Context-tuned AU/EAC-ASEAN harmonization']
        ]
      }
    ],
    isSaailLab: true,
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

  // =========================================================================
  // 2025 PUBLICATIONS
  // =========================================================================
  {
    slug: 'bafnet-polyp-2025',
    title: 'BAFNet: Deep contour-aware features for colorectal polyps segmentation',
    shortTitle: 'BAFNet Colorectal Polyp Segmentation (ESWA 2025)',
    authors: [
      { name: 'Dibin Zhou', affiliations: [1] },
      { name: 'Ni Chen', affiliations: [1] },
      { name: 'Yueping Zhu', affiliations: [1] },
      { name: 'Xueyan Zhang', affiliations: [2] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [3, 4] },
      { name: 'Jiayu Zhang', affiliations: [5] },
      { name: 'Junfeng Gao', affiliations: [6] }
    ],
    affiliations: [AFFILIATIONS.HNU, AFFILIATIONS.ZJHU, AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.XZUT, AFFILIATIONS.ABERDEEN],
    venue: 'Expert Systems with Applications (Elsevier)',
    venueShort: 'Expert Systems with Applications · 2025',
    venueUrl: 'https://www.sciencedirect.com/journal/expert-systems-with-applications',
    year: 2025,
    month: 'Oct',
    dateISO: '2025-10-14',
    category: 'journal',
    status: 'Published · Vol. 299, 129998 · IF 7.5',
    impactFactor: 'SCI Q1 · IF 7.5',
    doi: '10.1016/j.eswa.2025.129998',
    paperUrl: 'https://doi.org/10.1016/j.eswa.2025.129998',
    tldr: 'Introduces BAFNet, a boundary-aware feature fusion network with gated contour selection for accurate colorectal polyp segmentation.',
    abstract: 'Automated segmentation of colorectal polyps remains challenging due to low tissue contrast and blurred mucosal boundaries. We propose BAFNet, a boundary-aware feature fusion network incorporating gating mechanisms that selectively preserve sharp contour cues alongside multi-scale semantic representations, advancing polyp segmentation accuracy across clinical colonoscopy benchmarks.',
    keywords: ['BAFNet', 'colorectal polyps', 'medical image segmentation', 'contour-aware', 'Expert Systems with Applications'],
    topics: ['Healthcare', 'Medical Imaging', 'Deep Learning'],
    highlights: [
      { value: '0.914', label: 'EndoScene Dice', sublabel: '0.863 IoU · 0.905 F-measure' },
      { value: '0.808', label: 'ColonDB & ETIS Dice', sublabel: 'Consistent generalization' },
      { value: '5.98M', label: 'Model Parameters', sublabel: '3.59 GFLOPs footprint' },
      { value: 'IF 7.5', label: 'Expert Syst. Appl.', sublabel: 'Elsevier Q1 Journal' }
    ],
    contributions: [
      'Designed a boundary-aware gating branch integrating four Conv-BN blocks to suppress background mucosal texture and preserve sharp colorectal polyp contours.',
      'Developed the Multi-Scale Feature Aggregation Module (MFAM) and Dynamic Global Attention Module (DGAM) to fuse encoder-decoder semantic cues across lesion scales.',
      'Outperformed five prior colonoscopy baselines (ASCNet, MSNet, TransFuse, C2F-Net, PraNet) on CVC-ColonDB, ETIS, and EndoScene at only 5.98M parameters and 3.59 GFLOPs.'
    ],
    tables: [
      {
        title: 'BAFNet Colorectal Polyp Segmentation Performance (5.98M Params, 3.59 GFLOPs)',
        headers: ['Benchmark Dataset', 'Dice Score', 'IoU Score', 'Weighted F-Measure'],
        rows: [
          ['EndoScene', '0.914', '0.863', '0.905'],
          ['CVC-ColonDB', '0.808', '0.722', '0.782'],
          ['ETIS-LaribPolypDB', '0.808', '0.732', '0.774']
        ]
      }
    ],
    isSaailLab: true,
    teaserImage: '/images/papers/health/bafnet_arch.png',
    teaserCaption: 'BAFNet couples a boundary-aware gating branch (four Conv-BN blocks) with Multi-Scale Feature Aggregation (MFAM) and Dynamic Global Attention (DGAM) to achieve 0.914 Dice on EndoScene in 5.98M parameters (3.59 GFLOPs).',
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
      { name: 'Jiayu Zhang', affiliations: [1] },
      { name: 'Baohua Zhang', affiliations: [2] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [3, 4] },
      { name: 'Peter Mecha', affiliations: [2] },
      { name: 'Junlong Chen', affiliations: [2] },
      { name: 'Kunjie Chen', affiliations: [2] },
      { name: 'Junfeng Gao', affiliations: [5] }
    ],
    affiliations: [AFFILIATIONS.XZUT, AFFILIATIONS.NAU, AFFILIATIONS.IITMZ, AFFILIATIONS.WSAI, AFFILIATIONS.ABERDEEN],
    venue: 'Computers and Electronics in Agriculture (Elsevier), Vol. 232, 110107',
    venueShort: 'Comput. Electron. Agric. · 2025',
    venueUrl: 'https://www.sciencedirect.com/journal/computers-and-electronics-in-agriculture',
    year: 2025,
    month: 'May',
    dateISO: '2025-05-01',
    category: 'journal',
    status: 'Published · Vol. 232, 110107 · IF 8.9',
    impactFactor: 'SCI Q1 · IF 8.9',
    citations: 5,
    doi: '10.1016/j.compag.2025.110107',
    paperUrl: 'https://doi.org/10.1016/j.compag.2025.110107',
    teaserImage: '/images/papers/posters/Publicaiton_compag.webp',
    teaserCaption: 'Published in Computers and Electronics in Agriculture (Vol. 232, May 2025): recovering attenuated early-stage foliar symptom signals in cassava leaf imagery.',
    tldr: 'Presents a signal-rectification neural mechanism that recovers attenuated early-stage foliar disease cues in cassava leaf classification.',
    abstract: 'Early-stage cassava leaf disease symptoms frequently appear as subtle, attenuated spatial signals overwhelmed by background foliage and illumination noise. We propose a weakened-signal rectification architecture published in Computers and Electronics in Agriculture (Vol. 232) that explicitly amplifies faint lesion representations prior to classification, improving diagnostic sensitivity across field cassava disease categories.',
    keywords: ['cassava leaf disease', 'weakened signals', 'deep learning', 'Computers and Electronics in Agriculture', 'precision agriculture'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'Computer Vision'],
    highlights: [
      { value: 'IF 8.9', label: 'COMPAG Q1 Journal', sublabel: 'Vol. 232, Article 110107' },
      { value: 'Signal Rect.', label: 'Core Mechanism', sublabel: 'Recovers faint early lesions' },
      { value: '5 Classes', label: 'Field Cassava Scope', sublabel: 'CBB, CBSD, CGM, CMD, Healthy' },
      { value: 'Open Science', label: 'Published DOI', sublabel: '10.1016/j.compag.2025.110107' }
    ],
    contributions: [
      'Targeted the attenuation of subtle early-stage foliar symptom signals caused by overlapping leaf canopy, complex backgrounds, and variable solar illumination in cassava fields.',
      'Formulated neural signal rectification blocks that selectively amplify weakened disease representations and damp background leaf clutter.',
      'Validated diagnostic gains across challenging real-field cassava leaf disease partitions published in Computers and Electronics in Agriculture (Vol. 232).'
    ],
    tables: [
      {
        title: 'Study Profile: Weakened-Signal Rectification for Field Cassava Diagnosis',
        headers: ['Attribute', 'Specification'],
        rows: [
          ['Journal & Article', 'Computers and Electronics in Agriculture (Vol. 232, 110107, 2025)'],
          ['Journal Standing', 'Elsevier Q1 Top Journal (Impact Factor 8.9)'],
          ['Architectural Target', 'Recovers attenuated early-stage foliar lesion cues against canopy noise'],
          ['Crop & Task', 'In-field multi-class cassava leaf pathology classification']
        ]
      }
    ],
    isSaailLab: true,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    topics: [
      'Responsible AI',
      'AI Policy & GovTech',
      'Global South'
    ],
    highlights: [
      { value: '7 Dims', label: 'Diagnostic Framework', sublabel: 'Compute to Talent & Law' },
      { value: '4 Nations', label: 'Comparative Cases', sublabel: 'Singapore, Vietnam, Kenya, Syria' },
      { value: 'NeurIPS / EurIPS', label: 'PAIG 2025 Workshop', sublabel: 'Private AI Governance' },
      { value: 'Typology', label: 'Sovereignty Spectrum', sublabel: 'Autonomous vs. captive AI' }
    ],
    contributions: [
      'Constructed a seven-dimensional diagnostic matrix distinguishing authentic digital AI sovereignty from structural digital serfdom across low- and middle-income economies.',
      'Executed comparative national case studies across Singapore, Vietnam, Kenya, and Syria spanning compute capacity, model dependency, talent retention, and governance.',
      'Identifies actionable policy inflection points enabling emerging AI regions to build autonomous regulatory and data institutions.'
    ],
    tables: [
      {
        title: 'Comparative Case-Study Profiles Under the 7-Dimensional Sovereignty Matrix',
        headers: ['Country Case', 'Structural Position', 'Key Sovereignty Lesson'],
        rows: [
          ['Singapore', 'High-capacity regional AI hub', 'Targeted state R&D co-investment + regulatory sandbox'],
          ['Vietnam', 'Rapidly scaling talent & engineering base', 'Domestic talent retention + open-model localization'],
          ['Kenya', 'East African innovation leader with infra constraints', 'Need for local compute & indigenous data governance'],
          ['Syria', 'Sanctioned / conflict-constrained environment', 'Severe exclusion from global APIs, hardware & standards']
        ]
      }
    ],
    isSaailLab: true,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1, 2] },
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
    abstract: 'We propose a socio-technical co-design approach to modernizing Zanzibar\'s clove grading workflow alongside certified Indigenous grading experts. Technically validating a segmentation-first deep learning pipeline that achieves 99.0% accuracy, we embed inspector domain heuristics, transparent grade rationales, and mobile usability into the interface to build farmer trust.',
    keywords: ['co-design', 'HCI4D', 'clove grading', 'Zanzibar', 'AfriCHI', 'indigenous knowledge'],
    topics: ['Responsible AI', 'Agriculture', 'Zanzibar', 'East Africa'],
    highlights: [
      { value: '99.0%', label: 'Segmentation-First Acc', sublabel: 'Single-clove validation baseline' },
      { value: 'Co-Design', label: 'Participatory HCI', sublabel: 'Farmers & ZSTC inspectors' },
      { value: 'Mpeta Focus', label: 'Grade 4 Transparency', sublabel: 'Fair farmer pricing compensation' },
      { value: 'ACM AfriCHI', label: 'Published 2025', sublabel: 'Human-centered African AI' }
    ],
    contributions: [
      'Paired computer vision validation (99.0% single-clove accuracy via Enhanced U-Net segmentation-first architecture) with participatory HCI co-design involving Zanzibar farmers and ZSTC inspectors.',
      'Identified critical socio-technical asymmetries around manual assessment of Grade 4 (mpeta) fermented cloves that erode smallholder trust.',
      'Formulated an actionable co-design roadmap for low-cost mobile inspection tools amplifying rather than displacing indigenous grading expertise.'
    ],
    tables: [
      {
        title: 'Socio-Technical Validation & Co-Design Findings (ACM AfriCHI 2025)',
        headers: ['Dimension', 'Baseline Observation / Finding', 'System Design Requirement'],
        rows: [
          ['Technical Prototype', '99.0% accuracy on single-clove grading', 'Segmentation-first isolation for bulk lots'],
          ['Quality Determiner', 'Grade 4 (mpeta) pale-brown fermentation quota', 'Visual highlight of rejected stems & mpeta'],
          ['Stakeholder Trust', 'Price ambiguity at warehouse handoff', 'Bilingual transparent visual audit trail on phone']
        ]
      }
    ],
    isSaailLab: true,
    bibtex: `@inproceedings{nyalala2025africhi,
  title={From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar's Indigenous Experts},
  author={Nyalala, Innocent and Ndowo, Patrick Vincent},
  booktitle={Proceedings of the African Human-Computer Interaction Conference (AfriCHI 2025)},
  publisher={ACM},
  year={2025}
}`,
    apa: `Nyalala, I., & Ndowo, P. V. (2025). From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar's Indigenous Experts. AfriCHI ACM Conference 2025.`
  },

  // =========================================================================
  // 2024 PUBLICATIONS
  // =========================================================================
  {
    slug: 'cassava-salient-feature-2024',
    title: 'A salient feature establishment tactic for cassava disease recognition',
    shortTitle: 'Salient Feature Tactic for Cassava (AIIA 2024)',
    authors: [
      { name: 'Jiayu Zhang', affiliations: [1] },
      { name: 'Baohua Zhang', affiliations: [2] },
      { name: 'Zixuan Chen', affiliations: [2] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [2] },
      { name: 'Kunjie Chen', affiliations: [2] },
      { name: 'Junfeng Gao', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.XZUT, AFFILIATIONS.NAU, AFFILIATIONS.LINCOLN],
    venue: 'Artificial Intelligence in Agriculture (Elsevier), Vol. 14, pp. 115–132',
    venueShort: 'Artificial Intelligence in Agriculture · 2024',
    venueUrl: 'https://www.sciencedirect.com/journal/artificial-intelligence-in-agriculture',
    year: 2024,
    month: 'Nov',
    dateISO: '2024-11-15',
    category: 'journal',
    status: 'Published · Open Access · IF 12.4',
    impactFactor: 'SCI Q1 · IF 12.4',
    citations: 13,
    openAccess: true,
    doi: '10.1016/j.aiia.2024.11.004',
    paperUrl: 'https://doi.org/10.1016/j.aiia.2024.11.004',
    tldr: 'Develops a salient feature establishment tactic isolating fine foliar cassava pathology from noisy field backgrounds in Artificial Intelligence in Agriculture (IF 12.4).',
    abstract: 'Complex field backgrounds and overlapping symptoms impede accurate cassava disease classification. Published in Artificial Intelligence in Agriculture (Vol. 14, pp. 115-132), this study proposes a salient feature establishment strategy that suppresses uninformative background activations and accentuates disease-specific foliar morphology under natural field acquisition.',
    keywords: ['cassava disease recognition', 'salient features', 'Artificial Intelligence in Agriculture', 'computer vision'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'Computer Vision'],
    highlights: [
      { value: 'IF 12.4', label: 'AIIA Q1 Journal', sublabel: 'Vol. 14, pp. 115-132' },
      { value: 'Semantic Loc.', label: 'Core Contribution', sublabel: 'Suppresses soil/canopy clutter' },
      { value: '13+ Cites', label: 'Scholar Impact', sublabel: 'Open Access · 2024' },
      { value: 'Field Robust', label: 'Complex Backgrounds', sublabel: 'Natural outdoor cassava leaves' }
    ],
    contributions: [
      'Addressed object semantic localization failures where unconstrained field cassava backgrounds overwhelm disease classification logits.',
      'Proposed a salient feature establishment module isolating localized necrotic and mosaic lesion patterns prior to classification.',
      'Published Open Access in Artificial Intelligence in Agriculture (Vol. 14, pp. 115-132; IF 12.4).'
    ],
    tables: [
      {
        title: 'Publication & Methodological Summary (AIIA Vol. 14, 2024)',
        headers: ['Dimension', 'Details'],
        rows: [
          ['Journal', 'Artificial Intelligence in Agriculture (Elsevier, IF 12.4)'],
          ['Pages & Access', 'Vol. 14, pp. 115-132, Open Access'],
          ['Primary Mechanism', 'Salient feature establishment suppressing background activations'],
          ['Verified Citations', '13+ (OpenAlex / Google Scholar)']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Jiayu Zhang', affiliations: [2] },
      { name: 'Zixuan Chen', affiliations: [1] },
      { name: 'Junlong Chen', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU, AFFILIATIONS.XZUT],
    venue: 'Poultry Science (Elsevier), Vol. 103, 104232',
    venueShort: 'Poultry Science · 2024',
    year: 2024,
    month: 'Oct',
    dateISO: '2024-10-01',
    category: 'journal',
    status: 'Published · Open Access · IF 4.2',
    impactFactor: 'SCI Q1 · IF 4.2',
    citations: 12,
    openAccess: true,
    doi: '10.1016/j.psj.2024.104232',
    paperUrl: 'https://doi.org/10.1016/j.psj.2024.104232',
    tldr: 'Real-time non-contact 3-D surface reconstruction and depth-imaging pipeline for online poultry carcass volume estimation on processing lines.',
    abstract: 'Non-contact online volume estimation is vital for automated grading and throughput optimization in poultry processing plants. We present a depth-imaging and 3-D geometric reconstruction system evaluated under conveyor speeds, establishing strong volume-to-mass correlation without physical contact or line interruption.',
    keywords: ['3D reconstruction', 'depth imaging', 'chicken carcass', 'volume estimation', 'computer vision', 'Poultry Science'],
    topics: ['Agriculture', 'Computer Vision', '3D Reconstruction'],
    highlights: [
      { value: 'R² = 0.9988', label: 'Volume Estimation R²', sublabel: 'Bagged tree regression model' },
      { value: '2.125%', label: 'Average Rel. Error', sublabel: 'RMSE = 5.335 on conveyor' },
      { value: '< 1.6 s', label: 'Processing Time', sublabel: 'Per moving carcass on line' },
      { value: 'Kinect v2 3D', label: 'Depth Point Clouds', sublabel: 'Surface integration volume' }
    ],
    contributions: [
      'Captured moving chicken carcasses on a live production conveyor using Kinect v2 depth imaging and real-time 3D point-cloud surface reconstruction.',
      'Extracted geometric surface-integration volume alongside 2D and 3D morphological predictors across multiple regression families.',
      'Achieved R² = 0.9988, RMSE = 5.335, and 2.125% average relative error using Bagged Tree regression in under 1.6 seconds per carcass.'
    ],
    tables: [
      {
        title: 'Online 3-D Chicken Carcass Volume Estimation Results (Poultry Science 2024)',
        headers: ['Metric', 'Measured Performance', 'Acquisition & Compute Context'],
        rows: [
          ['Best Regression Model', 'Bagged Tree Regression', 'Trained on 2D + 3D point-cloud features'],
          ['Coefficient of Det. (R²)', '0.9988', 'Near-perfect volumetric correspondence'],
          ['Error Bounds', 'RMSE = 5.335 · ARE = 2.125%', 'Non-contact conveyor line grading'],
          ['Runtime Latency', '< 1.6 seconds / carcass', 'Real-time Kinect v2 depth + reconstruction']
        ]
      }
    ],
    isSaailLab: false,
    teaserImage: '/images/papers/prior/carcass2024.jpeg',
    teaserCaption: 'Overhead Kinect v2 depth acquisition and 3D point-cloud reconstruction of moving broiler carcasses achieving R² = 0.9988, RMSE = 5.335, and 2.125% average relative error in under 1.6 s per carcass.',
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
      { name: 'Jiayu Zhang', affiliations: [1] },
      { name: 'Baohua Zhang', affiliations: [2] },
      { name: 'Chao Qi', affiliations: [2] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [2] },
      { name: 'Peter Mecha', affiliations: [2] },
      { name: 'Kunjie Chen', affiliations: [2] },
      { name: 'Junfeng Gao', affiliations: [3] }
    ],
    affiliations: [AFFILIATIONS.XZUT, AFFILIATIONS.NAU, AFFILIATIONS.LINCOLN],
    venue: 'Computers and Electronics in Agriculture (Elsevier), Vol. 225, 109351',
    venueShort: 'Comput. Electron. Agric. · 2024',
    year: 2024,
    month: 'Sep',
    dateISO: '2024-09-01',
    category: 'journal',
    status: 'Published · IF 8.9 · 20+ Citations',
    impactFactor: 'SCI Q1 · IF 8.9',
    citations: 20,
    doi: '10.1016/j.compag.2024.109351',
    paperUrl: 'https://doi.org/10.1016/j.compag.2024.109351',
    tldr: 'Introduces MAIANet, a signal-modulation deep architecture enhancing discriminative foliar disease channels in cassava leaf diagnosis (20+ citations).',
    abstract: 'Published in Computers and Electronics in Agriculture (Vol. 225), MAIANet incorporates multi-scale signal modulation blocks to rebalance weak symptom cues and suppress background interference across field-acquired cassava leaf images.',
    keywords: ['MAIANet', 'signal modulation', 'cassava leaf disease', 'deep learning', 'Computers and Electronics in Agriculture'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'Computer Vision'],
    highlights: [
      { value: 'IF 8.9', label: 'COMPAG Q1 Journal', sublabel: 'Vol. 225, Article 109351' },
      { value: '20+ Cites', label: 'Research Impact', sublabel: 'OpenAlex / Scholar verified' },
      { value: 'Signal Mod.', label: 'Multi-Scale Modulation', sublabel: 'Suppresses background noise' },
      { value: 'Field Valid.', label: 'Cassava Leaf Disease', sublabel: 'Robust subtle lesion capture' }
    ],
    contributions: [
      'Introduced multi-scale signal modulation blocks inside MAIANet to amplify discriminative lesion spatial frequencies and damp field foliage interference.',
      'Improved separation between visually overlapping cassava viral and bacterial conditions under natural outdoor lighting.',
      'Achieved 20+ citations following publication in Computers and Electronics in Agriculture (Vol. 225).'
    ],
    tables: [
      {
        title: 'MAIANet Study Profile (Computers and Electronics in Agriculture 2024)',
        headers: ['Attribute', 'Detail'],
        rows: [
          ['Journal', 'Computers and Electronics in Agriculture, Vol. 225, Article 109351'],
          ['DOI', '10.1016/j.compag.2024.109351'],
          ['Core Architecture', 'Multi-scale signal modulation network for foliar disease cues'],
          ['Citation Count', '20+ verified citations']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] },
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Luke Nyalala', affiliations: [1] },
      { name: 'Qi Chao', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Poultry Science (Elsevier), Vol. 100, 101072',
    venueShort: 'Poultry Science · 2021',
    year: 2021,
    month: 'May',
    dateISO: '2021-05-01',
    category: 'journal',
    status: 'Published · Open Access · 144+ Citations',
    impactFactor: 'IF 4.2',
    citations: 144,
    openAccess: true,
    doi: '10.1016/j.psj.2021.101072',
    paperUrl: 'https://doi.org/10.1016/j.psj.2021.101072',
    tldr: 'Comprehensive survey synthesizing 2D/3D computer vision, depth sensing, and regression pipelines for non-contact poultry weight and volume estimation (144+ citations).',
    abstract: 'This widely cited review synthesizes computer vision, depth-imaging, and machine learning frameworks for non-contact weight and volume estimation across live poultry, carcasses, cuts, and eggs, analyzing feature extraction, occlusion handling, camera calibration, and industrial conveyor integration.',
    keywords: ['poultry science', 'computer vision', 'weight estimation', 'volume estimation', 'depth imaging', 'review'],
    topics: ['Agriculture', 'Computer Vision', '3D Reconstruction'],
    highlights: [
      { value: '144+ Cites', label: 'High-Impact Review', sublabel: 'Poultry Science landmark survey' },
      { value: '4 Product Types', label: 'Scope Synthesized', sublabel: 'Live, carcasses, cuts, eggs' },
      { value: '2D & 3D Depth', label: 'Sensing Modalities', sublabel: 'Kinect, stereo, structured light' },
      { value: 'IF 4.2', label: 'Open Access', sublabel: 'Vol. 100, Article 101072' }
    ],
    contributions: [
      'Synthesized computer vision and depth-sensing methodologies across the entire poultry value chain: live birds, whole carcasses, anatomical retail cuts, and intact eggs.',
      'Systematically taxonomy-mapped camera calibration, occlusion segmentation, morphological feature extraction, and classical/deep regression modeling.',
      'Established benchmark challenges in industrial line-speed throughput and ambient lighting guiding subsequent automated sorting systems.'
    ],
    tables: [
      {
        title: 'Taxonomic Coverage of Computer Vision Weight & Volume Pipelines (Poultry Science 2021)',
        headers: ['Poultry Commodity', 'Primary Imaging Modality', 'Typical Modeling Approach'],
        rows: [
          ['Live Broiler Chickens', 'Overhead depth + RGB', 'Posture ellipse fitting & SVR / ANN'],
          ['Whole Carcasses', '3D depth reconstruction', 'Point-cloud surface area & volume regression'],
          ['Carcass Retail Cuts', 'Depth + Active Shape Model', 'Segmented cut-volume to mass SVR'],
          ['Intact Chicken Eggs', 'Infrared depth & contour', 'Ellipsoidal volume & GPR regression']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Qi Chao', affiliations: [1] },
      { name: 'Peter Mecha', affiliations: [1] },
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Yi Zuo', affiliations: [1] },
      { name: 'Samuel Nyalala', affiliations: [1] },
      { name: 'Jiayu Zhang', affiliations: [1] },
      { name: 'Chao Liu', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'R² = 0.982', label: 'Volume (RBF-SVM)', sublabel: 'RMSE = 1.2683 cm³' },
      { value: 'R² = 0.971', label: 'Weight (Bayesian ANN)', sublabel: 'RMSE = 1.468 g' },
      { value: '7 Models', label: 'Regressors Tested', sublabel: 'Single & occluded fruits' },
      { value: '46+ Cites', label: 'Food Properties J.', sublabel: 'Vol. 24, pp. 818-832' }
    ],
    contributions: [
      'Solved partial tomato occlusion on moving sorting belts via polygon approximation and concave/convex contour point extraction.',
      'Benchmarked seven regression algorithms across 2D and depth features, achieving R² = 0.971 (RMSE 1.468 g) for mass via Bayesian regularization ANN.',
      'Reached R² = 0.982 (RMSE 1.2683 cm³) for non-destructive volume prediction using RBF-SVM across isolated and clustered fruits.'
    ],
    tables: [
      {
        title: 'Single & Partially Occluded Tomato Regression Results (2021)',
        headers: ['Prediction Target', 'Best Model', 'R²', 'RMSE'],
        rows: [
          ['Fruit Volume (cm³)', 'RBF Support Vector Machine (SVM)', '0.982', '1.2683 cm³'],
          ['Fruit Weight (g)', 'Bayesian Regularized ANN', '0.971', '1.468 g']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Nelson Richard Makange', affiliations: [1] },
      { name: 'Changying Ji', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Idris Idris Sunusi', affiliations: [1] },
      { name: 'Samwel Opiyo', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'R² = 0.984', label: 'DEM Prediction R²', sublabel: 'NRMSE = 1.936 (p < 0.05)' },
      { value: 'R² = 0.957', label: 'Analytical Model R²', sublabel: 'NRMSE = 6.008 (McKyes eq.)' },
      { value: 'p > 0.93', label: 'ANOVA Force Agreement', sublabel: 'p = 0.9396 H / 0.9696 V' },
      { value: 'Nat. SciRep', label: 'Nature Portfolio', sublabel: '45+ citations' }
    ],
    contributions: [
      'Integrated elastoplastic soil behavior into Discrete Element Method (DEM) simulations alongside modified-McKyes and Willat-Willis analytical tillage equations.',
      'Validated subsoiling draft forces and furrow soil disturbance profiles in controlled soil-bin trolley force-sensor trials using Taguchi design.',
      'Proved DEM outperforms analytical approximation at R² = 0.984 (NRMSE 1.936) vs. R² = 0.957 (NRMSE 6.008) with statistically aligned ANOVA forces.'
    ],
    tables: [
      {
        title: 'Analytical vs. Discrete Element Simulation Accuracy on Soil-Bin Force Trials',
        headers: ['Modeling Approach', 'Regression R²', 'Normalized RMSE', 'Significance / Finding'],
        rows: [
          ['Discrete Element Method (DEM)', '0.984', '1.936', 'Captures elastoplastic soil failure (p < 0.05)'],
          ['Analytical Model (Modified-McKyes)', '0.957', '6.008', 'Closed-form force & furrow approximation']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Nelson Richard Makange', affiliations: [1] },
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Qi Chao', affiliations: [1] },
      { name: 'Luke Nyalala', affiliations: [1] },
      { name: 'Jiayu Zhang', affiliations: [1] },
      { name: 'Yi Zuo', affiliations: [1] },
      { name: 'Khurram Yousaf', affiliations: [1] },
      { name: 'Chao Liu', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Poultry Science (Elsevier), Vol. 100, 101474',
    venueShort: 'Poultry Science · 2021',
    year: 2021,
    month: 'Dec',
    dateISO: '2021-12-01',
    category: 'journal',
    status: 'Published · Open Access · 36+ Citations',
    impactFactor: 'IF 4.2',
    citations: 36,
    openAccess: true,
    doi: '10.1016/j.psj.2021.101474',
    paperUrl: 'https://doi.org/10.1016/j.psj.2021.101474',
    tldr: 'Automated vision-based online mass estimation across whole broiler carcasses and commercial retail cuts (36+ citations).',
    abstract: 'Develops an online computer vision and depth feature regression pipeline capable of estimating the weights of whole broiler carcasses and commercial anatomical cuts in real time without halting conveyor lines.',
    keywords: ['broiler carcass', 'weight estimation', 'computer vision', 'depth imaging', 'Poultry Science'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: 'R² = 0.9981', label: 'Whole Carcass R²', sublabel: 'Bayesian-ANN depth regression' },
      { value: 'R² = 0.9896', label: 'Wings Weight R²', sublabel: 'RBF-SVR on ASM cut masks' },
      { value: '4 Retail Cuts', label: 'Active Shape Model', sublabel: 'Wings, breast, drums, head/neck' },
      { value: '36+ Cites', label: 'Poultry Science 2021', sublabel: 'Vol. 100, Article 101474' }
    ],
    contributions: [
      'Developed an Active Shape Model (ASM) automatically segmenting conveyor broiler carcasses into four anatomical commercial cuts despite ambient lighting variation.',
      'Evaluated five regression models, achieving R² = 0.9981 for whole carcass and R² = 0.9847 for head/neck mass via Bayesian-ANN.',
      'Achieved R² = 0.9896 (wings), 0.9352 (breast), and 0.9129 (drumsticks) using RBF-SVR on extracted depth features.'
    ],
    tables: [
      {
        title: 'Whole Broiler Carcass & Anatomical Cut Weight Estimation (Poultry Science 2021)',
        headers: ['Carcass / Cut Target', 'Best Model', 'Test R²'],
        rows: [
          ['Whole Broiler Carcass', 'Bayesian Regularized ANN', '0.9981'],
          ['Wings', 'RBF Support Vector Regression (SVR)', '0.9896'],
          ['Head and Neck', 'Bayesian Regularized ANN', '0.9847'],
          ['Breast', 'RBF Support Vector Regression (SVR)', '0.9352'],
          ['Drumsticks', 'RBF Support Vector Regression (SVR)', '0.9129']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Qi Chao', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Agronomy (MDPI), Vol. 11(5), 834',
    venueShort: 'Agronomy · 2021',
    year: 2021,
    month: 'Apr',
    dateISO: '2021-04-24',
    category: 'journal',
    status: 'Published · Open Access · 21+ Citations',
    citations: 21,
    openAccess: true,
    doi: '10.3390/agronomy11050834',
    paperUrl: 'https://doi.org/10.3390/agronomy11050834',
    tldr: 'Introduces F-YOLO for accurate, lightweight detection of early flowering stages in field tea chrysanthemum images.',
    abstract: 'Proposes the F-YOLO object detector tailored for detecting small, occluded early-stage tea chrysanthemum blossoms under complex outdoor lighting, enabling automated harvest timing.',
    keywords: ['F-YOLO', 'object detection', 'tea chrysanthemum', 'Agronomy', 'precision agriculture'],
    topics: ['Agriculture', 'Computer Vision', 'Deep Learning'],
    highlights: [
      { value: 'F-YOLO', label: 'Lightweight Detector', sublabel: 'Single mobile GPU deployable' },
      { value: 'CSP Backbones', label: 'CSPDense + CSPResNeXt', sublabel: 'Dual gradient-flow design' },
      { value: 'Multi-Scale', label: 'Fusion Detection Head', sublabel: 'Handles occlusion & overlap' },
      { value: '21+ Cites', label: 'Agronomy MDPI', sublabel: 'Vol. 11(5), Article 834' }
    ],
    contributions: [
      'Combined cutout and mosaic input augmentation with a hybrid CSPDenseNet backbone and CSPResNeXt neck to detect early-stage tea chrysanthemum blossoms under outdoor occlusion.',
      'Fused multi-scale detection layers to maintain gradient diversity on dense small buds under shifting solar illumination.',
      'Demonstrated lightweight real-time inference feasible on a single mobile GPU for selective robotic chrysanthemum harvesting.'
    ],
    tables: [
      {
        title: 'F-YOLO Architectural Modules for Selective Blossom Harvesting (Agronomy 2021)',
        headers: ['Network Component', 'Module Architecture', 'Agronomic Purpose'],
        rows: [
          ['Input Stage', 'Cutout + Mosaic slicing', 'Robustness to dense cluster overlapping'],
          ['Backbone', 'CSPDenseNet + feature fusion', 'Maximizes gradient flow for small early buds'],
          ['Neck & Head', 'CSPResNeXt + multi-scale fusion', 'Truncates redundancy for mobile GPU latency']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Haolu Liu', affiliations: [1] },
      { name: 'Khurram Yousaf', affiliations: [1] },
      { name: 'Zhenwei Yu', affiliations: [1] },
      { name: 'Asad Riaz', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Muhammad Waqas Alam Chattha', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'Box-Behnken', label: 'Response Surface', sublabel: '3-factor thermal optimization' },
      { value: 'Closed-Loop', label: 'Heat Pump Dryer', sublabel: 'Energy & quality balance' },
      { value: 'Wiley JFPP', label: 'Vol. 46(1), 2022', sublabel: 'Food Process & Preserv.' },
      { value: '20+ Cites', label: 'Scholar Impact', sublabel: 'Postharvest engineering' }
    ],
    contributions: [
      'Applied a Box-Behnken response surface experimental design to optimize closed-loop heat pump drying of garlic slices.',
      'Quantified trade-offs across drying air temperature, slice thickness, and airflow velocity on energy efficiency and rehydration/color quality.',
      'Provided validated operating parameters reducing thermal waste during postharvest spice and horticultural dehydration.'
    ],
    tables: [
      {
        title: 'Process Optimization Scope (J. Food Processing & Preservation)',
        headers: ['Parameter', 'Methodology / Focus'],
        rows: [
          ['Experimental Design', 'Box-Behnken Response Surface Methodology (RSM)'],
          ['Thermal Equipment', 'Closed-loop heat pump dryer for horticultural slices'],
          ['Controlled Factors', 'Drying air temperature, slice thickness, air velocity'],
          ['Optimization Goals', 'Minimize specific energy consumption and preserve dried garlic quality']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Celestine Okinda', affiliations: [1] },
      { name: 'Jintao Wang', affiliations: [1] },
      { name: 'Tracy Achieng', affiliations: [1] },
      { name: 'Patrick Wamalwa', affiliations: [1] },
      { name: 'Tai Mang', affiliations: [1] },
      { name: 'Mingxia Shen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Artificial Intelligence in Agriculture (Elsevier), Vol. 4, pp. 184–208',
    venueShort: 'Artificial Intelligence in Agriculture · 2020',
    year: 2020,
    month: 'Sep',
    dateISO: '2020-09-15',
    category: 'journal',
    status: 'Published · Open Access · 242+ Citations',
    impactFactor: 'IF 12.4',
    citations: 242,
    openAccess: true,
    doi: '10.1016/j.aiia.2020.09.002',
    paperUrl: 'https://doi.org/10.1016/j.aiia.2020.09.002',
    tldr: 'Landmark survey of computer vision architectures for continuous, non-invasive livestock behavior, health, and welfare monitoring in poultry production (242+ citations).',
    abstract: 'Comprehensive synthesis of RGB, thermal, and depth computer vision systems for automated monitoring of poultry gait, posture, flock distribution, thermal stress, and disease indicators from an animal welfare perspective.',
    keywords: ['poultry welfare', 'computer vision', 'precision livestock farming', 'Artificial Intelligence in Agriculture'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: '242+ Cites', label: 'Top Cited Paper', sublabel: 'AIIA Vol. 4, pp. 184-208' },
      { value: '3 Modalities', label: 'RGB, Thermal, Depth', sublabel: 'Non-intrusive sensing' },
      { value: '2 Eras', label: 'Classical ML vs Deep', sublabel: 'Pipeline synthesis' },
      { value: 'Welfare Indicators', label: 'Gait, Posture, Illness', sublabel: 'Continuous flock monitoring' }
    ],
    contributions: [
      'Reviewed the complete evolution of automated poultry welfare monitoring from classical preprocessing/segmentation/feature selection to end-to-end deep neural networks.',
      'Identified critical bottlenecks in commercial poultry vision: ambient lighting swings, bird-to-bird occlusion under high stocking density, and scarce annotated welfare datasets.',
      'Reached 242+ academic citations in Artificial Intelligence in Agriculture as a foundational Precision Livestock Farming reference.'
    ],
    tables: [
      {
        title: 'Welfare Sensing Modalities Synthesized in AIIA (Vol. 4, 2020)',
        headers: ['Sensing Modality', 'Captured Biological Signal', 'Primary Welfare Application'],
        rows: [
          ['RGB Imaging', 'Texture, feather condition, swarm distribution', 'Crowding, activity indexing, behavior scoring'],
          ['Infrared Thermal', 'Surface body temperature distribution', 'Heat stress & febrile illness screening'],
          ['3D Depth Sensing', 'Posture geometry, gait symmetry, contour', 'Lameness detection & lighting-invariant tracking']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Yuwen Sun', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Samwel Opiyo', affiliations: [1] },
      { name: 'Jintao Wang', affiliations: [1] },
      { name: 'Mingxia Shen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Journal of Food Engineering (Elsevier), Vol. 283, 110041',
    venueShort: 'J. Food Engineering · 2020',
    year: 2020,
    month: 'Oct',
    dateISO: '2020-10-01',
    category: 'journal',
    status: 'Published · IF 5.3 · 87+ Citations',
    impactFactor: 'IF 5.3',
    citations: 87,
    doi: '10.1016/j.jfoodeng.2020.110041',
    paperUrl: 'https://doi.org/10.1016/j.jfoodeng.2020.110041',
    tldr: 'Non-destructive morphological image processing and infrared-depth modeling for accurate egg volume estimation (87+ citations).',
    abstract: 'Develops an image-processing and geometric reconstruction pipeline to measure egg dimensions and estimate exact volume rapidly and non-destructively compared against water displacement baselines.',
    keywords: ['egg volume', 'image processing', 'computer vision', 'Journal of Food Engineering'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: 'R² = 0.984', label: 'Single Egg Vol. R²', sublabel: 'Exponential GPR · RMSE 1.175 cm³' },
      { value: '1.080 cm³', label: 'Simple Occlusion RMSE', sublabel: '1.294 cm³ complex occlusion' },
      { value: '13 Models', label: 'Regression Benchmark', sublabel: 'Depth + k-closest M-circles' },
      { value: '87+ Cites', label: 'J. Food Engineering', sublabel: 'Vol. 283, Article 110041' }
    ],
    contributions: [
      'Solved touching multi-egg conveyor occlusions using contour curvature analysis and k-closest M-circle-center fitting.',
      'Trained 13 regression models on extracted single- and occluded-egg depth features, identifying Exponential Gaussian Process Regression (GPR) as top performer.',
      'Attained RMSE = 1.175 cm³ (R² = 0.984) on isolated eggs, 1.080 cm³ under simple occlusion, and 1.294 cm³ under complex occlusion.'
    ],
    tables: [
      {
        title: 'Exponential GPR Egg Volume Estimation Accuracy Under Occlusion (2020)',
        headers: ['Conveyor Egg Configuration', 'Segmentation Algorithm', 'RMSE (cm³)', 'R²'],
        rows: [
          ['Single Egg (No Occlusion)', 'Morphological thresholding', '1.175', '0.984'],
          ['Simple Multi-Egg Occlusion', 'Curvature + k-closest M-circle center', '1.080', 'Validated'],
          ['Complex Multi-Egg Occlusion', 'Curvature + k-closest M-circle center', '1.294', 'Validated']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Haikang Li', affiliations: [1] },
      { name: 'Yifei Cao', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Lianfei Huo', affiliations: [1] },
      { name: 'Mouloumdema Pouwedeou Potcho', affiliations: [1] },
      { name: 'Xiang Li', affiliations: [1] },
      { name: 'Qishuo Ding', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Journal of Sensors, 1571936',
    venueShort: 'Journal of Sensors · 2020',
    year: 2020,
    month: 'Feb',
    dateISO: '2020-02-01',
    category: 'journal',
    status: 'Published · Open Access · 36+ Citations',
    citations: 36,
    openAccess: true,
    doi: '10.1155/2020/1571936',
    paperUrl: 'https://doi.org/10.1155/2020/1571936',
    tldr: 'Combines morphological image features and wheat biomass measurements for pre-harvest grain yield modeling (36+ citations).',
    abstract: 'Extracts quantitative morphological ear and canopy descriptors from wheat imaging alongside biomass features to establish reliable predictive models for field wheat grain yield.',
    keywords: ['wheat yield', 'morphological features', 'computer vision', 'biomass'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: 'R² = 0.9893', label: 'Dry Yield R²', sublabel: 'RMSE = 0.0684 mm (organ mass)' },
      { value: 'R² = 0.9779', label: 'Stem Length R²', sublabel: 'Vision perimeter R² = 0.9609' },
      { value: '6 Models', label: 'Statistical Regressors', sublabel: 'Image morphology + biomass' },
      { value: '36+ Cites', label: 'Journal of Sensors', sublabel: 'Open Access · Article 1571936' }
    ],
    contributions: [
      'Extracted wheat stem and ear length, width, and perimeter non-destructively via computer vision at R² = 0.9609 (perimeter) and R² = 0.9779 (length).',
      'Trained six regression models linking morphological vision descriptors and organ wet weight (stem, ear, leaves) to dry grain yield.',
      'Demonstrated top dry grain yield prediction at R² = 0.9893 and RMSE = 0.0684 for non-destructive pre-harvest wheat phenotyping.'
    ],
    tables: [
      {
        title: 'Wheat Organ Measurement & Dry Yield Regression Performance (2020)',
        headers: ['Measured / Predicted Variable', 'Validation Result (R² / Error)'],
        rows: [
          ['Computer Vision Stem Length Extraction', 'R² = 0.9779 vs. physical caliper'],
          ['Computer Vision Stem Perimeter Extraction', 'R² = 0.9609 vs. physical reference'],
          ['Dry Grain Yield (Linear Model on Wet Organ Mass)', 'R² = 0.9893 (RMSE = 0.0684)']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Tchalla Korohou', affiliations: [1] },
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'I. Torotwa', affiliations: [1] },
      { name: 'E. Mwangi', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'Watershed', label: 'Occlusion Splitting', sublabel: 'Separates touching grains' },
      { value: 'Morphological', label: 'Variety Classifier', sublabel: 'Postharvest grain inspection' },
      { value: 'Multi-Cultivar', label: 'Shape + Color Cues', sublabel: 'Automated bulk sorting' },
      { value: 'IAEJ 2020', label: 'Published Article', sublabel: 'ISSN 0858-2114' }
    ],
    contributions: [
      'Applied distance-transform watershed segmentation to separate touching and partially occluded rice kernels captured in bulk postharvest inspection scenes.',
      'Extracted shape geometry and surface descriptors from separated kernel masks for multi-variety rice classification.',
      'Removed manual single-kernel singulation bottlenecks prior to automated optical grain grading.'
    ],
    tables: [
      {
        title: 'Grain Separation & Variety Grading Pipeline (IAEJ 2020)',
        headers: ['Processing Step', 'Technique', 'Role in Postharvest Grading'],
        rows: [
          ['1. Binary Masking', 'Adaptive thresholding & noise filtering', 'Isolates rice kernel cluster foreground'],
          ['2. Kernel Separation', 'Distance transform + Watershed split', 'Separates touching/overlapping grains into singles'],
          ['3. Variety Classification', 'Geometric & textural kernel features', 'Assigns rice cultivar class without manual sorting']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Mingzhou Lu', affiliations: [1] },
      { name: 'Longshen Liu', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Caroline Muneri', affiliations: [1] },
      { name: 'Jintao Wang', affiliations: [1] },
      { name: 'Hailin Zhang', affiliations: [1] },
      { name: 'Mingxia Shen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Biosystems Engineering (Elsevier), Vol. 188, pp. 229–242',
    venueShort: 'Biosystems Engineering · 2019',
    year: 2019,
    month: 'Dec',
    dateISO: '2019-12-01',
    category: 'journal',
    status: 'Published · Open Access · 194+ Citations',
    impactFactor: 'IF 6.5',
    citations: 194,
    openAccess: true,
    doi: '10.1016/j.biosystemseng.2019.09.015',
    paperUrl: 'https://doi.org/10.1016/j.biosystemseng.2019.09.015',
    tldr: 'Continuous overhead machine vision posture and mobility tracking for early detection and prediction of illness in commercial broiler houses (194+ citations).',
    abstract: 'Early illness detection prevents devastating poultry flock mortality. Using continuous overhead RGB-depth imaging, shape posture descriptors, and optical-flow mobility features, we construct an automated classifier and early warning system for sick broiler chickens validated against clinical diagnosis.',
    keywords: ['broiler health', 'machine vision', 'early disease detection', 'Biosystems Engineering', 'livestock'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: '97.8%', label: 'Classification Acc', sublabel: 'RBF-SVM (all posture + speed)' },
      { value: '97.5%', label: 'Shape-Only RBF-SVM', sublabel: '5 posture descriptors (p < 0.05)' },
      { value: 'Day 4', label: 'Earliest Warning', sublabel: 'Post-challenge detection' },
      { value: '194+ Cites', label: 'Biosystems Eng.', sublabel: 'Vol. 188, pp. 229-242' }
    ],
    contributions: [
      'Monitored isolated control vs. Newcastle-virus-challenged broiler flocks continuously using overhead RGB-depth imaging and walk-speed extraction.',
      'Established statistical significance (p < 0.05) across five posture descriptors and walk speed, achieving earliest disease detection on Day 4 via circle variance and elongation (Day 6 via eccentricity and walk speed).',
      'Achieved 97.5% accuracy (posture shape only) and 97.8% accuracy (combined shape + mobility) with RBF-SVM for non-intrusive early flock warning.'
    ],
    tables: [
      {
        title: 'Early Infection Detection Timing & RBF-SVM Classification Accuracy (2019)',
        headers: ['Feature Group', 'Diagnostic Capability / Timing', 'RBF-SVM Accuracy (%)'],
        rows: [
          ['Circle Variance & Elongation', 'Earliest significant shift at Day 4 post-challenge', 'Part of 97.5% posture model'],
          ['Eccentricity & Walk Speed', 'Significant behavioral shift by Day 6', '97.8% (all features combined)'],
          ['Convexity & Complexity', 'No statistically reliable early warning', 'Excluded as standalone signal']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Luke Nyalala', affiliations: [1] },
      { name: 'Nelson Richard Makange', affiliations: [1] },
      { name: 'Qi Chao', affiliations: [1] },
      { name: 'Chao Liu', affiliations: [1] },
      { name: 'Khurram Yousaf', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Journal of Food Engineering (Elsevier), Vol. 263, pp. 288–298',
    venueShort: 'J. Food Engineering · 2019',
    year: 2019,
    month: 'Dec',
    dateISO: '2019-12-01',
    category: 'journal',
    status: 'Published · IF 5.3 · 178+ Citations',
    impactFactor: 'IF 5.3',
    citations: 178,
    doi: '10.1016/j.jfoodeng.2019.07.012',
    paperUrl: 'https://doi.org/10.1016/j.jfoodeng.2019.07.012',
    tldr: 'Depth-imaging and machine learning regression (RBF-SVR) for non-contact cherry tomato volume and mass grading in postharvest lines (178+ citations).',
    abstract: 'Constructs a depth-camera computer vision pipeline extracting 2D geometric and 3D depth volume descriptors trained with support vector regression and Bayesian ANN models to estimate cherry tomato mass and volume with high precision (R² > 0.97).',
    keywords: ['cherry tomato', 'volume estimation', 'mass estimation', 'depth imaging', 'SVR', 'Journal of Food Engineering'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: '97.06%', label: 'Mass RBF-SVM Acc', sublabel: 'Using 2D orientation features' },
      { value: '96.94%', label: 'Volume RBF-SVM Acc', sublabel: 'Combined 2D + 3D depth cues' },
      { value: 'R² = 0.9824', label: 'Power-Law Test R²', sublabel: 'M = 1.312 V⁰·⁹⁵⁵¹ (RMSE 15.84 g)' },
      { value: '178+ Cites', label: 'J. Food Engineering', sublabel: 'Vol. 263, pp. 288-298' }
    ],
    contributions: [
      'Established the physical mass-volume power relationship M = 1.312 V⁰·⁹⁵⁵¹ calibrated on test samples at R² = 0.9824 (RMSE = 15.84 g).',
      'Evaluated five machine learning regressors on multi-orientation 2D and 3D depth descriptors of cherry tomatoes.',
      'Demonstrated RBF-SVM leads non-destructive grading at 0.9706 (mass, 2D features) and 0.9694 (volume, all features).'
    ],
    tables: [
      {
        title: 'Cherry Tomato Mass & Volume Estimation Performance (J. Food Eng. 2019)',
        headers: ['Model / Relationship', 'Input Features', 'Performance Metric'],
        rows: [
          ['RBF-SVM Regressor (Mass)', '2D geometric image descriptors', '97.06% prediction accuracy'],
          ['RBF-SVM Regressor (Volume)', 'Combined 2D + 3D depth descriptors', '96.94% prediction accuracy'],
          ['Allometric Power Law', 'M = 1.312 · V⁰·⁹⁵⁵¹', 'R² = 0.9824 (test RMSE = 15.84 g)']
        ]
      }
    ],
    teaserImage: '/images/papers/prior/tomato2019.jpeg',
    teaserCaption: 'Kinect depth-imaging rig positioned 0.7 m above the 0.5 m sorting conveyor capturing multi-orientation 2D and 3D descriptors (RBF-SVM R² = 0.9824).',
    isSaailLab: false,
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
      { name: 'Zhenwei Yu', affiliations: [1] },
      { name: 'Qi Gao', affiliations: [1] },
      { name: 'Yue Zhang', affiliations: [1] },
      { name: 'Dandan Wang', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: '700 °C', label: 'Optimal Activation', sublabel: '30 min · 1:4 impregnation' },
      { value: '40%', label: 'CMHR Waste Ratio', sublabel: 'Sludge + herbal residue' },
      { value: 'Langmuir', label: 'Isotherm Best Fit', sublabel: 'Monolayer dye adsorption' },
      { value: '26+ Cites', label: 'BioResources 14(1)', sublabel: 'pp. 1333-1346 (Open Access)' }
    ],
    contributions: [
      'Applied orthogonal experimental optimization across impregnation ratio, activation temperature, dwell time, and Chinese medicine herb residue (CMHR) blend ratio.',
      'Characterized microporous activated carbon structure using XRD, FT-IR spectroscopy, SEM imaging, iodine value, and BET surface area.',
      'Identified optimal synthesis parameters (1:4 impregnation, 700 °C, 30 min, 40% CMHR) following Langmuir monolayer isotherm behavior for industrial methylene blue removal.'
    ],
    tables: [
      {
        title: 'Optimal Pyrolysis Synthesis & Dye Adsorption Findings (BioResources 2019)',
        headers: ['Process Variable', 'Optimal Experimental Condition / Finding'],
        rows: [
          ['Impregnation Ratio', '1 : 4'],
          ['Activation Temperature & Time', '700 °C for 30 minutes'],
          ['CMHR Biomass Addition Ratio', '40% blended with sewage sludge'],
          ['Adsorption Isotherm Fit', 'Langmuir equation (monolayer methylene blue uptake)']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Khurram Yousaf', affiliations: [1] },
      { name: 'Haolu Liu', affiliations: [1] },
      { name: 'Xu Gao', affiliations: [1] },
      { name: 'Chao Liu', affiliations: [1] },
      { name: 'Adnan Abbas', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Muhammad Ahmad', affiliations: [1] },
      { name: 'Muhammad Ameen', affiliations: [1] },
      { name: 'Kunjie Chen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'COP 2.211', label: 'Closed-Loop Efficiency', sublabel: 'vs 1.409 open-loop (+56.9%)' },
      { value: '60 °C / 2.76 m/s', label: 'RSM Optimal Point', sublabel: 'Significant within 5% CI' },
      { value: '1.318 kg/kWh', label: 'Peak Closed SMER2', sublabel: 'vs 0.865 open-loop OSMER2' },
      { value: '28+ Cites', label: 'Drying Technology', sublabel: 'Taylor & Francis' }
    ],
    contributions: [
      'Benchmarked parboiled paddy dehydration across series heat-pump closed-loop vs. open-loop circulation under winter subtropical ambient regimes (50-60 °C, 2-3 m/s).',
      'Showed closed-loop circulation lifts Coefficient of Performance to 2.211 versus 1.409 open-loop by blocking cold ambient air infiltration.',
      'Identified via Response Surface Methodology (RSM) an optimal operating regime at 60 °C and 2.76 m/s (SMER2 = 1.318 kg/kWh, MER2 = 0.796 kg/h).'
    ],
    tables: [
      {
        title: 'Closed-Loop vs. Open-Loop Heat Pump Paddy Dryer Comparison (RSM Optimal 60 °C, 2.76 m/s)',
        headers: ['Cycle Mode', 'COP', 'SMER1 / SMER2', 'MER1 / MER2 (kg/h)'],
        rows: [
          ['Closed-Loop Heat Pump', '2.211', '0.321 / 1.318 kg/kWh', '0.202 / 0.796'],
          ['Open-Loop Heat Pump', '1.409', '0.208 / 0.865 kg/kWh', '0.180 / 0.689']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Mingzhou Lu', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Jiawei Li', affiliations: [1] },
      { name: 'Mingxia Shen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'Computers and Electronics in Agriculture (Elsevier), Vol. 152, pp. 221–232',
    venueShort: 'Comput. Electron. Agric. · 2018',
    year: 2018,
    month: 'Sep',
    dateISO: '2018-09-01',
    category: 'journal',
    status: 'Published · IF 8.9 · 28+ Citations',
    impactFactor: 'IF 8.9',
    citations: 28,
    doi: '10.1016/j.compag.2018.07.007',
    paperUrl: 'https://doi.org/10.1016/j.compag.2018.07.007',
    tldr: 'Automated vision-based inter-birth interval tracking to flag neonatal piglet asphyxia risks in real time during sow farrowing (28+ citations).',
    abstract: 'Detects prolonged inter-birth intervals and dystocia events during farrowing through continuous pen camera monitoring, enabling timely stockperson intervention to reduce neonatal piglet asphyxia mortality.',
    keywords: ['farrowing monitoring', 'asphyxia detection', 'precision livestock', 'computer vision'],
    topics: ['Agriculture', 'Computer Vision'],
    highlights: [
      { value: '86.3%', label: 'Asphyxia Acc', sublabel: '92.1% Spec · 72.3% Sens' },
      { value: 'R² = 0.918', label: 'Piglet Count R²', sublabel: 'RMSE = 1.225 piglets (0-14)' },
      { value: '105 Sows', label: 'Meishan Farm Herd', sublabel: '15 farrowings · 10 fpm depth' },
      { value: '28+ Cites', label: 'COMPAG Vol. 152', sublabel: 'pp. 221-232 (Elsevier Q1)' }
    ],
    contributions: [
      'Collected continuous 10 fpm infrared depth imagery during parturition on a 105-Meishan-sow research herd, scoring neonate standing vitality.',
      'Built a parameterized multi-ellipse fitting detector counting litters from 0 to 14 piglets at R² = 0.918 (RMSE = 1.225) to measure exact inter-birth intervals.',
      'Flagged dangerous dystocia and neonatal piglet asphyxia events in real time at 86.3% accuracy and 92.1% specificity.'
    ],
    tables: [
      {
        title: 'Automated Farrowing Tracking & Asphyxia Warning Accuracy (COMPAG 2018)',
        headers: ['Task', 'Algorithm', 'Measured Performance'],
        rows: [
          ['Piglet Presence (0 vs 14)', 'Multi-ellipse depth fitting', '83.2% (0) · 80.1% (14) accuracy'],
          ['Sequential Litter Count', 'Incremental ellipse tracking', 'R² = 0.918 (RMSE = 1.225 piglets)'],
          ['Asphyxia Event Detection', 'Inter-birth interval classifier', '86.3% Acc · 92.1% Spec · 79.1% Prec · 72.3% Sens']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Mingxia Shen', affiliations: [1] },
      { name: 'Jiawei Li', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Longshen Liu', affiliations: [1] },
      { name: 'Mingzhou Lu', affiliations: [1] },
      { name: 'Guangyue Zhang', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'Pre-Partum', label: 'Early Warning', sublabel: 'Detects imminent farrowing' },
      { value: 'Posture Cue', label: 'Restless Transitions', sublabel: 'Lying-standing frequencies' },
      { value: 'Non-Contact', label: 'Overhead Sensing', sublabel: 'Zero wearable stress on sows' },
      { value: 'IAEJ 2018', label: 'Published Study', sublabel: 'Indexed OpenAlex W3097890783' }
    ],
    contributions: [
      'Quantified rising posture-transition and nest-seeking behavioral frequencies in crated sows hours prior to farrowing onset.',
      'Designed a non-invasive overhead monitoring classifier triggering stockperson assistance alerts ahead of parturition.',
      'Established behavioral precursors complementing subsequent automated inter-birth asphyxia detection.'
    ],
    tables: [
      {
        title: 'Pre-Parturition Sow Activity Classification Framework (2018)',
        headers: ['Behavioral Signal', 'Physical Change Prior to Farrowing', 'Alert Purpose'],
        rows: [
          ['Standing / Lying Ratio', 'Rapid increase in posture switches', 'Flags pre-farrowing restlessness window'],
          ['Activity Transition Rate', 'Frequent postural reorientation', 'Prepares farrowing supervision & heating lamps']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Haoyun Wang', affiliations: [1] },
      { name: 'Ke Wang', affiliations: [1] },
      { name: 'Li Duo', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Yingjun Xiong', affiliations: [1] },
      { name: 'Huanliang Xu', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: 'TLAVFTS', label: 'Hybrid Protocol', sublabel: 'TOA + Virtual Force + Sync' },
      { value: 'Mobile Actor', label: 'Anchor-Free Flex', sublabel: 'Lowers field deployment cost' },
      { value: 'Clock Drift', label: 'Synchronization Guard', sublabel: 'Tightens range error bounds' },
      { value: 'IJCNDS 2016', label: 'Inderscience Journal', sublabel: 'DOI: 10.1504/ijcnds.2016.076650' }
    ],
    contributions: [
      'Proposed TLAVFTS combining Time-of-Arrival (TOA) ranging, virtual-force geometric relaxation, and distributed time synchronization in wireless sensor and actor networks.',
      'Replaced fixed GPS-equipped anchor nodes with mobile actor coordination to reduce agricultural field node cost.',
      'Mitigated ranging distortion from clock drift across sparse multi-hop agricultural deployments.'
    ],
    tables: [
      {
        title: 'TLAVFTS Wireless Sensor & Actor Localization Components (IJCNDS 2016)',
        headers: ['Sub-Algorithm', 'Role in Field WSAN Deployment'],
        rows: [
          ['Time Synchronization Layer', 'Eliminates clock offset biases in acoustic/RF ranging'],
          ['TOA Ranging Estimator', 'Measures pairwise node-actor spatial distances'],
          ['Virtual Force Refinement', 'Iteratively settles ambiguous geometric node coordinates']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
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
    highlights: [
      { value: '4 Sensors', label: 'Microclimate Variables', sublabel: 'Temp, RH, Soil, Light' },
      { value: 'Closed-Loop', label: 'Automated Actuation', sublabel: 'Vents, irrigation, shading' },
      { value: 'Arduino', label: 'Low-Cost Embedded', sublabel: 'Open-hardware architecture' },
      { value: 'M.Sc. Thesis', label: 'Nanjing Agric. Univ.', sublabel: 'CSC Scholarship Research' }
    ],
    contributions: [
      'Engineered a low-cost Arduino embedded greenhouse controller integrating continuous air temperature, relative humidity, volumetric soil moisture, and lux sensing.',
      'Implemented hysteresis-bounded relay actuation driving irrigation pumps, ventilation fans, and shade motors.',
      'Established the embedded hardware sensing baseline extended into modern edge AI and agricultural IoT telemetry at SAAIL Lab.'
    ],
    tables: [
      {
        title: 'Greenhouse Telemetry & Actuation Control Loop (2016)',
        headers: ['Sensed Variable', 'Actuation Channel', 'Control Mode'],
        rows: [
          ['Air Temp & Humidity', 'Automated ventilation fans & misting', 'Threshold hysteresis feedback'],
          ['Soil Moisture', 'Solenoid drip irrigation valve', 'Demand-driven watering'],
          ['Solar Irradiance', 'Motorized greenhouse shading / lighting', 'Photoperiod regulation']
        ]
      }
    ],
    isSaailLab: false,
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
      { name: 'Cedric Okinda', affiliations: [1] },
      { name: 'Innocent Nyalala', url: 'https://inyalala.github.io/', affiliations: [1] },
      { name: 'Z. Chi', affiliations: [1] },
      { name: 'Mingxia Shen', affiliations: [1] }
    ],
    affiliations: [AFFILIATIONS.NAU],
    venue: 'International Journal of Emerging Technology and Advanced Engineering (IJETAE), Vol. 5, Issue 5, 2015',
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
    highlights: [
      { value: 'Occupancy', label: 'Sensing Trigger', sublabel: 'PIR + ambient light logic' },
      { value: 'Zero-Standby', label: 'Waste Elimination', sublabel: 'Automated load cutoff' },
      { value: '4+ Cites', label: 'Published Work', sublabel: 'IJETAE 2015' },
      { value: 'Low Cost', label: 'Microcontroller Core', sublabel: 'Institutional retrofit design' }
    ],
    contributions: [
      'Built a low-cost occupancy- and daylight-triggered microcontroller energy management unit cutting idle building electricity waste.',
      'Combined passive infrared (PIR) motion verification with ambient lux sensing to gate lighting and HVAC loads.',
      'Demonstrated reliable retrofit automation suitable for resource-constrained campus and agricultural facilities.'
    ],
    tables: [
      {
        title: 'Intelligent Energy Management Logic Summary (IJETAE 2015)',
        headers: ['Input Sensor', 'Decision Condition', 'Controlled Electrical Load'],
        rows: [
          ['PIR Occupancy', 'Room occupancy timeout expiry', 'Cuts idle lighting & fan circuits'],
          ['Ambient Lux Cell', 'Sufficient natural daylight threshold', 'Suppresses unnecessary artificial fixtures']
        ]
      }
    ],
    isSaailLab: false,
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
