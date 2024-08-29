import { useEffect, useState } from "react";
import { initJsdState } from "./init/init";
import InfiniteCanvas from "./InfiniteCanvas";

function InfiniteCanvasApp() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initJsdState({})
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return <div>Loading...</div>; // 显示加载状态
  }

  return (
    <>
      <InfiniteCanvas />
    </>
  );
}

export default InfiniteCanvasApp;
