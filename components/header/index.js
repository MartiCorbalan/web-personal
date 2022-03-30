export default function Header() {
  const navigation = [
    {
      name: "Home",
      href: "/",
      actual: false,
    },
    {
      name: "About Me",
      href: "/about",
      actual: false,
    },
    {
      name: "Projects",
      href: "/projects",
      actual: false,
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex sm:justify-between">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              (item.actual
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
