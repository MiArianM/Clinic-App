import React, { useEffect } from "react";

const InstagramEmbed = ({ postUrl }) => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script only if it was added
      const scriptTags = document.body.getElementsByTagName("script");
      for (let i = 0; i < scriptTags.length; i++) {
        if (scriptTags[i].src === script.src) {
          document.body.removeChild(scriptTags[i]);
          break;
        }
      }
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "340px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a href={postUrl} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </div>
    </blockquote>
  );
};

function BeforeAfter() {
  return (
    <div className="flex mt-5 gap-5 justify-center">
      <InstagramEmbed postUrl="https://www.instagram.com/p/Cto_PPjtDxa/" />
      <InstagramEmbed postUrl="https://www.instagram.com/p/C_fWkkFtqld" />
    </div>
  );
}

export default BeforeAfter;
