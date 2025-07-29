export const metadata = {
  other: {
    "shimmer-styles": `
      <style>
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 1.5s infinite;
        }
      </style>
    `,
  },
};

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
      }}
    >
      {/* Navbar shimmer */}
      <div
        style={{
          height: "80px",
          backgroundColor: "#1a1a1a",
          borderBottom: "1px solid #2a2a2a",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "32px",
            backgroundColor: "#2a2a2a",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="shimmer-effect"></div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "1rem",
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: "80px",
                height: "32px",
                backgroundColor: "#2a2a2a",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="shimmer-effect"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content shimmer */}
      <div
        style={{
          flex: 1,
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Hero section shimmer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "60%",
              height: "48px",
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="shimmer-effect"></div>
          </div>
          <div
            style={{
              width: "80%",
              height: "24px",
              backgroundColor: "#2a2a2a",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="shimmer-effect"></div>
          </div>
          <div
            style={{
              width: "40%",
              height: "48px",
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="shimmer-effect"></div>
          </div>
        </div>

        {/* Projects section shimmer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "12px",
                padding: "1.5rem",
                border: "1px solid #2a2a2a",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="shimmer-effect"></div>
              </div>
              <div
                style={{
                  width: "70%",
                  height: "24px",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "4px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="shimmer-effect"></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "16px",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "4px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="shimmer-effect"></div>
              </div>
              <div
                style={{
                  width: "60%",
                  height: "16px",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "4px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="shimmer-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
