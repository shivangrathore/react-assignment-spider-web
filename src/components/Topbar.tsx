export function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <img src="bitcoin.svg" />
      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-1">
          <button>
            <img src="/info-circle.svg" alt="" />
          </button>
          <button>
            <img src="/notification.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/user-avatar.jpg"
            alt=""
            className="size-14 rounded-full border-3 border-ascent"
          />
          <div className="flex flex-col text-white font-medium">
            <span>
              Hi, <span className="text-green-300">Muhammad Asad</span>
            </span>
            <span>welcome back!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
