import Image from 'next/image';
<Image src="public/images/Insurabot1.jpg" alt="AI Insurance Hero" width={500} height={300} className="rounded-lg" />

import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <div className="text-2xl font-bold">AI Insurance Revolution</div>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#features">Features</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <button className="hidden md:block bg-purple-500 px-4 py-2 rounded">Get Started</button>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <h1 className="text-3xl md:text-5xl font-bold">Revolutionize Insurance Accessibility and Trust with AI</h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">Develop an AI-powered humanoid agent that transforms the insurance experience for consumers.</p>
      <img src="public/images/Insurabot1.jpg" alt="AI Insurance Hero" className="mt-6 mx-auto rounded-lg w-full max-w-lg" />
      <button className="mt-6 bg-purple-500 px-6 py-3 rounded">Learn More</button>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl text-center mb-8">Platform Features</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700 p-6 rounded flex flex-col">
          <img src="/images/simplify.jpg" alt="Simplify" className="mb-4 rounded h-32 object-cover" />
          <h3 className="text-xl font-bold">Simplify</h3>
          <p>Provide 24/7, personalized guidance on policy selection and claims via voice, video, or chat.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded flex flex-col">
          <img src="/images/educate.jpg" alt="Educate" className="mb-4 rounded h-32 object-cover" />
          <h3 className="text-xl font-bold">Educate</h3>
          <p>Ensure clear understanding of policy terms and accurate disclosures, fostering trust.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded flex flex-col">
          <img src="/images/streamline.jpg" alt="Streamline" className="mb-4 rounded h-32 object-cover" />
          <h3 className="text-xl font-bold">Streamline</h3>
          <p>Automate form-filling with AI for error-free applications and higher claim acceptance rates.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded flex flex-col">
          <img src="/images/focus-area.jpg" alt="Focus Area" className="mb-4 rounded h-32 object-cover" />
          <h3 className="text-xl font-bold">Focus Area</h3>
          <p>Prioritize building an AI-powered form-filling assistant for immediate impact.</p>
        </div>
      </div>
    </section>
  );
};

// Impact Section Component
const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center mb-8">Our Vision</h2>
      <div className="max-w-2xl mx-auto text-left">
        <p className="text-lg">
          The ideal solution will be user-friendly, promote financial literacy, and significantly enhance insurance penetration and consumer satisfaction.
        </p>
        <p className="mt-4 text-lg">
          Let's use technology to make insurance work for everyone!
        </p>
      </div>
      <img src="/images/impact.jpg" alt="Impact" className="mt-6 mx-auto rounded-lg w-full max-w-lg" />
    </section>
  );
};

// Resources Section Component
const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl text-center mb-8">Resources for Financial Literacy</h2>
      <div className="max-w-4xl mx-auto text-left">
        <p className="mb-4">Explore articles, videos, and interactive content designed to enhance your understanding of insurance.</p>
        <button className="bg-purple-500 px-6 py-3 rounded">View Resources</button>
      </div>
      <img src="/images/resources.jpg" alt="Resources" className="mt-6 mx-auto rounded-lg w-full max-w-lg" />
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto text-left">
        <div className="mb-4">
          <h3 className="font-bold">What is the AI-powered humanoid agent?</h3>
          <p>It's an intelligent assistant that guides users through the insurance process.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">How does it help simplify insurance?</h3>
          <p>By providing personalized guidance and automating complex tasks.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Is the platform user-friendly?</h3>
          <p>Yes, it is designed to be intuitive for users of all backgrounds.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Where can I learn more about financial literacy?</h3>
          <p>Visit our Resources section for guides and educational materials.</p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>&copy; 2024 AI Insurance Revolution. All rights reserved.</p>
    </footer>
  );
};

// Main Home Component
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ImpactSection />
      <ResourcesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}


// export default function Home() {
//   return (
    
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
