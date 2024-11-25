/* eslint-disable react/prop-types */

export const HighlightText = ({ text }) => {
  const formattedText = text?.split(/(\{[^}]*\})/g).map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return <b key={index}>{part.slice(1, -1)}</b>;
    }
    return part;
  });

  return <span>{formattedText}</span>;
};
