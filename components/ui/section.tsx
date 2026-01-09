import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, id, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                id={id}
                className={cn("py-20 md:py-32 relative overflow-hidden", className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
