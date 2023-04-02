import { toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

export default function CustomLink({
  href,
  children,
  style,
  noHover,
  selected,
}) {
  const optionToast = { autoClose: 1300 };

  const notifyLoading = () =>
    toast.info(
      "Veuillez patienter, le chargement de la page est en cours...",
      optionToast
    );

  return (
    <Link href={href}>
      <a
        className={`pointer ${selected ? "selected" : !noHover && "link"} `}
        style={style}
        // onClick={notifyLoading}
      >
        {children}
      </a>
    </Link>
  );
}
