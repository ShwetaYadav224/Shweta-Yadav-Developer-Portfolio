import useTheme from "../../hooks/theme/useTheme";
function ThemeToggle(){
    const {theme,toggleTheme}=useTheme()
    return(
         <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
    )
}
export default ThemeToggle
