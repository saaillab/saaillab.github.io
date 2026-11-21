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
    slug: 'cultureseeds',
    title: 'CultureSEEDS East Africa: Culturally Grounded Swahili Safety Evaluation',
    shortTitle: 'CultureSEEDS East Africa',
    pillar: 'Language & Safety',
    badge: 'Google Award · US$100,000',
    status: 'Active · Global Consortium',
    funding: 'Google.org / Google DeepMind (US$100,000) & IITMZ Cultural Grant (Rs. 10.00 lakhs)',
    lead: 'Dr. Innocent Nyalala (East Africa Lead) & Hope K. McCoy (Co-PI, IITMZ Grant)',
    team: ['Dr. Innocent Nyalala', 'Hope K. McCoy', 'Saleh', 'Sri Advaita', 'Yussuf'],
    partners: ['Google DeepMind', 'Google.org', 'IIT Madras Zanzibar'],
    summary:
      'Constructing community-sourced cultural and safety evaluation suites across Swahili and nine regional East African languages to prevent false-positive refusals and culturally blind safety failures in frontier models.',
    description: [
      'Safety filters trained predominantly on Western English norms routinely misclassify everyday coastal Swahili idioms, agricultural advice, traditional ecological stewardship, and East African civic discourse as adversarial or unsafe, whereas they overlook genuine regional harms.',
      'As East Africa Lead on the Google DeepMind and Google.org CultureSEEDS consortium, SAAIL Lab leads participatory prompt curation across 10 African languages anchored in Swahili. In parallel, our IITMZ cultural preservation grant with Hope K. McCoy documents oral community narratives across Zanzibar and mainland Tanzania.'
    ],
    objectives: [
      'Assemble validated cultural safety prompts written directly by native speakers across coastal Swahili and regional languages.',
      'Distinguish benign cultural, religious, and agricultural expressions from genuine contextual safety risks.',
      'Benchmark frontier open and closed LLMs on cross-lingual refusal calibration and East African cultural fidelity.',
      'Archive community oral storytelling corpora under participatory data stewardship protocols.'
    ],
    deliverables: [
      '100+ audited East African CultureSEEDS evaluation prompts across 10 languages',
      'Zanzibar oral narrative and coastal Swahili domain test suites',
      'Cross-model false-refusal and cultural grounding audit methodology'
    ],
    heroImage: '/images/papers/posters/tais2026-oxford-poster.png',
    heroAlt: 'East African AI safety and cultural sustainability research poster at Oxford TAIS 2026',
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
    lead: 'Dr. Innocent Nyalala',
    team: ['Dr. Innocent Nyalala', 'Saleh', 'Sri Advaita', 'Yussuf'],
    partners: ['School of Engineering and Science, IIT Madras Zanzibar'],
    summary:
      'Building authentic coastal Kiunguja Swahili text and spoken domain QA paired with the Dira benchmark to detect machine-translated translationese from genuinely authored Swahili prose.',
    description: [
      'Most public African language benchmarks consist of English datasets machine-translated into standardized textbook Swahili, erasing syntactic rhythm, coastal vocabulary, and agrarian domain context.',
      'The SAAIL Lab BS research team curates verified native Swahili prose alongside spoken Zanzibar agricultural QA, training and benchmarking the Dira detector to measure provenance quality across modern language models.'
    ],
    objectives: [
      'Curate verified native Kiunguja and East African editorial Swahili corpora alongside aligned synthetic translations.',
      'Develop lexical, discourse, and neural stylometric detectors separating translationese from human Swahili authoring.',
      'Construct audio-text smallholder agricultural and coastal livelihood QA pairs grounded in Zanzibar dialect usage.'
    ],
    deliverables: [
      'Zanzibar Swahili Corpus and spoken agricultural QA annotations',
      'Dira Native vs. Translated Swahili benchmark and baseline models',
      'Dialectal evaluation protocols for low-resource speech and text pipelines'
    ],
    heroImage: '/images/papers/posters/cara-fm-poster-dli2025.png',
    heroAlt: 'CARA-FM culturally attuned resource-aware East African foundation models poster',
    githubUrl: 'https://github.com/saaillab/cara-fm',
    relatedPapers: [
      {
        title: 'Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture (CARA-FM)',
        slug: 'cara-fm',
        venue: 'PMLR Vol. 302 · DLI 2025 Best Poster'
      },
      {
        title: 'Unifying Perspectives on Learning Biases: A Data-Centric Intervention',
        slug: 'trustworthy-ai-iclr2026',
        venue: 'ICLR 2026 Trustworthy AI Workshop'
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
    lead: 'Dr. Innocent Nyalala & Patrick Vincent Ndowo',
    team: ['Dr. Innocent Nyalala', 'Patrick Vincent Ndowo'],
    partners: ['Zanzibar State Trading Corporation (ZSTC)', 'IIT Madras Zanzibar'],
    summary:
      'Participatory computer vision datasets (CLOVES-4603, ZSTC-Clove-V1), compositional Explanation Evidence Ratio (EER) auditing, capture-session confounding diagnostics, and the offline Ubora-AI Flutter mobile grading app.',
    description: [
      'Zanzibar clove grading directly governs farmer payouts across up to a 53% price gap between Commercial Grade I and lower grades, yet inspection at ZSTC warehouses remains manual and subjective.',
      'In partnership with ZSTC Saateni inspectors, SAAIL Lab released public commercial benchmarks (CLOVES-4603 and ZSTC-Clove-V1), proved in ETRI Journal (2026) that segmentation-first compositional pipelines achieve 100% Explanation Evidence Ratio on true clove tissue, uncovered dangerous capture-session background shortcuts, and shipped the quantized INT8 Ubora-AI Flutter app.'
    ],
    objectives: [
      'Release standardized, multi-grade commercial clove imagery captured under authentic ZSTC grading workflows.',
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
    lead: 'Dr. Innocent Nyalala',
    team: [
      'Dr. Innocent Nyalala',
      'Surabhi Gudla',
      'Twamaa Hababuu Makame',
      'Khamis K. Haji',
      'Patrick Vincent Ndowo',
      'Duen Michael Chombo',
      'Shivam Vyas'
    ],
    partners: ['IIT Madras Zanzibar', 'Deakin University', 'Nanjing Agricultural University'],
    summary:
      'Leak-free UUID and 64-bit pHash deduplication across 35,420 unique leaf images, sub-megabyte CropGuardNet ONNX inference (481.6K params, 5.00 ms), DGS-Bench field gap auditing, and DSA 2026 data-efficiency bounds.',
    description: [
      'Prior plant disease detectors report inflated >99% accuracies driven by augmented duplicate leakage across splits and break catastrophically when evaluated on authentic smallholder field captures.',
      'This core research thrust pairs leak-free multi-crop modeling (CropGuardNet across 8 crops and 38 classes) with formal deployment auditing (DGS-Bench Best Poster at DLI 2026), few-shot budget scaling and DCGAN failure proofs at DSA 2026 Kampala, and offline TFLite INT8 Android tooling.'
    ],
    objectives: [
      'Eliminate offline-augmented train/test contamination via specimen UUID grouping and 64-bit DCT perceptual hashing.',
      'Engineer sub-0.5M parameter hybrid CNN-Transformer architectures running at 200 FPS in single-thread CPU ONNX.',
      'Quantify field deployment collapse across minority diseases and publish reproducible Kaggle T4 benchmark harnesses.'
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
    title: 'CashewAI: Phenology-Aware Precision Orchard Monitoring',
    shortTitle: 'CashewAI Monitoring',
    pillar: 'Precision Agriculture',
    badge: 'IITMZ ICSR Seed Grant · Rs. 5.00 Lakhs',
    status: 'Active Field Deployment',
    funding: 'IIT Madras Zanzibar ICSR Seed Research Grant (Rs. 5.00 lakhs)',
    lead: 'Dr. Innocent Nyalala',
    team: ['Dr. Innocent Nyalala', 'B. C. Bhattarai', 'Khamis K. Haji'],
    partners: ['Tanzania Cashew Grower Networks', 'Deakin University (Cotutelle PhD)'],
    summary:
      'Spatiotemporal orchard monitoring uniting phenology stage tracking, canopy lesion detection, and smallholder advisory decision support across Tanzanian cashew belts.',
    description: [
      'Cashew is a cornerstone export crop for southern Tanzania and coastal regions, yet orchard management suffers from delayed scouting of fungal blight, pest infestations, and irregular phenological transitions.',
      'Funded by the IIT Madras Zanzibar ICSR Seed Grant and linked to our joint Cotutelle PhD program with Deakin University, CashewAI develops lightweight multi-temporal vision and agentic decision-support pipelines suited for mobile extension officers.'
    ],
    objectives: [
      'Collect geographically stratified multi-season cashew leaf, nut, and panicle imagery across coastal Tanzanian orchards.',
      'Train phenology-aware detectors distinguishing healthy developmental transitions from blight and anthracnose.',
      'Deliver low-bandwidth seasonal yield and intervention advisories tailored to farmer cooperatives.'
    ],
    deliverables: [
      'Multi-season East African cashew phenology and disease imagery archive',
      'Lightweight orchard scouting vision checkpoints and severity scoring',
      'Agentic agricultural decision-support PhD research architecture'
    ],
    heroImage: '/images/gallery/dsa-day-3-55.jpg',
    heroAlt: 'Field crop disease and agricultural vision collaboration in East Africa',
    relatedPapers: [
      {
        title: 'Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture',
        slug: 'cara-fm',
        venue: 'PMLR Vol. 302 · DLI 2025'
      },
      {
        title: 'Auditing Representation in Crop Disease Benchmark Datasets for Sub-Saharan Africa',
        slug: 'auditing-crop-datasets-dsa2026',
        venue: 'DSA 2026 Kampala'
      }
    ]
  },
  {
    slug: 'seaweed-blue-economy',
    title: 'Zanzibar Coastal Blue Economy: Seaweed Ice-Ice Disease & Heatwave Sensing',
    shortTitle: 'Coastal Seaweed & Blue Economy',
    pillar: 'Blue Economy',
    badge: 'Coastal Telemetry & Vision',
    status: 'Active Field Program',
    funding: 'SAAIL Lab Coastal Initiative · IIT Madras Zanzibar',
    lead: 'Dr. Innocent Nyalala',
    team: ['Dr. Innocent Nyalala', 'Khamis K. Haji', 'Ayman Hamza Haji'],
    partners: ['Zanzibar Women Seaweed Farming Cooperatives', 'School of Engineering & Science, IITMZ'],
    summary:
      'Forecasting sea-surface heatwave episodes and optically detecting Ice-Ice bleaching disease in Eucheuma and Kappaphycus seaweed plots along Zanzibar tidal flats.',
    description: [
      'Zanzibar ranks among the world’s largest producers of red seaweed, sustaining tens of thousands of women coastal farmers across Unguja and Pemba. Rising shallow-water marine heatwaves trigger catastrophic Ice-Ice bleaching syndrome that collapses harvest yields.',
      'SAAIL Lab pairs environmental water-temperature and salinity telemetry with shoreline smartphone vision to issue early heat-stress alerts and quantify bleaching severity directly at intertidal farms.'
    ],
    objectives: [
      'Monitor coastal intertidal sea-surface temperature spikes linked to Ice-Ice physiological stress.',
      'Build computer vision classifiers detecting early tissue depigmentation from smartphone farm inspections.',
      'Connect coastal ocean forecasting with aquaculture and reef health monitoring across Zanzibar.'
    ],
    deliverables: [
      'Intertidal Zanzibar seaweed stress & environmental telemetry pipeline',
      'Early Ice-Ice syndrome optical screening dataset prototype',
      'Blue economy risk forecasting modules for coastal women cooperatives'
    ],
    heroImage: '/images/gallery/dsa-day-3-57.jpg',
    heroAlt: 'SAAIL Lab researchers discussing coastal and agricultural AI applications in East Africa',
    relatedPapers: [
      {
        title: 'Digital Sovereignty or Digital Serfdom? AI Strategies, Geopolitics, and the Global South',
        slug: 'digital-sovereignty-serfdom-2025',
        venue: 'PAIG @ NeurIPS 2025'
      },
      {
        title: 'DGS-Bench: Measuring the Deployment Gap Requires Balanced Metrics',
        slug: 'dgs-bench',
        venue: 'DLI 2026 Lagos · Best Poster Award'
      }
    ]
  },
  {
    slug: 'placentavision',
    title: 'PlacentaVision, Maternal Biomarkers & Endoscopic Boundary Clinical AI',
    shortTitle: 'PlacentaVision & Clinical ML',
    pillar: 'Healthcare AI',
    badge: 'Penn State · CPHK Pemba · ESWA (IF 7.5)',
    status: 'Active Multi-Site Clinical Consortium',
    funding: 'Multi-Institutional Consortium (Penn State, CPHK Pemba, IITMZ)',
    lead: 'Dr. Innocent Nyalala',
    team: [
      'Dr. Innocent Nyalala',
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
      'Hangzhou Normal University & Zhejiang University'
    ],
    summary:
      'Non-invasive placental ultrasound weight and perfusion modeling (PlacentaVision), explainable preterm birth serum biomarker risk models in Pemba, and BAFNet boundary-aware polyp segmentation (ESWA 2025).',
    description: [
      'Maternal morbidity and preterm delivery disproportionately burden rural and island clinics that lack tertiary imaging specialists or invasive pathology workflows.',
      'Through multi-institutional clinical collaborations spanning Penn State University, CPHK Pemba, and clinical computer vision partners, SAAIL Lab builds calibrated models for bedside placental morphometry, SHAP-explainable neonatal risk stratification, and contour-aware endoscopic segmentation.'
    ],
    objectives: [
      'Predict placental weight, perfusion status, and perinatal risk from routine bedside imaging under the PlacentaVision consortium.',
      'Deliver SHAP-explainable preterm birth and neonatal mortality risk scoring validated with Pemba health cohorts.',
      'Advance ultra-efficient boundary-aware segmentation networks such as BAFNet (0.914 EndoScene Dice in 5.98M parameters).'
    ],
    deliverables: [
      'BAFNet endoscopic segmentation published in Expert Systems with Applications (2025, IF 7.5)',
      'SHAP-explainable maternal preterm biomarker pipelines across Zanzibar & Pemba cohorts',
      'Joint placental imaging morphometry & 4 co-supervised public health PhD studies'
    ],
    heroImage: '/images/papers/health/bafnet_arch.png',
    heroAlt: 'BAFNet contour-aware clinical segmentation architecture for medical imaging',
    relatedPapers: [
      {
        title: 'BAFNet: Deep contour-aware features for colorectal polyps segmentation',
        slug: 'bafnet-polyp-2025',
        venue: 'Expert Systems with Applications (2025, IF 7.5)'
      }
    ]
  }
];
