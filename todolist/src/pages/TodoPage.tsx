// App.tsx
import React, { useState, useEffect } from "react";
import { FaRegSquare, FaRegCheckSquare, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoPage: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 미완료 및 완료된 할 일 분리
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  // 진행률 계산
  const progress =
    todos.length > 0
      ? Math.round((completedTodos.length / todos.length) * 100)
      : 0;

  // 테마 기반 색상 - 미니멀 스타일
  const colors = {
    primary: darkMode ? "#6B7280" : "#4B5563",
    text: darkMode ? "#E5E7EB" : "#111827",
    subtext: darkMode ? "#9CA3AF" : "#6B7280",
    background: darkMode ? "#1F2937" : "#FFFFFF",
    contentBg: darkMode ? "#111827" : "#F9FAFB",
    border: darkMode ? "#374151" : "#E5E7EB",
    cardBg: darkMode ? "#1F2937" : "#FFFFFF",
    cardBorder: darkMode ? "#374151" : "#E5E7EB",
    progressBg: darkMode ? "#4B5563" : "#ddd",
    progressFill: darkMode ? "#9CA3AF" : "#000",
  };

  // 코드 블록 스타일의 컨테이너 - 미니멀 디자인
  const codeBlockStyle = {
    width: "800px",
    height: "600px",
    backgroundColor: colors.background,
    border: `1px solid #000000`,
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column" as "column",
    overflow: "hidden",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative" as "relative",
    transition:
      "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
  };

  // 코드 블록 헤더 스타일 - 미니멀 디자인
  const headerStyle = {
    backgroundColor: colors.background,
    borderBottom: `1px solid ${colors.border}`,
    padding: "16px 0",
    textAlign: "center" as "center",
    color: colors.text,
    position: "relative" as "relative",
    transition:
      "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
  };

  // 푸터 스타일 - 미니멀 디자인
  const footerStyle = {
    position: "absolute" as "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    zIndex: 10,
    padding: 0,
    height: "56px",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
  };

  // 입력창 스타일 - 미니멀 디자인
  const inputStyle = {
    width: "100%",
    height: "100%",
    padding: "0 16px",
    backgroundColor: colors.background,
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: colors.text,
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  // 할 일 목록 영역 스타일 - 미니멀 디자인
  const contentStyle = {
    flex: 1,
    overflow: "auto",
    padding: "20px 24px",
    paddingBottom: "72px",
    backgroundColor: colors.contentBg,
    transition: "background-color 0.3s ease",
  };

  // 섹션 제목 스타일 - 미니멀 디자인
  const sectionHeaderStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    borderBottom: `1px solid ${colors.border}`,
    color: colors.text,
    transition: "border-color 0.3s ease, color 0.3s ease",
  };

  // 프로그레스 바 스타일 - 미니멀 디자인
  const progressBarStyle = {
    width: "100%",
    height: "8px",
    background: `linear-gradient(${colors.progressFill} 0 0) 0/${progress}% no-repeat ${colors.progressBg}`,
    marginBottom: "20px",
    borderRadius: "4px",
    transition: "background 0.3s ease",
  };

  // 할 일 항목 스타일 - 미니멀 디자인
  const todoItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    backgroundColor: colors.cardBg,
    borderRadius: "6px",
    marginBottom: "8px",
    cursor: "pointer",
    border: `1px solid ${colors.cardBorder}`,
    color: colors.text,
    transition:
      "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
  };

  // 할 일 항목 호버 스타일 - 미니멀 디자인
  const todoItemHoverStyle = {
    backgroundColor: darkMode ? "#2D3748" : "#F3F4F6",
  };

  // 테마 토글 버튼 스타일 - 미니멀 디자인
  const themeToggleStyle = {
    position: "absolute" as "absolute",
    top: "16px",
    right: "16px",
    background: "none",
    border: "none",
    color: colors.text,
    fontSize: "1rem",
    cursor: "pointer",
    padding: "4px",
    borderRadius: "4px",
    transition: "color 0.3s ease",
  };

  // CSS 애니메이션 키프레임 추가
  useEffect(() => {
    if (!document.getElementById("progress-animation")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "progress-animation";
      styleSheet.textContent = `
        @keyframes l1 {
          100% {background-size:100%}
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    // 고정된 라이트 배경
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      {/* 코드 블록 스타일의 Todo 앱 컨테이너 - 테마 변경은 여기서부터 적용 */}
      <div style={codeBlockStyle}>
        {/* 헤더 */}
        <div style={headerStyle}>
          <h1 className="text-xl font-medium" style={{ color: colors.text }}>
            TodoList
          </h1>

          {/* 테마 토글 버튼 */}
          <button
            style={themeToggleStyle}
            onClick={toggleTheme}
            title={darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {darkMode ? <FaSun size="1em" /> : <FaMoon size="1em" />}
          </button>
        </div>

        {/* 할 일 목록 - 스크롤 가능한 영역 */}
        <div style={contentStyle}>
          {/* 진행 상황 표시 */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span style={{ color: colors.text }} className="text-sm">
                진행률: {progress}%
              </span>{" "}
              <span style={{ color: colors.subtext }} className="text-xs">
                {incompleteTodos.length}개 항목 남음
              </span>
            </div>

            {/* 프로그레스 바 - 미니멀 디자인 */}
            <div style={progressBarStyle}></div>
          </div>

          {/* 미완료 할 일 섹션 */}
          <div className="mb-6">
            <h2 style={sectionHeaderStyle}>할 일</h2>

            {/* 할 일 목록 */}
            <div className="space-y-2">
              {incompleteTodos.length > 0 ? (
                incompleteTodos.map((todo) => (
                  <div
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={todoItemStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        todoItemHoverStyle.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = colors.cardBg;
                    }}
                  >
                    {/* 체크박스 아이콘 */}
                    <div className="mr-3">
                      <FaRegSquare
                        size="0.9em"
                        color={darkMode ? "#9CA3AF" : "#6B7280"}
                      />
                    </div>

                    {/* 할 일 텍스트 */}
                    <span style={{ color: colors.text }}>{todo.text}</span>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    color: colors.subtext,
                    backgroundColor: darkMode ? "#1F2937" : "#F3F4F6",
                    padding: "12px",
                    borderRadius: "6px",
                    textAlign: "center",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  모든 할 일을 완료했습니다.
                </div>
              )}
            </div>
          </div>

          {/* 완료된 할 일 섹션 */}
          {completedTodos.length > 0 && (
            <div>
              <h2 style={sectionHeaderStyle}>완료됨</h2>

              {/* 완료된 항목 목록 */}
              <div className="space-y-2">
                {completedTodos.map((todo) => (
                  <div
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={todoItemStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        todoItemHoverStyle.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = colors.cardBg;
                    }}
                  >
                    {/* 체크박스 아이콘 */}
                    <div className="mr-3">
                      <FaRegCheckSquare
                        size="0.9em"
                        color={darkMode ? "#9CA3AF" : "#6B7280"}
                      />
                    </div>

                    {/* 할 일 텍스트 */}
                    <span
                      style={{ color: colors.subtext }}
                      className="line-through"
                    >
                      {todo.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 할 일이 없는 경우 */}
          {todos.length === 0 && (
            <div style={{ color: colors.subtext }} className="text-center py-8">
              <p>할 일을 추가해보세요.</p>
            </div>
          )}
        </div>

        {/* 푸터 - 입력창 (절대 위치로 항상 하단에 고정) */}
        <div style={footerStyle}>
          <div className="flex items-center h-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              placeholder="할 일을 입력하고 엔터키를 누르세요"
              style={inputStyle}
              className="placeholder-gray-400 center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
