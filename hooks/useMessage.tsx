import react, { useState, useEffect } from "react";

const useMessage = (duration?: number) => {
  const messageDuration = duration || 3000;
  const [message, setMessage] = useState("");
  const [isMsgVisible, setIsMsgVisible] = useState(false);

  const pushMessage = (message: string) => {
    setMessage(message);
    setIsMsgVisible(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isMsgVisible) {
      timer = setTimeout(() => {
        setIsMsgVisible(false);
        setMessage("");
      }, messageDuration);
    }

    return () => clearTimeout(timer);
  }, [messageDuration, isMsgVisible]);

  return { message, isMsgVisible, pushMessage };
}

export default useMessage;