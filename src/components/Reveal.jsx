import { useInView } from "../hooks.js";

/** Fades/slides children in when scrolled into view. */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, visible] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
