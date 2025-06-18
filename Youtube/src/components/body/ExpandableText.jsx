import { useState, useRef, useEffect } from "react";

const ExpandableText = ({ htmlText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [htmlText]);

  return (
    <div>
      <div
        ref={textRef}
        className={`text-gray-700 ${!isExpanded ? "line-clamp-1" : ""}`}
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />
      {isClamped && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:underline text-sm mt-1"
        >
          {isExpanded ? "Show less" : "More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
