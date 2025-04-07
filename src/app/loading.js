import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div className="text-primary flex h-screen w-full flex-col items-center justify-center gap-4 bg-black">
      <LoadingOutlined className="text-primary text-4xl" />
      <h1 className="text-primary">Loading...</h1>
    </div>
  );
};

export default Loading;
