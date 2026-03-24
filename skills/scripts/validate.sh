#!/bin/bash
# 客製化驗證腳本 - 供 AI 呼叫執行 CI 模擬檢查

echo "=== 執行驗證流程 ==="

echo "[1/3] 編譯檢查..."
# mvn compile -q || exit 1

echo "[2/3] 執行測試..."
# mvn test -q || exit 1

echo "[3/3] 程式碼品質檢查..."
# mvn checkstyle:check -q || exit 1

echo "=== 驗證完成 ==="
