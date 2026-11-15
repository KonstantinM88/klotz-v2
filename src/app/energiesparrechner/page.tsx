import { permanentRedirect } from "next/navigation";

export default function EnergyCalculatorLegacyPage() {
  permanentRedirect("/konfigurator#energiesparrechner");
}
