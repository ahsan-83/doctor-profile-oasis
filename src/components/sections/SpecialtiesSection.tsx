import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon } from "lucide-react";

const specialties = [
  {
    title: "Interventional Cardiology",
    description:
      "Specialized procedures for treating coronary artery disease, including angioplasty and stent placement.",
  },
  {
    title: "Cardiac Imaging",
    description:
      "Advanced diagnostic imaging including echocardiography, cardiac CT, and MRI to visualize heart structure and function.",
  },
  {
    title: "Heart Failure Management",
    description:
      "Comprehensive treatment plans for patients with heart failure to improve quality of life and reduce hospitalizations.",
  },
  {
    title: "Preventive Cardiology",
    description:
      "Strategies to prevent heart disease through risk assessment, lifestyle modifications, and medication management.",
  },
  {
    title: "Arrhythmia Management",
    description:
      "Diagnosis and treatment of heart rhythm disorders using medication and minimally invasive procedures.",
  },
  {
    title: "Valvular Heart Disease",
    description:
      "Management of diseases affecting the heart valves, including surgical and transcatheter interventions.",
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Specialties & Treatments
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="bg-medical-100 p-1.5 rounded-full mr-2">
                    <MedalIcon className="h-4 w-4 text-medical-600" />
                  </div>
                  <CardTitle className="text-lg font-medium">
                    {specialty.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
