export const formatDate = (dateStr) => {
  const dateObject = new Date(dateStr);
  return dateObject.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const readingTime = (text, wpm = 180) => {
  try {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  }
  catch(ex) {
    return 0;
  }
}