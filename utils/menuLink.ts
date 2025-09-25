type NavLink = {
  name: string
  path: string
  requireAdmin?: boolean
}

export const menuLink: NavLink[] = [
  { path: "/", name: "Home" },
  { path: "/configs", name: "Configs" },
  { path: "/logsTable", name: "LogsTable" },
  { path: "/temperature", name: "Temperature" },
]