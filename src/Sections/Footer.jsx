import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    const element = footerRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 100%", // Start when footer enters the viewport
          end: "top 80%", // End animation quickly
          toggleActions: "play none none none", // Play once and stay
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup
  }, []);
  return (
    <section
      className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
      ref={footerRef}
    >
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/taki199" target="_blank">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-6 h-6" // Adjust the size as needed
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/taki199" target="_blank">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-6 h-6" // Adjust the size as needed
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/taki199" target="_blank">
            <img
              src="/assets/instagram.svg"
              alt="linkedin"
              className="w-6 h-6" // Adjust the size as needed
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2025 Houcine.All rights reserved.</p>
    </section>
  );
};

export default Footer;
