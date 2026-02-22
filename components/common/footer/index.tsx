import IconButton from "@/components/ui/icon-button";
import Logo from "@/components/ui/logo";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const FOOTER_LINKS = [
  {
    heading: "Platform",
    links: [
      { label: "Courses", href: "#" },
      { label: "Paths", href: "#" },
      { label: "Community", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    id: "twitter",
    label: "Twitter",
    href: "#",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "#",
    icon: <Linkedin className="w-5 h-5" />,
  },

  {
    id: "instagram",
    label: "Instagram",
    href: "#",
    icon: <Instagram className="w-5 h-5" />,
  },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border-default bg-white w-full"
      role="contentinfo"
    >
      <div className="mx-auto container px-4 pt-4 lg:pt-12 pb-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 ">
          <div className="flex flex-col gap-2 lg:gap-4">
            <Logo className="w-[120px] lg:w-[140px]" />
            <p className="max-w-max lg:max-w-xs text-body-2  text-text-default">
              Accelerate your career with hands-on courses taught by industry
              experts.
            </p>

            <div className="flex items-center gap-0 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.id}
                  variant="ghost"
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-y-6 lg:gap-y-4 lg:gap-4">
            {FOOTER_LINKS.map((group) => (
              <nav key={group.heading} aria-label={`${group.heading} links`}>
                <h3 className="mb-4 text-body-2 font-medium text-text-bold">
                  {group.heading}
                </h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-body-2 text-text-default hover:underline transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-default pt-3 lg:pt-6 sm:flex-row">
          <p className="text-caption-2 text-text-default">
            &copy; {new Date().getFullYear()} CodeNest. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-caption-2 text-text-default hover:underline transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
