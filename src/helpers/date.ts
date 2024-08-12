import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

const timeAgo = (date: Date) => {
  return formatDistanceToNow(new Date(date), {
    locale: fr,
    includeSeconds: true,
  });
};

export { timeAgo };
