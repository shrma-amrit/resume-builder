import { LOGO_URL } from "../utils/constants";

export default function Header() {
  return (
    <div className="p-2 md:p-4 z-10 h-full bg-gray-50 flex justify-between">
      <img alt="LOGO" src={LOGO_URL}></img>
      <div>{/* Profile tab to be added later */}</div>
    </div>
  );
}
