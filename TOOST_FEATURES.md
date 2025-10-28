# Toost - AI-Powered Development Platform

## 🚀 The Ultimate bolt.new/lovable Alternative with Superior UX

Toost is a next-generation AI-powered development platform that combines cutting-edge AI with an in-browser development environment. Built with better UX, more features, and modern design principles.

---

## ✨ Key Features

### 1. **Enhanced UI/UX with Modern Design** ✅
- **Glassmorphism Effects**: Beautiful frosted glass aesthetics throughout the interface
- **Smooth Animations**: Fade-in, scale, slide animations for all interactions
- **Gradient Branding**: Eye-catching gradient text for the Toost logo and headings
- **Hover Effects**: Interactive lift effects, glows, and transitions
- **Shimmer & Pulse**: Loading states with modern animations
- **Responsive Design**: Optimized for all screen sizes

**Location**: `app/styles/animations.scss`, `app/styles/variables.scss`

---

### 2. **Multi-File Editing with Tabs** ✅
- **File Tabs**: Open and switch between multiple files seamlessly
- **Visual Indicators**: Unsaved changes marked with colored dots
- **Easy Management**: Close tabs with one click
- **Persistent State**: Tabs survive page refreshes
- **Smart Selection**: Auto-focus on newly opened files

**Components**: `app/components/workbench/FileTabs.tsx`, `app/lib/stores/workbench.ts`

---

### 3. **Project Templates** ✅
12 Pre-built templates for popular frameworks:
- **Next.js 14** with App Router
- **React + Vite**
- **Vue 3** with Composition API
- **Astro** for static sites
- **SvelteKit**
- **Express API**
- **Landing Pages**
- **Portfolio Sites**
- **Admin Dashboards**
- **E-commerce Stores**
- **Blog Platforms**
- **Chrome Extensions**

**Features**:
- Beautiful template selector modal
- Search and filter by tags
- One-click project generation
- Auto-populated prompts

**Components**: `app/lib/templates/index.ts`, `app/components/chat/TemplateSelector.tsx`

---

### 4. **Enhanced Preview with Device Modes** ✅
- **Desktop View**: Full-width responsive preview
- **Tablet View**: 768x1024 iPad simulation
- **Mobile View**: 375x667 iPhone simulation
- **Device Switching**: One-click toggle between modes
- **Realistic Frame**: Shadow effects for device preview
- **Smooth Transitions**: Animated resize between modes

**Components**: `app/components/workbench/Preview.tsx`

---

### 5. **Advanced File Management** ✅

#### File Search (Ctrl/Cmd + P)
- **Instant Search**: Find files by name or path
- **Keyboard Navigation**: Arrow keys + Enter
- **Beautiful Modal**: Modern search interface
- **Fast Results**: Shows up to 50 files instantly

#### File Upload
- **Drag & Drop**: Drop files directly into the interface
- **Multi-file Upload**: Upload multiple files at once
- **Visual Feedback**: Hover states and animations

**Components**: 
- `app/components/workbench/FileSearch.tsx`
- `app/components/workbench/FileUpload.tsx`

---

### 6. **Export/Import Projects** ✅
- **Export as ZIP**: Download entire project with one click
- **Project Packaging**: Automatically structures files correctly
- **Import Support**: Upload and restore projects
- **Toast Notifications**: Success/error feedback

**Utilities**: `app/utils/projectExport.ts`

---

### 7. **Enhanced Terminal** ✅
- **Multiple Tabs**: Up to 3 terminal instances
- **Tab Switching**: Easy navigation between terminals
- **Modern UI**: Pill-shaped tabs with icons
- **Collapsible**: Toggle terminal visibility (Ctrl/Cmd + J)

**Components**: `app/components/workbench/EditorPanel.tsx` (already enhanced)

---

### 8. **AI Assistant** ✅

#### Quick Actions:
- **Explain Code**: Get AI explanations
- **Improve Code**: Optimization suggestions
- **Fix Bugs**: Automated bug detection
- **Refactor**: Code restructuring
- **Add Comments**: Documentation generation
- **Write Tests**: Unit test generation

#### Custom Prompts:
- **Free-form AI Chat**: Ask anything about your code
- **Context-Aware**: Understands selected code
- **Beautiful UI**: Floating assistant panel

**Components**: `app/components/workbench/AIAssistant.tsx`

---

### 9. **Git Integration** ✅
- **Branch Visualization**: Current branch display
- **Change Counter**: Live count of modifications
- **Commit History**: Recent commits with metadata
- **Quick Actions**: Commit and push buttons
- **Status Overview**: Added/modified files summary

**Components**: `app/components/workbench/GitStatus.tsx`

---

### 10. **Collaboration & Sharing** ✅
- **Share Button**: Generate shareable links
- **Share Options**: Copy link, email, QR code
- **Expiration**: 7-day link validity
- **Access Control**: Read-only by default
- **Beautiful Modal**: Modern sharing interface

**Components**: `app/components/collaboration/ShareButton.tsx`

---

### 11. **Performance Optimizations** ✅

#### Implemented:
- **Debouncing**: Reduces expensive operation frequency
- **Throttling**: Controls high-frequency events
- **File Caching**: LRU cache with 5-minute TTL
- **Virtual Scrolling**: For large file lists
- **Batch Updates**: Request animation frame batching
- **Memoization**: Function result caching
- **Web Worker Support**: For heavy computations

**Utilities**: `app/utils/performance.ts`

---

## 🎨 Design System

### Color Scheme
- **Primary**: Accent blue gradients (#2BA6FF → #0D6FE8)
- **Backgrounds**: Depth-based layering system
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Shadows**: Elevated components with smooth shadows

### Animations
- **Duration**: 200-300ms for smooth transitions
- **Easing**: Cubic bezier for natural motion
- **Effects**: Fade, scale, slide, shimmer, pulse, glow

### Typography
- **Gradients**: Text gradients for emphasis
- **Hierarchy**: Clear size and weight differentiation
- **Readability**: Optimized for code and prose

---

## 🛠️ Technical Stack

- **Framework**: Remix (React)
- **Styling**: UnoCSS + SCSS
- **Animations**: Framer Motion
- **State**: Nanostores
- **Code Editor**: CodeMirror 6
- **Terminal**: Xterm.js
- **Container**: WebContainer API
- **AI**: Anthropic Claude

---

## 🚦 Quick Start

1. **Browse Templates**: Click "Browse Templates" on the home screen
2. **Start Coding**: AI generates your project
3. **Multi-file Editing**: Open multiple files with tabs
4. **Preview**: Switch between desktop/tablet/mobile views
5. **AI Help**: Click the AI button in the editor
6. **Search Files**: Press Ctrl/Cmd + P
7. **Export**: Download your project as ZIP
8. **Share**: Generate a shareable link

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + J` | Toggle Terminal |
| `Ctrl/Cmd + P` | Open File Search |
| `Ctrl/Cmd + S` | Save File |
| `Shift + Enter` | New line in prompt |

---

## 📦 Project Structure

```
app/
├── components/
│   ├── chat/              # Chat & messaging UI
│   │   ├── BaseChat.tsx   # Enhanced with templates
│   │   └── TemplateSelector.tsx
│   ├── collaboration/     # Sharing features
│   │   └── ShareButton.tsx
│   ├── editor/           # Code editor
│   ├── workbench/        # Main IDE interface
│   │   ├── FileTabs.tsx  # Multi-file tabs
│   │   ├── FileSearch.tsx # Quick file finder
│   │   ├── AIAssistant.tsx # AI helper
│   │   ├── GitStatus.tsx  # Git integration
│   │   └── Preview.tsx    # Enhanced preview
│   └── ui/               # Reusable components
├── lib/
│   ├── templates/        # Project templates
│   └── stores/           # State management
├── styles/
│   ├── animations.scss   # Animation library
│   └── variables.scss    # Design tokens
└── utils/
    ├── performance.ts    # Optimization utilities
    └── projectExport.ts  # Export functionality
```

---

## 🎯 Advantages Over bolt.new/lovable

### **Better UX**
✅ Modern glassmorphism design
✅ Smooth animations throughout
✅ Gradient branding
✅ Multi-file tab editing
✅ Device preview modes

### **More Features**
✅ 12 project templates
✅ AI assistant panel
✅ File search (Ctrl+P)
✅ Git visualization
✅ Share functionality
✅ Export as ZIP

### **Performance**
✅ File caching system
✅ Debounced operations
✅ Virtual scrolling
✅ Optimized rendering

### **Polish**
✅ Better animations
✅ Clearer UI hierarchy
✅ More intuitive workflows
✅ Professional design

---

## 🌟 Future Enhancements

- [ ] Real-time collaboration with live cursors
- [ ] Code snippets library
- [ ] Plugin system
- [ ] Cloud sync
- [ ] Advanced AI features (code review, security scan)
- [ ] Theme customization
- [ ] Workspace management

---

## 📄 License

MIT License - See LICENSE file

---

## 🙏 Credits

Built with ❤️ by the **Toost** team

Powered by:
- Remix
- WebContainer (StackBlitz)
- Anthropic Claude AI
- CodeMirror
- Framer Motion

---

## 📞 Support

For issues or questions, please open an issue on GitHub.

**Toost** - Where ideas begin! 🚀
