
interface CertificationListProps {
  delay: number;
}

export const CertificationList = ({ delay }: CertificationListProps) => {
  return (
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
      <h4 className="heading-sm">Certifications</h4>
      <div className="text-sm text-muted-foreground mb-2">Professional Development</div>
      <ul className="text-muted-foreground list-disc pl-4 space-y-1">
        <li>AWS Certified Developer Associate</li>
        <li>Professional Scrum Master I (PSM I)</li>
        <li>MongoDB Certified Developer</li>
        <li>Google Cloud Platform Fundamentals</li>
      </ul>
    </div>
  );
};
