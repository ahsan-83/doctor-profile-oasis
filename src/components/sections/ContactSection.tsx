import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Contact
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-medical-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-medical-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">
                    dr.matthews@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-medical-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Main Office
                  </p>
                  <p className="text-sm text-gray-600">
                    123 Medical Plaza, Suite 200
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-medical-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Office Hours
                  </p>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-74.0059418846902!3d40.71277937933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19881a7287%3A0x9a01717086737857!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1679950417564!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="flex items-center gap-4 p-6">
                <h3 className="font-semibold mb-1">Follow Dr. Smith</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
