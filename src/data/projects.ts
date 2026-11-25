export interface LabProject {
  slug: string;
  title: string;
  shortTitle: string;
  pillar: 'Language & Safety' | 'Precision Agriculture' | 'Blue Economy' | 'Responsible AI' | 'Healthcare AI';
  badge: string;
  status: string;
  funding?: string;
  lead: string;
  team: string[];
  partners: string[];
  summary: string;
  description: string[];
  objectives: string[];
  deliverables: string[];
  heroImage: string;
  heroAlt: string;
  githubUrl?: string;
  relatedPapers: { title: string; slug: string; venue: string }[];
  externalLinks?: { label: string; url: string }[];
}

export const PROJECTS: LabProject[] = [
  {
    slug: 'responsible-ai-global-south',
    title: 'Responsible AI, Sovereignty & Policy Harmonization for the Global South',
    shortTitle: 'Responsible AI & Sovereignty',
    pillar: 'Responsible AI',
    badge: 'Oxford TAIS 2026 · AAAI 2026',
    status: 'Active Policy & Governance Research',
    funding: 'IIT Madras Zanzibar',
    lead: 'Innocent Nyalala & Hope K. McCoy',
    team: ['Hope K. McCoy'],
    partners: ['Indian Institute of Technology Madras Zanzibar'],
    summary:
      'Grounding East African AI governance and Global South research sovereignty in Ubuntu, Harambee, and Ujamaa principles alongside comparative policy audits and cross-border oversight mechanisms.',
    description: [
      'East African nations frequently adopt imported Western regulatory templates because of external isomorphic pressure rather than local institutional fit. Ignoring communal values such as Ubuntu, Harambee, and Ujamaa widens compliance gaps and deepens technological dependency.',
      'This research stream compares national AI strategies across Ethiopia, Kenya, Rwanda, and broader Global South cohorts, pairs them with seven-dimensional sovereignty metrics (compute, data governance, human capital, regulation, investment, trust, and sanction resilience), and formulates regional coordination across water commons, power grids, indigenous languages, and shared AI oversight.'
    ],
    objectives: [
      'Trace structural compute, platform, and regulatory dependencies shaping AI autonomy across Global South economies.',
      'Audit policy variation across Ethiopia (2022), Rwanda (2023), and Kenya (2025) to identify regional harmonization pathways.',
      'Anchor continental oversight and public-interest AI infrastructure in Ubuntu, Harambee, and Ujamaa principles.',
      'Evaluate research sovereignty metrics and farmer proximity as quantitative predictors of real-world deployment.'
    ],
    deliverables: [
      'East African AI policy harmonization agenda presented at Oxford TAIS 2026',
      'Seven-dimensional AI sovereignty governance framework (AAAI 2026 EGSAI & EurIPS PAIG)',
      'Empirically grounded resistant digital citizenship taxonomy (Information Technology for Development)'
    ],
    heroImage: '/images/papers/dgs2026/fig_multiseed_dgs.png',
    heroAlt: 'DGS-Bench balanced deployment gap chart comparing raw accuracy against macro-F1 across field cassava benchmarks',
    relatedPapers: [
      {
        title: 'AI Policy Harmonization in East Africa: Cultural Sustainability in the New Technological Age',
        slug: 'ai-policy-harmonization-tais2026',
        venue: 'TAIS 2026 · University of Oxford'
      },
      {
        title: 'AI Sovereignty in the Global South: Power, Dependency, and Strategic Futures',
        slug: 'ai-sovereignty-global-south-aaai2026',
        venue: 'AAAI 2026 Workshop (EGSAI)'
      },
      {
        title: 'Digital Sovereignty or Digital Serfdom? AI Strategies, Geopolitics, and the Quest for an Equitable Global South',
        slug: 'digital-sovereignty-serfdom-2025',
        venue: 'PAIG Workshop @ EurIPS 2025'
      },
      {
        title: 'AI-Powered Surveillance, Internet Shutdowns, and Digital Citizenship as Resistance in East Africa',
        slug: 'digital-authoritarianism-east-africa',
        venue: 'Under Review · Info. Tech. for Dev. (2026)'
      }
    ]
  },
  {
    slug: 'swahili-dira',
    title: 'Zanzibar Swahili Corpus, Spoken QA & Dira Provenance Benchmark',
    shortTitle: 'Swahili Corpus & Dira',
    pillar: 'Language & Safety',
    badge: 'Flagship NLP Benchmark',
    status: 'Active Curation',
    funding: 'SAAIL Lab Core Research · IIT Madras Zanzibar',
    lead: 'Innocent Nyalala',
    team: ['Saleh Saleh', 'Sri Advaita'],
    partners: ['School of Engineering and Science, IIT Madras Zanzibar'],
    summary:
      'Building authentic coastal Kiunguja Swahili text and spoken domain QA paired with the Dira benchmark to detect machine-translated translationese from genuinely authored Swahili prose.',
    description: [
      'Most public African language benchmarks consist of English datasets machine-translated into standardized textbook Swahili, erasing syntactic rhythm, coastal vocabulary, and agrarian domain context.',
      'The SAAIL Lab BS research team curates verified native Swahili prose alongside spoken Zanzibar agricultural QA, training and benchmarking the Dira detector to measure provenance quality across modern language models.'
    ],
    objectives: [
      'Curate verified native Kiunguja and East African editorial Swahili corpora alongside parallel synthetic translations.',
      'Develop lexical, discourse, and neural stylometric detectors separating translationese from human Swahili authoring.',
      'Construct audio-text smallholder agricultural and coastal livelihood QA pairs grounded in Zanzibar dialect usage.'
    ],
    deliverables: [
      'Zanzibar Swahili Corpus and spoken agricultural QA annotations',
      'Dira Native vs. Translated Swahili benchmark and baseline models',
      'Dialectal evaluation protocols for low-resource speech and text pipelines'
    ],
    heroImage: '/images/projects/swahili_corpus_sources.png',
    heroAlt: 'Document distribution by source and Swahili-dominant share across the Zanzibar Swahili Corpus',
    githubUrl: 'https://github.com/saaillab/cara-fm',
    relatedPapers: [
      {
        title: 'Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture (CARA-FM)',
        slug: 'cara-fm',
        venue: 'PMLR Vol. 302 · DLI 2025 Best Poster'
      }
    ]
  },
  {
    slug: 'ubora-ai',
    title: 'Ubora-AI: Auditable Commercial Clove Grading & Capture-Session Integrity',
    shortTitle: 'Ubora-AI Clove Grading',
    pillar: 'Precision Agriculture',
    badge: 'ETRI Q2 + CVPR 2026 V4A',
    status: 'Deployed Prototype & Open Benchmarks',
    funding: 'IIT Madras Zanzibar Seed Research & AI4EAC Travel Grant',
    lead: 'Innocent Nyalala',
    team: ['Patrick Vincent Ndowo'],
    partners: ['Zanzibar State Trading Corporation (ZSTC)', 'IIT Madras Zanzibar'],
    summary:
      'Participatory computer vision datasets (CLOVES-4603, ZSTC-Clove-V1), compositional Explanation Evidence Ratio (EER) auditing, capture-session confounding diagnostics, and the offline Ubora-AI Flutter mobile grading app.',
    description: [
      'Zanzibar clove grading directly governs farmer payouts across up to a 53% price gap between Commercial Grade I and lower grades, yet inspection at ZSTC warehouses remains manual and subjective.',
      'In partnership with ZSTC Saateni inspectors, SAAIL Lab released public commercial benchmarks (CLOVES-4603 and ZSTC-Clove-V1), proved in ETRI Journal (2026) that segmentation-first compositional pipelines achieve 100% Explanation Evidence Ratio on true clove tissue, identified capture-session background shortcuts, and shipped the quantized INT8 Ubora-AI Flutter app.'
    ],
    objectives: [
      'Release standardized, multi-grade commercial clove imagery collected under authentic ZSTC grading workflows.',
      'Enforce compositional segmentation-first inference so grading decisions rely strictly on clove buds rather than tray illumination shortcuts.',
      'Quantize inference into an offline Flutter + TFLite INT8 smartphone inspector usable without cloud connectivity.'
    ],
    deliverables: [
      'CLOVES-4603 (CVPR 2026 V4A) and ZSTC-Clove-V1 public vision datasets',
      'Explanation Evidence Ratio (EER = 1.00) compositional classifier published in ETRI Journal',
      'Offline Ubora-AI Android/Flutter inspection prototype co-designed with Saateni graders'
    ],
    heroImage: '/images/papers/cloves/Fig4_Comprehensive_Model_Comparison.png',
    heroAlt: 'CLOVES-4603 multi-family clove quality grading benchmark performance',
    githubUrl: 'https://github.com/saaillab/CLOVES-4603',
    relatedPapers: [
      {
        title: 'Explainable AI for clove quality grading: Benchmarking post hoc XAI and compositional interpretability',
        slug: 'clove-xai-etri2026',
        venue: 'ETRI Journal (2026, Q2 SCI)'
      },
      {
        title: 'CLOVES-4603: Benchmarking Classical Texture Features and Fine-Tuned Deep Models',
        slug: 'cloves-4603',
        venue: 'CVPR 2026 V4A Workshop'
      },
      {
        title: 'Capture-session confounding undermines measurement validity in deep clove grading',
        slug: 'capture-session-confounding-cloves',
        venue: 'Manuscript Under Peer Review'
      },
      {
        title: 'From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar Indigenous Experts',
        slug: 'clove-codesign-africhi2025',
        venue: 'AfriCHI ACM Conference 2025'
      }
    ]
  },
  {
    slug: 'cropguard-pathology',
    title: 'CropGuardNet & DGS-Bench: Leak-Free Field Crop Pathology & Auditing',
    shortTitle: 'CropGuardNet & DGS-Bench',
    pillar: 'Precision Agriculture',
    badge: 'DLI 2026 Best Poster · 200 FPS ONNX',
    status: 'Published Suite + Manuscript Under Review',
    funding: 'IIT Madras Zanzibar & Deakin Cotutelle Collaboration',
    lead: 'Innocent Nyalala',
    team: [
      'Surabhi Gudla',
      'Twamaa Hababuu Makame',
      'Khamis K. Haji',
      'Patrick Vincent Ndowo',
      'Duen Michael Chombo'
    ],
    partners: ['IIT Madras Zanzibar', 'Deakin University', 'Nanjing Agricultural University'],
    summary:
      'Leak-free UUID and 64-bit pHash deduplication across 35,420 unique leaf images, sub-megabyte CropGuardNet ONNX inference (481.6K params, 5.00 ms), DGS-Bench field gap auditing, and DSA 2026 data-efficiency bounds.',
    description: [
      'Prior plant disease detectors report inflated >99% accuracies driven by augmented duplicate leakage across splits and break catastrophically when evaluated on authentic smallholder field photographs.',
      'This core research thrust pairs leak-free multi-crop modeling (CropGuardNet across 8 crops and 38 classes) with formal deployment auditing (DGS-Bench Best Poster at DLI 2026), few-shot budget scaling and DCGAN failure proofs at DSA 2026 Kampala, and offline TFLite INT8 Android tooling.'
    ],
    objectives: [
      'Eliminate offline-augmented train/test contamination via specimen UUID grouping and 64-bit DCT perceptual hashing.',
      'Engineer sub-0.5M parameter hybrid CNN-Transformer architectures running at 200 FPS in single-thread CPU ONNX.',
      'Quantify field deployment collapse across minority diseases and publish reproducible Kaggle T4 benchmark suites.'
    ],
    deliverables: [
      'CropGuardNet framework & 80,238-duplicate purge audit',
      'DGS-Bench Best Poster deployment gap benchmark (DLI 2026 Lagos)',
      'Three DSA 2026 Kampala papers + DeepLabV3+/MobileViT offline Maize field app'
    ],
    heroImage: '/images/papers/cropguardnet/fig_xai_master_8crops.png',
    heroAlt: 'CropGuardNet quad-method explainable AI attribution across eight crop species',
    githubUrl: 'https://github.com/saaillab/CropGuardNet',
    relatedPapers: [
      {
        title: 'CropGuardNet: Unified Lightweight CNN-Transformer with Multi-Scale Attention & XAI',
        slug: 'cropguardnet',
        venue: 'Manuscript Under Peer Review (2026)'
      },
      {
        title: 'DGS-Bench: Measuring the Deployment Gap Requires Balanced Metrics',
        slug: 'dgs-bench',
        venue: 'DLI 2026 Lagos · Best Poster Award'
      },
      {
        title: 'When Synthetic Data Hurts: DCGAN Augmentation Failure Under Extreme Scarcity',
        slug: 'dcgan-cassava-dsa2026',
        venue: 'DSA 2026 Kampala · Oral Presentation'
      },
      {
        title: 'Few-Shot Transfer Learning for Cassava Leaf Disease Detection Under East African Conditions',
        slug: 'few-shot-cassava-dsa2026',
        venue: 'DSA 2026 Kampala'
      }
    ]
  },
  {
    slug: 'cashew-ai',
    title: 'CashewAI: Phenology-Aware Dual-Stream Deep Learning for Integrated Disease Detection, Pest Identification, and Yield Prediction in Smallholder Cashew Orchards of East Africa',
    shortTitle: 'CashewAI Orchard Monitoring',
    pillar: 'Precision Agriculture',
    badge: 'ICSR Grant · IC&SR, IIT Madras',
    status: 'Active Field Deployment (Aug 2026 - Jul 2027)',
    funding: 'Exploratory Research Project (ERP 2026-27), IC&SR (Industrial Consultancy & Sponsored Research), IIT Madras (Rs. 9.35 lakhs, Aug 2026 - Jul 2027)',
    lead: 'Innocent Nyalala',
    team: [],
    partners: ['IC&SR (Industrial Consultancy & Sponsored Research), IIT Madras', 'Tanzania Cashew Grower Networks', 'IIT Madras Zanzibar'],
    summary:
      'Dual-stream phenology-aware computer vision for integrated foliar/nut disease detection, pest identification, and yield forecasting across smallholder Tanzanian cashew orchards.',
    description: [
      'Cashew is a primary export crop for southern Tanzania and coastal regions, yet orchard management suffers from delayed scouting of fungal blight, gummosis, anthracnose, and red rust infestations across irregular phenological transitions.',
      'Funded by IC&SR (Industrial Consultancy & Sponsored Research), IIT Madras under Exploratory Research Project ERP 2026-27 (Rs. 9.35 lakhs, August 2026 to July 2027), CashewAI develops phenology-aware dual-stream deep learning models suited for offline mobile scouting in smallholder cashew orchards.'
    ],
    objectives: [
      'Collect geographically stratified multi-season cashew leaf, bark, nut, and panicle imagery across coastal Tanzanian orchards.',
      'Train phenology-aware detectors distinguishing healthy developmental transitions from anthracnose, gummosis, leaf miner, and red rust.',
      'Deliver low-bandwidth seasonal yield and intervention advisories built for farmer cooperatives.'
    ],
    deliverables: [
      'Multi-season East African cashew phenology and foliar/stem disease imagery archive',
      'Lightweight orchard scouting vision checkpoints and severity scoring pipelines',
      'Field advisory workflows for smallholder Tanzanian cashew grower cooperatives'
    ],
    heroImage: '/images/projects/cashew_ai_samples.jpg',
    heroAlt: 'CashewAI specimen plate showing Healthy cashew leaf, Anthracnose lesion, Gummosis symptom, and Red Rust infestation',
    relatedPapers: []
  },
  {
    slug: 'seaweed-blue-economy',
    title: 'Zanzibar Coastal Blue Economy: Seaweed Ice-Ice Disease & Heatwave Sensing',
    shortTitle: 'Coastal Seaweed & Blue Economy',
    pillar: 'Blue Economy',
    badge: 'Coastal Telemetry & Vision',
    status: 'Active Field Program',
    funding: 'SAAIL Lab Coastal Initiative · IIT Madras Zanzibar',
    lead: 'Innocent Nyalala',
    team: ['Umniya Maulid'],
    partners: ['Zanzibar Women Seaweed Farming Cooperatives', 'School of Engineering & Science, IITMZ'],
    summary:
      'Forecasting sea-surface heatwave episodes and optically detecting Ice-Ice bleaching disease in Eucheuma and Kappaphycus seaweed plots along Zanzibar tidal flats.',
    description: [
      'Zanzibar ranks among the world’s largest producers of red seaweed, sustaining tens of thousands of women coastal farmers across Unguja and Pemba. Rising shallow-water marine heatwaves trigger catastrophic Ice-Ice bleaching syndrome that collapses harvest yields.',
      'SAAIL Lab pairs satellite sea-surface temperature and marine heatwave telemetry with shoreline optical computer vision to issue early heat-stress alerts and quantify bleaching severity directly across intertidal plots.'
    ],
    objectives: [
      'Monitor coastal intertidal sea-surface temperature spikes linked to Ice-Ice physiological stress using multi-year satellite series.',
      'Build computer vision classifiers detecting early tissue depigmentation from smartphone farm inspections.',
      'Connect coastal ocean forecasting with aquaculture resilience and deep-water adaptation planning across Zanzibar.'
    ],
    deliverables: [
      'Intertidal Zanzibar seaweed stress & marine heatwave telemetry pipeline',
      'Early Ice-Ice syndrome optical screening dataset prototype',
      'Blue economy risk forecasting modules for coastal women cooperatives'
    ],
    heroImage: '/images/projects/seaweed_ice_ice_arch.png',
    heroAlt: 'SeaweedAI multimodal pipeline combining coastal ocean heatwave telemetry and intertidal optical Ice-Ice bleaching detection',
    relatedPapers: []
  },
  {
    slug: 'placentavision',
    title: 'PlacentaVision & Maternal Biomarker Clinical AI',
    shortTitle: 'PlacentaVision Clinical AI',
    pillar: 'Healthcare AI',
    badge: 'Penn State · CPHK Pemba · IITMZ',
    status: 'Active Multi-Site Clinical Consortium',
    funding: 'Multi-Institutional Consortium (Penn State, CPHK Pemba, IITMZ)',
    lead: 'Innocent Nyalala',
    team: [
      'Twamaa Hababuu Makame',
      'Makame Mohammed Haji',
      'S. A. Mbarak',
      'A. S. Ali',
      'I. B. Kabole',
      'B. A. Bakari'
    ],
    partners: [
      'Penn State University (Prof. Alison Gernand)',
      'Center for Public Health Kinetics (CPHK), Pemba',
      'Indian Institute of Technology Madras Zanzibar'
    ],
    summary:
      'Automated view-specific placental segmentation and pixel-to-centimeter morphometric biomarker estimation (PlacentaVision) alongside explainable preterm birth serum risk modeling in Pemba.',
    description: [
      'Maternal morbidity and preterm delivery disproportionately burden rural and island clinics that lack tertiary imaging specialists or invasive pathology workflows.',
      'Through clinical collaborations spanning Penn State University and CPHK Pemba, SAAIL Lab develops calibrated three-view placental segmentation and morphometry pipelines (fetal, maternal, and trimmed views across 9,883 placental images) alongside SHAP-explainable neonatal risk stratification.'
    ],
    objectives: [
      'Segment placenta boundaries and calibration rulers reliably across bedside fetal, maternal, and trimmed delivery photographs.',
      'Extract morphometric area, perimeter, shape, and GLCM texture biomarkers scaled to physical units for neonatal outcome modeling.',
      'Deliver SHAP-explainable preterm birth and neonatal mortality risk scoring validated with Pemba public health cohorts.'
    ],
    deliverables: [
      'View-specific placental and calibration-ruler segmentation pipeline with automated QC screening (98.92% pass rate)',
      'SHAP-explainable maternal preterm biomarker pipelines across Zanzibar & Pemba cohorts',
      'Joint placental imaging morphometry & 4 co-supervised public health PhD studies'
    ],
    heroImage: '/images/projects/placentavision_pipeline.png',
    heroAlt: 'PlacentaVision automated view-specific placental segmentation and biomarker morphometry computational framework',
    relatedPapers: []
  }
];
