/** Fade Animations */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

/** Slide Animations */
export const slideInFromLeft = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
};
export const slideInFromRight = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
};
export const slideInFromTop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
};
export const slideInFromBottom = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
};

/** Wipe Animations */
export const wipeInFromLeft = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "100%", opacity: 1 },
  exit: { width: 0, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
export const wipeInFromTop = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "100%", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

/** Components Specific Animations */

export const skillsAnimation = {
  initial: {
    position: "absolute",
    right: 0,
    width: "100%",
  },
  animate: {
    position: "absolute",
    right: 0,
    width: "50%",
  },
  transition: {
    delay: 0.5,
    duration: 0.3,
    ease: "easeInOut",
  },
  whileHover: {
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const viewAllButtonAnimation = {
  initial: {
    position: "absolute",
    bottom: 0,
    height: "100%",
  },
  animate: {
    position: "absolute",
    bottom: 0,
    height: "auto",
  },
  transition: {
    delay: 0.5,
  },
};

export const aboutContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const aboutItem = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const projectsContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const projectItem = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
