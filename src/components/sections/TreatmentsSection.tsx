import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse, Stethoscope, Activity, Heart } from "lucide-react";

const diseases = [
  {
    name: "Coronary Artery Disease",
    icon: Heart,
    description: "Blockage of coronary arteries due to plaque buildup, leading to reduced blood flow to the heart.",
    symptoms: ["Chest pain (angina)", "Shortness of breath", "Fatigue", "Heart attack"],
    procedures: [
      {
        name: "Coronary Angioplasty",
        description: "A minimally invasive procedure to open blocked coronary arteries using a balloon catheter."
      },
      {
        name: "Stent Placement",
        description: "Insertion of a small mesh tube to keep the artery open after angioplasty."
      },
      {
        name: "Coronary Bypass Surgery",
        description: "Creating a new route for blood flow around blocked coronary arteries."
      }
    ]
  },
  {
    name: "Heart Arrhythmias",
    icon: Activity,
    description: "Irregular heartbeat patterns that can be too fast, too slow, or erratic.",
    symptoms: ["Palpitations", "Dizziness", "Fainting", "Chest discomfort"],
    procedures: [
      {
        name: "Cardiac Ablation",
        description: "Using radiofrequency energy to destroy small areas of heart tissue causing abnormal rhythms."
      },
      {
        name: "Pacemaker Implantation",
        description: "Surgical placement of a device to regulate heart rhythm with electrical impulses."
      },
      {
        name: "Cardioversion",
        description: "Using electrical shock or medication to restore normal heart rhythm."
      }
    ]
  },
  {
    name: "Heart Failure",
    icon: HeartPulse,
    description: "Condition where the heart cannot pump blood efficiently to meet the body's needs.",
    symptoms: ["Shortness of breath", "Swelling in legs and ankles", "Persistent cough", "Fatigue"],
    procedures: [
      {
        name: "Medication Management",
        description: "Optimizing drug therapy to improve heart function and reduce symptoms."
      },
      {
        name: "Cardiac Resynchronization Therapy",
        description: "Implanting a special pacemaker to help heart chambers beat in sync."
      },
      {
        name: "Ventricular Assist Device",
        description: "Mechanical pump implanted to help the heart pump blood throughout the body."
      }
    ]
  },
  {
    name: "Valvular Heart Disease",
    icon: Stethoscope,
    description: "Damage or defect in one of the four heart valves affecting blood flow.",
    symptoms: ["Fatigue", "Shortness of breath", "Irregular heartbeat", "Chest pain"],
    procedures: [
      {
        name: "Valve Repair",
        description: "Surgical procedure to fix damaged heart valves and restore proper function."
      },
      {
        name: "Valve Replacement",
        description: "Replacing damaged valve with mechanical or biological prosthetic valve."
      },
      {
        name: "TAVR Procedure",
        description: "Transcatheter aortic valve replacement through minimally invasive approach."
      }
    ]
  }
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="section-padding">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Disease Treatments & Procedures
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive treatment approaches for various cardiac conditions using advanced medical procedures and personalized care plans.
        </p>

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {diseases.map((disease, index) => (
              <TabsTrigger key={index} value={index.toString()} className="text-sm">
                {disease.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {diseases.map((disease, index) => (
            <TabsContent key={index} value={index.toString()}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Disease Overview */}
                <Card className="border-medical-200">
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <div className="bg-medical-100 p-3 rounded-lg mr-3">
                        <disease.icon className="h-6 w-6 text-medical-600" />
                      </div>
                      <CardTitle className="text-xl">{disease.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {disease.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Common Symptoms:</h4>
                    <ul className="space-y-2">
                      {disease.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-medical-500 mr-2">•</span>
                          <span className="text-gray-600">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Treatment Procedures */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-gray-900 mb-4">Treatment Procedures</h3>
                  {disease.procedures.map((procedure, idx) => (
                    <Card key={idx} className="border-gray-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-medical-700">
                          {procedure.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">{procedure.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
