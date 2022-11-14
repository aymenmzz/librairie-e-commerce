import { toast } from "react-toastify";

export default function BoutonAjouter({ amount, increment, titre }) {
  const alertWhenTooMuch = () =>
    toast.error(`Vous avez atteint le maximum d'exemplaires pour ${titre}.`);

  return (
    <button
      style={{ marginRight: 5 }}
      onClick={amount < 20 ? increment : alertWhenTooMuch}
    >
      +
    </button>
  );
}
