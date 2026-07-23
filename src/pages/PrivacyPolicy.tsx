import { useEffect, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import {
  Info, BookOpen, Database, Settings, Cookie, HardDrive,
  Share2, Clock, Shield, Baby, Lock, ExternalLink,
  RefreshCw, Mail, ChevronRight,
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: typeof Info;
}

const sections: Section[] = [
  { id: 'introduction', title: 'Introduction', icon: Info },
  { id: 'definitions', title: 'Interpretation and Definitions', icon: BookOpen },
  { id: 'information-we-collect', title: 'Information We Collect', icon: Database },
  { id: 'how-we-use', title: 'How We Use Information', icon: Settings },
  { id: 'cookies', title: 'Cookies', icon: Cookie },
  { id: 'data-storage', title: 'Data Storage', icon: HardDrive },
  { id: 'data-sharing', title: 'Data Sharing', icon: Share2 },
  { id: 'data-retention', title: 'Data Retention', icon: Clock },
  { id: 'your-rights', title: 'Your Rights', icon: Shield },
  { id: 'childrens-privacy', title: "Children's Privacy", icon: Baby },
  { id: 'data-security', title: 'Data Security', icon: Lock },
  { id: 'external-links', title: 'External Links', icon: ExternalLink },
  { id: 'changes', title: 'Changes to this Privacy Policy', icon: RefreshCw },
  { id: 'contact', title: 'Contact', icon: Mail },
];

export default function PrivacyPolicy() {
  useReveal();
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="absolute top-32 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl" />
              <img
                src="/ChatGPT_Image_Apr_21,_2026,_10_10_59_PM.png"
                alt="Funova Play"
                className="relative h-16 w-16 rounded-2xl object-cover border border-white/20"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Privacy <span className="gradient-text-main">Policy</span>
          </h1>
          <p className="text-white/50 text-sm font-semibold uppercase tracking-wider">
            Last Updated: July 23, 2026
          </p>
        </div>

        {/* Intro paragraph */}
        <div className="max-w-3xl mx-auto mb-12 reveal">
          <div className="glass-card p-8">
            <p className="text-white/60 leading-relaxed text-center">
              At Funova Play, we respect your privacy and are committed to protecting your information.
              This Privacy Policy explains how information may be collected, used, and protected when
              you use our games or visit our website.
            </p>
          </div>
        </div>

        {/* Content with sticky TOC */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky TOC */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <div className="glass-card p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 px-3">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`toc-item flex items-center gap-2 px-3 py-2 text-sm font-semibold text-left ${
                          activeSection === section.id ? 'active' : 'text-white/50'
                        }`}
                      >
                        <Icon size={14} className="flex-shrink-0" />
                        <span className="leading-tight">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 max-w-[850px]">
            {/* Introduction */}
            <Section id="introduction" icon={Info} title="Introduction">
              <p>
                Funova Play ("we," "us," or "our") is an independent game development studio that creates
                games and operates this website. This Privacy Policy describes how information may be
                collected, used, and protected when you interact with our games, applications, or website.
              </p>
              <p>
                By using our games or visiting our website, you agree to the practices described in this
                Privacy Policy. We are committed to being transparent about how we handle information and
                to giving you meaningful choices about how it is used.
              </p>
            </Section>

            {/* Interpretation and Definitions */}
            <Section id="definitions" icon={BookOpen} title="Interpretation and Definitions">
              <h3 className="text-lg font-bold text-white mb-3">Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the
                following conditions. The following definitions shall have the same meaning regardless
                of whether they appear in singular or in plural.
              </p>
              <h3 className="text-lg font-bold text-white mb-3 mt-6">Definitions</h3>
              <ul className="space-y-3">
                <li><strong className="text-white">"Company"</strong> refers to Funova Play.</li>
                <li><strong className="text-white">"Games"</strong> refers to the mobile and web games developed and published by Funova Play.</li>
                <li><strong className="text-white">"Website"</strong> refers to the Funova Play website accessible at our official domain.</li>
                <li><strong className="text-white">"You"</strong> refers to the individual accessing or using our games or website.</li>
                <li><strong className="text-white">"Device"</strong> refers to any device used to access our games or website, such as a computer, tablet, or smartphone.</li>
              </ul>
            </Section>

            {/* Information We Collect */}
            <Section id="information-we-collect" icon={Database} title="Information We Collect">
              <p>
                When you interact with our games or website, we may collect the following personal
                information:
              </p>
              <ul className="space-y-2.5">
                <Bullet>Email address</Bullet>
                <Bullet>First name and last name</Bullet>
              </ul>
              <p className="mt-4">
                We do not intentionally collect sensitive personal information such as government
                identifiers or financial details. If we ever expand our data practices, we will update
                this Privacy Policy and provide clear notice.
              </p>
            </Section>

            {/* How We Use Information */}
            <Section id="how-we-use" icon={Settings} title="How We Use Information">
              <p>
                The information we collect is used to provide and improve our services. Specifically,
                collected information may be used to:
              </p>
              <ul className="space-y-2.5">
                <Bullet>Respond to user inquiries</Bullet>
                <Bullet>Improve website functionality</Bullet>
                <Bullet>Improve user experience</Bullet>
                <Bullet>Maintain security</Bullet>
                <Bullet>Develop future games</Bullet>
              </ul>
            </Section>

            {/* Cookies */}
            <Section id="cookies" icon={Cookie} title="Cookies">
              <p>
                Cookies are small text files placed on your device when you visit a website. They help
                improve the website experience by remembering your preferences and enabling certain
                features. We may use the following types of cookies:
              </p>
              <div className="space-y-4 mt-4">
                <CookieCard
                  title="Essential Cookies"
                  desc="These cookies are necessary for the website to function properly. They enable core features such as security and accessibility. Without them, the website may not work as intended."
                />
                <CookieCard
                  title="Functional Cookies"
                  desc="These cookies allow the website to remember choices you make, such as language or theme preferences, to provide a more personalized experience."
                />
                <CookieCard
                  title="Analytics Cookies"
                  desc="These cookies help us understand how visitors interact with the website by collecting anonymous usage data. This information is used to improve performance and content."
                />
              </div>
              <p className="mt-4">
                You may disable cookies through your browser settings at any time. However, disabling
                cookies may affect the functionality of certain features on the website.
              </p>
            </Section>

            {/* Data Storage */}
            <Section id="data-storage" icon={HardDrive} title="Data Storage">
              <p>
                Information we collect is stored securely on servers and in cloud environments operated
                by trusted service providers. We take reasonable steps to ensure that data is stored only
                for as long as it is needed and is protected against unauthorized access.
              </p>
              <p className="mt-4">
                Depending on the type of information and its purpose, data may be stored locally on your
                device, on our servers, or with third-party service providers who help us operate and
                improve our games and website.
              </p>
            </Section>

            {/* Data Sharing */}
            <Section id="data-sharing" icon={Share2} title="Data Sharing">
              <p>
                We may share information with third parties only when it is necessary to operate our
                games and website. Information may be shared when necessary for:
              </p>
              <ul className="space-y-2.5">
                <Bullet>Operating the website</Bullet>
                <Bullet>Improving services</Bullet>
                <Bullet>Protecting against fraud</Bullet>
                <Bullet>Complying with applicable laws</Bullet>
              </ul>
              <p className="mt-4">
                Funova Play does not sell users' personal information. We do not share your information
                with third parties for their own marketing purposes.
              </p>
            </Section>

            {/* Data Retention */}
            <Section id="data-retention" icon={Clock} title="Data Retention">
              <p>
                We retain information only as long as necessary to provide our services, improve our
                products, resolve disputes, and comply with legal obligations. When information is no
                longer needed, we take reasonable steps to delete it or anonymize it so it can no longer
                be associated with you.
              </p>
              <p className="mt-4">
                The retention period may vary depending on the type of information and the purpose for
                which it was collected. In some cases, we may be required to retain information for
                longer periods to comply with legal or regulatory requirements.
              </p>
            </Section>

            {/* Your Rights */}
            <Section id="your-rights" icon={Shield} title="Your Rights">
              <p>
                You have certain rights regarding the information associated with you. Depending on your
                location, you may be able to request:
              </p>
              <ul className="space-y-2.5">
                <Bullet>Access to information we hold about you</Bullet>
                <Bullet>Correction of inaccurate information</Bullet>
                <Bullet>Deletion of information where applicable</Bullet>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at the email address provided in the
                Contact section below. We will respond to your request within a reasonable timeframe.
              </p>
            </Section>

            {/* Children's Privacy */}
            <Section id="childrens-privacy" icon={Baby} title="Children's Privacy">
              <p>
                Funova Play does not knowingly collect personal information from children. Our games and
                website are designed for a general audience, and we do not intentionally gather data
                from users under the age of 13.
              </p>
              <p className="mt-4">
                If you are a parent or guardian and believe that your child has provided us with personal
                information, please contact us at the email address listed in the Contact section. We will
                take steps to delete such information and take appropriate action.
              </p>
            </Section>

            {/* Data Security */}
            <Section id="data-security" icon={Lock} title="Data Security">
              <p>
                We use reasonable technical and organizational measures to protect the information we
                collect. These measures include secure storage, access controls, and regular reviews of
                our data handling practices.
              </p>
              <p className="mt-4">
                However, no method of internet transmission or electronic storage is completely secure.
                While we strive to protect your information, we cannot guarantee absolute security. We
                encourage you to take steps to protect your own information as well.
              </p>
            </Section>

            {/* External Links */}
            <Section id="external-links" icon={ExternalLink} title="External Links">
              <p>
                Our website may contain links to external websites that are not operated by Funova Play.
                We are not responsible for the content or privacy practices of these external sites.
              </p>
              <p className="mt-4">
                We recommend reviewing the privacy policies of any external websites you visit. This
                Privacy Policy applies only to information collected through our games and website.
              </p>
            </Section>

            {/* Changes to this Privacy Policy */}
            <Section id="changes" icon={RefreshCw} title="Changes to this Privacy Policy">
              <p>
                This Privacy Policy may be updated from time to time to reflect changes in our practices,
                legal requirements, or the features of our games and website. When we make changes, we
                will update the "Last Updated" date at the top of this page.
              </p>
              <p className="mt-4">
                The updated version will always display the latest revision date. We encourage you to
                review this Privacy Policy periodically to stay informed about how we handle information.
              </p>
            </Section>

            {/* Contact */}
            <Section id="contact" icon={Mail} title="Contact">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please reach out to us. We are happy to help.
              </p>
              <div className="glass-card-cyan p-6 mt-4 flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:funovaplay@gmail.com"
                    className="text-lg font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    funovaplay@gmail.com
                  </a>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: typeof Info;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-anchor mb-10 reveal">
      <div className="flex items-center gap-3 mb-5">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-white/10">
          <Icon size={18} className="text-cyan-400" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">{title}</h2>
      </div>
      <div className="glass-card p-6 md:p-8 space-y-4 text-white/60 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <ChevronRight size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

function CookieCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass-card-cyan p-5">
      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
        <Cookie size={16} className="text-cyan-400" />
        {title}
      </h4>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
