import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export function ButtonWithIcon({ icon: Icon, label, onClick, disabled }) {
  return (
    <Button onClick={onClick} disabled={disabled} className="w-full bg-primary flex items-center justify-center">
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
}
