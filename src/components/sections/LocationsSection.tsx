import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: 1,
    name: "Main Medical Plaza",
    address: "123 Medical Plaza, Suite 200, New York, NY 10001",
    phone: "(123) 456-7890",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    mapUrl: "https://maps.google.com/?q=123+Medical+Plaza,New+York,NY",
    days: [
      { day: "Monday", hours: "8:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
      { day: "Friday", hours: "8:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  {
    id: 2,
    name: "Downtown Medical Center",
    address: "456 Central Ave, Floor 3, New York, NY 10002",
    phone: "(123) 456-7891",
    hours: "Tue & Thu: 9:00 AM - 4:00 PM",
    mapUrl: "https://maps.google.com/?q=456+Central+Ave,New+York,NY",
    days: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "9:00 AM - 4:00 PM" },
      { day: "Wednesday", hours: "Closed" },
      { day: "Thursday", hours: "9:00 AM - 4:00 PM" },
      { day: "Friday", hours: "Closed" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  {
    id: 3,
    name: "Westside Cardiology Center",
    address: "789 West Boulevard, New York, NY 10003",
    phone: "(123) 456-7892",
    hours: "Mon & Wed: 10:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com/?q=789+West+Boulevard,New+York,NY",
    days: [
      { day: "Monday", hours: "10:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "Closed" },
      { day: "Friday", hours: "Closed" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
];

export default function LocationsSection() {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Consultation Locations
        </h2>
        <div
          className="w-20 h-1 bg-medical-500 mx-auto mb-6"
          style={{ marginBottom: "80px" }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                    location.address
                  )}`}
                  className="w-full h-full"
                  loading="lazy"
                  title={`Map showing ${location.name}`}
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                  {location.name}
                </h3>

                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-medical-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{location.address}</p>
                </div>

                <div className="flex items-start mb-3">
                  <Phone className="h-5 w-5 text-medical-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{location.phone}</p>
                </div>

                <div className="flex items-start mb-3">
                  <Clock className="h-5 w-5 text-medical-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{location.hours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
