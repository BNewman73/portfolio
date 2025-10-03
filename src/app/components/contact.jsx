import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 pt-20 max-w-6xl">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Button size="lg" asChild>
            <a href="mailto:bcnewman73@gmail..com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/BNewman73"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/bcnewman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
