const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, onClose?: () => void) => {
    e.preventDefault();

    if (onClose) {
        onClose();
    }

    // Скролимо до секції
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

export { scrollToSection };
