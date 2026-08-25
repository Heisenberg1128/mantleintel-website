# Mantle Intelligence public website

Official public website for [Mantle Intelligence](https://mantleintel.com). This repository is intentionally separate from the Mantle working prototype.

## Technology

- Next.js-compatible Vinext application
- React and TypeScript
- Tailwind CSS entry point with a purpose-built CSS design system
- Cloudflare-compatible Sites deployment
- Hostinger-managed DNS for `mantleintel.com`

## Local development

Use Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal.

## Quality checks and production build

```bash
npm run lint
npm run typecheck
npm test
```

`npm test` creates the production build and validates the important rendered routes, metadata and content.

## Deployment and domain

The site is deployed through OpenAI Sites and the domain remains managed in Hostinger. `.openai/hosting.json` stores the Sites project identifier after the first deployment; it contains no secret credentials.

The Hostinger DNS zone should contain only the website targets returned by the deployment service plus any existing email or verification records. Do not reset the zone. The canonical hostname is `mantleintel.com`; `www.mantleintel.com` redirects to the apex domain.

## Editing website copy

All core public copy is centralized in [`content/site.ts`](content/site.ts), including:

- hero and positioning
- workflow steps
- capabilities and status labels
- use cases
- mission and vision
- founders
- pilot CTA
- demo video configuration

Most copy changes should not require editing components.

## Updating founder biographies

Edit the `founders` array in [`content/site.ts`](content/site.ts). Portraits are optional and intentionally not represented by fake silhouettes.

## Replacing the demo video

In [`content/site.ts`](content/site.ts), find `demo.video` and set:

- Hosted MP4: `provider: "mp4"`, `source: "/demo/mantle-demo.mp4"`; then place the file at `public/demo/mantle-demo.mp4`.
- YouTube: `provider: "youtube"`, `source: "VIDEO_ID"`.
- Vimeo: `provider: "vimeo"`, `source: "VIDEO_ID"`.
- Placeholder: `provider: "placeholder"`, `source: ""`.

The component is [`components/ProductDemo.tsx`](components/ProductDemo.tsx). Videos never autoplay with sound.
For an MP4, also replace `public/demo/captions.vtt` with the final caption track.

## Pilot contact configuration

No `@mantleintel.com` mailbox existed when the site was prepared, so the public CTA is presented honestly as pending rather than sending enquiries to a nonexistent address.

After creating `hello@mantleintel.com` in Hostinger:

1. Update `pilot.emailVerified` to `true` in [`content/site.ts`](content/site.ts).
2. Confirm the mailbox receives an external test message.
3. Rebuild and redeploy.

## Analytics

No tracking is enabled by default. Add a privacy-conscious provider only after approval and privacy-notice review in [`components/Analytics.tsx`](components/Analytics.tsx).

## Environment variables

The current site needs none. See [`.env.example`](.env.example) for the policy on future values. Never commit API keys, Hostinger credentials or other secrets.

## Legal pages

The Privacy and Terms pages are early-stage placeholders and are explicitly labelled for counsel review. They are not final legal advice.
