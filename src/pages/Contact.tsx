import React, { useEffect, useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import Button from '../components/ui/Button';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Tailoring',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = '15550199821';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Maison%20de%20Couture,%20I%20would%20like%20to%20request%20a%20fitting%20appointment.%0AName:%20${encodeURIComponent(formData.name)}%0AService:%20${encodeURIComponent(formData.service)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Form Submit
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Bespoke Tailoring', message: '' });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-beige pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-3">
            Atelier Booking
          </span>
          <h1 className="text-dark text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">
            Book a Fitting
          </h1>
          <p className="text-dark/65 font-sans font-light text-sm">
            Contact our master tailoring studio. You can message us directly on WhatsApp for immediate response, or submit our booking request form.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7 bg-white border border-dark/5 p-8 md:p-12 rounded-md shadow-sm">
            <h2 className="font-serif text-dark text-2xl font-medium tracking-wide mb-6">
              Appointment Inquiry
            </h2>

            {isSubmitted ? (
              <div className="bg-[#c8a96a]/10 border border-[#c8a96a]/40 p-8 rounded-md text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#c8a96a] text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-dark text-xl font-medium">Inquiry Submitted</h3>
                <p className="text-dark/70 text-sm font-sans">
                  Thank you for your request, {formData.name || 'valued guest'}. Our atelier manager will contact you within 24 hours to finalize your fitting.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="gold" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 fill-current" /> Confirm Immediately on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-sans font-semibold tracking-wider text-dark/70 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Charlotte Thorne"
                      className="w-full bg-beige/50 border border-dark/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-dark"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-sans font-semibold tracking-wider text-dark/70 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., charlotte@example.com"
                      className="w-full bg-beige/50 border border-dark/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-sans font-semibold tracking-wider text-dark/70 uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., +1 (555) 019-9821"
                      className="w-full bg-beige/50 border border-dark/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-dark"
                    />
                  </div>

                  {/* Service Request */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-sans font-semibold tracking-wider text-dark/70 uppercase">
                      Desired Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-beige/50 border border-dark/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-dark cursor-pointer appearance-none"
                    >
                      <option value="Bespoke Tailoring">Bespoke Tailoring (New Suit/Gown)</option>
                      <option value="Alteration & Fit">Precision Alteration & Fit</option>
                      <option value="Garment Restyling">Garment Restyling & Reconstruction</option>
                      <option value="Heritage Kaftans">Heritage Kaftans & Traditional</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-sans font-semibold tracking-wider text-dark/70 uppercase">
                    Garment details or request notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your design, measurements, fabric thoughts, or sizing details..."
                    className="w-full bg-beige/50 border border-dark/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-dark"
                  />
                </div>

                {/* Submit Block */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2">
                    <Send className="w-4.5 h-4.5" /> Submit Booking Request
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      type="button"
                      variant="gold"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4.5 h-4.5 fill-current" /> Instant WhatsApp Booking
                    </Button>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column - Contact details card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact details */}
            <div className="bg-dark text-white p-8 md:p-10 rounded-md shadow-md border border-white/5 space-y-8">
              <h3 className="font-serif text-gold text-lg font-medium border-b border-white/10 pb-4">
                Atelier Location
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="text-sm font-sans font-light">
                    <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Address</span>
                    <span>128 Haute Couture Blvd, Suite A, Fashion District</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="text-sm font-sans font-light">
                    <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Operating Hours</span>
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    <span className="block mt-0.5">Sat: 10:00 AM - 4:00 PM</span>
                    <span className="block text-gold/80 mt-0.5">Sun: Private Appointments Only</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <div className="text-sm font-sans font-light">
                    <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Phone Call</span>
                    <a href="tel:+15550199" className="hover:text-gold transition-colors font-medium">+1 (555) 019-9821</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <div className="text-sm font-sans font-light">
                    <span className="text-white/40 block text-xs uppercase tracking-wider mb-0.5">Email Direct</span>
                    <a href="mailto:atelier@maisondecouture.com" className="hover:text-gold transition-colors font-medium text-white">atelier@maisondecouture.com</a>
                  </div>
                </div>
              </div>

              {/* Instagram Floating detail */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/60 text-xs font-sans font-light">Follow our updates:</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gold hover:text-white transition-colors text-xs font-sans tracking-widest uppercase font-semibold"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg> Instagram
                </a>
              </div>
            </div>

            {/* Quick Consultation Instructions */}
            <div className="bg-white border border-dark/5 p-8 rounded-md shadow-sm">
              <h4 className="font-serif text-[#111111] text-base font-semibold mb-3">
                First Time Commissioning?
              </h4>
              <p className="text-dark/70 text-xs font-sans font-light leading-relaxed">
                If you are new to custom tailoring, don't worry! We will guide you through selecting fabric weights, structural silhouettes, lining colors, and finishing details. An initial consultation usually takes about 45 minutes.
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Contact;
