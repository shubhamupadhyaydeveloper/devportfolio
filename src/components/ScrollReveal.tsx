import { useEffect, useRef } from 'react';
import { cn } from "../lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className,
  delay = 0,
  onMouseEnter,
  onMouseLeave
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target instanceof HTMLElement) {
                entry.target.classList.add('reveal');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef} 
      className={cn("animate-reveal", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;