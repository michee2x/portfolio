import React from 'react'

const Section_Two = () => {
  return (
    <div className="w-full mt-16 h-screen">
      <h1 className="lg:text-8xl text-5xl font-bold font-framer-Mono">
        The Macelo Metrics
      </h1>

      <div>
        {[
          {
            percent: 72,
            field: "Semantics / SEO",
          },
          {
            percent: 76,
            field: "Animations / Transitions",
          },
          {
            percent: 64,
            field: "Accessibility",
          },
          {
            percent: 80,
            field: "WPO",
          },
          {
            percent: 78,
            field: "Responsive Design",
          },
          {
            percent: 72,
            field: "Markup / Meta-data",
          },
        ].map((met, idx) => {
          return (
            <div className="mt-8 flex justify-between items-end mr-16">
              {/* For TSX uncomment the commented types below */}
              <div
                className="radial-progress text-primary"
                style={{ "--value": met.percent } as React.CSSProperties}
                aria-valuenow={100}
                role="progressbar"
              >
                {met.percent}%
              </div>
              <span className="mb-5">{met.field}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section_Two