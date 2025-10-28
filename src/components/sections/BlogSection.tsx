import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PlayCircle, FileText } from "lucide-react";

const blogPosts = [
  {
    type: "article",
    title: "Understanding Heart Health: Prevention is Key",
    excerpt: "Learn about the essential steps to maintain a healthy heart and prevent cardiovascular diseases through lifestyle modifications.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Prevention",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
  },
  {
    type: "video",
    title: "What to Expect During a Cardiac Catheterization",
    excerpt: "A comprehensive video guide explaining the cardiac catheterization procedure, preparation, and recovery process.",
    date: "2024-03-10",
    readTime: "8 min watch",
    category: "Procedures",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop"
  },
  {
    type: "article",
    title: "Managing Hypertension: A Patient's Guide",
    excerpt: "Practical tips and medical insights on controlling high blood pressure and reducing cardiovascular risk factors.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Management",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop"
  },
  {
    type: "video",
    title: "Heart-Healthy Diet: Expert Recommendations",
    excerpt: "Nutritional guidance and meal planning strategies to support cardiovascular health and overall wellness.",
    date: "2024-02-28",
    readTime: "10 min watch",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop"
  },
  {
    type: "article",
    title: "Recognizing Warning Signs of Heart Attack",
    excerpt: "Critical information about heart attack symptoms and when to seek immediate medical attention.",
    date: "2024-02-20",
    readTime: "4 min read",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&h=500&fit=crop"
  },
  {
    type: "video",
    title: "Exercise Guidelines for Cardiac Patients",
    excerpt: "Safe and effective exercise recommendations tailored for individuals with heart conditions.",
    date: "2024-02-15",
    readTime: "12 min watch",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Articles & Educational Content
        </h2>
        <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Stay informed with expert insights, patient education resources, and the latest updates in cardiovascular care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-white/90 text-gray-900"
                  >
                    {post.category}
                  </Badge>
                </div>
                {post.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                )}
              </div>
              
              <CardHeader className="flex-grow">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                  {post.type === "article" ? (
                    <FileText className="h-4 w-4" />
                  ) : (
                    <PlayCircle className="h-4 w-4" />
                  )}
                  <span className="capitalize">{post.type}</span>
                </div>
                <CardTitle className="text-lg leading-tight mb-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-medical-600 hover:text-medical-700">
                  {post.type === "video" ? "Watch" : "Read"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
