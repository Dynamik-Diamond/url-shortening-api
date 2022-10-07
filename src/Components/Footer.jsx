import { footerLogo } from '../assets/images/Index';
import {
  footerLinks,
  socialMediaLinks,
} from '../Constants/data';

const Footer = () => {
  return (
    <footer className="bg-VeryDarkViolet p-6 ">
      <div className="mx-auto flex max-w-6xl flex-col space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
        <article className="mx-auto flex sm:mx-0 sm:items-start">
          <img
            src={footerLogo}
            alt="Shortly"
            className="fill-white"
          />
        </article>
        <nav
          className="flex-col items-center justify-center gap-20 space-y-6 text-center text-white sm:items-start sm:space-y-0  sm:text-left md:flex md:flex-row "
          aria-label="footer"
        >
          {footerLinks.map((footerLink, index) => {
            return (
              <ul
                key={footerLink.title}
                className="list-none "
              >
                <h4 className="pb-4 font-bold ">
                  {footerLink.title}
                </h4>
                {footerLink.links.map((link, index) => {
                  return (
                    <li
                      key={link.linkName}
                      className={`text-Gray hover:text-Cyan ${
                        index ===
                        footerLink.links.length - 1
                          ? 'mb-0'
                          : 'mb-2'
                      }`}
                    >
                      <a href={link.href}>
                        {' '}
                        {link.linkName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </nav>
        {/* social media icons */}
        <ul className="flex items-center justify-center gap-4 sm:items-start ">
          {socialMediaLinks.map((social, index) => {
            return (
              <li key={social.id}>
                <img src={social.icon} alt={social.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
