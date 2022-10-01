import { useTheme } from "next-themes";
import * as Icon from "@heroicons/react/24/outline";
function Header() {
    const { setTheme, theme } = useTheme();

    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <header className="fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-between border-b border-b-zinc-400 bg-opacity-10 bg-clip-padding px-3 backdrop-blur-sm backdrop-filter dark:border-b-gray-400 sm:px-10 md:px-14 lg:px-20">
            <h2 className="border-b border-gray-400 text-3xl sm:text-4xl md:text-5xl">Maison de la mascotte</h2>
            <div className="grid place-items-center rounded-full transition-transform duration-500 hover:scale-110">
                <button
                    className="rounded-full border bg-white p-2 transition-transform duration-700 hover:rotate-[360deg] dark:border-zinc-800 dark:bg-zinc-900"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <Icon.MoonIcon strokeWidth={1} className="h-6 w-6" /> : <Icon.SunIcon strokeWidth={1} className="h-6 w-6" />}
                </button>
            </div>
        </header>
    );
}

export default Header;
