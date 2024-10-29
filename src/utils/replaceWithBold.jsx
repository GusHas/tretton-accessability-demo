export const replaceWithBold = (text, key) =>
  text.split(key).map((t, i) => {
    if (Math.abs(i % 2) === 1) {
      return <b>{t}</b>;
    } else {
      return t;
    }
  });
