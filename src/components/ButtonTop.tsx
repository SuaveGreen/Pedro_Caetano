import { ArrowUp } from "lucide-react";
import { useState, useEffect } from 'react';

export function ButtonTop() {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos <= 2600; // Ajuste este valor conforme necessário
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 

  return(
    <a href="#hero" className={`transition-all duration-500 ${!isVisible ? 'opacity-100 visible ' : 'opacity-0 invisible '} fixed right-10 bottom-10 animate-bounce`}>
      <ArrowUp className="bg-[#6689be28] h-12 w-12 p-2 rounded-full"/>
    </a>
  )
}