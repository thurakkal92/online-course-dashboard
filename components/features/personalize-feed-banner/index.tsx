"use client";

import Badge from "@/components/ui/badge";
import Chip from "@/components/ui/chip";
import {
  Code2 as Code,
  DatabaseBackup,
  Database,
  Settings2,
  PlusIcon,
  PlusCircle,
} from "lucide-react";
import { useCallback, useState } from "react";

const TOPICS = [
  { label: "Frontend", icon: Code },
  { label: "AI & ML", icon: Code },
  { label: "Cybersecurity", icon: DatabaseBackup },
  { label: "Database", icon: Database },
  { label: "Java", icon: Database },
  { label: "DevOps", icon: Code },
  { label: "Backend", icon: Code },
  { label: "Machine learning", icon: Settings2 },
];

function PersonalizeFeedBanner() {
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(
    new Set(["Frontend", "Machine learning"]),
  );

  const toggleTopic = useCallback((topic: string) => {
    setSelectedTopics((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(topic)) {
        newSet.delete(topic);
      } else {
        newSet.add(topic);
      }

      return newSet;
    });
  }, []);

  return (
    <div className="py-4 px-6 rounded-lg bg-white border border-border-default shadow-xs">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-text-default text-body-1 font-semibold lg:text-subtitle-1 line-clamp-1">
            Personalize your feed
          </h2>
          <p className="text-text-default text-caption-1 lg:text-body-2 line-clamp-1">
            Select topics you are interested in
          </p>
        </div>
        <div className="hidden lg:block">
          {selectedTopics.size > 0 && (
            <Badge text={`${selectedTopics.size} selected`} />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 flex-wrap">
        {TOPICS.map(({ label, icon: Icon }) => (
          <Chip
            key={label}
            leftIcon={<Icon className="w-6 h-6" />}
            text={label}
            selected={selectedTopics.has(label)}
            onClick={() => toggleTopic(label)}
          />
        ))}
        <Chip
          leftIcon={<PlusCircle className="w-5 h-5" />}
          text="Select more"
        />
      </div>
    </div>
  );
}

export default PersonalizeFeedBanner;
