export const newThemeColor = () => {
  const generateRandomColor = () => {
    const maxVal = 16777215;
    const randomNumber = Math.floor(Math.random() * maxVal);
    const randColor = randomNumber.toString(16).padStart(6, "0");
    return `#${randColor.toUpperCase()}`;
  };

  const calculateContrastColor = (color) => {
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };

  const updateThemeColors = (color1, color2, color3) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", color1);
    root.style.setProperty("--accent", color2);
    root.style.setProperty("--neutral", color3);

    const primaryContrast = calculateContrastColor(color1);
    const accentContrast = calculateContrastColor(color2);
    const neutralContrast = calculateContrastColor(color3);

    root.style.setProperty("--primary-contrast", primaryContrast);
    root.style.setProperty("--accent-contrast", accentContrast);
    root.style.setProperty("--neutral-contrast", neutralContrast);
  };

  const changeColor = (elementId) => {
    let color;
    if (elementId === "color1") {
      color = generateRandomColor();
      updateThemeColors(color, null, null);
    } else if (elementId === "color2") {
      color = generateRandomColor();
      updateThemeColors(null, color, null);
    } else if (elementId === "color3") {
      color = generateRandomColor();
      updateThemeColors(null, null, color);
    }

    console.log(`New ${elementId}:`, color);
  };

  const newThemeColor = () => {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const color3 = generateRandomColor();

    updateThemeColors(color1, color2, color3);

    console.log("New color 1:", color1);
    console.log("New color 2:", color2);
    console.log("New color 3:", color3);
  };

  newThemeColor();

  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      newThemeColor();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
};
