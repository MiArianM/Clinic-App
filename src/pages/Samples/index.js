import React, { useEffect } from "react";

function InstagramEmbed() {
  useEffect(() => {
    // Ensure the Instagram embed script is loaded
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/C_fWkkFtqld/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "40px",
          minWidth: "326px",
          padding: 0,
          width: "99.375%",
          WebkitCalc: "100% - 2px",
          calc: "100% - 2px",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href="https://www.instagram.com/p/C_fWkkFtqld/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: "40px",
                  marginRight: "14px",
                  width: "40px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    width: "60px",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "19% 0" }} />
            <div
              style={{
                display: "block",
                height: "50px",
                margin: "0 auto 12px",
                width: "50px",
              }}
            >
              {/* SVG code remains unchanged */}
            </div>
            <div style={{ paddingTop: "8px" }}>
              <div
                style={{
                  color: "#3897f0",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: "18px",
                }}
              >
                View this post on Instagram
              </div>
            </div>
            <div style={{ padding: "12.5% 0" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "14px",
                alignItems: "center",
              }}
            >
              {/* More styling code for icons */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "14px",
                  marginBottom: "6px",
                  width: "224px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "14px",
                  width: "144px",
                }}
              />
            </div>
          </a>
          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: 0,
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href="https://www.instagram.com/p/C_fWkkFtqld/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              A post shared by دکتر آنیتا پورحسین/دکتر سعید کاویانی
              (@dr.pourhossein_dr.kaviani)
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
}

export default InstagramEmbed;
