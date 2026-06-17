import React from 'react';

export function Footer() {
    return (
        <footer className="bg-[#0a0805] py-8 border-t border-[#1a1108]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#8C7B6A] font-sans text-xs md:text-sm">
                <p>© {new Date().getFullYear()} Miska Ramen. All rights reserved.</p>
                <div className="flex gap-6">
                    <a
                        href="https://www.instagram.com/miskaramen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#E8632A] transition-colors">
                        Instagram
                    </a>
                    <a href="/terms-of-use" className="hover:text-[#E8632A] transition-colors">
                        Terms of Use
                    </a>
                    <a href="/privacy-policy" className="hover:text-[#E8632A] transition-colors">
                        Privacy Policy
                    </a>
                </div>
                <p>Made with ♥ in Prague</p>
            </div>
        </footer>
    );
}
