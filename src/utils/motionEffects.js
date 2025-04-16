// motionVariants.js

// 🔼 Fade in while moving up slightly
export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// 🔽 Fade in while moving down from the top
export const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// 🔄 Fade in with a subtle rotation
export const fadeInRotate = {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
};

// 🔍 Fade in while scaling up slightly
export const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// 👈 Slide in from the left
export const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

// 👉 Slide in from the right
export const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

// ⬆️ Slide in from the bottom
export const swipeInBottom = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

// ⬅️ Swipe in from the left edge of the screen
export const swipeInLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// ➡️ Swipe in from the right edge of the screen
export const swipeInRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// 💥 Pop in from scale 0.5 with a spring effect
export const popIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

// 🧸 Bouncy drop-in from the top
export const bounceIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4, duration: 0.8 }
    }
};

// 🔍 Zoom in from smaller scale
export const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};

// 🧩 For staggered animations of multiple children (e.g., list items)
export const staggerContainer = {
    visible: {
    transition: {
        staggerChildren: 0.2, // Delay between each child animation
    }
    }
};

// 🧱 Individual item fade in (works with staggerContainer)
export const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
