const transitionVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

export default transitionVariants;
