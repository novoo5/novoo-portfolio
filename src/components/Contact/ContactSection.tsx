import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Connect</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">Open for Opportunities</h4>
          <p className="text-neutral mt-8">
            Interested in medical AI research, machine learning internships, and healthcare technology collaboration
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:novoobasak@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> novoobasak@gmail.com
          </a>
          <a
            href="tel:+917318782745"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +91 7318782745
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
