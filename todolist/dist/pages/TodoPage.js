import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// App.tsx
import React, { useState, useEffect } from "react";
import { FaRegSquare, FaRegCheckSquare, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
const TodoPage = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const addTodo = () => {
        if (!input.trim())
            return;
        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false,
        };
        setTodos([newTodo, ...todos]);
        setInput("");
    };
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    // 미완료 및 완료된 할 일 분리
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);
    // 진행률 계산
    const progress = todos.length > 0
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
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative",
        transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
    };
    // 코드 블록 헤더 스타일 - 미니멀 디자인
    const headerStyle = {
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
        padding: "16px 0",
        textAlign: "center",
        color: colors.text,
        position: "relative",
        transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
    };
    // 푸터 스타일 - 미니멀 디자인
    const footerStyle = {
        position: "absolute",
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
        transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
    };
    // 할 일 항목 호버 스타일 - 미니멀 디자인
    const todoItemHoverStyle = {
        backgroundColor: darkMode ? "#2D3748" : "#F3F4F6",
    };
    // 테마 토글 버튼 스타일 - 미니멀 디자인
    const themeToggleStyle = {
        position: "absolute",
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
    _jsx("div", { className: "min-h-screen flex items-center justify-center p-6 bg-gray-100", children: _jsxs("div", { style: codeBlockStyle, children: [_jsxs("div", { style: headerStyle, children: [_jsx("h1", { className: "text-xl font-medium", style: { color: colors.text }, children: "TodoList" }), _jsx("button", { style: themeToggleStyle, onClick: toggleTheme, title: darkMode ? "라이트 모드로 전환" : "다크 모드로 전환", children: darkMode ? _jsx(FaSun, { size: "1em" }) : _jsx(FaMoon, { size: "1em" }) })] }), _jsxs("div", { style: contentStyle, children: [_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsxs("span", { style: { color: colors.text }, className: "text-sm", children: ["\uC9C4\uD589\uB960: ", progress, "%"] }), " ", _jsxs("span", { style: { color: colors.subtext }, className: "text-xs", children: [incompleteTodos.length, "\uAC1C \uD56D\uBAA9 \uB0A8\uC74C"] })] }), _jsx("div", { style: progressBarStyle })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h2", { style: sectionHeaderStyle, children: "\uD560 \uC77C" }), _jsx("div", { className: "space-y-2", children: incompleteTodos.length > 0 ? (incompleteTodos.map((todo) => (_jsxs("div", { onClick: () => toggleTodo(todo.id), style: todoItemStyle, onMouseOver: (e) => {
                                            e.currentTarget.style.backgroundColor =
                                                todoItemHoverStyle.backgroundColor;
                                        }, onMouseOut: (e) => {
                                            e.currentTarget.style.backgroundColor = colors.cardBg;
                                        }, children: [_jsx("div", { className: "mr-3", children: _jsx(FaRegSquare, { size: "0.9em", color: darkMode ? "#9CA3AF" : "#6B7280" }) }), _jsx("span", { style: { color: colors.text }, children: todo.text })] }, todo.id)))) : (_jsx("div", { style: {
                                            color: colors.subtext,
                                            backgroundColor: darkMode ? "#1F2937" : "#F3F4F6",
                                            padding: "12px",
                                            borderRadius: "6px",
                                            textAlign: "center",
                                            transition: "background-color 0.3s ease, color 0.3s ease",
                                        }, children: "\uBAA8\uB4E0 \uD560 \uC77C\uC744 \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4." })) })] }), completedTodos.length > 0 && (_jsxs("div", { children: [_jsx("h2", { style: sectionHeaderStyle, children: "\uC644\uB8CC\uB428" }), _jsx("div", { className: "space-y-2", children: completedTodos.map((todo) => (_jsxs("div", { onClick: () => toggleTodo(todo.id), style: todoItemStyle, onMouseOver: (e) => {
                                            e.currentTarget.style.backgroundColor =
                                                todoItemHoverStyle.backgroundColor;
                                        }, onMouseOut: (e) => {
                                            e.currentTarget.style.backgroundColor = colors.cardBg;
                                        }, children: [_jsx("div", { className: "mr-3", children: _jsx(FaRegCheckSquare, { size: "0.9em", color: darkMode ? "#9CA3AF" : "#6B7280" }) }), _jsx("span", { style: { color: colors.subtext }, className: "line-through", children: todo.text })] }, todo.id))) })] })), todos.length === 0 && (_jsx("div", { style: { color: colors.subtext }, className: "text-center py-8", children: _jsx("p", { children: "\uD560 \uC77C\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694." }) }))] }), _jsx("div", { style: footerStyle, children: _jsx("div", { className: "flex items-center h-full", children: _jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && addTodo(), placeholder: "\uD560 \uC77C\uC744 \uC785\uB825\uD558\uACE0 \uC5D4\uD130\uD0A4\uB97C \uB204\uB974\uC138\uC694", style: inputStyle, className: "placeholder-gray-400 center" }) }) })] }) }));
};
export default TodoPage;
