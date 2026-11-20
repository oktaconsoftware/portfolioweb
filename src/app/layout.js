
import "./globals.css";

export const metadata = {
  title: "Onkar Charate - Portfolio",
  description: "This is my personal portfolio website where I showcase my skills, projects, and experience in web development and software engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
