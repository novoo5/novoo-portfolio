'use client'
import dynamic from 'next/dynamic'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

type SkillsProps = {
  skills: { name: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r">
      <div className="flex gap-4 lg:gap-8">
        {skills.map(({ name }, index) => (
          <span
            key={index}
            className="text-primary-content bg-accent/10 border border-accent/30 rounded-lg px-6 py-3 text-sm lg:text-base hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
            {name}
          </span>
        ))}
      </div>
    </MarqueeWrapper>
  )
}

export default Skills
