interface ServiceCardTypes {
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription }) => {
  return (
    <div className="bg-secondary border-border flex flex-col rounded-[14px] border p-6 hover:border-accent/50 transition-all duration-300">
      <h5 className="text-accent mb-4 text-lg font-semibold">{title}</h5>
      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content text-sm font-normal leading-relaxed">{shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard
