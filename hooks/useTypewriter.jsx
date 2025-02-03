import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 100) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    
    const typing = setInterval(() => {
      if (!isDeleting) {
        // Typing forward
        if (i < text.length) {
          setDisplayText(prev => text.substring(0, i + 1));
          i++;
        } else {
          // Wait at the end before starting to delete
          setTimeout(() => {
            isDeleting = true;
          }, 1000);
        }
      } else {
        // Deleting
        if (i > 0) {
          setDisplayText(prev => text.substring(0, i - 1));
          i--;
        } else {
          // Reset to start typing again
          isDeleting = false;
          setTimeout(() => {
            i = 0;
          }, 500);
        }
      }
    }, speed);

    return () => clearInterval(typing);
  }, [text, speed]);

  return displayText;
}