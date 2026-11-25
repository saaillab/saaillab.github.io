export interface Author {
  name: string;
  url?: string;
  affiliations?: number[];
  equal?: boolean;
}

export interface FigureItem {
  title?: string;
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

export interface ProtocolBox {
  title: string;
  subtitle?: string;
  formula?: string;
  steps: string[];
}

export interface DetailCardItem {
  heading: string;
  text: string;
}

export interface DetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: DetailCardItem[];
  table?: TableBlock;
  figure?: FigureItem;
  figures?: FigureItem[];
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
  pdfUrl?: string;
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
  teaserSummary?: string;
  resultsSummary?: string;
  figureHeading?: string;
  figures?: FigureItem[];
  highlights?: MetricHighlight[];
  contributions?: string[];
  tables?: TableBlock[];
  protocolBox?: ProtocolBox;
  detailSections?: DetailSection[];
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
    teaserCaption: 'CropGuardNet pairs dual-mode LAB-CLAHE and raw RGB preprocessing with a scaled MobileNetV3-Small backbone, a three-branch dilated multi-scale feature pyramid, depthwise separable refinement, squeeze-and-excitation attention, a two-head Transformer, and species conditioning. All components fit inside 481,574 parameters (1.84 MB FP32, 63.8M FLOPs) and run in 5.00 ms per leaf image on single-thread CPU ONNX Runtime for offline smartphone field scouting.',
    teaserSummary: 'Plant leaf disease detectors built for precision scouting are typically either restricted to single crops, inflated by near-duplicate augmented images, or too large to run offline on smallholder smartphones. CropGuardNet integrates a scaled MobileNetV3-Small backbone with a three-branch dilated multi-scale feature pyramid, depthwise separable refinement, squeeze-and-excitation attention, a two-head Transformer, and host-species conditioning within 481,574 parameters (1.84 MB FP32, 63.8M FLOPs). To eliminate data leakage before evaluation, we purge 80,238 offline-augmented copies from PlantVillage using specimen UUID grouping and 64-bit perceptual hash checks, leaving 35,420 unique images across eight crops and 38 classes. Under this deduplicated benchmark, CropGuardNet runs in 5.00 ms per leaf image on single-thread CPU ONNX Runtime, sustains 99.17% test accuracy (0.9874 F1-macro), eliminates cross-crop false positives, and explains decisions across four attribution methods.',
    resultsSummary: 'Across seven benchmarked architectures on the 5,314-image deduplicated test split, CropGuardNet ranks first in 38-class F1-macro (0.9874), using 3.2x to 279.1x fewer parameters than five heavier baselines and 18.1x fewer FLOPs than LeafXNet. Host-species conditioning eliminates cross-crop errors completely (Mc = 0), supports two-stage automatic crop routing at 99.79% species accuracy, and lifts minority Rice discrimination to 94.44%. On 20 held-out image corruptions, CropGuardNet retains the highest mean accuracy at 83.61% (Wilcoxon p = 0.0020 versus LeafXNet at severe noise and brightness shift), and on uncurated PlantDoc smartphone field images, guided Mode A1 lifts zero-shot accuracy from 17.58% to 40.63%-45.91% before raw RGB fine-tuning reaches 63.66%.',
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
        caption: 'CropGuardNet ranks first in 38-class F1-Macro and achieves the lowest FLOPs across all seven architectures. *11.49 ms PyTorch / 5.00 ms ONNX Runtime CPU latency.',
        headers: ['Model', 'Params', 'Size (MB)', 'FLOPs (M)', 'Acc (%)', 'F1-Macro', 'MCC', 'Latency (ms)'],
        rows: [
          ['VGG-16', '134,416,230', '512.76', '30,932.6', '97.95', '0.9703', '0.9787', '414.72 ± 17.82'],
          ['ResNet-50', '23,585,894', '89.97', '8,174.4', '99.13', '0.9751', '0.9910', '78.03 ± 2.38'],
          ['MangoXNet', '4,426,374', '16.89', '273.8', '99.15', '0.9746', '0.9912', '16.36 ± 0.75'],
          ['EfficientNet-B0', '4,056,226', '15.47', '769.2', '99.21', '0.9834', '0.9918', '30.79 ± 1.78'],
          ['MobileNetV3-Small', '1,556,806', '5.94', '111.1', '99.23', '0.9740', '0.9920', '11.38 ± 0.53'],
          ['LeafXNet', '79,782', '0.30', '1,156.6', '97.27', '0.9558', '0.9717', '22.64 ± 0.55'],
          ['CropGuardNet (Ours)', '481,574', '1.84', '63.8', '99.17', '0.9874', '0.9914', '11.49 / 5.00*']
        ]
      }
    ],
    figureHeading: 'Cross-Crop Explainability & Field Generalization',
    figures: [
      {
        title: 'Cross-Crop Explainability & Attribution Faithfulness',
        src: '/images/papers/cropguardnet/fig_xai_master_8crops.png',
        caption: 'This side-by-side diagnostic matrix inspects visual explanations produced by four attribution methods (Grad-CAM++, LayerCAM, LIME, and GradientSHAP) across all eight host crops under guided Mode A1 inference. Gradient-based saliency focuses tightly on necrotic leaf spots and fungal halos instead of soil backgrounds, matching strong Deletion faithfulness (0.7262 LayerCAM AUC) and Insertion recovery (0.9259 GradientSHAP AUC).',
        alt: 'CropGuardNet XAI master comparison across 8 crops'
      },
      {
        title: 'Classification Accuracy Under 20 Image Corruptions',
        src: '/images/papers/cropguardnet/fig_robustness_curves.png',
        caption: 'Each panel traces classification accuracy across five progressive severity levels under Gaussian sensor noise, motion blur, extreme under/overexposure, central occlusion, and aggressive JPEG compression. Across 20 held-out corruption regimes, CropGuardNet retains the highest mean accuracy (83.61%) and avoids the steep brightness-drop and occlusion failures observed in smaller edge baselines (Wilcoxon p = 0.0020 versus LeafXNet at severe noise/brightness).',
        alt: 'CropGuardNet accuracy curves across 20 corruption regimes'
      },
      {
        title: 'In-Field Transfer on Uncurated PlantDoc Imagery',
        src: '/images/papers/cropguardnet/fig_plantdoc_field_transfer.png',
        caption: 'These three panels evaluate real-world generalization to uncurated PlantDoc smartphone field images across zero-shot transfer, frozen-backbone few-shot adaptation, and full fine-tuning. Supplying known host crop species (Mode A1) eliminates cross-crop confusion and lifts zero-shot accuracy from 17.58% to 40.63%-45.91%, and unenhanced raw RGB fine-tuning reaches 63.66% accuracy because clean-background CLAHE enhancements degrade cluttered field photographs.',
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
    openAccess: true,
    codeUrl: 'https://github.com/saaillab/CLOVES-4603/tree/main/session_confounding_probes',
    datasetUrl: 'https://github.com/saaillab/CLOVES-4603',
    teaserImage: '/images/papers/cloves/fig1_workflow.png',
    teaserCaption: 'This experimental protocol diagnoses hidden capture-session confounding across 4,603 single-clove images and 695 bulk batch captures graded at ZSTC warehouses in Zanzibar. After clustering near-duplicates via 64-bit difference hashing (3,455 groups), three causal tests (unseen capture-day splits, empty-background inpainting, and background-swap probes) separate genuine biological bud grading cues from sitting-specific studio artifacts.',
    teaserSummary: 'High benchmark accuracy on agricultural image datasets can come from sitting-specific studio illumination and tray paper textures rather than plant biology when commercial grades are photographed one class at a time. We test this confound across 4,603 single-clove and 695 batch images aligned to Zanzibar State Trading Corporation (ZSTC) commercial grades across six photography days. After removing near-duplicate leakage via 64-bit difference hashing (3,455 groups), unseen capture-day splits, empty-background inpainting, and foreground-background swap probes reveal what neural networks actually rely on.',
    resultsSummary: 'Across 17 pretrained architectures evaluated under duplicate-controlled standard splits, 16 models reach 98.1% to 99.3% macro-F1. Yet testing on unseen capture days drops mean macro-F1 from 99% down to 29%-47%, with per-grade recall spanning 1.5% to 95%. When clove buds are erased by inpainting, networks still grade empty tray backgrounds at 98.5% accuracy, and under conflict swaps they follow the swapped background in 53%-57% of images compared with 30%-33% following the clove bud. Isolating the foreground bud supports ~93% macro-F1, proving the biological signal exists once sitting confounds are excluded.',
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
      {
        title: 'Inpainting & Background-Swap Confound Probes',
        src: '/images/papers/cloves/fig6_confound.png',
        caption: 'When clove buds are erased via inpainting (middle row), trained networks still classify empty tray backgrounds at 98.5% accuracy by latching onto session-specific lighting and paper texture. Under foreground-background conflict swaps (bottom row), predictions follow the swapped background in 53% to 57% of images rather than the clove bud, showing why single-session class photography invalidates standard held-out test metrics.'
      }
    ],
    tables: [
      {
        title: 'Summary of Validity Probes on Duplicate-Controlled Clove Grading (17 Networks, n = 4,603)',
        headers: ['Evaluation Probe', 'Measured Score', 'Diagnostic Finding'],
        rows: [
          ['dHash-Grouped Split (16/17 Models)', '98.1% - 99.3% F1', 'DenseNet-121 / Xception / ViT reach 99.25%'],
          ['Unseen Capture-Day Split', '29% - 47% F1', 'Cross-session collapse despite zero duplicates'],
          ['Empty Background (Bud Inpainted)', '98.5% Acc', 'Tray lighting carries nearly full class signal'],
          ['Conflict Swap (A Bud / B BG)', '53-57% BG · 30-33% Bud', 'Background overrides bud under conflict'],
          ['Isolated Clove Foreground', '~93% F1', 'True bud signal emerges once BG removed']
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
    teaserCaption: 'Five empirically grounded resistant digital citizenship practices mapped across East African hybrid regimes (Tanzania and Kenya, 2015 to 2025): creative platform repurposing, communal rights-claiming, adaptive circumvention, justice-connected activism, and Pan-African solidarity networks. Rather than framing civic agency around isolated individual privacy, the taxonomy centers Ubuntu relational ethics and Afrofeminist collective data governance in response to over 1 billion USD in annual continental surveillance expenditure and 21 national internet shutdowns across 15 states in 2024.',
    resultsSummary: 'This comparative study traces how imported biometric systems, statutory content filtering, and election or protest internet blackouts reshaped civic mobilization across Tanzania and Kenya between 2015 and 2025. Whereas state enforcement relied on blocking over 80,000 websites in Tanzania and deploying urban camera networks in Kenya, citizen counterpublics organized collective mutual-aid circumvention, constitutional litigation against biometric ID mandates, and transnational documentation networks.',
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
        title: 'Comparative Digital Repression & Civic Resistance Vectors (2015-2025)',
        headers: ['Analytical Dimension', 'Tanzania Evidence', 'Kenya Evidence'],
        rows: [
          ['Surveillance & Shutdowns', 'Oct 2025 blackout; 80,000+ domains', 'Urban CCTV; 2024 protest disruptions'],
          ['Legal & Judicial Arena', 'Centralized statutory enforcement', 'High Court rulings on Huduma Namba'],
          ['Citizen Counter-Power', 'Encrypted messaging & VPN mutual aid', 'Digital solidarity & feminist publics']
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
    teaserCaption: 'This structural taxonomy classifies 22 verified East African digital agriculture platforms launched between 2009 and 2026 into standalone startups versus institutionally embedded services. Only 1 of 10 venture- or donor-funded standalone startups remains operational today, whereas all 12 platforms embedded inside telecom networks, government agencies, or cooperative consortia survived by lowering customer-acquisition costs and sustaining recurring trust.',
    resultsSummary: 'Auditing primary operational records across 22 named platforms in Kenya, Uganda, Rwanda, Tanzania, and Ethiopia exposes a decisive institutional divide in long-term continuity. Only 1 of 10 venture- or donor-funded standalone startups remains active at scale, whereas all 12 platforms embedded inside mobile network operators, public extension registries, asset-financing credit loops, or academic-nonprofit consortia remain operational.',
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
        title: 'Institutional Survival Breakdown Across 22 East African AgTech Platforms (2009-2026)',
        headers: ['Institutional Archetype', 'Survival Status', 'Primary Sustainability Driver'],
        rows: [
          ['Standalone Venture / Donor', '1 / 10 active', 'High SaaS customer acquisition cost'],
          ['Telecom-Embedded Service', 'Confirmed active', 'Carrier billing & zero-rated reach'],
          ['Government Registry', 'Confirmed active', 'Recurring public extension budget'],
          ['Asset-Financing Bundle', 'Confirmed active', 'Input credit margin covers software'],
          ['Consortium Transition', 'Confirmed active', 'Multi-cycle institutional ownership']
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
    resultsSummary: 'Integrating Technology-Organization-Environment adoption determinants with institutional voids theory across Kenya, Tanzania, and Ethiopia reconciles why isolated pilots show conditional yield gains up to 25% and income gains of $200-$600/ha yet stall at national scale when rural connectivity, credit, input markets, and cooperative trust remain missing.',
    tables: [
      {
        title: 'TOE & Institutional Voids Proposition Matrix for Sub-Saharan African Digital Agriculture',
        headers: ['TOE Dimension', 'Observed Structural Barrier', 'Co-Evolution Policy'],
        rows: [
          ['Technical Access', 'Feature-phone & English UI limits', 'Swahili voice UI & offline edge models'],
          ['Org Governance', 'Extractive platform revenue fees', 'Cooperative data trusts & profit share'],
          ['Market & Credit', 'Advice fails without input access', 'Bundle advisories with co-op credit']
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
    paperUrl: '/papers/dgs-bench/dgs_bench_dli2026.pdf',
    pdfUrl: '/papers/dgs-bench/dgs_bench_dli2026.pdf',
    posterUrl: '/images/papers/posters/dgs-bench-poster-dli2026.png',
    codeUrl: 'https://github.com/saaillab/dgs-bench',
    teaserImage: '/images/papers/dgs2026/fig_multiseed_dgs.png',
    teaserCaption: 'DGS-Bench exposes an Evaluation Mirage on African smallholder field data across 40 seed-architecture runs: raw aggregate accuracy makes every tested architecture appear to improve from balanced lab splits to natural Ugandan cassava fields (-6.00 pp negative DGS_Acc, t = -15.8, p < 1e-6), whereas balanced Macro-F1 reveals the opposite trend (+8.16 pp true deployment gap, t = 21.7, p < 1e-6).',
    teaserSummary: 'Agricultural vision models evaluated on balanced laboratory test sets often appear to improve when tested on naturally imbalanced African field data, misleading practitioners about deployment readiness. Across 40 controlled experiments spanning four architectures (ResNet-50, EfficientNet-B3, MobileNetV3-S, ViT-Small/16) and 10 random seeds on Ugandan field cassava imagery (65.8% CMD prevalence), DGS-Bench exposes this artifact as an Evaluation Mirage: raw-accuracy Deployment Gap Score turns negative (-6.00 +/- 2.38 pp) whereas Macro-F1 exposes a true +8.16 +/- 2.34 pp degradation. Pixel-space GrabCut background removal, Grad-CAM attribution overlays, Temperature Scaling with Saerens EM prior-shift adaptation, and cross-crop validation on Tomato and Rice demonstrate how majority-class skew and background clutter conceal silent minority-class failures.',
    resultsSummary: 'Across all 40 seed-architecture runs on Ugandan field cassava data, raw accuracy appears higher in the field (-6.00 +/- 2.38 pp DGS_Acc, t = -15.8, p < 1e-6), whereas balanced Macro-F1 exposes consistent deployment loss across every model (+8.16 +/- 2.34 pp DGS_F1, t = 21.7, p < 1e-6), with Healthy leaf recall dropping from 52.5% to 47.7% and Cassava Bacterial Blight (5.1% field share) reaching only 28.4% AP against 93.8% AP on CMD. Background scrambling reduces accuracy by 13.6 to 21.3 percentage points across CNNs and Vision Transformers compared with less than 1.7 percentage points under brightness shifts, and v1.1 calibration plus multi-backbone fine-tuning extensions confirm 12/12 mirage persistence and up to -16.87 pp raw accuracy illusion under EM prior adaptation.',
    tldr: 'Demonstrates that aggregate accuracy hides catastrophic minority-disease failures under field shift in African cassava diagnostics, introducing balanced deployment-gap evaluation metrics, closed-form mirage onset analysis, and v1.1 calibration/Grad-CAM extensions (Best Poster Award, DLI 2026).',
    abstract: 'Agricultural AI models trained on balanced laboratory datasets routinely report moderate linear-probe accuracy (~55%), yet the same models appear to improve when evaluated on naturally imbalanced African field data. We show that this apparent improvement is an Evaluation Mirage: class imbalance inflates aggregate accuracy even as minority-class performance degrades. We introduce DGS-Bench, a reproducible evaluation framework using the public Kaggle cassava disease dataset, and demonstrate the mirage across 40 independent experiments (10 random seeds x 4 pretrained architectures): raw-accuracy DGS is negative in all 40 cases (mean -6.00 +/- 2.38 pp; t = -15.8, p < 1e-6), whereas macro-F1 DGS is positive in all 40 (mean +8.16 +/- 2.34 pp; t = 21.7, p < 1e-6). Three additional lines of evidence strengthen the finding: (1) image-space background removal via GrabCut segmentation collapses field accuracy by 20-35 pp, confirming feature-space perturbation results with direct pixel-level evidence; (2) fine-tuning ResNet-50 (full and last-block) amplifies the mirage rather than eliminating it; and (3) cross-architecture threshold analysis reveals that the mirage onset varies from 20% to 50% dominant-class prevalence depending on architecture. Macro-AUPRC DGS is positive for all architectures (mean +8.3 pp), confirming the F1 finding; macro-AUROC DGS reverses sign (negative), highlighting the sharp distinction between ranking and threshold-dependent metrics under imbalance. Cross-dataset validation on PlantVillage Tomato (10 classes) and Rice Leaf Disease (4 classes) confirms that the mirage requires both severe class imbalance and moderate model uncertainty; it does not appear when frozen features achieve >90% lab accuracy.',
    keywords: ['DGS-Bench', 'African agricultural AI', 'cassava disease', 'balanced metrics', 'deployment gap', 'Deep Learning Indaba'],
    topics: ['Agriculture', 'Benchmarking', 'Responsible AI', 'Cassava', 'East Africa'],
    highlights: [
      { value: '+8.16 pp', label: 'Mean Macro-F1 Gap', sublabel: 'Paired t = 21.7, p < 1e-6' },
      { value: '-6.00 pp', label: 'Raw Acc Mirage', sublabel: '40/40 runs negative DGS_Acc' },
      { value: '-17.0 pp', label: 'BG Perturbation Drop', sublabel: 'ViT-Small/16 loses 21.3 pp' },
      { value: 'Best Poster', label: 'DLI 2026 Winner', sublabel: '18 / 114 accepted (15.79%)' }
    ],
    protocolBox: {
      title: 'Theoretical Mirage Inequality & Mandatory Algorithm 1 Reporting Protocol',
      subtitle: 'Closed-form onset condition under prior shift paired with the five mandatory audit rules (p < 1e-6 empirical mirage threshold).',
      formula: 'p* = (Acc_L - r_bar_{-1}) / (r_1 - r_bar_{-1})',
      steps: [
        'Train candidate model f_theta strictly on balanced D_L^train without leaking natural D_F samples.',
        'Evaluate aggregate accuracy, Macro-F1, Balanced Accuracy, Macro-AUROC, and Macro-AUPRC on both balanced D_L^test and uncurated D_F.',
        'Compute balanced gaps DGS_F1 = F1_L - F1_F and DGS_AUPRC = AUPRC_L - AUPRC_F alongside raw DGS_Acc.',
        'Emit WARNING: report DGS_F1 as primary metric whenever majority-class prevalence exceeds 0.30 of |D_F|.',
        'Publish the complete per-class confusion matrix and empirical prevalence vector alongside aggregate headline numbers.'
      ]
    },
    figureHeading: 'Image-Space Intervention, Prevalence Thresholds & Cross-Crop Generalization',
    figures: [
      {
        title: 'Image-Space Masking & GrabCut Foreground Validation',
        src: '/images/papers/dgs2026/fig_imagespace_background.png',
        caption: 'Direct pixel-space masking (center-only vs. border-only) and GrabCut background removal (n = 1,000) confirm heavy shortcut dependence on field soil and surrounding foliage: GrabCut cuts field accuracy by 20.2 pp on ResNet-50 and 34.5 pp on ViT-Small/16, whereas EfficientNet-B3 retains 49.2% accuracy from border pixels alone.',
        alt: 'Image-space masking and GrabCut foreground validation chart'
      },
      {
        title: 'Closed-Form vs. Empirical Mirage Onset Across Four Architectures',
        src: '/images/papers/dgs2026/fig_threshold_all_arch.png',
        caption: 'Prevalence sweeps from 20% to 65.8% dominant CMD share match the closed-form threshold prediction p* for every backbone (100% match): MobileNetV3-S enters the mirage zone at 20% prevalence, EfficientNet-B3 at 30%, ResNet-50 at 45%, and ViT-Small/16 at 50%.',
        alt: 'Cross-architecture mirage threshold sensitivity chart'
      },
      {
        title: 'Cross-Dataset Replication Across Cassava, Tomato, and Rice',
        src: '/images/papers/dgs2026/fig_cross_dataset_all.png',
        caption: 'Replication across Cassava (5 classes), PlantVillage Tomato (10 classes), and Rice Leaf Disease (4 classes) isolates two joint prerequisites for raw-accuracy reversal: severe class imbalance paired with moderate baseline uncertainty (< 75% lab accuracy). Above 90% lab accuracy, sign reversal vanishes (0/20 on Tomato), although DGS_F1 (+8.9 to +19.7 pp) stays 2x to 3x larger than DGS_Acc.',
        alt: 'Cross-dataset validation on Cassava, Tomato, and Rice'
      }
    ],
    contributions: [
      'Defines the Deployment Gap Score (DGS) across raw accuracy, balanced accuracy, Macro-F1, MCC, and Macro-AUPRC to quantify lab-to-field shift without prior-skew distortion.',
      'Establishes across 40 multi-seed experiments that 65.8% CMD dominance reverses raw accuracy (-6.00 +/- 2.38 pp) whereas Macro-F1 exposes +8.16 +/- 2.34 pp degradation and minority CBB collapses to 28.4% AP.',
      'Proves direct pixel-level background shortcut reliance via center/border masking, GrabCut segmentation (n = 1,000), and Grad-CAM spatial overlays (n = 200), showing 56% to 66% attribution energy falls on outer border pixels.',
      'Extends the camera-ready protocol to post hoc Temperature Scaling, Saerens EM prior adjustment, and full fine-tuning across all four architectures, demonstrating 12/12 mirage persistence and closed-form p* predictability.'
    ],
    tables: [
      {
        title: 'Tables 2 & 3: Multi-Seed & Multi-Metric Contrast Across 40 Runs',
        caption: 'Mean +/- SD across 10 random seeds (42-51) for raw accuracy vs. Macro-F1, paired with canonical seed-42 Balanced Accuracy, MCC, and Macro-AUPRC gaps.',
        headers: ['Architecture', 'DGS Acc (pp)', 'DGS F1 (pp)', 'Field AUROC (%)', 'DGS BAcc (pp)', 'DGS MCC (pp)', 'DGS AUPRC (pp)', 'Mirage'],
        rows: [
          ['ResNet-50', '-6.0 +/- 2.2', '+8.2 +/- 2.0', '85.0', '-2.7', '+5.8', '+5.7', '10/10'],
          ['EfficientNet-B3', '-7.0 +/- 2.4', '+7.2 +/- 2.4', '83.8', '+1.0', '+9.5', '+10.5', '10/10'],
          ['MobileNetV3-S', '-5.5 +/- 2.1', '+8.1 +/- 2.1', '82.1', '-0.5', '+7.6', '+10.6', '10/10'],
          ['ViT-Small/16', '-5.5 +/- 3.0', '+9.1 +/- 2.9', '85.8', '-3.6', '+5.4', '+6.4', '10/10'],
          ['All (n = 40)', '-6.0 +/- 2.4', '+8.2 +/- 2.3', '--', '-1.4', '+7.1', '+8.3', '40/40']
        ]
      },
      {
        title: 'Table 4: Image-Space Background Masking & GrabCut Drop',
        caption: 'Field accuracy under center-only (leaf kept), border-only (leaf masked, 20% chance baseline), and GrabCut (n = 1,000) foreground extraction.',
        headers: ['Architecture', 'Original Acc (%)', 'Center-Only Acc (%)', 'Border-Only Acc (%)', 'BG Reliance (vs 20%)', 'GrabCut Drop (pp)'],
        rows: [
          ['ResNet-50', '62.8', '47.0', '11.2', '-8.8 pp', '62.0 -> 41.8 (-20.2)'],
          ['EfficientNet-B3', '62.2', '58.2', '49.2', '+29.2 pp', '--'],
          ['MobileNetV3-S', '56.6', '55.0', '24.5', '+4.5 pp', '--'],
          ['ViT-Small/16', '65.2', '44.8', '15.7', '-4.3 pp', '63.5 -> 29.0 (-34.5)']
        ]
      }
    ],
    detailSections: [
      {
        id: 'per-class-diagnostics',
        title: 'Dataset Partition, Class-Level Precision-Recall & Confusion Shifts (Table 1 & PR Audit)',
        paragraphs: [
          'Aggregate metrics conceal acute class-level disparity: on ResNet-50 (seed 42), dominant CMD reaches 93.8% Average Precision in natural fields whereas rare Cassava Bacterial Blight (CBB, 5.1% field share) attains only 28.4% AP, and Healthy leaf recall falls from 52.5% in balanced lab testing to 47.7% in field splits.',
          'Figure panels below compare per-class Precision-Recall curves against uniform random baselines and contrast balanced lab vs. imbalanced field confusion matrices across all five diagnostic categories.'
        ],
        table: {
          title: 'Table 1: Cassava Benchmark Partition & ResNet-50 Per-Class Field Performance',
          headers: ['Partition / Class', 'Images', 'Field Share (%)', 'Condition', 'ResNet-50 Field AP / Recall'],
          rows: [
            ['Lab train', '1,600', '20.0 per class', 'Balanced (320/class)', 'Frozen backbone source features'],
            ['Lab test', '400', '20.0 per class', 'Balanced (80/class)', 'Healthy recall 52.5% (Acc 54.75%)'],
            ['Field test (Total)', '19,397', 'Natural Uganda', '65.8% CMD dominance', 'CMD 93.8% AP vs. CBB 28.4% AP'],
            ['CMD (Majority)', '12,758', '65.8', 'Dominant class', '93.8% Average Precision (3.3x CBB)'],
            ['CBB (Minority)', '687', '5.1', 'Rare disease', '28.4% AP (masked in raw Acc)']
          ]
        },
        figure: {
          title: 'Per-Class Precision-Recall Curves & Lab-vs-Field Confusion Shift',
          src: '/images/papers/dgs2026/fig_pr_curves.png',
          caption: 'Per-class field Precision-Recall curves isolate the mechanism behind positive DGS_F1 and DGS_AUPRC: dominant CMD dominates operating precision (93.8% AP), whereas CBB (28.4% AP) and CBSD fail silently at thresholded deployment.',
          alt: 'Per-class precision-recall curves across cassava classes'
        }
      },
      {
        id: 'confusion-matrix-evidence',
        title: 'Lab vs. Natural Field Confusion Matrix Comparison',
        paragraphs: [
          'Under balanced lab evaluation, prediction errors distribute relatively evenly across classes; under natural 65.8% CMD prevalence, linear heads bias predictions toward CMD, artificially lifting overall field hit rates from 54.75% to 62.80% despite falling minority recall.'
        ],
        figure: {
          title: 'ResNet-50 Lab Test vs. Natural Field Confusion Matrices',
          src: '/images/papers/dgs2026/fig4_confusion_matrices.png',
          caption: 'Row-normalized confusion matrices for ResNet-50 across balanced laboratory splits (left) and natural field imagery (right), showing CMD over-prediction driving higher aggregate hit rate at the expense of Healthy and rare-disease recall.',
          alt: 'ResNet-50 confusion matrices comparing lab and field predictions'
        }
      },
      {
        id: 'v11-calibration-em',
        title: 'v1.1 Extension A: 10-Seed Temperature Scaling & Saerens EM Prior Adjustment',
        paragraphs: [
          'To test whether post hoc probability calibration or expectation-maximization prior shift correction resolves the evaluation mirage, we evaluated all four architectures across 10 seeds (40 runs) using out-of-fold Temperature Scaling fit strictly on balanced training logits and Saerens EM evaluated against the natural field split (true held-out CMD prior 65.77%).',
          'Temperature scaling lowers field ECE by 81.7% (0.2721 to 0.0497) with zero class-ranking change (DGS_Acc remains -5.86 pp). Pairing calibrated probabilities with Saerens EM recovers the true field prevalence (68.02% +/- 3.58% vs. 65.77%) and cuts ECE to 0.0371 (Brier 0.3853), yet worsens the raw accuracy mirage to -16.87 pp and expands Macro-F1 loss to +12.01 pp because EM concentrates probability mass on CMD.'
        ],
        table: {
          title: 'v1.1 Experiment A: Mean +/- SD Across 40 Seed-Architecture Runs (True Field CMD = 65.77%)',
          headers: ['Regime (n = 40)', 'Est. CMD (%)', 'Fld ECE', 'Fld Brier', 'Fld Acc (%)', 'Fld F1 (%)', 'DGS Acc (pp)', 'DGS F1 (pp)'],
          rows: [
            ['Uncalibrated', '20.00 +/- 0.00', '0.2721', '0.6429', '60.79', '46.55', '-5.86', '+8.36'],
            ['TempScaled', '20.00 +/- 0.00', '0.0497', '0.5322', '60.79', '46.55', '-5.86', '+8.36'],
            ['Saerens EM (uncal.)', '51.87 +/- 2.00', '0.2399', '0.5722', '65.13', '48.72', '-10.19', '+6.19'],
            ['TempScaled + Saerens EM', '68.02 +/- 3.58', '0.0371', '0.3853', '71.80', '42.91', '-16.87', '+12.01']
          ]
        },
        figure: {
          title: 'Field Calibration Error Reduction vs. Evaluation Mirage Persistence',
          src: '/images/papers/dgs2026/fig_v11_calibration_priorshift.png',
          caption: 'Post hoc Temperature Scaling plus Saerens EM cuts field ECE by 86.4% (0.2721 to 0.0371) and matches empirical CMD prevalence (68.0% vs. 65.8%), yet widens DGS_Acc from -5.9 to -16.9 pp as minority recall drops.',
          alt: 'Calibration and Saerens EM prior shift results across 40 runs'
        }
      },
      {
        id: 'v11-gradcam-attribution',
        title: 'v1.1 Extension B: Grad-CAM & ViT Spatial Attribution Before/After GrabCut',
        paragraphs: [
          'Across n = 200 stratified field images filtered for non-degenerate GrabCut foliage masks (40 per class; mean leaf mask area 30.59%, outer 40% border area 63.14%), only 30.39% to 36.84% of positive Grad-CAM and ViT gradient attribution falls inside the leaf mask on original images, whereas 56.29% to 63.78% sits on the outer image border.',
          'When central leaf pixels are replaced with neutral gray (Border-only), ResNet-50 drops to 24.0% accuracy (2.0% CMD prediction rate), whereas EfficientNet-B3 maintains 40.0% accuracy and its full 16.5% CMD prediction rate by placing 66.00% of attribution energy onto outer background soil and foliage clutter.'
        ],
        table: {
          title: 'v1.1 Experiment B: Spatial Attribution Energy (n = 200 Stratified Valid GrabCut Field Images)',
          headers: ['Architecture', 'Condition', 'Acc (%)', 'CMD Pred Rate (%)', 'Foreground Energy (%)', 'Border Energy (%)'],
          rows: [
            ['ResNet-50', 'Original / GrabCut / Border-only', '56.5 / 43.5 / 24.0', '17.5 / 14.0 / 2.0', '36.84 / 42.91 / 37.64', '56.29 / 49.96 / 53.11'],
            ['EfficientNet-B3', 'Original / GrabCut / Border-only', '53.5 / 37.0 / 40.0', '16.5 / 12.5 / 16.5', '36.40 / 37.15 / 29.61', '56.34 / 56.01 / 66.00'],
            ['ViT-S/16', 'Original / GrabCut / Border-only', '57.0 / 32.0 / 40.5', '17.0 / 1.0 / 5.5', '30.39 / 31.80 / 28.37', '63.78 / 63.42 / 65.80']
          ]
        },
        figure: {
          title: 'Grad-CAM & ViT Attribution Overlays Under GrabCut and Border-Only Masking',
          src: '/images/papers/dgs2026/fig_v11_gradcam_overlays.png',
          caption: 'Grad-CAM and ViT patch-gradient overlays (left) paired with mean foreground attribution energy against the 30.6% leaf-mask area baseline (right, n = 200). EfficientNet-B3 still predicts CMD at 99% confidence from outer corner soil alone after the leaf is removed.',
          alt: 'Grad-CAM and ViT attribution overlays and leaf-mask energy chart'
        }
      },
      {
        id: 'v11-multibackbone-ft',
        title: 'v1.1 Extension C: Multi-Backbone Fine-Tuning Adaptation (12 Runs)',
        paragraphs: [
          'Extending Table 5 across ResNet-50, EfficientNet-B3, MobileNetV3-S, and ViT-S/16 under linear probing, last-block fine-tuning, and full end-to-end fine-tuning (12 epochs) raises field hit rate up to 79.00% on ViT-S/16, yet fails to resolve the evaluation mirage in all 12/12 evaluations (DGS_Acc stays -3.10 to -11.59 pp whereas DGS_F1 remains +2.85 to +9.61 pp).'
        ],
        table: {
          title: 'v1.1 Experiment C: Linear Probe vs. Last-Block FT vs. Full FT Across All 4 Architectures',
          headers: ['Architecture', 'Linear DGS Acc / F1', 'Last-Block FT DGS Acc / F1', 'Full FT DGS Acc / F1', 'Full FT Lab / Field Acc', 'Mirage Rate'],
          rows: [
            ['ResNet-50', '-9.74 / +4.06 pp', '-7.95 / +5.49 pp', '-9.92 / +3.37 pp', '64.00% / 73.92%', '3 / 3'],
            ['EfficientNet-B3', '-5.71 / +9.03 pp', '-5.68 / +7.86 pp', '-5.66 / +7.52 pp', '51.75% / 57.41%', '3 / 3'],
            ['MobileNetV3-S', '-3.10 / +9.61 pp', '-5.61 / +7.82 pp', '-6.40 / +6.72 pp', '60.00% / 66.40%', '3 / 3'],
            ['ViT-S/16', '-11.59 / +2.85 pp', '-6.51 / +6.72 pp', '-9.00 / +4.33 pp', '70.00% / 79.00%', '3 / 3']
          ]
        },
        figure: {
          title: 'Multi-Backbone Fine-Tuning Mirage Persistence Across CNNs and ViTs',
          src: '/images/papers/dgs2026/fig_v11_multibackbone_finetune.png',
          caption: 'Comparison of raw DGS_Acc (magenta) and balanced DGS_F1 (green) across Linear Probe, Last-Block Fine-Tuning, and Full End-to-End Fine-Tuning for all four architectures, confirming mirage persistence (12/12 runs) despite backbone adaptation.',
          alt: 'Multi-backbone fine-tuning deployment gap comparison'
        }
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
    teaserCaption: 'Workflow of the CLOVES-4603 benchmark uniting lot-aware 70/10/20 data partitioning, handcrafted texture extraction, and deep fine-tuning across four Zanzibar clove grades. Classical GLCM+GLRLM+LBP fusion with RBF-SVM reaches 92.94% test accuracy without GPUs, whereas fine-tuned ResNet-50 reaches 99.67% on the 921-image test split. The diagram establishes an auditable five-family baseline for smallholder commodity grading.',
    teaserSummary: 'Zanzibar produces roughly 8,000 tons of dried cloves annually, yet post-harvest commercial grading at official auction depots still relies on subjective visual inspection. CLOVES-4603 introduces an open benchmark of 4,603 standardized 224x224 RGB single-clove images spanning four official Zanzibar State Trading Corporation (ZSTC) commercial grades. Using lot-aware stratified 70/10/20 partitions across five random seeds with bootstrap confidence intervals, we compare classical handcrafted texture pipelines (HOG+SVM and fused GLCM+GLRLM+LBP with RBF-SVM), a frozen self-supervised DINOv2 linear probe, and fine-tuned ImageNet backbones alongside latency and parameter measurements.',
    resultsSummary: 'On the 921-image held-out test set, fine-tuned ResNet-50 reaches 99.67% accuracy (99.66% macro-F1), whereas mobile-ready MobileNetV3-Large reaches 99.35% accuracy at sub-5 ms GPU inference latency. Without GPU fine-tuning, frozen DINOv2 ViT-B/14 features achieve 94.90% accuracy and CPU-only GLCM+GLRLM+LBP texture fusion with RBF-SVM achieves 92.94%, outperforming shape-gradient HOG+SVM (32.68%) by +60.26 percentage points.',
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
        title: 'Five-Family Clove Grading Benchmark',
        src: '/images/papers/cloves/cloves4603_benchmark.png',
        caption: 'Held-out test accuracy and macro-F1 across all five model families evaluated on the 921-image CLOVES-4603 test split (5 random seeds, lot-aware 70/10/20 partitions). Fine-tuned ResNet-50 reaches 99.67% accuracy (99.66% macro-F1) and MobileNetV3-Large reaches 99.35%, whereas classical GPU-free GLCM+GLRLM+LBP fusion with RBF-SVM attains 92.94% and outperforms shape-based HOG+SVM (32.68%) by 60.26 percentage points.',
        alt: 'CLOVES-4603 classifier accuracy and F1 comparison'
      },
      {
        title: 'Confusion Structure Across Four ZSTC Grades',
        src: '/images/papers/cloves/cloves4603_cm.png',
        caption: 'Normalized confusion matrix for fine-tuned ResNet-50 evaluated on 921 held-out Zanzibar clove images across commercial Grades 1 through 4. Nearly all samples lie along the main diagonal (99.67% overall accuracy, 99.66% macro-F1), showing clear boundary separation between golden Grade 1 buds and dark fermented Grade 4 (mpeta) cloves.',
        alt: 'ResNet-50 test confusion matrix across 4 clove grades'
      },
      {
        title: 'Accuracy vs. Inference Latency Pareto Trade-Off',
        src: '/images/papers/cloves/cloves4603_pareto.png',
        caption: 'Pareto accuracy versus single-image inference latency profile across GPU-free texture pipelines, frozen self-supervised probes, and fine-tuned neural backbones. Lightweight MobileNetV3-Large occupies the optimal deployment knee at 99.35% accuracy and sub-5 ms latency, suiting offline mobile inspection inside rural grading depots.',
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
    pdfUrl: '/papers/cara-fm/nyalala26a.pdf',
    codeUrl: 'https://github.com/saaillab/cara-fm',
    teaserImage: '/images/papers/carafm/cara_fm_framework.svg',
    teaserCaption: 'Four-pillar architecture of CARA-FM connecting Community-Driven Data, Indigenous Knowledge Systems, Edge-First Inference (1 to 4 GB RAM handsets), and Participatory Cooperative Governance, evaluated jointly across Technical (CEI, DFS, MPP), Agricultural (YIP, IOE, IAE), and Cultural (CAI, CAS, KPV) indices.',
    teaserSummary: 'Across Kenya, Tanzania, Uganda, Rwanda, and Ethiopia, smallholder agriculture supports roughly 175 million people yet achieves only 30% to 40% of yield potential partly because farmers lack offline advisory tools in local languages. Published in PMLR Vol. 302 (pp. 1-11, 2026) with the Deep Learning Indaba 2025 Best Poster Award, CARA-FM specifies four architectural pillars and nine formal evaluation indices tailored to 1-4 GB smartphones, 1.2 Mbps rural bandwidth, and intermittent electricity. Our companion operationalization suite evaluates five edge-to-cloud architectures across Zanzibar Cloves v1 (n = 5,258) and Ugandan Cassava field splits (n = 21,397), measuring balanced cross-crop retention, CPU latency, and offline Kiswahili/English advisory routing.',
    resultsSummary: 'Sections 1 to 7 of PMLR Vol. 302 synthesize seven infrastructure constraint categories separating standard 8-32 GB cloud foundation models from rural East African handsets and define nine normalized indices spanning technical efficiency, agronomic gain, and community acceptance. In companion empirical benchmarking, MobileNetV3-Small reaches the top CARA-FM composite readiness (0.9285; CEI = 0.8311, CAI = 0.8829) at 5.95 MB FP32 (2.91 MB FP16) and 20.69 ms CPU inference with 93.07% Cloves balanced accuracy and 63.24% Cassava field balanced accuracy, whereas ResNet-50 attains 83.27% mean balanced accuracy at 174.60 ms and 90.04 MB (composite 0.8721). Agronomic and community-trial indices (YIP, IOE, IAE, CAS, KPV) remain explicitly null (requires_field_trial) pending in-situ field pilots.',
    tldr: 'Defines the four-pillar CARA-FM architecture and nine evaluation indices for East African agricultural foundation models, paired with an operationalized edge-to-cloud benchmark on Zanzibar Cloves and Uganda Cassava.',
    abstract: 'East African agriculture supports more than 175 million people but faces mounting challenges from climate change, resource constraints, and information access barriers. Current foundation models fail to address the computational limitations (devices with 1-4 GB RAM), linguistic diversity (200+ languages), and knowledge system differences across the region. This paper presents CARA-FM (Culturally Attuned and Resource-Aware Foundation Models), a theoretical framework comprising four pillars: Community-Driven Data Architecture, Indigenous Knowledge Systems, Edge-First Model Design, and Participatory Governance. We propose evaluation metrics that span the technical (computational efficiency), agricultural (yield improvement), and cultural (community acceptance) dimensions. Although empirically unvalidated in the theoretical paper, this framework provides a research agenda for developing agricultural AI systems that operate within severe resource constraints and respect local contexts. Our contribution offers a blueprint for future empirical work alongside a companion reproducible evaluation package.',
    keywords: ['CARA-FM', 'foundation models', 'East African agriculture', 'responsible AI', 'indigenous knowledge', 'PMLR', 'Deep Learning Indaba'],
    topics: ['Foundation Models', 'Responsible AI', 'Agriculture', 'East Africa'],
    highlights: [
      { value: 'PMLR 302', label: 'Published Proceedings', sublabel: 'pp. 1-11 (DLI 2025 Best Poster)' },
      { value: '9 Indices', label: 'Evaluation Suite', sublabel: 'Tech, Agronomic & Cultural' },
      { value: '1-4 GB RAM', label: 'Edge Reality Gap', sublabel: 'Offline CPU & 200+ languages' },
      { value: '0.9285', label: 'Top Readiness Score', sublabel: 'MobileNetV3-S at 20.69 ms CPU' }
    ],
    figureHeading: 'Framework Poster & Empirical Benchmark',
    figures: [],
    posterUrl: '/images/papers/posters/cara-fm-poster-dli2025.png',
    contributions: [
      'Quantifies seven regional deployment barriers separating standard cloud foundation models (8-32 GB RAM, 50+ Mbps, continuous power) from East African smallholder realities (1-4 GB smartphones, 1.2 Mbps connectivity, 4-8 hours/day power).',
      'Formulates four architectural pillars (Community-Driven Data Architecture, Indigenous Knowledge Systems, Edge-First Model Design, Participatory Governance) grounded in Context-First Design, Community Ownership, Knowledge Pluralism, and Radical Efficiency.',
      'Defines nine formal evaluation indices (CEI, DFS, MPP, YIP, IOE, IAE, CAI, CAS, KPV) in a machine-validated JSON Schema and benchmarks five edge-to-cloud architectures across Zanzibar Cloves v1 and Ugandan Cassava field splits.'
    ],
    tables: [
      {
        title: 'Table 1: Seven East African Deployment Constraint Categories vs. Foundation Model Assumptions',
        caption: 'Synthesizes infrastructure, hardware, linguistic, agronomic, economic, epistemic, and cultural conditions summarized in PMLR Vol. 302 Section 2 and Table 1.',
        headers: ['Challenge Category', 'East African Field Reality', 'Design Consequence for CARA-FM'],
        rows: [
          ['Infrastructure', '27% internet penetration; 13% outside mobile coverage; 4-8 h/day power', 'Offline-first edge inference and store-and-forward sync'],
          ['Computational', '1-4 GB RAM smartphones (< $100); 1.2 Mbps rural links; CPU-only', 'Compact < 500 MB artifacts with deterministic CPU execution'],
          ['Linguistic', '200+ regional languages; sparse agricultural NLP corpora; code-mixing', 'Multilingual speech/text routing with crop glossaries'],
          ['Data Representation', '0.5-2 ha intercropped plots, indigenous cultivars, local pest variants', 'Participatory cooperative data collection and validation'],
          ['Economic Viability', 'Limited farmer cash liquidity; high sensitivity to recurring fees', 'Public-good access with sustainable institutional backing'],
          ['Knowledge Systems', 'Generational seasonal, soil, and pest indicators held by elders', 'Hybrid symbolic-neural graphs with attribution protections'],
          ['Cultural Practices', 'Cooperative decision-making and predominantly oral advisory exchange', 'Co-designed voice-first interfaces with community oversight']
        ]
      },
      {
        title: 'Table 2: Nine Formal Evaluation Indices Operationalized in the CARA-FM Python Package',
        caption: 'Pairs technical edge feasibility (CEI, DFS, MPP) with agronomic trial impact (YIP, IOE, IAE) and community cultural fidelity (CAI, CAS, KPV).',
        headers: ['Dimension', 'Index', 'Full Name', 'Operational Scope & Measurement Source'],
        rows: [
          ['Technical', 'CEI', 'Computational Efficiency Index', 'Balanced accuracy weighted against < 500 MB footprint and CPU latency'],
          ['Technical', 'DFS', 'Deployment Feasibility Score', 'Binary/weighted gate for offline CPU runtime within 1-4 GB RAM and < 250 ms'],
          ['Technical', 'MPP', 'Multilingual Performance Parity', 'Ratio of Kiswahili and code-mixed accuracy relative to English baseline'],
          ['Agricultural', 'YIP', 'Yield Improvement Potential', 'Harvest yield gain against regional control plot baseline (requires field trial)'],
          ['Agricultural', 'IOE', 'Input Optimization Efficiency', 'Proportional savings in water, fertilizer, and pesticide cost (requires field trial)'],
          ['Agricultural', 'IAE', 'Information Access Enhancement', 'Farmer reach, comprehension rate, and actionable advisory delivery (requires field trial)'],
          ['Cultural', 'CAI', 'Cultural Alignment Index', 'Crop taxonomy fit, Kiswahili glossary parity, offline UI readiness, and IKS fit'],
          ['Cultural', 'CAS', 'Community Acceptance Score', 'Farmer trust and sustained seasonal adoption rate (requires field trial)'],
          ['Cultural', 'KPV', 'Knowledge Preservation Value', 'Retention of elder-verified Indigenous Knowledge concepts under attribution rules']
        ]
      }
    ],
    detailSections: [
      {
        id: 'research-questions-principles',
        title: 'Four Research Questions & Design Principles (Sections 1 & 3)',
        paragraphs: [
          'CARA-FM organizes foundational agricultural AI research around four foundational questions pairing hardware limits with epistemological pluralism, multidimensional verification, and equitable community governance.'
        ],
        items: [
          { heading: 'RQ1: Resource-Constrained Execution', text: 'Run visual diagnostics and advisory routing reliably within 1-4 GB RAM handsets, < 500 MB storage, intermittent electricity, and 1.2 Mbps or offline rural links.' },
          { heading: 'RQ2 & Knowledge Pluralism', text: 'Encode Indigenous seasonal, soil, and pest cues in hybrid symbolic-neural graphs paired with formal attribution so local expertise informs inference without appropriation.' },
          { heading: 'RQ3 & Radical Efficiency', text: 'Judge models jointly on balanced accuracy, memory footprint, CPU latency, agronomic benefit, and Kiswahili parity rather than leaderboard accuracy alone.' },
          { heading: 'RQ4 & Community Ownership', text: 'Govern data trusts and benefit distribution through farmer-majority cooperative boards (Context-First Design and Participatory Community Ownership).' }
        ]
      },
      {
        id: 'four-pillars',
        title: 'Four Interlocking Architectural Pillars (Sections 3.2 to 3.5)',
        paragraphs: [
          'The theoretical blueprint links participatory data stewardship, symbolic Indigenous Knowledge representation, hierarchical edge compression, and enforceable institutional audits across every deployment stage.'
        ],
        items: [
          { heading: 'Pillar 1: Community-Driven Data Architecture', text: 'Extension officers and local cooperatives curate intercropped and indigenous cultivar samples with multi-tier validation, delta sync, and community data-trust licensing.' },
          { heading: 'Pillar 2: Indigenous Knowledge Systems (IKS)', text: 'Dynamic crop-weather-soil knowledge graphs convert qualitative soil color, foliage vigor, and phenological indicators via probabilistic layers and enforce elder attribution and consent.' },
          { heading: 'Pillar 3: Edge-First Hierarchical Design', text: 'Compresses diagnostics into compact 5M-50M parameter tiers via quantization, structured pruning, and distillation for offline smartphones, syncing optionally via federated updates to district nodes.' },
          { heading: 'Pillar 4: Participatory Governance', text: 'Mandates farmer-majority review boards, scheduled per-group bias audits, transparent revenue-sharing charters, and accessible community grievance procedures.' }
        ]
      },
      {
        id: 'african-precedents',
        title: 'African Agricultural AI Precedents & Regional Lessons (Section 5)',
        paragraphs: [
          'Empirical initiatives across Ghana, Kenya, and South Africa alongside community NLP coalitions such as Masakhane (52 African languages) and the African Union Continental AI Strategy (2025-2030) show that language-first delivery, institutional extension partnerships, and transparent data governance govern sustained farmer uptake.'
        ],
        table: {
          title: 'Table 3: Precedent African Agricultural AI Systems Synthesized in Section 5',
          headers: ['Initiative', 'Primary Country', 'Delivery Mechanism', 'Reported Field Impact'],
          rows: [
            ['Farmerline (Darli AI)', 'Ghana', '27-language voice and messaging agricultural chatbot', '2.5x yield increase; 1M+ farmers reached'],
            ['Apollo Agriculture', 'Kenya', 'ML credit scoring paired with satellite crop analytics', '2.6x production increase among smallholders'],
            ['Aerobotics', 'South Africa', 'Aerial and vision-based orchard/crop pest scouting', '20-40% crop loss reduction across 18 countries']
          ]
        }
      },
      {
        id: 'research-agenda-risks',
        title: 'Research Agenda, Risk Controls & Field-Trial Scope (Sections 6 & 7)',
        paragraphs: [
          'Section 6 defines immediate dataset and evaluation priorities, whereas Section 7 pairs each technical, social, and economic failure mode with concrete mitigation controls.'
        ],
        items: [
          { heading: 'Multilingual & Indigenous Corpora', text: 'Develop a 20+-language East African Agricultural Language Corpus, indigenous crop imagery collections, and speech-text-image benchmarks spanning open backbones (LLaMA-2, mT5, XLM-R, compact ViTs/CNNs).' },
          { heading: 'Multi-Zone Randomized Field Pilots', text: 'Conduct multi-season field validations across Kenya, Ethiopia, Uganda, Tanzania, and Rwanda with national agricultural research institutes and local farmer cooperatives.' },
          { heading: 'Technical Bias & Shift Controls', text: 'Counter majority-class prevalence illusions and minority-disease collapse using DGS-Bench balanced audits paired with continuous local probability calibration.' },
          { heading: 'Social & Economic Safeguards', text: 'Prevent knowledge appropriation and unaffordable subscription barriers through cooperative ownership charters, open public-good tiers, and gradual locally governed rollout.' }
        ]
      },
      {
        id: 'empirical-operationalization',
        title: 'Companion Empirical Operationalization Benchmark (Cloves + Cassava)',
        paragraphs: [
          'To test computational efficiency, cross-crop field generalization, CPU edge viability, and Kiswahili parity under controlled conditions, we operationalized all nine CARA-FM indices in a runnable Python package and benchmarked five architectures (MobileNetV3-Small, EfficientNet-B0, ResNet-18, ViT-Small/16, ResNet-50) across Zanzibar Cloves Grading v1 (train = 3,673, val = 792, test = 793, 8 classes) and natural Ugandan Cassava field splits (n = 19,397 test images, 5 classes).',
          'All five offline models satisfy DFS = 1.000 (< 500 MB disk, 0.189-0.312 GB RAM, < 250 ms CPU latency) and MPP = 1.000 using an offline English/Kiswahili/code-mixed agricultural symptom router (EN = 1.000, SW = 1.000, MIX = 1.000). Agronomic and community-trial indices (YIP, IOE, IAE, CAS, KPV) remain explicitly null (requires_field_trial) until in-situ cooperative pilots are executed.'
        ],
        table: {
          title: 'Measured CARA-FM Readiness Scorecard Across Zanzibar Cloves v1 and Uganda Cassava',
          headers: ['Model', 'Params', 'FP32 / FP16', 'CPU (ms)', 'Cloves BAcc', 'Cassava BAcc', 'CEI', 'CAI', 'Composite'],
          rows: [
            ['MobileNetV3-Small', '1.53M', '5.95 / 2.91 MB', '20.69', '93.07%', '63.24%', '0.8311', '0.8829', '0.9285'],
            ['EfficientNet-B0', '4.02M', '15.60 / 7.66 MB', '44.49', '95.42%', '55.83%', '0.7717', '0.8766', '0.9121'],
            ['ResNet-18', '11.18M', '42.72 / 21.33 MB', '69.73', '95.65%', '67.63%', '0.7493', '0.8916', '0.9102'],
            ['ViT-Small/16', '21.67M', '82.71 / 41.33 MB', '167.95', '93.85%', '70.35%', '0.6709', '0.8214', '0.8731'],
            ['ResNet-50', '23.52M', '90.04 / 44.87 MB', '174.60', '96.64%', '69.90%', '0.6707', '0.8175', '0.8721']
          ]
        },
        figure: {
          title: 'Cross-Crop Balanced Accuracy, Edge Latency & Composite CARA-FM Readiness',
          src: '/images/papers/carafm/fig_cara_empirical_eval.png',
          caption: 'Empirical CARA-FM evaluation across five edge-to-cloud architectures on Zanzibar Cloves Grading v1 and Ugandan Cassava field imagery. MobileNetV3-Small leads composite readiness (0.9285) by maintaining competitive balanced accuracy with 20.69 ms single-thread CPU latency and 5.95 MB FP32 storage.',
          alt: 'Empirical CARA-FM multi-crop readiness evaluation chart'
        }
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
    codeUrl: 'https://github.com/saaillab/zstc-clove-v1',
    datasetUrl: 'https://github.com/saaillab/CLOVES-4603',
    teaserImage: '/images/papers/etri2026/fig1_pipeline.png',
    teaserCaption: 'Comparison between standard black box classification audited with post hoc XAI heatmaps (top) and the proposed compositional segmentation-classification architecture (bottom) on 4,603 ZSTC clove images. By isolating the clove bud via U-Net segmentation (0.9505 Dice) before ResNet-18 grading and ZSTC rule aggregation, the compositional design attains 99.45% macro-F1 alongside a guaranteed 100% Explanation Evidence Ratio (EER).',
    teaserSummary: 'High classification accuracy in agricultural vision often hides shortcut reliance when deep models attend to warehouse tray backgrounds instead of commodity defects. Published in ETRI Journal (2026), this study benchmarks seven post hoc XAI methods across eight convolutional and Vision Transformer backbones using our Explanation Evidence Ratio (EER), which quantifies the share of saliency energy falling inside annotated clove bud masks. Comparing monolithic networks against an inherently interpretable compositional U-Net + ResNet-18 pipeline reveals sharp differences in foreground grounding, domain-shift stability, and regulatory audit readiness.',
    resultsSummary: 'All eight monolithic networks exceed 99.48% clean macro-F1, yet their post hoc EER scores span 33.4% (DeiT Grad-CAM) to 82.4%, and replacing backgrounds collapses F1 by 53.7 percentage points (EfficientNet-B2) to 86.5 percentage points (EfficientNet-B0), with SHAP requiring up to 26.1 s per image. By segmenting the clove bud first with U-Net (0.951 Dice) before rule-based ZSTC grading, the compositional pipeline achieves 99.45% F1 with a structural 100% EER by design and earns unanimous 3/3 regulatory audit preference from certified ZSTC graders across 90 batches.',
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
        title: 'Post Hoc Saliency vs. Compositional Masking Across Clove Grades',
        src: '/images/papers/etri2026/fig2_xai_comparison.png',
        caption: 'Side-by-side comparison on real Zanzibar clove photographs across Commercial Grades I to IV contrasting original ground-truth masks, Grad-CAM, LIME, GradientSHAP, and compositional masks. Even among models exceeding 99.4% clean F1, post hoc saliency frequently drifts onto empty tray background regions (33.4% EER for DeiT Grad-CAM up to 81.9% for Swin GradientSHAP), whereas compositional masking restricts model evidence strictly to botanical bud tissue.',
        alt: 'ETRI 2026 XAI attribution comparison across clove grades'
      },
      {
        title: 'Foreground EER vs. Domain-Shift Accuracy',
        src: '/images/papers/etri2026/fig3_eer_vs_robustness.png',
        caption: 'Relationship between in-domain Grad-CAM Explanation Evidence Ratio (EER) and accuracy when original warehouse backgrounds are synthetically replaced (r = 0.38, p < 0.001). Monolithic architectures with low foreground attribution suffer sharp domain-shift collapses, whereas the compositional pipeline maintains 100% EER and resists background replacement.',
        alt: 'EER vs Domain Shift accuracy scatter plot'
      },
      {
        title: 'Certified ZSTC Grader Regulatory Audit',
        src: '/images/papers/etri2026/fig4_expert_evaluation.png',
        caption: 'Human regulatory audit across three certified Zanzibar State Trading Corporation (ZSTC) inspectors evaluating 90 commercial clove batches. Inspectors achieved higher grade agreement (96.7%) and unanimously approved (3/3) the compositional pipeline for regulatory auditing because its segmented masks and defect percentages map directly to statutory ZSTC rules.',
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
    teaserCaption: 'Full experimental workflow on expert-annotated Zanzibar clove lots showing progression from ZSTC consensus labeling (kappa = 0.87 to 0.92 across four grades) through 137-feature classical models, 18 deep neural networks, and decomposed rule aggregation. Residual CNNs preserve fine surface-calyx cues (ResNet-18 reaches 94.46% single-clove accuracy), whereas decomposed lot aggregation attains 99.45% macro-F1 with traceable audit records.',
    resultsSummary: 'Across 5,298 single-clove images partitioned by stratified 70/15/15 splits, skip-connected ResNet-18 reaches 94.46% test accuracy (94.39% precision, 94.33% macro-F1), whereas sequential VGG-16 collapses to 31.32% accuracy and 14.94% F1. Extended 18-architecture experiments achieve up to 99.71% macro-F1 on top CNNs and 99.45% macro-F1 via decomposed segmentation and ZSTC rule aggregation, and Grad-CAM inspection exposes occasional background tray cues that directly motivate segmentation-first pipelines.',
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
        title: '18-Architecture Macro-F1 Clove Grading Comparison',
        src: '/images/papers/cloves/figure_benchmark_f1.png',
        caption: 'Held-out macro-F1 distribution across 18 evaluated convolutional, Vision Transformer, and classical SVM models on ZSTC clove partitions. Architectures with skip or dense residual pathways sustain high discrimination (94.33% ResNet-18 single-clove macro-F1 and up to 99.71% in extended tuning), whereas plain sequential VGG-16 collapses to 14.94% macro-F1 (31.32% accuracy).',
        alt: '18-model clove benchmark F1 comparison'
      },
      {
        title: 'Spatial Grad-CAM Attribution on ZSTC-Clove-V1',
        src: '/images/papers/cloves/figure_03_gradcam.png',
        caption: 'Spatial Grad-CAM class activation maps superimposed across commercial Grades I through IV on the ZSTC-Clove-V1 single-clove test set (n = 794). Although correctly predicted samples highlight bud heads and calyx discoloration (mpeta), peripheral tray activations visible in secondary regions directly motivated subsequent foreground-segmentation pipelines.',
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
    codeUrl: 'https://github.com/saaillab/dgs-bench',
    teaserImage: '/images/papers/dsa2026/fig1_f1_improvement.png',
    teaserCaption: 'Net change in macro-F1 (percentage points) when adding synthetic DCGAN imagery up to 500 samples per class versus geometric augmentation alone across 45 controlled Ugandan cassava runs. Instead of rescuing scarce-data regimes (n = 25, 50, and 100 real images per class), unregularized GAN samples lower mean macro-F1 by 23.2 pp at n = 25, with ImageNet-pretrained ResNet-50 (-35.9 pp) and EfficientNet-B3 (-32.7 pp) suffering severe pretrained representation corruption.',
    tldr: 'Demonstrates empirically that DCGAN augmentation under extreme data scarcity (25–100 images/class) poisons cassava disease classifiers, dropping macro-F1 by up to 23.2 pp.',
    abstract: 'We test whether DCGAN augmentation alleviates labeled-data scarcity for cassava disease classification in Uganda. Training a DCGAN on 25, 50, or 100 real images per class and augmenting four classifier architectures to 500 images per class, we find that GAN augmentation consistently degrades macro-F1: by 23.2 pp at n = 25, 21.2 pp at n = 50, and 10.3 pp at n = 100. Pretrained classifiers suffer far more (ResNet-50: -35.9 pp; EfficientNet-B3: -32.7 pp) than a from-scratch CNN (-1.9 pp). GAN diagnostics confirm discriminator dominance and mode collapse, producing semantically empty images that poison fine-tuning. We establish an empirical minimum GAN viability threshold of ~100-200 images per class and warn against DCGAN augmentation in the extreme few-shot regime common in Sub-Saharan African agricultural datasets.',
    keywords: ['DCGAN', 'synthetic data', 'data scarcity', 'cassava disease', 'East Africa', 'DSA 2026'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'East Africa'],
    figureHeading: 'Real vs. DCGAN-Augmented Few-Shot Accuracy',
    figures: [
      {
        title: 'Real-Only vs. DCGAN-Augmented Few-Shot Accuracy',
        src: '/images/papers/dsa2026/fig3_real_vs_aug.png', caption: 'Paired macro-F1 trajectory comparing real-only geometric augmentation against real + DCGAN synthetic mixtures across four classifier families at n = 25, 50, and 100 real samples per class. At n <= 50, discriminator dominance and mode collapse (lossD approaching 0.000 and lossG spiking to 44.5) inject incoherent leaf textures that consistently underperform simple real-data baselines until 100 to 200 real images per class are available.' }
    ],
    resultsSummary: 'Across 45 controlled runs evaluating four classifiers under 25, 50, and 100 real cassava images per class, unregularized DCGAN synthesis degrades macro-F1 by an average of 23.2 pp at n = 25, 21.2 pp at n = 50, and 10.3 pp at n = 100 relative to geometric augmentation alone. ImageNet-pretrained ResNet-50 (-35.9 pp) and EfficientNet-B3 (-32.7 pp) suffer steeper degradation than a scratch lightweight CNN (-1.9 pp) because mode-collapsed synthetic textures distort learned convolutional filters.',
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
    codeUrl: 'https://github.com/saaillab/dgs-bench',
    teaserImage: '/images/papers/dsa2026/fig1_audit_radar.png',
    teaserCaption: 'Radar profile of the five-dimension representativeness audit evaluating PlantVillage (54,306 lab images), iCassava 2019 (21,397 Ugandan smartphone field images), and iBean across geographic origin, capture environment, Gini class balance, image quality, and morphological variance. Although PlantVillage excels in sheer laboratory sample volume, East African field datasets match target lighting, canopy clutter, and symptom progression required for regional deployment.',
    tldr: 'Presents a five-dimension representativeness audit of PlantVillage, iCassava 2019, and iBean alongside the six-item AgriAI Bias Card checklist for Sub-Saharan African deployment.',
    abstract: 'Crop disease image datasets are increasingly used to build decision-support tools for smallholder farmers in Sub-Saharan Africa. Yet dataset representativeness ; in terms of geography, imaging environment, class balance, image quality, and morphological diversity ; is rarely documented in a systematic way, making it difficult for practitioners to assess fitness for deployment. We apply a five-dimension representativeness audit to three publicly available crop disease benchmark datasets (PlantVillage, iCassava 2019, and iBean), assign quantitative scores under a defined rubric, and discuss the implications for responsible deployment. We further propose the AgriAI Bias Card, a six-item documentation checklist adapted from existing fairness tools to the specific representational challenges of African agricultural AI.',
    keywords: ['dataset auditing', 'AgriAI Bias Card', 'Sub-Saharan Africa', 'representativeness', 'PlantVillage', 'iCassava'],
    topics: ['Responsible AI', 'Agriculture', 'Benchmarking', 'East Africa'],
    figureHeading: 'Five-Dimension Representativeness Audit Scores',
    figures: [
      {
        title: 'Composite Representativeness Audit Scores',
        src: '/images/papers/dsa2026/fig4_audit_bars.png', caption: 'Composite 0-to-10 representativeness rubric totals showing PlantVillage scoring 4/10 overall versus 9/10 for both iCassava 2019 and iBean under Ugandan smallholder criteria. Uniform studio backgrounds in PlantVillage obscure severe geographic and domain-shift blind spots that the six-item AgriAI Bias Card makes explicit prior to rural rollout.' }
    ],
    posterUrl: '/images/papers/posters/dsa-2026-poster-auditing-representation.webp',
    highlights: [
      { value: '5 Dims', label: 'Audit Rubric (0-10)', sublabel: 'Geo, Env, Balance, Quality, Morph' },
      { value: '4 / 10', label: 'PlantVillage Score', sublabel: 'Lab background limitations' },
      { value: '9 / 10', label: 'iCassava & iBean', sublabel: 'Field-collected in East Africa' },
      { value: '6-Item', label: 'AgriAI Bias Card', sublabel: 'Deployment readiness checklist' }
    ],
    contributions: [
      'Constructed a quantitative five-dimension representativeness rubric (0-10 points) evaluating geography, imaging environment, Gini class balance (threshold <= 0.10), image quality, and morphological coverage.',
      'Audited three widely deployed agricultural benchmarks, documenting PlantVillage at 4/10 versus Sub-Saharan field-collected iCassava 2019 (9/10) and iBean (9/10).',
      'Introduced the six-item AgriAI Bias Card giving researchers and agronomic practitioners a standardized pre-deployment documentation protocol.'
    ],
    resultsSummary: 'Evaluating three agricultural benchmarks on our five-dimension rubric (geography, imaging environment, Gini class balance <= 0.10, quality, and morphology) yields 4/10 for PlantVillage versus 9/10 for East African field datasets iCassava 2019 and iBean. Alongside quantitative scores, the six-item AgriAI Bias Card documents collection origin, class skew, and field suitability prior to deployment.',
    tables: [
      {
        title: 'Five-Dimension Representativeness Audit Across Benchmarks',
        headers: ['Dataset', 'Regime', 'Score', 'Key Audit Finding'],
        rows: [
          ['PlantVillage (~54,306)', 'Uniform studio lab', '4 / 10', 'High volume; weak field transfer'],
          ['iCassava 2019 (21,397)', 'Ugandan smartphones', '9 / 10', 'Field valid; strong CMD skew'],
          ['iBean (Makerere)', 'In-field bean plots', '9 / 10', 'Authentic light & field clutter']
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
    codeUrl: 'https://github.com/saaillab/dgs-bench',
    teaserImage: '/images/papers/dsa2026/p1_all_backbones.png',
    teaserCaption: 'Classification accuracy scaling curves across ViT-B/16, ResNet-50, EfficientNet-B3, and MobileNetV3 trained on k in {10, 25, 50, 100} labeled field images per class from the 21,397-image Ugandan cassava pool. Full fine-tuning of ViT-B/16 climbs from 50.6% (k = 10) to 63.6% (k = 50) and 68.8% (k = 100), gaining +28.5 percentage points over training from scratch and identifying k = 50 labels per class (250 total images) as the optimal field annotation budget.',
    tldr: 'Evaluates ResNet-50, EfficientNet-B3, MobileNetV3, and ViT-B/16 under linear probing vs. full fine-tuning on 21,397 Ugandan field cassava images at 10–100 shots/class (+28.5 pp gain).',
    abstract: 'Cassava feeds over 500 million people across Sub-Saharan Africa, yet annual crop losses of up to 40% from Cassava Brown Streak Disease and Cassava Mosaic Disease go undetected due to scarce diagnostic infrastructure in rural settings. Deep learning achieves high accuracy on curated benchmarks but requires thousands of labeled images per class, a resource rarely available in African field deployments. We present a systematic evaluation of few-shot transfer learning on 21,397 smartphone-captured Ugandan field images spanning five disease classes. Four pretrained backbones (ResNet-50, EfficientNet-B3, MobileNetV3, ViT-B/16) are evaluated under linear probing and full fine-tuning at k in {10, 25, 50, 100} labeled images per class, with a shared hyperparameter configuration across all models. Full fine-tuning of ViT-B/16 achieves 63.6% accuracy at k = 50, representing a +28.5 pp gain over training from scratch. Per-class analysis shows CMD is most detectable (F1: 0.77), whereas Healthy is hardest (F1: 0.49), with 25% of Healthy leaves misclassified as CBB; the primary deployment safety concern. Annotation efficiency analysis identifies k = 50 (250 total images across five classes) as the optimal budget threshold: marginal accuracy return drops 8x beyond this point, providing a concrete, cost-effective blueprint for cassava disease AI in data-scarce African agricultural settings.',
    keywords: ['few-shot learning', 'transfer learning', 'cassava disease', 'East Africa', 'ViT-B/16', 'DSA 2026'],
    topics: ['Agriculture', 'Cassava', 'Deep Learning', 'East Africa'],
    figureHeading: 'Linear Probe vs. Full Fine-Tuning Scaling',
    figures: [
      {
        title: 'Linear Probing vs. End-to-End Fine-Tuning Scaling',
        src: '/images/papers/dsa2026/p1_lp_ft_lines.png', caption: 'Direct comparison between frozen linear probing and end-to-end full fine-tuning across few-shot budgets (k = 10 to 100 images per class) on Ugandan field cassava imagery. Full fine-tuning consistently outperforms linear probing by +18 to +20.3 percentage points at k = 50 because frozen natural-object features fail to separate fine foliar necrosis from cluttered soil and healthy canopy backgrounds.' }
    ],
    resultsSummary: 'Across 21,397 smartphone field images spanning five cassava conditions, full fine-tuning outperforms frozen linear probing by +18 to +20.3 percentage points at k = 50 labels per class. Fine-tuned ViT-B/16 climbs from 50.6% (k = 10) to 63.6% (k = 50) and 68.8% (k = 100), gaining +28.5 percentage points over training from scratch and identifying k = 50 labels per class (250 total images) as the point before marginal accuracy returns flatten 8x.',
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
    posterUrl: '/images/papers/posters/tais2026-oxford-poster.png',
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
          ['Policy Focus', 'Education & Health', 'Infrastructure & Data', 'National Readiness'],
          ['Cultural Grounding', 'Low', 'Low', 'Moderate'],
          ['EAC Coordination', 'None specified', 'None specified', 'Partial'],
          ['Data Governance', 'Nascent', 'Explicit framework', 'Explicit framework']
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
        headers: ['Vector', 'Global South Bottleneck', 'Sovereignty Lever'],
        rows: [
          ['Compute', 'No domestic hyperscale clusters', 'Regional federated HPC pools'],
          ['Models & APIs', 'Closed-weight API lock-in', 'Open-weight local adaptation'],
          ['Data Flows', 'Uncompensated data extraction', 'Community data trusts'],
          ['Governance', 'Copied external AI statutes', 'AU/EAC-ASEAN harmonization']
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
        title: 'Endoscopic Polyp Contour Segmentation Results',
        src: '/images/papers/health/bafnet_results.png',
        caption: 'Side-by-side endoscopic segmentation overlays comparing raw colonoscopy frames, ground-truth clinical polyp masks, and BAFNet contour predictions across benchmark cohorts. Gated contour inhibition sharply separates mucosal background texture from flat and small colorectal polyps, sustaining 0.914 Dice (0.863 IoU) on EndoScene and 0.808 Dice on both CVC-ColonDB and ETIS.',
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
    teaserCaption: 'Overall encoder-decoder block topology of BAFNet uniting a four-block Conv-BN boundary-aware gating branch with the Multi-Scale Feature Aggregation Module (MFAM) and Dynamic Global Attention Module (DGAM). The lightweight 5.98M-parameter (3.59 GFLOPs) architecture suppresses noisy background mucosal responses and outperforms ASCNet, MSNet, TransFuse, C2F-Net, and PraNet across EndoScene, CVC-ColonDB, and ETIS.',
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
    teaserCaption: 'Visual field spectrum across all five diagnostic categories modeled in Computers and Electronics in Agriculture (Vol. 232, 2025): Cassava Bacterial Blight (CBB), Cassava Brown Streak Disease (CBSD), Cassava Green Mottle (CGM), Cassava Mosaic Disease (CMD), and Healthy foliage. Under uneven outdoor sunlight and dense background foliage, early pathogenic lesions produce heavily attenuated spatial responses that signal-rectification blocks amplify before final classification.',
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
          ['Architectural Target', 'Recovers attenuated lesion signals from canopy clutter'],
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
    abstract: 'This study examines whether nations across the Global South are charting autonomous trajectories toward digital sovereignty or drifting into structural dependency and digital serfdom shaped by dominant US and Chinese technology platforms. Applying a seven-dimensional governance evaluation framework covering compute infrastructure, data governance, human capital, regulation, capital investment, civic trust, and sanction resilience, we compare trajectories across Singapore, Vietnam, Kenya, and Syria. Regional bodies including the African Union (AU) and ASEAN, paired with South-South coordination, offer practical policy instruments for equitable technological self-determination.',
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
          ['Singapore', 'High-capacity AI hub', 'State R&D co-investment & sandboxes'],
          ['Vietnam', 'Scaling engineering base', 'Talent retention & local models'],
          ['Kenya', 'East African hub with gaps', 'Need local compute & data trusts'],
          ['Syria', 'Sanctioned constraints', 'Exclusion from global APIs & hardware']
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
    codeUrl: 'https://github.com/saaillab/zstc-clove-v1',
    datasetUrl: 'https://github.com/saaillab/CLOVES-4603',
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
      'Identified severe socio-technical asymmetries around manual assessment of Grade 4 (mpeta) fermented cloves that erode smallholder trust.',
      'Formulated an actionable co-design roadmap for low-cost mobile inspection tools amplifying rather than displacing indigenous grading expertise.'
    ],
    tables: [
      {
        title: 'Socio-Technical Validation & Co-Design Findings (ACM AfriCHI 2025)',
        headers: ['Dimension', 'Baseline Observation / Finding', 'System Design Requirement'],
        rows: [
          ['Technical Prototype', '99.0% single-clove accuracy', 'Segmentation isolation for bulk lots'],
          ['Quality Determiner', 'Grade 4 (mpeta) fermentation limit', 'Highlight stems & pale-brown mpeta'],
          ['Stakeholder Trust', 'Price ambiguity at warehouse gate', 'Bilingual visual audit trail on phone']
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
