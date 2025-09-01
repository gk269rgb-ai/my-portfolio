import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPost() {
  const { slug } = useParams();

  // ✅ All blog posts
  const posts = [
    {
      slug: "real-time-fault-detection",
      title: "Fault Detection in 220kV Transmission Lines using Deep Learning",
      content: `


In the world of power transmission, fault detection and assessment are critical...  

## Why Deep Learning for Fault Detection?
- Adaptive Learning  
- High Accuracy  
- Real-Time Detection  

## Introducing FaultNet
FaultNet is a 1D-CNN developed for detecting and classifying faults in 11kV and 220kV transmission systems.  

## Tech Stack
- **Python**  
- **TensorFlow/Keras**  
- **MATLAB-Simulink**  
- **Deep Learning**  

## Results & Conclusion
The model achieved high precision and recall across multiple fault types.  
For more details, read my full report on fault detection in 220kV transmission lines.
      `,
    },
    {
      slug: "insomnia-detection-ecg",
      title: "AI for Healthcare: Insomnia Detection from ECG Signals",
      content: `

This research aimed at detecting insomnia through ECG signal patterns using deep learning architectures Vision Transformer (ViT).  
The project highlights how AI can contribute to personalized healthcare diagnostics.  

## Tech Stack
- Python  
- Keras  
- ECG Dataset  
- Deep Learning  
      `,
    },
    {
      slug: "digital-image-processing",
      title: "Digital Image Processing",
      content: `
# 

Implemented various image processing techniques:  

- Image compression  
- Intensity transformations (log, gamma, etc.)  
- Geometric transformations (rotation, shifting)  
- Histogram analysis and equalization  
- Filtering (low-pass and high-pass)  
- Edge detection using gradients  
- Morphological operations (erosion, dilation, opening, closing, etc.)  

## Tech Stack
- Python  
- OpenCV  
- NumPy  
      `,
    },
    {
      slug: "human-following-robot",
      title: "Human Following Robot",
      content: `
#  

Designed and implemented a robot that autonomously follows human movement using:  

- **Computer Vision**  
- **Lidar-based sensing**  
- **AI-based path-tracking algorithms**  

## Key Features
- Real-time tracking  
- Obstacle avoidance  
- Smooth navigation  

## Tech Stack
- Python  
- OpenCV  
- Lidar Sensor  
- Embedded Systems  
      `,
    },
    {
      slug: "home-automation",
      title: "Advanced Home Automation using Wi-Fi & Bluetooth Module",
      content: `


Created a cost-effective smart home automation system using **Bluetooth** and **microcontrollers**.  

- Mobile app control for devices  
- Energy-efficient design  
- Easy scalability for more devices  

## Tech Stack
- Arduino  
- Bluetooth Module  
- Mobile App Integration  
      `,
    },
    {
      slug: "nlp-text-classification",
      title: "Natural Language Processing for Text Classification",
      content: `
 

Implemented ML and DL models for **sentiment analysis** and **document classification**.  

- Compared SVM, Random Forest, CNN, and Transformer-based models.  
- Achieved high accuracy with fine-tuned transformer architecture.  

## Tech Stack
- Python  
- Scikit-learn  
- TensorFlow / Transformers  
      `,
    },
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center mt-10">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* ✅ Breadcrumb */}
      <nav className="flex items-center gap-2 text-gray-600 text-sm mb-6">
        <Link to="/" className="text-teal-600 font-semibold hover:underline">
          🏠 Home
        </Link>
        <span>/</span>
        <Link to="/blog" className="text-teal-600 font-semibold hover:underline">
          Blog
        </Link>
        <span>/</span>
        <span className="text-gray-800">{post.title}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6 text-teal-600">{post.title}</h1>

      {/* ✅ Markdown Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* ✅ Bottom Navigation Buttons */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap">
        <Link
          to="/blog"
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          ← <span>Back to Blog</span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          🏠 <span>Home</span>
        </Link>

        <a
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          🔗 <span>Projects</span>
        </a>
      </div>
    </div>
  );
}

export default BlogPost;
