import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Credentials
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>

        <Tabs defaultValue="education" className="max-w-5xl mx-auto">
          <TabsList
            className="grid grid-cols-5 mb-8"
            style={{ paddingBottom: "45px" }}
          >
            <TabsTrigger value="experience" style={{ padding: "10px 20px" }}>
              Experience
            </TabsTrigger>

            <TabsTrigger value="education" style={{ padding: "10px 20px" }}>
              Education
            </TabsTrigger>

            <TabsTrigger
              value="certifications"
              style={{ padding: "10px 20px" }}
            >
              Certifications
            </TabsTrigger>
            <TabsTrigger value="residency" style={{ padding: "10px 20px" }}>
              Membership
            </TabsTrigger>
            <TabsTrigger value="awards" style={{ padding: "10px 20px" }}>
              Awards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-4">
            <Card className="p-6 shadow-md">
              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Chief of Cardiology
                  </h3>
                  <span className="text-sm text-gray-500">2020 - Present</span>
                </div>
                <p className="text-gray-600 mb-1">Metropolitan General Hospital</p>
                <p className="text-sm text-gray-500">
                  Leading a team of 15 cardiologists, overseeing patient care, and implementing advanced cardiac treatment protocols.
                </p>
              </div>

              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Senior Cardiologist
                  </h3>
                  <span className="text-sm text-gray-500">2015 - 2020</span>
                </div>
                <p className="text-gray-600 mb-1">Regional Medical Center</p>
                <p className="text-sm text-gray-500">
                  Specialized in interventional cardiology, performed over 500 cardiac catheterizations and angioplasties.
                </p>
              </div>

              <div className="mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Internal Medicine Physician
                  </h3>
                  <span className="text-sm text-gray-500">2012 - 2015</span>
                </div>
                <p className="text-gray-600 mb-1">
                  University Hospital
                </p>
                <p className="text-sm text-gray-500">
                  Provided comprehensive internal medicine care, managed complex medical conditions, and mentored residents.
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <Card className="p-6 shadow-md">
              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Doctor of Medicine (MD)
                  </h3>
                  <span className="text-sm text-gray-500">2000 - 2004</span>
                </div>
                <p className="text-gray-600 mb-1">Harvard Medical School</p>
                <p className="text-sm text-gray-500">
                  Graduated summa cum laude with focus on cardiovascular studies
                </p>
              </div>

              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Bachelor of Science in Biochemistry
                  </h3>
                  <span className="text-sm text-gray-500">1996 - 2000</span>
                </div>
                <p className="text-gray-600 mb-1">Yale University</p>
                <p className="text-sm text-gray-500">
                  Graduated with distinction, Dean's List all semesters
                </p>
              </div>

              <div className="mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Fellowship in Interventional Cardiology
                  </h3>
                  <span className="text-sm text-gray-500">2008 - 2010</span>
                </div>
                <p className="text-gray-600 mb-1">
                  Massachusetts General Hospital
                </p>
                <p className="text-sm text-gray-500">
                  Specialized training in cutting-edge cardiovascular
                  interventions
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-4">
            <Card className="p-6 shadow-md">
              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Board Certification in Cardiovascular Disease
                  </h3>
                  <span className="text-sm text-gray-500">2007 - Present</span>
                </div>
                <p className="text-gray-600 mb-1">
                  American Board of Internal Medicine
                </p>
              </div>

              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Board Certification in Interventional Cardiology
                  </h3>
                  <span className="text-sm text-gray-500">2010 - Present</span>
                </div>
                <p className="text-gray-600 mb-1">
                  American Board of Internal Medicine
                </p>
              </div>

              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Fellow of the American College of Cardiology (FACC)
                  </h3>
                  <span className="text-sm text-gray-500">2011 - Present</span>
                </div>
              </div>

              <div className="mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Fellow of the Society for Cardiovascular Angiography and
                    Interventions (FSCAI)
                  </h3>
                  <span className="text-sm text-gray-500">2012 - Present</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="residency" className="space-y-4">
            <Card className="p-6 shadow-md">
              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Residency in Internal Medicine
                  </h3>
                  <span className="text-sm text-gray-500">2004 - 2007</span>
                </div>
                <p className="text-gray-600 mb-1">
                  Brigham and Women's Hospital
                </p>
                <p className="text-sm text-gray-500">
                  Comprehensive training in diagnosis and management of adult
                  diseases
                </p>
              </div>

              <div className="mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Fellowship in Cardiovascular Disease
                  </h3>
                  <span className="text-sm text-gray-500">2007 - 2010</span>
                </div>
                <p className="text-gray-600 mb-1">
                  Massachusetts General Hospital
                </p>
                <p className="text-sm text-gray-500">
                  Advanced training in clinical cardiology and cardiovascular
                  research
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="awards" className="space-y-4">
            <Card className="p-6 shadow-md">
              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Excellence in Cardiovascular Care Award
                  </h3>
                  <span className="text-sm text-gray-500">2019</span>
                </div>
                <p className="text-gray-600 mb-1">American Heart Association</p>
                <p className="text-sm text-gray-500">
                  For outstanding contributions to patient care and outcomes
                </p>
              </div>

              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Distinguished Teacher Award
                  </h3>
                  <span className="text-sm text-gray-500">2017</span>
                </div>
                <p className="text-gray-600 mb-1">University Medical Center</p>
                <p className="text-sm text-gray-500">
                  For excellence in teaching medical residents and fellows
                </p>
              </div>

              <div className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Research Innovation Award
                  </h3>
                  <span className="text-sm text-gray-500">2015</span>
                </div>
                <p className="text-gray-600 mb-1">
                  National Medical Research Foundation
                </p>
                <p className="text-sm text-gray-500">
                  For groundbreaking work on minimally invasive cardiac
                  procedures
                </p>
              </div>

              <div className="mb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Top Cardiologist
                  </h3>
                  <span className="text-sm text-gray-500">
                    2021, 2022, 2023
                  </span>
                </div>
                <p className="text-gray-600 mb-1">
                  City Magazine "Best Doctors" Edition
                </p>
                <p className="text-sm text-gray-500">
                  Peer-selected as one of the top cardiologists in the region
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
