import * as React from "react";

const SummaryCard: React.FC<{
  title: string;
  description: string;
  shortDescription?: string;
  icon: React.ReactNode;
  variant: "error" | "warning" | "success" | "info";
}> = ({ title, description, icon, variant, shortDescription }) => {
  return (
    <div className="bg-white px-4 lg:px-6 py-3 lg:py-4 rounded-lg border border-border-default shadow-xs flex-1">
      <div className="flex items-center">
        <div
          className={`lg:w-13 lg:h-13 w-10 h-10 rounded-md flex items-center justify-center ${variant === "error" ? "bg-error text-text-inverse" : variant === "warning" ? "bg-warning text-text-bold" : variant === "success" ? "bg-success text-text-inverse" : "bg-info text-text-inverse"}`}
        >
          {icon}
        </div>
        <div className="pl-3 lg:pl-4">
          <div className="lg:text-h3 text-subtitle-2 font-semibold text-text-default">
            {title}
          </div>
          <p className="text-body-2 text-text-default hidden lg:block">
            {description}
          </p>
          {shortDescription ? (
            <p className="text-caption-1 block lg:hidden text-text-default">
              {shortDescription}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
