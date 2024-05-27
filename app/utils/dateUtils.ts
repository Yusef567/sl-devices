import { format, formatDistanceToNow } from "date-fns";

export const formatRelativeTime = (timestamp: string) => {
  const date = new Date(timestamp);
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatDate = (isoString: string) => {
  return format(new Date(isoString), "dd/MM/yyyy HH:mm");
};
