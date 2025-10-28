import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <>
      <style>
        {`.bg-primary:hover {
              background-color: #0a58ca; 
        }`}
      </style>
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10 flex flex-col-reverse md:flex-row items-center min-h-[calc(100vh-76px)] py-12">
          <div className="md:w-1/2 pt-8 md:pt-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Dr. John Matthews (Template 1)
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-medical-700 font-medium mb-6">
              Cardiology Specialist
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              With over 15 years of experience, I'm dedicated to providing
              exceptional cardiac care with compassion and cutting-edge
              treatment options. Your heart health is my top priority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary hover:bg-primary-dark text-white text-lg"
                style={{ padding: "30px 40px" }}
              >
                <a href="#contact">Book Appointment</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Patient"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/35.jpg"
                  alt="Patient"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Patient"
                />
              </div>
              <p className="ml-4 text-sm text-gray-600">
                Trusted by <span className="font-medium">2,000+</span> patients
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 opacity-20 animate-pulse"></div>
              <img
                className="absolute inset-0 w-full h-full rounded-xl object-cover border-8 border-white shadow-xl"
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Dr. John Matthews"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
