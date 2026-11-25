import type { APIRoute } from 'astro';
import { PUBLICATIONS } from '../data/publications';

function escapeXml(value: string): string {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
	const sorted = [...PUBLICATIONS]
		.filter((p) => p.isSaailLab !== false)
		.sort((a, b) => b.dateISO.localeCompare(a.dateISO));

	const itemsXml = sorted
		.map((pub) => {
			const link = `https://saaillab.github.io/papers/${pub.slug}/`;
			const pubDate = new Date(`${pub.dateISO}T00:00:00Z`).toUTCString();
			const authors = pub.authors.map((a) => a.name).join(', ');
			const summary = `${authors} (${pub.year}, ${pub.venueShort}). ${pub.tldr}`;
			const cats = pub.topics
				.slice(0, 4)
				.map((t) => `<category>${escapeXml(t)}</category>`)
				.join('');
			return `    <item>
      <title>${escapeXml(pub.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${escapeXml(pubDate)}</pubDate>
      <description>${escapeXml(summary)}</description>
      ${cats}
    </item>`;
		})
		.join('\n');

	const lastBuild = new Date().toUTCString();
	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SAAIL Lab Publications &amp; Research Updates</title>
    <link>https://saaillab.github.io/publications/</link>
    <atom:link href="https://saaillab.github.io/feed.xml" rel="self" type="application/rss+xml" />
    <description>Peer-reviewed publications, datasets, and research releases from SAAIL Lab at IIT Madras Zanzibar.</description>
    <language>en-us</language>
    <lastBuildDate>${escapeXml(lastBuild)}</lastBuildDate>
${itemsXml}
  </channel>
</rss>
`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
