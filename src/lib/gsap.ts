"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function useGSAPReveal(selector: string, options?: gsap.TweenVars) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: selector,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
          ...options,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
}

export function useGSAPTextReveal(
  ref: React.RefObject<HTMLElement>,
  text: string
) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        duration: 2,
        text: { value: text },
        ease: "none",
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, [ref, text]);
}

export function useGSAPParallax(
  ref: React.RefObject<HTMLElement>,
  speed = 0.5
) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -30 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [ref, speed]);
}

export function animateCounter(
  element: HTMLElement,
  from: number,
  to: number,
  duration = 2
) {
  gsap.fromTo(
    element,
    { innerText: from },
    {
      innerText: to,
      duration,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
      },
    }
  );
}

export { gsap, ScrollTrigger };
