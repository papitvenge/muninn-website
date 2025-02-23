import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/contact", label: t('nav.contact') }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.a 
              className="text-2xl font-bold text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="link"
              aria-label="Go to homepage"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.location.href = '/';
                }
              }}
            >
              Muninn
            </motion.a>
          </Link>

          <div className="flex items-center space-x-8">
            <div 
              className="hidden md:flex space-x-8"
              role="menubar"
              aria-label="Main menu"
            >
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.a
                    className={`text-sm font-medium cursor-pointer ${
                      location === link.href 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    role="menuitem"
                    tabIndex={0}
                    aria-current={location === link.href ? "page" : undefined}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.location.href = link.href;
                      }
                    }}
                  >
                    {link.label}
                  </motion.a>
                </Link>
              ))}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Change language"
                >
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                role="menu"
                aria-label="Language selection"
              >
                <DropdownMenuItem 
                  onClick={() => changeLanguage('nb')}
                  role="menuitem"
                  aria-label="Switch to Norwegian"
                  aria-current={i18n.language === 'nb'}
                >
                  <span className={i18n.language === 'nb' ? 'text-primary font-medium' : ''}>
                    Norsk
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => changeLanguage('en')}
                  role="menuitem"
                  aria-label="Switch to English"
                  aria-current={i18n.language === 'en'}
                >
                  <span className={i18n.language === 'en' ? 'text-primary font-medium' : ''}>
                    English
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}