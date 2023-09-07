import CreateDOM from "react-dom/client";
import ToastMessage from "./ToastMessage";

type Message = {
  id: number;
  message: string;
  type: "success" | "warning" | "error" | "info";
  exiting?: boolean;
};

class Toast {
  #rootElem;
  #root;
  #messages: Message[];
  #defaultDuration = 2000;

  #closeMessage(idToDelete: number) {
    const indexToDelete = this.#messages.findIndex(
      ({ id }) => id === idToDelete
    );
    this.#messages.splice(indexToDelete, 1);

    this.#updateRender();
  }

  #startExitAnimation(id: number) {
    const message = this.#messages.find((m) => m.id === id);
    if (message) {
      message.exiting = true;
    }
    this.#updateRender();
  }

  // 짧은 시간 내에 자동으로 사라지도록 하여 일단 사용하지 않겠습니다.
  #handleClose(id: number) {
    this.#startExitAnimation(id);

    setTimeout(() => {
      this.#closeMessage(id);
    }, 500);
  }

  #autoCloseMessage(duration: number, id: number) {
    setTimeout(() => {
      this.#handleClose(id);
    }, duration - 500);
  }

  #updateRender() {
    if (this.#root) {
      this.#root.render(
        <ToastMessage
          messages={this.#messages}
          closeMessage={this.#closeMessage.bind(this)}
        />
      );
    }
  }

  constructor() {
    if (typeof window !== "undefined") {
      this.#rootElem = document.getElementById("toast-root") as HTMLElement;
      if (!this.#rootElem) {
        throw new Error("Failed to find the toast-root element");
      }
      this.#root = CreateDOM.createRoot(this.#rootElem);
    }
    this.#messages = [];
  }

  success(message: string, duration = this.#defaultDuration) {
    const id = Date.now();
    this.#messages.push({
      id,
      message,
      type: "success",
    });
    this.#updateRender();
    this.#autoCloseMessage(duration, id);
  }

  error(message: string, duration = this.#defaultDuration) {
    const id = Date.now();
    this.#messages.push({
      id,
      message,
      type: "error",
    });
    this.#updateRender();
    this.#autoCloseMessage(duration, id);
  }
}

export default new Toast();
