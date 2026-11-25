import type { Publication } from '../data/publications';

function formatRisAuthor(fullName: string): string {
	const cleaned = fullName.trim().replace(/\s+/g, ' ');
	const parts = cleaned.split(' ');
	if (parts.length <= 1) return cleaned;
	const last = parts[parts.length - 1];
	const first = parts.slice(0, -1).join(' ');
	return `${last}, ${first}`;
}

export function publicationToRis(pub: Publication): string {
	const cleanDoi = pub.doi ? pub.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim() : '';
	const isPreprint = pub.category === 'preprint' || /under peer review|under review/i.test(pub.status);
	let ty = 'GEN';
	if (!isPreprint) {
		if (pub.category === 'journal') ty = 'JOUR';
		else if (pub.category === 'conference' || pub.category === 'workshop') ty = 'CONF';
	} else {
		ty = 'UNPB';
	}

	const lines: string[] = [
		`TY  - ${ty}`,
		`TI  - ${pub.title}`,
		...pub.authors.map((a) => `AU  - ${formatRisAuthor(a.name)}`),
		`PY  - ${pub.year}`
	];

	if (pub.venue) {
		lines.push(ty === 'JOUR' ? `JO  - ${pub.venue}` : `T2  - ${pub.venue}`);
	}
	if (cleanDoi) {
		lines.push(`DO  - ${cleanDoi}`);
	}
	lines.push(`UR  - https://saaillab.github.io/papers/${pub.slug}/`);
	for (const kw of pub.keywords || []) {
		lines.push(`KW  - ${kw}`);
	}
	if (pub.abstract) {
		lines.push(`AB  - ${pub.abstract}`);
	}
	lines.push('ER  - ');
	return lines.join('\r\n');
}
