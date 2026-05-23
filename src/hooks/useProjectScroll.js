import { useRef } from "react";

export default function useProjectScroll() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".project-card");

    const cardWidth = card?.offsetWidth || 420;

    const gap = 32;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return {
    scrollRef,
    scroll,
  };
}
