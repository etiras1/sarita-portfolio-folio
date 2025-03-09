
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay: number;
}

export const ExperienceCard = ({ title, company, period, description, delay }: ExperienceCardProps) => {
  return (
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
      <h4 className="heading-sm">{title}</h4>
      <div className="text-sm text-muted-foreground mb-2">{company} • {period}</div>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
