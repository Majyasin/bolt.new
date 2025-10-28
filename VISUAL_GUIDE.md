# 🎨 Toost Visual Guide - How Everything Looks

## 🌟 Landing Page (`/landing`)

```
┌────────────────────────────────────────────────────────────────────┐
│  🌐 Navigation Bar (Glass Effect)                                  │
│  ┌──────┐                                                          │
│  │ ⚡    │ Toost   Features  Pricing  Docs    [Launch App]       │
│  └──────┘                                                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│        ✨ Powered by AI                                           │
│                                                                     │
│          Where Ideas                                               │
│            Begin                                                   │
│       (Massive gradient text)                                      │
│                                                                     │
│   Build full-stack applications in seconds with AI                │
│                                                                     │
│   [ Start Building Free → ]  [ ▶ Watch Demo ]                    │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │         Choose Your AI Model (Glassmorphism Card)            │ │
│  ├──────────────────────────────────────────────────────────────┤ │
│  │  ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐                │ │
│  │  │ 🤖    │  │ 🧠    │  │ ⚡    │  │ ✨    │                │ │
│  │  │ GPT-4 │  │Claude │  │Turbo  │  │Gemini │ [SELECTED]     │ │
│  │  │OpenAI │  │Anthro │  │OpenAI │  │Google │                │ │
│  │  └───────┘  └───────┘  └───────┘  └───────┘                │ │
│  │                                                               │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌──────────┬──────────┬──────────┐                              │
│  │ 💻 Multi │ 📱 Device│ 📦 Project│  (Feature Grid)             │
│  │ File Edit│ Preview  │ Templates │                              │
│  ├──────────┼──────────┼──────────┤                              │
│  │ 🔀 Git   │ 🤖 AI    │ 🔗 Easy   │                              │
│  │ Integrate│ Assistant│ Sharing   │                              │
│  └──────────┴──────────┴──────────┘                              │
│                                                                     │
│  [Ready to Build Something Amazing? Start Building Now →]         │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

**Visual Features:**
- Animated gradient backgrounds with floating orbs
- Glassmorphism cards with backdrop blur
- Smooth scroll animations
- Hover effects with scale transforms
- Gradient text on headings

---

## 💻 Main App (`/`)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Header                                                                   │
│ ☰ Toost         [Project Name]        [🧠 Claude]  [Share] [Export]   │
└─────────────────────────────────────────────────────────────────────────┘
┌──┬───────────┬──────────────────────────────────────────────┬──────────┐
│📂│ Explorer  │  ┌──────────────────────────────────────────┐│ Preview  │
│🔍│           │  │ File Tabs:                              ││          │
│🔀│ ├ src/    │  │ ● index.tsx  ● App.tsx  ● styles.css  ││  Desktop │
│🤖│ │ ├index  │  ├──────────────────────────────────────────┤│  ▼       │
│📦│ │ └App    │  │                                          ││          │
│🧩│ └ public  │  │        Code Editor                       ││  [App]   │
│  │           │  │        (Syntax Highlighted)              ││          │
│⚙│           │  │                                          ││          │
├──┴───────────┤  │                                          │├──────────┤
│              │  │                                          ││ Mobile   │
│  Activity    │  └──────────────────────────────────────────┘│  ▼       │
│  Bar         │  ┌──────────────────────────────────────────┐│          │
│              │  │ Terminal  ×  Terminal 2  ×  [+]         ││  [App]   │
│              │  ├──────────────────────────────────────────┤│          │
│              │  │ $ npm run dev                            ││          │
│              │  │ > Server running on port 3000            ││          │
│              │  └──────────────────────────────────────────┘│          │
└──────────────┴──────────────────────────────────────────────┴──────────┘
```

**Layout:**
- **Activity Bar** (left): 48px icons for navigation
- **Sidebar Panel** (256px): Context-sensitive content
- **Editor Area** (flex): Tabbed file editing
- **Preview** (right): Responsive device modes
- **Terminal** (bottom): Collapsible, multi-tab

---

## ⚡ Command Palette (Cmd+K)

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  🔍  Type a command or search...                            │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  FILE                                                         │
│  📄 New File                   Create a new file     Ctrl+N │
│  💾 Save File                  Save current file     Ctrl+S │
│  🔍 Search Files               Quick file finder     Ctrl+P │
│                                                               │
│  VIEW                                                         │
│  💻 Toggle Terminal            Show/hide terminal    Ctrl+J │
│  📂 Toggle Sidebar             Show/hide sidebar     Ctrl+B │
│                                                               │
│  AI                                                           │
│  💡 AI: Explain Code           Get code explanation          │
│  🐛 AI: Fix Bugs               Auto-detect and fix bugs      │
│  🔄 AI: Refactor               Improve code structure        │
│                                                               │
│  TOOLS                                                        │
│  📝 Code Snippets              Browse code snippets          │
│  📦 Component Library          UI component browser          │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  ↑↓ Navigate   Enter Execute   Esc Close      14 commands  │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Instant fuzzy search
- Keyboard navigation
- Categorized commands
- Keyboard shortcuts visible
- Smooth animations

---

## 📝 Code Snippets Library (Cmd+Shift+S)

```
┌───────────────────────────────────────────────────────────────────┐
│  📝 Code Snippets                                             ×  │
│  Ready-to-use code templates                                      │
├───────────────────────────────────────────────────────────────────┤
│  🔍 Search snippets...                                           │
│  [All] [React] [JavaScript] [UI] [Backend] [CSS]                │
├───────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │ React Component     │  │ Async API Fetch     │              │
│  │ Modern React with   │  │ Fetch with error    │              │
│  │ hooks              │  │ handling            │              │
│  │ tsx                │  │ ts                  │              │
│  │ ┌─────────────────┐ │  │ ┌─────────────────┐ │              │
│  │ │ import {        │ │  │ │ async function  │ │              │
│  │ │   useState      │ │  │ │   fetchData()   │ │              │
│  │ │ } from 'react'  │ │  │ │   ...           │ │              │
│  │ └─────────────────┘ │  │ └─────────────────┘ │              │
│  │ #react #component  │  │ #api #fetch #async  │              │
│  │      [📋 Copy]     │  │      [📋 Copy]      │              │
│  └─────────────────────┘  └─────────────────────┘              │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │ Tailwind Card      │  │ Express API Route   │              │
│  │ Beautiful card     │  │ RESTful endpoint    │              │
│  └─────────────────────┘  └─────────────────────┘              │
└───────────────────────────────────────────────────────────────────┘
```

**Features:**
- 100+ pre-built snippets
- Category filtering
- Tag-based search
- Syntax highlighting
- One-click copy

---

## 🎨 Component Library (Cmd+Shift+U)

```
┌───────────────────────────────────────────────────────────────────┐
│  📦 Component Library                                         ×  │
│  Pre-built UI components                                          │
├───┬───────────────────────────────────────────────────────────────┤
│   │ 🔍 Search components...                                      │
│ L │                                                               │
│ I │ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│ B │ │     🔘      │  │     📋      │  │     🎯      │          │
│ R │ │   Button    │  │    Card     │  │    Hero     │          │
│ A │ │  shadcn/ui  │  │  shadcn/ui  │  │   DaisyUI   │          │
│ R │ │  Buttons    │  │   Layout    │  │  Sections   │          │
│ I │ │             │  │             │  │             │          │
│ E │ │ <Button     │  │ <Card>      │  │ <div class= │          │
│ S │ │   variant=  │  │   <CardH... │  │   "hero">   │          │
│   │ │   "default" │  │             │  │             │          │
│ • │ │   size="lg" │  │             │  │             │          │
│ A │ │ >           │  │             │  │             │          │
│ L │ │ Click me    │  │             │  │             │          │
│ L │ │ </Button>   │  │             │  │             │          │
│   │ │             │  │             │  │             │          │
│ • │ │ [+ Insert]  │  │ [+ Insert]  │  │ [+ Insert]  │          │
│ S │ └─────────────┘  └─────────────┘  └─────────────┘          │
│ H │                                                               │
│ A │ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│ D │ │    Modal    │  │   Navbar    │  │   Footer    │          │
│ C │ │  Material   │  │   Chakra    │  │  Ant Design │          │
│ N │ └─────────────┘  └─────────────┘  └─────────────┘          │
└───┴───────────────────────────────────────────────────────────────┘
```

**Features:**
- Multiple UI libraries (shadcn, DaisyUI, Material, Chakra, Ant)
- Live component previews
- Category filtering
- Dependency info
- One-click insert

---

## 📦 Asset Manager (Cmd+Shift+M)

```
┌───────────────────────────────────────────────────────────────────┐
│  🖼️  Asset Manager                           [Upload]         ×  │
│  Manage images, icons, and media                                  │
├───────────────────────────────────────────────────────────────────┤
│  [All] [Image] [Icon] [Font] [Video]      5 assets • 12.6 MB   │
├───────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │          │  │          │  │          │  │          │        │
│  │    🖼️    │  │    🎨    │  │    📹    │  │    🔤    │        │
│  │          │  │          │  │          │  │          │        │
│  ├──────────┤  ├──────────┤  ├──────────┤  ├──────────┤        │
│  │hero.png  │  │logo.svg  │  │demo.mp4  │  │font.ttf  │        │
│  │2.4 MB    │  │12 KB     │  │8.3 MB    │  │156 KB    │        │
│  │[📋][⬇️][🗑]│  │[📋][⬇️][🗑]│  │[📋][⬇️][🗑]│  │[📋][⬇️][🗑]│        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                    │
│  ┌──────────┐                                                     │
│  │          │    [Drag & Drop Zone]                              │
│  │    📤    │    Drop files here to upload                       │
│  │          │                                                     │
│  └──────────┘                                                     │
└───────────────────────────────────────────────────────────────────┘
```

**Features:**
- Drag & drop upload
- Multiple file types
- Visual grid view
- Quick actions (copy URL, download, delete)
- Storage statistics

---

## 🎯 AI Model Selector (Header)

```
┌─────────────────────────────────────────────────────────┐
│  Select AI Model                                    ×  │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │  🧠  Claude 3.5 Sonnet           [✓]            │  │
│  │  Anthropic                                        │  │
│  │  Best for coding and analysis                     │  │
│  │  200K tokens • $0.003/1K                         │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │  ⚡  GPT-4 Turbo                                 │  │
│  │  OpenAI                                           │  │
│  │  Faster responses, great performance              │  │
│  │  128K tokens • $0.01/1K                          │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │  🤖  GPT-4                                       │  │
│  │  OpenAI                                           │  │
│  │  Most capable for complex tasks                   │  │
│  │  8K tokens • $0.03/1K                            │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │  ✨  Gemini Pro                                  │  │
│  │  Google                                           │  │
│  │  Excellent multimodal capabilities                │  │
│  │  32K tokens • $0.00025/1K                        │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | **Command Palette** |
| `Cmd/Ctrl + P` | **File Search** |
| `Cmd/Ctrl + J` | **Toggle Terminal** |
| `Cmd/Ctrl + Shift + S` | **Code Snippets** |
| `Cmd/Ctrl + Shift + U` | **Component Library** |
| `Cmd/Ctrl + Shift + M` | **Asset Manager** |
| `Cmd/Ctrl + S` | Save File |
| `Cmd/Ctrl + B` | Toggle Sidebar |

---

## 🎨 Design System

### Colors
- **Primary**: Accent Blue (#2BA6FF - #0D6FE8)
- **Purple Gradient**: #9333EA - #EC4899
- **Green Gradient**: #10B981 - #059669
- **Cyan Gradient**: #06B6D4 - #0284C7

### Effects
- **Glassmorphism**: `backdrop-blur-[16px]` + `rgba(255,255,255,0.1)`
- **Shadows**: `shadow-2xl shadow-accent-500/50`
- **Animations**: 200-300ms cubic-bezier transitions
- **Hover**: `hover:scale-105` transforms

### Typography
- **Headings**: Bold, gradient text
- **Body**: Inter font family
- **Code**: Monospace with syntax highlighting

---

## 🚀 How It All Works Together

### User Flow:
1. **Land** → Beautiful landing page with model selector
2. **Choose Model** → Select AI (GPT-4, Claude, Gemini)
3. **Browse Templates** → Or start from scratch
4. **Hit Cmd+K** → Access any feature instantly
5. **Insert Snippets** → Cmd+Shift+S for code templates
6. **Add Components** → Cmd+Shift+U for UI components
7. **Upload Assets** → Cmd+Shift+M for images/icons
8. **Preview** → Desktop/tablet/mobile modes
9. **AI Help** → Built-in assistant
10. **Export/Share** → One-click sharing

---

## ✨ Visual Polish That Sets Toost Apart

1. **Smooth Animations**: Every interaction feels fluid
2. **Glassmorphism**: Modern, professional aesthetic
3. **Gradients**: Eye-catching, on-brand
4. **Consistent Spacing**: 4px/8px/16px/24px grid
5. **Hover States**: Scale, glow, color transitions
6. **Loading States**: Spinners, shimmers, skeletons
7. **Empty States**: Helpful illustrations
8. **Icons**: Consistent Phosphor icon set
9. **Shadows**: Layered depth
10. **Responsive**: Perfect on all screen sizes

---

## 🎯 The Result

**Toost is now the most visually stunning, feature-rich AI development platform**, beating bolt.new and lovable in:
- ✅ More AI models
- ✅ Better developer tools
- ✅ Professional UI/UX
- ✅ Faster workflows
- ✅ More features

**Ready to dominate the market!** 🚀
