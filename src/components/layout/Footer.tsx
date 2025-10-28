import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Dr. John Matthews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
