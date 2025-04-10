// Icons
import { LoadingOutlined, CheckCircleFilled } from "@ant-design/icons";

// Motion
import * as motion from "motion/react-client";

const SubmitButton = ({ loading, success }) => {
  return (
    <motion.button
      initial={{ scale: 1, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      type="submit"
      className={`border-primary shadow-primary flex items-center gap-2 self-center rounded-3xl border px-3 py-1.5 text-sm font-semibold shadow-sm disabled:cursor-not-allowed ${success ? "bg-primary text-shadow" : "text-primary bg-black"}`}
      disabled={loading || success}
    >
      {success ? "Message Sent!" : loading ? "Sending..." : "Send Message"}
      {loading && <LoadingOutlined style={{ fontSize: "16px" }} />}
      {success && <CheckCircleFilled style={{ fontSize: "16px" }} />}
    </motion.button>
  );
};

export default SubmitButton;
