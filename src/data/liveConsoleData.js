export const activityLogs = [
  {
    time: "09:00:00",
    message:
      "I'll begin systematic penetration testing against the target application. Initial reconnaissance phase started, gathering publicly available information and mapping attack surface.",
  },
  {
    time: "09:01:12",
    message:
      "Target is online. Initiating automated port scanning and service enumeration to identify exposed services, protocols, and potential misconfigurations.",
  },
  {
    time: "09:02:35",
    message:
      "Open ports detected: 80 (HTTP), 443 (HTTPS), and 8080 (Alternate HTTP). Performing banner grabbing and service fingerprinting to determine server technologies.",
  },
  {
    time: "09:03:10",
    message:
      "Discovered authentication endpoint at /api/auth/login. Beginning automated testing for common authentication flaws including credential stuffing and brute-force protection checks.",
  },
  {
    time: "09:04:42",
    message:
      "Crawling application endpoints and extracting parameters from GET and POST requests. Building attack vectors for parameter manipulation and injection attempts.",
  },
  {
    time: "09:06:08",
    message:
      "Running SQL injection payload tests against user input fields including login forms, query parameters, and API endpoints to detect database interaction vulnerabilities.",
  },
  {
    time: "09:07:33",
    message:
      "Authentication flow analysis initiated. Monitoring session cookies, JWT tokens, and response headers for improper validation or session fixation weaknesses.",
  },
];
