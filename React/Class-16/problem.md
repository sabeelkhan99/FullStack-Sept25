# AI-Assisted Text Editor (Frontend Take-Home Assignment)

## Objective
Build a web-based text editor that helps users improve and extend their writing using AI assistance. The application should demonstrate clean UI design, thoughtful AI integration, and clear state management using React.

## Core Requirements

1. Editor Area
    > Provide a text editor where users can write or paste content.
    > The editor should allow text selection.
2. AI Actions on Selected Text
 > When a user selects a portion of text, show a contextual action menu.
 > The menu should provide the following AI-powered actions:
    > Fix Grammar
    > Summarize
    > Expand

**Behavior**:

> On selecting an action, the editor text is sent to an AI service.
> The AI returns a suggestion based on the chosen action.
> The user should be able to:
    - Preview the AI-generated result
    - Apply it to the editor or
    - Discard it

3. AI Chat Sidebar
> Provide a chat interface where users can interact with AI for writing help.
> Users can ask questions such as:
    > “Improve the tone of this paragraph”
    > “Add an introduction”
> Each AI response should have an option to:
    > Append the content to the editor
    > Or ignore it

**Technical Expectations**

> Frontend: React
> AI Integration: Any publicly available AI API or service
> Focus Areas:
    > Component structure
    > State management
    > Clean separation of concerns
    > Thoughtful UX around AI suggestions

**Non-Goals (Explicitly Out of Scope)**

> Authentication
> Rich text formatting (bold, italics, etc.)
> Backend-heavy logic
> AI model training or tuning

**Evaluation Criteria (Implicit)**
> Clarity of approach
> Code readability
> Meaningful AI usage
> Ability to explain design decisions