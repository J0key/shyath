import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { button } from 'framer-motion/client';


const FooterLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shyrath3104',
  },
  {
    title: 'Email',
    href: 'mailto:shyray3545@gmail.com',
  },
  {
    title: 'Phone',
    href: 'http://wa.me/+62895341793697',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/shy.ath/',
  },
]

export const FooterSection = () => {
  return (
    <footer className='relative overflow-x-clip' id='contacts'>
      <div className="container">
        <div className="flex border-t border-white/15 py-6 text-sm flex-col md:flex-row md:justify-between items-center gap-8">
          <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {FooterLinks.map((link) => (
              <a key={link.title} href={link.href} className="inline-flex items-center gap-1.5" target='_blank'>
                <span className='font-semibold'>{link.title}</span>
                {/* Temporarily remove the icon for testing */}
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
