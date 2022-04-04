export default function Header() {
  const navigation = [
    {
      name: "Home",
      href: "/",
      actual: false,
    },
    {
      name: "About Me",
      href: "/AboutMe",
      actual: false,
    },
    {
      name: "Projects",
      href: "/Portafoli",
      actual: false,
    },
  ];

  return (
    <div className="bg-black text-white hover:bg-white hover:text-black ">
      <div className="flex sm:justify-between">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              (item.actual
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white ",
              "px-3 py-2 rounded-md text-sm font-medium")
            }
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
