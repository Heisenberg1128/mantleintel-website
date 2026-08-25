import type { DemoProvider } from "../content/site";

type ProductDemoProps = {
  video: {
    provider: DemoProvider;
    source: string;
    title: string;
    poster: string;
  };
};

function embedUrl(provider: DemoProvider, source: string) {
  if (provider === "youtube") return `https://www.youtube-nocookie.com/embed/${source}`;
  if (provider === "vimeo") return `https://player.vimeo.com/video/${source}`;
  return source;
}

export function ProductDemo({ video }: ProductDemoProps) {
  if (video.provider === "mp4" && video.source) {
    return (
      <video className="demo-media" controls preload="metadata" poster={video.poster || undefined}>
        <source src={video.source} type="video/mp4" />
        <track kind="captions" src="/demo/captions.vtt" srcLang="en" label="English" default />
        Your browser does not support HTML video.
      </video>
    );
  }

  if ((video.provider === "youtube" || video.provider === "vimeo") && video.source) {
    return (
      <iframe
        className="demo-media"
        src={embedUrl(video.provider, video.source)}
        title={video.title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div className="demo-placeholder" role="img" aria-label="Mantle product demonstration video coming soon">
      <div className="demo-interface" aria-hidden="true">
        <div className="demo-panel raw"><span>Original context</span><i /><i /><i /></div>
        <div className="demo-gate"><b>KEEP</b><b>MASK</b><b>REMOVE</b></div>
        <div className="demo-panel clean"><span>Approved payload</span><i /><i /></div>
      </div>
      <a
        className="demo-play"
        href="https://mantlecorps.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the live Mantle prototype in a new tab"
      >
        <span aria-hidden="true">▶</span>
      </a>
      <strong>{video.title}</strong>
      <small>Open live prototype</small>
    </div>
  );
}
