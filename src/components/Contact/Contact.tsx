
import { Textarea } from "../TextArea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../Button";
import { Input } from "../Input";
import { useToast } from "../../hooks/useToast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="getInTouch" className="">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl text-[#CCD6F6] md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mb-4"></div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-[#CCD6F6] max-w-2xl mb-12">
            Feel free to reach out to me for any questions or opportunities.
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-secondary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-secondary"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-secondary"
                  />
                </div>
                <div className="mb-6">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-secondary min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={300}>
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/70">contact@alexjohnson.dev</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-foreground/70">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;