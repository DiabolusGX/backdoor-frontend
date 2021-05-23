export const buttonVariants = {
    hover: {
        scale: 1.04,
    }
}

export const modalVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 170
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            type: "tween"
        }
    }
}

export const backdropVariants = {
    hidden: {
        opacity: 0,
        transition: {
            type: "tween"
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween"
        }
    }
}

export const sidebarVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: "tween",
            ease: "circOut",
            duration: 0.6
        }
    }
}