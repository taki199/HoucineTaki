import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const contactRef = useRef(null);
  useEffect(() => {
    const element = contactRef.current;
    if (!element) return;

    // GSAP animation
    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: 100 }, // Start state
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start when the top of the section reaches 80% of the viewport
          end: "top 30%", // End animation when it reaches 30%
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );
    return () => animation.kill(); // Cleanup on unmount
  }, []);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const HandleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  //service_ltv4drg
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.send(
        "service_ltv4drg",
        "template_qve7m3y",
        {
          from_name: form.name,
          to_name: "Houcine",
          from_email: form.email,
          to_email: "houcine.taki21@gmail.com",
          message: form.message,
        },
        "V3JqFUGjFXvmoSJBc"
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("something went wrong");
    }
  };
  return (
    <section className="c-space my-20" id="contact" ref={contactRef}>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Have a question or want to collaborate?</h3>
          <p className="text-lg text-white-600 mt-3">
            Feel free to reach out! Whether it’s a project idea, a job
            opportunity, or just a tech chat, I’d love to connect.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7 "
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={HandleChange}
                required
                className="field-input"
                placeholder="Jhon Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={HandleChange}
                required
                className="field-input"
                placeholder="jhondoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={HandleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi,I'm Interested in ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending ..." : "Send a Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
