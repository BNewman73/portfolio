"use client";

import {
  NoSymbolIcon,
  ChatBubbleBottomCenterIcon,
  BriefcaseIcon,
  GlobeAmericasIcon,
  ForwardIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
  CodeBracketSquareIcon,
  MapIcon,
  PhoneIcon,
  SparklesIcon,
  ArrowPathIcon,
  CalculatorIcon,
  FingerPrintIcon,
  PencilSquareIcon,
  AdjustmentsHorizontalIcon,
  CursorArrowRaysIcon,
  BellIcon,
  LockClosedIcon,
  CircleStackIcon,
  CloudIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  WrenchIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/20/solid";
import Project from "./project";

const projects = [
  {
    path: "vanguard-ai-assistant",
    title: "Enterprise Multi-Agent AI Assistant",
    descriptions: [
      "Multi-agent AI assistant for Vanguard with Python – LangGraph for orchestration, LangChain for provider abstraction, ChromaDB for vector storage, and a Python-native MCP server for tool exposure. Built to demonstrate the three foundational patterns of production LLM application: agent orchestration, RAG, and tool use. ",
    ],
    features: [
      {
        name: "RAG (Retrieval Augmented Generation)",
        description:
          "End-to-end RAG pipeline ingesting and indexing internal knowledge base into ChromaDB for top-k retrieval grounding internal support agent. ",
        icon: BookOpenIcon,
      },
      {
        name: "Custom MCP Server",
        description:
          "Tools including web search, email sending, jira ticket creation, and audit logging exposed through local custom mcp server built with FastMCP.",
        icon: WrenchIcon,
      },
      {
        name: "Converstaion History Management",
        description:
          "Implemented an n-turn conversation history manager with summarization-based trimming to fit within the model context window ",
        icon: ChatBubbleLeftRightIcon,
      },
    ],
    images: ["/vanguard/vanguard-langsmith-chat.png"],
  },
  {
    path: "hrs",
    wideLayout: true,
    title: "Stock Portfolio Analytics Platform",
    descriptions: [
      "Built a comprehensive financial analytics platform providing portfolio performance evaluation, market trend analysis, and retirement forecasting capabilities using over a decade of historical OHLCV market data.",
    ],
    features: [
      {
        name: "Data Visualization",
        description:
          "Developed an Angular frontend featuring interactive candlestick charts, portfolio dashboards, analytics summaries, and light/dark mode theming. ",
        icon: CloudIcon,
      },
      {
        name: "Projection Forecast",
        description:
          "Implemented a deterministic Buy/Sell/Hold recommendation engine drawing on return calculations, volatility metrics, trend analysis, and drawdown evaluation. ",
        icon: CurrencyDollarIcon,
      },
      {
        name: "Cloud Deployment",
        description:
          "Deployed backend services on Amazon EKS within a secure VPC architecture and hosted frontend with S3 and CloudFront. ",
        icon: CloudIcon,
      },
    ],
    images: [
      "/fidelity/delta-tool.png",
      "/fidelity/moving-averages.png",
      "/fidelity/tickers.png",
      "/fidelity/ben.png",
      "/fidelity/buy.png",
      "/fidelity/portfolio-dashboard.png",
      "/fidelity/historical-bootstrap.png",
      "/fidelity/holdings.png",
      "/fidelity/recommendation-details.png",
      "/fidelity/projection-details.png",
      "/fidelity/monte-carlo.png",
    ],
  },
  {
    path: "hrs",
    title: "Storm Stay",
    wideLayout: true,
    descriptions: [
      "A hotel reservation platform supporting role-based access control. Administrators efficiently manage rooms and reservations, track key performance metrics, and view transaction history. Guests seamlessly navigate room openings, simulate secure booking workflows, and manage existing and past reservations.",
    ],
    features: [
      {
        name: "Cloud Deployment",
        description:
          "Containerized and deployed within AWS infrastructure to ensure scalability and reliability. ",
        icon: CloudIcon,
      },
      {
        name: "Stripe Integration",
        description:
          "Integrated Stripe API to simulate payment transactions, confirmations, and refund processing. ",
        icon: CurrencyDollarIcon,
      },
      {
        name: "Authentication and Authorization",
        description:
          "Integrated Spring Security with OAuth2 to enforce secure, multi-role authentication and authorization ",
        icon: LockClosedIcon,
      },
    ],
    images: [
      "/hrs/hrs-admin-dashboard-filter.png",
      "/hrs/hrs-admin-dashboard-details.png",
      "/hrs/hrs-admin-reservations.png",
      "/hrs/hrs-admin-blocks.png",
      "/hrs/hrs-users.png",
      "/hrs/hrs-metrics.png",
      "/hrs/hrs-transactions.png",
      "/hrs/hrs-landing.png",
      "/hrs/hrs-available-rooms.png",
      "/hrs/hrs-calendar-booking.png",
      "/hrs/hrs-stripe.png",
      "/hrs/hrs-cancel-reservation.png",
    ],
  },
  {
    path: "prayer",
    title: "Prayers",
    descriptions: [
      "A full-stack Next.js application that enables users to create, share, and manage prayer requests within a supportive community. The platform features secure user authentication, personal prayer management, a community dashboard for browsing public requests, and privacy controls including anonymous posting options.",
    ],
    features: [
      {
        name: "User Authentication.",
        description:
          "Secure signup/login system with NextAuth.js and bcrypt password hashing.",
        icon: LockClosedIcon,
      },
      {
        name: "Prayer Request Management.",
        description:
          "Create, edit, and organize personal prayer requests with titles, descriptions, and tags.",
        icon: PencilSquareIcon,
      },
      {
        name: "Robust Database Design.",
        description:
          "Well-structured PostgreSQL schema with Zod type validation and automatic timestamp management using database triggers.",
        icon: CircleStackIcon,
      },
    ],
    images: [
      "/prayer/dashboard-copy.png",
      "/prayer/sign-up-copy.png",
      "/prayer/profile-copy.png",
      "/prayer/create-copy.png",
    ],
  },
  {
    path: "personal-website",
    title: "'About Me' Game",
    descriptions: [
      "This project presents a creative approach to a personal portfolio website by combining traditional web development with game-like elements. Instead of a static resume, visitors explore an interactive 2D world where they can learn about myself through engaging gameplay mechanics",
    ],
    images: [
      "/about/greeting-copy.png",
      "/about/school-outside-copy.png",
      "/about/police-dialogue-copy.png",
      "/about/hospital-inside-copy.png",
    ],
    features: [
      {
        name: "No Frameworks.",
        description:
          "Demonstrates vanilla JS mastery with object-oriented design, Canvas API rendering, and collision detection.",
        icon: NoSymbolIcon,
      },
      {
        name: "Dynamic Dialogue System.",
        description:
          "Conversations with NPCs reveal portfolio information through engaging gameplay rather than traditional text.",
        icon: ChatBubbleBottomCenterIcon,
      },
      {
        name: "Game World.",
        description:
          "Custom-built game engine with character-driven exploration through multiple environments (city, school, hospital, etc.).",
        icon: GlobeAmericasIcon,
      },
      {
        name: "Asset Management.",
        description:
          "Organized sprite library with animations for characters, vehicles, and environments at multiple resolutions.",
        icon: BriefcaseIcon,
      },
    ],
  },
  {
    path: "chess-cli",
    title: "Chess Engine",
    descriptions: [
      "A command-line chess engine written in Go featuring minimax search with alpha-beta pruning and position evaluation using piece-square tables. The engine provides an interactive CLI for making moves and computer analysis.",
    ],
    features: [
      {
        name: "Efficient Game State Representation.",
        description:
          "Bitboard representation for efficient board state management.",
        icon: ForwardIcon,
      },
      {
        name: "Efficient Search Algorithm.",
        description: "Minimax search algorithm with alpha-beta pruning.",
        icon: MagnifyingGlassIcon,
      },
      {
        name: "Accurate Position Evaluation.",
        description:
          "Piece-square table evaluation with tapered endgame values.",
        icon: ScaleIcon,
      },
      {
        name: "Full Functionality.",
        description:
          "Interactive accompanying command-line interface and checkmate/stalemate detection.",
        icon: CodeBracketSquareIcon,
      },
    ],
    images: [
      "/chess/greeting-alt.png",
      "/chess/e2e4-alt.png",
      "/chess/Nb8-c6-alt.png",
      "/chess/checkmate-alt.png",
    ],
  },
  {
    path: "bible-tui",
    title: "Bible CLI",
    descriptions: [
      "A beautiful command-line Bible reader built in Go that provides an intuitive terminal-based interface for browsing and reading scripture. This application leverages the Charm UI libraries to create a polished text-user-interface experience.",
    ],
    features: [
      {
        name: "Hierarchical Navigation.",
        description:
          "Navigate through Old/New Testament → Book → Chapter → Verse with an intuitive menu system.",
        icon: MapIcon,
      },
      {
        name: "Real-Time Bible API Integration.",
        description: "Fetches verses from bible-api.com with KJV translation.",
        icon: PhoneIcon,
      },
      {
        name: "Elegant Design.",
        description:
          "Fully styled components with colors, breadcrumbs, and adaptive text wrapping.",
        icon: SparklesIcon,
      },
      {
        name: "ELM Architecture.",
        description:
          "Model, view, update interactive state management pattern. ",
        icon: ArrowPathIcon,
      },
    ],
    images: [
      "/bible/books-copy.png",
      "/bible/chapters-copy.png",
      "/bible/verses-copy.png",
      "/bible/verse-copy.png",
    ],
  },
  {
    path: "Breakout",
    title: "Breakout",
    descriptions: [
      "A modern recreation of the classic Breakout arcade game built with React and Vite. This interactive browser game demonstrates advanced React concepts including state management, collision detection, and real-time game physics.",
    ],
    features: [
      {
        name: "Real-Time Physics.",
        description:
          "Smooth ball movement and collision detection with walls, paddle, and bricks",
        icon: CalculatorIcon,
      },
      {
        name: "Interactive Controls.",
        description: "Responsive paddle movement using arrow keys",
        icon: FingerPrintIcon,
      },
      {
        name: "Game State Management.",
        description:
          "Complete game flow with start, playing, won, and lost states",
        icon: PencilSquareIcon,
      },
    ],
    images: [
      "/breakout/start-copy.png",
      "/breakout/early-copy.png",
      "/breakout/late-copy.png",
      "/breakout/lose-copy.png",
    ],
  },
  {
    path: "minesweeper-react",
    title: "Minesweeper",
    descriptions: [
      "A fully-featured Minesweeper game built with React and styled with Tailwind CSS. This implementation recreates the classic Windows Minesweeper experience with modern web technologies.",
    ],
    features: [
      {
        name: "Three Difficulty Levels.",
        description:
          "Beginner (9x9, 10 mines), Intermediate (16x16, 40 mines), and Expert (16x30, 99 mines).",
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Classic Gameplay.",
        description:
          "Left-click to reveal, right-click to flag, with smart mine generation ensuring safe first clicks.",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "Full Functionality.",
        description:
          "Auto reveal algorithm with flood-fill reveals connected empty cells automatically. Real-time timer and mine counter with visual status feedback.",
        icon: BellIcon,
      },
    ],
    images: [
      "/ms-react/beginner.png",
      "/ms-react/flag.png",
      "/ms-react/lose.png",
      "/ms-react/intermediate.png",
    ],
  },
];

export default function Projects() {
  return (
    <div id="projects">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}
