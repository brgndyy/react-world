import { keyframes } from "@vanilla-extract/css";

export const slideInFromRight = keyframes({
  from: {
    transform: "translateX(100%)",
    opacity: "0",
  },
  to: {
    transform: "translateX(0)",
    opacity: "1",
  },
});

export const slideOutToLeft = keyframes({
  from: {
    transform: "translateX(100%)",
    opacity: "0",
  },
  to: {
    transform: "translateX(0)",
    opacity: "1",
  },
});

export const flipIn = keyframes({
  from: {
    transform: "rotateY(90deg)",
    opacity: 0,
  },
  to: {
    transform: "rotateY(0deg)",
    opacity: 1,
  },
});

export const flipOut = keyframes({
  from: {
    transform: "rotateY(0deg)",
    opacity: 1,
  },
  to: {
    transform: "rotateY(90deg)",
    opacity: 0,
  },
});

export const progressBarAnimation = keyframes({
  from: {
    width: "100%",
  },
  to: {
    width: "0%",
  },
});

export const slideDown = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-50%)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const slideUp = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(-30%)",
  },
});
