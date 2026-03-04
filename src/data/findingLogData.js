export const findings = [
  {
    severity: "critical",
    label: "Critical",
    time: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    desc: "Time-based blind SQL injection confirmed during authentication flow.",
  },
  {
    severity: "high",
    label: "High",
    time: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    desc: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    severity: "medium",
    label: "Medium",
    time: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    desc: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
];
