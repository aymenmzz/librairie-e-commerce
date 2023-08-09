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
  const notSelectedClass = noHover ? "" : "link";
  const selectedClass = selected ? "selected" : notSelectedClass;
  return (
    <Link href={href}>
      <a className={`pointer ${selectedClass} `} style={style}>
        {children}
      </a>
    </Link>
  );
}
