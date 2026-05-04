import React from 'react'


function Navigation() {
    const isDark = true;
  
    const sections = [
      { id: "basic", label: "Basic Props", icon: "📦" },
      { id: "ref", label: "ref Props", icon: "🔗" },
      { id: "children", label: "children Props", icon: "👶" },
      { id: "complex", label: "complex Props", icon: "🧩" },
      { id: "theme", label: "theme Props", icon: "🎨" },
    ];
  
    return (
      <nav
        className={`sticky top-0 z-50 shadow-md transition-colors ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white
                  hover:bg-blue-800
                `}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  }

export default Navigation