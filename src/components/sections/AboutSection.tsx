import { User, Book, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          About
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Dr. John Matthews is a board-certified cardiologist with over 15
              years of experience in diagnosing and treating cardiovascular
              diseases. He specializes in interventional cardiology, focusing on
              minimally invasive procedures to treat heart and vascular
              conditions.
            </p>
            <p className="text-gray-700 mb-6">
              Passionate about patient care, Dr. Matthews combines the latest
              medical advancements with a compassionate approach, ensuring that
              each patient receives personalized treatment plans tailored to
              their specific needs. He believes in empowering patients through
              education and involvement in their treatment decisions.
            </p>

            <div className="flex items-start mb-4">
              <div className="bg-medical-50 p-2 rounded mr-4">
                <User className="h-5 w-5 text-medical-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Personal Philosophy
                </h3>
                <p className="text-gray-600 text-sm">
                  Treating the whole person, not just the disease
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <div className="bg-medical-50 p-2 rounded mr-4">
                <Book className="h-5 w-5 text-medical-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Continuous Education
                </h3>
                <p className="text-gray-600 text-sm">
                  Committed to staying at the forefront of cardiac care
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-medical-50 p-2 rounded mr-4">
                <Award className="h-5 w-5 text-medical-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600 text-sm">
                  Fostering relationships based on trust and respect
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Dr. Matthews in consultation"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-xs text-gray-500 mb-1">EXPERIENCE</p>
              <p className="font-semibold text-gray-800">
                15+ years of specialized cardiovascular care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
