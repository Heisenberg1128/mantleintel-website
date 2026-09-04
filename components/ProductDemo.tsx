import type { DemoProvider } from "../content/site";
import { interfaceCopy, type Locale } from "../content/i18n";

type ProductDemoProps = {
  video: {
    provider: DemoProvider;
    source: string;
    title: string;
    poster: string;
  };
  locale?: Locale;
};

function embedUrl(provider: DemoProvider, source: string) {
  if (provider === "youtube") return `https://www.youtube-nocookie.com/embed/${source}`;
  if (provider === "vimeo") return `https://player.vimeo.com/video/${source}`;
  return source;
}

export function ProductDemo({ video, locale = "en" }: ProductDemoProps) {
  const ui = interfaceCopy[locale];
  if (video.provider === "mp4" && video.source) {
    return (
      // The supplied master has professionally burned-in captions on every frame.
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        className="demo-media"
        controls
        playsInline
        preload="metadata"
        poster={video.poster || undefined}
        aria-label={video.title}
      >
        <source src={video.source} type="video/mp4" />
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
    <div className="demo-placeholder" role="img" aria-label={ui.demoAlt}>
      <div className="demo-interface" aria-hidden="true">
        <div className="demo-panel raw"><span>{ui.originalContext}</span><i /><i /><i /></div>
        <div className="demo-gate"><b>{ui.keep}</b><b>{ui.mask}</b><b>{ui.remove}</b></div>
        <div className="demo-panel clean"><span>{ui.approvedPayload}</span><i /><i /></div>
      </div>
      <a
        className="demo-play"
        href="https://mantlecorps.com"
        target="_blank"
        rel="noreferrer"
        aria-label={ui.openPrototype}
      >
        <span aria-hidden="true">▶</span>
      </a>
      <strong>{video.title}</strong>
      <small>{ui.openPrototype}</small>
    </div>
  );
}
