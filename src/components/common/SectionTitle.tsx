import { cn } from "../../utils/cn";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className }: Props) => {
  return (
    <div className={cn("text-center mb-12 max-w-2xl mx-auto", className)}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-gray-500 mt-6 font-light leading-relaxed italic">
          "{subtitle}"
        </p>
      )}
    </div>
  );
};

export default SectionTitle;