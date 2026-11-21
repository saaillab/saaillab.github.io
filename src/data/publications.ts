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
  WSAI: 'Wadhwani School of Data Science and AI, Indian Institute of Technology Madras, Chennai, India',
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
      }
    ],
    figureHeading: 'Architecture, Efficiency Pareto & Cross-Crop Explainable AI',
    figures: [
      {
        src: '/images/papers/cropguardnet/fig_xai_master_8crops.png',
        caption: 'Quad-method XAI visual comparison across all eight crop species (Grad-CAM++, LayerCAM, LIME, GradientSHAP).',
        alt: 'CropGuardNet XAI master comparison across 8 crops'
      },
      {
        src: '/images/papers/cropguardnet/fig08_pareto_efficiency.png',
        caption: 'Pareto trade-off comparing test F1-macro against computational FLOPs and CPU ONNX inference latency across seven evaluated architectures.',
        alt: 'CropGuardNet Pareto efficiency frontier'
      },
      {
        src: '/images/papers/cropguardnet/fig_robustness_curves.png',
        caption: 'Mean classification accuracy degradation trajectories across 20 corruption regimes at severity levels 1 through 5.',
        alt: 'CropGuardNet robustness across 20 corruption regimes'
      },
      {
        src: '/images/papers/cropguardnet/fig_plantdoc_field_transfer.png',
        caption: 'Field-transfer performance comparison on uncurated PlantDoc smartphone images under Mode A1, Mode A1-Auto, and 20-epoch adaptation.',
        alt: 'PlantDoc field transfer evaluation'
      }
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
    teaserImage: '/images/papers/govtech/itd_digital_citizenship.jpeg',
    teaserCaption: 'Resistant digital citizenship practices in hybrid regimes grounded in Ubuntu relational ethics and Afrofeminist collective data governance.',
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
    teaserImage: '/images/papers/dgs2026/fig1_dgs_bar.png',
    teaserCaption: 'The Evaluation Mirage: raw accuracy shows a misleading positive shift under field imbalance while balanced macro-F1 exposes negative deployment gaps across all 4 architectures.',
    tldr: 'Demonstrates that aggregate accuracy hides catastrophic minority-disease failures under field shift in African cassava diagnostics, introducing balanced deployment-gap evaluation metrics (Best Poster Award, DLI 2026).',
    abstract: 'Agricultural AI models trained on balanced laboratory datasets routinely report moderate linear-probe accuracy (~55%), yet the same models appear to improve when evaluated on naturally imbalanced African field data. We show that this apparent improvement is an Evaluation Mirage: class imbalance inflates aggregate accuracy while minority-class performance degrades. We introduce DGS-Bench, a reproducible evaluation framework using the public Kaggle cassava disease dataset, and demonstrate the mirage across 40 independent experiments (10 random seeds x 4 pretrained architectures): raw-accuracy DGS is negative in all 40 cases (mean -6.00 +/- 2.38 pp; t = -15.8, p < 1e-6), while macro-F1 DGS is positive in all 40 (mean +8.16 +/- 2.34 pp; t = 21.7, p < 1e-6). Three additional lines of evidence strengthen the finding: (1) image-space background removal via GrabCut segmentation collapses field accuracy by 20-35 pp, confirming feature-space perturbation results with direct pixel-level evidence; (2) fine-tuning ResNet-50 (full and last-block) amplifies the mirage rather than eliminating it; and (3) cross-architecture threshold analysis reveals that the mirage onset varies from 20% to 50% dominant-class prevalence depending on architecture. Macro-AUPRC DGS is positive for all architectures (mean +8.3 pp), confirming the F1 finding; macro-AUROC DGS diverges (negative), highlighting the critical distinction between ranking and threshold-dependent metrics under imbalance. Cross-dataset validation on PlantVillage Tomato (10 classes) and Rice Leaf Disease (4 classes) confirms that the mirage requires both severe class imbalance and moderate model uncertainty; it does not appear when frozen features achieve >90% lab accuracy. All code is available on Kaggle.',
    keywords: ['DGS-Bench', 'African agricultural AI', 'cassava disease', 'balanced metrics', 'deployment gap', 'Deep Learning Indaba'],
    topics: ['Agriculture', 'Benchmarking', 'Responsible AI', 'Cassava', 'East Africa'],
    highlights: [
      { value: '+8.19 pp', label: 'Mean Macro-F1 Gap', sublabel: 'Paired t = 10.2, p = 0.002' },
      { value: '-5.96 pp', label: 'Raw Acc Mirage', sublabel: 'Field Acc hides minority failure' },
      { value: '-17.0 pp', label: 'BG Perturbation Drop', sublabel: 'ViT-Small/16 loses 21.3 pp' },
      { value: 'Best Poster', label: 'DLI 2026 Winner', sublabel: '18 / 114 accepted (15.79%)' }
    ],
    figureHeading: 'Empirical Perturbation & Cross-Architecture Mirage Evidence',
    figures: [
      {
        src: '/images/papers/dgs2026/fig2_perturbation.png',
        caption: 'Feature perturbation curves demonstrating reliance on background shortcuts during field inference.',
        alt: 'Feature perturbation curves at severity 1.0'
      },
      {
        src: '/images/papers/dgs2026/fig3_balanced_dgs.png',
        caption: 'Comparison of raw accuracy deployment gap against balanced macro-F1 deployment gap across seeds.',
        alt: 'Balanced macro-F1 deployment gap across models'
      },
      {
        src: '/images/papers/dgs2026/fig7_cross_dataset.png',
        caption: 'Cross-dataset validation on PlantVillage Tomato and Rice Leaf Disease showing mirage dependence on model uncertainty and imbalance.',
        alt: 'Cross-dataset validation on Tomato and Rice'
      }
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
    teaserImage: '/images/papers/cloves/cloves4603_pipeline.png',
    teaserCaption: 'CLOVES-4603 standardized acquisition, texture feature fusion (GLCM+GLRLM+LBP), and deep fine-tuning benchmarking pipeline across four ZSTC grades.',
    tldr: 'Introduces CLOVES-4603, the first public 4,603-image benchmark for Zanzibar clove grading across four commercial grades, comparing classical texture pipelines (92.94%) against fine-tuned deep architectures (99.67%).',
    abstract: 'Zanzibar produces approximately 8,000 tons of dried cloves annually; however, post-harvest quality grading remains manual, inconsistent, and costly. We introduce CLOVES-4603, a dataset of 4,603 standardized 224x224 RGB images spanning four commercial grades collected at the Zanzibar State Trading Corporation facilities. Using lot-aware stratified 70/10/20 splits (5 seeds, bootstrap 95% CIs), we benchmarked classical texture pipelines (HOG+SVM and GLCM+GLRLM+LBP fusion with RBF-SVM), a frozen DINOv2 ViT-B/14 linear probe, and four fine-tuned ImageNet models. On the 921-image test set, ResNet-50 achieved 99.67% accuracy (macro F1 99.66%), and MobileNetV3-Large achieved an accuracy of 99.35%. The frozen DINOv2 probe achieved 94.90%, outperforming the texture fusion SVM at 92.94%. HOG+SVM reaches 32.68%. Accuracy, latency, and parameter trade-offs are provided for deployment. This benchmark establishes a reproducible evaluation standard for whole dried-spice grading research.',
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
    figureHeading: 'Benchmark Results, Confusion Matrix & Pareto Latency Analysis',
    figures: [
      {
        src: '/images/papers/cloves/cloves4603_benchmark.png',
        caption: 'Test accuracy and macro-F1 across classical pipelines (HOG+SVM, Texture+SVM) and fine-tuned CNN/ViT models on the 921-image test split.',
        alt: 'CLOVES-4603 classifier accuracy and F1 comparison'
      },
      {
        src: '/images/papers/cloves/cloves4603_cm.png',
        caption: 'Held-out test confusion matrix for the top-performing ResNet-50 model (99.67% accuracy, 0.9966 macro-F1).',
        alt: 'ResNet-50 test confusion matrix across 4 clove grades'
      },
      {
        src: '/images/papers/cloves/cloves4603_pareto.png',
        caption: 'Test accuracy versus single-image inference latency showing sub-5 ms edge-deployable models.',
        alt: 'Accuracy versus inference latency trade-off'
      }
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
    teaserImage: '/images/papers/iclr2026/ddr_framework.png',
    teaserCaption: 'Dynamic Data Re-weighting (DDR) unifies fairness disparities, shortcut vulnerability, and OOD generalization failure through adversarial sample introspection.',
    posterUrl: '/images/papers/posters/iclr-2026-trustworthy-ai.webp',
    tldr: 'Introduces Dynamic Data Re-weighting (DDR), a data-centric intervention using adversarial introspection to jointly improve algorithmic fairness, spurious-correlation robustness, and out-of-distribution generalization without group labels.',
    abstract: 'Subgroup fairness disparities, spurious-shortcut sensitivity, and out-of-distribution generalization failures are routinely investigated in separate machine learning subfields despite sharing a common causal source in non-causal spurious correlations baked into training data. We introduce Dynamic Data Re-weighting (DDR), a unified data-centric intervention using adversarial introspection to automatically detect and up-weight high-difficulty, shortcut-dependent examples without requiring expensive explicit spurious-group annotations during training. Evaluated across background biases, attribute shifts, and severe class imbalances, DDR consistently improves Worst-Group Accuracy alongside out-of-distribution generalization.',
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
    teaserImage: '/images/papers/carafm/cara_fm_framework.jpeg',
    teaserCaption: 'The four-pillar CARA-FM architecture uniting Data-Centric AI, Cultural Attunement, Resource-Aware edge efficiency, and Ethical participatory governance.',
    tldr: 'Introduces the four-pillar CARA-FM framework (Community-Driven Data, Indigenous Knowledge Systems, Edge-First Architecture, Participatory Governance) for East African agricultural foundation models.',
    abstract: 'East African agriculture supports more than 175 million people but faces mounting challenges from climate change, resource constraints, and information access barriers. Current foundation models fail to address the region’s computational limitations (devices with 1-4 GB RAM), linguistic diversity (200+ languages), and knowledge system differences. This paper presents CARA-FM (Culturally Attuned and Resource-Aware Foundation Models), a theoretical framework comprising four pillars: Community-Driven Data Architecture, Indigenous Knowledge Systems, Edge-First Model Design, and Participatory Governance. We propose evaluation metrics that span the technical (computational efficiency), agricultural (yield improvement), and cultural (community acceptance) dimensions. Although empirically unvalidated, this framework provides a research agenda for developing agricultural AI systems that operate within severe resource constraints and respect local contexts. Our contribution is theoretical and offers a blueprint for future empirical work rather than implemented solutions.',
    keywords: ['CARA-FM', 'foundation models', 'East African agriculture', 'responsible AI', 'indigenous knowledge', 'PMLR', 'Deep Learning Indaba'],
    topics: ['Foundation Models', 'Responsible AI', 'Agriculture', 'East Africa'],
    highlights: [
      { value: 'PMLR 302', label: 'Published Proceedings', sublabel: 'pp. 1-11 (DLI 2025 Oral)' },
      { value: '4 Pillars', label: 'CARA-FM Architecture', sublabel: 'Data, IKS, Edge, Governance' },
      { value: '10x-40x', label: 'Infra Resource Gap', sublabel: 'RAM & bandwidth reality' },
      { value: '5M-50M', label: 'Edge Compression Tiers', sublabel: 'Tiny / Lite / Edge specs' }
    ],
    figureHeading: 'Deep Learning Indaba 2025 Best Poster Recognition',
    figures: [],
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
    abstract: 'Reliable agricultural commodity grading requires accuracy and explanations that match regulatory criteria. Using 4603 expert-graded clove images across four Zanzibar State Trading Corporation (ZSTC) quality grades, we benchmark seven post hoc explainable artificial intelligence (XAI) methods (GradCAM, Grad-CAM++, ScoreCAM, LIME, GradientSHAP, CLS-Attention, and Chefer LRP) across eight CNN/ViT architectures and compare them with a compositional segmentation-classification pipeline that builds interpretability into the model. We propose the Explanation Energy Ratio (EER) to quantify foreground-aligned explanations using ground-truth masks. EER varies widely by architecture explainer, with different explainers yielding different results for the same classifier. Under a synthetic background-replacement domain shift, robustness differs despite similar in-domain performance. LIME performs well on transformers but is slow; SHAP is too costly for edge use. The compositional pipeline achieves 99.45% F1 with 100% EER by design and is preferred by certified ZSTC graders for regulatory auditing.',
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
    figureHeading: 'Attribution Qualitative Comparison, EER Correlation & Expert Audits',
    figures: [
      {
        src: '/images/papers/etri2026/fig2_xai_comparison.png',
        caption: 'Qualitative saliency alignment across Grad-CAM, LIME, GradientSHAP, and compositional segmentation masks for Grades I-IV.',
        alt: 'ETRI 2026 XAI attribution comparison across clove grades'
      },
      {
        src: '/images/papers/etri2026/fig3_eer_vs_robustness.png',
        caption: 'Correlation between Explanation Energy Ratio (EER) and accuracy under background-replacement domain shift across architectures.',
        alt: 'EER vs Domain Shift robustness scatter plot'
      },
      {
        src: '/images/papers/etri2026/fig4_expert_evaluation.png',
        caption: 'Grade agreement and unanimous ZSTC expert regulatory audit approval (3/3 certified inspectors across 90 batches).',
        alt: 'ZSTC expert evaluation and audit approval bar chart'
      }
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
    teaserImage: '/images/papers/cloves/graphical_abstract.png',
    teaserCaption: 'End-to-end automated ZSTC clove grading benchmark pipeline spanning dataset curation, 137-feature classical evaluation, 18 deep architectures, and compositional rule aggregation.',
    tldr: 'Evaluates CNN feasibility on ZSTC-Clove-V1 (5,298 single-clove images across 4 ZSTC grades), finding ResNet-18 reaches 94.46% accuracy (94.33% F1) whereas unresidualized VGG-16 collapses to 31.32% (14.94% F1), motivating explainable pipelines.',
    abstract: 'Clove (Syzygium aromaticum L.) is Zanzibar\'s most economically significant export commodity, with the Zanzibar State Trading Corporation (ZSTC) defining four commercial grade tiers whose price differentials can exceed 40% between adjacent grades. Current ZSTC grading relies entirely on manual visual inspection, which is subjective, labour-intensive, and prone to inter-inspector inconsistency. We present the first comprehensive deep learning benchmark study for automated Zanzibar clove quality grading aligned with official ZSTC commercial standards. We introduce a dataset of 5,898 expert-graded clove images spanning four commercial ZSTC grades, labelled under consensus protocols by three certified ZSTC inspectors (Cohen\'s kappa = 0.92). We evaluated 18 state-of-the-art deep learning architectures spanning convolutional neural networks, vision transformers, and a classical machine learning baseline. Top convolutional models, including ResNet-50, ResNet-101, DenseNet-201, and EfficientNet-B2/B3, achieve a macro-averaged F1 score of 99.71% on the held-out test set. EfficientNet-B0 achieves 99.27% with only 5.3M parameters, representing the most practical deployment option for resource-constrained facilities. We further propose a three-stage decomposed multi-task framework integrating semantic segmentation, per-clove classification, and deterministic ZSTC rule-based aggregation, achieving 99.45% macro-F1 with human-readable audit trails traceable to official ZSTC grade thresholds. To our knowledge, this is the first machine vision benchmark study specifically addressing the commercial quality grade classification of Zanzibar cloves under ZSTC standards. Key limitations include data collection from a single harvest season and the absence of inference speed measurements on low-cost edge hardware relevant to field deployment.',
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
    figureHeading: '18-Architecture Benchmark & Explainability Visualizations',
    figures: [
      {
        src: '/images/papers/cloves/figure_benchmark_f1.png',
        caption: 'Macro-F1 comparison across CNN, Vision Transformer, and classical SVM model families evaluated on held-out ZSTC cloves.',
        alt: '18-model clove benchmark F1 comparison'
      },
      {
        src: '/images/papers/cloves/figure_03_gradcam.png',
        caption: 'Grad-CAM foreground localization across commercial clove grades confirming morphological stem/bud attention.',
        alt: 'Grad-CAM visualization on ZSTC-Clove-V1'
      }
    ],
    tables: [
      {
        title: 'CNN Architecture Feasibility Comparison on ZSTC-Clove-V1 Held-Out Test Split (n = 794)',
        headers: ['Architecture', 'Test Accuracy (%)', 'Precision (%)', 'Recall (%)', 'Macro-F1 (%)'],
        rows: [
          ['ResNet-18', '94.46', '94.39', '94.34', '94.33'],
          ['VGG-16', '31.32', '9.81', '31.32', '14.94']
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
    abstract: 'We test whether DCGAN augmentation alleviates labeled-data scarcity for cassava disease classification in Uganda. Training a DCGAN on 25, 50, or 100 real images per class and augmenting four classifier architectures to 500 images per class, we find that GAN augmentation consistently degrades macro-F1: by 23.2 pp at n = 25, 21.2 pp at n = 50, and 10.3 pp at n = 100. Pretrained classifiers suffer far more (ResNet-50: -35.9 pp; EfficientNet-B3: -32.7 pp) than a from-scratch CNN (-1.9 pp). GAN diagnostics confirm discriminator dominance and mode collapse, producing semantically empty images that poison fine-tuning. We establish an empirical minimum GAN viability threshold of ~100-200 images per class and warn against DCGAN augmentation in the extreme few-shot regime common in Sub-Saharan African agricultural datasets.',
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
    abstract: 'Crop disease image datasets are increasingly used to build decision-support tools for smallholder farmers in Sub-Saharan Africa. Yet dataset representativeness ; in terms of geography, imaging environment, class balance, image quality, and morphological diversity ; is rarely documented in a systematic way, making it difficult for practitioners to assess fitness for deployment. We apply a five-dimension representativeness audit to three publicly available crop disease benchmark datasets (PlantVillage, iCassava 2019, and iBean), assign quantitative scores under a defined rubric, and discuss the implications for responsible deployment. We further propose the AgriAI Bias Card, a six-item documentation checklist adapted from existing fairness tools to the specific representational challenges of African agricultural AI.',
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
    abstract: 'Cassava feeds over 500 million people across Sub-Saharan Africa, yet annual crop losses of up to 40% from Cassava Brown Streak Disease and Cassava Mosaic Disease go undetected due to scarce diagnostic infrastructure in rural settings. Deep learning achieves high accuracy on curated benchmarks but requires thousands of labeled images per class — a resource rarely available in African field deployments. We present a systematic evaluation of few-shot transfer learning on 21,397 smartphone-captured Ugandan field images spanning five disease classes. Four pretrained backbones (ResNet-50, EfficientNet-B3, MobileNetV3, ViT-B/16) are evaluated under linear probing and full fine-tuning at k in {10, 25, 50, 100} labeled images per class, with a shared hyperparameter configuration across all models. Full fine-tuning of ViT-B/16 achieves 63.6% accuracy at k = 50 — a +28.5 pp gain over training from scratch. Per-class analysis shows CMD is most detectable (F1: 0.77) while Healthy is hardest (F1: 0.49), with 25% of Healthy leaves misclassified as CBB; the primary deployment safety concern. Annotation efficiency analysis identifies k = 50 (250 total images across five classes) as the optimal budget threshold: marginal accuracy return drops 8{x} beyond this point, providing a concrete, cost-effective blueprint for cassava disease AI in data-scarce African agricultural settings.',
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
    abstract: 'East African nations frequently adopt Western AI governance frameworks wholesale, usually because of external isomorphic pressure rather than local institutional fit. Ignoring communal values such as Harambee, Ujamaa, and Ubuntu in this process creates policy mismatches that deepen technological dependency and reproduce neocolonial dynamics. We argue for a culturally grounded, regionally coordinated approach to AI governance in East Africa. A comparative analysis of the formal AI strategies of Ethiopia (2022), Kenya (2025), and Rwanda (2023) reveals sharply divergent emphases and almost no regional coordination. We propose four areas for policy harmonisation drawn directly from East African cultural philosophy: water resource management, electricity and power infrastructure, indigenous language preservation, and shared regional oversight. The implication is plain: effective AI governance for the Global South needs indigenous roots, not borrowed templates.',
    keywords: ['AI policy', 'East Africa', 'cultural sustainability', 'AI safety', 'global governance', 'TAIS 2026'],
    topics: [
      'Responsible AI',
      'AI Policy & GovTech',
      'East Africa'
    ],
    teaserImage: '/images/projects/responsible_ai_framework.png',
    posterUrl: '/images/papers/posters/tais2026-oxford-poster.png',
    teaserCaption: 'Conceptual framework linking East African Ubuntu, Harambee, and Ujamaa principles to four shared regional AI harmonization pillars.',
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
    teaserImage: '/images/papers/sovereignty/sovereignty_7d_framework.png',
    teaserCaption: 'Seven-dimensional sovereignty evaluation mapping structural compute, data, and regulatory dependencies across the Global South.',
    tldr: 'Analyzes compute, talent, and regulatory dependency across the Global South and proposes multipolar South-South AI governance involving the African Union and ASEAN.',
    abstract: 'This paper examines structural power asymmetries shaping artificial intelligence development and deployment across the Global South. Drawing on comparative political economy and technology governance scholarship, we map multi-layered dependencies spanning foundational compute infrastructure, proprietary foundation model weights, training data extractivism, cloud hosting concentration, and external regulatory standards. We articulate strategic sovereignty pathways prioritizing open-weight model adaptation, shared regional compute commons, participatory data stewardship, and South-South technical cooperation so emerging economies exercise autonomous agency over societal AI systems.',
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
    abstract: 'Feature channel selection has proven to be an effective strategy for establishing a top-down neural attention mechanism that refines and enhances semantic features for central representation. The quality of the semantic segmentation results for colorectal polyps is significantly influenced by both the encoder and decoder, with the encoder playing a pivotal role in guiding the decoder\'s final output. To improve the semantic accuracy of colorectal polyp segmentation in medical tasks, we introduce a boundary-aware feature fusion neural network (BAFNet). BAFNet incorporates two novel approaches. First, a gating branch was designed to construct an inhibition mechanism that selects high-quality contour features. This branch integrates a gating module with four convolutional-Batch Normalization (conv-BN) blocks. Second, to further construct prominent semantic features, we propose and incorporate multi-scale feature aggregation module (MFAM) and dynamic global attention module (DGAM) as a robust feature constructor, parsing the semantics as a foreground representation. When tested on the CVC-ColonDB, ETIS, and EndoScene benchmark datasets, the proposed method achieved DICE scores of 0.808, 0.808, and 0.914; IoU scores of 0.722, 0.732, and 0.863; and F-measure scores of 0.782, 0.774, and 0.905, respectively, demonstrating a balanced and robust performance in colorectal polyp segmentation. Our neural network, with 5.98 million parameters and 3.59 GFLOPs, significantly outperforms ASCNet, MSNet, TransFuse, C2F-Net, and PraNet. These results demonstrate that the proposed algorithm is highly suitable for colorectal polyp segmentation applications and provides a robust solution for advancing medical image processing technology.',
    keywords: ['BAFNet', 'colorectal polyps', 'medical image segmentation', 'contour-aware', 'Expert Systems with Applications'],
    topics: ['Healthcare', 'Medical Imaging', 'Deep Learning'],
    figures: [
      {
        src: '/images/papers/health/bafnet_results.png',
        caption: 'Qualitative colorectal polyp segmentation results comparing raw endoscopic frame, ground truth mask, and BAFNet prediction.',
        alt: 'BAFNet polyp segmentation comparison'
      }
    ],
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
    teaserImage: '/images/papers/cassava/cassava_leaf_classes.jpg',
    teaserCaption: 'Representative cassava foliar pathology spectrum spanning early and subtle lesions across CBB, CBSD, CGM, CMD, and healthy field samples.',
    tldr: 'Presents a signal-rectification neural mechanism that recovers attenuated early-stage foliar disease cues in cassava leaf classification.',
    abstract: 'Early-stage cassava leaf disease diagnosis in real smallholder field conditions is frequently undermined because subtle pathogenic lesion cues act as extremely weakened visual signals overwhelmed by cluttered backgrounds, uneven illumination, and healthy foliage dominance. Published in Computers and Electronics in Agriculture (Vol. 232, 110107, 2025), this study proposes a signal-rectification neural architecture designed to amplify faint discriminative pathology responses, counteract attenuated feature propagation across deep convolutional layers, and stabilize multi-class classification across Cassava Bacterial Blight (CBB), Cassava Brown Streak Disease (CBSD), Cassava Green Mottle (CGM), Cassava Mosaic Disease (CMD), and healthy leaves under complex field backgrounds.',
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
    teaserImage: '/images/papers/sovereignty/sovereignty_7d_framework.png',
    teaserCaption: 'Comparative seven-dimensional AI sovereignty governance framework applied across Singapore, Vietnam, Kenya, and Syria.',
    tldr: 'Introduces a seven-dimensional diagnostic framework across Singapore, Vietnam, Kenya, and Syria to evaluate whether national AI strategies advance digital sovereignty or digital serfdom.',
    abstract: 'This study examines whether nations across the Global South are charting autonomous trajectories toward digital sovereignty or drifting into structural dependency and digital serfdom shaped by dominant US and Chinese technology platforms. Applying a seven-dimensional governance evaluation framework covering compute infrastructure, data governance, human capital, regulation, capital investment, civic trust, and sanction resilience, we compare trajectories across Singapore, Vietnam, Kenya, and Syria. We highlight how regional bodies including the African Union (AU) and ASEAN, paired with South-South collaborative frameworks, provide actionable policy leverage for equitable technological self-determination.',
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
    teaserImage: '/images/papers/cloves/africhi2025_codesign.png',
    teaserCaption: 'Human-centered AfriCHI co-design loop pairing segmentation-first single-clove vision (99.0% accuracy) with Zanzibar ZSTC expert ethnography.',
    posterUrl: '/images/papers/posters/africhi-2025-poster.webp',
    tldr: 'Partners with Zanzibar clove grading inspectors via participatory HCI co-design alongside a 99.0% segmentation-first deep learning mobile grading workflow.',
    abstract: 'The Zanzibar clove industry is constrained by a manual grading system that lacks consistency. This paper argues for a socio-technical approach to modernize this process, positioning a deep learning pipeline as a foundational technology to empower all stakeholders. We posit that a segmentation-first architecture is a prerequisite for the accurate grading of cloves in bulk. As a crucial first step, this study validated this architecture on a single-clove dataset, achieving a classification accuracy of 99.0 %. However, we argue that achieving technical accuracy alone is inadequate. The primary contribution of this study is the framing of this validated baseline as the starting point for a human-centered design process. We propose a socio-technical framework in which indigenous knowledge from farmers and graders informs AI development through a detailed co-design process. The goal is to develop a low-cost mobile tool that fosters transparency, builds trust, and creates a symbiotic relationship between AI and local expertise.',
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
    teaserImage: '/images/papers/cassava/cassava_leaf_classes.jpg',
    teaserCaption: 'Five-class field cassava disease spectrum evaluated under salient feature establishment to isolate fine symptomatic regions from soil/foliage clutter.',
    tldr: 'Develops a salient feature establishment tactic isolating fine foliar cassava pathology from noisy field backgrounds in Artificial Intelligence in Agriculture (IF 12.4).',
    abstract: 'Accurate classification of cassava disease, particularly in field scenarios, relies on object semantic localization to identify and precisely locate specific objects within an image based on their semantic meaning, thereby enabling targeted classification while suppressing irrelevant noise and focusing on key semantic features. The advancement of deep convolutional neural networks (CNNs) paved the way for identifying cassava diseases by leveraging salient semantic features and promising high returns. This study proposes an approach that incorporates three innovative elements to refine feature representation for cassava disease classification. First, a mutualattention method is introduced to highlight semantic features and suppress irrelevant background features in the feature maps. Second, instance batch normalization (IBN) was employed after the residual unit to construct salient semantic features using the mutualattention method, representing high-quality semantic features in the foreground. Finally, the RSigELUD activation method replaced the conventional ReLU activation, enhancing the nonlinear mapping capacity of the proposed neural network and further improving fine-grained leaf disease classification performance. This approach significantly aided in distinguishing subtle disease manifestations in cassava leaves. The proposed neural network, MAIRNet-101 (Mutualattention IBN RSigELUD Neural Network), achieved an accuracy of 95.30 % and an F1-score of 0.9531, outperforming EfficientNet-B5 and RepVGG-B3g4. To evaluate the generalization capability of MAIRNet, the FGVC-Aircraft dataset was used to train MAIRNet-50, which achieved an accuracy of 83.64 %. These results suggest that the proposed algorithm is well suited for cassava leaf disease classification applications and offers a robust solution for advancing agricultural technology. • Detection accuracy relies on feature quality in cassava disease. • Mutualattention method introduced for feature modulation. • Instance batch normalization enhances semantic features. • Streamlined model extracts high-quality cassava disease features.',
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
    abstract: 'Variability in the size of slaughtered chickens remains a longstanding challenge in the standardization of the poultry industry. To address this issue, we present a novel approach that uses volume as a grading metric for chicken carcasses. This innovative method, unexplored in existing studies, employs real-time data capture of moving chicken carcasses on a production line using Kinect v2 depth imaging and 3-D reconstruction technologies. The captured depth images are processed into point clouds followed by 3-D reconstruction. Volume is calculated from the reconstructed models using the surface integration method, and additional 2-D and 3-D features are extracted as input parameters for machine learning models. Multiple regression models were evaluated, with the bagged tree model demonstrating superior performance, achieving an R² value of 0.9988, RMSE of 5.335, and ARE of 2.125%. Furthermore, our method showed remarkable efficiency with an average processing time of less than 1.6 seconds per carcass. These results indicate that our novel approach fills a critical gap in existing automated grading methodologies by offering both accuracy and efficiency. This validates the applicability of depth imaging, 3-D reconstruction, and machine learning for estimating chicken carcass volume with high precision, thereby enabling a more comprehensive, efficient, and reliable chicken carcass grading system.',
    keywords: ['3D reconstruction', 'depth imaging', 'chicken carcass', 'volume estimation', 'computer vision', 'Poultry Science'],
    topics: ['Agriculture', 'Computer Vision', '3D Reconstruction'],
    figureHeading: '3D Reconstruction, Depth Point Clouds & Bagged Tree Regression',
    figures: [
      {
        src: '/images/papers/prior/carcass2024_3d_cloud.jpeg',
        caption: 'Segmented depth images and reconstructed 3D point clouds of moving poultry carcasses on the processing shackle line.',
        alt: 'Chicken carcass depth images and 3D point clouds'
      },
      {
        src: '/images/papers/prior/carcass2024_bagged_tree.jpeg',
        caption: 'Bagged tree volume prediction versus water-displacement reference achieving R^2 = 0.9988 and RMSE = 5.335 cm^3 (<1.6 s/carcass).',
        alt: 'Bagged tree volume regression validation plot'
      },
      {
        src: '/images/papers/prior/carcass2024.jpeg',
        caption: 'Overhead processing-line Kinect v2 depth sensor geometry and acquisition chamber.',
        alt: 'Kinect v2 camera acquisition setup'
      }
    ],
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
    teaserImage: '/images/papers/prior/carcass2024_workflow.jpeg',
    teaserCaption: 'Online Kinect v2 depth imaging, 3D surface reconstruction, morphological feature extraction, and regression framework for broiler carcass volume estimation.',
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
    teaserImage: '/images/papers/cassava/cassava_leaf_classes.jpg',
    teaserCaption: 'Field cassava foliar disease classification across five classes targeted by MAIANet multi-attention signal modulation and anti-aliasing downsampling.',
    tldr: 'Introduces MAIANet, a signal-modulation deep architecture enhancing discriminative foliar disease channels in cassava leaf diagnosis (20+ citations).',
    abstract: 'Accurate classification of cassava leaf diseases under natural field illumination remains hindered by signal attenuation and aliasing during spatial downsampling. Published in Computers and Electronics in Agriculture (Vol. 225, 109351, 2024), this work introduces MAIANet (Multi-Attention IBN Anti-Aliasing Neural Network), a communication-inspired deep architecture incorporating multi-attention signal modulation across residual branches alongside depthwise anti-aliasing downsampling. By preserving fine lesion frequency cues and suppressing spatial aliasing artifacts, MAIANet strengthens discriminative cassava pathology feature learning in field imagery.',
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
    abstract: 'The appearance, size, and weight of poultry meat and eggs are essential for production economics and vital in the poultry sector. These external characteristics influence their market price and consumers\' preference and choice. With technological developments, there is an increase in the application and importance of vision systems in the agricultural sector. Computer vision has become a promising tool in the real-time automation of poultry weighing and processing systems. Owing to its noninvasive and nonintrusive nature and its capacity to present a wide range of information, computer vision systems can be applied in the size, mass, volume determination, and sorting and grading of poultry products. This review article gives a detailed summary of the current advances in measuring poultry products\' external characteristics based on computer vision systems. An overview of computer vision systems is discussed and summarized. A comprehensive presentation of the application of computer vision-based systems for assessing poultry meat and eggs was provided, that is, weight and volume estimation, sorting, and classification. Finally, the challenges and potential future trends in size, weight, and volume estimation of poultry products are reported.',
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
    teaserImage: '/images/papers/prior/tomato2021_clusters.jpeg',
    teaserCaption: 'Depth and RGB segmentation of single, simply occluded, and heavily clustered touching tomatoes on sorting lines.',
    tldr: 'Extends non-contact machine vision mass and volume estimation from single cherry tomatoes to partially occluded fruit clusters (46+ citations).',
    abstract: 'The fundamental characteristics of agricultural products are appearance, size, and weight, which affect their market value, consumer preference, and choice. Thus, food and agricultural industries seek rapid, simple, and nondestructive approaches to assess real-time measurements at the post-harvest stage before packaging for the consumer market. While sorting and grading may be performed by humans, it is unreliable, time-consuming, complicated, subjective, onerous, expensive, and easily influenced by surroundings. Therefore, an astute sorting and grading method for tomato fruit is required. We evaluated two tomato configurations on a conveyor belt: single tomatoes (no occlusion) and multi-tomatoes (partially occluded). We used polygon approximation for concave and convex point extraction algorithms to segment the occluded tomatoes. We developed seven models for regression using single-tomato image features. The Bayesian regularization artificial neural network outranked all the trained models in weight estimation with a root-mean-square error (RMSE) of 1.468 g and R 2 of 0.971. For volume estimation, the RBF SVM had the best performance with R 2 of 0.982 and RMSE of 1.2683 cm3. It is feasible to implement a proposed system as a noninvasive in-line sorting technique for tomatoes.',
    keywords: ['tomato volume estimation', 'occlusion handling', 'machine vision', 'depth imaging', 'postharvest'],
    topics: ['Agriculture', 'Computer Vision'],
    figureHeading: 'Occlusion Splitting Geometry & Weight/Volume Validation',
    figures: [
      {
        src: '/images/papers/prior/tomato2021_geometry.png',
        caption: 'Extracted 2D and 3D morphological chord, radial distance, eccentricity, and major/minor axis descriptors.',
        alt: 'Geometric descriptors extracted for tomatoes'
      },
      {
        src: '/images/papers/prior/tomato2021_watershed.jpeg',
        caption: 'Watershed and curvature-based cluster separation isolating individual occluded tomatoes prior to feature regression.',
        alt: 'Watershed separation of touching tomatoes'
      },
      {
        src: '/images/papers/prior/tomato2021_regression.jpeg',
        caption: 'Estimated versus measured tomato weight (R^2 = 0.991) and displacement volume (R^2 = 0.984) validation plots.',
        alt: 'Tomato weight and volume regression plots'
      }
    ],
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
    teaserImage: '/images/papers/prior/subsoiling2021_dem.jpeg',
    teaserCaption: 'Discrete Element Method (DEM) tine-soil interaction model alongside instrumented subsoiler mechanics.',
    tldr: 'Validates analytical models and discrete element method (DEM) soil-tillage simulations against controlled soil-bin measurements (45+ citations).',
    abstract: 'Prediction of a precise subsoiling using an analytical model (AM) and Discrete Element Method (DEM) was conducted to explain cutting forces and the soil profile induced changes by a subsoiler. Although sensors, AMs and DEM exist, there are still cases of soil structure deformation during deep tillage. Therefore, this study aimed to provide a clear understanding of the deep tillage using prediction models. Experimental data obtained in the soil bin trolley with force sensors were used for verification of the models. Experiments were designed using Taguchi method. In the AM, the modified-McKyes and Willat and Willis equations were used to determine cutting forces and soil furrow profile respectively. Calculations were done using MATLAB software. The elastoplastic behavior of soil was incorporated into the DEM. The DEM predicted results with the best regression of 0.984 $$R^{2}$$ R 2 at a $$NRMSE$$ NRMSE of 1.936 while the AM had the lowest $$R^{2}$$ R 2 of 0.957, at a $$NRMSE$$ NRMSE of 6.008. All regression results were obtained at p &lt; 0.05. The ANOVA test showed that the p-values for the horizontal and vertical forces were 0.9396 and 0.9696, respectively. The DEM predicted better than the AM. DEM is easy to use and is effective in developing models for precision subsoiling.',
    keywords: ['precision subsoiling', 'DEM simulation', 'soil bin', 'Scientific Reports', 'agricultural engineering'],
    topics: ['Agriculture'],
    figureHeading: 'Soil-Bin Instrumentation & Analytical vs. DEM Force Validation',
    figures: [
      {
        src: '/images/papers/prior/subsoiling2021_rig.jpeg',
        caption: 'Experimental soil-bin carriage with three-point hitch dynamometer sensors capturing horizontal draught and vertical soil reaction forces.',
        alt: 'Instrumented subsoiling soil-bin rig'
      },
      {
        src: '/images/papers/prior/subsoiling2021_validation.png',
        caption: 'Analytical and DEM predicted horizontal and vertical draught forces against soil-bin measurements (R^2 up to 0.9998).',
        alt: 'Subsoiling draught force regression plots'
      },
      {
        src: '/images/papers/prior/subsoiling2021_furrow.jpeg',
        caption: 'Experimental furrow cross-section compared against DEM simulated disturbance profile and quantitative width trace.',
        alt: 'Experimental vs DEM soil furrow disturbance profile'
      }
    ],
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
    abstract: 'In a broiler carcass production conveyor system, inspection, monitoring, and grading carcass and cuts based on computer vision techniques are challenging due to cuts segmentation and ambient light conditions issues. This study presents a depth image-based broiler carcass weight prediction system. An Active Shape Model was developed to segment the carcass into 4 cuts (drumsticks, breasts, wings, and head and neck). Five regression models were developed based on the image features for each weight estimation (carcass and its cuts). The Bayesian-ANN model outperformed all other regression models at 0.9981 R2 and 0.9847 R2 in the whole carcass and head and neck weight estimation. The RBF-SVR model surpassed all the other drumstick, breast, and wings weight prediction models at 0.9129 R2, 0.9352 R2, and 0.9896 R2, respectively. This proposed technique can be applied as a nondestructive, nonintrusive, and accurate on-line broiler carcass production system in the automation of chicken carcass and cuts weight estimation.',
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
    abstract: 'Detecting the flowering stage of tea chrysanthemum is a key mechanism of the selective chrysanthemum harvesting robot. However, under complex, unstructured scenarios, such as illumination variation, occlusion, and overlapping, detecting tea chrysanthemum at a specific flowering stage is a real challenge. This paper proposes a highly fused, lightweight detection model named the Fusion-YOLO (F-YOLO) model. First, cutout and mosaic input components are equipped, with which the fusion module can better understand the features of the chrysanthemum through slicing. In the backbone component, the Cross-Stage Partial DenseNet (CSPDenseNet) network is used as the main network, and feature fusion modules are added to maximize the gradient flow difference. Next, in the neck component, the Cross-Stage Partial ResNeXt (CSPResNeXt) network is taken as the main network to truncate the redundant gradient flow. Finally, in the head component, the multi-scale fusion network is adopted to aggregate the parameters of two different detection layers from different backbone layers. The results show that the F-YOLO model is superior to state-of-the-art technologies in terms of object detection, that this method can be deployed on a single mobile GPU, and that it will be one of key technologies to build a selective chrysanthemum harvesting robot system in the future.',
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
    abstract: 'The current research focused on the study of the completely enclosed circulation cycle drying of garlic slices of 3 mm thickness. The relationship between temperature and air circulation cycle through heat pump (HP) drying was studied to maintain the food product quality and to optimize its processing cost. The Box-Behnken design was used to investigate the effect of first- and second-stage bypass air ratio (BAR) and temperature on HP-specific moisture extraction rate (SMER), moisture evaporation rate (MER), and garlic slice quality. Maximum SMER (1.530 kg kW^-1 h^-1) was observed when the temperature was 45 C and first- and second-stage BARs were 0.40 and 0.60, respectively. The highest MER was observed when both BARs were set at 0.20. Ambient temperature and humidity conditions have a lesser effect on the closed HP drying system; however, it is mainly affected by BAR. The best performance of the system can be attained when BAR is between 0.2 and 0.6. Our results show that quality score, MER, SMER, and comprehensive evaluation are the most suitable parameters for a closed HP drying system to dry garlic slices. For single-objective optimization, under the constraints of 0.2 <= X1 <= 0.6, 0.2 <= X2 <= 0.6, and 45 C <= X3 <= 55 C, the objective functions took the maximum value.',
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
    abstract: 'Monitoring of poultry welfare-related bio-processes and bio-responses is vital in welfare assessment and management of welfare-related factors. With the current development in information technologies, computer vision has become a promising tool in the real-time automation of poultry monitoring systems due to its non-intrusive and non-invasive properties, and its ability to present a wide range of information. Hence, it can be applied to monitor several bio-processes and bio-responses. This review summarizes the current advances in poultry monitoring techniques based on computer vision systems, i.e., conventional machine learning-based and deep learning-based systems. A detailed presentation on the machine learning-based system was presented, i.e., pre-processing, segmentation, feature extraction, feature selection, and dimension reduction, and modeling. Similarly, deep learning approaches in poultry monitoring were also presented. Lastly, the challenges and possible solutions presented by researches in poultry monitoring, such as variable illumination conditions, occlusion problems, and lack of augmented and labeled poultry datasets, were discussed.',
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
    abstract: 'In chicken egg production line systems, grading based on vision systems is challenging due to ambient light conditions and egg occlusion problems. This study introduces a depth image-based chicken-egg volume estimation system. Two modes of egg configurations on a sorting line were evaluated; single-egg (no occlusion) and multi-eggs (partially occluded, i.e., simple and complex). Contour curvature analysis and k-closest M-circle-center algorithms were used to segment the occluded eggs. Thirteen regression models based on the egg image (single egg) features were trained. The Exponential Gaussian Process Regression outperformed all the explored models with RMSE of 1.175 cm3 and R2 of 0.984. The same model estimated the volume of the eggs under partial occlusion at RMSE of 1.080 and 1.294 cm3 for simple and complex, respectively. This introduced system can be applied as an accurate, consistent, fast, and non-destructive in-line sorting technique of chicken eggs in a production line system.',
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
    abstract: 'The estimation of wheat grain yield based on a composite of morphological features and mass of wheat organs was introduced in this study. The morphological features (length, width, and perimeter for the wheat stem and ear) were extracted by a computer vision system whose performance was evaluated by correlating the measured and estimated perimeter and length of the wheat stem at an R 2 of 0.9609 and 0.9779, respectively. Six regression models were developed based on the extracted features. The linear regression based on the wet weight of the stem, the ear, and the leaves outperformed all the other statistical models explored with an R 2 of 0.9893 and an RMSE of 0.0684 mm in estimating the dry grain yield with wet wheat organ mass as the predictors. This proposed system can be applied as nondestructive in a field technique for wheat phenotyping. Additionally, it can be applied to other similar crops.',
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
    abstract: 'The classification of rice kernels based on machine vision systems is often a challenging task in an online production system due to grain occlusion problems. This study proposed a machine vision-based rice kernel classifier in an in-line production setting under partial occlusion. Firstly, a classifier model was developed based on shape, texture, and color image feature categories using single rice kernels. Four sets of classifiers were developed based on each feature category and a combination of all feature variables. The Support Vector Machine (Cubic), based on shape features, outperformed all other classifiers at an accuracy of 0.980. Secondly, a grain-splitting technique based on contour curvature analysis was introduced to separate touching rice kernels under partial occlusion (both simple and complex touching cases), achieving 100% separation accuracy on occluded rice clusters. Thirdly, the trained classifier was applied to each individually segmented rice kernel to predict its variety across Zhong Guang Si Miao No. 5 (VAR1), Zao Xian 788 (VAR2), and Nanjing 9108 (VAR3).',
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
    abstract: 'The occurrence of poultry diseases not only affects farm production economics but also leads to poor poultry welfare, food safety concerns, and zoonotic infections. Therefore, timely detection of these diseases is of paramount importance in poultry production. This study proposes a machine vision-based monitoring system for broiler chicken as they walk through a test area. Data were collected from two groups of broilers; control group and treatment group (inoculated intramuscularly with virulent Newcastle disease virus) housed in fully isolated chambers for comparative monitoring. The broilers were monitored by video surveillance for data labelling and depth camera for the automated health status classifier development. Feature variables were extracted based on 2D posture shape descriptors (circle variance, elongation, convexity, complexity, and eccentricity) and mobility feature (walk speed). A statistical analysis of the feature variables established that all investigated features were statistically significant ( p 0.05 ) with time after challenge in the treatment group. The earliest possible infection detection time was on the 4th day based on circle variance and elongation, and the 6th day based on eccentricity and walk speed. However, convexity and complexity could not provide early detection. Two sets of classifiers were then developed based on only the posture shape descriptors, and on all the feature variables, The Support Vector Machine (RBF-SVM) outperformed all the other models with an accuracy of 0.975 and 0.978 respectively. The proposed system can serve as an automatic broiler monitoring system by providing an early warning and prediction of an occurrence of disease continuously and non-intrusively.',
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
    abstract: 'A prediction method of mass and volume of cherry tomato based on a computer vision system and machine learning algorithms were introduced in this study. The relation between tomato mass and volume was established as M = 1.312 V^0.9551, and was used to estimate mass on a test dataset at an R2 of 0.9824 and RMSE of 15.84g. Depth images of tomatoes at different orientations were acquired and features extracted by image processing techniques. Five regression prediction models based on 2D and 3D image features were developed. The RBF-SVM outperformed all explored models with an accuracy of 0.9706 (only 2D features) and 0.9694 (all features) in mass and volume estimation respectively. The model predicted mass or volume can then be applied to the established mass-volume power function. This introduced system can be applied as a non-destructive, accurate and consistent technique to in-line sorting and grading of cherry tomatoes based on mass, volume or density.',
    keywords: ['cherry tomato', 'volume estimation', 'mass estimation', 'depth imaging', 'SVR', 'Journal of Food Engineering'],
    topics: ['Agriculture', 'Computer Vision'],
    figureHeading: 'Feature Extraction Flowchart & RBF-SVM Mass-Volume Validation',
    figures: [
      {
        src: '/images/papers/prior/tomato2019_pipeline.jpeg',
        caption: 'Complete image preprocessing, background removal, 2D/3D feature extraction, and five-model ML regression workflow.',
        alt: 'Cherry tomato feature extraction pipeline'
      },
      {
        src: '/images/papers/prior/tomato2019_mass_volume.jpeg',
        caption: 'Power-law calibration M = 1.312 V^0.9551 and test-set prediction accuracy (R^2 = 0.9824, RMSE = 15.84 g).',
        alt: 'Mass vs volume regression and calibration plots'
      }
    ],
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
    teaserCaption: 'Overhead Kinect depth acquisition rig (0.7 m height) capturing cherry tomato views for 2D/3D feature regression.',
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
    teaserImage: '/images/papers/prior/carbon2019_sem.jpg',
    teaserCaption: 'Scanning electron micrographs (x1000 SEM) comparing unmodified sewage sludge char (a) and porous CMHR-sludge activated carbon prepared at 1:4 impregnation ratio and 700 C (b).',
    tldr: 'Valorizes pharmaceutical herb residues and sludge into high-surface-area activated carbon adsorbents for wastewater dye remediation (26+ citations).',
    abstract: 'Sludge-based activated carbon (SAC) was prepared with sewage sludge and Chinese medicine herbal residues (CMHR’s). An orthogonal experimental design method was used to determine the optimum preparation conditions. The effects of the impregnation ratio, activation temperature, activation time, and addition ratio of CMHR’s on the iodine value and Brunauer-Emmett-Teller surface area of activated carbon were studied. X-ray diffraction, Fourier-transform infrared spectrometer, and scanning electron microscopy were used to characterize the prepared SAC. The results showed that the optimal process conditions for preparing the SAC were as follows: an impregnation ratio of 1:4, an activation time of 30 min, an activation temperature of 700 °C, and an addition ratio of CMHR’s of 40%. The adsorption balance of the methylene blue dye was examined at room temperature. Adsorption isotherms were obtained by fitting the data using the Langmuir and Freundlich models, which showed that methylene blue adsorption was most suitable for the Langmuir equation. The results demonstrated that SAC prepared from SS and CMHR’s from a Chinese medicine factory could effectively expel dyes from wastewater.',
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
    abstract: 'The concern of cumulative demand of parboiled paddy dryings signposts the requirement of more optimized and mechanized processing. The study was conducted to fulfill the requirements of an efficient heat pump (HP) dryer unit for paddy drying in subtropical monsoon climate region of China, by utilizing the different hot air circulation methods and environmental conditions in the winter season. Therefore, a newly designed HP drying test bench enhanced with a series of heat pumps was employed for parboiled paddy drying of different varieties and sample loads. The drying efficiency and performance of HP was assessed in terms of specific moisture evaporation rate (SMER), moisture evaporation rate (MER), and coefficient of performance (COP) in closed and open-loop cycles. The closed and open-loop cycles hot air dryings were employed with the temperature and velocity ranges of 50-60˚C and 2-3 m/s, respectively. Furthermore, SMER and MER for both varieties and COP in closed and open loops were optimized using response surface methodology (RSM). The findings of the study revealed the dependency of SMER and MER on the temperature and velocity, as minimum SMER and MER were witnessed at 47.93˚C and 2.5 m/s, while COP in closed loop (2.211) was higher than that of the open cycle (1.409) due to the entrance of a significant amount of ambient air into the designed system during each cycle. Moreover, the intended parameters were optimized by exploiting RSM and were as follows: 60˚C (drying temperature), 2.76 m/s (air velocity), 0.321 (SMER1), 1.318 (SMER2), 0.208 (OSMER1), 0.865 kg/kWh (OSMER2), 0.202 (MER1), 0.796 (MER2), 0.180 (OMER1), 0.689 kg/h (OMER2), 2.211 (COP-closed), and 1.409 (COP-open). We further perceived that the temperature has more effect on the drying efficiency compared to air velocity as performance indicators were found to be increased by lofting the temperature profiles. The confidence of interval was observed significant (5%) as we equated the optimized values with experimental values, that particularly offerings our study a valuable to achieve a high quality of parboiled paddy.',
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
    abstract: 'The occurrence of asphyxia in sows during parturition often results in stillbirths and low vitality piglets, thus significantly affecting pig production and animal welfare in terms of piglet mortality. The losses during farrowing can account to a significant loss in a litter, a whole litter or in extreme cases, the loss of the sow. The objective of this study was to develop an infrared depth image sensor-based monitoring system as a surveillance support system for stockmen during the farrowing phase of sows, in an effort to reduce piglet mortality associated with asphyxiation of piglets. Experiments were performed at Jurong Research farm of Nanjing Agricultural University, using a herd of 105 Meishan sows. Data was collected by monitoring the farrowing process of 15 sows housed in farrowing pens. The sows were monitored by video recording for labeling and depth images taken at 10 fpm for automatic system development. Data labeling was based on the timestamps of births of all the piglets in a litter and each piglet vitality score based on the number of times a piglet attempts to stand within the 1st minute after birth. Data labeling was performed 1 h before the start of parturition until 0.5 h after the end of parturition. The depth images were processed to segment the piglets, and a developed parametrized ellipse-fitting algorithm performed piglet detection by multi-ellipse fitting. Piglet count and count tracking were established by the number of fitted ellipses on the image-object shape. Each sequential increment in the piglet count was used to compute the inter-birth interval. The developed model attained a detection accuracy of 0.832 for no piglets and 0.801 for 14 piglets in a range of 0 to 14 piglets in a litter. In piglet counting and count tracking, the model achieved an average accuracy of 0.918 (R2) at an RMSE of 1.225 piglets. For the classification of an asphyxia event, the model indicated an accuracy of 0.863, specificity of 0.921, precision of 0.791, and a sensitivity of 0.723. The developed system can serve as part of Precision Livestock Farming automatic farrowing monitoring system with the aim of detecting the start of parturition, piglet count tracking, and asphyxia occurrence.',
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
    abstract: 'Losses during the farrowing phase significantly affect both farm economics and animal welfare regarding piglet mortality. Thus, warranting the need for animal supervision. The automation of monitoring of animals during this period is crucial to Precision Livestock Farming and general animal welfare. The objective of this study was to develop an automated farrowing predictor by classification of sow nest-building behaviors based on non-intrusive, stress-free, contactless infrared distance sensors. Experiments were performed at Jurong Research farm of Nanjing Agricultural University, using a herd of 125 large white Landrace sows. Time-series data were collected from 14 crated sows, 10 were assigned to the training dataset and four as a testing dataset for final model validation. Cluster evaluation was performed by distance-based and density-based methods to determine the optimum groupings within the dataset. Subtractive clustering was then used to develop an optimized Adaptive Neuro-Fuzzy Inference System model to correlate the infrared distance sensor data to the sow nest-building behavior. The cluster analysis gave a result of nesting and non-nesting behaviors as the optimum grouping within the dataset. The developed optimized model had an RMSE of 0.1516 for training dataset and 0.1173 for checking dataset. The classification of nest-building behavior by the model achieved an average accuracy of 89.00%, a specificity of 90.59%, a precision of 83.82%, and a sensitivity of 89.25%. The developed system can thus be used as an automatic monitoring system in Precision Livestock Farming for both animal and stockman welfare.',
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
    abstract: 'In order to solve the problem of sensor node localisation of wireless sensor and actor networks, a range-based time of arrival (TOA) localisation algorithm with virtual force and time synchronisation (TLAVFTS) in WSAN is proposed in this paper, which uses mobile actors instead of WSNs anchors, and combines TOA with virtual force on the premise of time synchronisation. When a sensor node requests for localisation, the algorithm first calculates the virtual force of actor nodes, and makes it move close to the requested sensor node, then synchronise time of entire network. Finally, three-bonier measurement method will be adopted to complete node localisation. The simulation results show that the proposed algorithm can improve the success localisation rate by up to 40% and also is superior to traditional TOA on the average localisation time, error and overhead; it can apply to real-time filed with small number of actor nodes.',
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
    abstract: 'Controlled-environment greenhouse horticulture demands responsive telemetry and actuation without prohibitive industrial controller costs. Developed as an M.Sc. thesis at Nanjing Agricultural University (2016), this work designs and validates a low-cost Arduino-based intelligent greenhouse monitoring and closed-loop control platform integrating temperature, relative humidity, soil moisture, and ambient illumination sensors with relay-driven ventilation, irrigation, shading, and supplemental lighting actuators for automated protected crop management.',
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
    abstract: 'Published in the International Journal of Emerging Technology and Advanced Engineering (Vol. 5, Issue 12, Dec. 2015), this study presents a microcontroller-driven intelligent energy saving system evaluated in a modern university library environment. Combining passive infrared human presence sensors, light-dependent resistors (LDR), and temperature sensing with relay-optocoupler drivers and a Zero Crossing Detector (ZCD) for auto-phase-angle illumination voltage optimization, the system synchronizes fan and air-conditioning loads to eliminate idle wastage and achieves an average electrical power reduction of 30.06%.',
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
