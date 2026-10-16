export interface ChecklistItem {
  label: string;
  done: boolean;
  note?: string;
}

// The progress bar is just done / total, so adding or ticking items updates it.
export const checklist: ChecklistItem[] = [
  { label: "Set up ClickHouse", done: false },
  { label: "Set up a queue", done: false },
  { label: "Create a query API", done: false },
  { label: "Set up a control API", done: false },
  { label: "Set up a scheduling and email service", done: false },
  { label: "Create and migrate to new SQL", done: false },
  { label: "Create Simple Analytics components", done: false },
  { label: "Create dashboard", done: false },
  { label: "Create CLI tool", done: false },
  { label: "Create skills", done: false },
  { label: "Kill Elasticsearch", done: false },
];
