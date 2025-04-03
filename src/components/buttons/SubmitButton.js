// Icons
import { LoadingOutlined, CheckCircleFilled } from "@ant-design/icons";

const SubmitButton = ({ loading, success }) => {
  return (
    <button
      type="submit"
      className={`border-primary shadow-primary flex items-center gap-2 self-center rounded-3xl border px-3 py-1.5 text-sm font-semibold shadow-sm disabled:cursor-not-allowed ${success ? "bg-primary text-shadow" : "text-primary bg-black"}`}
      disabled={loading || success}
    >
      {success ? "Message Sent!" : loading ? "Sending..." : "Send Message"}
      {loading && <LoadingOutlined style={{ fontSize: "16px" }} />}
      {success && <CheckCircleFilled style={{ fontSize: "16px" }} />}
    </button>
  );
};

export default SubmitButton;
