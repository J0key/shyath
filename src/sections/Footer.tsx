import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';


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
  return <footer className='relative -z-10 overflow-x-clip' id='contacts'>
      <div className="container">
        <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-cyan-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
        <div className="flex border-t border-white/15 py-6 text-sm flex-col md:flex-row md:justify-between items-center gap-8">
          <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {FooterLinks.map((link) => (
              <a key={link.title} href={link.href} className="inline-flex items-center gap-1.5">
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>;
};
