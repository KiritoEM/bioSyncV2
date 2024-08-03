const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  console.log(section);

  if (section) {
    const ratio = 100;
    const position =
      section.getBoundingClientRect().top + window.scrollY - ratio;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
};

export { scrollToSection };
