import React, { useEffect, useRef } from 'react';
import '../styles/home/Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const lastActiveElement = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Store the element that had focus before the modal opened
            lastActiveElement.current = document.activeElement;
            
            // Focus the modal content
            if (modalRef.current) {
                modalRef.current.focus();
            }

            // Add event listener for keyboard navigation
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                // Restore focus to the last active element when modal closes
                if (lastActiveElement.current) {
                    lastActiveElement.current.focus();
                }
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Generate 20 dots with random positions and sizes
    const dots = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 2, // Random size between 2px and 5px
        left: Math.random() * 100, // Random horizontal position
        delay: Math.random() * 8 // Random delay between 0 and 8 seconds
    }));

    return (
        <div 
            className="modal-overlay" 
            onClick={onClose}
            role="presentation"
        >
            <div className="falling-dots">
                {dots.map(dot => (
                    <div 
                        key={dot.id} 
                        className="dot"
                        style={{
                            width: `${dot.size}px`,
                            height: `${dot.size}px`,
                            left: `${dot.left}%`,
                            animationDelay: `${dot.delay}s`
                        }}
                    />
                ))}
            </div>
            <div 
                ref={modalRef}
                className="modal-content" 
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex="-1"
            >
                <h2 id="modal-title" className="modal-title">Welcome to the ExploraVist Family! 🎉</h2>
                <div className="modal-message">
                    <p className="message-line">You're now part of something special!</p>
                    <p className="message-line">We're thrilled to have you join our journey.</p>
                    <p className="message-line">You'll be among the first to experience our device and receive exclusive updates.</p>
                    <p className="message-line">Get ready for exciting news, behind-the-scenes content, and early access opportunities.</p>
                    <p className="message-line">Thank you for believing in our vision - we can't wait to share this adventure with you!</p>
                </div>
                <button 
                    className="modal-button" 
                    onClick={onClose}
                    autoFocus
                >
                    Let's Begin This Journey!
                </button>
            </div>
        </div>
    );
};

export default Modal; 