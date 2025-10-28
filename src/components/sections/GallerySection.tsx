import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80",
    alt: "Modern cardiac monitoring equipment",
    category: "Facilities",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
    alt: "Doctor's consultation room",
    category: "Facilities",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    alt: "Patient consultation",
    category: "Consultations",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    alt: "Medical team collaboration",
    category: "Team",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    alt: "Advanced cardiac imaging system",
    category: "Facilities",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1599045118538-446f4a3570c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    alt: "Reception area",
    category: "Facilities",
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Gallery
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-medical-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
