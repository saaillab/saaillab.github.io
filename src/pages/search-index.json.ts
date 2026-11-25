import type { APIRoute } from 'astro';
import { PUBLICATIONS } from '../data/publications';
import { PROJECTS } from '../data/projects';

export interface SearchEntry {
	title: string;
	subtitle: string;
	category: string;
	url: string;
	keywords: string;
}

export const GET: APIRoute = () => {
	const searchEntries: SearchEntry[] = [
		...PUBLICATIONS.map((p) => ({
			title: p.shortTitle || p.title,
			subtitle: `${p.year} · ${p.venueShort}`,
			category: 'Paper',
			url: `/papers/${p.slug}/`,
			keywords: `${p.title} ${p.venue} ${p.authors.map((a) => a.name).join(' ')} ${p.keywords.join(' ')} ${p.topics.join(' ')} ${p.tldr}`
		})),
		...PROJECTS.map((pr) => ({
			title: pr.title,
			subtitle: `${pr.pillar} · ${pr.badge}`,
			category: 'Project',
			url: `/projects/${pr.slug}/`,
			keywords: `${pr.shortTitle} ${pr.pillar} ${pr.lead} ${pr.team.join(' ')} ${pr.summary}`
		})),
		{
			title: 'CLOVES-4603 Dataset',
			subtitle: '4,603 ZSTC clove images · CC BY-NC 4.0',
			category: 'Dataset',
			url: '/datasets/#agriculture',
			keywords: 'cloves 4603 dataset benchmark zstc grade'
		},
		{
			title: 'ZSTC-Clove-V1 Dataset',
			subtitle: '5,298 expert-annotated clove buds · CC BY-NC 4.0',
			category: 'Dataset',
			url: '/datasets/#agriculture',
			keywords: 'zstc clove v1 saateni dataset mpeta kappa'
		},
		{
			title: 'CropGuard Deduplicated Multi-Crop Benchmark',
			subtitle: '35,420 unique images · 8 crops · 38 classes',
			category: 'Dataset',
			url: '/datasets/#agriculture',
			keywords: 'cropguard cassava leaf disease deduplicated phash benchmark'
		},
		{
			title: 'DGS-Bench Field Deployment Protocol',
			subtitle: '19,397 field cassava images · Tomato & Rice',
			category: 'Dataset',
			url: '/datasets/#agriculture',
			keywords: 'dgs bench deployment gap score balanced macro f1 cassava'
		},
		{
			title: 'Interactive DGS-Bench & CARA-FM Calculators',
			subtitle: 'Compute closed-form p* mirage threshold & CARA-FM CEI/DFS',
			category: 'Tool',
			url: '/tools/#calculators',
			keywords: 'calculator interactive mirage threshold p* cara-fm cei dfs edge readiness'
		},
		{
			title: 'Dual ONNX Live Demo: Cloves & Cassava + CAM',
			subtitle: 'Client-side MobileNetV3-Small WebAssembly inference & visual saliency',
			category: 'Tool',
			url: '/tools/#live-demo',
			keywords: 'onnx wasm demo clove grading cassava disease cam saliency heatmap browser offline'
		},
		{
			title: 'Collaboration Network Map & Consortia',
			subtitle: 'IIT Madras, ZSTC, CPHK Pemba, Penn State, Columbia, Deakin, Oxford, NAU',
			category: 'Page',
			url: '/collaborations/#network-map',
			keywords: 'collaborations map network partners zstc deakin penn state pemba oxford cambridge'
		},
		{
			title: 'Speaking Calendar (5th ZSTC Conference)',
			subtitle: 'Dec 2-3, 2026 ZSTC Conference & SAAIL Lab talks schedule',
			category: 'Page',
			url: '/resources/#speaking',
			keywords: 'speaking calendar zstc 5th conference december 2026 talks presentations'
		},
		{
			title: 'Official Media & Press Kit',
			subtitle: 'Approved lab/PI bios and downloadable high-res SAAIL Lab logos',
			category: 'Page',
			url: '/resources/#media-kit',
			keywords: 'media kit press logos crest portrait approved bio download'
		},
		{
			title: 'News, Awards & Lab Milestones',
			subtitle: 'DLI Best Posters, DSA 2026, CVPR 2026, AI4EAC grant & alumni milestones',
			category: 'Page',
			url: '/news/',
			keywords: 'news awards grants talks milestones dli dsa cvpr iclr oxford graduation'
		},
		{
			title: 'Mobile Applications & Open-Source Toolkits',
			subtitle: 'Ubora-AI, Maize App, CropGuardNet, DGS-Bench, CARA-FM',
			category: 'Tool',
			url: '/tools/',
			keywords: 'mobile app flutter tflite onnx pytorch python pip install'
		},
		{
			title: 'Research Group, PhD/MTech/BS Team & Alumni',
			subtitle: 'Innocent Nyalala and 15+ SAAIL Lab researchers',
			category: 'Page',
			url: '/people/',
			keywords: 'people team faculty pi phd mtech bs alumni zanzibar'
		},
		{
			title: 'Join SAAIL Lab (MTech, BS & Visiting Researchers)',
			subtitle: 'Open positions & structured application checklist',
			category: 'Page',
			url: '/hiring/',
			keywords: 'hiring jobs thesis fellowship mtech bs phd visiting apply'
		},
		{
			title: 'Global Collaborations & Partners',
			subtitle: 'IIT Madras, Deakin, Penn State, ZSTC, CPHK Pemba',
			category: 'Page',
			url: '/collaborations/',
			keywords: 'collaborations partners zstc deakin penn state pemba'
		},
		{
			title: 'Conference Gallery & Posters',
			subtitle: 'DSA 2026, CVPR 2026, ICLR 2026, Oxford TAIS, AfriCHI 2025',
			category: 'Page',
			url: '/gallery/',
			keywords: 'gallery posters conferences photos awards'
		},
		{
			title: 'Contact SAAIL Lab (IIT Madras Zanzibar)',
			subtitle: 'saail_lab@iitmz.ac.in · Room 105, Bweleo',
			category: 'Page',
			url: '/contact/',
			keywords: 'contact email office address zanzibar'
		}
	];

	return new Response(JSON.stringify(searchEntries), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});
};
