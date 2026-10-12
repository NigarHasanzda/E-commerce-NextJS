"use client";

import React, { useRef, useState, useEffect } from "react";

const FadeInFromBottom = ({
  children,
  className = "",
  style = {},
  block = false,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const combinedStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    display: block ? "block" : "inline-block",
    ...(block ? { width: "100%" } : {}),
    ...style,
  };

  const Tag = block ? "div" : "span";

  return (
    <Tag ref={ref} className={className} style={combinedStyle}>
      {children}
    </Tag>
  );
};

export default FadeInFromBottom;
